/**
 * 创建文字效果
 * @param {Object} config - 文字效果配置
 * @returns {string} 带有效果的HTML字符串
 */
export function createTextEffect(config) {
    const { text, effect } = config;
    return `<span class="text-effect ${effect}-text">${text}</span>`;
}