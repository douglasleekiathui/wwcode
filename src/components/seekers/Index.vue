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
      <v-container fluid grid-list-lg>
<v-card color="blue-grey darken-2" class="white--text"> 
    <v-card-title primary-title>
    <div 
        v-for="i in selectedItems" 
        :key="i.id">
        <v-icon>face</v-icon>
    <div class="headline">{{ i.id }}</div>
    <span v-for="s in i.skills">{{s}}</span>
    <div>{{ i.views }}</div>
    </div>
    </v-card-title>
    <v-card-actions>
    <v-btn flat dark>View Profile</v-btn>
    </v-card-actions>
</v-card>
</v-container>
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
        {id:1, skills:['Java','Node'], views:'Number of views : 10'},
        {id:2, skills:['C#','SQL'], views:'Number of views : 12'}
        ]
      }
    },
    computed:{
        selectedItems(){
    if(this.chips.length==0){
        return this.applicants;
        }
            var arrayToReturn=[];
            this.applicants.forEach(e=>{
                e.skills.forEach(s=>{
                    if(this.chips.indexOf(s)){
                        arrayToReturn.push(e);
                    }
                })
            })
            return arrayToReturn;
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