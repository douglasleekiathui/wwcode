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
        items: ['Java', 'C#', 'Python'],
        applicants:[
        {id:1, skills:['C#','MSSQL','MongoDB'], views:'Number of views : 12'},
        {id:2, skills:['Java','HTML','CSS'], views:'Number of views : 10'},
        {id:3, skills:['Java','C#','CSS'], views:'Number of views : 2'},
        {id:4, skills:['Python','NoSQL','MongoDB'], views:'Number of views : 1'},
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
    }   
    },
    methods: {
      remove (item) {
        this.chips.splice(this.chips.indexOf(item), 1)
        this.chips = [...this.chips]
      },

      returnSeekerInfo(item){
                    this.$router.push('/talent/' + item)
      },

      arrayToString(arr){
        return arr.join(", ");
      }
    }
}
</script>
