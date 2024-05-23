// selecionando elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplier");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

// funções
const createTable = (number, multiplierNumber) => {
    multiplicationTable.innerHTML = ""; // apagar texto da div multiplication-operations

    for(i = 1; i <= multiplierNumber; i++) {
        const result = number * i;
        
        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html"); // transforma a string "template" em html
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evitar que a pag recarregue

    const multiplicationNumber = +numberInput.value; //"+" para transformar o numero em inteiro
    const multiplierNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplierNumber) return;
    
    createTable(multiplicationNumber, multiplierNumber);
});