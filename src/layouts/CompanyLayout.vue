<template>
  <v-app>
    <v-navigation-drawer
      dark
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="navtile" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
          <v-btn flat v-for="(m,i) in menu" :to="m.path" :key="i">{{m.title}}</v-btn>
      </v-toolbar-items>
      <v-spacer/>

        <v-menu offset-y>
          <v-btn slot="activator" icon><v-icon>person</v-icon></v-btn>
          <v-list>
            <v-list-tile to="/login">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>       
        </v-menu>

    </v-toolbar>
    <v-content>
      <slot/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <v-spacer/><span>&copy; 2018</span><v-spacer/>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
          {icon: 'settings', title: 'Settings', path: 'settings'}
        ],
      menu:[
          {title:'Jobs Posted',path:'/'},
          {title:'Browse Job Seekers',path:'/seekers'}
      ],
      miniVariant: false,
      title: 'Techforlios'
    }
  },
  name: 'App'
}
</script>

<style scoped>
.navtile{
  color: white;
}
</style>

