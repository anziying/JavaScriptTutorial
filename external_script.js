
function alerting(){
    alert("Function from external script called! ")

}

function changing(){
    ele = document.getElementById('paragraph_to_change');
    // ele.style.fontSize = '10px';
    ele.style.color = "black";
    ele.innerHTML = "Javascript可以通过载入外部js文件，也可以直接在html文件中使用script标签定义。"
}