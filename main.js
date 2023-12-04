const buttons_Switches = document.querySelectorAll('.menu_item');
const main_Canvas = document.querySelector('.main');
function delete_QueryParam() {
    let currentUrl = window.location.href;

    let urlObject = new URL(currentUrl);

    urlObject.searchParams.delete('param');
    urlObject.searchParams.delete('page');
    history.pushState({}, '', urlObject.toString());
}
function get_Page_queryParam(){
    const urlkey = window.location.search;
   const url = new URLSearchParams(urlkey);
    const page = url.get('page');
    return page
}
function creat_QueryParam(queryParam,PagequeryParam) {
    let currentUrl = window.location.href;

    let newUrl = new URL(currentUrl);
    newUrl.searchParams.append('param', queryParam);
    newUrl.searchParams.append('page', PagequeryParam); 

    history.pushState({}, '', newUrl.toString());
}
buttons_Switches.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedId = e.target.id;
    });
});
function switch_Page_For_Start(){
if(get_Page_queryParam()==null){
    featch_Creat_Main_Page()
}if(get_Page_queryParam()=='autor'){
    autor()
}
}
switch_Page_For_Start()

function featch_Creat_Main_Page() {

    fetch('https://project-49di.onrender.com/auth/getsongsforcreatmainpage')
        .then((data) => data.json())
        .then((res) => {
            console.log('ff');
            Bild_Creat_Main_Page(res);
        });
}
function Bild_Creat_Main_Page(res) {
    delete_QueryParam();
    const arry = res.arr;
    console.log(arry);
    main_Canvas.innerHTML = '';
    main_Canvas.innerHTML = `<div class="mainPage_autor_Div"></div>`;
    const mainPage_autor_Div = document.querySelector('.mainPage_autor_Div');
    mainPage_autor_Div.innerHTML = `<h1 class="mainPage_Autor_title">Автори</h1>
    <div class='mainPage_Autor_Div_For_card'>  </div>`;

    Creat_autor_Card(arry);
}

function Creat_autor_Card(arry) {
    arry.autor.forEach((autor) => {
        const mainPage_Autor_Div_For_card = document.querySelector(
            '.mainPage_Autor_Div_For_card'
        );
        const img = autor.img;

        console.log(autor);
        mainPage_Autor_Div_For_card.innerHTML += `<div>
        </div><div class="mainPage_autor_card">
<button class="mainPage_Autor_Card_Img_Button"id='autor_${autor.autor}'><div class='mainPage_Autor_Img_Order_Div' id='autor_${autor.autor}' ></div><img class="mainPage_Autor_Card_Img" src="${img}" alt="">
<h1 class="mainPage_Autor_Card_Autor_Name">${autor.autor}</h1>
</button>

</div>`;
    });

    const mainPage_autor_card = document.querySelectorAll(
        '.mainPage_autor_card'
    );
    mainPage_Transition_Autor_Card_Click(mainPage_autor_card);
}
function mainPage_Transition_Autor_Card_Click(event) {
    event.forEach((button) => {
        button.addEventListener('click', (e) => {
            const clickedId = e.target.id;
            const arr = clickedId.split('_');
            const function_url = arr[0];
            const queryParam = arr[1];
            console.log(function_url);
            delete_QueryParam();
            creat_QueryParam(queryParam,function_url);

            if (function_url == 'autor') {
                autor();
            }
        });
    });
}

function autor() {
    const urlkey = window.location.search;

    const url = new URLSearchParams(urlkey);

    const autor = url.get('param');
    

    fetch('https://project-49di.onrender.com/auth/getsongs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ autor: autor }),
    })
        .then((response) => {
            // Handle the response from the server

            return response.json();
        })
        .then((data) => {
            featch_autorPage_Creat(data)
        });
}
function featch_autorPage_Creat(info) {
    const music=info.music
    const autors=info.autors
    console.log(autors)
    console.log(music)
    main_Canvas.innerHTML = '';
    main_Canvas.innerHTML=`<div></div><div></div>`
}
