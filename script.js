
function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(function(content) {
        content.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
}

function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('#bookList li');
    books.forEach(function(book) {
        const title = book.querySelector('.details span').textContent.toLowerCase();
        if (title.includes(query)) {
            book.style.display = 'grid';
        } else {
            book.style.display = 'none';
        }
    });
}

function filterBooks() {
    const category = document.getElementById('filterCategory').value;
    const books = document.querySelectorAll('#bookList li');
    books.forEach(function(book) {
        const title = book.querySelector('.details span').textContent.toLowerCase();
        if (category === '' || title.includes(category)) {
            book.style.display = 'grid';
        } else {
            book.style.display = 'none';
        }
    });
}

function submitReview() {
    const title = document.getElementById('reviewBookTitle').value;
    const review = document.getElementById('reviewText').value;
    if (title && review) {
        document.getElementById('notification').textContent = 'Resenha enviada com sucesso!';
        document.getElementById('notification').className = 'notification success show';
    } else {
        document.getElementById('notification').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('notification').className = 'notification error show';
    }
    setTimeout(function() {
        document.getElementById('notification').classList.remove('show');
    }, 3000);
}

function submitSuggestion() {
    const title = document.getElementById('suggestTitle').value;
    const author = document.getElementById('suggestAuthor').value;
    const category = document.getElementById('suggestCategory').value;
    if (title && author && category) {
        document.getElementById('notification').textContent = 'Sugestão enviada com sucesso!';
        document.getElementById('notification').className = 'notification success show';
    } else {
        document.getElementById('notification').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('notification').className = 'notification error show';
    }
    setTimeout(function() {
        document.getElementById('notification').classList.remove('show');
    }, 3000);
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username && password) {
        document.getElementById('notification').textContent = 'Login efetuado com sucesso!';
        document.getElementById('notification').className = 'notification success show';
    } else {
        document.getElementById('notification').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('notification').className = 'notification error show';
    }
    setTimeout(function() {
        document.getElementById('notification').classList.remove('show');
    }, 3000);
}


