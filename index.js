// multiplication

const res = document.querySelector('.res')
const btn = document.querySelector('.btn1')

btn.addEventListener('click', function(){
    const num1 = parseInt(document.querySelector('.num1').value)
    const num2 = parseInt(document.querySelector('.num2').value)


    let output = ''
    for(let i = 1; i <= num2; i++) {
        let calcu = num1 * i;
        output += `${num1} x ${i} = ${calcu}<br>`
    }
    res.innerHTML = output
})
