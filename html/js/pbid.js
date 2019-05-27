function take(){	
					 var picture=document.myform.pic;
					            if (picture.value== "") {
								   document.getElementById("show").innerHTML="Please Enter Your Pic..";
								    							   
		                            return false;
                                     }	 
				
			      
			      var name=document.myform.nme;
					            if (name.value== "") {
								   document.getElementById("show").innerHTML="Please Enter Your Name..";
								    							   
		                            return false;
                                     }	 
				
					var batch=document.myform.bth.value;
					            if (batch== "") {
								   document.getElementById("show").innerHTML="Please Enter Your Batch Number..";
								    							   
		                            return false;
                                     }	
								if(isNaN(batch)){
								 document.getElementById("show").innerHTML="Please Enter The Numbaric value..";							   
		                            return false;
								}
								if(batch.length>3){
								 document.getElementById("show").innerHTML="Please Enter The Maximum Three degit.."; 							   
		                            return false;
								}
					var id=document.myform.id.value; 
				            if (id.length<8){
				                document.getElementById("show").innerHTML="Please Enter The Eight Character ID..";
									 return false;				  
				               }
							   if (id.length>8){
				                document.getElementById("show").innerHTML="Please Enter The Eight Character ID..";
									 return false;				  
				               }
				            if(isNaN(id)){
								 document.getElementById("show").innerHTML="Please Enter The Numbaric value..";							   
		                            return false;
								}
                            var distict=document.myform.dis;
					            if (distict.value== "") {
								   document.getElementById("show").innerHTML="Please Enter Your District..";
								    							   
		                            return false;
                                     }									
			         var mail=document.myform.email;
		
					                if(mail.value==""){
									 document.getElementById("show").innerHTML="Please Enter The Email..";
									 return false;
									}
			     if(mail.value.indexOf("@",0)<0){
									 document.getElementById("show").innerHTML="Please Enter The Valid Email...";
									 return false;
									}
			    if(mail.value.indexOf(".",0)<0){
									 document.getElementById("show").innerHTML="Please Enter The Valid Email...";
									 return false;
									}
			     if(mail.value.indexOf("com",0)<0){
									 document.getElementById("show").innerHTML="Please Enter The Valid Email...";
									 return false;
									}		    
				  var phn=document.myform.phone.value;
					            if (phn== "") {
								   document.getElementById("show").innerHTML="Please Enter The Phone Number..";
								    							   
		                            return false;
                                     }	
								if(isNaN(phn)){
								 document.getElementById("show").innerHTML="Please Enter The Numbaric Value..";							   
		                            return false;
								}
								if(phn.length<14){
								 document.getElementById("show").innerHTML="Please Enter The 10Th Degit Phone Number.."; 							   
		                            return false;
								}
								if(phn.length>14){
								 document.getElementById("show").innerHTML="Please Enter The 10Th Degit Phone Number..";  							   
		                            return false;
								}
					 var jobt=document.myform.job;
					            if (jobt.value== "") {
								   document.getElementById("show").innerHTML="Please Enter Your Job Title..";
								    							   
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
	
	
				