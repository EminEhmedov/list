let form =document.querySelector('form');
let ul= document.querySelector('ul');
let inp =document.querySelector('input');

form.addEventListener('submit',elaveEt);
document.addEventListener('DOMContentLoaded',LocalGetir)

function elaveEt(e){
    e.preventDefault();
// console.log('salam');
    Liqur(inp.value)
    Lokalyaz(inp.value)
    inp.value=''
};



function Lokalyaz(not){
    let notlar;
    if(localStorage.getItem('nots')==null){
        notlar=[]
    }
    else{
        if(inp.value==''){
console.log(Bosdur);
        }else{
            notlar=JSON.parse(localStorage.getItem('nots'));
        }
        
    }
    notlar.push(not);
    localStorage.setItem('nots',JSON.stringify(notlar));
}



function LocalGetir(){
    let notlar;
    if(localStorage.getItem('nots')==null){
        notlar=[]
    }
    else{
        notlar=JSON.parse(localStorage.getItem('nots'));
    }


notlar.forEach(element => {
    
   Liqur(element)
});
}

function Liqur(not){
    if(inp.value==''){
        alert('Bos gondere bilmezsiz')
    }else{
        let yeniLi=document.createElement('li');
        yeniLi.classList.add('list-group-item' , 'd-flex','justify-content-between');
        yeniLi.textContent=not;
        ul.appendChild(yeniLi);
        let yeniBtn=document.createElement('button');
        yeniBtn.classList.add('btn', 'btn-danger','btn-sm');
        yeniBtn.textContent='Sil'
        yeniLi.appendChild(yeniBtn);
       
    }
   
}