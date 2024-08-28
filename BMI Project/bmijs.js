let form=document.querySelector('form');
console.log(form)

form.addEventListener('submit',function(e){

 e.preventDefault();             //Form madhe value submit kelyavr  get and post  method ne  value sever var jate tr thoday vela sathi
                                  //Te stop karnyasathi preventDefault() method use karatat


 let weight=parseInt(document.querySelector('#weight').value);       

 console.log(`Weight ${weight}`)
 
 let height=parseInt(document.querySelector('#height').value);     

 let results=document.querySelector('#results');     

 if(weight==="" || weight<0 || isNaN(weight)){

    results.innerHTML=`${weight}  Is not valid number Please enter a valid weight`;

 }
else if(height==="" || height<0 || isNaN(height)){

    results.innerHTML=`${height}  Is not valid number Please enter a valid height `;

 }
 else{

   let bmi=( weight/((height*height)/10000)).toFixed(2);

    results.innerHTML=`<span>Body Mass Index Is =${bmi}</span>`
 }


});