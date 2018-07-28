<template>
<v-container>
    <v-layout align-center justify-center>
    <v-card width="">
        <v-card-text>
            <div>Application: {{item.id}}</div>
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
            TechnicalSkills:["C#", "SQL", "MongoDB", "Azure", "Linux", "Jenkins"],
            OtherSkills:["Project Management", "Six Sigma", "Manufacturing Domain"],
            WriteUp:"Hi, I came across your job posting and find it interesting. I have worked with various projects in the past, feel free to contact me for further discussion of this role.",
            StandardTest:[{name:"Codify C# for professional", score:"30/50"},{name:"Hacker Rank SQL Challenge", score:"95/100"}]
            },
            {id:2,
            TechnicalSkills:["Java", "HTML", "CSS", "React", "Structs", "Fortran"],
            OtherSkills:["Work Health Safety", "Finance & Banking"],
            WriteUp:"I'm looking for opportunity to work in TechTech Pte Ltd, have experience working with teams of various capability. I have written a few open source technologies that have more than 100 000 users per month. Feel free to contact me for further discussion.",
            StandardTest:[{name:"Codify Java for professional", score:"42/50"},{name:"Hacker Rank SQL Challenge", score:"85/100"}]
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
                    this.$router.push('/');
            
        }
    }
}
</script>
