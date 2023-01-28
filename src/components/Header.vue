<script setup>
import { RouterLink, useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <header>
    <div class="header-logo" @click="router.push({ name: 'home' })">
      <img
        alt="Roo logo"
        class="logo"
        src="@/assets/roo-logo.png"
        width="100"
        height="40"
      />
    </div>
    <ul class="header-nav">
      <li><RouterLink class="icons icon-card" to="/card">卡片</RouterLink></li>
      <!-- <li><RouterLink class="icons icon-card" to="/card">怪物</RouterLink></li>
      <li><RouterLink class="icons icon-card" to="/card">武器</RouterLink></li>
      <li><RouterLink class="icons icon-card" to="/card">防具</RouterLink></li>
      <li><RouterLink class="icons icon-card" to="/card">飾品</RouterLink></li> -->
    </ul>
  </header>
</template>
