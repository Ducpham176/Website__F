// Xử lí sự kiện Search
let isShown = false;

function SearchToggle() {
const searchCard = document.querySelector('.SearchCard');
if (!isShown) {
    searchCard.style.display = 'flex';
    isShown = true;
} else {
    searchCard.style.display = 'none';
    isShown = false;
}
}
// -----------------------------------------------
const SearchHd = document.querySelector('#SearchHd');
SearchHd.addEventListener('click', SearchToggle);


document.querySelector('.logoWeb').addEventListener('click', () => {
    window.location.reload();
})
document.getElementById('Profile').addEventListener('click', () => {
    window.location.href = 'Sharecode.html';
})
document.getElementById('SlideKt').addEventListener('click', () => {
    window.location.href = 'Sharecode1.html';
})
document.getElementById('Marvel').addEventListener('click', () => {
    window.location.href = 'Sharecode2.html';
})
document.getElementById('Qrcode').addEventListener('click', () => {
    window.location.href = 'Sharecode3.html';
})
document.getElementById('websiteHTML').addEventListener('click', () => {
    window.location.href = 'Sharecode4.html';
})
document.getElementById('websiteJS').addEventListener('click', () => {
    window.location.href = 'Sharecode5.html';
})
window.addEventListener('scroll', () => {
    if(window.scrollY > 1)
    {
        document.getElementById('Replaye').style.display = 'block';
    }
    else {
        document.getElementById('Replaye').style.display = '';
    }
})
document.getElementById('home').addEventListener('click', () => {
    window.location.href = 'index.html';
})
document.getElementById('contactMy').addEventListener('click', () => {
    window.location.href = 'contact.html';
})
document.getElementById('Sharecode').addEventListener('click', () => {
    window.location.href = 'AllSharecode.html';
})
document.getElementById('CsltC').addEventListener('click', () => {
    window.location.href = 'CsltC.html';
})
document.getElementById('KtltC').addEventListener('click', () => {
    window.location.href = 'KtltC.html';
})
document.getElementById('easyGit').addEventListener('click', () => {
    window.location.href = 'Git.html';
})
document.querySelector('.down').addEventListener('click', () => {
    document.documentElement.scrollIntoView({block: 'end', behavior: 'smooth'})
})
document.getElementById('createGit').addEventListener('click', () => {
    window.location.href = 'Taolinkweb.html'
})
document.getElementById('cssTrick').addEventListener('click', () => {
    window.location.href ='csshtml.html'
})
document.getElementById('htmlTrick').addEventListener('click', () => {
    window.location.href = 'htmlcss.html';
})
document.getElementById('jsCode').addEventListener('click', () => {
    window.location.href = 'jscode.html';
})

// Xử lí Logic S e a r c h W e b i t e
const searchElement = document.getElementById('searchCyb');
const dataKeyCardAll = document.querySelectorAll('[data-key]');
const btnOk = document.querySelector('.btn_ok');
let hasFoundResult = false;

btnOk.addEventListener('click', () => {
if (hasFoundResult) {
    window.location.href = 'search.html';
}
});

searchElement.addEventListener('keydown', (event) => {
if (event.ctrlKey && event.key === "a") {
    searchElement.select();
} else if (event.ctrlKey && (event.key === "Delete" || event.key === "Backspace")) {
    console.clear();
}

const valueSearch = event.target.value.toLowerCase();

for (let i = 0; i < dataKeyCardAll.length; i++) {
    const valueDataKey = dataKeyCardAll[i].getAttribute('data-key').toLowerCase();
    
    if (valueDataKey.includes(valueSearch)) {
    hasFoundResult = true;
    break;
    } else {
    hasFoundResult = false;
    }
}

if (event.keyCode === 13 && hasFoundResult) {
    window.location.href = 'search.html';
}
});
