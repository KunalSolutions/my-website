// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const movies = document.querySelectorAll('.movie-carousel img');
    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            alert(`You clicked on ${movie.alt}`);
        });
    });
});



document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === 'block';
  
      // Hide all answers
      document.querySelectorAll('.faq-answer').forEach((answer) => {
        answer.style.display = 'none';
      });
  
      // Toggle current answer
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });
  