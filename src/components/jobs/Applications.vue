<template>
  <div>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card dark class="white--text">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0"><i :class="job.icon"></i> {{job.headline}}</h3>
                  <div class="grey--text">{{job.subtitle}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-dialog v-model="quickEditDialog" persistent max-width="500px">
                  <v-tooltip top slot="activator">
                    Edit Job Posting
                    <v-btn icon slot="activator" class="mr-3"><v-icon>edit</v-icon></v-btn>
                  </v-tooltip>
                  <details-dialog @showDialog="toggleQuickEditDialog"></details-dialog>
                </v-dialog>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="applicants"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr style="cursor:pointer" @click="$router.push(`/jobs/${job.code}/applicant/${props.item.id}`)">
          <td>{{ formatDate(props.item.applied) }}</td>
          <td>{{ props.item.description }}</td>
          <td><v-chip :color="getChipColor(props.item.status)" text-color="white">{{ props.item.status }}</v-chip></td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
  </div>
</template>

<script>
  import ApplicationsData from './ApplicationsData.js'
  import Applicant from './Applicant'
  import JobsData from './JobsData'
  import DetailsDialog from './DialogJobDetails'
  export default {
    name: 'Applications',
    components: {Applicant, DetailsDialog},
    data () {
      return {
        applicants: ApplicationsData,
        quickEditDialog: false,
        headers: [
          { text: 'Date Applied', value: 'applied' , sortable: true,},
          { text: 'Description',value: 'description', sortable: true,},
          { text: 'Status', value: 'status', sortable: true,}
        ],
        job:null,
        ApplicationsData,
        dialog: false,
      }
    },
    mounted(){
      this.job=JobsData.filter(e=>e.code==this.$route.params.id)[0];
    },
    methods: {
      getChipColor(status) {
        return status === 'New' ? 'primary'
          : status === 'Reviewed' ? 'secondary'
            : status === 'Invited' ? 'success' : 'danger'
      },
      toggleQuickEditDialog() {
        this.quickEditDialog =!this.quickEditDialog
      },
      formatDate(date){
        var d = new Date(date);
        var dd = d.getDate();
        var mm = d.getMonth()+1; //January is 0!
        var yyyy = d.getFullYear();
        if(dd<10){
            dd='0'+dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
      }
    }
  }
</script>

<style scoped>
  tr {
    cursor: pointer;
  }
</style>
