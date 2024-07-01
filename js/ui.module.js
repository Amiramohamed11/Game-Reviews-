export class Ui
{
    displayGame(data)
    {
        let container=``;
        for (let i = 0; i< data.length; i++) {
          container+=` 
        
          <div  id="${data[i].id}" class="col g-1 showdetails">
                <div id="card" class="card bg p-0 cursive text-white " style="width: 18rem;">
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

              <div class="col-md-4 ">
                <img src="${data.thumbnail}" alt="">
              </div>
              <div class="col-md-8 ">
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