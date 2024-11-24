document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.arrow.left-arrow');
    const rightArrow = document.querySelector('.arrow.right-arrow');
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;
    const totalProjects = document.querySelectorAll('.project').length;
    let projectsPerView = calculateProjectsPerView();

    function calculateProjectsPerView() {
        if (window.innerWidth <= 480) {
            return 1;
        } else if (window.innerWidth <= 768) {
            return 1;
        }
        return 2;
    }

    function updateCarousel() {
        projectsPerView = calculateProjectsPerView();
        const maxIndex = totalProjects - projectsPerView;
        currentIndex = Math.min(currentIndex, maxIndex);
        moveCarousel(0);
    }

    function moveCarousel(direction) {
        const maxIndex = totalProjects - projectsPerView;
        if (direction === 'left') {
            currentIndex = Math.max(currentIndex - 1, 0);
        } else if (direction === 'right') {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        }
        const translateX = -(currentIndex * (100 / projectsPerView));
        carouselContainer.style.transform = `translateX(${translateX}%)`;
    }

    leftArrow.addEventListener('click', () => moveCarousel('left'));
    rightArrow.addEventListener('click', () => moveCarousel('right'));
    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});

/*Añadir opiniones*/ 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackList = document.getElementById('feedback-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        feedbackItem.innerHTML = `
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Opinión:</strong> ${message}</p>
            <hr>
        `;

        feedbackList.appendChild(feedbackItem);

        form.reset();
    });
});