<template>
  <v-app>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-tooltip bottom>
        <v-btn v-if="user == null" @click.stop="registerDialog = !registerDialog" slot="activator" color="primary" dark>
          Register
        </v-btn>
        <span>Register</span>
      </v-tooltip>
      <!--<v-btn icon @click.stop="miniVariant = !miniVariant">-->
        <!--<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon @click.stop="clipped = !clipped">-->
        <!--<v-icon>web</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon @click.stop="fixed = !fixed">-->
        <!--<v-icon>remove</v-icon>-->
      <!--</v-btn>-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="user != null" @click.stop="logout">Logout</v-btn>
      <v-btn v-if="user == null" @click.stop="loginDialog = true">Login</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          HOME
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
    
    <!--Dialogs-->
    <v-dialog v-model="registerDialog" width="500">
      <v-btn slot="activator" color="red lighten-2" dark>
        Click Me
      </v-btn>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Quest Registration
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
                    v-model="email"
                    label="Email"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    label="Password"
                    required
            ></v-text-field>
          </v-form>
        </v-card-text>
      
        <v-divider></v-divider>
      
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" flat @click="registerDialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" flat @click="register">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    <v-dialog v-model="loginDialog" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Quest Login
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
                    v-model="email"
                    label="Email"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="password"
                    label="Password"
                    required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" flat @click.stop="loginDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click.stop="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        email: '',
        password: '',
        registerDialog: false,
        loginDialog: false,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Quest'
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      }
    },
    methods: {
      register () {
        this.registerDialog = false
        const payload = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('register', payload)
        this.$router.push('/dashboard')
      },
      logout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      },
      login () {
        this.loginDialog = false
        const payload = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('login', payload)
        this.$router.push('/dashboard')
      }
    }
  }
</script>
