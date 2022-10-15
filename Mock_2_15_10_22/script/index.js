
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
    div.innerHTML = el ;
  
    container.append(div) ;
  })
}


