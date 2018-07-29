<template>
  <v-container>
    <div class="pa-3 display-1">Company Profile Settings</div>
    <br/>
  <v-card class="ma-3">
    <v-form
      class="pa-3" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :counter="10"
          label="Company Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="description"
          :rules="descriptionRules"
          :counter="255"
          label="Description"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Phone Number"
          required
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          label="Require Test"
        ></v-checkbox>
    </v-form>
    <v-card-actions>
      <v-spacer/>
        <v-btn
          :disabled="!valid"
          @click="snackbar = true"
        >
          save
        </v-btn>
        <v-btn @click="clear">cancel</v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="snackbar"
      bottom=true
      timeout="2000"
    >
      {{ snackText }}
      <v-btn
        color="pink"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
    valid: true,
    name: 'My Company',
    nameRules: [
      v => !!v || 'Company name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    description: 'This is a description.',
    descriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 255) || 'Description must be less than 255 characters'
    ],
    email: 'hr@mycompany.com',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    phone: '66666666',
    phoneRules: [
      v => !!v || 'Phone is required',
      v => (v && v.length === 8) || 'Phone must be valid'
    ],
    checkbox: false,
    snackbar: false,
    snackText: 'Saved'
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          name: this.name,
          email: this.email,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$router.go(-1)
    }
  }
}
</script>
