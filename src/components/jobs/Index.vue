<template>
  <v-container>
    <div class="pa-3 display-1">Job Posting</div>
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

  export default {
    components: {JobDetails, NewJob},
    data(){
      return {
        show: false,
        dialog: false,
        chips: ['Java', 'Spring Framework', 'REST Web Services', 'Version control'],
        items: ['Java', 'Spring Framework', 'REST Web Services', 'Version control','MySQL', 'JUnit', 'JQuery', 'Hibernate', 'Eclipse IDE', 'SCRUM'],
        jobItems: [
        {
          code: '001',
          headline: 'Software Engineer (Java)',
          icon: 'fab fa-java',
          newApplicants: 18,
          subtitle: 'active for 2 days, closing in 15 days',
          showDetails: false,
          details: 'Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code'
        },
        {
          code: '002',
          headline: 'Front-End Developer',
          icon: 'fab fa-js-square',
          newApplicants: 25,
          subtitle: 'active for 4 days, closing in 12 days',
          showDetails: false,
          details: 'Experienced in developing user-facing UI features for the web. Enjoys building reusable code and libraries UI components in the design system. Does not shy away from having your codes reviewed by your peers.'
        },
        {
          code: '003',
          headline: 'Database Administrator',
          icon: 'fas fa-database',
          newApplicants: 8,
          subtitle: 'active for 5 days, closing in 11 days',
          showDetails: false,
          details: 'Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code'
        },
        {
          code: '004',
          headline: 'Android Engineer',
          icon: 'fab fa-android',
          newApplicants: 12,
          subtitle: 'active for 5 days, closing in 10 days',
          showDetails: false,
          details: 'Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code'
        },
        {
          code: '005',
          headline: 'IOS Developer',
          newApplicants: 3,
          icon: 'fab fa-app-store-ios',
          subtitle: 'active for 6 days, closing in 8 days',
          showDetails: false,
          details: 'Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code'
        },
        {
          code: '006',
          headline: 'Graduate Program',
          newApplicants: 35,
          icon: 'fas fa-graduation-cap',
          subtitle: 'active for 15 days, closing in 20 days',
          showDetails: false,
          details: 'Develop, design and maintain technologies that improve the way our clients and the world works. Transform technology trends into solutions that meet client requirements from analysis to implementation.'
        }
      ],
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
