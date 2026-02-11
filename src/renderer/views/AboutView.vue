<template>
  <div class="about-view">
    <a-row :gutter="[24, 24]">
      <a-col :xs="24" :lg="12">
        <a-card>
          <div class="about-header">
            <div class="about-icon">⚡</div>
            <h1>{{ t('app.title') }}</h1>
            <a-tag color="blue">{{ t('about.version') }}: {{ version }}</a-tag>
            <a-tag color="green">{{ t('about.platform') }}: {{ platform }}</a-tag>
          </div>
          
          <p class="about-desc">{{ t('about.description') }}</p>
          
          <a-divider />
          
          <h3>{{ t('about.features.title') }}</h3>
          <a-list
            :data-source="t('about.features.items')"
            :split="false"
          >
            <template #renderItem="{ item }">
              <a-list-item>
                <CheckCircleOutlined style="color: #52c41a; margin-right: 8px" />
                {{ item }}
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </a-col>
      
      <a-col :xs="24" :lg="12">
        <a-card :title="t('about.links.title')">
          <a-list :split="false">
            <a-list-item>
              <a-button type="link" @click="openLink('https://github.com/verseboys/electron-demo-action')">
                <GithubOutlined />
                {{ t('about.links.github') }}
              </a-button>
            </a-list-item>
            <a-list-item>
              <a-button type="link" @click="openLink('https://github.com/verseboys/electron-demo-action#readme')">
                <BookOutlined />
                {{ t('about.links.docs') }}
              </a-button>
            </a-list-item>
            <a-list-item>
              <a-button type="link" @click="openLink('https://github.com/verseboys/electron-demo-action/issues')">
                <BugOutlined />
                {{ t('about.links.issues') }}
              </a-button>
            </a-list-item>
          </a-list>
        </a-card>
        
        <a-card title="System Info" style="margin-top: 24px">
          <a-descriptions :column="1" bordered size="small">
            <a-descriptions-item label="Electron">v29.x</a-descriptions-item>
            <a-descriptions-item label="Vue">v3.4.x</a-descriptions-item>
            <a-descriptions-item label="TypeScript">v5.4.x</a-descriptions-item>
            <a-descriptions-item label="Ant Design Vue">v4.x</a-descriptions-item>
            <a-descriptions-item label="Node.js">{{ nodeVersion }}</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
      
      <a-col :span="24">
        <div class="copyright">
          {{ t('about.copyright', { year: new Date().getFullYear() }) }}
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  CheckCircleOutlined,
  GithubOutlined,
  BookOutlined,
  BugOutlined
} from '@ant-design/icons-vue'

const { t } = useI18n()

const version = ref('1.0.0')
const platform = ref('Unknown')
const nodeVersion = ref(process.versions?.node || 'N/A')

onMounted(async () => {
  if (window.electronAPI) {
    version.value = await window.electronAPI.getAppVersion()
    const plat = await window.electronAPI.getPlatform()
    platform.value = plat === 'darwin' ? 'macOS' : plat === 'win32' ? 'Windows' : 'Linux'
  }
})

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.about-view {
  max-width: 1000px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 24px;
}

.about-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.about-header h1 {
  margin-bottom: 16px;
}

.about-desc {
  text-align: center;
  color: #666;
  font-size: 16px;
}

.copyright {
  text-align: center;
  color: #999;
  padding: 24px;
}
</style>
