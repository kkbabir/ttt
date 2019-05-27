function take(){		    
				 var ps=document.myform.password1; 
				  if (!(ps.value==="csepb980")){
				         document.getElementById("show").innerHTML="Please enter the Match character password..";
									 return false;				  
				  }
				 
				  }		

				  
			 function shw(){
		      var x = document.getElementById("im");
		      var y = document.getElementById("em");
			     if(x.type==="password" && y.type==="password"){
				    x.type="text";
				    y.type="text";
					return false;
				 }
		        else {
				    x.type="password";
				    y.type="password";
					
				}
		 }  
	
	