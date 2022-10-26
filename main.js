//changes the font size
let spanMess = document.querySelector('.mess-with-me');
spanMess.style.fontSize = "30px";

//turns background green
let paraMess = document.querySelector('p.mess-with-me')
paraMess.style.background = "green";

//hides dinosaur and takes up whitesspace
let image2 = document.querySelector('#hide-me')
image2.style.display = "none";

//changes pixel to 324
let image1 = document.querySelector('#triceratops')
image1.style.width = '324px';

//event listener feathered dinosaur


spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange";
});


image1.addEventListener('click', function(){

    image1.style.border = '3px solid red'
});


let feather = document.querySelector('#feathers');
feather.addEventListener('click', function(){

    feather.style.opacity = ".5";
});

let dinosaurRow = document.querySelector('#row')
let toggle = document.querySelector('#toggle')


toggle.addEventListener('click', function(){

    if (dinosaurRow.style.background === "purple"){

        dinosaurRow.style.background = "green"
    } else {
        dinosaurRow.style.background = "purple"
      }


})

let biggify = document.querySelector('#biggify')
biggify.addEventListener('mouseover', function(){

    biggify.style.width = "200px";
})



biggify.addEventListener('mouseout', function(){

    biggify.style.width = "162px"
   
});


