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
};
