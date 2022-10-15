

var Main_Div = document.getElementById("Main_Div") ;

const Search = async()=>{
    try{
        var Input_value = document.getElementById("searchInput").value || "boxer" ;
        var res = await fetch(`https://dog.ceo/api/breed/${Input_value}/images`) ;
        var data = await res.json() ;
        var Img = data.message ;
        console.log(Img) ;
        Display_Data(Img) ;
    }
    catch(err){
        console.log(err) ;
    }
}
Search() ;

const Display_Data = (Img)=>{

    Main_Div.innerHTML = "" ;
    Img.map((el)=>{
    
    var Div = document.createElement("div") ;
    Div.setAttribute("id","div") ; 
   
    var img = document.createElement("img") ;
    img.src = el ;

    Div.append(img);
    Main_Div.append(img)
    });
};