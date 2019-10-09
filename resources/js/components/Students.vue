<template>
  <v-container
    fill-height
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <material-card
          color="green"
          title="Add Student"
        >
          <v-form>
            <v-container class="py-0">
              <v-row>
                <!-- <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Company (disabled)"
                    disabled
                  />
                </v-col> -->

                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    class="purple-input"
                    label="Student Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="2"
                >
                  <v-text-field
                    label="Student Age"
                    class="purple-input"
                  />
                </v-col>
                 <v-col
                  cols="12"
                  md="2"
                >
                  <v-text-field
                    label="Student Term"
                    class="purple-input"
                  />
                </v-col>
                 <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    label="Student Grade"
                    class="purple-input"
                  />
                </v-col>


            

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Guardian Name"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12"  
                  md="4">
                  <v-text-field
                    label="Guardian Contact"
                    class="purple-input"
                  />
                </v-col>

                <!-- <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Student Term"
                    class="purple-input"
                  />
                </v-col> -->

                <!-- <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col> -->

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn color="success">
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </material-card>
      </v-col>
      <!-- <v-col
        cols="12"
        md="4"
      >
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block elevation-6"
            size="130"
          >
            <img
              src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
            >
          </v-avatar>
          <v-card-text class="text-center">
            <h6 class="overline mb-3">
              CEO / CO-FOUNDER
            </h6>

            <h4 class="font-weight-light">
              Alec Thompson
            </h4>

            <p class="font-weight-light">
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </p>

            <v-btn color="success">
              Follow
            </v-btn>
          </v-card-text>
        </material-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
  export default {
  //
  }
</script>
