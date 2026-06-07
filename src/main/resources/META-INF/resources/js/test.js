// showToast: Bootstrap5 Toast 알림 함수
// type: 'success'(초록) / 'danger'(빨강) / 'warning'(노랑)
function showToast(message, type = 'success') {
    const toastEl   = document.getElementById('liveToast');
    const toastBody = document.getElementById('toastBody');
    if (!toastEl || !toastBody) return;

    // 색상 클래스 변경
    toastEl.className = `toast align-items-center text-white bg-${type} border-0`;
    toastBody.textContent = message;

    // Bootstrap Toast 실행
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();
}
