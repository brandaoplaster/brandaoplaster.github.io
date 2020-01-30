<template>
     <div class="columns is-fullheight">
        <core-toolbar></core-toolbar>
        <div class="column is-main-content">
            <section-home></section-home>
            <section-about></section-about>
            <section-experience></section-experience>
        </div>
     </div>
</template>

<script>
    export default {
        name: 'home',
        data: () => ({
        }),
        components: {
            CoreToolbar: () => import('@/components/core/toolbar'),
            SectionHome: () => import('@/components/section/home'),
            SectionAbout: () => import('@/components/section/about'),
            SectionExperience: () => import('@/components/section/experience'),
        }  
    }
</script>

<style lang="css" scoped>
</style>