<template>
<v-container>
    <v-layout column align-center justify-center>
    <v-card width="400">
        <v-toolbar color="primary" class="headline white--text">Login</v-toolbar>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>
                <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
                ></v-text-field>
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="submit">Login</v-btn>
        </v-card-actions>
    </v-card>

    <v-btn width="400"
    class="ma-3"
    @click="googleLogin"
    >Login with Google
    </v-btn>
    </v-layout>
</v-container>
</template>

<script>
import firebase from 'firebase/app'

export default {
    data(){
        return{
        valid: false,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password:'',
        passwordRules:[
            v => !!v || 'Password is required',
        ]
        }
    },
    methods:{
        submit(){
            if (this.$refs.form.validate()) {
                if(this.name===this.password){
                    this.$router.push('/');
                }
            }
        },
        googleLogin(){
          var provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('profile');
          provider.addScope('email');
          firebase.auth().signInWithPopup(provider).then(
            (result) => {
              let token = result.credential.accessToken;
              let user = result.user;
              if (token) {
                this.$router.push('/');
              }
          });
        }
    }
}
</script>
