fetch("https://localhost:3000/weather?address=Delhi").then((data) =>{
    data.json().then((d) =>{
    if (d.error)
    console.log(d.error)
    else
    {console.log(d.forecast)
    console.log(d.location)
    }
    })
    })

