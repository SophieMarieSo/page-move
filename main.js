const input = document.getElementById('keyword');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const keyword = input.value.trim();
    if (keyword) {
        window.location.href = `/resultPage/?keyword=${encodeURIComponent(
            keyword
        )}`;
    } else {
        alert('검색어를 입력하세요.');
    }
});
