import { siteConfig } from '../config/site.js';
import { setPageTitle } from '../utils/dom.js';

class Contact {
    async init() {
        setPageTitle('联系我');
        this.renderSocialCards();
        this.renderWechatModal();
        this.bindEvents();
    }

    renderSocialCards() {
        const socialGrid = document.querySelector('.social-grid');
        if (!socialGrid) return;

        // 检测是否为移动设备
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        socialGrid.innerHTML = Object.entries(siteConfig.social)
            .map(([platform, url]) => {
                const config = siteConfig.socialConfig[platform];
                if (!config) return '';

                // 为需要二维码的平台添加特殊处理
                let href = url;
                let extraClass = '';

                if (platform === 'wechat' || (platform === 'qq' && !isMobile)) {
                    href = 'javascript:void(0)';
                    extraClass = `${platform}-trigger`;
                }

                return `
                    <a href="${href}" target="_blank" class="social-card ${platform} ${extraClass}">
                        <div class="social-icon">
                            ${config.icon}
                        </div>
                        <div class="social-info">
                            <h3>${config.label}</h3>
                            <p>${config.description}</p>
                        </div>
                    </a>
                `;
            })
            .join('');
    }

    renderWechatModal() {
        const modalHTML = `
            <div id="wechat-modal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${siteConfig.socialConfig.wechat.qrcode}" alt="微信二维码">
                    <p>扫码添加我的微信</p>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    bindEvents() {
        // 微信二维码弹窗事件
        const modal = document.getElementById('wechat-modal');
        const wechatTrigger = document.querySelector('.wechat-trigger');
        const closeBtn = document.querySelector('.modal .close');

        if (wechatTrigger && modal) {
            wechatTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
            });
        }

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }
}

export default Contact;