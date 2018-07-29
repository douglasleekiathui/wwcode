<template>
  <v-layout row>

      <v-card width="800">
        <v-toolbar color="primary" dark>

          <v-toolbar-title class="text-xs-center">On-Site Interview Schedule</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list subheader>
          <v-subheader>Status as of Today</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
          >

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
              <v-icon :color="item.active ? 'teal' : 'grey'">assignment_turned_in</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
          >


            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

      </v-card>

  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { active: true, title: 'Applicant 201807281111', action: '2018/06/28'},
          { active: true, title: 'Applicant 201807282222', action: '2018/07/01' },
          { title: 'Applicant 201807283333', action: '2018/08/16' },
          { title: 'Applicant 201807284444', action:'2018/08/20' }
        ],

      }
    }
  }
</script>
