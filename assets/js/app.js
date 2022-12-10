function Hesabla(){
    let x =document.getElementById('inp').value;
    console.log(x);
    let y = document.getElementById('inp2').value;
    console.log(y);
    let z=document.getElementById('inp3').value;
    console.log(z)
    let btn=document.getElementById('btn');
    btn.innerHTML='Hesablanır ...'
    setTimeout(() =>{
        btn.innerHTML='Hesabla'
    }, 3000);
    if(x="" ||x=null){
        alert ('Xananı mütləq doldurun' );
    } 
    else if(y=""||y=null){
        alert('Xananı mütləq doldurun');
    }
    else if( z=""||z=null){
        alert('Xananı mütləq doldurun')
    }
    let t =Number(x);
    let u =Number(y);
    let v=Number(z);
    
    return (t+t/100*u)/v;

    
}

console.log(Hesabla());

