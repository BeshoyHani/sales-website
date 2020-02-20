 var proTable=
    document.getElementById("proTable"),
      
     itName=
     document.getElementById("itemName"),
     
     itType=
    document.getElementById("itemType"),
     
     itQuantity=
    document.getElementById("itemQuantity"), 
     
     itPrice=
    document.getElementById("itemPrice"),
     
     itImg=
    document.getElementById("itemImg"),
     
     itDesc=
    document.getElementById("itemDesc"),
	
	itId=
    document.getElementById("itemId"),

    counter=0,
	
	rowNum=0,
	
	editCheck=0;







var products=new Array(100000);
for(var i=0; i<100000; i++)
    products[i]=new Array(7);


function validation()
{
    if(itemId.value.length>0 &&
	itName.value.length>1 &&
       itType.value.length>1 &&
	   itQuantity.value>0 && 
       itPrice.value>-1 && 
	   itDesc.value.length>10)
        return 1;
    else return 0;
}


function clearInput()
{
	itemId.value='';
	itName.value='';
    itType.value='';
    itQuantity.value=''; 
    itPrice.value='';
    itImg.value='';
    itDesc.value='';
}

function addItemFunction()
{
    var tableData=
        [
	itemId.value,
    itName.value,
    itType.value,
    itQuantity.value, 
    itPrice.value,
    itImg.value,
    itDesc.value
         ],
    ok=validation();
    
    
    if(ok==1)
    {
        
    // clear text boxes
    clearInput();
    //-------------------------//
            
			 products[counter][0]=tableData[0];
			 products[counter][1]=tableData[1];
			 products[counter][2]=tableData[2];
			 products[counter][3]=tableData[3];
			 products[counter][4]=tableData[4];
			 products[counter][5]=tableData[5];
			 products[counter][6]=tableData[6];


            // creating row
            var row = document.createElement("tr");
            
            // create cells in row
            for (var i = 0; i < 7; i++)
            {
                if(i===5)continue;//for img link
                var cell = document.createElement("td");
               
                var cellText =
            document.createTextNode(tableData[i]);
                
                
                cell.appendChild( cellText);
                row.appendChild(cell);
            }
			
			
			
			
			
 // -------------create delete button  -------------//
			 var cell1 = 
			 document.createElement("th"),
			 cell2=
			 document.createElement("th");
			 
             var dBtn = 
			 document.createElement("input"),
			 
			 
				editBtn=
			document.createElement("input");
			
			
			 editBtn.type="button";
			 editBtn.value="Modify";
			 editBtn.className = "editBtn";
			 editBtn.onclick=function()
			 {
			    rowNum=dBtn.parentElement.parentElement.rowIndex;
				itId.value=products[rowNum-1][0];
				itName.value=products[rowNum-1][1];
				itType.value=products[rowNum-1][2];
				itQuantity.value=products[rowNum-1][3];
				itPrice.value=products[rowNum-1][4];
				itImg.value=products[rowNum-1][5];
				itDesc.value=products[rowNum-1][6];
				
				editCheck=1;
				
			 };
			 
			 
			 dBtn.type="button";
			 dBtn.value="x";
			 dBtn.className = "dBtn";
			 dBtn.onclick=function()
			 {
				rowNum=dBtn.parentElement.parentElement.rowIndex;
				 products.splice(rowNum-3, 1);
				 proTable.deleteRow(rowNum);
				 editCheck=0;
				 

			 };
			
			 cell1.appendChild( dBtn);
			 cell2.appendChild( editBtn);
			 row.appendChild(cell1);
			 row.appendChild(cell2);
            //------------------------------------//
			
			
			
			
			
			 //row.setAttribute("id",counter);
            // add the //row to the end of the table body
            proTable.appendChild(row); 
            
            counter++;
    }
	
	
	else alert("Please check the rules for adding a product Details");

}
//---------------------------------------//

function modifyBtn()
{
   if(editCheck==1)
   {
	   
	products[rowNum-1][0]=itId.value;
    products[rowNum-1][1]=itName.value;
    products[rowNum-1][2]=itType.value;
    products[rowNum-1][3]=itQuantity.value;
    products[rowNum-1][4]=itPrice.value;
    products[rowNum-1][5]=itImg.value;
    products[rowNum-1][6]=itDesc.value;
	
	var ok=validation();
	if(ok==1)
	{
			var row= proTable.getElementsByTagName("tr")[rowNum];
			var td = row.getElementsByTagName("td")[0];
			for(var i=0, j=0; i<6; i++,j++)
			{
				if(i==5)j++;
				var td = row.getElementsByTagName("td")[i];
				td.innerHTML=products[rowNum-1][j];
			}
			
			editCheck=0;
			clearInput();
	}
	
	else 
	alert("Please check the rules for modifying a product Details");
  }
  
  else alert("Please select row to modify");
}
