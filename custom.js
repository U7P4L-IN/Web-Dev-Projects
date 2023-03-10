const display1 = document.querySelector('.dis1');
const display2 = document.querySelector('.dis2');
const display3 = document.querySelector('.dis3');
const number_cons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.oper');
const equal_btn = document.querySelector('.equal');
const clr = document.querySelector('.clear');
const ce_btn = document.querySelector('.ce_clear');

let dis1_num = '';
let dis2_num = '';
let result = null;
let last_oper = '';
let dot_btn = false;

number_cons.forEach( number => {

    number.addEventListener('click', (e)=> {

        if (e.target.innerText == '.' && !dot_btn) {
            dot_btn = true;
        } else if (e.target.innerText == '.' && dot_btn){
            return;
        }

        dis2_num += e.target.innerText;
        display2.innerText = dis2_num;
    })

})


operators.forEach( oper => {
    oper.addEventListener('click', (e)=> {
        if (!dis2_num) return;
        dot_btn = false;

        const operation = e.target.innerText;

        if (dis1_num && dis2_num && last_oper) {
            math_operation()
        } else{
            result = parseFloat (dis2_num)
        }
        clearVar(operation)
        last_oper = operation
    })

})


function clearVar(name =''){
    dis1_num += dis2_num+ ' ' + name + ' ';
    display1.innerText = dis1_num;
    dis2_num = '';
    display2.innerText = '';
    display3.innerHTML = result;
}


function math_operation(){
    if (last_oper == 'x') {
        result = parseFloat(result) * parseFloat(dis2_num)
    } else if (last_oper == '+') {
        result = parseFloat(result) + parseFloat(dis2_num)
    } else if (last_oper == '-') {
        result = parseFloat(result) - parseFloat(dis2_num)
    } else if (last_oper == '/') {
        result = parseFloat(result) / parseFloat(dis2_num)
    } else if (last_oper == '%') {
        result = parseFloat(result) % parseFloat(dis2_num)
    }
}


equal_btn.addEventListener('click', (e)=>{
    if (!dis1_num || !dis2_num) return;
    dot_btn = false;
    math_operation()
    clearVar()
    display2.innerText = result;
    display3.innerText = '';
    dis2_num = result;
    dis1_num = '';
})


clr.addEventListener('click', (e)=>{
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
    dis2_num = '';
    dis1_num = '';
    result = '';
})


ce_btn.addEventListener('click', (e)=>{
    display2.innerText = '';
    dis2_num = '';
});


window.addEventListener('keydown', (e)=>{
    if (e.key == '0' ||
        e.key == '1' ||
        e.key == '2' ||
        e.key == '3' ||
        e.key == '4' ||
        e.key == '5' ||
        e.key == '6' ||
        e.key == '7' ||       
        e.key == '8' ||       
        e.key == '9' ||       
        e.key == '.'     
        ){
        clickButton(e.key)
    }else if(
        e.key == '+' ||
        e.key == '-' ||
        e.key == '/' ||
        e.key == '%'
    ){
        clickOper(e.key)
    } else if (e.key == '*') {
        e.key == '*'
        clickOper('x')
    } else if (e.key == 'Enter' || e.key == '=') {
        clickEqual()
    } else if (e.key == 'Backspace') {
        clickBack()
    } else if (e.key == 'Delete') {
        clickDel()
    }

})

function clickButton(key) {
    number_cons.forEach( button =>{
        if(button.innerText == key ) {
            button.click();
        }
    })
}



function clickOper(key) {
    operators.forEach( button =>{
        if(button.innerText == key ) {
            button.click();
        }
    })
}

function clickEqual(){
    equal_btn.click();
}

function clickBack(){
    ce_btn.click();
}

function clickDel(){
    clr.click();
}

