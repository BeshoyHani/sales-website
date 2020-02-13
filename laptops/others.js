
 m=0;
 
 i=0;
 

  

function quantity(){    buttonr = document.createElement("button");
     buttonr.innerHTML = "+";
    
    
    //buttonr[m].onclick=clicked(1);
    buttonr.id=m+100000;
    buttonr.setAttribute("width", "10");
    buttonr.setAttribute("height", "10");
    buttonr.style.position = "relative";
    buttonr.style.cssFloat="left";
    buttonr.style.top="200px";
    document.body.appendChild(buttonr);
    
 
 numb = document.createElement("text");
     numb.id=m;
         
   numb.innerHTML=1;
   
    numb.style.position = "relative";
    numb.style.cssFloat="left";
    numb.style.top="200px";
    buttonr.onclick = function() {nFunction(this.id)};

function nFunction(clicked_id) {
  document.getElementById(clicked_id-100000).innerHTML++;
    }
        document.body.appendChild(numb);
        buttonl = document.createElement("button");
    buttonl.innerHTML = "-";
    
    buttonl.id=m+100000;

    buttonl.className="didi";
    buttonl.setAttribute("width", "10");
    buttonl.setAttribute("height", "10");
    buttonl.style.position = "relative";
    buttonl.style.cssFloat="left";
    buttonl.style.top="200px";function mFunction(clicked_id) {
      document.getElementById(clicked_id-100000).innerHTML--;
      if(document.getElementById(clicked_id-100000).innerHTML<1)
      document.getElementById(clicked_id-100000).innerHTML=1;
    }
    buttonl.onclick = function() {mFunction(this.id)};

    

document.body.appendChild(buttonl);


 

}

    
    function addtocart() {
      
        var x = document.createElement("button");
        x.id=m;
        x.innerHTML = "ADD TO CART";
        x.setAttribute("width", "100");
        x.setAttribute("height", "100");
       // x.style.backgroundColor="green";
        x.style.width="200px";
        x.style.height="50px";
        x.setAttribute("alt", "The Pulpit Rock");
        x.style.cssFloat="left";
        x.style.top="200px";
        x.style.left="100px";
        x.style.position = "relative";
   
      
        document.body.appendChild(x);
      }



      function productname(nam){

      var  name = document.createElement('div');
        name.id="me";
       
            
        name .innerHTML=nam;
        name .style.fontSize="x-large";
        name .style.position = "relative";
        name .style.cssFloat="left";
        name.style.right="150px";
      name .style.top="20px";

      document.body.appendChild(name);
      }
    
     
      function productdiscrep(descri){
        var  name = document.createElement('div');
        name.id="me";

       
            
        name .innerHTML=descri;
        name .style.fontSize="large";
        name .style.position = "relative";
        name .style.cssFloat="left";
        name.style.right="300px";
      name .style.top="50px";

      document.body.appendChild(name);

      }
      function price(pric){
        var  name = document.createElement('div');
        name.id="me";
       
            
        name .innerHTML='US '+'$'+pric;
        name .style.fontSize="xx-large";
        name .style.position = "relative";
        name .style.cssFloat="left";
        name.style.right="150px";
      name .style.top="150px";

      document.body.appendChild(name);
      }
      function myFunction(sourceimg) {
        var x = document.createElement("IMG");
       x.className="didi";
        x.setAttribute("src",sourceimg);
        x.setAttribute("width", "250");
        x.setAttribute("height", "250");
        x.setAttribute("alt", "The Pulpit Rock");
     x.style.cssFloat="left";
     x.style.position = "relative";
        
      
        document.body.appendChild(x);
      }
      function lastprice(lastpric){
        var  last = document.createElement('div');
        last.id="me";
       
       
       last.style.textDecoration="line-through";
    
       last .innerHTML='lastprice: '+'$'+lastpric;
       last .style.fontSize="large";
       last.style.color="grey";
       last .style.position = "relative";
       last .style.cssFloat="left";
       last.style.right="300px";
       last .style.top="120px";

      document.body.appendChild(last);
      }

  
  function DynamicDiv(nam,descri,pric,sourceimg,lastpric) {
    var dynDiv = document.createElement("div");
    dynDiv.id = "divDyna";
    
   

myFunction(sourceimg);
quantity();
addtocart(); 
price(pric);
lastprice(lastpric);



   // dynDiv.innerHTML = "  lenovo vibe c";
    
    
    dynDiv.style.height = "300px";
    dynDiv.style.width = "90%";
  //dynDiv.style.backgroundColor = 'black';
    dynDiv.style.border="1px solid black";
    dynDiv.style.borderRight ="none";
    dynDiv.style.borderLeft="none";
    //dynDiv.style.left="50px";
productname(nam);
productdiscrep(descri);
 m++;
    
 
    document.body.appendChild(dynDiv);
}
m=0;

i=0;


 

function quantity(){    buttonr = document.createElement("button");
    buttonr.innerHTML = "+";
   
   
   //buttonr[m].onclick=clicked(1);
   buttonr.id=m+100000;
   buttonr.setAttribute("width", "10");
   buttonr.setAttribute("height", "10");
   buttonr.style.position = "relative";
   buttonr.style.cssFloat="left";
   buttonr.style.top="200px";
   document.body.appendChild(buttonr);
   

numb = document.createElement("text");
    numb.id=m;
        
  numb.innerHTML=1;
  
   numb.style.position = "relative";
   numb.style.cssFloat="left";
   numb.style.top="200px";
   buttonr.onclick = function() {nFunction(this.id)};

function nFunction(clicked_id) {
 document.getElementById(clicked_id-100000).innerHTML++;
   }
       document.body.appendChild(numb);
       buttonl = document.createElement("button");
   buttonl.innerHTML = "-";
   
   buttonl.id=m+100000;

   buttonl.className="didi";
   buttonl.setAttribute("width", "10");
   buttonl.setAttribute("height", "10");
   buttonl.style.position = "relative";
   buttonl.style.cssFloat="left";
   buttonl.style.top="200px";function mFunction(clicked_id) {
     document.getElementById(clicked_id-100000).innerHTML--;
     if(document.getElementById(clicked_id-100000).innerHTML<1)
     document.getElementById(clicked_id-100000).innerHTML=1;
   }
   buttonl.onclick = function() {mFunction(this.id)};

   

document.body.appendChild(buttonl);




}

   
   function addtocart() {
     
       var x = document.createElement("button");
       x.id=m;
       x.innerHTML = "ADD TO CART";
       x.setAttribute("width", "100");
       x.setAttribute("height", "100");
      // x.style.backgroundColor="green";
       x.style.width="200px";
       x.style.height="50px";
       x.setAttribute("alt", "The Pulpit Rock");
       x.style.cssFloat="left";
       x.style.top="200px";
       x.style.left="100px";
       x.style.position = "relative";
  
     
       document.body.appendChild(x);
     }



     function productname(nam){

     var  name = document.createElement('div');
       name.id="me";
      
           
       name .innerHTML=nam;
       name .style.fontSize="x-large";
       name .style.position = "relative";
       name .style.cssFloat="left";
       name.style.right="150px";
     name .style.top="20px";

     document.body.appendChild(name);
     }
   
    
     function productdiscrep(descri){
       var  name = document.createElement('div');
       name.id="me";

      
           
       name .innerHTML=descri;
       name .style.fontSize="large";
       name .style.position = "relative";
       name .style.cssFloat="left";
       name.style.right="300px";
     name .style.top="50px";

     document.body.appendChild(name);

     }
     function price(pric){
       var  name = document.createElement('div');
       name.id="me";
      
           
       name .innerHTML='US '+'$'+pric;
       name .style.fontSize="xx-large";
       name .style.position = "relative";
       name .style.cssFloat="left";
       name.style.right="150px";
     name .style.top="150px";

     document.body.appendChild(name);
     }
     function myFunction(sourceimg) {
       var x = document.createElement("IMG");
      x.className="didi";
       x.setAttribute("src",sourceimg);
       x.setAttribute("width", "250");
       x.setAttribute("height", "250");
       x.setAttribute("alt", "The Pulpit Rock");
    x.style.cssFloat="left";
    x.style.position = "relative";
       
     
       document.body.appendChild(x);
     }
     function lastprice(lastpric){
       var  last = document.createElement('div');
       last.id="me";
      
      
      last.style.textDecoration="line-through";
   
      last .innerHTML='lastprice: '+'$'+lastpric;
      last .style.fontSize="large";
      last.style.color="grey";
      last .style.position = "relative";
      last .style.cssFloat="left";
      last.style.right="300px";
      last .style.top="120px";

     document.body.appendChild(last);
     }

 
 function DynamicDiv(brandname,nam,descri,pric,sourceimg,lastpric) {
   if (brandname=="others"){
   var dynDiv = document.createElement("div");
   dynDiv.id = "divDyna";
   
  

myFunction(sourceimg);
quantity();
addtocart(); 
price(pric);
lastprice(lastpric);



  // dynDiv.innerHTML = "  lenovo vibe c";
   
   
   dynDiv.style.height = "300px";
   dynDiv.style.width = "90%";
 //dynDiv.style.backgroundColor = 'black';
   dynDiv.style.border="1px solid black";
   dynDiv.style.borderRight ="none";
   dynDiv.style.borderLeft="none";
   //dynDiv.style.left="50px";
productname(nam);
productdiscrep(descri);
m++;
   

   document.body.appendChild(dynDiv);
   }
}