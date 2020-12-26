<template>
    <div id="card-views">
        <div class="cards-headers">
            <h1>{{title}}</h1> 
            <h3>Hepsini Gör</h3>
        </div>
        <div class="cards">
            <div class="card" v-for="(img,index) in images" :key="index">
                <div class="card-images">
                    <img :src="`https://loremflickr.com/151/149/london?random=${index*8}`" alt="image not found">
                </div>
                <div class="card-body">
                    <h2>{{img.author | singerMoreThanChar(6)}}</h2>
                    <h3>-Canberk</h3>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:"Cards",
        data(){
            return{
                images:[]
            }
        },
        props:{
            title:{
                type:String
            }
        },

        created(){
             fetch("https://picsum.photos/v2/list")
             .then(res => res.json())
             .then(data => {
                  this.images=  data.slice(0,8)
                 })
             .catch(err => console.log(err))           
        },

        filters:{
                singerMoreThanChar(value){
                  if(value && value.length > 6){
                       value = value.slice(0,6) 
                       } 
                       return value 
                       }


                }
        
       
        
    }
</script>

<style>
#card-views{
   margin-top: 77px;
   width: 90%;
    margin-bottom:3rem ;
    margin-left: 17rem;
    position: relative;
    
}
.cards-headers
{
    width: 93%; 
    margin: 0 auto;
    color: white;
    display: flex;
    justify-content: space-between;
}
.cards{
    margin-top: 1rem; 
    width: 100%;
    height: 25%;
    display:flex; 
    justify-content: space-evenly; 

}

.card{
    height: 260px;
    width: 190px;
    background: #171717;
        
}
.card-images
{
    width: 151px;
    height: 150px;
    margin: 0 auto;
    margin-top:1rem ;
    
}
.card-body{
    margin: 1rem;
    color: #fff;
}
.card-body h2
{
    font-size: 1.5rem;
}
.card-body h3
{
    font-size: 1rem;
    opacity: .5;
}
.card-body h2
{
    font-size: 1.5rem;
}

.cards-headers h3
{
    margin-right: 2rem;
}
.cards-headers h1:hover
{
    text-decoration: underline;
    cursor: pointer;
}
.cards-headers h3:hover
{
    
    cursor: pointer;
    text-decoration: underline;
}

</style>