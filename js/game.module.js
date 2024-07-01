
export class Games
{

     cards =document.querySelectorAll(".card");

    constructor()
    {
                this.getGamesApi("mmorpg");

        toggleNav =document.querySelectorAll(".toggle a");

        for(var i=0;i<toggleNav.length;i++)
            {
                toggleNav[i].addEventListener("click",function(einfo)
            {
                document.querySelector(".toggle .active").classList.remove(".active");
                einfo.target.classList.add(".active");
                this.getGamesApi("shooter");

            })
            }


        this.uiClass =new Ui();
    }





  async  getGamesApi(category)
    {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5b1dea953emsh38f07a3e0b7b188p12d1b3jsn371a4b32f7ff',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                Accept: "application/json",
                "Content-Type": "application/json",
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
        const respone=await api.json();
        console.log(respone);
        this.uiClass.displayGame(respone);
        for( var i=0;i<=this.cards;i++)
            {
                this.cards[i].addEventListener("click",()=>{
                    this.specificGame(this.cards[i].dataset.id);
                })
            }
        loading.classList.add("d-none");


    }
    specificGame(gameId)
    {
        const detailGame =new DetailsGame(gameId);
        document.getElementById("games").classList.replace("d-block","d-none");
        document.getElementById("details").classList.replace("d-none","d-block");
    }
}