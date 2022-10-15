
const url = "https://dog.ceo/api/breeds/list/all" ;

async function getapi(url) {

    const response = await fetch(url) ;
    var data = await response.json() ;
    // console.log(data.message) ;
    display_Data(data.message) ;
}
getapi(url) ;

function display_Data(data) {

    console.log(data) ;
  var container =  document.getElementById("container") ;

  Object.keys(data).map((el, i) =>{

        // console.log(el) ;
    var div = document.createElement("div") ;
    div.setAttribute("class", "div1") ;
    div.addEventListener("click", () =>{
        Add(el)
    });
    div.innerHTML = el ;
  
    container.append(div) ;
  })
}
  var puppy_Array = [];
  const Add = (data) => {
    var temp = data ;
    console.log(temp) ;
    puppy_Array.push(temp) ;
    localStorage.setItem("puppy_array", JSON.stringify(puppy_Array)) ;
    window.location.href= "Puppy.html" ;
}


