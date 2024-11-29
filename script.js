const body = document.querySelector('body');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const cartBtn = document.querySelector('.cartBtn');
const number = document.querySelector('.number');
const minusIcon = document.querySelector('.minusIcon');
const plusIcon = document.querySelector('.plusIcon');
const addToCart = document.querySelector('.addToCart');
const addToCartBtn = document.querySelector('.addToCartBtn');
const emptyCart = document.querySelector('.emptyCart');
const cartDisplay = document.querySelector('.cartDisplay');
const price = document.querySelector('.price');
const itemsSelected = document.querySelector('.itemsSelected');
const totalPrice = document.querySelector('.totalPrice');
const deleted = document.querySelector('.delete');
const items = document.querySelector('.items');

let increase = 0;

function updateOrderTotal() {
  if (increase > 0) {
    emptyCart.classList.add("hidden");
    cartDisplay.classList.remove("hidden");
  } else {
    emptyCart.classList.remove("hidden");
    cartDisplay.classList.add("hidden");
  }
}
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    // menuBtn.classList.toggle('open')
})
closeBtn.addEventListener('click',()=>{
    menu.classList.toggle('hidden');
    // menuBtn.classList.toggle('open')
})

addToCartBtn.addEventListener('click',()=>{
    // increase++;
    // number.textContent = increase;
    if(increase === 0){
        items.classList.add('hidden');
    } else{
        items.classList.remove('hidden');
    }
    updateValue(increase);
})

function update(increase){
    number.textContent = increase;
    items.textContent = increase;
    itemsSelected.textContent = increase;
    totalPrice.textContent = (increase*(125)).toFixed(2);
}

function updateValue(increase){
    update(increase);
    updateOrderTotal()
}
plusIcon.addEventListener('click',()=>{
    increase++;
    update(increase);
  })
minusIcon.addEventListener('click',()=>{
    if(increase > 0){
      increase--;
      if(increase === 0){
        items.classList.add('hidden');
        emptyCart.classList.remove("hidden");     
        cartDisplay.classList.add("hidden");
      }
      update(increase);
    }
})
cartBtn.addEventListener('click',()=>{
    addToCart.classList.toggle('hidden');
})
deleted.addEventListener('click',()=>{
    increase = 0;
    items.classList.add('hidden');
    updateOrderTotal();
    updateValue(increase);
}) ;   

// Slider
const slides = document.querySelectorAll('.slide');
const lides = document.querySelectorAll('.lide');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');
const thumbnailImg = document.querySelector('.thumbnail-img');
const thumbnailImage = document.querySelector('.thumbnail-img-2');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
const closeButton = document.querySelector('.closeButton');
const slider = document.querySelector('.slider');
const box = document.querySelector('.box');
const div1 = document.querySelector('.div-1');

// console.log(btnRight);

let curSlide = 0;
const maxSlide = slides.length;
const maxLide = lides.length;
// console.log(maxLide);

// function createThumbnailsBtn(){
//     slides.forEach(function(_, i) {
//         thumbnailImg.insertAdjacentHTML('beforeend', 
//         `<button class="thumbnail-btn" data-slide="${i}"></button>`
//         );
//     });
// };
// createThumbnailsBtn();

function goToSlide (slide){
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`)
    );
};
goToSlide(0);

function nextSlide(){
    if(curSlide === maxSlide - 1){
        curSlide = 0;
    } else{
        curSlide++;
    }
    goToSlide(curSlide) ;
}
function prevSlide(){
    if(curSlide === 0){
        curSlide = maxSlide - 1;
    } else{
        curSlide--;
    }
    goToSlide(curSlide) ;
}

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',prevSlide);

thumbnailImg.addEventListener('click', function(e) {
    if(e.target.classList.contains('thumbnail-btn')){
        const { slide } = e.target.dataset;
        goToSlide (slide);
        // goTolide(lide);
        // input.classList.add('active')
    }
});

function goToLide(lide){
    lides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i-lide)}%)`)
    );
};
goToLide(0);

function nextLide(){
    if(curSlide === maxLide - 1){
        curSlide = 0;
    } else{
        curSlide++;
    }
    goToLide(curSlide) ;
}
function prevLide(){
    if(curSlide === 0){
        curSlide = maxLide - 1;
    } else{
        curSlide--;
    }
    goToLide(curSlide) ;
}

rightBtn.addEventListener('click',nextLide);
leftBtn.addEventListener('click',prevLide);

thumbnailImage.addEventListener('click', function(e) {
    if(e.target.classList.contains('thumbnail-button')){
        const { slide } = e.target.dataset;
        goToLide (slide);
        // input.classList.add('active')
    }
});

slider.addEventListener('click', function(e) {
    box.classList.remove('hidden');
    div1.classList.add('background');
    div1.classList.add('blure')
})
closeButton.addEventListener('click', function(e) {
    box.classList.add('hidden');
    div1.classList.remove('background');
})