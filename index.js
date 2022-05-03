// Add your code here

// const { config } = require("chai")


  function submitData(userName, userEmail) {

    const configObject = {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      },
      body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`,
      })
    }

    return fetch('http://localhost:3000/users', configObject)
      .then (res => res.json())
      .then (data => {
        const userID = data.id
        document.querySelector('body').append(userID)
        console.log(data)
  })
      .catch((error => {
        alert('There was an error!')
        document.querySelector('body').append(error.message)
      }))
  }
submitData("testUser", "testUser@test.com")
