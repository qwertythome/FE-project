const buttons_Switches = document.querySelectorAll('.menu_item');
const main_Canvas = document.querySelector('.main');
buttons_Switches.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedId = e.target.id;
    });
});

featch_Creat_Main_Page();
function featch_Creat_Main_Page() {
    fetch('https://project-49di.onrender.com/auth/getsongsforcreatmainpage')
        .then((data) => data.json())
        .then((res) => {console.log('ff')
            Bild_Creat_Main_Page(res);
            
        });
}
function Bild_Creat_Main_Page(res) {
    const arry = res.arr;
    console.log(arry);
    main_Canvas.innerHTML = '';
    main_Canvas.innerHTML = `<div class="mainPage_autor_Div"></div>`;
    const mainPage_autor_Div = document.querySelector('.mainPage_autor_Div');
    mainPage_autor_Div.innerHTML=`<h1 class="mainPage_Autor_title">Автори</h1>
    <div class='mainPage_Autor_Div_For_card'>  </div>`
    
    Creat_autor_Card(arry)



}


function Creat_autor_Card(arry){
    arry.autor.forEach((autor) => {
        const mainPage_Autor_Div_For_card= document.querySelector('.mainPage_Autor_Div_For_card')
        const img = autor.img
       

        
        console.log(autor);
        mainPage_Autor_Div_For_card.innerHTML += `<div>
        </div><div class="mainPage_autor_card">
<button class="mainPage_Autor_Card_Img_Button"id='autor_${autor.autor}'><div class='mainPage_Autor_Img_Order_Div' id='autor_${autor.autor}'></div><img class="mainPage_Autor_Card_Img" src="${img}" alt="">
<h1 class="mainPage_Autor_Card_Autor_Name">${autor.autor}</h1>
</button>

</div>`;
    });

const mainPage_autor_card=document.querySelectorAll('.mainPage_autor_card')
mainPage_Transition_Autor_Card_Click(mainPage_autor_card)
}
function  mainPage_Transition_Autor_Card_Click(event){
    event.forEach((button) => {
        button.addEventListener('click', (e) => {
            const clickedId = e.target.id;
            console.log(clickedId)
        });
    });

}