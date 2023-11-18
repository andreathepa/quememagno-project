<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            activeReview: 0, // Devi inizializzare activeReview
        };
    },
    methods: {
        nextSlide() {
            this.activeReview++;

            if (this.activeReview > this.store.recensions.length - 1) {
                this.activeReview = 0;
            }
        },
        prevSlide() {
            this.activeReview--;

            if (this.activeReview < 0) {
                this.activeReview = this.store.recensions.length - 1;
            }
        },
        getStars() {
            let star = this.store.recensions[this.activeReview].stars;
            let vote = Math.round(star);
            console.log(vote);
            return vote;
        },

        getNoStars() {
            let noStars = 5 - this.getStars();
            return noStars;
        },
    },
    mounted() {
        this.stars = this.getStars();
    },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="slider-container position-relative" tabindex="0">
          <div class="slider-wrapper">
            <div class="item">
              <div class="text card bg-green p-3">
                <div class="stars py-2">
                    <span v-for="index in getStars()" :key="index" class="star text-color-green">&#9733;</span>
                    <span v-for="index in getNoStars()" :key="index" class="star text-white">&#9734;</span>
                </div>
                <p class="text-color-green py-2">{{ store.recensions[activeReview].comment }}</p>
                <div class="d-flex align-items-center">
                  <img :src="`${store.recensions[activeReview].photo}`" alt="User Photo" class="user-photo" />
                  <h3 class="text-color-green px-3">{{ store.recensions[activeReview].name }}</h3>
                </div>
                
              </div>
            </div>
          </div>

          <!-- Button prev left -->
          <a class="prev p-3" @click="prevSlide"><i class="fa-solid fa-circle-chevron-left pe-auto" style="font-size: 50px; color: rgba(172, 255, 47, 0.647); cursor: pointer"></i></a>

          <!-- Button next right -->
          <a class="next p-3" @click="nextSlide"><i class="fa-solid fa-circle-chevron-right cursor-pointer" style="font-size: 50px; color: rgba(172, 255, 47, 0.647); cursor: pointer;"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss">

.user-photo{
  width: 60px;
  border-radius: 50%;
}

.star {
  font-size: 2.5em; // Imposta la dimensione desiderata per le stelle
}

.stars {
  margin-top: 10px; // Aggiungi uno spazio tra il nome e le stelle
}
  .slider-container {
    position: relative;
  
    .prev {
      position: absolute;
      left: -70px;
      top: 50%;
      transform: translateY(-50%);
    }
  
    .next {
        position: absolute;
        right: -70px;
        top: 50%;
        transform: translateY(-50%);
    }
  }

  @media screen and (max-width: 768px) {
        .slider-container {
        position: relative;
    
        .prev {
        position: absolute;
        left: -10px;
        top: 100%;
        transform: translateY(-50%);
        }
    
        .next {
        position: absolute;
        right: -10px;
        top: 100%;
        transform: translateY(-50%);
        }
    }
  }
  </style>
  