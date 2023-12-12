/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/music.js":
/*!**********************!*\
  !*** ./src/music.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.body;\r\nconst loade = document.querySelector('.loader');\r\nconst autorbody = document.querySelector('.autorbody');\r\nconst musiclistdiv = document.querySelector('.musiclist');\r\nconst name_Song=document.querySelector('.name_Song')\r\nconst menu_Img=document.querySelector('.menu_img')\r\nfunction loader() {\r\n    loade.classList.remove('loader');\r\n    body.style.backgroundColor = 'white';\r\n}\r\nfunction bildautor(img) {\r\n    const data = img.autors[0];\r\n    imageArra = data.img.data.data;\r\n\r\n    const blob = new Blob([new Uint8Array(imageArra)], { type: 'image/jpeg' });\r\n\r\n    const imgUrl = URL.createObjectURL(blob);\r\n    autorbody.innerHTML = '';\r\n    autorbody.innerHTML = `<img src=\"${imgUrl}\" alt=\"\"> \r\n    <div>\r\n    <h1>${data.autor} </h1>\r\n    <p> ${data.title}</p>\r\n    </div>`;\r\n}\r\nfunction bildplaylist(music) {\r\n    const data = music.music[0];\r\n\r\n    musiclist = '';\r\n    for (i = 0; i < data.length; i++) {\r\n        musiclist += `<div class='musicli'>\r\n      <button  class='play-button' id=${data[i]._id}>play</button>\r\n      <h1>${data[i].songs} </h1>\r\n\r\n      </div>`;\r\n    }\r\n\r\n    musiclistdiv.innerHTML = ` ${musiclist}`;\r\n\r\n    getsongs();\r\n}\r\n\r\nfunction getsongs() {\r\n    const playButtons = document.querySelectorAll('.play-button');\r\n    let id \r\n\r\n    playButtons.forEach((button) => {\r\n        button.addEventListener('click', function (event) {\r\n            id = event.target.id;\r\n            fetch('https://project-49di.onrender.com/auth/music',{\r\n              method: 'POST',\r\n              headers: {\r\n                  'Content-Type': 'application/json',\r\n              },\r\n              body: JSON.stringify({ id: id }),\r\n              \r\n          }).then(res=> res.json()).then((data)=>{\r\n            console.log(data)\r\n            bildmusic(data)\r\n          })\r\n            \r\n        });\r\n    });\r\n \r\n} \r\n\r\n\r\nfunction bildmusic(music){\r\n  audioData=music.music.data.data\r\n  \r\n  let blob = new Blob([new Uint8Array(audioData)], {\r\n    type: music.music.contentType,\r\n});\r\n\r\n\r\nconst audioUrl = URL.createObjectURL(blob);\r\nname_Song.innerHTML=`${music.songs.songs}`\r\nconsole.log(audioUrl)\r\ndocument.getElementById('audio').src = audioUrl\r\n}\r\nfunction getautor() {\r\n    const urlkey = window.location.search;\r\n\r\n    const url = new URLSearchParams(urlkey);\r\n    console.log(urlkey);\r\n    const autor = url.get('token');\r\n    console.log(autor);\r\n\r\n    fetch('https://project-49di.onrender.com/auth/getsongs', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify({ autor: autor }),\r\n    })\r\n        .then((response) => {\r\n            // Handle the response from the server\r\n            if (!response.ok) {\r\n                throw new Error(\r\n                    `Network response was not ok: ${response.status}`\r\n                );\r\n            }\r\n            return response.json();\r\n        })\r\n        .then((data) => {\r\n          console.log(data);\r\n            loader();\r\n            bildautor(data);\r\n            bildplaylist(data);\r\n            \r\n        })\r\n        .catch((error) => {\r\n            // Handle any errors that occurred during the fetch\r\n            console.error('Error:', error);\r\n        });\r\n}\r\n\r\ngetautor();\r\n\n\n//# sourceURL=webpack://fe-project/./src/music.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/music.js"]();
/******/ 	
/******/ })()
;