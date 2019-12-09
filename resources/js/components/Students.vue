<template>
  <v-container
    fill-height
    fluid
  >
  <Menu/>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="green"
          title="Add Student"
        >
          <v-form >
            <v-alert type="success" 
             v-model="alert">
                 Success
              </v-alert>

             
            <v-container class="py-5">
                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    class="purple-input"
                    label="Student Name"
                    v-model="student.name"
                    type="text"
                    :error-messages="nameErrors"
                    required
                     @input="$v.student.name.$touch()"
                     @blur="$v.student.name.$touch()"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    label="Student Age"
                    class="purple-input"
                    v-model="student.age"
                    type="number"
                    :error-messages="checkAgeErrors"
                    required
                    @input="$v.student.age.$touch()"
                    @blur="$v.student.age.$touch()"
                    
                  />
                </v-col>
                 <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    label="Student Term"
                    class="purple-input"
                    v-model="student.term"
                    type="number"
                    :error-messages="checkTermErrors"
                    required
                    @input="$v.student.term.$touch()"
                    @blur="$v.student.term.$touch()"
                  />
                </v-col>
                 <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    label="Student Grade"
                    class="purple-input"
                    v-model="student.grade"
                    type="number"
                    :error-messages="checkGradeErrors"
                    required
                    @input="$v.student.grade.$touch()"
                    @blur="$v.student.grade.$touch()"
                  />
                </v-col>

         
                <v-col
                  cols="12"
                  md="5"
                >
                  <v-btn @click="submit" color="success">
                    Save
                  </v-btn>
                </v-col>
             
            </v-container>
          </v-form>
        </material-card>
      </v-col>
     
    </v-row>
  </v-container>
</template>

<script>
import Menu from '@/js/components/Menu'
import { METHODS } from 'http'
import { validationMixin } from 'vuelidate'
import { required, maxLength, between } from 'vuelidate/lib/validators'


  export default {
    mixins: [validationMixin],
    components: {
      Menu,

    },

    data () {
      return {
        student : {
           name : "",
           age: "",
           grade : "",
           term: ""
        },   
        alert: false     
      }

      },
      validations: {
        student : {
          name: { required },
          age: { required },
          term: { required },
          grade: { required },
          
        }
      },

      computed: {
        nameErrors () {
          const errors = []
          if (!this.$v.student.name.$dirty) 
          return errors
          !this.$v.student.name.required && errors.push('Name is required.')
          return errors
        },

        checkAgeErrors(){
          const errors= []
          if (!this.$v.student.age.$dirty ) 
          return errors
          !this.$v.student.age.required && errors.push('Age is required')   
          return errors
        },
         checkGradeErrors(){
          const errors= []
          if (!this.$v.student.grade.$dirty ) 
          return errors
          !this.$v.student.grade.required && errors.push('Grade is required')   
          return errors
        },
        checkTermErrors(){
          const errors= []
          if (!this.$v.student.term.$dirty ) 
          return errors
          !this.$v.student.term.required && errors.push('Term is required')   
          return errors
        }
      },

         
      methods : {
        submit(){
          this.$v.$touch()
          // let currentObj = this;

          axios.post('/students', {
                   
                      name : this.student.name,
                      age: this.student.age,
                      grade : this.student.grade,
                      term: this.student.term                  
                })
                .then(function (response) {
                    // currentObj.output = response.data;
                    console.log(response)
                    
                })
                .catch(function (error) {
                    // currentObj.output = error;
                    console.log(error)
                });

                  this.alert = true
                  this.$v.$reset()
                  this.student.name = ''
                  this.student.age = ''
                  this.student.term = ''
                  this.student.grade = ''

         
        }
        }
    }
    
  //
  
</script>
