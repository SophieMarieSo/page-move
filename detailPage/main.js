const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const goHome = document.getElementById('go-home');

if (id) {
    document.getElementById(
        'idText'
    ).textContent = `책 ID: ${decodeURIComponent(id)}`;
} else {
    document.getElementById('idText').textContent = 'id가 없습니다.';
}

goHome.addEventListener('click', () => {
    window.location.href = `/`;
});
