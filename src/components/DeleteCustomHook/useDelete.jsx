
const useDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/users/delete/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

export default useDelete