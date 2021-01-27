//team card modal

//select open buttons
const openTeamBtn = document.querySelector('.openTeamBtn');
const openTeamBtn2 = document.querySelector('.openTeamBtn2');
const openTeamBtn3 = document.querySelector('.openTeamBtn3');
const openTeamBtn4 = document.querySelector('.openTeamBtn4');
const openTeamBtn5 = document.querySelector('.openTeamBtn5');
const openTeamBtn6 = document.querySelector('.openTeamBtn6');

//select modals
const teamModal = document.querySelector('.modal-1');
const teamModal2 = document.querySelector('.modal-2');
const teamModal3 = document.querySelector('.modal-3');
const teamModal4 = document.querySelector('.modal-4');
const teamModal5 = document.querySelector('.modal-5');
const teamModal6 = document.querySelector('.modal-6');
const modalContainer = document.querySelectorAll('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');

//select close button
const closeTeamBtn = document.querySelectorAll('.close-modal-btn');


//open modal function
let i = 0;
const openModal = (modal, modalContainer, modalOverlay) => {
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    modalContainer.forEach(container => {
        modalContainer[i].classList.add('active');
    });
};

//event listener
openTeamBtn.addEventListener('click', () => {
    i = 0;
    openModal(teamModal, modalContainer, modalOverlay);
});

openTeamBtn2.addEventListener('click', () => {
    i = 1;
    openModal(teamModal2, modalContainer, modalOverlay);
});

openTeamBtn3.addEventListener('click', () => {
    i = 2;
    openModal(teamModal3, modalContainer, modalOverlay);
});

openTeamBtn4.addEventListener('click', () => {
    i = 3;
    openModal(teamModal4, modalContainer, modalOverlay);
});

openTeamBtn5.addEventListener('click', () => {
    i = 4;
    openModal(teamModal5, modalContainer, modalOverlay);
});

openTeamBtn6.addEventListener('click', () => {
    i = 5;
    openModal(teamModal6, modalContainer, modalOverlay);
});

//close modal function
const closeModal = (modal, modalContainer, modalOverlay) => {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
    modalContainer.forEach(container => {
        modalContainer[i].classList.remove('active');
    });
}

//event listener 
closeTeamBtn.forEach(closeTeamBtn => {
    closeTeamBtn.addEventListener('click', ()=> {
        closeModal(teamModal, modalContainer, modalOverlay);
        closeModal(teamModal2, modalContainer, modalOverlay);
        closeModal(teamModal3, modalContainer, modalOverlay);
        closeModal(teamModal4, modalContainer, modalOverlay);
        closeModal(teamModal5, modalContainer, modalOverlay);
        closeModal(teamModal6, modalContainer, modalOverlay);
    });
});

modalOverlay.addEventListener('click', ()=> {
    closeModal(teamModal, modalContainer, modalOverlay);
    closeModal(teamModal2, modalContainer, modalOverlay);
    closeModal(teamModal3, modalContainer, modalOverlay);
    closeModal(teamModal4, modalContainer, modalOverlay);
    closeModal(teamModal5, modalContainer, modalOverlay);
    closeModal(teamModal6, modalContainer, modalOverlay);
});
