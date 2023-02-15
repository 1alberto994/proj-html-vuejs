<script>
import { register } from 'swiper/element/bundle';
register();

export default {

  name: 'AppCarousel',
  data(){
   return{
      reviewsUno:[
                    {
                            fullName:'Great place',
                            fullText:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias dolore adipisci explicabo similique, eveniet quibusdam pariatur blanditiis nobis deserunt enim!',
                            fullImage:'src/assets/t1.png',
                            smallName:'Tobias May',
                            smallText:'ul/ux designer',
                            starReview:'★★★★★'
                        }
                    ]
   }
  },

  setup() {
    const spaceBetween = 50;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
    };

    const onSlideChange = (e) => {
    }

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  }
}
</script>


<template>

  <!-- :rewind="true" -->
  <!-- :loop="true" -->
   
  <swiper-container 
    :slides-per-view="3" 
    :space-between="spaceBetween" 
    :centered-slides="true" 
    :navigation="true"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }" 
    @progress="onProgress" 
    @slidechange="onSlideChange">

    <swiper-slide class="slide">
      <div class="container" v-for="reviewUno in reviewsUno">
                                        <div class="row">
                                          
                                            <div class=" contenitore active">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                        
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                        </div>
                                                </div>
                                        
                                       
                                            </div>
                                            
                                        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="slide">
      <div class="container" v-for="reviewUno in reviewsUno">
                                        <div class="row">
                                            <div class="col-2 contenitore active">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                        
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                        </div>
                                                </div>
                                        
                                       
                                            </div>
                                            
                                            
                                        </div>
      </div>
      <!-- <div class="container" v-for="reviewUno in reviewsUno">
                                        <div class="row">
                                            <div class=" contenitore active">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                        
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                        </div>
                                                </div>
                                        
                                       
                                            </div>
                                            <div class="col-6 contenitore">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                            
                                                        </div>
                                                </div>
                                                
                                                
                                        
                                       
                                             </div>
                                        </div>
      </div> -->
    </swiper-slide>

    <swiper-slide class="slide">
      <div class="container" v-for="reviewUno in reviewsUno">
                                        <div class="row">
                                            <div class=" contenitore active">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                        
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                        </div>
                                                </div>
                                        
                                       
                                            </div>
                                            
                                        </div>
      </div>
      <!-- <div class="container" v-for="reviewUno in reviewsUno">
                                        <div class="row">
                                            <div class=" contenitore active">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                        
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                        </div>
                                                </div>
                                        
                                       
                                            </div>
                                            <div class="col-6 contenitore">
                                                <span>{{ reviewUno.starReview }}</span>
                                                <h5>{{ reviewUno.fullName }}</h5>
                                                <p>{{ reviewUno.fullText }}</p>
                                                <div class="d-flex">
                                                        <div>
                                                            <img class="full-image" :src="reviewUno.fullImage" alt="">
                                                        </div>
                                                        <div>
                                                            <h6>{{reviewUno.smallName}}</h6>
                                                            <p>{{reviewUno.smallText}}</p>
                                                            
                                                        </div>
                                                </div>
                                                
                                                
                                        
                                       
                                             </div>
                                        </div>
      </div> -->
    </swiper-slide>

  </swiper-container>

</template>


<style lang="scss" scoped>
.contenitore{
            width: 300px;
            height: 300px;
            margin: 10px;
        
        }
        .full-image{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        span{
            color: #ffcc01;
        }
</style>