console.log("me mato, cosorro");

/* LIGHT/DARK MODE SEGÚN NAVEGADOR Y SE GUARDA */
function getInitialTheme() {
    const savedTheme = localStorage.getItem('data-bs-theme');
    if (savedTheme) {
        return savedTheme;
    }
    if (window.matchMedia) {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkScheme ? 'dark' : 'light';
    }
    return 'light';
}
function updateIcon(theme) {
    const switchModeIcon = document.getElementById('switchMode');
    if (theme === 'dark') {
        switchModeIcon.classList.remove('bi-brightness-low-fill','fs-3');
        switchModeIcon.classList.add('bi-moon-fill','fs-4');
    } else {
        switchModeIcon.classList.remove('bi-moon-fill','fs-4');
        switchModeIcon.classList.add('bi-brightness-low-fill','fs-3');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = getInitialTheme();
    document.documentElement.setAttribute('data-bs-theme', initialTheme);
    updateIcon(initialTheme);
});
document.getElementById('switchMode').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('data-bs-theme', newTheme);
    updateIcon(newTheme);
});


  /* NAV BUTTON */
    let menuOpener = document.getElementById('navButton');
    let menuWin = document.getElementById('menuWindow');
    let toggle = document.querySelector('.toggle input')
    let clickCount = 0;
    const menuItems = document.querySelectorAll("li.menuItem");
    menuOpener.addEventListener('click',()=>{
        console.log('asdaddfsadf')
        clickCount++;
        if (clickCount % 2 === 0) {
        if (menuWin.classList.contains('menuHidden')) {
            menuWin.classList.remove('menuHidden');
            menuWin.classList.add('menuShown');
            setTimeout(() => {
                for (let i = menuItems.length - 1; i >= 0; i--) {
                    setTimeout(() => {
                        menuItems[i].classList.remove("menuItem");
                        menuItems[i].classList.add("animate");
                    }, (menuItems.length - 1 - i) * 100); 
                }
            }, 500);
        } else {
            menuWin.classList.remove('menuShown');
            menuWin.classList.add('menuHidden');
            const animate = document.querySelectorAll("li.animate");
            setTimeout(() => {
                animate.forEach((item) => {
                        item.classList.remove("animate");
                        item.classList.add("menuItem");
                });
            }, 200);
        }
        }
    });
    
   
    


 