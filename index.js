
function submitData(name, email) {
    const bodyData = {name, email}
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bodyData)
      } )
      .then(function(resp) {
        return resp.json()
      } )
      .then(function(object) {
        document.body.innerHTML = object["id"]
      })
      .catch(function (error) {
        document.body.innerHTML = error.message
      })
  }