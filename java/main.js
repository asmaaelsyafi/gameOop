let gameList=[];
let gameDeta=[];


// ===================================( nav items )====================================
let links =document.querySelectorAll('.nav-item')
for(let i=0; i<links.length;i++){
    links[i].addEventListener('click',function(e){
        console.log(e.target.innerText)
        let game =e.target.innerText
        
        getGames(game)
        display()
    })
    
}



// ===================================( get games )====================================
async function getGames(game){
const options = {
    method: 'GET',
    headers: {   
            'x-rapidapi-key': '67445d8337msh505b2b261723241p10afb2jsn65494692c39a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
};

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,options);
    const response = await api.json();
    gameList=response;
    console.log(gameList)
    display()
}




// ===========================(dispaly game)===========================================
function display(){
    let content=``;
    for(let i=0;i<gameList.length;i++)
        content +=`<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="inner">                               
                        <div onclick="gDetails(${i})" class="card" style="width: 18rem;">
                            <img src="${gameList[i].thumbnail}" class="card-img-top p-3" alt="photo about game">
                            <div class=" body-card-top d-flex justify-content-between">
                                <a class="ms-3" href="#"> ${gameList[i].title} </a>
                                <button class="ms-3 me-3 btn btn-primary rounded"> free </button>
                            </div>
                            <div class="card-body text-center">
                                <p class="card-text">${gameList[i].short_description.split(" ").slice(0,3).join(',')}}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item d-flex justify-content-between">
                                    <span class="btn rounded"> ${gameList[i].genre} </span>
                                    <span class="btn rounded"> ${gameList[i].platform} </span>
                                </li>
                            </ul>                                     
                        </div>       
                    </div>        
                </div>
`
document.getElementById('rowbody').innerHTML= content;

}



// ===========================(game Detailes)================================
let card = document.querySelector('.cards')
let  nav=document.querySelector('.navbar')
let topImage=document.querySelector('.topImage')
let details=document.querySelector('.details')
let gameImage=document.getElementById('gameImage')

async function gDetails(thisGame){

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '67445d8337msh505b2b261723241p10afb2jsn65494692c39a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameList[thisGame].id}`,options);
    const response = await api.json();
    gameDeta =response;
    console.log(gameDeta)

    details.classList.replace('d-none','d-block')
    card.classList.replace('d-block','d-none')
    nav.classList.replace('d-block','d-none')
    topImage.classList.replace('d-block','d-none')

    gameImage.setAttribute('src',`${gameList[thisGame].thumbnail}`)
    document.getElementById('title').innerHTML= 'Title:' + gameList[thisGame].title;
    document.getElementById('Category').innerHTML= gameList[thisGame].genre;
    document.getElementById('platform').innerHTML= gameList[thisGame].platform;
    document.getElementById('description').innerHTML= gameDeta[thisGame].description;
}




// ===============================close details=================================
let closeIcon =document.getElementById('close')
function closeDetails(){

    closeIcon.addEventListener('click',function(){
        details.classList.replace('d-block','d-none')
        card.classList.replace('d-none','d-block')
        nav.classList.replace('d-none','d-block')
        topImage.classList.replace('d-none','d-block')
    })
    
}
closeDetails()
















// ====================================show game===========================================

let showGame =document.getElementById('showGame')

function show(){
   showGame.addEventListener('click',function(){
    {
        window.alert('hi')
        // showGame.setAttribute('href',`${gameList[thisGame].game_url}`)
    }

   })

}
show()


// ====================================JQuery========================================

// $(document).ready(function(){
//     $('#loading').fadeOut(500,function(){
//         $('body').css({overflow:'visible'})
//         $('.navbar').css({z-index:'100000000'})
//     })
// })

// $(window).scroll(function(){
//    let top =$(window).scrollTop()
//    console.log(top)
//    if(top>200){
//     $('.navbar').css({position:"fixed",top:"0px"})
//    }
// })






