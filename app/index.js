const body = document.querySelector('.icontainer');
const cancelBtn = document.querySelector('.cancel-btn');
const resetPage = document.querySelector('.reset');
const resetBtn = document.querySelector('.reset button');

cancelBtn.addEventListener('click', ()=> {
    body.style.display = 'none';
    resetPage.style.display = 'flex';
});

resetBtn.addEventListener('click', () => {
    resetPage.style.display = 'none';
    body.style.display = 'flex';
});