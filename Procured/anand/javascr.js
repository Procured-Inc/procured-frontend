
    function validateForm()
      {
        var e=document.form.email.value;
	
		 var p=document.getElementById('pass').value;
		 	
		 
		 var echck=/^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})+$/;	
		 var pchck=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*[!-)])(?=\S*?[0-9]).{6,})\S$/;
		 	 
		 if(!e.match(echck))
		 {document.getElementById('errorMessage').innerHTML="Enter valid Email ID(example@domain.com)";
		 document.form.email.focus();
   		  return false;	
		}	
		
		if(!p.match(pchck))
		 {document.getElementById('errorMessage').innerHTML="Enter valid Password(Must contain a lowercase,an uppercase,a special character and a number and should be minimum of 6 chracters ";
		 document.form.pass.focus();
   		  return false;	
		}	
		
		return true;	
   }