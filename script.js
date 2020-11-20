// TODO: add code here

window.addEventListener("load",function(){
    

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        //console.log(response);   
                       // Access the JSON Data in the response
             response.json().then(function(json){
                    //console.log(json[0])
                   
                 const container =document.getElementById("container")
                           // Add HTML that includes the JSON data
                     //sorting the hours in descending order (most to least)
                    json.sort((a, b) => Number(b.hoursInSpace) - Number(a.hoursInSpace));
                    //  json.sort((a, b) => Number(a.hoursInSpace) - Number(b.hoursInSpace)); // ascending order(small to big)

                     //json.sort((a, b) => (b.hoursInSpace > a.hoursInSpace) ? 1 : ((b.hoursInSpace < a.hoursInSpace) ? -1 : 0));
                     //console.log(hours)

                     // looping thru json objects

                  // for(let of). for each , for (let i=0...)
                  let htmlContent="";
                  let totalAstronauts =`<h2>Total Astronauts Count: ${json.length}</h2>`
                 for(let astronaut in json){  
                     let activeLine ="";
                     if(json[astronaut].active === true){
                         activeLine = `<li style="color:green">Active:  ${json[astronaut].active}</li>`
                     }else{
                        activeLine = `<li style="color:red">Active: ${json[astronaut].active}</li>`

                     }
                     

                     
                 htmlContent +=

                `
                 <div class = "astronaut"> 
                 <div class ="bio">

                 <h3> ${json[astronaut].id} ${json[astronaut].firstName} ${json[astronaut].lastName}</h3>
                  
                 <ul>        
                 <li>HoursInSpace: ${json[astronaut].hoursInSpace}</li>
                 <li>Active: ${activeLine}</li>
                 <li>Skills: ${json[astronaut].skills.join(", ")}</li>
                 </ul></div>
                 <img class = "avatar" src = ${json[astronaut].picture}></img>
                 </div>

                              `    ;                  
                     }   
                     
                     container.innerHTML = htmlContent + totalAstronauts;
           });
      });
});