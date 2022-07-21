const sidebar = document.querySelector('.sidebar');
const closebtn = document.querySelector('.close');
const openbtn = document.querySelector('.menu');

openbtn.addEventListener('click', () => {
  sidebar.style.display = 'flex';
})

closebtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
});