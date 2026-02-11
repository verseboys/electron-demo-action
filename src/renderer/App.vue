<template>
  <a-config-provider :locale="antLocale">
    <a-layout class="app-layout">
      <a-layout-header class="app-header">
        <div class="logo">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">{{ t('app.title') }}</span>
        </div>
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="horizontal"
          :items="menuItems"
          class="header-menu"
        />
        <div class="header-actions">
          <a-dropdown>
            <a-button type="text">
              <GlobalOutlined />
              {{ currentLanguage === 'en' ? 'EN' : '中文' }}
            </a-button>
            <template #overlay>
              <a-menu @click="handleLanguageChange">
                <a-menu-item key="en">English</a-menu-item>
                <a-menu-item key="zh">中文</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      
      <a-layout-content class="app-content">
        <router-view />
      </a-layout-content>
      
      <a-layout-footer class="app-footer">
        {{ t('app.footer', { year: new Date().getFullYear() }) }}
      </a-layout-footer>
    </a-layout>
  </a-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, h, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { message, Modal } from 'ant-design-vue'
import {
  HomeOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  GlobalOutlined
} from '@ant-design/icons-vue'
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import type { MenuProps } from 'ant-design-vue'

const { t, locale } = useI18n()
const router = useRouter()

const selectedKeys = ref<string[]>(['home'])
const currentLanguage = ref(locale.value)

const antLocale = computed(() => {
  return currentLanguage.value === 'zh' ? zhCN : enUS
})

const menuItems = computed<MenuProps['items']>(() => [
  {
    key: 'home',
    icon: () => h(HomeOutlined),
    label: t('menu.home'),
    onClick: () => router.push('/')
  },
  {
    key: 'settings',
    icon: () => h(SettingOutlined),
    label: t('menu.settings'),
    onClick: () => router.push('/settings')
  },
  {
    key: 'about',
    icon: () => h(InfoCircleOutlined),
    label: t('menu.about'),
    onClick: () => router.push('/about')
  }
])

const handleLanguageChange: MenuProps['onClick'] = ({ key }) => {
  currentLanguage.value = key as string
  locale.value = key as string
  localStorage.setItem('language', key as string)
  
  // Notify Electron main process
  if (window.electronAPI) {
    window.electronAPI.setLanguage(key as string)
  }
  
  message.success(t('messages.languageChanged'))
}

// Initialize language from localStorage
onMounted(() => {
  const savedLang = localStorage.getItem('language')
  if (savedLang) {
    currentLanguage.value = savedLang
    locale.value = savedLang
  }
  
  // Listen for menu events from Electron
  if (window.electronAPI) {
    const cleanupNew = window.electronAPI.onMenuNew(() => {
      message.info(t('messages.newFile'))
    })
    
    const cleanupOpen = window.electronAPI.onMenuOpen(() => {
      message.info(t('messages.openFile'))
    })
    
    const cleanupSave = window.electronAPI.onMenuSave(() => {
      message.info(t('messages.saveFile'))
    })
    
    const cleanupAbout = window.electronAPI.onMenuAbout(() => {
      router.push('/about')
    })
    
    onUnmounted(() => {
      cleanupNew()
      cleanupOpen()
      cleanupSave()
      cleanupAbout()
    })
  }
})
</script>

<style>
.app-layout {
  min-height: 100vh;
}

.app-header {
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  -webkit-app-region: drag;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 24px;
  -webkit-app-region: no-drag;
}

.logo-icon {
  font-size: 28px;
  margin-right: 8px;
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: #1890ff;
}

.header-menu {
  flex: 1;
  border-bottom: none;
  -webkit-app-region: no-drag;
}

.header-actions {
  -webkit-app-region: no-drag;
}

.app-content {
  padding: 24px;
  background: #f0f2f5;
}

.app-footer {
  text-align: center;
  background: #fff;
  color: #666;
}
</style>
