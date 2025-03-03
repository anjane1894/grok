# 神秘命运 - 命理分析网站

## 项目说明

这是一个基于React的命理分析网站前端项目，提供星座运势、塔罗牌、手相解读、数字命理和易经八卦等多种命理服务。

## 技术栈

- React 18 (生产版本)
- TailwindCSS
- Font Awesome 图标

## 特点

- 响应式设计，适配移动端和桌面端
- 多种命理解读服务
- 简洁现代的UI设计
- 无需构建工具，可直接在浏览器中运行

## 本地开发

### 方法1: 使用本地Web服务器

1. 克隆本仓库
2. 进入项目目录
3. 使用任何本地Web服务器启动项目，例如:
   - Python: `python -m http.server`
   - Node.js: `npx serve`
   - PHP: `php -S localhost:8000`

### 方法2: 使用VS Code Live Server

1. 在VS Code中安装Live Server插件
2. 右键点击index.html，选择"Open with Live Server"

## 生产部署注意事项

本项目已针对生产环境进行了优化:

1. 使用React生产版本
2. 使用预编译的TailwindCSS
3. 不使用Babel转换器，所有JavaScript使用原生React.createElement方法
4. 使用SVG格式的favicon

## 文件结构


fortune-telling-website/
├── css/
│   ├── animations.css     # 动画样式
│   ├── styles.css         # 主样式
│   └── tailwind.min.css   # 预编译的TailwindCSS
├── images/
│   └── favicon.svg        # 网站图标
├── js/
│   ├── components/        # React组件
│   │   ├── Footer.js
│   │   ├── FortuneForm.js
│   │   ├── FortuneResult.js
│   │   ├── FortuneTypes.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── MysticElements.js
│   │   ├── Testimonials.js
│   │   └── Toast.js
│   ├── pages/
│   │   └── HomePage.js    # 主页面组件
│   ├── utils/
│   │   └── fortuneUtils.js # 工具函数
│   └── app.js             # 应用入口
└── index.html             # HTML入口文件


## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT
