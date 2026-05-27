package org.acme.login;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import io.vertx.ext.web.RoutingContext;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.net.URI;
import java.io.InputStream;
import java.util.UUID;
import java.nio.file.Paths;
import org.jboss.resteasy.reactive.multipart.FileUpload;
import org.jboss.resteasy.reactive.RestForm;



@Path("/") // 기본 경로가 최상위 /
public class AuthResource {
    // GET / → 세션 유무에 따라 메인 페이지 분기
@GET
@Produces(MediaType.TEXT_HTML)
public Response mainPage() {
String loginUser = context.session().get("loginUser");
System.out.println("=== [GET /] 세션 ID : " +
context.session().id());
System.out.println("=== [GET /] loginUser : " + loginUser);
String htmlPath = (loginUser != null)
? "META-INF/resources/login/main_after_login.html"
: "META-INF/resources/main_index.html";
InputStream html =
getClass().getClassLoader().getResourceAsStream(htmlPath);
return Response.ok(html).build();
}



    
    @Inject
    RoutingContext context;

    // GET /login → 로그인 HTML 페이지 반환
    @GET
    @Path("/login") // 경로 명시
    @Produces(MediaType.TEXT_HTML) // 서버 → 클라
    public Response loginPage() {
        InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream("META-INF/resources/login/login.html");
        return Response.ok(html).build();
    }
    @POST
    @Path("/login_check")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED) // 클라 → 서버
    public Response loginCheck(
        @FormParam("username") String username,
        @FormParam("password") String password) {
        // [임시] 일단 로그인 성공 처리 (DB 체크 전)
        User user = User.findByUsername(username); // 아이디 조회
        
        if(user == null || !user.password.equals(password)) {
            return Response
                .seeOther(URI.create("/login?error=1"))
                .build();
        }

        context.session().put("loginUser", username);
        return Response
            .seeOther(URI.create("/"))
            .build();
    }


    

    @GET
    @Path("/after_login")
    @Produces(MediaType.TEXT_HTML)
    public Response afterLogin() {
        String loginUser = context.session().get("loginUser");
        System.out.println("=== 세션 ID : " + context.session().id());
        System.out.println("=== loginUser :" + loginUser);
        if (loginUser == null) {
            return Response.seeOther(URI.create("/login")).build();
        }
        InputStream html = getClass().getClassLoader().getResourceAsStream("META-INF/resources/login/main_after_login.html");
        return Response.ok(html).build();
    }
    
    @GET
    @Path("/logout")
    public Response logout() {

        System.out.println("=== 로그아웃 전 세션 ID : " + context.session().id());
        System.out.println("=== 로그아웃 전 세션 ID : " + context.session().id());
        System.out.println("=== 로그아웃 전 loginUser : " + context.session().get("loginUser"));

        context.session().destroy();

        System.out.println("=== 로그아웃 후 세션 ID : " + context.session().id());
        System.out.println("=== 로그아웃 후 세션 ID : " + context.session().id());
        System.out.println("=== 로그아웃 후 loginUser : " + context.session().get("loginUser"));

        return Response
            .seeOther(URI.create("/"))
            .build();
    }

    // AuthResource.java 아래 새로 추가
    @GET
    @Path("/register")
    @Produces(MediaType.TEXT_HTML)
    public Response registerPage() {
        InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream("META-INF/resources/login/register.html");
        return Response.ok(html).build();
    }

    @POST
    @Path("/register_check")
    @Transactional
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.TEXT_HTML)
    public Response registerCheck(
        @FormParam("username") String username,
        @FormParam("password") String password, // SHA-256 해시값
        @FormParam("email") String email,
        @FormParam("phone") String phone) {
        // ① 아이디 중복 체크
        if (User.findByUsername(username) != null) {
            return Response.seeOther(URI.create("/register?error=duplicate_username")).build();
        }
        // ② 이메일 중복 체크
        if (User.findByEmail(email) != null) {
            return Response.seeOther(URI.create("/register?error=duplicate_email")).build();
        }
        // ③ DB 삽입
        User newUser = new User();
        newUser.username = username;
        newUser.password = password; // 해시값 저장
        newUser.email = email;
        newUser.phone = phone;
        newUser.persist();
        // ④ 가입 완료 페이지로 이동
        return Response.seeOther(URI.create("/register_success")).build();
    }

    @GET
    @Path("/register_success")
    @Produces(MediaType.TEXT_HTML)
    public Response registerSuccess() {
        InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream("META-INF/resources/login/register_success.html");
        return Response.ok(html).build();
    }

    @GET
    @Path("/profile")
    @Produces(MediaType.TEXT_HTML)
    public Response profilePage() {
        String loginUser = context.session().get("loginUser");
        if (loginUser == null) {
            return Response.seeOther(URI.create("/login")).build();
        }
        InputStream html = getClass()
            .getClassLoader()
            .getResourceAsStream("META-INF/resources/login/profile.html");
        return Response.ok(html).build();
    }

    @POST
    @Path("/profile/upload")
    @Transactional
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response profileUpload(@RestForm("profileImage") FileUpload file) {
        // ① 세션 체크
        String loginUser = context.session().get("loginUser");
        if (loginUser == null) {
            return Response.seeOther(URI.create("/login")).build();
        }
        try {
            // ② 확장자 검사
            String original = file.fileName();
            String ext = original.substring(original.lastIndexOf('.') + 1).toLowerCase();
            if (!ext.matches("jpg|jpeg|png|gif|webp")) {
                return Response.seeOther(URI.create("/profile?error=invalid_type")).build();
            }
            // ③ 파일 크기 검사 (5MB)
            if (file.size() > 5 * 1024 * 1024) {
                return Response.seeOther(URI.create("/profile?error=too_large")).build();
            }
            // ④ UUID 파일명 생성 + 저장
            String newFileName = UUID.randomUUID() + "." + ext;
            java.nio.file.Path uploadDir = Paths.get(
                "src/main/resources/META-INF/resources/uploads/profile");
            java.nio.file.Files.createDirectories(uploadDir);
            java.nio.file.Files.copy(file.uploadedFile(),
                uploadDir.resolve(newFileName),
                java.nio.file.StandardCopyOption.REPLACE_EXISTING);
            // ⑤ DB에 파일명 저장
            User user = User.findByUsername(loginUser);
            user.profileImage = newFileName;
            user.persist();
        } catch (Exception e) {
            e.printStackTrace();
            return Response.seeOther(URI.create("/profile?error=upload_failed")).build();
        }
        return Response.seeOther(URI.create("/profile")).build();
    }

    // 프로필 정보를 JSON으로 반환하는 API
    @GET
    @Path("/api/profile")
    @Produces(MediaType.APPLICATION_JSON)
    public Response profileApi() {
        String loginUser = context.session().get("loginUser");
        if (loginUser == null) {
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }
        User user = User.findByUsername(loginUser);
        String json = String.format(
            "{\"username\":\"%s\",\"email\":\"%s\",\"phone\":\"%s\",\"profileImage\":\"%s\"}",
            user.username,
            user.email != null ? user.email : "",
            user.phone != null ? user.phone : "",
            user.profileImage != null ? user.profileImage : "default.png"
        );
        return Response.ok(json).build();
    }

}



