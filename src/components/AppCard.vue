<script>
export default {
    props:{
        image: String,
        title: String,
        type: String,
        preparation: String,
    }
}
</script>
<template lang="">


    <div class="card bg-card text-start">
        <img :src="image" class="p-3" alt="">
        <div class="card-body p-3">
            <h4 class="py-1">{{ title }}</h4>
            <p class="py-1">{{ type }}</p>
            <p>{{ preparation }}</p>

        </div>
    </div>
    
</template>
<style lang="scss" scoped>

.bg-card{
    background-color:#ffffff71
}

    img{
        
        width: 100%;
        height: auto;
        object-fit: cover;

    }

    .card:hover{
        background-color: #FFC643;
        box-shadow: 1px 1px 50px#ffffff38;
        z-index: 1001;
        color: #0A5247;
    }

</style>