(async function(){


    let feedback = await axios.get("http://localhost:2000/retrieve_users")

    console.log(feedback.data)

    let users = feedback.data;

    // users data will be placed inside user-list class

    // users.forEach(( user ) => {



    // })
    

    for( let user in users){

        let each_user = users[user];

        let user_container = `
              <div class="user-row">
                <div class="flex-row">
                    <div class="avatar-symbol">JD</div>
                    <div class="user-info">
                        <div class="user-name">
                            ${each_user['fullname']}
                            <span class="user-role">editor</span>
                        </div>
                        <div class="user-email">${each_user['email']}</div>
                    </div>
                </div>
                <button class="delete-btn" type="button" onclick="alert('🗑️ delete user: Jessie Dele (mock) · no actual change')"><span>🗑️</span> delete</button>
            </div>
        `

        document.querySelector(".user-list").innerHTML += user_container

    }




}())