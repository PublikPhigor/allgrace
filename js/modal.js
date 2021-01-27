//team card modal
const openTeamBtn = document.querySelector('.openTeamBtn');
const teamModal = document.querySelector('.team-modal');
const closeTeamBtn = document.querySelector('.close-modal-btn');
const modalContainer = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');

//open modal function
const openModal = (modal, modalContainer, modalOverlay) => {
    modal.classList.add('active');
    modalContainer.classList.add('active');
    modalOverlay.classList.add('active');
};

//event listener
openTeamBtn.addEventListener('click', () => {
    openModal(teamModal, modalContainer, modalOverlay);
});

//close modal function
const closeModal = (modal, modalContainer, modalOverlay) => {
    modal.classList.remove('active');
    modalContainer.classList.remove('active');
    modalOverlay.classList.remove('active');
}

//event listener 
closeTeamBtn.addEventListener('click', ()=> {
    closeModal(teamModal, modalContainer, modalOverlay);
});

