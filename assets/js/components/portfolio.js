import { siteConfig } from '../config/site.js';
import { setPageTitle } from '../utils/dom.js';

class Portfolio {
    async init() {
        setPageTitle('作品集');
        this.renderProjects();
    }

    renderProjects() {
            const projectsGrid = document.querySelector('.projects-grid');
            if (!projectsGrid) return;

            projectsGrid.innerHTML = siteConfig.portfolio
                .map(project => `
                <article class="project-item">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.link ? `<a href="${project.link}" target="_blank" class="btn primary-btn">查看项目</a>` : ''}
                            ${project.github ? `<a href="${project.github}" target="_blank" class="btn secondary-btn"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        </div>
                    </div>
                </article>
            `)
            .join('');
    }
}

export default Portfolio;