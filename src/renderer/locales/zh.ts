export default {
  app: {
    title: 'Electron 演示',
    footer: '© {year} Electron 演示. 保留所有权利.'
  },
  menu: {
    home: '首页',
    settings: '设置',
    about: '关于'
  },
  home: {
    title: '欢迎使用 Electron 演示',
    subtitle: '使用 Vue 3 + TypeScript + Ant Design 构建的跨平台桌面应用',
    features: {
      title: '功能特性',
      crossPlatform: {
        title: '跨平台',
        desc: '支持 Windows、macOS 和 Linux'
      },
      modernStack: {
        title: '现代技术栈',
        desc: '使用 Vue 3、TypeScript 和 Ant Design 构建'
      },
      i18n: {
        title: '国际化',
        desc: '支持多种语言'
      },
      cicd: {
        title: 'CI/CD 就绪',
        desc: '使用 GitHub Actions 自动构建和发布'
      }
    },
    getStarted: '开始使用',
    learnMore: '了解更多'
  },
  settings: {
    title: '设置',
    general: {
      title: '通用',
      language: '语言',
      languageDesc: '选择您偏好的语言',
      theme: '主题',
      themeDesc: '选择浅色或深色主题',
      themeLight: '浅色',
      themeDark: '深色',
      themeSystem: '跟随系统'
    },
    notifications: {
      title: '通知',
      enable: '启用通知',
      enableDesc: '接收桌面通知',
      sound: '声音',
      soundDesc: '通知时播放声音'
    },
    advanced: {
      title: '高级',
      devTools: '开发者工具',
      devToolsDesc: '启动时显示开发者工具',
      autoUpdate: '自动更新',
      autoUpdateDesc: '自动检查更新'
    },
    save: '保存设置',
    reset: '恢复默认'
  },
  about: {
    title: '关于',
    version: '版本',
    platform: '平台',
    description: '一个用于测试 GitHub Actions 自动构建和发布跨平台桌面应用的演示项目。',
    features: {
      title: '技术栈',
      items: [
        'Electron - 跨平台桌面应用框架',
        'Vue 3 - 渐进式 JavaScript 框架',
        'TypeScript - 类型安全的 JavaScript',
        'Ant Design Vue - UI 组件库',
        'Vite - 新一代前端构建工具',
        'GitHub Actions - CI/CD 自动化'
      ]
    },
    links: {
      title: '链接',
      github: 'GitHub 仓库',
      docs: '文档',
      issues: '报告问题'
    },
    copyright: '© {year} Demo Author. MIT 许可证.'
  },
  messages: {
    languageChanged: '语言切换成功',
    settingsSaved: '设置已保存',
    settingsReset: '设置已恢复默认',
    newFile: '新建文件',
    openFile: '打开文件对话框',
    saveFile: '文件已保存'
  }
}
