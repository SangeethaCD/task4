function myFunction()
{
    const firstname=document.getElementById("firstname");
    const secondname=document.getElementById("secondname");
    const number=document.getElementById("contactNumber");
    const email = document.getElementById("email");
    const location = document.getElementById("number");

    if(!firstname||!secondname||!number||!email||!location)
    {
        document.getElementById("error-messages").style.display="block";
    }

}