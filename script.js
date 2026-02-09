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


// const para2=document.querySelectorAll('.para')
// para2[0].innertext="this is now upadated paragraph"
// para2[0].textContent="this is now upadated paragraph"
// para2[0].innerHTML="<div><b>hello world</b></div>"
// para2[1].style.color="green"


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


// const handleSubmit=(event)=>{
//     event.preventDefault()
//     console.log("Form submitted")
// }

// const form=document.querySelector('form')
// form.addEventListener('submit',handleSubmit)

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")
// const div2=document.querySelector(".outer")

// btn.addEventListener("click",function(){ console.log("button")})
// btn.addEventListener("click",function(){ console.log("Div")})
// btn.addEventListener("click",function(){ console.log("Div2")})


// debugger
// console.log(a);
// console.log(b);
// var a=78;
// let b=345;


// console.log(a);
// console.log(b);


// function print(){
//     let c=45
//     console.log(c);
//     console.log("Inside fn")
// }
// print()

// function greet(){
//     var message="hello user";
//     console.log(message);
// }
// greet();

// console.log(message);

// let total=100;

// function calculator(){
//     console.log(total);
//      total=100;
    
// }
// calculator()


//< ---------UNIT-2--------->

// <<--timer functions--->

// window.alert(`are you sure you enter in your dream place that is my heart`);
// let heart=window.prompt("say something");
// console.log("Do you love me?");
// setTimeout(()=>{
//     console.log("i konw you choose yes")
// },2000);
// console.log("YeS/no");

// setTimeout(()=>{
//     alert(`hello baby`)
// },3*1000);

// setInterval(()=>{
//     console.log(`hello janeman`)
// },2000);

// const timerid=setInterval(()=>{
//     console.log(`hi`)
// },1000);

// setTimeout(()=>{
//     clearInterval(timerid)
// },10*1000);

// let count=10;

// const id=setInterval(()=>{
//     if(count==1)clearInterval(id)
//         console.log(count)
//     count-=1
//     // console.log(`hello begum`);
// },1000);


// console.log("Do you love me?");
// setTimeout(()=>{
//     console.log("i konw you choose yes")
// },0);
// console.log("YeS/no");

// <---callback func.--->
// 1.
//  function print(num){
//     console.log("Hello bachooo");
//      num()
// }
// function greet(){
//     console.log("Welcome to my class");   
// }

// print(greet)

// 2.
// function print(name){
//     console.log(`hello students`,name);
// }
// function greet(num){
//     console.log(`Welcome to my class`);
//     setTimeout(()=>{
//         console.log("inside settimeout");
//         let firstName="alexa"
//         num(firstName)
//     },2000);
// }
// greet(print)

// 3.
// console.log(`sarting homework`);

// setTimeout(()=>{
//     console.log(`homework done`);
//     console.log(`getting ready to go out`);

//     setTimeout(()=>{
//         console.log(`dinner done`);
//         console.log(`getting ready to go out`)
        
//         setTimeout(()=>{
//             console.log(`going to playground`);
//         },1000); //after dinner
//     },1500); //dinner time
// },2000); //homework time

// 4.
// function finishHomework(callback){
//     console.log("starting homework...");
//     setTimeout(()=>{
//         console.log("homework done!");
//         callback();

//     },2000);
// }

// function eatDinner(callback){
//     console.log("starting dinner...");
//     setTimeout(()=>{
//         console.log("dinner done!");
//         callback();
//     },1500);
// }
// function goToPlayground(){
//     console.log("going to the playground!");
// }

// finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// });

// <<---TO DO LIST

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert("enter task")
//         return
//     }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="Delete"

//     li.innerText=input.value 
//     li.appendChild(deleteButton)
//     list.appendChild(li)

//     deleteButton.addEventListener('click',()=>{
//         list.removeChild(li)
//     })
//     input.value=""
// })


// <--PROMISES--->
// 1.
// const p=new Promise(function(resolve,reject){

//     // resolve()
//     // reject()

//     setTimeout(()=>{
//         let done=true;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("network isseus")
//         }
//     },5000);
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }).finally(()=>{
//      console.log("finally block")
// })

// 2.

// function dohomework(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//         let done=true;
//         if(done){
//             console.log("homework is done")
//             resolve("homework completed")
//         }else{
//             reject("homework is not done ")
//         }
//     },2000);
//     })
//     return p
// }
// function dodinner(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//         let done=true;
//         if(done){
//             console.log("dinner  is done")
//             resolve("dinner completed")
//         }else{
//             reject("dinner is not done ")
//         }
//     },2000);
//     })
//     return p
// }
// function playground(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//         let done=true;
//         if(done){
//             console.log("game  is done")
//             resolve("game completed")
//         }else{
//             reject("game is not done ")
//         }
//     },2000);
//     })
//     return p
// }
// dohomework().then((data)=>{
//     console.log(data)
//     return dodinner()
// }).then((data)=>{
//     console.log(data)
//     return playground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("all tasks are done")
// })

// 3.







