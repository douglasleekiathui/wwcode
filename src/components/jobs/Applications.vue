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
    <v-data-table
      :headers="headers"
      :items="applicants"
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
  import JobsData from './JobsData'
  import DetailsDialog from './DialogJobDetails'
  export default {
    name: 'Applications',
    components: {Applicant, DetailsDialog},
    data () {
      return {
        applicants: ApplicationsData,
        quickEditDialog: false,
        job: JobsData[0],
        headers: [
          {
            text: 'Description',
            align: 'left',
            sortable: true,
            value: 'description'
          },
          { text: 'Role', value: 'role' },
          { text: 'Status', value: 'status' }
        ]
      }
    },
    methods: {
      getChipColor(status) {
        return status === 'New' ? 'primary'
          : status === 'Reviewed' ? 'secondary'
            : status === 'Invited' ? 'success' : 'danger'
      },
      toggleQuickEditDialog() {
        this.quickEditDialog =!this.quickEditDialog
      }
    }
  }
</script>

<style scoped>
  tr {
    cursor: pointer;
  }
</style>
