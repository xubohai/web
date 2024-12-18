import { siteConfig } from '../config/site.js';
import { setPageTitle } from '../utils/dom.js';

class Home {
    async init() {
        setPageTitle();
        this.renderHero();
    }

    renderHero() {
        const heroName = document.querySelector('.hero-name');
        if (heroName) {
            heroName.textContent = siteConfig.author;
        }

        const heroDescription = document.querySelector('.hero-description');
        if (heroDescription) {
            heroDescription.textContent = siteConfig.description;
        }
    }
}

export default Home;