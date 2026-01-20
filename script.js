
function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){return b===0?"Error":a/b}

let number1=""
let number2=""
let op=null
let isSecond=false
let justCalculated=false

function operate(op,a,b){
    if(b==="") return a
    a=Number(a)
    b=Number(b)
    if(op==="+") return add(a,b)
    if(op==="-") return subtract(a,b)
    if(op==="x") return multiply(a,b)
    if(op==="/") return divide(a,b)
}

const container=document.querySelector(".container")
container.style.cssText="display:flex;flex-wrap:wrap;width:360px;border:2px solid black;padding:5px"

const display=document.createElement("input")
display.style.cssText="width:100%;height:80px;font-size:40px;text-align:right"
container.appendChild(display)

const buttons=["C","⌫","+","-","x","/","9","8","7","6","5","4","3","2","1","0",".","="]

buttons.forEach(text=>{
    const btn=document.createElement("button")
    btn.textContent=text
    btn.style.cssText="width:120px;height:50px;font-size:20px"
    btn.addEventListener("click",()=>handleInput(text))
    container.appendChild(btn)
})

function handleInput(value){
    if(value==="C"){
        number1=""
        number2=""
        op=null
        isSecond=false
        justCalculated=false
        display.value=""
        return
    }

    if(value==="⌫"){
        if(justCalculated){
            number1=""
            display.value=""
            justCalculated=false
            return
        }
        if(!isSecond){
            number1=number1.slice(0,-1)
            display.value=number1
        }else{
            number2=number2.slice(0,-1)
            display.value=number1+op+number2
        }
        return
    }

    if(value==="="){
        if(op===null||number2==="") return
        let result=operate(op,number1,number2)
        display.value=result
        number1=String(result)
        number2=""
        op=null
        isSecond=false
        justCalculated=true
        return
    }

    if(["+","-","x","/"].includes(value)){
        if(op!==null && number2!==""){
            number1=String(operate(op,number1,number2))
            number2=""
        }
        op=value
        isSecond=true
        display.value=number1+op
        return
    }

    if(value==="."){
        if(!isSecond){
            if(number1.includes(".")) return
            number1=number1===""?"0.":number1+"."
            display.value=number1
        }else{
            if(number2.includes(".")) return
            number2=number2===""?"0.":number2+"."
            display.value=number1+op+number2
        }
        return
    }

    if(!isNaN(value)){
        if(justCalculated){
            number1=value
            justCalculated=false
            display.value=number1
            return
        }
        if(!isSecond){
            number1+=value
            display.value=number1
        }else{
            number2+=value
            display.value=number1+op+number2
        }
    }
}

document.addEventListener("keydown",e=>{
    if(e.key>="0"&&e.key<="9") handleInput(e.key)
    if(e.key===".") handleInput(".")
    if(e.key==="+"||e.key==="-"||e.key==="*") handleInput(e.key==="*"?"x":e.key)
    if(e.key==="/") handleInput("/")
    if(e.key==="Enter") handleInput("=")
    if(e.key==="Backspace") handleInput("⌫")
    if(e.key==="Escape") handleInput("C")
})