let count = 0;

document.getElementById('minusBtn').onclick = function(){
    count-=1;
    document.getElementById('countLabel').innerHTML = count;
    countColor();
}

document.getElementById('resetBtn').onclick = function(){
    count =0;
    document.getElementById('countLabel').innerHTML = count;
    countColor();
}

document.getElementById('plusBtn').onclick = function(){
    count+=1;
    document.getElementById('countLabel').innerHTML =count;
    countColor();
}


//function to change color of count , when number increase or decrease
function countColor(){
    if(count <0){
        countLabel.style.color = 'red';
    }else if(count > 0) {
        countLabel.style.color = 'green';
    }else {
        countLabel.style.color = 'black'; 
    }
}