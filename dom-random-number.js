const result = document.querySelector("h3"); //h3
const lower = document.querySelector("#lower"); //input
const upper = document.querySelector("#upper"); //input 
const generateBtn = document.querySelector("#generateBtn"); //button
const clearBtn = document.querySelector("clearBtn"); //reset

generateBtn.addEventListener("click", function(min, max) {
    event.preventDefault(); // Останавливает перезагрузку страницы
    min = Number(lower.value);
    max = Number(upper.value);
    if ( min < max){
        let randomNum = Math.floor(Math.random() * (max-min+1)) + min;
        result.innerHTML = randomNum; //innerHTML - отправляет значение в HTMLб и лучше его использовать нежели innerText
        console.log(randomNum);
    } else {
        result.innerHTML = "Invalid Input";
    }
});

clearBtn.addEventListener("click", function(){
    upper.value = "";
    lower.value = "";
    result.innerHTML = "";
})