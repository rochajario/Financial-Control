<template>
  <v-row justify="center">
    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="grey"
      @click.stop="dialog = true"
    >
      <v-icon dark>
        mdi-logout-variant
      </v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Are you sure?
        </v-card-title>

        <v-card-text>
          Let me know what you think about this project!<br/>
          Send-me your feedback an see more on Github by clicking in 'More'
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="leave"
          >
            Leave
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="more"
          >
            More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
        leave(){
            this.dialog = false;
            this.$emit('userLogedOut')
        },
        more(){
            this.dialog = false;
            this.$emit('userLogedOut')
            window.open('https://github.com/rochajario/Financial-Control','_blank');
        }
    }
  }
</script>