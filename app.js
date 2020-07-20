clearResult();
function getNum(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult() {
    var result = document.getElementById("result");
    result.value = " ";
}
function calc(){
    var result = document.getElementById("result");
    var a = eval(result.value) ;
    result.value=a;
}