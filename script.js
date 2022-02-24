function btnclick(val)
{
    document.getElementById("screen").value+=val;
}
function clearScreen()
{
    document.getElementById("screen").value="";

}
function equalScreen(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result

}