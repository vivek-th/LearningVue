export default{
    name:'Counter',
    data(){
      return{
        count:0,
      }
    },
    methods:{
      incrementCount(){
        this.count++
      }
    }
  }