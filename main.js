const buttons_Switches = document.querySelectorAll('.menu_item');
const main_Canvas = document.querySelector('.main');
buttons_Switches.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedId = e.target.id;
    });
});

featch_Creat_Main_Page();
function featch_Creat_Main_Page() {
    fetch('http://localhost:3000/auth/getsongsforcreatmainpage')
        .then((data) => data.json())
        .then((res) => {
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
    const mainPage_Autor_Div_For_card= document.querySelector('.mainPage_Autor_Div_For_card')
    arry.autor.forEach((autor) => {
        const Buffer_img = autor.img.data.data;
        const blob = new Blob([new Uint8Array(Buffer_img)], {
            type: 'image/jpeg',
        });

        const imgUrl = URL.createObjectURL(blob);
        console.log(imgUrl);
        console.log(autor);
        mainPage_Autor_Div_For_card.innerHTML += `<div>
        </div><div class="mainPage_autor_card">
<button class="mainPage_Autor_Card_Img_Button"><img class="mainPage_Autor_Card_Img" src="${imgUrl}" alt="">
<h1 class="mainPage_Autor_Card_Autor_Name">${autor.autor}</h1>
</button>

</div>
`;
    });



}
console.log(buttons_Switches);
