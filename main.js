const buttons_Switches=document.querySelectorAll('.menu_item')

buttons_Switches.forEach(button => {
    button.addEventListener('click', (e) => {
        const clickedId = e.target.id;
        console.log(clickedId); // Выводит id элемента, на который был клик
    });
});
console.log(buttons_Switches)