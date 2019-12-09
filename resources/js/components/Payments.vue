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
          title="Add Payment"
        >
          <v-form>
            <v-container class="py-0">
              
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
                  md="6"
                >
                  <v-text-field
                    class="purple-input"
                    label="Student Name"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Student Grade"
                    class="purple-input"
                  />
                </v-col>
                 <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Student Term"
                    class="purple-input"
                  />
                </v-col>
   
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Fees Payable"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12"  
                  md="6">
                  <v-text-field
                    label="Fees Paid"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Balance"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Paid By"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    class="purple-input"
                    label="Date Paid"
                    type="number"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-btn color="success">
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
  export default {
    components: {
      Menu,
    }
  }
</script>
