export function makeDialogBox(button, dialogBox) {
    button.addEventListener("click", () => {
        dialogBox.showModal();
    });
}

export function createAlert(dialogBox, alertmessage) {
    let x = dialogBox.querySelector("#alert-message");
    x.innerText = alertmessage;
    console.log(x.innerText);
}

export function createConfirm(dialogBox, outputBox) {
    let confirmButton = dialogBox.querySelector("#confirmButton");
    let cancelButton = dialogBox.querySelector("#cancelButton");
    confirmButton.addEventListener("click", () => {
        outputBox.innerHTML = "The value returned by the confirm method is : True";
    });
    cancelButton.addEventListener("click", () => {
        outputBox.innerHTML = "The value returned by the confirm method is : False";
    });
}

export function changeOutput(dialogBox, outputBox, type) {

    let button2 = dialogBox.querySelector(".cancel");
    button2.addEventListener("click", () => {
        outputBox.innerHTML = `User didn’t enter anything`;
    });

    let button = dialogBox.querySelector(".button");
    button.addEventListener("click", () => {
        let message = dialogBox.querySelector('input').value;
        if (type === "safe") {
            let clean = DOMPurify.sanitize(message);
            console.log(clean);
            if (clean != "" && clean != null) {
                outputBox.innerHTML = `The user entered : ${clean}`;
            }
            else{
                outputBox.innerHTML = `User didn’t enter anything`;
            }
        }
        else {
            if (message != "" && message != null) {
                outputBox.innerHTML = `The user entered : ${message}`;
            }
            else{
                outputBox.innerHTML = `User didn’t enter anything`;
            }
        }
    });
}