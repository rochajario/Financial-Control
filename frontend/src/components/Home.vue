<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="display-2 mb-3 mt-10 main-text">
          Welcome to Financial Control
        </h1>
        <v-img
          :src="require('../assets/stock_broker.svg')"
          contain
          height="500"
        />
      </v-col>

      <v-col class="mb-4">
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-img
                :src="require('../assets/alura_badge_01.png')"
                contain
                height="90"
              />
            </v-btn>
          </template>
          <span style="text-align:center">
            <strong>Participation Badge</strong><br/>
            Allura Backend Challenge<br/>
            <small>Edition 2</small>
          </span>
        </v-tooltip>

        <p class="subheading font-weight-regular mt-6">
          This project was developed by <a href="https://github.com/rochajario" target="_blank"
            >Jario Rocha</a
          ><br />
          Based on Alura Challenge<br />
          of February 2022
        </p>
        <p class="subheading font-weight-light">
          For help and collaboration with the author,
          <br />please contact me on
          <a href="https://linkedin.com/in/rochajario/" target="_blank"
            >Linked-In</a
          >
        </p>
      </v-col>

      <v-col class="mb-2" cols="12">
        <v-row justify="center">
          <v-container style="max-width: 1000px">
            <v-row>
              <v-col sm="12">
                <h3 class="headline" style="color: #4d61fc">
                  About the Project
                </h3>
                <v-row no-gutters>
                  <v-col cols="8" sm="6" align-self="center">
                    <h3 class="headline mb-5" style="color: #4d61fc">
                      Assume the Control of your Finances
                    </h3>
                    <p class="font-weight-light">
                      Visualize metrics about your monthly expendings and
                      revenues.
                    </p>
                    <p class="font-weight-thin">
                      Like all learning, financial education is a process that
                      should begin at an early age and continue throughout life.
                      This cumulative process builds the skills necessary for
                      making critical financial decisions that affect one’s
                      ability to attain the assets, such as education, property,
                      and savings, that improve economic well-being.
                    </p>
                  </v-col>
                  <v-col cols="4" sm="6" align-self="center">
                    <v-img
                      :src="require('../assets/saving_money.svg')"
                      contain
                      height="380"
                    />
                  </v-col>
                  <v-col cols="4" sm="6" align-self="center">
                    <v-img
                      :src="require('../assets/invest.svg')"
                      contain
                      height="380"
                    />
                  </v-col>
                  <v-col cols="8" sm="6" align-self="center">
                    <h3 class="headline mb-5" style="color: #4d61fc">
                      Know Where is your Money Going
                    </h3>
                    <p class="font-weight-light">
                      Now you have an easy way to understand where is your money
                      going by monitoring your consuming habits.
                    </p>
                    <p class="font-weight-thin">
                      Financial literacy is not an end in itself, but a
                      step-by-step process. It begins in childhood and continues
                      throughout a person’s life all the way to retirement, so
                      using money wisely is key to live a well balanced life.
                    </p>
                  </v-col>
                  <v-col cols="8" sm="6" align-self="center">
                    <h3 class="headline mb-5" style="color: #4d61fc">
                      Achieve your Financial Goals
                    </h3>
                    <p class="font-weight-thin">
                      Financial independence is paramount. Someone once said
                      that when a person is financially independent, it has the
                      ability to live life on it's own terms. That can be one of
                      the best advices you ever get. No matter where you go in
                      life.
                    </p>
                  </v-col>
                  <v-col cols="4" sm="6" align-self="center">
                    <v-img
                      :src="require('../assets/improved_result.svg')"
                      contain
                      height="380"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
