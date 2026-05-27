window.onload = function () {
  fetch("/api/profile") // 서버에서 사용자 정보 요청 (비동기 i/o)
    .then((res) => {
      if (!res.ok) { // 인증 실패 시 로그인 페이지로 이동
        location.href = "/login";
        return null;
      }
      return res.json(); // json 파싱
    })
    .then((data) => {
      if (!data) return;
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
