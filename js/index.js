var Details=[];
class Ui
{
   
    displayGame(data)
    {
        let container=``;
        for (let i = 0; i< data.length; i++) {
          container+=` 
        
          <div  data-id="${data[i].id}" class=" g-1 showDetails">
                <div id="card" class="card bg p-0 cursive text-white " style="width: 17rem;">
               <div class="position-relative">
  
                  <img src="${data[i].thumbnail}" class="card-img-top" alt="...">
                  <div class="back">
  
                        </div>
              </div>
  
                  <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                      <h5 class="card-title">${data[i].title}</h5>
                      <button id="" class="s btn bg-main text-white ">
                        Free
                      </button>
  
                    </div>
                   <div class="content">
                    <p class="opacity-50 h-100 card-text text-center p-3">${data[i].short_description.split(" ", 8)}</p>
                     </div>
                    <div class="footer d-flex justify-content-between ">
                      <span class="rounded-pill my-1">${data[i].genre}</span>
                      <span class="rounded-pill  my-1">${data[i].platform}</span>
                    </div>
                  </div>
                </div>
               </div>`;
        }
        document.getElementById("disPlayGame").innerHTML=container;
    }
   
    displayDetailsGame(data)
    {
        var container =`
        <div class="container overflow-auto text-white">
            <div class="d-flex justify-content-between align-items-center  my-4 ">
              <h1 class="text-white">Details Game
              </h1>
              <i id="close" class="fa-solid fa-xmark fa-2x"></i>
            </div>
            <div class="row my-1">

              <div class="col-4">
                <img src="${data.thumbnail}" alt="">
              </div>
              <div class="col-8">
                <h4>Tiltle:  <span> ${data.title}</span></h4>
                <p>Category:  <span class="rounded-2 "> ${data.genre}</span></p>
                <p>Platform:  <span class="rounded-2 "> ${data.platform}</span></p>
                <p>Status:  <span class="rounded-2 "> ${data.status}</span></p>
                <p>${data.description}</p>
                <a  target="_blank" href="${data.game_url}">              
                         <button class="btn btn-outline-warning text-white">Show Game</button>
                </a>             
                 </div>
            </div>

          </div>
        `
        

            document.getElementById("details").innerHTML=container;
    }
}
class Games
{
     
    
    
    constructor()
    {  
                this.getGamesApi("mmorpg");

                var toggleNav =document.querySelectorAll(".toggle a");

        for(var i=0;i<toggleNav.length;i++)
            {
                toggleNav[i].addEventListener("click",(einfo)=> this.getGamesApi(einfo.target.id));

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
        this.uiClass.displayGame(respone);
       
        document.querySelectorAll(".showDetails").forEach((item) => {
            item.addEventListener("click", () =>this.specificGame(item.dataset.id)

            );
         });
        loading.classList.add("d-none");

    }
    specificGame(gameId)
    {
        const detailGame =new DetailsGame(gameId);
        document.getElementById("games").classList.replace("d-block","d-none");
        document.getElementById("details").classList.replace("d-none","d-block");
    }
}
class DetailsGame
{
    constructor(gameId)
    {
        this.uiClass =new Ui();
        
        this.displayDetailsGame(gameId);
    }

 async   displayDetailsGame(id)
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
    const Api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
       const res = await Api.json();
       this.uiClass.displayDetailsGame(res)
          loading.classList.add("d-none");
          document.getElementById("close").addEventListener("click",function () {
          
            document.getElementById("details").classList.replace("d-block","d-none");
            document.getElementById("games").classList.replace("d-none","d-block");
        
        });
       
    }
}
new Games();
