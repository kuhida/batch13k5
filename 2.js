function cek_uname(username){
  var Username = /^[a-z]{3,5}$/;
  return Username.test(username);
}


if (cek_uname("kur")){
    console.log("Username Benar");
} 
else {
    console.log("Username Salah");
}



function cek_pass(password){
	var Password = /^[0-9]{3}[-]{1}[0-9]{3}[A-Z]{4}$/;
    
    return Password.test(password);
}

if (cek_pass("021*444DEA")){
    console.log("Username Benar");
} 
else {
    console.log("Username Salah");
}
