function validate() { 
	if( document.myForm.Name.value == "" )
	{ 
		alert( "Please provide name!" ); 
		document.myForm.Name.focus() ;
		return false;
	}else if(document.myForm.Password.value == ""){
		alert( "Please provide your Password!" ); 
		document.myForm.Password.focus() ;
		return false;
	}else {
		return true;
	}
}