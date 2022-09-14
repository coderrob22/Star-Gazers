//When you click the button (Change Date) the event listener hears that and fires the function "Get Fetch"
document.querySelector('button').addEventListener('click', getFetch)

//Below is the Get Fetch function that will take the input value from the html and call the value "letDate"
function getFetch(){
    const letDate= document.querySelector('input').value
    console.log(letDate)

    const url =`https://api.nasa.gov/planetary/apod?api_key=A22TtpZsnEGchyWhp82uvWaIdR9dThOAUHR5bO7f&date=${letDate}`

fetch(url)
    .then(res=> res.json())
    .then(data => {
        console.log(data)
            if (data.media_type === "image"){
                document.querySelector("img").src= data.hdurl
                document.querySelector("h3").innerText= data.title
                
            
            }else if(data.media_type=== "video"){
                document.querySelector("h3").innerText= data.title
                document.querySelector("iframe").src= data.url
            }
        document.querySelector("p").innerText= data.explanation
           document.querySelector("h4").innerText=data.date
            
    })
    .catch(err=>{
        console.log(`error ${err}`)
    });

}