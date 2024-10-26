
//Getting the elements 
const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");


for (let btn of buttons) {
    btn.addEventListener("click", (e) => {
        console.log(e)
        if (e.target.innerText === "Ac") {
            input.value = '';
        } else if (e.target.innerText === "Del") {
            input.value = input.value.slice(0, -1);
        } else if (e.target.innerText === '=') {
            input.value = eval(input.value);
        }
        else {
            input.value += e.target.innerText;
        };
    })
}
