
$('#smarttab').smartTab({

 
// Selected Tab, 0 = first tab
selected: 0, 

// Theme
theme:'default',

// Or 'vertical'
orientation:'vertical',

// Justified layout for tabs
justified:true,

// Auto adjust content height
autoAdjustHeight:false,

// Supports for Back button
backButtonSupport:true,
 
// Enables URL hash
enableURLhash:true,
   
// Configs animations here
transition: {

  // none, fade, slide-horizontal, slide-vertical, slide-swing
  animation:'fade',

  // transition speed
  speed:'200',

  // easing function
  easing:''

},


});


const storyArrow = document.querySelectorAll('.story-arrow');
const storyItemContent = document.querySelectorAll('.story__item-content');

storyArrow.forEach((storyArrow, index) => {
  storyArrow.addEventListener('click', event => {
    storyArrow.classList.toggle('active'),
    storyItemContent[index].classList.toggle('active');
  });
});

const linkMenu = document.querySelectorAll('.nav li');

linkMenu.forEach(link => {
  link.addEventListener('click', event => {
    linkMenu.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});


const helpItem = document.querySelectorAll('.help__item-one');
const helpItemTwo = document.querySelectorAll('.help__item-two');

helpItem.forEach((helpItem, index) => {
  helpItem.addEventListener('click', event => {
    helpItem.classList.toggle('active'),
    helpItemTwo[index].classList.toggle('active');
  });
});


$('.tab__title').on('click', function() {
  setTimeout(() => {
    $('.personal__menu').toggleClass('active');
  }, 0)
});

$(document).on('click', function(event) {
  if ($('.personal__menu').hasClass('active') && !event.target.closest('.personal__menu')) {
    $('.personal__menu').removeClass('active');
  }
});

$('.nav li a').on('click', function() {
  $('.personal__menu').removeClass('active');
});

$('.check-document button').on('click', function(){
  $('.order__info-3').toggleClass('active');
  
})