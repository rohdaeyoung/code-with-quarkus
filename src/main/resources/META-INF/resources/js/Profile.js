window.onload = function () {
  fetch("/api/profile") // 회원 정보 읽고, json 형태 변환 후 화면 갱신(비동기 처리)
    .then((res) => {
      if (!res.ok) { // 인증 실패 시 로그인 페이지로 이동
        location.href = "/login";
        return null;
      }
      return res.json(); // json 파싱
    })
    .then((data) => {
      if (!data) return;

      // 네비게이션 프로필 링크에 툴팁으로 사용자 이름 표시
      const profileLink = document.getElementById("profileNavLink");
      if (profileLink) {
        profileLink.setAttribute("data-bs-title", "👋 " + data.username);
        new bootstrap.Tooltip(profileLink);
      }

      // DOM 조작
      document.getElementById("infoUsername").textContent = data.username || "";
      document.getElementById("infoEmail").textContent    = data.email    || "";
      document.getElementById("infoPhone").textContent    = data.phone    || "";

      if (data.profileImage && data.profileImage !== "default.png") { // null 체크
        document.getElementById("profileImg").src =
          "/uploads/profile/" + data.profileImage;
      }
    });

  // URL 파라미터 오류 감지 → uploadErrorMsg div 표시
  const params = new URLSearchParams(window.location.search);
  const error  = params.get("error");

  const errorDiv = document.getElementById("uploadErrorMsg");
  if (error && errorDiv) {
    let message = "";
    if      (error === "invalid_type")  message = "jpg, png, gif, webp 파일만 가능합니다.";
    else if (error === "too_large")     message = "파일 크기는 5MB 이하여야 합니다.";
    else if (error === "upload_fail")   message = "업로드 실패. 다시 시도해주세요.";

    if (message) {
      errorDiv.textContent = message;
      errorDiv.classList.remove("d-none"); // 숨김 해제 → 빨간 박스 표시
    }
  }
};
