class MobileMenu {   
    
    constructor(element) {
        this.element = element;
    }

    isActive() {
        return this.element.classList.contains('mobile-menu--active');
    }

    open() {
        this.element.classList.add('mobile-menu--active');
    }

    close() {
        this.element.classList.remove('mobile-menu--active');
    }
}

const mobileMenuId = 'mobile-menu'

const mobileMenuBtnElem = document.getElementById('mobile-btn');
const mobileMenuElem = document.getElementById(mobileMenuId);
const bodyElem = document.getElementById('body');

const mobileMenu = new MobileMenu(mobileMenuElem);

const handler = () => {
    if(mobileMenu.isActive()) {
        mobileMenu.close();
        bodyElem.style.overflow = 'visible';
    } else {
        mobileMenu.open();
        bodyElem.style.overflow = 'hidden';
    }
}

mobileMenuBtnElem.addEventListener('click', handler, false);
