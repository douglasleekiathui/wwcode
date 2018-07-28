<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <slot/>
    </v-content>
    <v-footer app>
      <v-spacer/><span>&copy; 2018</span><v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    data(){
        return{
            title:'Vuetify.js'
        }
    }
}
</script>