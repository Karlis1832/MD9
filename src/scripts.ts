fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(handleData)
  .catch(error => console.error(error))
 

  function handleData(data:any) {

    interface Character {
      name: string;
      image: string;
      status: string;
      species: string;
      origin: {
        name: string;
        url: string;
      };
    }
    data.results.forEach((character: Character) => {
      
      let card = document.createElement("div");
      card.classList.add("card");

      let text = document.createElement("div")
      text.classList.add("text")

      let wholeCard = document.createElement("div")
      wholeCard.classList.add("wholeCard")
    
      let image = document.createElement("img");
      image.src = character.image;
      image.alt = character.name;

      let light = document.createElement("div");
      light.classList.add("light");

      switch (character.status) {
        case "Alive":
          light.classList.add("green");
          break;
        case "Dead":
          light.classList.add("red");
          break;
        case "unknown":
          light.classList.add("yellow");
          break;
        default:
          break;
      }
    
      let name = document.createElement("h2");
      name.textContent = character.name;
    
      let status = document.createElement("p");
      status.classList.add("status")
      status.textContent = `${character.status} - ${character.species}`;
          
      let origin = document.createElement("p");
      origin.textContent = `${character.origin.name}`;
    
      card.appendChild(image);
      text.appendChild(name);
      text.appendChild(light);
      text.appendChild(status);
      text.appendChild(origin);
    
      let container = document.querySelector(".wholeCard");
      container.appendChild(card);
      container.appendChild(text)

    
    });
}


