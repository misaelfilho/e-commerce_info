// Login e Cadastro (login.html)

function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Login realizado com sucesso');
        location.href = "compras.html";
    }else{
        alert('Usuario ou senha invalido');
    }
}

function cadastroLogin(){
    var nome = document.getElementById('nome').value;
    var criarLogin = document.getElementById('criarLogin').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var criarSenha = document.getElementById('criarSenha').value;
    var confirmarsenha = document.getElementById('confirmarsenha').value;

    if(nome == "test" && criarLogin == "admin" && email == "email" && phone == "9999999999" && criarSenha == "admin" && confirmarsenha == "admin" ){
        alert('Cadastro realizado com sucesso');
        location.href = "index.html";
    }else{
        alert('Informações invalida');
    }
}


const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 50}px)`;
}

setInterval(carrossel, 1500);



// FUNCIONALIDADE JS INDEX.HTML

const card = document.querySelector('.banner-promocao');

    card.addEventListener("mousemove", cardEffect);
    card.addEventListener("mouseleave", cardBack);
    card.addEventListener("mouseenter", cardEnter);

    function cardEffect(event)
    {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth/2;
        const centerY = card.offsetTop + cardHeight/2;
        const positionX = event.clientX - centerX;
        const positionY = event.clientY - centerY;
        
        const rotateX = ((+1)*1*positionY/(cardHeight/2)).toFixed(2);
        const rotateY = ((-1)*2*positionX/(cardWidth/2)).toFixed(2);

        console.log(rotateX,rotateY);

        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    }

    function cardBack(event)
    {
        card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
        cardTransition();
    }

    function cardTransition()
    {
        clearInterval(card.transitionId);
        card.style.transition = 'transform 400ms';
        card.transitionId = setTimeout(() => {
            card.style.transition = '';
        },400);
    }

    function cardEnter(event)
    {
        cardTransition();
    }