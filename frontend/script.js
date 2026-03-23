let fullname_field = document.getElementById("fullname");
fullname_field.addEventListener("keyup", doSomething)



function doSomething(){

   console.log(fullname_field.value)

   if(fullname_field.value.length > 9){
        document.getElementById("fullname-info").innerText = "User is qualified";
   }else{
        document.getElementById("fullname-info").innerText = "User is NOT qualified";
   }

}


const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async function(event){
    event.preventDefault();

    let fullname = this.fullname.value.trim()
    let email = this.email.value.trim();
    let age = this.age.value.trim();
    let country = this.country.value.trim()
    let note = this.note.value.trim();


    let data_to_send = {
        fullname, email, age, country, note
    }


    await axios.post("http://localhost:2000/register", data_to_send)


})