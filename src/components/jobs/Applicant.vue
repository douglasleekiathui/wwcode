<template>
  <v-container>
    <div class="pa-3 display-1">Applicant Details <v-chip :color="getChipColor(item.status)" text-color="white">{{ item.status }}</v-chip></div>
    <br/>
    <v-layout align-center justify-center>
    <v-card width="">
        <v-card-text>
            <div>Application: {{item.id}}</div>
            <br>
            <div><h2>Projects</h2></div>
            <div v-for="(Projects,i) in item.Projects" :key="i">
              <br>
              <a :href="Projects.url">{{Projects.name}}</a>: {{Projects.writeup}}
              <br>
            </div>
            <br>
            <v-divider></v-divider>
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
                  <td><a :href="props.item.url">{{ props.item.name }}</a></td>
                     <td><br><v-progress-circular
      :value="props.item.number"
      :color="getScoreColour(props.item.number)"
      :size="100"
      :width="15"
    >{{props.item.number}}</v-progress-circular><br><br></td>
                </template>
              </v-data-table>               
            <br>
            <br>
                        <div><h2>Tests Administered by My Company</h2></div>
            <br>
                <v-data-table
                :headers="StandardTestHeaders"
                :items="item.CompanyTest"
                hide-actions
                class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td><a :href="props.item.url">{{ props.item.name }}</a></td>
                     <td><br><v-progress-circular
      :value="props.item.number"
      :color="getScoreColour(props.item.number)"
      :size="100"
      :width="15"
    >{{props.item.number}}</v-progress-circular><br><br></td>
                </template>
              </v-data-table>               
            <br>
            <br>
            <v-divider></v-divider>
            <br>
            <div><h2>Applicant Writeup</h2></div>
            <br>
            <div>{{item.WriteUp}}</div>
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
    <!-- End of dialog for contact applicant -->
        <!-- dialog for arrange interview portion -->
    <v-dialog class="pa-1" v-model="dialog_interview" persistent max-width="500px">
      <v-btn slot="activator" color="primary" dark>Arrange interview</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Arrange interview</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
             <v-menu
          ref="menu"
          :close-on-content-click="false"
          v-model="menu"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            v-model="date"
            label="Date"
            prepend-icon="event"
          ></v-text-field>
          <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
        </v-menu>
              <v-flex xs12>
              <v-select
              :items="select"
              label="Select time"
              item-value="text"
            ></v-select>
                <v-text-field label="Message (Optional)"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_interview = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog_interview = false">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End of dialog for Arrange interview -->
    <!-- dialog for sending test portion -->
    <v-dialog class="pa-1" v-model="dialog_test" scrollable max-width="500px">
      <v-btn slot="activator" color="primary" dark>Send Test(s)</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Select test(s) to send</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <v-checkbox-group v-model="hello" column>
            <v-checkbox label="Java Beginner" value="JB1"></v-checkbox>
            <v-checkbox label="Java Advanced" value="JA1"></v-checkbox>
            <v-checkbox label="React Beginner" value="RA1"></v-checkbox>
        </v-checkbox-group>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog_test = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog_test = false">Send</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End of dialog for sending test interview -->
            <!-- dialog for arrange interview portion -->
    <v-dialog class="pa-1" v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="error" dark>Reject Candidate</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Reject Candidate</span>
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
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="error darken-1" flat @click.native="dialog = false">Reject</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End of dialog for Arrange interview -->
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
        hello: null,
        placeholderForNothing: null,
        date: null,
        menu: false,
        dateFormatted: null,
        select: ["08:30", "09:00", "09.30"],
        StandardTestHeaders: [
          {
            text: 'Test Name',
            align: 'left',
            width: '55%',
            value: 'name'
          },
          { text: 'Score', value: 'number' },
        ]
    }
    },
    mounted(){
        console.log(this.$route.params.applicant);
        var items =[
            {id:1,
            status:"Reviewed",
            Projects:[{name:"Logic University Stationery Stock Inventory System", url:"http://www.LUSSIS.com",writeup:"A stationery inventory system for logic university using C# as backend and MongoDB as database. The inventory system shorten the average processing time from 4 days to 1 days. An accountability assessment also showed a 300% increase in the accountability of inventory under the new system as compared to the old manual system. The project was awarded with ISS-gold medal award."},{name:"Codeblue", url:"http://www.google.com",writeup:"A dashboard framework system that helps SME of Singapore to build dashboard application to link to their machine and transform data into useful information for process improvement. An average of 15% increment in productivity was reported by 26 Singapore SMEs. The system was developed on the MEAN stack to minimise cost of operation for the SMEs."},{name:"BlueMart Logistic System", url:"http://www.bluemart.com",writeup:"A logistic management for Blue Mart Singapore Pte Ltd. Improve the traceability of products using RFID tagging and other IOT solutions. The system allowed damaged perishable to be detected and result in a decrease of goods due to spoilage by 47%. This project was awarded with Blue Dot Design 2017"}],
            TechnicalSkills:["C#", "SQL", "MongoDB", "Azure", "Linux", "Jenkins"],
            OtherSkills:["Project Management", "Six Sigma", "Manufacturing Domain"],
            WriteUp:"Hi, I came across your job posting and find it interesting. I have worked with various projects of various size in the past. I have also previously lead multiple teams for an application with more than 50 000 users monthly. I believe in a flat organization structure and believe I will be a good fit to the company. Feel free to contact me for further discussion of this role, I hope to hear from you soon",
            StandardTest:[{name:"Codify C# for professional", url:"http://www.google.com", score:"30/50", number:60, colour:"lime accent-3"},{name:"Hacker Rank SQL Challenge", url:"http://www.hackerrank.com", score:"95/100", number:70, colour:"green"}],
            CompanyTest:[{name:"Advance Java", url:"http://www.google.com", number:80}, {name:"Basic SQL", url:"http://www.yahoo.com", number:20}]
            },
            {id:2,
            status:"Invited",
            Projects:[{name:"Theslos University HR System", url:"http://www.google.com", writeup:"A HR system for Theslos University using Java and spring framework. The average processing time of candidate improved from 14 days to 3 days while satifaction of employees improved by 35%"}, {name:"BoothsWorth Architecture Drawing Application", url:"http://www.google.com", writeup:"A drawing application that integrates AutoCAD with BootsWorth Internal Project Managaement System that provide better monitoring and cost estimation for the company. BootsWorth reported a 300% incremenet of cost estimation accuracy and directors were able to closely monitor projects."}],
            TechnicalSkills:["Java", "HTML", "CSS", "React", "Structs", "Fortran"],
            OtherSkills:["Work Health Safety", "Finance & Banking"],
            WriteUp:"I'm looking for opportunity to work in TechTech Pte Ltd, have experience working with teams of various capability. I have written a few open source technologies that have more than 100 000 users per month. Feel free to contact me for further discussion.",
            StandardTest:[{name:"Codify Java for professional", url:"http://www.codify.com", score:"42/50", number:84, colour:"green"},{name:"Hacker Rank SQL Challenge", url:"http://www.hackerank.com", score:"85/100", number:30, colour:"red"}],
            CompanyTest:[{name:"Advance Java", url:"http://www.google.com", number:80}, {name:"Basic SQL", url:"http://www.yahoo.com", number:20}]
            }
        ];
        items.forEach(data => {
            if(data.id == this.$route.params.applicant){
                this.item = data;
            }           
        });
    },
    methods:{
        returnApplicationList(){
                    this.$router.push('/jobs/1');
        },
        getScoreColour(value){
          return value >= 90 ? "green"
          :value >= 80 ? "light-green accent-2"
          :value >= 70 ? "lime accent-3"
          :value >= 50 ? "yellow accent-2"
          :value >= 30 ? "orange accent-2"
          : "red"
        },
        getChipColor(status) {
        return status === 'New' ? 'primary'
          : status === 'Reviewed' ? 'secondary'
            : status === 'Invited' ? 'success' : 'danger'
      }

    }
}
</script>
