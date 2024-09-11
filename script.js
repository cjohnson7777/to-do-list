const list = document.querySelector('ul');
const input = document.getElementById('task');
const btn = document.getElementById('submitbtn');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    task = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const span = document.createElement('span');
    checkBox.type = 'checkbox';
    span.textContent = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);

    checkBox.addEventListener('click', ()=>{
        span.style.setProperty ('text-decoration', 'line-through');
    });

    list.appendChild(listItem);
  
});