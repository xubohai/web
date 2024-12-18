import { loadComponent, renderTemplate } from '../utils/dom.js';
import { siteConfig } from '../config/site.js';

class Footer {
    async init() {
        let footerHTML = await loadComponent('footer');

        // 使用配置渲染模板
        footerHTML = renderTemplate(footerHTML, {
            siteName: siteConfig.siteName,
            description: siteConfig.description,
            author: siteConfig.author,
            social: siteConfig.social,
            currentYear: new Date().getFullYear()
        });

        document.getElementById('footer-container').innerHTML = footerHTML;
    }
}

export default Footer;