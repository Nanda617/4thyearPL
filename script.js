document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('phone-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const selectedBrand = document.getElementById('phonenames').value;
        const phoneCards = document.querySelectorAll('.phone-card');

        phoneCards.forEach(card => {
            if (selectedBrand === 'Phone Brands' || card.classList.contains(selectedBrand)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
