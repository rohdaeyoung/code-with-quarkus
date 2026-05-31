function validateAndLogin() {
  let valid = true;

  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;

  // ① 아이디 유효성 검사 (4~20자 영문/숫자만 허용)
  const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
  if (!usernameRegex.test(username)) {
    showError('usernameInput', 'usernameMsg', '4~20자 영문/숫자만 입력해주세요.');
    valid = false;
  } else {
    clearError('usernameInput');
  }

  // ② 패스워드 유효성 검사 (8자 이상, 영문 + 숫자 + 특수문자 포함)
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) {
    showError('passwordInput', 'passwordMsg', '8자 이상, 영문+숫자+특수문자(!@#$%^&*)를 포함해주세요.');
    valid = false;
  } else {
    clearError('passwordInput');
  }

  // ③ 두 항목 모두 통과 시 로그인 실행
  if (valid) submitLogin();
}

function showError(fieldId, msgId, message) {
  const field = document.getElementById(fieldId);
  if (field) field.classList.add('is-invalid');
  const msg = document.getElementById(msgId);
  if (msg) msg.textContent = message;
}

function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  if (field) {
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  }
}

// 로그인 실패 시 URL의 error 파라미터 감지 → 오류 메시지 표시
window.addEventListener('load', function () {
  const params = new URLSearchParams(window.location.search);
  const error  = params.get('error');

  if (error === '1') {
    // 패스워드 필드에 오류 표시 (아이디/패스워드 중 어느 쪽인지 모르므로 패스워드에 표시)
    showError('passwordInput', 'passwordMsg', '아이디 또는 패스워드가 올바르지 않습니다.');
  }
});
