
var puppy_Array= JSON.parse(localStorage.getItem('puppy_array'));

var Puppy = puppy_Array[puppy_Array.length - 1] ;
// console.log(puppy_ArrayLength);

var Puppy_Name = document.getElementById('name');
Puppy_Name.innerHTML = Puppy ;


    async function getapi() {

        const response = await fetch(`https://dog.ceo/api/breed/${Puppy}/images`) ;
        var data = await response.json() ;
        // console.log(data) ;
        display_Data(data.message) ;
    }
    getapi() ;


function display_Data(img) {
    console.log(img);

    var MainDiv = document.getElementById('main_div');

  img.map((el, i) =>{

        // console.log(el) ;
    var div = document.createElement("div") ;
    div.setAttribute("class", "div1") 
    var img = document.createElement("img") ;
    img.setAttribute("src", el) ;
    div.appendChild(img) ;
    MainDiv.appendChild(div) ;

  })
}

