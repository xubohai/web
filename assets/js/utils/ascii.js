// ASCII艺术字处理工具
export function renderAsciiArt(art) {
    // 移除首尾空行并保持对齐
    return art.trim().split('\n').map(line => line).join('\n');
}

// 在控制台打印ASCII艺术字
export function printAsciiArt(art) {
    console.log(renderAsciiArt(art));
}

// 将ASCII艺术字转换为HTML pre标签
export function asciiToHtml(art, className = 'ascii-art') {
    return `<pre class="${className}">${renderAsciiArt(art)}</pre>`;
}