document.body.innerHTML = `
       <section></section>
`;

fetch("https://restcountries.com/v2/all")
.then(data=>data.json())
.then(
    (countries)=>{
        countries.forEach(data => {
            const flags = document.querySelector("section");
            flags.innerHTML += ` 

                <div class="flag-container">
                     <img class="flag" src=${data.flags.png}>

                     <div class="details">
                       <h3>${data.name}</h3>
                       <p><b>Population:</b>${data.population}</p>
                       <p><b>Region:</b>${data.region}</p>
                       <p><b>Captial:</b>${data.capital}</p>
                    </div>
                </div>    
            `;
        });
    });