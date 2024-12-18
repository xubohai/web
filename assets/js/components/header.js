import { loadComponent, renderTemplate } from '../utils/dom.js';
import { siteConfig } from '../config/site.js';
import { createTextEffect } from '../utils/textEffect.js';
import storage from '../utils/storage.js';

class Header {
    async init() {
        let headerHTML = await loadComponent('header');
        // 使用配置渲染模板
        headerHTML = renderTemplate(headerHTML, {
            siteName: createTextEffect(siteConfig.textEffects.siteName),
            // 其他需要替换的变量...
        });

        document.getElementById('header-container').innerHTML = headerHTML;
        this.renderNavigation();
        this.bindEvents();
        this.initTheme();
    }

    renderNavigation() {
        const navMenu = document.querySelector('.nav-menu ul');
        if (!navMenu) return;

        navMenu.innerHTML = siteConfig.navigation
            .map(item => `<li><a href="${item.path}" class="nav-link">${item.label}</a></li>`)
            .join('');
    }

    bindEvents() {
        // 移动端菜单切换
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            // 点击导航链接后关闭菜单
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                });
            });
        }

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // 高亮当前页面的导航链接
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    initTheme() {
        const savedTheme = storage.get('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        storage.set('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-toggle-icon');
        if (icon) {
            icon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }
}

export default Header;