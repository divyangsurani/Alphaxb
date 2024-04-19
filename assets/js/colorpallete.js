const btn = document.getElementById('btn');
const cards = document.querySelectorAll('.card');
const canvas = document.querySelectorAll('.canvas');
const hex = document.querySelectorAll('.hex');

btn.addEventListener('click', () => {
    cards.forEach(card => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        card.querySelector('.canvas').style.backgroundColor = '#' + randomColor;
        card.querySelector('.hex').innerHTML ='#' + randomColor;
    })
})