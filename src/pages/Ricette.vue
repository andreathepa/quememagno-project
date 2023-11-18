<script>
import AppCard from '../components/AppCard.vue';
import { store } from '../store.js';


export default {
    components:{
        AppCard
    },
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">

    <div class="container-fluid margin">
        <h2 class="text-center mb-5">I nostri suggerimenti</h2>
        <div class="container">
            <div class="row justify-content-center">
                <AppCard class="col-12 col-md-5 col-lg-3 m-2" v-for="(food, index) in store.foods" :key="index" :image="food.thumb" :title="food.title" :type="food.descrizione" :preparation="food.preparazione"/>
    
            </div>
    </div>
    </div>

</template>
<style lang="scss" scoped>

.container-fluid{
    background: rgb(255,198,67);
    background: linear-gradient(357deg, rgba(255,198,67,1) 0%, rgba(191,210,0,1) 64%);}

    .button_load{
        padding: 15px;
        background-color: rgb(59, 59, 228);
        width: 300px;
        text-align: center;
        margin: 0 auto;
        cursor: pointer;

        a{
            color: white;
        }
    }

    .button_load:hover{
        background-color: rgb(0, 140, 255);

        a{
            color: black;
        }
    }

    
    .active{
        background-color: red;
    }

    .margin{
        padding-top:200px;
        padding-bottom: 300px;
    }
</style>