<script setup lang="ts">
import {  CloudArrowUpIcon, ShieldCheckIcon, ShareIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()

const features = [
  {
    name: '5G WIFI',
    description: '高清低延迟，视频传输',
    icon: CloudArrowUpIcon,
  },
  {
    name: '车模接收机',
    description: '直接替换，无损安装',
    icon: ShieldCheckIcon,
  },
  {
    name: '无限距离',
    description: '随时随地，打开即玩',
    icon: ShareIcon,
  },
]


const handleDownload = () => {
  var apkUrl = 'http://api.rcfan.cn/download/latest/';

  // 创建隐藏的a标签来触发下载
  var link = document.createElement('a');
  link.href = apkUrl;
  link.download = 'app-qmmw.apk'; // 指定下载的文件名
  document.body.appendChild(link);
  link.click();

  // 移除a标签
  document.body.removeChild(link);
}




</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <div class="first-screen">
        <div class="logo-container">
          <img class="logo" src="/logo1.jpg" alt="Logo" />全民模玩
        </div>
        <div class="relative  backdrop-blur-sm overflow-hidden border-b border-gray-200">
          <div class="mobile-container">
            <div class="relative z-10 py-6  mt-10">
              <div class="flex flex-col items-center justify-between">
                <div class="text-center ">
                  <h1 class="text-5xl tracking-tight font-light text-white  mt-50">
                    <span class="block" >手机操控遥控车</span>
                    <span class="block text-gray-300 text-2xl mt-5">随时随地，想玩就玩</span>
                  </h1>
                  <p class="mt-10 text-sm  text-gray-500 ">
                    下载我们的应用，享受便捷的服务体验
                  </p>
                  <div class="mt-5 flex-col gap-10 justify-center ">
                    <button @click="handleDownload" class="btn btn-primary w-40 rounded-full">
                      立即下载
                    </button>
                  </div>
                  <div class="mt-10 flex flex-col " >
                    <img src="/0.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="/1.png" alt="">
        <img src="/2.png" alt="">
        <img src="/3.png" alt="">
        <img src="/4.png" alt="">

      </div>
     <!-- 特色功能 -->
      <div class="py-6 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div class="mobile-container">
          <div class="text-center">
            <h2 class="text-base text-primary font-semibold tracking-wide uppercase">亮点</h2>
            <p class="mt-2 text-xl  leading-8 font-extrabold tracking-tight text-gray-900">
              更好的服务体验
            </p>
          </div>

          <div class="mt-6 grid gap-4">
            <div v-for="feature in features" :key="feature.name" class="relative p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10  rounded-lg bg-primary/10 flex items-center justify-center">
                  <component :is="feature.icon" class="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div class="ml-3 ">
                  <h3 class="text-base font-medium text-gray-900">{{ feature.name }}</h3>
                  <p class="mt-1 text-sm  text-gray-500">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 联系我们 -->
      <div class="bg-white/90 backdrop-blur-sm py-6  border-b border-gray-200">
        <div class="mobile-container">
          <div class="max-w-lg mx-auto">
            <h2 class="text-xl  font-extrabold text-gray-900 text-center">
              联系我们
            </h2>
            <div class="mt-4 ">
              <ul class="contact-us">
                <li>
                  邮箱： 241527089@qq.com
                </li>
                <li>
                  微信： QMmowan
                  <img src="/qrcode.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="bg-white/90 backdrop-blur-sm py-4  safe-bottom ">
      <div class="mobile-container">
        <div class="text-center">
          <p class="text-xs  text-gray-500">
            Copyright © 2025. All rights reserved.
            <span class="mx-2">|</span>
            <a href="/privacy.html"  class="text-primary hover:underline">用户协议</a>
            <span class="mx-2">|</span>
            <a href="/privacy-policy.html"  class="text-primary hover:underline">隐私政策</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style> 