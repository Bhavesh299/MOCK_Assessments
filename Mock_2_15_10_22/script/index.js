
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
  var pubby_Array = [];
  const Add = (data) => {
    var temp = data ;
    console.log(temp) ;
    pubby_Array.push(temp) ;
    localStorage.setItem("pubby_array", JSON.stringify(pubby_Array)) ;
    window.location.href= "Puppy.html" ;
}


