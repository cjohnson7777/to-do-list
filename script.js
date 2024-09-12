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
    checkBox.classList.add("checked");
    span.textContent = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);


    checkBox.addEventListener('click', ()=>{
        checkBox.classList.toggle("checked");
        if(checkBox.classList.contains("checked")){
            span.style.removeProperty('text-decoration');
        } else{
            span.style.setProperty ('text-decoration', 'line-through');
            console.log("toggled");
        }
    });





    list.appendChild(listItem);
  
});