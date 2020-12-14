// JQUERY BUTTON CLICK EVENTS
$("#linkedin").click(function(){
    window.open("https://www.linkedin.com/in/jason-chu-66438316b/", '_blank');
});
$("#github").click(function(){
    window.open("https://github.com/jchu614?tab=repositories", '_blank');
});
$("#contact").click(function(){
    window.location.href='#contactpage';
 })

 // HOVERING EFFECTS
 var project1 = document.getElementsByClassName("imageContainer")[0];
 var project2 = document.getElementsByClassName("imageContainer")[1];

handleIn = () => {
    project1.classList.add("test");
    project2.classList.add("test");
}
handleOut = () => {
    project1.classList.remove("test");
    project2.classList.remove("test");
}

$(".projectHeader").hover(handleIn, handleOut)


// PROJECT POP UP
var popup = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var btn = document.getElementById("mmpopup");
var btn2 = document.getElementById("churchpopup");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

//opening pop up
btn.onclick = function(){
    popup.style.display = "flex";
}
btn2.onclick = function(){
    popup2.style.display = "flex";
}

//closing on x
span.onclick = function() {
    popup.style.display = "none";
}
span2.onclick = function() {
    popup2.style.display = "none";
}

//closing on clicking outside popup
window.onclick = function(event) {
    if(event.target == popup || event.target == popup2) {
        popup.style.display = "none";
        popup2.style.display = "none";
    }
}
