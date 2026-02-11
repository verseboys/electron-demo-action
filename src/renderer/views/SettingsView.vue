<template>
  <div class="settings-view">
    <a-card :title="t('settings.title')">
      <a-tabs v-model:activeKey="activeTab">
        <!-- General Tab -->
        <a-tab-pane key="general" :tab="t('settings.general.title')">
          <a-form layout="vertical">
            <a-form-item :label="t('settings.general.language')">
              <template #extra>{{ t('settings.general.languageDesc') }}</template>
              <a-select v-model:value="settings.language" style="width: 200px">
                <a-select-option value="en">English</a-select-option>
                <a-select-option value="zh">中文</a-select-option>
              </a-select>
            </a-form-item>
            
            <a-form-item :label="t('settings.general.theme')">
              <template #extra>{{ t('settings.general.themeDesc') }}</template>
              <a-radio-group v-model:value="settings.theme">
                <a-radio-button value="light">{{ t('settings.general.themeLight') }}</a-radio-button>
                <a-radio-button value="dark">{{ t('settings.general.themeDark') }}</a-radio-button>
                <a-radio-button value="system">{{ t('settings.general.themeSystem') }}</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        
        <!-- Notifications Tab -->
        <a-tab-pane key="notifications" :tab="t('settings.notifications.title')">
          <a-form layout="vertical">
            <a-form-item>
              <div class="setting-row">
                <div>
                  <div class="setting-label">{{ t('settings.notifications.enable') }}</div>
                  <div class="setting-desc">{{ t('settings.notifications.enableDesc') }}</div>
                </div>
                <a-switch v-model:checked="settings.notifications.enabled" />
              </div>
            </a-form-item>
            
            <a-form-item>
              <div class="setting-row">
                <div>
                  <div class="setting-label">{{ t('settings.notifications.sound') }}</div>
                  <div class="setting-desc">{{ t('settings.notifications.soundDesc') }}</div>
                </div>
                <a-switch v-model:checked="settings.notifications.sound" :disabled="!settings.notifications.enabled" />
              </div>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        
        <!-- Advanced Tab -->
        <a-tab-pane key="advanced" :tab="t('settings.advanced.title')">
          <a-form layout="vertical">
            <a-form-item>
              <div class="setting-row">
                <div>
                  <div class="setting-label">{{ t('settings.advanced.devTools') }}</div>
                  <div class="setting-desc">{{ t('settings.advanced.devToolsDesc') }}</div>
                </div>
                <a-switch v-model:checked="settings.advanced.devTools" />
              </div>
            </a-form-item>
            
            <a-form-item>
              <div class="setting-row">
                <div>
                  <div class="setting-label">{{ t('settings.advanced.autoUpdate') }}</div>
                  <div class="setting-desc">{{ t('settings.advanced.autoUpdateDesc') }}</div>
                </div>
                <a-switch v-model:checked="settings.advanced.autoUpdate" />
              </div>
            </a-form-item>
          </a-form>
        </a-tab-pane>
      </a-tabs>
      
      <a-divider />
      
      <a-space>
        <a-button type="primary" @click="saveSettings">
          <SaveOutlined />
          {{ t('settings.save') }}
        </a-button>
        <a-button @click="resetSettings">
          <UndoOutlined />
          {{ t('settings.reset') }}
        </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { message } from 'ant-design-vue'
import { SaveOutlined, UndoOutlined } from '@ant-design/icons-vue'

const { t, locale } = useI18n()

const activeTab = ref('general')

const settings = reactive({
  language: locale.value,
  theme: 'light',
  notifications: {
    enabled: true,
    sound: true
  },
  advanced: {
    devTools: false,
    autoUpdate: true
  }
})

// Watch language change
watch(() => settings.language, (newLang) => {
  locale.value = newLang
  localStorage.setItem('language', newLang)
  if (window.electronAPI) {
    window.electronAPI.setLanguage(newLang)
  }
})

const saveSettings = () => {
  localStorage.setItem('settings', JSON.stringify(settings))
  message.success(t('messages.settingsSaved'))
}

const resetSettings = () => {
  settings.language = 'en'
  settings.theme = 'light'
  settings.notifications.enabled = true
  settings.notifications.sound = true
  settings.advanced.devTools = false
  settings.advanced.autoUpdate = true
  message.success(t('messages.settingsReset'))
}

// Load saved settings
const savedSettings = localStorage.getItem('settings')
if (savedSettings) {
  try {
    Object.assign(settings, JSON.parse(savedSettings))
  } catch (e) {
    console.error('Failed to load settings:', e)
  }
}
</script>

<style scoped>
.settings-view {
  max-width: 800px;
  margin: 0 auto;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.setting-label {
  font-weight: 500;
  margin-bottom: 4px;
}

.setting-desc {
  font-size: 12px;
  color: #666;
}
</style>
