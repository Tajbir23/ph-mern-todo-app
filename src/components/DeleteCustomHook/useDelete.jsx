
const useDelete = (id) => {
    console.log(id)
    fetch(`https://ph-mern-todo-app.onrender.com/users/delete/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

export default useDelete