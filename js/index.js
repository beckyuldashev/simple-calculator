const inputNodeA = document.querySelector('.input-a');
const inputNodeB = document.querySelector('.input-b');
const operation = document.querySelector('.operators');
const btnResult = document.querySelector('.result-btn');
const outputNode = document.querySelector('.output');


btnResult.addEventListener('click', () => {
    const a = +inputNodeA.value;
    const b = +inputNodeB.value;
    const operator = operation.value;

    outputNode.textContent = calculate({ a, b, operator });
});