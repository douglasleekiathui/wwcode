<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.native="$emit('showDialog', false)">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>New Job Post</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click.native="$emit('showDialog', false)">Cancel</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-list three-line subheader>
      <v-subheader>Job Details</v-subheader>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm12 md12 class="pa-4">
            <v-text-field label="Job Title" v-model="job.title" required></v-text-field>
          </v-flex>
          <v-container fluid grid-list-md>
            <v-textarea
              name="input-7-1"
              box
              label="Job Overview"
              auto-grow
              v-model="job.overview"
            ></v-textarea>
          </v-container>
          <v-container fluid grid-list-md>
            <v-textarea
              name="input-7-1"
              box
              label="Job Description"
              auto-grow
              v-model="job.description"
            ></v-textarea>
          </v-container>
          <v-container fluid grid-list-md>
            <v-textarea
              name="input-7-1"
              box
              label="Job Requirements"
              auto-grow
              v-model="job.requirements"
            ></v-textarea>
          </v-container>
          <v-combobox
            v-model="chips"
            :items="items"
            label="Your favorite hobbies"
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
                <span>(interest)</span>
              </v-chip>
            </template>
          </v-combobox>
        </v-layout>
      </v-container>
      <small>*indicates required field</small>
    </v-list>
    <v-divider></v-divider>
    <v-list three-line subheader>
      <v-subheader>General</v-subheader>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex class="ma-3">
            <v-text-field
              label="How many people are you hiring for this position"
              type="number"
              required
              prepend-icon="face"
              :value="job.positions"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 class="ma-3">
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu"
              :nudge-right="40"
              :return-value.sync="job.closingDate"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="job.closingDate"
                label="Closing Date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="job.closingDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-combobox
            class="ma-3"
            v-model="job.skills"
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
    </v-list>
      <v-divider></v-divider>
      <v-list three-line subheader>
        <v-subheader>Publishing Details</v-subheader>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="notifications"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Notify Job Seekers</v-list-tile-title>
          <v-list-tile-sub-title>Job seekers following your organization will receive an email</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="sound"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Notify me for any applications</v-list-tile-title>
          <v-list-tile-sub-title>You will receive email notification when there are new applications</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
      <v-divider></v-divider>
      <v-container grid-list-md class="mb-4">
        <v-flex xs12 sm6 md6 offset-lg6>
      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree to our terms & conditions?"
        required
      ></v-checkbox>
          <v-btn @click="clear" large>Reset</v-btn>
          <v-btn @click="save" color="success" large outline>Save Job</v-btn>
        <v-btn
          :disabled="!checkbox"
          color="success"
          large
          @click="submit"
        >
          Publish Job Now
        </v-btn>
      </v-flex>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
    import firebase from 'firebase'

    export default {
      name: "NewJob",
      data: () => ({
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        valid: false,
        checkbox: false,
        menu: false,
        job: {
          title: '',
          overview: '',
          description: '',
          requirements: '',
          closingDate: '',
          skills: [

          ]
        },
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        chips: ['Java', 'Spring Framework', 'REST Web Services', 'Version control'],
        items: ['Java', 'Spring Framework', 'REST Web Services', 'Version control','MySQL', 'JUnit', 'JQuery', 'Hibernate', 'Eclipse IDE', 'SCRUM']
      }),
      methods: {
        submit () {
          console.log('posted New job: ', this.job)
          // submitting to server
          if (this.$refs.form.validate()) {
            let db = firebase.firestore()
            let jobsRef = db.collection('jobs')
            let job = {
              post_date: new Date(),
              headline: this.job.title,
              icon: 'fas fa-database',
              newApplicants: 0,
              subtitle: this.job.overview,
              showDetails: false,
              details: this.job.description
            };
            let uniqueId  = jobsRef.doc()
            uniqueId.set(job)
            console.log('UniqueId: ' + uniqueId.id);
            this.$emit('showDialog', false)
          }
        },
        clear () {
          this.$refs.form.reset()
        },
        save () {
          console.log('job saved: ', this.job)
        },
        remove (item) {
          this.chips.splice(this.chips.indexOf(item), 1)
          this.chips = [...this.chips]
        }
      }
    }
</script>

<style scoped>

</style>
