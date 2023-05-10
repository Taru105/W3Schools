var prevButton = document.querySelector(".Prev");
var nextButton = document.querySelector(".Next");
prevButton.addEventListener("click",function(){
    var button = this.innerHTML;    
    var audio = "sounds/tom-4.mp3";
    var sound = new Audio(audio);
    sound.play();
    buttonanimation(button)
})
nextButton.addEventListener("click",function(){
    var button = this.innerHTML;
    var audio = "sounds/tom-1.mp3";
    var sound = new Audio(audio);
    sound.play();
    buttonanimation(button)
})
function buttonanimation(button){
    var buttonanim = document.querySelector("."+button);
    buttonanim.classList.add("pressed"); // adding classList is important because t allows the manipulation
    setTimeout(function(){
        buttonanim.classList.remove("pressed");
    },1500)
    // $("."+button).on("click",function(){
    //     $("."+button).slideUp();  
    //     $("."+button).slideDown();      
    // })
    // $("."+button).show();
}
