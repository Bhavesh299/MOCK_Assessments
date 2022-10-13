
var register = JSON.parse(localStorage.getItem("registered") )|| [] ;

console.log(register)
   display_Data(register) ;

   function sort(){

    let type = document.getElementById("sort").value ;
    if(type == "Low"){

        register_Arr.sort(function(a,b){

            return a.Age - b.Age ;
        });
    }
    if(type == "High"){

        register_Arr.sort(function(a,b){

            return b.Age - a.Age ;
        });
    }
    display_Data(register);

  }

  function filter(){

    let type = document.getElementById("filter").value ;

    let filtered_data = register_Arr.filter(function (el){

        return el.Vaccine == type ;
    } );

    display_Data(filtered_data);
  }

    function display_Data(register){

        document.querySelector("tbody").innerHTML = "" ;

        register.map(function(el , i ){

            let tr = document.createElement("tr") ; 
            let td_1=document.createElement("td") ;
            td_1.innerHTML = i + 1 ; 
            let td_2=document.createElement("td") ;
            td_2.innerHTML = el.Name ;
            let td_3 = document.createElement("td") ;
            td_3.textContent = el.Age ;
            let td_4=document.createElement("td") ;
                td_4.textContent=el.Designation;
            let td_5=document.createElement("td") ;
                td_5.textContent=el.Priority;
            let td_6=document.createElement("td") ;
                td_6.textContent=el.Vaccine;
            let td_7=document.createElement("td") ;
                td_7.textContent="Delete" ;
            tr.append(td_1,td_2,td_3,td_4,td_5,td_6,td_7) ;

            document.querySelector("tbody").append(tr) ;
        })
    }
