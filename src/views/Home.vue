<template>
    <div id="home-view">
        <Card v-for="(title,index) in titles" :key="index" :title="title"></Card>
    </div>
</template>

<script>
import Card from '@/components/Cards'
    export default {
        components:{
         Card
        },
        data(){
            return{
                titles:["Kısayollar","Yakında Çalınanlar","Şimdi Popüler Olanlar","Günlük Müzik İhtiyacın","Popüler Çalma Listeleri"]
            }
        }
       
        
    }
</script>

<style >
#home-view{
    width: 100vw;
    min-height: 100vh;
}
</style>