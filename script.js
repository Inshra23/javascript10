//  function registrationForm(){
//  let name = document.getElementById('name').value
//  let Contact = document.getElementById('contact').value
//  let Email = document.getElementById('email').value
//  let Password = document.getElementById('password').value
//  let Confirm_password = document.getElementById('conf_pass').value

//  if(name==""||Contact==""||Email==""||Password==""||Confirm_password==""){
//     alert("All Field are Mondatory to fill")
//     return false
//  }
//  else if(Contact.length>10 || Contact.length<10){
//      alert("Number should be of 10 Digit")
//      return false
//  }
//  else if(isNaN=(Contact)){
//     alert("Enter the digit in Numbers")
//     return false
//  }
//  else if(Confirm_password!=Password){
//     alert("Enter the same Password")
//     return false
//  }

//  else{
//     return true
//  }
//  }


// let flower = "rose"
// console.log(Flower);


function greetWorld(){
    try{
        let greeting = "Hello World"
        alert(greeting)
    }
  catch(error){
    alert(error)
  }
}
greetWorld()