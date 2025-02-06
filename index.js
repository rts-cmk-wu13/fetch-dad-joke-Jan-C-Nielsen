fetch("https://icanhazdadjoke.com",
    {
        headers:{
        "Accept":"application/json"
        }
    }
)
.then(response => response.json())
.then(x => {
    console.log(x);
}
)
