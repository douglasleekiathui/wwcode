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
      <v-container>
  
    <v-card-title primary-title>
    <v-card dark
    class="ma-2 pa-2" style="width:200px"
        v-for="i in selectedItems" 
        :key="i.id">
        
    <div>
      {{ i.id }}
      </div>
      <p class="text-md-center"><v-icon>face</v-icon></p>
    {{arrayToString(i.skills)}}
    <div>{{ i.views }}</div>
    <v-card-actions>
    <v-btn @click="returnSeekerInfo(i.id)">View Profile</v-btn>
    </v-card-actions>

    </v-card>
    </v-card-title>

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
        items: ['Java', 'C#', 'Python', 'MySQL'],
        applicants:[
        {id:1, skills:['C#','MSSQL','MongoDB'], views:'Number of views : 12'},
        {id:2, skills:['Java','HTML','CSS'], views:'Number of views : 10'},
        {id:3, skills:['Java','C#','CSS'], views:'Number of views : 2'},
        {id:4, skills:['Oracle','Java','C#'], views:'Number of views : 100'},
        {id:5, skills:['Python','NoSQL','R'], views:'Number of views : 50'},
        {id:6, skills:['Java','C#','MSSQL'], views:'Number of views : 50'},
        {id:7, skills:['Java','MySQL','C#', 'Oracle'], views:'Number of views : 5'},
        {id:8, skills:['Python','R','MySQL'], views:'Number of views : 3'},
        {id:9, skills:['C#','Python','Java'], views:'Number of views : 11'},
        {id:10, skills:['Java','PHP','Linux'], views:'Number of views : 70'},
        {id:11, skills:['Java', 'NoSQL','R','Python'], views:'Number of views : 130'},
        {id:12, skills:['NoSQL','R','Python','C#'], views:'Number of views : 9'},
        {id:13, skills:['Java','C#'], views:'Number of views : 25'},
        {id:14, skills:['MSSQL','Python','Java','C#'], views:'Number of views : 11'},
        {id:15, skills:['Java','C#','R'], views:'Number of views : 10'},
        {id:16, skills:['C#','Python','Java','MongoDB'], views:'Number of views : 123'},
        {id:17, skills:['Ruby','R'], views:'Number of views : 7'},
        {id:18, skills:['Java','Python', 'R'], views:'Number of views : 10'},
        {id:19, skills:['MySQL','NoSQL','C#'], views:'Number of views : 67'}
        ]
      }
    },
    computed:{
        selectedItems(){
          console.log(this.chips);
    if(this.chips.length==0){
        return this.applicants;
        }
    else if (this.chips.length==1){
          var array= [];
          var vm = this
          for(var key in this.applicants)
          {
            console.log(this.applicants[key]);
            if(this.applicants[key].skills.some(r => vm.chips.includes(r)))
            {
              array.push(this.applicants[key]);
            }
          }
          return array;
        }     
    else if (this.chips.length==2){
        var array2 = [];
        var vm = this
        for(var key in this.applicants)
        {
          if(this.applicants[key].skills.some(j => vm.chips.includes(j)))
          {
            array2.push(this.applicants[key]);
          }
        }
        return array2;
        }
    else if (this.chips.length==3){
        var array3 = [];
        var vm = this
        for(var key in this.applicants)
        {
          if(this.applicants[key].skills.some(k => vm.chips.includes(k)))
          {
            array3.push(this.applicants[key]);
          }
        }
        return array3;
        }
    else if (this.chips.length==4){
        var array4 = [];
        var vm = this
        for(var key in this.applicants)
        {
          if(this.applicants[key].skills.some(d => vm.chips.includes(d)))
          {
            array4.push(this.applicants[key]);
          }
        }
        return array4;
        }
    }   
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },

      returnSeekerInfo(item){
                    this.$router.push('/seekers/' + item)
      },

      arrayToString(arr){
        return arr.join(", ");
      }
    }
}
</script>
