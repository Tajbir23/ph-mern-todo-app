

const useUpdate = (user, id) => {

    fetch(`http://localhost:5000/users/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
     .then((res) => res.json())
     .then((data) => {
        console.log(data)
      })
}

export default useUpdate