const buttons_Switches = document.querySelectorAll('.menu_item');
const main_Canvas = document.querySelector('.main');
function delete_QueryParam() {
    let currentUrl = window.location.href;

    let urlObject = new URL(currentUrl);

    urlObject.searchParams.delete('param');
    urlObject.searchParams.delete('page');
    history.pushState({}, '', urlObject.toString());
}
function get_Page_queryParam() {
    const urlkey = window.location.search;
    const url = new URLSearchParams(urlkey);
    const page = url.get('page');
    return page;
}
function create_QueryParam(queryParam, PagequeryParam) {
    let currentUrl = window.location.href;

    let newUrl = new URL(currentUrl);
    newUrl.searchParams.append('param', queryParam);
    newUrl.searchParams.append('page', PagequeryParam);

    history.pushState({}, '', newUrl.toString());
}
function creatTime() {
    const now = new Date();
    const date = now.getDate() + 1 + '.' + now.getHours();
    return date;
}
buttons_Switches.forEach((button) => {
    button.addEventListener('click', (e) => {
        const clickedId = e.target.id;
        switchcase_Page_For_Start(clickedId);
    });
});
function switchcase_Page_For_Start(param_Page_Url) {
    if (param_Page_Url == null || param_Page_Url == 'main') {
        featch_Create_Main_Page();
    }
    if (param_Page_Url == 'autor') {
        autor();
    }
}
switchcase_Page_For_Start(get_Page_queryParam());

function featch_Create_Main_Page() {
    fetch('https://project-49di.onrender.com/auth/getsongsforcreatmainpage')
        .then((data) => data.json())
        .then((res) => {
            console.log('ff');
            Bild_Create_Main_Page(res);
        });
}
function Bild_Create_Main_Page(res) {
    delete_QueryParam();
    const arry = res.arr;
    console.log(arry);
    main_Canvas.innerHTML = '';
    main_Canvas.innerHTML = `<div class="mainPage_autor_Div"></div>`;
    const mainPage_autor_Div = document.querySelector('.mainPage_autor_Div');
    mainPage_autor_Div.innerHTML = `<h1 class="mainPage_Autor_title">Автори</h1>
    <div class='mainPage_Autor_Div_For_card'>  </div>`;

    Create_autor_Card(arry);
}

function Create_autor_Card(arry) {
    const mainPage_Autor_Div_For_card = document.querySelector(
        '.mainPage_Autor_Div_For_card'
    );
    arry.autor.forEach((autor) => {
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
            create_QueryParam(queryParam, function_url);

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
    main_Canvas.innerHTML = '';
    main_Canvas.innerHTML = `<div class='autorPage_Head_Autor_Content'></div><div class='autorPage_Div_Music_Content'></div>`;

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
            featch_autorPage_Create_Autor(data);
        });
    fetch('https://project-49di.onrender.com/auth/getsongsforautor', {
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
            
            featch_autorPage_Create_MusicPlayer(data);
        });
}
function featch_autorPage_Create_MusicPlayer(data) {
    const autorPage_Div_Music_Content = document.querySelector(
        '.autorPage_Div_Music_Content'
    );
   
    autorPage_Div_Music_Content.innerHTML = `
    <div class='autorPage_Div_Music_Content_line'> </div>
    <div class='autorPage_Div_Music_Content_MusicLIst'></div>
    `;
    const autorPage_Div_Music_Content_MusicLIst = document.querySelector(
        '.autorPage_Div_Music_Content_MusicLIst'
    );
    
    data.forEach((arr) => {
        console.log(arr);

        autorPage_Div_Music_Content_MusicLIst.innerHTML = `
    <div class='autorPage_Div_Music_Li'>
        
        <button class='autorPage_Div_Music_Content_Music_Play_Button'>
        <img class='autorPage_Div_Music_Content_Music_Play_Img' src='img/2ff977b7-2c90-41d5-813f-49170d570561.png' alt="" />
        </button>
        <button class='autorPage_Div_Music_Play_Button_Img_Songs'>
        <img class='autorPage_Div_Music_Play_Img_Songs' src='${arr.img_autor}' alt="" />
        </button>
        <div calss="autorPage_Div_Music_Content_Music_Head_Music"> 
        <p class='autorPage_Div_Music_Content_Music_Name_Music'>${arr.songs}</p>
        <p class='autorPage_Div_Music_Content_Music_Autor_Music'>${arr.autor}</p>
        </div>
        <div></div>
        <div class='autorPage_Div_Music_Play_Like_Div'>
        <div></div>
        <div></div>
        <p class='autorPage_Div_Music_Play_Like_Num'>${arr.like}</p>
        <button class='autorPage_Div_Music_Play_Like_Button'>
        <img class='autorPage_Div_Music_Play_Like' id="${arr._id} " src='img/image8.png' alt="" />
        </button>
        </div>
        </div>`;
    });
 console.log(data +'afaf')
    const autorPage_Div_Music_Play_Like = document.getElementsByClassName(
        'autorPage_Div_Music_Play_Like'
    );
    for (var j = 0; j < autorPage_Div_Music_Play_Like.length; j++) {
        autorPage_Div_Music_Play_Like[j].addEventListener(
            'click',
            function (event) {
                var idlike = event.target.id;
                console.log(idlike);
            }
        );
    }
}
function featch_autorPage_Create_Autor(info) {
    const autors = info.autors[0];
    console.log(autors);

    const autorPage_Head_Autor_Content = document.querySelector(
        '.autorPage_Head_Autor_Content'
    );

    autorPage_Head_Autor_Content.innerHTML = `<div class='autorPage_Head_Autor_Content_Img'>
    
    <img class='autorPage_Head_Autor_Content_Img_Main' src="${autors.img}" alt="">
    <div class="autorPage_Head_Autor_Content_Img_Slider">
    <img id='autorPage_Head_Autor_Content_Img_Left' class='autorPage_Head_Autor_Content_Img_Left autorPage_Head_Autor_Content_Img_SwitcheCase' src="${autors.img_autor_rigth}" alt="">
    <img id='autorPage_Head_Autor_Content_Img_Center' class='autorPage_Head_Autor_Content_Img_Center autorPage_Head_Autor_Content_Img_SwitcheCase' src="${autors.img}" alt="">
        <img  id='autorPage_Head_Autor_Content_Img_Rigth' class='autorPage_Head_Autor_Content_Img_Rigth autorPage_Head_Autor_Content_Img_SwitcheCase' src="${autors.img_autor_left}" alt="">
    </div>
    </div>
    <div class='autorPage_Head_Autor_Content_Text'>
    <button class='autorPage_Head_Autor_Content_Music_Play_button'>
        <img class='autorPage_Head_Autor_Content_Music_Play_Img' src='img/2ff977b7-2c90-41d5-813f-49170d570561.png' alt="" />
        </button>

    <p class='autorPage_Head_Autor_Content_Text_title'> ${autors.autor}</p>
    <p class='autorPage_Head_Autor_Content_Text_info'>${autors.title}</p>
    <p>#rock</p>
    </div>`;

    const autorPage_Head_Autor_Content_Img_SwitcheCase =
        document.querySelectorAll(
            '.autorPage_Head_Autor_Content_Img_SwitcheCase'
        );
    const autorPage_Head_Autor_Content_Img_Main = document.querySelector(
        '.autorPage_Head_Autor_Content_Img_Main'
    );
    const autorPage_Head_Img_Center = document.getElementById(
        'autorPage_Head_Autor_Content_Img_Center'
    );
    console.log(autorPage_Head_Img_Center);
    autorPage_Img_SwitcheCase(autorPage_Head_Autor_Content_Img_SwitcheCase);
}
function autorPage_Img_switchMain(data_Id, data_Src) {
    const autorPage_Head_Autor_Img_Center = document.getElementById(
        'autorPage_Head_Autor_Content_Img_Center'
    );
    const autorPage_Head_Autor_Content_Img_Main = document.querySelector(
        '.autorPage_Head_Autor_Content_Img_Main'
    );
    const autorPage_img = autorPage_Head_Autor_Img_Center.src;
    const autorPage_Change_Img = document.getElementById(data_Id);
    autorPage_Head_Autor_Img_Center.src = data_Src;
    autorPage_Change_Img.src = autorPage_img;

    autorPage_Head_Autor_Content_Img_Main.src = data_Src;
}
function autorPage_Img_SwitcheCase(event) {
    event.forEach((element) => {
        element.addEventListener('click', (e) => {
            const autorPage_id_Element_Switch = e.target.id;
            const autorPage_url_Element_Switch = e.target.src;

            autorPage_Img_switchMain(
                autorPage_id_Element_Switch,
                autorPage_url_Element_Switch
            );
        });
    });
}

function autorPage_Like_Function(id_Like) {
    localStorage.getItem('time');
    if (time - creatTime() >= 0) {
        console.log('all good');
    } else {
        console.log('aaa');
    }

    // fetch('http://localhost:3000/auth/musiclike', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ like_id: id_Like }),
    //         }).then(() => {

    //             musicList.innerHTML = '';

    //             getsongs();
    //             return console.log('allgood');
    //         });
}
