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