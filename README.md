# ⚡ Electron Demo

[English](#english) | [中文](#中文)

---

<a name="english"></a>
## English

> A cross-platform desktop application demo built with Electron + Vue 3 + TypeScript + Ant Design

### 📋 Features

- ✅ **Cross-Platform** - Windows, macOS, Linux
- ✅ **Modern Stack** - Vue 3 + TypeScript + Ant Design Vue
- ✅ **Internationalization** - English and Chinese support
- ✅ **CI/CD Ready** - GitHub Actions for automated builds
- ✅ **Auto Update** - Built-in update support

### 🖥️ Screenshots

The application includes:
- **Home Page** - Welcome screen with feature cards
- **Settings Page** - Language, theme, notifications settings
- **About Page** - Version info and links

### 🚀 How to Build

#### Prerequisites

- Node.js 18+
- npm or yarn

#### Development

```bash
# Install dependencies
npm install

# Start development server
npm run electron:dev
```

#### Build for Production

```bash
# Build for current platform
npm run build

# Build for specific platforms
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux

# Build for all platforms
npm run build:all
```

### 📦 Release with GitHub Actions

#### Method 1: Push Tag (Recommended)

```bash
git tag v1.0.0
git push origin v1.0.0
```

This will automatically:
1. Build for Windows, macOS, and Linux
2. Create GitHub Release
3. Upload installers and portable versions

#### Method 2: Manual Trigger

1. Go to **Actions** tab
2. Select **Build and Release**
3. Click **Run workflow**

### 📁 Project Structure

```
electron-demo-action/
├── .github/workflows/
│   └── build.yml           # CI/CD configuration
├── src/
│   ├── main/               # Electron main process
│   │   ├── index.ts        # Main entry
│   │   └── preload.ts      # Preload script
│   └── renderer/           # Vue renderer process
│       ├── views/          # Page components
│       ├── components/     # Shared components
│       ├── locales/        # i18n translations
│       ├── router/         # Vue Router
│       └── stores/         # Pinia stores
├── build/                  # Build resources (icons)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### 🌐 Internationalization

The app supports runtime language switching:
- Click the language button in header
- Select **English** or **中文**
- All UI elements update immediately

To add a new language:
1. Create `src/renderer/locales/[lang].ts`
2. Add language option in `App.vue`
3. Import in `locales/index.ts`

### 📦 Build Outputs

| Platform | Files | Description |
|----------|-------|-------------|
| Windows | `*.exe` | NSIS installer |
| Windows | `*-portable.exe` | Portable version |
| macOS | `*.dmg` | DMG installer |
| macOS | `*-mac.zip` | ZIP archive |
| Linux | `*.AppImage` | AppImage |
| Linux | `*.deb` | Debian package |

### 🛠️ Tech Stack

- **Electron** - Cross-platform desktop framework
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Ant Design Vue** - UI component library
- **Vite** - Next-gen frontend tooling
- **vue-i18n** - Internationalization
- **Pinia** - State management
- **electron-builder** - App packaging

### 🔗 Links

- [Electron Documentation](https://www.electronjs.org/docs)
- [Vue 3 Documentation](https://vuejs.org/)
- [Ant Design Vue](https://antdv.com/)
- [electron-builder](https://www.electron.build/)

---

<a name="中文"></a>
## 中文

> 使用 Electron + Vue 3 + TypeScript + Ant Design 构建的跨平台桌面应用演示

### 📋 功能特性

- ✅ **跨平台** - 支持 Windows、macOS、Linux
- ✅ **现代技术栈** - Vue 3 + TypeScript + Ant Design Vue
- ✅ **国际化** - 支持中英文切换
- ✅ **CI/CD 就绪** - GitHub Actions 自动构建
- ✅ **自动更新** - 内置更新支持

### 🖥️ 应用截图

应用包含：
- **首页** - 欢迎界面和功能卡片
- **设置页** - 语言、主题、通知设置
- **关于页** - 版本信息和链接

### 🚀 如何构建

#### 环境要求

- Node.js 18+
- npm 或 yarn

#### 开发模式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run electron:dev
```

#### 生产构建

```bash
# 为当前平台构建
npm run build

# 为指定平台构建
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux

# 为所有平台构建
npm run build:all
```

### 📦 使用 GitHub Actions 发布

#### 方式一：推送 Tag（推荐）

```bash
git tag v1.0.0
git push origin v1.0.0
```

这将自动：
1. 构建 Windows、macOS 和 Linux 版本
2. 创建 GitHub Release
3. 上传安装包和便携版

#### 方式二：手动触发

1. 进入 **Actions** 标签页
2. 选择 **Build and Release**
3. 点击 **Run workflow**

### 📁 项目结构

```
electron-demo-action/
├── .github/workflows/
│   └── build.yml           # CI/CD 配置
├── src/
│   ├── main/               # Electron 主进程
│   │   ├── index.ts        # 主入口
│   │   └── preload.ts      # 预加载脚本
│   └── renderer/           # Vue 渲染进程
│       ├── views/          # 页面组件
│       ├── components/     # 共享组件
│       ├── locales/        # 国际化翻译
│       ├── router/         # Vue Router
│       └── stores/         # Pinia 状态管理
├── build/                  # 构建资源（图标）
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### 🌐 国际化

应用支持运行时语言切换：
- 点击顶部的语言按钮
- 选择 **English** 或 **中文**
- 所有界面元素立即更新

添加新语言：
1. 创建 `src/renderer/locales/[lang].ts`
2. 在 `App.vue` 中添加语言选项
3. 在 `locales/index.ts` 中导入

### 📦 构建产物

| 平台 | 文件 | 说明 |
|------|------|------|
| Windows | `*.exe` | NSIS 安装包 |
| Windows | `*-portable.exe` | 便携版 |
| macOS | `*.dmg` | DMG 安装包 |
| macOS | `*-mac.zip` | ZIP 压缩包 |
| Linux | `*.AppImage` | AppImage |
| Linux | `*.deb` | Debian 包 |

### 🛠️ 技术栈

- **Electron** - 跨平台桌面应用框架
- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Ant Design Vue** - UI 组件库
- **Vite** - 新一代前端构建工具
- **vue-i18n** - 国际化
- **Pinia** - 状态管理
- **electron-builder** - 应用打包

### 🔗 相关链接

- [Electron 文档](https://www.electronjs.org/docs)
- [Vue 3 文档](https://cn.vuejs.org/)
- [Ant Design Vue](https://antdv.com/)
- [electron-builder](https://www.electron.build/)

---

## 📜 License

MIT License

---

*Made with ❤️ for CI/CD learning*
