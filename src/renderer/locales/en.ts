export default {
  app: {
    title: 'Electron Demo',
    footer: '© {year} Electron Demo. All rights reserved.'
  },
  menu: {
    home: 'Home',
    settings: 'Settings',
    about: 'About'
  },
  home: {
    title: 'Welcome to Electron Demo',
    subtitle: 'A cross-platform desktop application built with Vue 3 + TypeScript + Ant Design',
    features: {
      title: 'Features',
      crossPlatform: {
        title: 'Cross-Platform',
        desc: 'Run on Windows, macOS, and Linux'
      },
      modernStack: {
        title: 'Modern Stack',
        desc: 'Built with Vue 3, TypeScript, and Ant Design'
      },
      i18n: {
        title: 'Internationalization',
        desc: 'Support for multiple languages'
      },
      cicd: {
        title: 'CI/CD Ready',
        desc: 'GitHub Actions for automated builds and releases'
      }
    },
    getStarted: 'Get Started',
    learnMore: 'Learn More'
  },
  settings: {
    title: 'Settings',
    general: {
      title: 'General',
      language: 'Language',
      languageDesc: 'Select your preferred language',
      theme: 'Theme',
      themeDesc: 'Choose light or dark theme',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeSystem: 'System'
    },
    notifications: {
      title: 'Notifications',
      enable: 'Enable Notifications',
      enableDesc: 'Receive desktop notifications',
      sound: 'Sound',
      soundDesc: 'Play sound for notifications'
    },
    advanced: {
      title: 'Advanced',
      devTools: 'Developer Tools',
      devToolsDesc: 'Show developer tools on startup',
      autoUpdate: 'Auto Update',
      autoUpdateDesc: 'Automatically check for updates'
    },
    save: 'Save Settings',
    reset: 'Reset to Defaults'
  },
  about: {
    title: 'About',
    version: 'Version',
    platform: 'Platform',
    description: 'A demo project for testing GitHub Actions to automatically build and release cross-platform desktop applications.',
    features: {
      title: 'Built With',
      items: [
        'Electron - Cross-platform desktop apps',
        'Vue 3 - Progressive JavaScript framework',
        'TypeScript - Typed JavaScript',
        'Ant Design Vue - UI component library',
        'Vite - Next generation frontend tooling',
        'GitHub Actions - CI/CD automation'
      ]
    },
    links: {
      title: 'Links',
      github: 'GitHub Repository',
      docs: 'Documentation',
      issues: 'Report Issue'
    },
    copyright: '© {year} Demo Author. MIT License.'
  },
  messages: {
    languageChanged: 'Language changed successfully',
    settingsSaved: 'Settings saved',
    settingsReset: 'Settings reset to defaults',
    newFile: 'New file created',
    openFile: 'Open file dialog',
    saveFile: 'File saved'
  }
}
