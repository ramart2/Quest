<template>
  <div>
    <v-container>
      <div class="headline">Student Dashboard</div>
      <v-menu offset-y>
        <v-btn slot="activator" color="primary" dark>
          Tests
        </v-btn>
        <v-list>
          <v-list-tile v-for="(val, index) in tests" :key="index" @click="takeTest(val.id)">
            <v-list-tile-title>{{ val.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        addStudentDialog: false,
        firstName: '',
        lastName: '',
        grade: '',
        teacher: ''
      }
    },
    computed: {
      tests () {
        return this.$store.getters.tests
      }
    },
    methods: {
      addStudent () {
        const student = {
          firstName: this.firstName,
          lastName: this.lastName,
          grade: this.grade,
          teacher: this.teacher
        }
        this.$store.dispatch('addStudent', student)
        this.firstName = '',
        this.lastName = '',
        this.grade = '',
        this.teacher = ''
      },
      takeTest (key) {
        alert(key)
      }
    }
  }
</script>

<style scoped>

</style>