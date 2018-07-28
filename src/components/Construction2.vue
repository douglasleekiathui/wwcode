<template>
  <v-layout row>

      <v-card width="800">
        <v-toolbar color="teal" dark>

          <v-toolbar-title class="text-xs-center">Review Online Test</v-toolbar-title>

          <v-spacer></v-spacer>

        </v-toolbar>

        <v-list subheader>
          <v-subheader>Status as of Today</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click=""
          >

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">assignment_turned_in</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            @click=""
          >


            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { active: true, title: 'Applicant 201807281111' },
          { active: true, title: 'Applicant 201807282222' },
          { title: 'Applicant 201807283333' },
          { title: 'Applicant 201807284444' }
        ],

      }
    }
  }
</script>
