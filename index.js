// multiplication

const res = document.querySelector(".res");
const btn = document.querySelector(".btn1");

btn.addEventListener("click", function () {
    const num1 = parseInt(document.querySelector(".num1").value);
    const num2 = parseInt(document.querySelector(".num2").value);

    let output = "";
    for (let i = 1; i <= num2; i++) {
        let calcu = num1 * i;
        output += `${num1} x ${i} = ${calcu}<br>`;
    }
    res.innerHTML = output;
});


// Todo basic 1
// const todo = document.querySelector(".todo");
// const btn2 = document.querySelector(".btn2");
// const list = document.querySelector(".lists");

// btn2.addEventListener("click", () => {
//   const todoTxt = todo.value.trim();
//   if (todoTxt != "") 
//   var item = document.createElement("li");
//   item.textContent = todoTxt;
//   list.appendChild(item);
//   todo.value = "";


// });

// Todo basic 2 with button delete
const todo = document.querySelector(".todo");
const btn2 = document.querySelector(".btn2");
const list = document.querySelector(".lists");

btn2.addEventListener("click", () => {
    const todoTxt = todo.value.trim();
    if (todoTxt != "")
    var item = document.createElement("li");
    item.textContent = todoTxt;

    var delBtn = document.createElement('button')
    delBtn.textContent = "Delete"
    delBtn.addEventListener('click', () => {
        item.remove()
    })
    list.appendChild(item);

    item.appendChild(delBtn)
    todo.value = "";

});

