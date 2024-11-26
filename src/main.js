import './style.css';

export function toggleContent() {
    // Select all toggle buttons
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            //find the nearest hidden-content relative to the button
            const content = button.parentElement.previousElementSibling;

            if (!content) {
                console.error('error: No hidden content found');
                return;
            }

            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.innerHTML = 'View Less <span class="arrow">▲</span>';
            } else {
                content.style.display = 'none';
                button.innerHTML = 'View More <span class="arrow">▼</span>';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    toggleContent();
});
