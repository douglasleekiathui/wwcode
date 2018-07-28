<template>
  <v-container>
    <v-layout>
      <span class="display-1">Job Posted</span>
      <v-spacer/>
      <v-flex xs12 sm6>
        <v-text-field
        hide-details
        append-icon="search"
        type="text"
        clearable
        v-model="search"
      ></v-text-field>
      </v-flex>
    </v-layout>

      <v-dialog v-model="newJobDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-tooltip slot="activator" top>
          Add New Job Posting
        <v-btn icon slot="activator"><v-icon>add</v-icon></v-btn>
        </v-tooltip>
        <new-job @showDialog="toggleNewJobDialog"></new-job>
      </v-dialog>

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
              <v-btn @click="$router.push({name: 'Applicants'})">
                <v-badge><span slot="badge">{{job.newApplicants}}</span>View Applications</v-badge>
              </v-btn>

              <v-spacer></v-spacer>

              <v-dialog v-model="quickEditDialog" persistent max-width="500px">
                <v-tooltip top slot="activator">
                  Edit Job Posting
                  <v-btn icon slot="activator" fab small class="mr-3">
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-tooltip>
                <job-details @showDialog="toggleQuickEditDialog"></job-details>
              </v-dialog>
              <v-tooltip top>
                  Edit Job Posting
              <v-btn icon  slot="activator">
                <v-icon>share</v-icon>
              </v-btn>
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

  export default {
    data () {
      return {
        chips: [],
        items: ['Java', 'C#', 'Python'],
        applicants:[
        {id:1, skills:['Java ',' , C#',' , Python'], views:'Number of views : 12'},
        {id:2, skills:['C# ',' , Java',' , Python'], views:'Number of views : 10'},
        {id:3, skills:['Python ',' , C#',' , Java'], views:'Number of views : 2'},
        {id:4, skills:['Python ',' , Java',' , C#'], views:'Number of views : 1'},
        ]
      }
    },
    computed:{
        selectedItems(){
    if(this.chips.length==0){
        return this.applicants;
        }
    else if (this.chips.length==1){
        return this.applicants;
        }     
    else if (this.chips.length==2){
        return this.applicants;
        }
    else if (this.chips.length==3){
        return this.applicants;
        }
    }   
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
}
</script>
