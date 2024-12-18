import { siteConfig } from '../config/site.js';

// 加载HTML组件的工具函数
async function loadComponent(componentName) {
    try {
        const response = await fetch(`/components/${componentName}.html`);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error('加载组件失败:', error);
        return '';
    }
}

// DOM操作相关的工具函数
function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

// 模板渲染函数
function renderTemplate(template, data) {
    return template.replace(/\${(.*?)}/g, (match, key) => {
        return data[key.trim()] || '';
    });
}

// 设置页面标题
function setPageTitle(pageName = '') {
    const baseTitle = siteConfig.siteName;
    document.title = pageName ? `${pageName} - ${baseTitle}` : baseTitle;
}

export { loadComponent, createElement, renderTemplate, setPageTitle };