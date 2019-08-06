let container = document.querySelector('.container');
let circleMargin = container.clientWidth / 100 * 20 / 3;
let circleWidth = container.clientWidth / 100 * 20;
let circleHeight = circleWidth;
let widthStep = 0;
let heightStep = 0;
while (widthStep < container.clientWidth) {
    let div = document.createElement('div');
    div.classList.add('circle');
    div.style.width = circleWidth - circleMargin * 2 + 'px'
    div.style.height = circleHeight - circleMargin * 2 + 'px'
    div.style.margin = circleMargin + 'px'
    div.style.display = 'inline-block';
    div.style.position = 'absolute';
    div.style.left = widthStep + 'px';
    container.append(div);
    widthStep = widthStep + circleWidth;
}
while (heightStep < container.clientHeight - circleHeight) {
    heightStep = heightStep + circleHeight;
    let div = document.createElement('div');
    div.classList.add('circle');
    div.style.width = circleWidth - circleMargin * 2 + 'px'
    div.style.height = circleHeight - circleMargin * 2 + 'px'
    div.style.margin = circleMargin + 'px'
    div.style.display = 'inline-block';
    div.style.position = 'absolute';
    div.style.top = heightStep + 'px';
    div.style.right = 0 + 'px';
    container.append(div);
}
widthStep = widthStep - circleHeight;
while (widthStep - circleWidth >= circleWidth) {
    widthStep = widthStep - circleHeight;
    let div = document.createElement('div');
    div.classList.add('circle');
    div.style.width = circleWidth - circleMargin * 2 + 'px'
    div.style.height = circleHeight - circleMargin * 2 + 'px'
    div.style.margin = circleMargin + 'px'
    div.style.display = 'inline-block';
    div.style.position = 'absolute';
    div.style.left = widthStep + 'px';
    div.style.bottom = 0 + 'px';
    container.append(div);
}
heightStep = 0;
while (container.clientHeight - circleHeight > heightStep) {
    let div = document.createElement('div');
    div.classList.add('circle');
    div.style.width = circleWidth - circleMargin * 2 + 'px';
    div.style.height = circleHeight - circleMargin * 2 + 'px';
    div.style.margin = circleMargin + 'px'
    div.style.display = 'inline-block';
    div.style.position = 'absolute';
    div.style.bottom = heightStep + 'px';
    container.append(div);
    heightStep = heightStep + circleHeight;
}

let allObject = document.querySelectorAll('.circle');
let colors = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];
let colorItem = 0;
let colorNumber;

function random() {
    let number = 0 + Math.random() * ((colors.length - 1) + 1 - 0);
    let floorNumber = Math.floor(number);
    return floorNumber;
}

function color() {
    for (var i = 0; i < allObject.length; i++) {
        colorNumber = random(i);
        if (i === 0) {
            random(i);
        }
        else {
            let lastItem = getComputedStyle(allObject[i - 1]);
            if (lastItem.backgroundColor === colors[colorNumber]) {
                random(i);
                i = i - 1;
            }
        }
        allObject[i].style.backgroundColor = colors[colorNumber];
        let firsItem = getComputedStyle(allObject[0]);
        let presentItem = getComputedStyle(allObject[allObject.length - 1]);
        if (allObject.length - 1 === i && presentItem.backgroundColor === firsItem.backgroundColor) {
            random(i);
            i = i - 1;
        }
    }
    return colorItem
}
setInterval(color, 1000);

function animation(elem) {
    let radius = 230;
    let speed = 90;
    let start  = 180;
    let s = 2 * Math.PI / 180;
    setInterval(function coordinate() {
       start += s;
        elem.style.left =  220 + radius * Math.sin(start)  + 'px';
        elem.style.top =  220 + radius * Math.cos(start)  + 'px';
    }, speed )
}
let step  = allObject.length-1;
let button = document.querySelector('.button');
button.addEventListener('click', function clickButton(){
        animation(allObject[step]);
        step--;
        if(step >= 0){
            setTimeout(clickButton, 1000)
        }
        button.style.display = 'none'


})
