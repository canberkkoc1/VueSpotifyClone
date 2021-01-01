<template>
    <div id="search-views">
        <div class="search-all">
            <div class="search-bar">
                <input type="text" name="" id="searcBar" placeholder="Sanatçı, Şarkı veya Podcast ara ">
                <i class="fa fa-search w3-xlarge"></i>
            </div>
            <div class="header-search">
                <h1 class="Top-lis">En çok dinlediğin türler</h1>
            </div>
            <div class="searc-cards">
                <div class="searc-image" v-for="index in 3" :key="index">
                    <h3 class="img-hdr" >{{titlesType[index-1]}}</h3>
                    <img  class="img-for-search"  :src="`https://loremflickr.com/151/149/london?random=${index*2}`" alt="">

                </div>
            </div>
            
            
           <div class="m-card-l">
               <div class="header-all-card">
                    <h1 class="all-card">Hepsine göz at</h1>
               </div>
               <div class="all-m-cards" >
                   <div class="m-card" v-for="index in 15" :key="index" :style="{background:randomColor(index)}">
                       <img  class="img-for-card"  :src="`https://loremflickr.com/151/149/london?random=${index*9}`" alt="">
                       <h1>{{titlesAll[index-1]}}</h1>
                   </div>
               </div>
           </div>
        </div>
            
    </div>
</template>

<script>


    export default {
        name:"Search",
        componets:{
           
            

        },
        data(){
            return{
                images:[],
                titlesType:["Hip Hop","R&B","Pop"],
                colorGet:{},
                titlesAll:["Podcast'ler","Senin için Hazırlandı","Listeler","Yeni Çıkanlar","Keşfet","Concerts","2020 Özeti","Ruh Hali","Evde","Öğrenci","Dönem müzikleri","Uyku","Chill","Odaklan","Caz"]
            }
        },

        methods:{
            randomColor(index){
                const r = () => Math.floor(256* Math.random());
                return this.colorGet[index] || (this.colorGet[index] = `linear-gradient(83deg,rgba(${r()},${r()},${r()}) 0% ,rgba(${r()},${r()},${r()}) 100% )`)
            }
        }
        
       
    }

</script>

<style>
body{
    color: rgb(255, 253, 253);
}

#search-views{
    margin-left: 20rem;
    margin-top: 1rem;
    position: relative;
    min-height: 100vh;
    width: 80vw;
}

.search-all
{
    position: relative;

}

.search-bar
{
    position: relative;
    width:372px ;
    height: 45px;
}
#searcBar
{
    
    width: 100%;
    height: 100%;
    border-radius: 30px;
    outline: none;
    padding-left:3rem ;
}
::placeholder{
    color: #9e9e9e;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;

}

.search-bar i{
    position: absolute;
    top: .7rem;
    left: 1rem;
    color: black;
    height: 32px;
}

.header-search
{
    margin-top: 4rem;
    width: 100%;
}


.searc-cards
{
    display: flex;
    justify-content: space-between;
   height: 20rem;
}


.searc-image
{
    cursor: pointer;
    border-radius: 15px;
    position: relative;
    background: radial-gradient(circle, rgba(255,200,100,1) 0%, rgba(245,155,35,1)
100%);


    width: 32%;
    overflow: hidden;
}
.searc-image:nth-child(2)
{
    
    background: radial-gradient(circle, rgb(24, 243, 214) 0%, rgb(4, 108, 228)
100%);


}

.searc-image:last-child{
    background: radial-gradient(circle, rgba(191,100,255,1) 0%, rgba(119,35,245,1)
100%);


}



.img-for-search
{
    position: absolute;
    right: -30px;
    bottom: -10px;
    widows:34px;
    transform: rotate(.1turn);
}
.img-hdr
{
    margin-left: 1rem;
    font-weight: 700;
    font-size: 3.2rem;
}
.Top-lis
{
    font-size: 3rem;
    font-weight: 700;
}
.m-card
{
    width: 250px;
    height: 250px;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.all-m-cards{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 3rem;
    margin-bottom: 2rem;
    padding-left:4rem;
    position: relative;
}

.img-for-card{
    position: absolute; 
    right: -10px; 
    bottom: -16px;
    width: 100px; 
     transform:rotate(.1turn);

}
.m-card h1{
    font-size: 2rem;
    margin-left: .5rem;
}
</style>