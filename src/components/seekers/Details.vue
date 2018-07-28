<template>
<v-container>
    <v-layout align-center justify-center>
    <v-card width="85%">
        <v-card-text>
            <div>Job Seeker Profile: {{item.id}}</div>
            <br> 
            <div><h2>Skill Sets</h2></div>
            <br>
            <div>Technical</div>
            <div>      
                <ul>
                    <li v-for="(Skill,i) in item.TechnicalSkills" :key="i">
                    {{Skill}}
                 </li>
                </ul>
            </div>
            <br>
            <div>Non-Technical</div>
            <div>
                <ul>
                    <li v-for="(NSkill,i) in item.OtherSkills" :key="i">
                        {{NSkill}}
                    </li>
                </ul>
            </div>
            <br>
            <v-divider></v-divider>
            <br>
            <div><h2>Standardised Tests Taken</h2></div>
            <br>
                <v-data-table
                :headers="StandardTestHeaders"
                :items="item.StandardTest"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.score }}</td>
                </template>
              </v-data-table>               
        </v-card-text>
    
        <v-card-actions>
            <v-spacer/>
    <!-- dialog for contact user portion -->
    <v-dialog class="pa-1" v-model="dialog_message" persistent max-width="500px">
      <v-btn slot="activator" color="primary" dark>Send Message</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Send Message</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Message" hint="Enter your message, avoid asking for applicants personal details" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_message = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog_message = false">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog class="pa-1" v-model="placeholderForNothing">
            <v-btn slot="activator" @click="returnApplicationList" color="primary">Return to List</v-btn>
    </v-dialog>
        </v-card-actions>
    </v-card>
    </v-layout>
</v-container>
</template>

<script>

export default {
    data(){
        return{
        valid: false,
        item: {},
        dialog: false,
        dialog_test: false,
        dialog_interview: false,
        dialog_message: false,
        menu: false,
        dateFormatted: null,
        select: ["08:30", "09:00", "09.30"],
        StandardTestHeaders: [
          {
            text: 'Name',
            align: 'left',
            value: 'name'
          },
          { text: 'Score', value: 'score' },
        ]
    }
    },
    mounted(){
        console.log(this.$route.params.id);
        var items =[
            {id:1,
            TechnicalSkills:["C#", "MSSQL", "MongoDB", "Azure", "Linux", "Jenkins"],
            OtherSkills:["Project Management", "Six Sigma", "Manufacturing Domain"],
            StandardTest:[{name:"Codify C# for professional", score:"30/50"},{name:"Hacker Rank SQL Challenge", score:"95/100"}]
            },
            {id:2,
            TechnicalSkills:["Java", "HTML", "CSS", "React", "Structs", "Fortran"],
            OtherSkills:["Work Health Safety", "Finance & Banking"],
            StandardTest:[{name:"Codify Java for professional", score:"42/50"},{name:"Hacker Rank SQL Challenge", score:"85/100"}]
            },
            {id:3,
            TechnicalSkills:["Java", "C#", "CSS", "OracleDB"],
            OtherSkills:["Project Management"],
            StandardTest:[{name:"Codify C# for professional", score:"49/50"},{name:"Hacker Rank SQL Challenge", score:"70/100"}]
            },
            {id:4,
            TechnicalSkills:["Python", "NoSQL", "MongoDB", "OracleDB"],
            OtherSkills:["Project Management"],
            StandardTest:[{name:"Codify Python for professional", score:"45/50"},{name:"Hacker Rank SQL Challenge", score:"100/100"}]
            }
        ];
        items.forEach(data => {
            if(data.id == this.$route.params.id){
                this.item = data;
            }           
        });
    },
    methods:{
        returnApplicationList(){
                    this.$router.push('/seekers');
            
        }
    }
}
</script>

<!--
<template>
  <v-container>
      <v-card width="800">
        <v-card-media
          src="https://cdn-images-1.medium.com/max/1600/1*8r6hvv5E-FOOdKOih4G7Hg.jpeg"
          height="200px"
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <i><small>Applicant ID: 201807283716</small></i>
            <h3 class="headline mb-0"><b>Portfolio Projects</b></h3>
            <div>
                <ul style="list-style-type:square">
                <li> <a href="">Blocks</a> : An intuitive reporting platform used by political campaigns and issue advocacy organizations. Blocks organizes all of the program's data in one place; Data is synchronized dynamically so that people can spend less time connecting to data and more time producing critical insights about the program.</li>
                <br/>
                <li> <a href="">Downbeat</a> : A platform for artists to share their music with their fans. The web application allows artists to grow their audience through social media engagement. Users follow the artist on Twitter, SoundCloud, or Youtube, and in exchange they receive access to song downloads.</li>
                <br/>
                <li> <a href="">Polling Location Lookup Tool</a> : A responsively designed web app allowing voters to find the closest polling location to their current location or address. This tool uses geolocation and GIS to empower voters to locate the easiest site for them to use to cast their vote. This product was developed with Nevada in mind, and accommodates Nevada's unique early voting system. Even though early voting locations vary by day, the Polling Location Lookup always allows voters to find the closest open polling location to them each day. The functions of this tool are modular, and can operate as a stand alone site or they can be embedded in existing sites or resources. This tool was used in Nevada by President Barack Obama's Re-Election Campaign in 2012.</li>
                <br/>
                </ul>
            </div>

            <h3 class="headline mb-0"><b>Competitions</b></h3>
            <div>
                <div> <b>Individual</b></div>
                <ul style="list-style-type:square">
                <li> Hacker Rank : <a href="https://www.hackerrank.com/contests/openbracket-2017">OpenBracket Delaware</a> Top 120 (2811 contestants) </li>
                <li> Hacker Rank : <a href="">CodeAgon</a> Top100 (1837 contestants) </li>
                </ul>

                <div> <b>Team</b></div>
                <ul style="list-style-type:square">
                <li> Kaggle : <a href="https://www.kaggle.com/c/avito-demand-prediction/leaderboard">Avito Demand Prediction Challenge </a> Top25 (1917 teams) </li>
                <li> Kaggle : <a href="https://www.kaggle.com/c/talkingdata-adtracking-fraud-detection"> TalkingData AdTracking Fraud Detection Challenge </a> Top180 (3967 teams) </li>
                </ul>
                <br/>
            </div>

            <h3 class="headline mb-0"><b>Voluntary Works</b></h3>
            <div>
                <ul style="list-style-type:square">
                <li> <a href="https://www.womenwhocode.com/singapore">Women Who Code Singapore</a> : Event & Meet-Ups coordinator</li>
                <li> <a href="https://www.datakind.org/chapters/datakind-sg">DataKind SG</a> : Data Cleaning & Exploratory Analysis</li>
                <br/>
                </ul>
            </div>

        </div>

        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Issuance of Take-Home Assignment</v-btn>
          <v-btn flat color="orange">Schedule Online Test</v-btn>
          <v-btn flat color="orange">Schedule On-Site Interview</v-btn>
        </v-card-actions>
      </v-card>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
-->
