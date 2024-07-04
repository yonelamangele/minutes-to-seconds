// 1. Minutes To Seconds
let input1 = document.getElementsByTagName('input')[0]
let span1 = document.getElementsByTagName('span')[0]
let butt1 = document.getElementsByTagName('button')[0]

butt1.addEventListener('click', convert)

function convert(){
    span1.innerText = input1.value * 60 + ' seconds'
}
