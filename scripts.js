window.onload = function() {
    const reviewList = document.getElementById('review-list');
    reviews.forEach(review => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.innerHTML = `<h3>${review.name}</h3><p>${review.review}</p><p>Ocena: ${review.rating}</p>`;
        reviewList.appendChild(div);
    });
};
