<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="ApplicationsData"
      hide-actions
      class="elevation-1"
    >
      <!--<v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">-->
        <!--<v-tooltip slot="activator" top>-->
          <!--Add New Job Posting-->
          <!--<v-btn slot="activator"><v-icon left>add</v-icon>Add New Job</v-btn>-->
        <!--</v-tooltip>-->
        <!--<new-job @showDialog="toggleNewJobDialog"></new-job>-->
      <!--</v-dialog>-->
      <template slot="items" slot-scope="props">
        <tr @click="dialog">
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
  export default {
    name: 'Applications',
    data () {
      return {
        ApplicationsData,
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
      }
    }
  }
</script>

<style scoped>
  .card-body >>> table > tbody > tr > td {
    cursor: pointer;
  }
</style>
