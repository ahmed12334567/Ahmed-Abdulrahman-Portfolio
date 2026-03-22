let togglerTheme = document.querySelector('#switch');
togglerTheme.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
});
if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    togglerTheme.checked = true;
} else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    togglerTheme.checked = false;
}
document.addEventListener("DOMContentLoaded", () => {

    const options = {
        threshold: 0.3
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.skill-bar');

                if (bar) {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress;
                }

                observer.unobserve(entry.target);
            }
        });
    }, options);

    const skillContainers = document.querySelectorAll('.skill-container');
    skillContainers.forEach(container => {
        skillObserver.observe(container);
    });
});
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('sideMenu');
const mainContent = document.getElementById('mainContent'); // العنصر اللي هيتغبش

openBtn.addEventListener('click', () => {
    menu.classList.remove('translate-y-[-100%]', 'opacity-0', 'pointer-events-none');
    menu.classList.add('translate-y-0', 'opacity-100');

    mainContent.classList.add('blur-md', 'brightness-50'); 
    document.body.style.overflow = 'auto'; // مهم
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('translate-y-0', 'opacity-100');
    menu.classList.add('translate-y-[-100%]', 'opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'auto'; // مهم
    mainContent.classList.remove('blur-md', 'brightness-50');
});
document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.remove('translate-y-0', 'opacity-100');
    menu.classList.add('translate-y-[-100%]', 'opacity-0', 'pointer-events-none');
    mainContent.classList.remove('blur-md', 'brightness-50');
    document.body.style.overflow = 'auto';
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 
        if (targetElement) {
            const headerOffset = 80; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});