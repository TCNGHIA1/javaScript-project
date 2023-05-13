// value
const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');
const ampmEl = document.querySelector('#ampm');


const updateClock = ()=>{
    // get current time
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = hour > 12 ? 'PM' : 'AM';
    
    //change time
    hour = hour>12?hour-12:hour>10?hour:"0"+hour;
    minute = minute>10?minute:"0"+minute;
    second = second>10?second:"0"+second;

    //return HTML content
    hourEl.innerHTML = hour;
    minuteEl.innerHTML = minute;
    secondEl.innerHTML = second;
    ampmEl.innerHTML = ampm;
    //update after 1 seconds
    setTimeout(()=>{
        updateClock()
    },1000)
}
//call function
updateClock();