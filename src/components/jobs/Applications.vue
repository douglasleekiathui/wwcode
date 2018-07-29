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
        <tr @click="$router.push(`/jobs/${job.code}/applicant/${props.item.id}`)">
          <td class="primary--text" style="cursor:pointer">{{ props.item.description }}</td>
          <td>{{ props.item.role }}</td>
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
          {
            text: 'Description',
            align: 'left',
            sortable: false,
            value: 'Description'
          },
          { text: 'Role', value: 'Role' },
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
      }
    }
  }
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    cursor: pointer;
  }
</style>
