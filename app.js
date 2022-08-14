let addTask = document.querySelector(".taskBtn");

addTask.addEventListener("click", (eve) =>{
    let mainCont = document.querySelector(".mainCont");
    mainCont.innerHTML = '<div class="popupCont"><div class="textfield"><input type="text" id="taskText" placeholder="Enter Task Here"><button id="createBtn">Done</button></div><div><button id="closePopup">X</button></div><div class="colorBtns2"><button class="colorNav" id="red">red</button><button class="colorNav" id="blue">blue</button><button class="colorNav" id="green">green</button><button class="colorNav" id="black">black</button></div></div>';

    let done = document.querySelector("#createBtn");
    let popupCont = document.querySelector(".popupCont");
    let getInnertext = document.querySelector("#taskText");
    let close = document.querySelector("#closePopup");

    mainCont = document.querySelector(".mainCont");
    done.addEventListener("click", (eve) => {
        if((taskText.value.length) > 1) {
            popupCont.remove();
            mainCont.innerHTML = '<div class="taskDoneDiv"><div class="colorHead"></div><input type="text" id="innerTextField" readonly="readonly"><div class="lockBtnOpen"><button id="rightTick"><i class="fa-solid fa-check"></i></button><button id="deleteTaskBtn"><i class="fa-solid fa-trash-can"></i></button><button id="editTextBtn"><i class="fa-solid fa-pen"></i></button><button id="changeColor"></button></div><button id="lockBtn"><i class="fa-solid fa-lock"></i></button></div>'
            let innerTextField = document.querySelector("#innerTextField");
            innerTextField.value = getInnertext.value;
        }
        // console.log("hello world");
    });

    close.addEventListener("click", (eve) =>{
        popupCont.remove();
    })
    console.log(mainCont.innerHTML);
})


