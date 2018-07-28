<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="ApplicationsData"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="$router.push('/jobs/1/1')">
          <td>{{ props.item.description }}</td>
          <td>{{ props.item.role }}</td>
          <td><v-chip :color="getChipColor(props.item.status)" text-color="white">{{ props.item.status }}</v-chip></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import ApplicationsData from './ApplicationsData.js'
  import Applicant from './Applicant'
  export default {
    name: 'Applications',
    components: {Applicant},
    data () {
      return {
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
