var swiper = new Swiper(".consoles-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },

});

window.onscroll = () =>{
    if(window.scrollY > 70){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}



var swiper = new Swiper(".virtuais-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".virtuais2-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".home-slider", {
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Get the modal
var modal = document.getElementById("modal-mario");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
        var{image, title} = item;
        return(
            `<a href="#" class="card">
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




document.querySelector('#search').onclick = () => {
    searchSection.classList.toggle('active');
}