<template>
    <h2>this is heading in child
    </h2>
    <div>
        <h2>this is the popup</h2>
        <button @click="$emit('close','Vivek Thakur')" >Close popUp</button>
    </div>
    
</template>
<script>
export default{
    name:'CustomEvent',
    data(){
        return{
        
        }
    },
    emits:[
        'close',
    ]
}
</script>
<style>
</style>