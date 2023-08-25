
  
var menu = document.querySelector('.menu');
var menuList = document.querySelector('.menu-items');

var menuOpened = false;

// //hover over the menu icon -- opens the mini menu
// menu.addEventListener('mouseover', function(){
//   menuList.style.left = '0';

// });       
// //meave the menu-icon hides mini-icons
// menu.addEventListener('mouseleave', function(){
//   menuList.style.left = '-81px';

// });       

// menuList.addEventListener('mouseover', function(){
//   menuList.style.width = '300px';
//   menuList.style.left = '0px';
// });       

// menuList.addEventListener('mouseleave', function(){
//   menuList.style.width = '80px';
//   menuList.style.left = '-81px';
// });   


//   menuList.style.width = '80px';
//   menuList.style.left = '-81px';
  
//   menu.addEventListener('click', function(){
//   if(menuList.style.left == '0px'){
//       menuList.style.width = '80px';
//       menuList.style.left = '-81px';
//   }else{
//       menuList.style.width = '300px';
//       menuList.style.left = '0px';
//   }
// });


//hover over the menu icon -- opens the mini menu
menu.addEventListener('mouseover', function(){
    menuList.style.left = '0';
  
  });       
  //meave the menu-icon hides mini-icons
  menu.addEventListener('mouseleave', function(){
    menuList.style.left = '-81px';
  
  });       
  
  menuList.addEventListener('mouseover', function(){
    menuList.style.width = '300px';
        menuList.style.overflow = 'visible';
        menuList.style.left = '0px';
  });       
  
  menuList.addEventListener('mouseleave', function(){
    menuList.style.width = '80px';
        menuList.style.overflow = 'hidden';
        menuList.style.left = '-81px';
  });   
  
  
    menuList.style.width = '80px';
    menuList.style.left = '-81px';
    
    menu.addEventListener('click', function(){
    if(menuList.style.left == '0px'){
        menuList.style.width = '80px';
        menuList.style.left = '-81px';
        menuList.style.overflow = 'hidden';
    }else{
        menuList.style.width = '300px';
        menuList.style.left = '0px';
        menuList.style.overflow = 'visible';
    }
  });