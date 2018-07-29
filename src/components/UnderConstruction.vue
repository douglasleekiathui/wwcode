<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
            <div class="display-3">
            <i class="fas fa-cogs"></i> {{ text }}
            </div>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      text: 'This page is under construction'
    }
  }
}
</script>
