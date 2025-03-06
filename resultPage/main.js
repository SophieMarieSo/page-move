const params = new URLSearchParams(window.location.search);
const keyword = params.get('keyword');
const bookList = document.getElementById('bookList');
const goHome = document.getElementById('go-home');

const books = [
    {
        id: 1,
        title: '책1',
        author: '저자1',
        date: '2023-01-01',
        desc: '이것은 책1의 설명입니다.',
        cover: 'cover1.jpg',
    },
    {
        id: 2,
        title: '책2',
        author: '저자2',
        date: '2023-02-01',
        desc: '이것은 책2의 설명입니다.',
        cover: 'cover2.jpg',
    },
    {
        id: 3,
        title: '책3',
        author: '저자3',
        date: '2023-03-01',
        desc: '이것은 책3의 설명입니다.',
        cover: 'cover3.jpg',
    },
    {
        id: 4,
        title: '책4',
        author: '저자4',
        date: '2023-04-01',
        desc: '이것은 책4의 설명입니다.',
        cover: 'cover4.jpg',
    },
    {
        id: 5,
        title: '책5',
        author: '저자5',
        date: '2023-05-01',
        desc: '이것은 책5의 설명입니다.',
        cover: 'cover5.jpg',
    },
    {
        id: 6,
        title: '책6',
        author: '저자6',
        date: '2023-06-01',
        desc: '이것은 책6의 설명입니다.',
        cover: 'cover6.jpg',
    },
    {
        id: 7,
        title: '책7',
        author: '저자7',
        date: '2023-07-01',
        desc: '이것은 책7의 설명입니다.',
        cover: 'cover7.jpg',
    },
    {
        id: 8,
        title: '책8',
        author: '저자8',
        date: '2023-08-01',
        desc: '이것은 책8의 설명입니다.',
        cover: 'cover8.jpg',
    },
    {
        id: 9,
        title: '책9',
        author: '저자9',
        date: '2023-09-01',
        desc: '이것은 책9의 설명입니다.',
        cover: 'cover9.jpg',
    },
    {
        id: 10,
        title: '책10',
        author: '저자10',
        date: '2023-10-01',
        desc: '이것은 책10의 설명입니다.',
        cover: 'cover10.jpg',
    },
];

if (keyword) {
    document.getElementById(
        'resultText'
    ).textContent = `검색 결과: ${decodeURIComponent(keyword)}`;

    books.forEach((book) => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.innerHTML = `<img src="${book.cover}" alt="${book.title}" data-id="${book.id}">`;
        bookList.appendChild(div);
    });

    bookList.addEventListener('click', (event) => {
        const bookId = event.target.dataset.id;
        const book = books.find((b) => b.id == bookId);
        if (book) {
            window.location.href = `/detailPage/?id=${bookId}`;
        }
    });
} else {
    document.getElementById('resultText').textContent = '검색어가 없습니다.';
}

goHome.addEventListener('click', () => {
    window.location.href = `/`;
});
