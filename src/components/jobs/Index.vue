<template>
<div>
  <v-combobox
    v-model="chips"
    :items="items"
    label="Search Keywords"
    chips
    clearable
    solo
    multiple
  >
    <template slot="selection" slot-scope="data">
      <v-chip
        :selected="data.selected"
        close
        @input="remove(data.item)"
      >
        <strong>{{ data.item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
<v-card>
<v-flex>
      <v-container fluid grid-list-lg>
    <v-card color="grey darken-7" class="white--text"> 
    <v-card-title primary-title>
    <div 
        v-for="i in selectedItems" 
        :key="i.id">
        <v-icon>face</v-icon>
    <div class="headline">{{ i.id }}</div>
    <span v-for="s in i.skills">{{s}}</span>
    <div>{{ i.views }}</div>
    <v-card-actions>
    <v-btn flat blue>View Profile</v-btn>
    </v-card-actions>
    </div>
    </v-card-title>
</v-card>
</v-container>
</v-flex>
    </v-card>
    </div>
</template>


<script>

  export default {
    data () {
      return {
        chips: [],
        items: ['Java', 'C#', 'Python'],
        applicants:[
        {id:1, skills:['Java ',' , C#',' , Python'], views:'Number of views : 12'},
        {id:2, skills:['C# ',' , Java',' , Python'], views:'Number of views : 10'},
        {id:3, skills:['Python ',' , C#',' , Java'], views:'Number of views : 2'},
        {id:4, skills:['Python ',' , Java',' , C#'], views:'Number of views : 1'},
        ]
      }
    },
    computed:{
        selectedItems(){
    if(this.chips.length==0){
        return this.applicants;
        }
    else if (this.chips.length==1){
        return this.applicants;
        }     
    else if (this.chips.length==2){
        return this.applicants;
        }
    else if (this.chips.length==3){
        return this.applicants;
        }
    }   
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      }
    }
}
</script>
