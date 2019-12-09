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
          title="Add Guardian"
        >
          <v-form>
            <v-container class="py-5">

                <v-col
                cols="12"
                md="5"
                >
                  <v-text-field
                    class="purple-input"
                    label="Student Name"
                    v-model="guardian.studentname"
                    type="text"
                    v-on:keyup="autoComplete"
                
                    required
                     @input="$v.guardian.studentname.$touch()"
                     @blur="$v.guardian.studentname.$touch()"

                  />
                </v-col>
         
                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    class="purple-input"
                    label="Guardian Name"
                    v-model="guardian.name"
                    type="text"

                  />
                </v-col>

              

                <v-col cols="12"  
                  md="5">
                  <v-text-field
                    label="Guardian Contact"
                    class="purple-input"
                    v-model="guardian.contact"
                    type="number"
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
        guardian : {},
        query: '',
        results: []
      }
      },

      methods: {
          autoComplete(){
            this.results = [];

            if(this.query.length > 2){
            axios.get('/search',{
                params: {query: this.query}})
                .then(response => {
                    this.results = response.data;
                    console.log(response);
            })
             .catch(function (error) {
                    // currentObj.output = error;
                    console.log(error)
                });
            }
        },
        submit(){
          console.log(this.guardian);
        }
      }

    }
  //
  
</script>
