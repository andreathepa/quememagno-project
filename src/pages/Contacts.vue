<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>

<template lang="">
    <div class="container mb-5 margin-top">
        <div class="row justify-content-center">
            <ContactForm/>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.margin-top{
    margin-top: 120px;
}
</style>