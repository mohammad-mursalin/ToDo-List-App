document.querySelector("img").addEventListener("click",function() {

    const img = document.querySelector("img"); 

    if(img.src = "unchecked.png") {

        img.src = "pngwing.com.png";
    }
    else
    {
        img.src = "unchecked.png"; alert("alert")
    }
})

document.querySelector(".delete").addEventListener("click",function() {

    document.querySelector(".body").removeChild(document.querySelector(".content"))
})

let inputBar = document.querySelector(".input-bar");

inputBar.addEventListener("keyup",(e) => {

    if(e.key == "Enter") {

        addTask(inputBar.value);
    }
})

document.querySelector(".button").addEventListener("click",() => {

    addTask(inputBar.value);
});

function addTask(text) {

    document.querySelector(".content").innerHTML = "<img src="+"unchecked.png" +"alt="+" class="+"image" +">"+

    "<div class="+"task"+">"+text+"</div>"+

    "<button class="+"delete"+">delete</button>";

    //document.querySelector(".task").innerHTML = text;
};