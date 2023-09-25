
const textInputField = document.getElementById('text-input-field');
const textInputField1 = document.getElementById('text-input-field1');
const addButton = document.getElementById('add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () =>{
    if(textInputField.value.trim().length == '')
    return;

    if(textInputField1.value.trim().length == '')
    return;

    const todoItemContainer = document.createElement('li');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('h5');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    // todoText.innerText = textInputField1.value;
    todoItemContainer.appendChild(todoText);

    const todoText1 = document.createElement('p');
    todoText1.id = 'todo-text';
    // todoText.innerText = textInputField.value;
    todoText1.innerText = textInputField1.value;
    todoItemContainer.appendChild(todoText1);

    // const todoText = document.createElement('p');
    // todoText.id = 'todo-text';
    // todoText.innerText = textInputField1.value;
    // todoItemContainer.appendChild(todoText);


    todoText.addEventListener('dblclick', () =>{
        todoText.classList.add('line-through'); 
        editButton.setAttribute("disabled", "disabled");
    })

    // todoText1.addEventListener('dblclick', () =>{
    //     todoText1.classList.add('line-through');
    //     editButton.setAttribute("disabled", "disabled");
    // })

    // const editButton = document.createElement('button');
    // editButton.id = 'edit-button';
    // editName.innerText = "edit";
    // // editButton.innerHTML = "edit";
    // // editButton.appendChild(edit);
    // // const editName = document.createElement('editname');
    // // editName.innerText = "edit";
    // // editButton.appendChild(editName);
    // todoItemContainer.appendChild(editButton);

    const editButton = document.createElement("h3");
    editButton.innerHTML = "Edit";
    // editButton.appendChild(edit)
    todoItemContainer.appendChild(editButton);

    editButton.addEventListener('click', () => {
        textInputField.value = todoText.innerText;
        // textInputField1.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
        // saveData();
    })

    editButton.addEventListener('click', () => {
        // textInputField.value = todoText.innerText;
        textInputField1.value = todoText1.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
        // saveData();

    })

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    todoItemContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        // textInputField.value = todoText.innerText;
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
        // saveData();
    })



    textInputField.value = "";
    textInputField1.value = "";

    saveData();

})

// function saveData(){
//     localStorage.setItem("data", todosContainer.innerHTML);
//     localStorage.set
// }

// function showTask(){
//     todosContainer.innerHTML = localStorage.getItem("data");
// };

// showTask();
