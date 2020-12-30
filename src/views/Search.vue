<template>
    <div id="search-views">
        <div class="search-all">
            <div class="search-bar">
                <input type="text" name="" id="searcBar" placeholder="Sanatçı, Şarkı veya Podcast ara ">
                <i class="fa fa-search w3-xlarge"></i>
            </div>
            <div class="header-search">
                <h1>En çok dinlediğin türler</h1>
            </div>
            <div class="searc-cards">
                <div class="searc-image" v-for="index in 3" :key="index">
                    <h3 class="img-hdr" >{{titlesType[index-1]}}</h3>
                    <img  class="img-for-search"  :src="`https://loremflickr.com/151/149/london?random=${index*2}`" alt="">

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        componets:{
            
        },
        data(){
            return{
                images:[],
                titlesType:["Hip Hop","R&B","Pop"]
            }
        },
        
       
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
h1{
    font-size: 3rem;
    font-weight: 700;
}
</style>