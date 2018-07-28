<template>
      <v-card>
        <v-card-title>
          <span class="headline">{{job.headline}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex>
                <v-text-field
                  label="How many people are you hiring for this position"
                  type="number"
                  required
                  prepend-icon="face"
                  :value="job.positions"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="date"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="date"
                    label="Closing Date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-combobox
                v-model="chips"
                :items="items"
                label="Key Skills"
                chips
                clearable
                prepend-icon="filter_list"
                solo
                multiple
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    :selected="data.selected"
                    close
                    @input="remove(data.item)"
                  >
                    <strong>{{ data.item }}</strong>&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="$emit('showDialog', false)">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="$emit('showDialog', false)">Save</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
    export default {
      name: "jobDetails",
      data: () => ({
        dialog: false,
        date: '2018-08-02',
        menu: false,
        job: {
          code: '001',
          headline: 'Software Engineer (Java)',
          icon: 'fab fa-java',
          newApplicants: 18,
          positions: 5,
          subtitle: '2 days ago',
          showDetails: false,
          details: 'Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code'
        },
        chips: ['Java', 'Spring Framework', 'REST Web Services', 'Version control'],
        items: ['Java', 'Spring Framework', 'REST Web Services', 'Version control','MySQL', 'JUnit', 'JQuery', 'Hibernate', 'Eclipse IDE', 'SCRUM']
      }),
      methods: {
        remove (item) {
          this.chips.splice(this.chips.indexOf(item), 1)
          this.chips = [...this.chips]
        }
      }
    }
</script>

<style scoped>

</style>
