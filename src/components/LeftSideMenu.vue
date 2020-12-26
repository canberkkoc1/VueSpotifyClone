<template>
    <div id="left-side-menü">
        <section class="up-menu">
            <div class="logos">
                <img src="../assets/sp-logo.png" alt="" width="168" height="49">
            </div>
            <div class="links">
                <router-link to="/">
                <div class="homepage views-links" :class="{'views-links-focus': $route.name == 'Home' }">
                   <HomeIcon width="29" v-if="$route.name !== 'Home'"></HomeIcon>
                   <HomeIconFill width="29" v-else></HomeIconFill>
                   <h2>Anasayfa</h2>
                </div>
                </router-link>
                <router-link to="/search">
                    <div class="search views-links" :class="{'views-links-focus': $route.name == 'Search' }">
                        <SearchIcon width="32" v-if="$route.name == 'Search'"></SearchIcon>
                        <SearchIconFill width="29" v-else></SearchIconFill>
                        <h2>Ara</h2>
                    </div>

                </router-link>
                <router-link to="/kütüphane">
                    <div class="search views-links" :class="{'views-links-focus': $route.name == 'Kütüphane' }">
                        <LibraryIcon width="29" v-if="$route.name == 'Kütüphane'"></LibraryIcon>
                        <LibraryIconFill width="29" v-else></LibraryIconFill>
                        <h2>Kütüphane</h2>
                    </div>

                </router-link>

            </div>
        </section>
        
        <section id="play-list-left">
            <h2>Çalma Listeleri</h2>
            <div class="calma-listesi-olustur lists">
                <div class="icon-play-list">
                <PlayListIcon width="29"></PlayListIcon> 
                </div>
               
               <h3>Çalma Listesi Oluştur</h3>
            </div>

            <div class="beğenilen lists">
                <div class="fav">
                <FavIcon ></FavIcon>

                </div>
                <h3>Beğenilen Şarkılar</h3>
            </div>
        </section>

        <section id="all-library">
            <div class="play-library">
                <div class="library-names" v-for="album in albums" :key="album">
                    <h2>{{album.title | moreThanChar(20)}}</h2>
                </div>
            </div>


        </section>



    </div>
</template>

<script>
import HomeIcon from '../assets/icons/home.svg'
import HomeIconFill from '../assets/icons/home-fill.svg'
import SearchIcon from '../assets/icons/search.svg'
import SearchIconFill from '../assets/icons/search-fill.svg'
import LibraryIcon from '../assets/icons/book.svg'
import LibraryIconFill from '../assets/icons/book-fill.svg'
import PlayListIcon from '../assets/icons/calma.svg'
import FavIcon from '../assets/icons/begen.svg'
    export default {
        components:{
            HomeIcon,
            HomeIconFill,
            SearchIcon,
            SearchIconFill,
            LibraryIcon,
            LibraryIconFill,
            PlayListIcon,
            FavIcon,
        },
        data(){
            return{                
                albums:[]
            }
        },

        created(){
              fetch("https://jsonplaceholder.typicode.com/albums")
              .then(res => res.json())
              .then(data => this.albums = data)
             .catch(err => console.log(err))
        },
       
       
    
        
        filters:{
            moreThanChar(value){
                if(value && value.length > 20){
                    value = value.slice(0,20)
                }
                return value
                  }
              }
           
             
        }
</script>

<style>
body,html{
    font-family: 'Times New Roman', Times, serif;
}
#left-side-menü{
    background-color:#000000;
    width: 12%;
    height: 100vh;
    color: #C6C6C6;
    position: fixed; 
    z-index: 1; 
    top: 0; 
    left: 0;

    
}
a{
    text-decoration: none;
}
.up-menu{
    width: 90%;
    margin: 0 auto;
    
}
.logos{
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.logos img{
    margin: 1.5rem 0;
}
.links h2{
    padding-left:2rem ;
    font-size: 1.2rem;
    font-weight: 900;
}
.views-links{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 5px ;
    padding-left:15px ;
    cursor: pointer;
}
.views-links-focus{
    background-color: #282828;
}

#play-list-left 
{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #b3b3b3b6;
    padding-bottom: 1rem;
}

.lists
{
    width: 100%;
    display: flex;
    align-items: center;

    
}
.lists h3{

    font-size: 1.2rem; font-weight: 900;
}


.icon-play-list
{
    background-color: #b3b3b3;
    width: 34px;
    height: 34px;
    text-align: center;
    margin-left:5px ;
    margin-right: 1.8rem;

    
}
.fav
{
    background: linear-gradient(83deg, rgba(129,112,229,1) 0%, rgba(184,63,140,1)
    49%, rgba(127,114,232,1) 92%);

    width: 34px; 
    height: 34px; 
    text-align: center;
    line-height: 3rem;
    margin-left:5px ;

    margin-right: 1.8rem;
}

#all-library{
    overflow-y: scroll;
    width: 100%;
   height: 65%;
}
.play-library{
    width: 80%;
    margin: 0 auto;
}

.library-names h2{
     font-size: 1.2rem; 
     font-weight: 500;

}




::-webkit-scrollbar { 
    width: 10px; 
    } 
    /* Track */ 
::-webkit-scrollbar-track {
    background: #000000;
 } /* Handle */ 
::-webkit-scrollbar-thumb { 
     background:#555; 
    } 
    /* Handle on hover */ 
::-webkit-scrollbar-thumb:hover {
    background:#888; 
     }



</style>