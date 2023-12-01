var img1 = document.getElementById('img-1');
var img2 = document.getElementById('img-2');
var img3 = document.getElementById('img-3');
var img4 = document.getElementById('img-4');
var img5 = document.getElementById('img-5');

img1.onclick = function(){
    document.getElementById('main-img').src = 'Videos/Super Mario Bros. Wonder - Nintendo Direct 6.21.2023.mp4';
}

img2.onclick = function(){
    document.getElementById('main-img').src = 'Videos/Super Mario Bros. Wonder – Launch Trailer – Nintendo Switch.mp4';
}

img3.onclick = function(){
    document.getElementById('main-img').src = 'Imagens/small-images/mario-verso-small.jpg';
}

img4.onclick = function(){
    document.getElementById('main-img').src = 'Imagens/small-images/mario-verso-small.jpg';
}

img5.onclick = function(){
    document.getElementById('main-img').src = 'Imagens/small-images/mario-verso-small.jpg';
}


const product = [
    {
        id: 0,
        image: 'Imagens/amongus.jpeg',
        title: 'Among Us',
    },
    {
        id: 1,
        image: 'Imagens/raft.jpg',
        title: 'Raft',
    },  
    {
        id: 2,
        image: 'Imagens/the-sims.jpeg',
        title: 'The sims'
    },
    {
        id: 3,
        image: 'Imagens/mario-wonder-banner.avif',
        title: 'Super Mario Bros Wonder',
        link: 'page-1.html'
    },
]

let searchSection = document.querySelector('.search-section');


const categories = [...new Set(product.map((item) => {return item}))]
document.getElementById('search-box').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return(item.title.toLowerCase().includes(searchData))
    })
    displayItem(filteredData)
});

const showSearch = function(){
    searchSection.classList.toggle('active');
}

document.getElementById('search-box').addEventListener('input', showSearch);

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var{link, image, title} = item;
        return(
            `<a href="${link}" class="card">
                    <div class="image">
                        <img src=${image} alt="">
                    </div>
                    <div class="content">
                        <h3>${title}</h3>
                    </div>
                </a>`
        )
    }).join('')
};
displayItem(categories);



let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}
