export const siteConfig = {
    // 基本信息
    siteName: "我的个人网站",
    author: "博海",
    title: "全栈开发工程师",
    description: "一名软件开发工程师，热爱创造有趣的网络应用",

    // 导航菜单配置
    navigation: [{
            path: "/",
            label: "首页"
        },
        {
            path: "/portfolio.html",
            label: "作品集"
        },
        {
            path: "/contact.html",
            label: "联系我"
        }
    ],

    // 文字效果配置
    textEffects: {
        siteName: {
            text: "博海",
            effect: "gradient" //gradient - 渐变效果 neon - 霓虹灯效果 glitch - 故障效果 metallic - 金属效果
        }
    },

    // 社交链接
    social: {
        github: "https://github.com/yourusername",
        email: "mailto:1939525824@qq.com",
        // 移动端打开会自动跳转QQ添加好友，PC端打开会显示二维码
        qq: "mqqapi://card/show_pslcard?src_type=internal&source=sharecard&version=1&uin=1939525824",
        wechat: "#wechat-qr",
        phone: "tel:+86-151-7525-0510"
    },

    // 社交媒体配置
    socialConfig: {
        // github: {
        //     icon: '<i class="fab fa-github"></i>',
        //     label: 'GitHub',
        //     description: '查看我GitHub'
        // },
        qq: {
            icon: '<i class="fab fa-qq"></i>',
            label: 'QQ',
            description: '联系我的QQ：1939525824'
        },
        wechat: {
            icon: '<i class="fab fa-weixin"></i>',
            label: '微信',
            description: '扫码加我微信',
            qrcode: 'assets/images/wechat-qr.jpg'
        },
        phone: {
            icon: '<i class="fas fa-phone"></i>',
            label: '电话',
            description: '给我打电话'
        },
        email: {
            icon: '<i class="fas fa-envelope"></i>',
            label: '邮箱',
            description: '发送邮件给我 1939525824@qq.com'
        }
    },

    // 作品集
    portfolio: [{
            id: 1,
            title: "项目名称1",
            description: "项目简介...",
            image: "assets/images/project1.jpg",
            tags: ["Vue.js", "Node.js", "MongoDB"],
            // link: "https://project1.example.com",
            // github: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "项目名称2",
            description: "项目简介...",
            image: "assets/images/project2.jpg",
            tags: ["React", "Express", "PostgreSQL"],
            link: "https://project2.example.com",
            github: "https://github.com/yourusername/project2"
        }
    ]
};