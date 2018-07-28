<template>
  <v-app>
    <v-navigation-drawer
      dark
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <span v-for="i in items" :key="i">
        <v-list-tile   
        :to="i.path"
        v-if="!i.children">
          <v-list-tile-action>
            <v-icon>{{i.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="navtile" v-text="i.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
        :title="i.title"
        v-else>
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ i.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
          class="navtile"
          v-for="c in i.children"
          :key="c"
          :to="c.path">
          <v-list-tile-content>
            <v-list-tile-title>
              {{ c.title }}
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <icon>{{c.icon}}</icon>
          </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer/>
      <!-- <v-toolbar-items>
          <v-btn flat v-for="(m,i) in menu" :to="m.path" :key="i">{{m.title}}</v-btn>
      </v-toolbar-items> -->
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

    <v-footer>
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
          {icon: 'assignments', title: 'All Jobs', path:"/"},
          {icon: 'group', title: 'Applicants', children:[
            {title:"All Applicants", path: '/applicant'}
          ]},
          {icon: 'people_outline', title: 'Talent Pool', children:[
            {title:"All Talents", path: '/talent'}
          ]},
          {icon: 'assessment', title: 'Assessments', children:[
            {title:"Create Assignment", path:"/assignment/create"},
            {title:"All Assignment", path:"/assignment"}
          ]},
          {icon: 'settings', title: 'Settings', path: '/settings'},
        ],
      menu:[
          {title:'Jobs Posted',path:'/'},
          {title:'Browse Job Seekers',path:'/seekers'}
      ],
      miniVariant: false,
      title: 'TechFolio'
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

