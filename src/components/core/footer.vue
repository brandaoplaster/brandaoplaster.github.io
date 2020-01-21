<template>
    <v-footer dark height="auto">
        <v-card class="flex" flat tile>
            <v-card-title class="cyan darken-3">
                <strong class="subheading justify-center">
                    Encontre o melhor lugar em poucos cliques!
                </strong>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-actions class="grey darken-3 justify-center">
                &copy;{{currenteYear}} — <strong>Lucas</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    
    export default {
        name: 'Footer',
        data: () => ({
            currenteYear: new Date().getFullYear(),
        }),  
    }
</script>

<style lang="css" scoped>

</style>