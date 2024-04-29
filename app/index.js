const body = document.querySelector('.icontainer');
const cancelBtn = document.querySelector('.cancel-btn');
const resetPage = document.querySelector('.reset');

cancelBtn.addEventListener('click', ()=> {
    body.style.display = 'none';
    resetPage.style.display = 'flex';
});