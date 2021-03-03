

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
 var project1 = document.getElementsByClassName("imageContainer")[1];
 var project2 = document.getElementsByClassName("imageContainer")[2];
 var project3 = document.getElementsByClassName("imageContainer")[0];

handleIn = () => {
    project1.classList.add("test");
    project2.classList.add("test");
    project3.classList.add("test");
}
handleOut = () => {
    project1.classList.remove("test");
    project2.classList.remove("test");
    project3.classList.remove("test");
}

$(".projectHeader").hover(handleIn, handleOut)

// PROJECT POP UP
var popup = document.getElementById("popup1");
var popup2 = document.getElementById("popup2");
var popup3 = document.getElementById("popup3");
var btn = document.getElementById("mmpopup");
var btn2 = document.getElementById("churchpopup");
var btn3 = document.getElementById("osopopup");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

//opening pop up
btn.onclick = function(){
    popup.style.display = "flex";
}
btn2.onclick = function(){
    popup2.style.display = "flex";
}
btn3.onclick = function(){
    popup3.style.display = "flex";
}

//closing on x
span.onclick = function() {
    popup.style.display = "none";
}
span2.onclick = function() {
    popup2.style.display = "none";
}
span3.onclick = function() {
    popup3.style.display = "none";
}

//closing on clicking outside popup
window.onclick = function(event) {
    if(event.target == popup || event.target == popup2 || event.target == popup3) {
        popup.style.display = "none";
        popup2.style.display = "none";
        popup3.style.display = "none";
    }
}

function toggle(h) {
    var id = document.getElementById(h);
    var list = document.getElementsByClassName("project-bit");

    for (let i = 0; i < list.length; i++) {
            if(list[i] === id) {
            list[i].classList.add("toggle");
        } else {
            list[i].classList.remove("toggle");
        }
    }
    console.log(list[0], list[1], list[2])
    return Promise.resolve(id);
}
