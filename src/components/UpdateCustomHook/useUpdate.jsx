

const useUpdate = (user, id) => {

    fetch(`https://ph-mern-todo-app.onrender.com/users/update/${id}`, {
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