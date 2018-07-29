<template>
    <v-container>

        <h3 class="headline mb-0"><b>Assignment Completion Status</b></h3>
        <br>
        <v-layout wrap>
            <v-flex xs3>Applicant 201807283561</v-flex>
            <v-flex xs3><v-progress-linear value="70" height="20" width=""></v-progress-linear></v-flex>
            <v-flex xs3>3</v-flex>
            <v-flex xs3>4</v-flex>
            <v-flex xs3>5</v-flex>
        </v-layout>
    </v-container>
  <!-- <v-layout wrap>

      <v-card width="800">
        <v-toolbar color="primary" dark>

          <v-toolbar-title class="text-xs-center">Review on Assessment</v-toolbar-title>

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
  </v-layout> -->
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
