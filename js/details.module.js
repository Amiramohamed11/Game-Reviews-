
export class DetailsGame
{
    constructor(gameId)
    {
        this.uiClass =new Ui();
        document.getElementById("close").addEventListener("click",function () {
            details.classList.replace("d-block","d-none");
            games.classList.replace("d-none","d-block");
        
        });
        this.displayDetailsGame(gameId);
    }

    displayDetailsGame(id)
    {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        var response=[]
        const options = {
           method: "GET",
           headers: {
              "x-rapidapi-key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
              "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
              Accept: "application/json",
                "Content-Type": "application/json",
           },
        };
       const Api=  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options).then((response) => response.json())
       .then((response) => this.uiClass.displayDetailsGame(response))
       .catch((err) => console.error(err))
       .finally(() => {
          loading.classList.add("d-none");
       });
       
    }
}