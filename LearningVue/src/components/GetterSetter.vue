<template>
    <pre>
      {{ JSON.stringify(formValue) }}
    </pre>
  
    <h4>this is my name : {{ myname }}</h4>
    <h4>this is last Name : {{ lastName }}</h4>
    <h4>computed full name is : {{ fullName }} </h4>
    <button @click="changeFullName"> Change name</button>
  
  
   
    <h2 v-if="num == 0">the number is zero</h2>
    <h2 v-else>the number is not zero</h2>
    <h2 :key="name" v-for="(name, index) in names">{{ index }} {{ name }}</h2>
    <div v-for="actor in actors" :key="actor.name">
      <h2>{{ actor.name }}</h2>
      <h3 v-for="movie in actor.movies" :key="movie">
        {{ movie }}
      </h3>
    </div>
    {{ name }}
    <button v-on:mouseover="name = 'Garima'">Change Name</button>
    <button @click="handleButton(1, $event)">this is event button</button>
  
    <form @submit="submitForm">
      <div>
        <label for="name"> name </label>
        <input type="text" id="name" v-model.trim="formValue.name" />
      </div>
  
      <div>
        <label for="remote"> Do you wat to do remote Work?</label>
        <input
          type="checkbox"
          id="remote"
          v-model="formValue.remoteWork"
          true-value="Yes"
          false-value="No"
        />
      </div>
  
      <button type="submit">submit</button>
    </form>
  
    <h2 v-once>{{ name }}</h2>
    <button @click="name = 'Garima'">Change name</button>
  
    <button @click="items.push({id:4, name:'machine', price:90})"> Add item </button>
    <h3>
      The Total price dynamically is : 
      {{
        items.reduce((total, curr) => {
          return total = total + curr.price;
        }, 0)
      }}
    </h3>
  
    <h3>the total by computed is : {{ total }}</h3>
    <h3 > the total by methods is : {{ getTotal() }}</h3>
  
    <!-- <h2 v-for="item in items"> the items in the computed are:  </h2> -->
  
  </template>
  
  
  <script>
  export default {
    name: "CounterComponent",
    data() {
      return {
        name: "Vivek",
        num: 7,
        names: ["vivek", "thakur", "Garima"],
        myname:'Vivek',
        lastName:'Thakur',
  
  
  
        items: [
          {
            id: 1,
            name: "Tv",
            price: 100,
          },
          {
            id: 2,
            name: "Fridge",
            price: 70,
          },
          {
            id: 3,
            name: "Cupboard",
            price: 800,
          },
        ],
  
        formValue: {
          name: "",
          remoteWork: false,
        },
  
        actors: [
          { name: "ajay", movies: ["dhoom", "thor", "idk"] },
          {
            name: "hritik",
            movies: ["dhoom2", "krish"],
          },
        ],
      };
    },
    methods: {
      changeFullName(){
        this.fullName='garima pandey gupta'
      },
      handleButton(num, event) {
        console.log(num);
        console.log(event);
      },
      submitForm(event) {
        event.preventDefault();
        console.log(this.formValue);
      },
      getTotal(){
        console.log('Method was called')
        return this.items.reduce((total, curr) => {
          return total = total + curr.price;
        }, 0)
      },
     
    },
    computed:{
      fullName:{
        get(){
          return `${this.myname} ${this.lastName}`;
        },
        set(value){
          const changedName= value.split(' ')
          this.myname= changedName[0]
          this.lastName= changedName[1]
        }
      },
      total(){
        console.log('computed was called')
  
        return this.items.reduce((total, curr) => {
          return total = total + curr.price;
        }, 0)
      }
    }
  };
  </script>
  <style>
  </style>