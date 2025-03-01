let date = new Date();
let currentDate = date.getDate()
let year = date.getFullYear();
let time = date.toLocaleTimeString();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Fri","Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.href = 'newBlog.html'
});



function backToDesk(){
      window.location.href = 'index.html'
}



document.getElementById('currect-date').innerText= `${weekday[date.getDay()]} ${month[date.getMonth()-1]} ${currentDate}, ${year}`



let plus = 23;
let mainus = 5;

let buttons = document.getElementsByClassName('btn');

for (let button of buttons) {
     button.addEventListener('click',function(){

        alert('Board updated successfully')
        plus += 1;
        mainus -= 1;
        document.getElementById('increase').innerText=plus;
        document.getElementById('decrease').innerText=mainus;
    
        let container=document.getElementById('complete-history-container');
    
        let div =document.createElement('div');
        div.classList.add('p-3','bg-gray-100','m-3','rounded-lg')
    
        
       
        
        div.innerHTML = `You clicked this button on ${month[date.getMonth()]} ${time}`;



        container.append(div);
        
        button.disabled = true;

     })
   

    
}

document.getElementById('clear-history').addEventListener('click',function(){

    document.getElementById('complete-history-container').innerHTML='';
})



function randomize() {
    document.body.style.backgroundColor = randomColors();
  }
  

  
  function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }






