<template>
  <v-container>
    <div class="pa-3"><div class="display-1">Job Posting</div></div>
    <br/>
    <v-layout>
      <v-dialog class="pa-2" v-model="newJobDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-tooltip slot="activator" top>
          Add New Job Posting
        <v-btn slot="activator"><v-icon left>add</v-icon>Add New Job</v-btn>
        </v-tooltip>
        <new-job @showDialog="toggleNewJobDialog"></new-job>
      </v-dialog>
      <v-spacer/>
      <v-flex xs12 sm6>
        <v-text-field
        class="pa-3"
        hide-details
        append-icon="search"
        type="text"
        clearable
        v-model="search"
      ></v-text-field>
      </v-flex>
    </v-layout>

      <div v-for="(job,i) in filteredJobs" :key="i">
        <v-flex>
          <v-card class="ma-3">
            <v-card-title primary-title>
              <div>
                <div class="title"><i :class="job.icon"></i> {{job.headline}}</div>
                <span class="grey--text">{{job.subtitle}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="$router.push({name: 'JobDetailsPage'})">Job Page</v-btn>
              <!--<v-btn @click="$router.push({name: 'Applications', params: { jobId: job.code }})">-->
              <v-btn @click="$router.push({path: '/jobs/1'})">
                <v-badge><span slot="badge">{{job.newApplicants}}</span>View Applications</v-badge>
              </v-btn>
              <v-spacer></v-spacer>
              <v-dialog v-model="quickEditDialog" persistent max-width="500px">
                <v-tooltip top slot="activator">
                  Edit Job Posting
                  <v-btn icon slot="activator" class="mr-3"><v-icon>edit</v-icon></v-btn>
                </v-tooltip>
                <job-details @showDialog="toggleQuickEditDialog"></job-details>
              </v-dialog>
              <v-tooltip top>
                  Share Job Posting
              <v-btn icon slot="activator"><v-icon>share</v-icon></v-btn>
              </v-tooltip>
              <v-btn icon @click="job.showDetails = !job.showDetails">
                <v-icon>{{ job.showDetails ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="job.showDetails">
                {{job.details}}
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </div>
  </v-container>
</template>


<script>
import JobDetails from "./DialogJobDetails"
import NewJob from './DialogNewJob'
import firebase from 'firebase'
import JobsData from './JobsData'

  export default {
    components: {JobDetails, NewJob},
    data(){
      return {
        show: false,
        dialog: false,
        chips: ['Java', 'Spring Framework', 'REST Web Services', 'Version control'],
        items: ['Java', 'Spring Framework', 'REST Web Services', 'Version control','MySQL', 'JUnit', 'JQuery', 'Hibernate', 'Eclipse IDE', 'SCRUM'],
        jobItems: JobsData,
      quickEditDialog: false,
      newJobDialog: false,
      search: '',
    }
    },
    methods: {
      toggleDialog(payload) {
        this.dialog = payload
      },
      toggleQuickEditDialog(payload) {
        this.quickEditDialog = payload
      },
      toggleNewJobDialog(payload) {
        this.newJobDialog = payload
        this.cardItems = [];
        this.fetchData();
      },
      filterJobs(query) {
        console.log(this.jobItems)
        this.jobItems = this.jobItems.filter(job => {
          job.headline.toLowerCase().indexOf(query.toLowerCase()) > -1
        })
        console.log(this.jobItems)
      },
      fetchData() {
        let db = firebase.firestore()
        let jobsRef = db.collection('jobs')
        jobsRef.orderBy('post_date', 'desc').get().then(snapshot => {
            snapshot.forEach(doc => {
              this.cardItems.push(doc.data());
          });
        }).catch(err => {
          console.log('Error getting documents', err);
        });
      },
    },
    mounted(){
      this.fetchData()
    },
    computed: {
      filteredJobs() {
        return this.jobItems.filter(job => {
          return job.headline.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      },
    }
  }
</script>
