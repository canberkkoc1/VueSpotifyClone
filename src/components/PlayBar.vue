<template>
    <div id="play-bar">
        <div class="play-bar-fix">
            <div class="tracks-info">
                <div class="image-icons">
                    <img :src="`https://loremflickr.com/151/149/london?random=${11}`" alt="">
                    <div class="info-text">
                        <h4>YES!(feat. Rich The Kid & K CAMP)</h4>
                        <h5>KYLE, K CAMP, Rich The Kid</h5>
                    </div>
                </div>
                    <div class="icons-for-info">
                            <FavBarIcon fill="white" class="icons"></FavBarIcon>                    
                            <MinimizeIcon width="20" height="20" class="icons"></MinimizeIcon>
                    
                    </div>


            </div>
            <div class="buttons-plays">
                <div class="butn-contrl">
                    <button><MixerIcon></MixerIcon></button>
                    
                    <button><BackPlayIcon></BackPlayIcon></button>
                   <button @click="isPlay = !isPlay">
                        <StopIcon v-if="isPlay === false"></StopIcon>
                        <PlayBottomIcon v-else></PlayBottomIcon>
                   </button>
                   <button>
                        <NextIcon></NextIcon>   
                   </button>
                   <button>
                        <RepeatIcon></RepeatIcon>
                   </button>
                </div>
                <div class="proc-bar">
                    <span>2:02</span><progress  value="0.90" id="procss-bar" ></progress><span>3:45</span>

                </div>
            </div>
            <div class="other-buttons-bottom">
                <button><i class="fas fa-sliders-h"></i></button>
                <button><i class="fas fa-laptop-house"></i></button>
                <div class="sounds">
                    <button><i class="fas fa-volume-up"></i></button>
                    <input type="range" name="" id="sound-input">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FavBarIcon from '../assets/icons/fav-bar.svg'
import MinimizeIcon from '../assets/icons/minimize.svg'
import MixerIcon from '../assets/icons/mixer.svg'
import BackPlayIcon from '../assets/icons/backplay.svg'
import StopIcon from '../assets/icons/stop.svg'
import PlayBottomIcon from '../assets/icons/play-bottom.svg'
import NextIcon from '../assets/icons/next-button.svg'
import RepeatIcon from '../assets/icons/repeat.svg'
    export default {
        components:{
            FavBarIcon,
            MinimizeIcon,
            MixerIcon,
            BackPlayIcon,
            PlayBottomIcon,
            StopIcon,
            RepeatIcon,
            NextIcon
        },
        data(){
            return{
                isPlay:false,
            }
        },
        
    }
</script>

<style >
#play-bar
{
    width: 100vw;
    height: 12vh;
    background-color:#282828;
    position: fixed;
    bottom: 0;
    z-index: 9999;
    padding-right: 2rem;

}
.play-bar-fix
{
    width: 100%;
    height: 100%;
    display: flex;
}
.tracks-info
{
    display: flex;
    width: 32%;
    
}
.image-icons
{
    display: flex;
    width: 65%;
    align-items: center;
    justify-content: space-evenly;
}
.tracks-info
{
    color: white;
}
.tracks-info h4{
    font-size: 1rem;
    margin-left: 1rem;
}

.tracks-info h5{
    font-size: .8rem;
    margin-left: 1rem;
}
.tracks-info img{
    width: 56px;
    height: 56px;
    
}
.icons-for-info
{
    display: flex;
    justify-content: space-between;
    width: 13%;
    align-items: center;
}

.icons{
    cursor: pointer;
    
}
.buttons-plays
{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    align-items: center;
}

#procss-bar{
    width: 642px;
    height: 12px;

    
}


 .proc-bar
{
    color: white;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.other-buttons-bottom
{
    display: flex;
    align-items: center;
}
button{
    background: transparent;
    border: none;
}
</style>