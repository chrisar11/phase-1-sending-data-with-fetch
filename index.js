const formData = {
    name: "Byron",
    email: "Poodle",
}

const submitData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};


fetch('http://localhost:3000/users', submitData)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert("Bad things! Ragnarok!");
        console.log(error.message);
    })