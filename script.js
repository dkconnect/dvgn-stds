function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateServiceItems() {
    if (window.location.pathname.includes('services.html') || window.location.pathname.includes('/services')) {
        const serviceItems = document.querySelectorAll('.service-item.hidden');

        serviceItems.forEach(item => {
            if (isInViewport(item)) {
                const delay = parseFloat(item.dataset.delay);
                setTimeout(() => {
                    item.classList.remove('hidden');
                    item.classList.add('visible');
                }, delay * 1000 + 50);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    if (window.location.pathname.includes('services.html') || window.location.pathname.includes('/services')) {
        setTimeout(animateServiceItems, 100);
        window.addEventListener('scroll', animateServiceItems);
    }
});
