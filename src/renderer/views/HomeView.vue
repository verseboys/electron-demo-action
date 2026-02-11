<template>
  <div class="home-view">
    <a-row :gutter="[24, 24]">
      <a-col :span="24">
        <div class="hero-section">
          <h1 class="hero-title">{{ t('home.title') }}</h1>
          <p class="hero-subtitle">{{ t('home.subtitle') }}</p>
          <a-space size="middle">
            <a-button type="primary" size="large">
              <RocketOutlined />
              {{ t('home.getStarted') }}
            </a-button>
            <a-button size="large" @click="$router.push('/about')">
              {{ t('home.learnMore') }}
            </a-button>
          </a-space>
        </div>
      </a-col>
      
      <a-col :span="24">
        <h2 class="section-title">{{ t('home.features.title') }}</h2>
      </a-col>
      
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card hoverable class="feature-card">
          <template #cover>
            <div class="feature-icon">
              <DesktopOutlined />
            </div>
          </template>
          <a-card-meta
            :title="t('home.features.crossPlatform.title')"
            :description="t('home.features.crossPlatform.desc')"
          />
        </a-card>
      </a-col>
      
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card hoverable class="feature-card">
          <template #cover>
            <div class="feature-icon">
              <CodeOutlined />
            </div>
          </template>
          <a-card-meta
            :title="t('home.features.modernStack.title')"
            :description="t('home.features.modernStack.desc')"
          />
        </a-card>
      </a-col>
      
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card hoverable class="feature-card">
          <template #cover>
            <div class="feature-icon">
              <GlobalOutlined />
            </div>
          </template>
          <a-card-meta
            :title="t('home.features.i18n.title')"
            :description="t('home.features.i18n.desc')"
          />
        </a-card>
      </a-col>
      
      <a-col :xs="24" :sm="12" :lg="6">
        <a-card hoverable class="feature-card">
          <template #cover>
            <div class="feature-icon">
              <CloudUploadOutlined />
            </div>
          </template>
          <a-card-meta
            :title="t('home.features.cicd.title')"
            :description="t('home.features.cicd.desc')"
          />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import {
  RocketOutlined,
  DesktopOutlined,
  CodeOutlined,
  GlobalOutlined,
  CloudUploadOutlined
} from '@ant-design/icons-vue'

const { t } = useI18n()
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 36px;
  margin-bottom: 16px;
  color: white;
}

.hero-subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 32px;
}

.section-title {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.feature-card {
  text-align: center;
  height: 100%;
}

.feature-icon {
  font-size: 48px;
  color: #1890ff;
  padding: 40px 0;
  background: #f5f5f5;
}
</style>
