const allBtn=document.querySelectorAll("span");
const inputNumber=document.querySelector("#inputNumber");



const calculate=((number)=>{
  console.log(number)
  inputNumber.value+=number;
})

const result=(()=>{
 try {
  inputNumber.value=eval(inputNumber.value);
 } catch (error) {
    inputNumber.value="ERROR!"
 }
})

function clr(){
  inputNumber.value=" ";
}
function del(){
  inputNumber.value=inputNumber.value.slice(0, -1)
}