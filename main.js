//variables
let spanMess = document.querySelector('.mess-with-me');
let paraMess = document.querySelector('p.mess-with-me');
let image2 = document.querySelector('#hide-me');
let image1 = document.querySelector('#triceratops')
let feather = document.querySelector('#feathers');
let dinosaurRow = document.querySelector('#row')
let toggle = document.querySelector('#toggle')
let biggify = document.querySelector('#biggify')

//changes the font size
spanMess.style.fontSize = "30px";

//turns background green
paraMess.style.background = "green";

//hides dinosaur and takes up whitesspace
image2.style.display = "none";

//changes pixel to 324
image1.style.width = '324px';

//event listener feathered dinosaur

//onclick change to orange
spanMess.addEventListener('click', function(){
    spanMess.style.color = "orange";
});

//on click add a border
image1.addEventListener('click', function(){

    image1.style.border = '3px solid red'
});
//on click make opacity .5

feather.addEventListener('click', function(){

    feather.style.opacity = ".5";
});

// changes backrground from white to purple then back 

toggle.addEventListener('click', function(){

    if (dinosaurRow.style.background === "purple"){

        dinosaurRow.style.background = "white"
    } else {
        dinosaurRow.style.background = "purple"
      }


})

//makes image bigger on mouse over
biggify.addEventListener('mouseover', function(){

    biggify.style.width = "200px";
})


//make original size on mouseout
biggify.addEventListener('mouseout', function(){

    biggify.style.width = "162px"
   
});


