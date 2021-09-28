function carregar(){
    let msg = document.querySelector('.msg');
    let img = document.querySelector('.img_Days');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 6 && hora < 12){
        img.src = 'imagens/dia.jpg';
        document.body.style.background ='#fcdc96';

    }else if (hora >= 12 && hora <= 18 ){
        img.src = 'imagens/tarde.jpg';
        document.body.style.background = '#c2b294';
    }else{
        img.src = "imagens/night.jpg";
        document.body.style.background = '#191970';
      
    }
};