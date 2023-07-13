let arr=[];
let id = 0;


let addButton = document.getElementsByClassName('addUser')[0];
let viewContainer = document.getElementsByClassName('viewContainer')[0];
let successContainer=document.getElementsByClassName('successMsg')[0];
let errorContainer=document.getElementsByClassName('errorMsg')[0];

function zero(){
    if(arr.length==0){
        viewContainer.innerHTML="";
        let message = document.createElement('p');
        message.className = 'default';
        message.innerText = 'You have 0 employees';
        viewContainer.append(message);   
    }
}

zero();

function addUser(){
  let name = document.getElementById('Name').value;
  let profession = document.getElementById('Profession').value;
  let age = document.getElementById('Age').value;
    
// Below is the validation process
   if(!name || !profession || !age){
    let error= document.createElement('p');
    error.className = 'errorMsg';
    error.innerText= "Error: Kindly fill in all the details";
    errorContainer.innerHTML="";
    successContainer.innerHTML="";
    errorContainer.append(error);
    return;

   }
   let Success= document.createElement('p');
   Success.className = 'successMsg';
   Success.innerText= "Success: Successful"
    errorContainer.innerHTML="";
    successContainer.innerHTML="";
    successContainer.append(Success);
    
    id=id+1;
    let info = document.createElement('div');
    info.className = 'info';
    info.innerHTML = `<div class="id">${id}.</div>
    <div class="name"> Name:${name}</div> 
    <div class="profession">Profession:${profession}</div>
    <div class="age">Age:${age}</div> `
    
    
    arr.push(info);
    show();
    zero();
}
addButton.addEventListener('click', addUser)

function show(){
    viewContainer.innerHTML="";

    arr.forEach((element)=>{
        let viewFlex = document.createElement('div');
        viewFlex.className = 'viewFlex';
        viewFlex.append(element);
        let DeleteContainer = document.createElement('div');
        let DeleteButton = document.createElement('button');
         DeleteButton.className = 'deleteButton';
         DeleteButton.innerText = 'Delete User';

         DeleteButton.addEventListener('click', ()=>{
            arr=arr.filter(item => item!= element);
            show();
            zero();
         })
       
         DeleteContainer.append(DeleteButton);
         viewFlex.append(DeleteContainer);
         viewContainer.append(viewFlex);
    })
} 