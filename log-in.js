let button=document.getElementById("b");
    let button1=document.getElementById("c");
    let name = document.getElementById("name");
    var password = document.getElementById("password");
    var hanan="hanan";
    var pass="hanan";
    button.addEventListener("click",validdata);
    button1.addEventListener("click",close);

function validdata()
{
    if(name.value===hanan)
    {
        if (password.value===pass)
        {
           window.open('web.html')
            alert("welcome "+name.value);
         
        }
        location.reload();
        else
        {
            alert("password is not corect");
        }
    }
    else
    {
    alert("the name is not corect");
    }
}
let button1=document.getElementById("c");
button1.addEventListener("click",close);

function close()
{

  window.open('web.html')

}