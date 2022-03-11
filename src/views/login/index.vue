<template>
  <div class="w-screen h-screen flex">
    <div class="flex-1 bg-gray-400"></div>
    <div class="w-96 bg-white pt-12 pb-12 pr-8 pl-4">
      <p class="text-2xl mb-12">登录</p>
      <n-form ref="formRef">
        <n-form-item>
          <n-input size="large" placeholder="请输入用户名">
            <template #prefix>
              <app-icon icon-size="16" icon-color="">
                <icon-accout></icon-accout>
              </app-icon>
            </template>
          </n-input>
        </n-form-item>
        <n-form-item>
          <n-input size="large" placeholder="请输入密码" type="password">
            <template #prefix>
              <app-icon icon-size="16" icon-color="">
                <icon-password></icon-password>
              </app-icon>
            </template>
          </n-input>
        </n-form-item>
        <div>
          <n-checkbox>保持登录</n-checkbox>
        </div>
        <n-form-item>
          <n-button class="w-full" type="primary" size="large" @click="handleSubmit">登录</n-button>
        </n-form-item>
        <div>
          <span class="block text-center">还没有账号？<a>注册</a></span>
          <a class="block text-center">忘记密码？</a>
        </div>
      </n-form>
      <n-divider>第三方登录</n-divider>
      <div class="flex justify-around items-center">
        <app-icon>
          <icon-google></icon-google>
        </app-icon>
        <app-icon>
          <icon-facebook></icon-facebook>
        </app-icon>
        <app-icon>
          <icon-twitter></icon-twitter>
        </app-icon>
        <app-icon>
          <icon-wechat></icon-wechat>
        </app-icon>
        <app-icon>
          <icon-git-hub></icon-git-hub>
        </app-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// 登录
function handleSubmit() {
  router.push('home')
}
</script>
