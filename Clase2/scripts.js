// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('comments');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        if (name && comment) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentsContainer.appendChild(commentElement);

            // Limpiar el formulario después de enviar el comentario
            document.getElementById('name').value = '';
            document.getElementById('comment').value = '';
        }
    });
});
