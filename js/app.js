
let count = 0;

const value = document.getElementById('value');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');


increase.addEventListener('click', function(){
	count++;
    value.textContent = count
});

decrease.addEventListener('click', function() {
    count--;
    value.textContent = count;
});

reset.addEventListener('click', function() {
    count = 0;
    value.textContent = count;
})