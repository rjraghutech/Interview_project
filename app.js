let addTask = document.querySelector(".taskBtn");

addTask.addEventListener("click", (eve) =>{
    let mainCont = document.querySelector(".mainCont");
    mainCont.innerHTML += '<div class="popupCont"><div class="textfield"><input type="text" id="taskText" placeholder="Enter Task Here"><button id="createBtn">Done</button></div><div><button id="closePopup">X</button></div><div class="colorBtns2"><button class="colorNav" id="red">red</button><button class="colorNav" id="blue">blue</button><button class="colorNav" id="green">green</button><button class="colorNav" id="black">black</button></div></div>';

    let done = document.querySelector("#createBtn");
    let popupCont = document.querySelector(".popupCont");
    let getInnertext = document.querySelector("#taskText");
    let close = document.querySelector("#closePopup");
    let taskDoneDiv = document.querySelector(".taskDoneDiv");

    mainCont = document.querySelector(".mainCont");
    done.addEventListener("click", (eve) => {
        if((taskText.value.length) > 1) {
            popupCont.remove();
            mainCont.innerHTML += '<div class="taskDoneDiv"><div class="colorHead"></div><input type="text" id="innerTextField" readonly="readonly"><div class="lockBtnOpen"><button id="rightTick"><i class="fa-solid fa-check"></i></button><button id="deleteTaskBtn"><i class="fa-solid fa-trash-can"></i></button><button id="editTextBtn"><i class="fa-solid fa-pen"></i></button><button id="changeColor"></button></div><button id="lockBtn"><i class="fa-solid fa-lock"></i></button></div>'
            
            let innerTextField = document.querySelector("#innerTextField");
            innerTextField.value += getInnertext.value;

            let lockBtn = document.querySelector("#lockBtn");
            let lockBtnOpen = document.querySelector(".lockBtnOpen");
            lockBtnOpen.style.display = "none";
            let editTextBtn = document.querySelector("#editTextBtn");
            let rightTick = document.querySelector("#rightTick");
            let deleteTaskBtn = document.querySelector("#deleteTaskBtn");
            let taskDoneDiv = document.querySelector(".taskDoneDiv");
            let changeColor = document.querySelector("#changeColor");
            let colorHead = document.querySelector(".colorHead");
            let redone = document.querySelector("#red");
            let redone1 = redone.getInnertext;
            console.log(redone1);
            redone.addEventListener("click", (eve) => {
                colorHead.backgroundColor("red")
                colorHead.style.backgroundColor("redone1");
                console.log(redone1);
            });
            lockBtn.addEventListener("click", (eve) =>{
                if(lockBtnOpen.style.display != "none"){
                    lockBtnOpen.style.display = "none";
                    lockBtn.innerHTML = '<i class="fa-solid fa-lock"></i>'
                }
                else{
                    lockBtnOpen.style.display = "block";
                    lockBtn.innerHTML = '<i class="fa-solid fa-lock-open"></i>' 

                    rightTick.addEventListener("click", (eve) => {
                        innerTextField.setAttribute("readonly", "readonly");
                        console.log("hello")
                        lockBtnOpen.style.display = "none";
                        lockBtn.innerHTML = '<i class="fa-solid fa-lock"></i>'
                    });

                    deleteTaskBtn.addEventListener("click", (eve) => {
                        taskDoneDiv.remove();
                    });

                    editTextBtn.addEventListener("click", (eve) => {
                        innerTextField.removeAttribute("readonly");
                    });
                    let i = 0;

                    changeColor.addEventListener("click", (eve) => {
                        let diffColors = ["red", "blue", "black", "green", "yellow"];
                        if(i < 5){
                            colorHead.style.backgroundColor = diffColors[i];
                            changeColor.style.backgroundColor = diffColors[i];
                            i += 1;
                        }
                        else{
                            i = 0;
                            colorHead.style.backgroundColor = diffColors[i];
                            changeColor.style.backgroundColor = diffColors[i];
                            i += 1;
                        }
                        // console.log(i);
                    });
                }
            });
        }
        // console.log("hello world");
        let redone = document.querySelector("#red");
        let redone1 = redone.getInnertext;
        console.log(redone1);
        redone.addEventListener("click", (eve) => {
            colorHead.backgroundColor("red")
            colorHead.style.backgroundColor("redone1");
            console.log(redone1);
        });
    });


    close.addEventListener("click", (eve) =>{
        popupCont.remove();
    })
    console.log(mainCont.innerHTML);
})


