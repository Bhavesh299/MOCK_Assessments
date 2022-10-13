

document.querySelector("form").addEventListener("submit",Register) ;

var register_Arr= JSON.parse(localStorage.getItem("registered") )|| [] ;

function Register(event){

    event.preventDefault() ;

    let name = document.getElementById("Name").value ;
    let age= document.getElementById("Age").value ;
    let desg = document.getElementsByName('Designation') ;
    let designation ;

    for( var i = 0 ; i < desg.length ; i++){

             if(desg[i].checked) designation = desg[i].value 
         }
    let priority = document.getElementById("priority").value ;
    let vaccine = document.getElementById("Vaccine").value ;

  let register_object = {
      Name:name ,
      Age:age ,
      Designation:designation ,
      Priority:priority ,
      Vaccine:vaccine
  };
  register_Arr.push(register_object);
 localStorage.setItem("registered",JSON.stringify(register_Arr));  

 window.location.href = "dashboard.html"; 
 }
