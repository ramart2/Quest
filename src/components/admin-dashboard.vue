<template>
  <div>
    <v-container>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="cyan"
        align-with-title
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab @click.stop="addStudentForm">Add Student</v-tab>
        <v-tab @click.stop="addTestForm">Add Test</v-tab>
      </v-tabs>
      <v-card v-if="showStudentForm">
        <v-card-title class="headline grey lighten-2" primary-title>
          Add Student
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
                    v-model="firstName"
                    label="First name"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="lastName"
                    label="Last name"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="grade"
                    label="Grade"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="teacher"
                    label="Teacher"
                    required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" flat @click.stop="addStudentDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click.stop="addStudent">Submit</v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="showTestForm">
        <v-card-title class="headline grey lighten-2" primary-title>
          Add Test
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
                    v-model="id"
                    label="Id"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="title"
                    label="Title"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="author"
                    label="Author"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="category"
                    label="Category"
                    required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="" flat @click.stop="addStudentDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click.stop="addTest">Submit</v-btn>
        </v-card-actions>
      </v-card>
      <!--<v-dialog v-model="addStudentDialog" width="500">-->
      <!--<v-card>-->
      <!--<v-card-title class="headline grey lighten-2" primary-title>-->
      <!--Add Student-->
      <!--</v-card-title>-->
      <!--<v-card-text>-->
      <!--<v-form v-model="valid">-->
      <!--<v-text-field-->
      <!--v-model="firstName"-->
      <!--label="First name"-->
      <!--required-->
      <!--&gt;</v-text-field>-->
      <!--<v-text-field-->
      <!--v-model="lastName"-->
      <!--label="Last name"-->
      <!--required-->
      <!--&gt;</v-text-field>-->
      <!--<v-text-field-->
      <!--v-model="grade"-->
      <!--label="Grade"-->
      <!--required-->
      <!--&gt;</v-text-field>-->
      <!--<v-text-field-->
      <!--v-model="teacher"-->
      <!--label="Teacher"-->
      <!--required-->
      <!--&gt;</v-text-field>-->
      <!--</v-form>-->
      <!--</v-card-text>-->
      <!--<v-divider></v-divider>-->
      <!--<v-card-actions>-->
      <!--<v-spacer></v-spacer>-->
      <!--<v-btn color="" flat @click.stop="addStudentDialog = false">Cancel</v-btn>-->
      <!--<v-btn color="primary" flat @click.stop="addStudent">Submit</v-btn>-->
      <!--</v-card-actions>-->
      <!--</v-card>-->
      <!--</v-dialog>-->
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showStudentForm: false,
        showTestForm: false,
        firstName: '',
        lastName: '',
        grade: '',
        teacher: '',
        id: '',
        title: '',
        author: '',
        category: '',
        tab: '',
        valid: true
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
      addTest () {
        const test = {
          id: this.id,
          title: this.title,
          author: this.author,
          category: this.category
        }
        this.$store.dispatch('addTest', test)
        this.id = '',
        this.title = '',
        this.author = '',
        this.category = ''
      },
      addStudentForm () {
        this.showStudentForm = true
        this.showTestForm = false
      },
      addTestForm () {
        this.showStudentForm = false
        this.showTestForm = true
      }
    }
  }
</script>

<style scoped>

</style>