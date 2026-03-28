const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button =>{
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            display.textContent = "0";
            return;
        }

        if (value === "=") {
            try{
                currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch{
            display.textcontent = "Error";
            currentInput = "";
        }
        return;
    }

    currentInput += value;
    display.textContent = currentInput
    });
});

document.addEventListener("keydown",(e) =>{
    const  key = e.key;

    if (key === "Enter"){
        try{
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
        } catch {
            display.textContent = "Error";
            currentInput = "";
        }
    } else if (key === "Backspace") {
        currentInput = currentInput.slice(0,-1);
        display.textContent =  currentInput || "0";
    } else if ("0123456789+=*/.".includes(key)) {
        currentInput += key;
        display.textContent = currentInput;
    }
});