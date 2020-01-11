<template>
    <div class="navigation-drawer">
        <v-navigation-drawer clipped fixed v-model="drawer" inset app>
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Item 2
                        </v-list-tile-title>
                    </v-list-tile-content>
                    <v-spacer></v-spacer>
                    <v-list-tile-action-text>
                        <v-btn small color="blue" fab @click.stop="drawer = !drawer">
                            <v-icon class="white--text">fa fa-angle-double-left fa-3x</v-icon>
                        </v-btn>
                    </v-list-tile-action-text>
                </v-list-tile>
            </v-list>
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Item 1
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-toolbar flat>
                <v-list-tile-action>
                    <v-icon>mdi-view-dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>
                        Menu
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-toolbar>
            <v-divider></v-divider>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            title: 'Brandao Plaster',
            drawer: true,
        }),
    }
</script>

<style lang="css" scoped>
   
</style>