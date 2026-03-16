(async function(){


    let feedback = await axios.get("http://localhost:2000/retrieve_users")

    console.log(feedback.data)


}())