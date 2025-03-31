<script setup>
import TopBar from '@/components/TopBar.vue';
import SideBar from '@/components/SideBar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <SideBar />
    <main class="content">
        <TopBar />
        <slot></slot>
        <Footer></Footer>
    </main>
</template>