document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.review-item');
    const dots = document.querySelectorAll('.owl-dot');

    let currentIndex = 0;

    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
                item.style.transform = `translateX(0)`;
            } else {
                item.classList.remove('active');
                item.style.transform = `translateX(${(i - index) * 100}%)`;
            }
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);

    setInterval(nextSlide, 3000); // Автопрокрутка каждые 3 секунды
});
