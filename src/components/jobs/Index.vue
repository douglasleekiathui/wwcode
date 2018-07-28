<template>
  <div>
      <div v-for="job in cardItems">
        <v-flex>
          <v-card class="ma-2">
            <v-card-title primary-title>
              <div>
                <div class="headline"><i :class="job.icon"></i> {{job.headline}}</div>
                <span class="grey--text">{{job.subtitle}}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-dialog v-model="dialog" persistent max-width="500px">
                <v-btn slot="activator" color="cyan" fab small dark class="mr-3">
                  <v-icon>edit</v-icon>
                </v-btn>
                <job-details @showDialog="toggleDialog"></job-details>
              </v-dialog>
                  <v-btn color="warning mr-2" @click="$router.push({name: 'JobDetailsPage'})">Job Page</v-btn>
              <v-badge>
                <span slot="badge">{{job.newApplicants}}</span>
                <v-btn color="success" @click="$router.push({name: 'Applicants'})">View Applications</v-btn>
              </v-badge>
              <v-spacer></v-spacer>
              <v-btn icon @click="job.showDetails = !job.showDetails">
                <v-icon>{{ job.showDetails ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
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
      <v-layout row>

      </v-layout>
  </div>
</template>

<script>
  import JobDetails from "./jobDetails";
  export default {
    components: {JobDetails},
    data: () => ({
      show: false,
      dialog: false,
      cardItems: [
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
      ]
    }),
    methods: {
      toggleDialog(payload) {
        this.dialog = payload
      }
    }
  }
</script>
<style>

</style>
