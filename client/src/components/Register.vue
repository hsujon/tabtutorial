<template>
<v-layout column>
<!--  <v-flex xs6 offest-xs3>
    <div class="white elevation=6">-->
   <v-card :elevation=5 class="mx-auto" shaped color="#DCEDC8">
      <v-toolbar :elevation=1 dense image color="#8BC34A" dark >
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
      <v-container fill-height fluid>
        <v-row>
        <v-col >
        <v-text-field :rules="emailrule" v-model="email" label="email" hint="please type your email address here!" background-color
="#FFFFFF"/>
        <v-text-field type="password" name="password" :rules="passrules" v-model="password" label="password" background-color
="#FFFFFF" />
        
        <div class="error" v-html="error" />
        <v-btn :elevation=2 Raised color="#558B2F" @click="register">Register</v-btn>
        </v-col>
        </v-row>
      </v-container>
   <!-- </div>
  </v-flex> -->
   </v-card>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      passrules: [v => /^[a-zA-Z0-9]{8,32}$/.test(v) || 'Must be between 8 to 32 charechter'],
      emailrule: [ 
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
]
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}

</style>
