

const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let lives = 10;

playerLivesCount.textContent =lives;

const getData = ()=> [
    {imgSrc:'./images/beatles.jpeg',name: 'beatles'},
    {imgSrc:'./images/blink182.jpeg',name: 'blink'},
    {imgSrc:'./images/fkatwigs.jpeg',name: 'fkatwigs'},
    {imgSrc:'./images/fleetwood.jpeg',name: 'fleetwood'},
    {imgSrc:'./images/joy-division.jpeg',name: 'joy-division'},
    {imgSrc:'./images/ledzep.jpeg',name: 'ledzep'},
    {imgSrc:'./images/metallica.jpeg',name: 'metallica'},
    {imgSrc:'./images/pinkfloyd.jpeg',name: 'pinkfloyd'},
    {imgSrc:'./images/beatles.jpeg',name: 'beatles'},
    {imgSrc:'./images/blink182.jpeg',name: 'blink'},
    {imgSrc:'./images/fkatwigs.jpeg',name: 'fkatwigs'},
    {imgSrc:'./images/fleetwood.jpeg',name: 'fleetwood'},
    {imgSrc:'./images/joy-division.jpeg',name: 'joy-division'},
    {imgSrc:'./images/ledzep.jpeg',name: 'ledzep'},
    {imgSrc:'./images/metallica.jpeg',name: 'metallica'},
    {imgSrc:'./images/pinkfloyd.jpeg',name: 'pinkfloyd'}
];

const randomize= ()=>{
    const data= getData();
    data.sort(()=>Math.random()-0.5);
    return data;
};

const cardGenerator = ()=>{
    const data = randomize();
    data.forEach((item)=>{
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList='face';
        back.classList='back';
        face.src=item.imgSrc;
        card.setAttribute('name',item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        card.addEventListener('click',(e)=>{
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
}

const checkCards  = (e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards= document.querySelectorAll('.flipped');
    if(flippedCards.length ===2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            flippedCards.forEach(card=>{
                card.classList.remove("flipped");
                card.style.pointerEvents ='none';
            })
        }
        else{
            flippedCards.forEach((card)=>{
                card.classList.remove('flipped');
                setTimeout(()=>card.classList.remove('toggleCard'),1000);
            });
            lives--;
            playerLivesCount.textContent=lives;
            if(lives === 0){
                restart();
            }
        }
    }
}

const restart= ()=>{
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    cardData.forEach((item,index)=>{
        cards[index].classList.remove('toggleCard');
        cards[index].pointerEvents ="all";
        faces[index].src= item.imgSrc;
    });
    lives=10;
    playerLivesCount.textContent=lives;
}

cardGenerator();