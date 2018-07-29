<template>
  <v-container>
    <div class="pa-3 display-1">Applicants for Job Position: {{job.headline}}</div>
    <br/>
    <v-data-table
      :headers="headers"
      :items="ApplicationsData"
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
</template>

<script>
  import JobsData from './JobsData'
  import ApplicationsData from './ApplicationsData.js'
  import Applicant from './Applicant'
  export default {
    name: 'Applications',
    components: {Applicant},
    data () {
      return {
        job:null,
        ApplicationsData,
        dialog: false,
        headers: [
          { text: 'Date Applied', value: 'applied' },
          { text: 'Description',value: 'description'},
          { text: 'Status', value: 'Status' }
        ]
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
      toggleDialog() {
        this.dialog =!this.dialog
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
  .card-body >>> table > tbody > tr > td {
    cursor: pointer;
  }
</style>
