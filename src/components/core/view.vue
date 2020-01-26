<template>
     <div class="columns is-fullheight">
        <core-toolbar></core-toolbar>
        <div class="column is-main-content">
            <section-home></section-home>
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
        }  
    }
</script>

<style lang="css" scoped>
</style>