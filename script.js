// let obj={
//     name:"vansh",
//     phone:9711292600,
//     address:"krmu"
// }

// let obj2={
//     name:"alex",
//     phone:9711292600,
//     address:"krmu"
// }

// console.log(obj)

// console.log(document)

// const para=document.querySelector('p')
// para.textContent="this is now updated paragraph"
// para.style.color="green"
// console.log(para)   

// const para=document.getElementsByClassName('para')
// para[0].textContent="this is now upadated paragraph"
// para[1].style.color="green"
// console.log(para)

// const para2=document.querySelectorAll('.para')
// para2[0].textContent="this is now upadated paragraph"
// para2[1].style.color="green"
// console.log(para2)
// para2.forEach((ele)=>console.log(ele.textContent))


const para2=document.querySelectorAll('.para')
para2[0].innertext="this is now upadated paragraph"
para2[0].textContent="this is now upadated paragraph"
para2[0].innerHTML="<div><b>hello world</b></div>"
para2[1].style.color="green"


// const para=document.querySelector('.para')
// para.textContent="this is now updated paragraph"
// para.style.color="green"
// console.log(para)

// const button=document.querySelector('button')

// button.classList.add('but')
// function message(){
//     alert("you press the submit")
// }
// button.addEventListener('click',message)

// const button2=document.querySelector('#button2')
// const button3=document.querySelector('#button3')

// button2.addEventListener('keyup',function(event){
//     console.log(event.key)
// })



const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("Form submitted")
}

const form=document.querySelector('form')
form.addEventListener('submit',handleSubmit)






