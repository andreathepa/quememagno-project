<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Ricette',
                    routeName: 'ricette',
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts',
                }
            ]
        }
    },
}
</script>

<template lang="">
    <header class="border-bottom bg-yellow fixed-top">
        <nav class="navbar navbar-expand-lg h-100">
            <div class="container-fluid h-100">
                <a class="navbar-brand" href="#">
                    <img src="data:image/png;base64,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"><span class="fw-bold fs-6">Quememagno</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
                        <li class="nav-item px-3 text-center" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" v-text="item.label" class="nav-link fw-bold fs-6 text-color-green"></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;


header {
  font-family: 'LibreBaskerville-Regular';
  color: #0A5247 !important;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.text-color-green{
    color: #0A5247 !important;
}
</style>