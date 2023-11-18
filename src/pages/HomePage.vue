<script>
import AppSlider from '../components/AppSlider.vue';

export default {
    components: {
        AppSlider,
    },
    data() {
        return {

        }
    },
}
</script>

<template lang="">

    <!-- 1ST SECTION -->
    <div class="container-fluid margin-top">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-7 px-0 bg-green">
                <div class="content text-center text-md-start p-5">
                    <div class="text-up mt-5">
                        <h4 style="font-weight: 800;">Quememagno</h4>
                        <span href=""><em>Cibo buono senza pensieri</em></span>
                    </div>
                    <div class="text-bottom">
                        <h1 class="mt-5 padding-top" style="font-weight: 800;">FOLLOW <br> YOUR GUT</h1>
                        <p class="py-2">Mangia stasera senza pensare troppo</p>

                        <button class="btn btn-success p-3 py-2" style="color: #0A5247; font-weight: 800;">
                            <a href="/ricette" class="text-white">SCOPRI DI PIU'</a>
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 px-0 bg-dark">
                <div class="content-img">
                    <img src="/img/1.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- 2ND SECTION -->
    <div class="container-fluid bg-gray">
        <div class="row justify-content-center">
            <div class="col-12 col-md-7 px-0">
                <div class="content text-center text-md-start p-5">
                    <div class="text-up mt-5">
                        <h1 class="py-5" style="font-weight: 800;">Mangia ora<br>Mangia bene</h1>
                        <h4 class="py-2" style="font-weight: 800;">La nostra filosofia</h4>
                        <p class="py-2">
                            Siamo schiavi della scelta, ogni giorno dobbiamo compiere scelte.
                            <br>
                            Non abbiamo tempo ed energie per pensare a quello che dobbiamo mangiare.
                            <br>
                            Quememagno è qui per aiutarti a mangiare sano senza pensieri.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 px-0 bg-alert d-flex align-self-center">
                <div class="content-image rounded-4 my-5">
                    <img src="/img/provaci.png" class="border-radius" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- 3RD SECTION -->
    <div class="container-fluid bg-yellow py-5">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 px-0">
                <div class="content text-center text-md-start p-5">
                    <div class="text-up mt-5">
                        <h2 style="font-weight: 800;">Inizia il tuo percorso di dieta
                            <br>
                            con uno dei nostri nutrizionisti
                        </h2>
                    </div>
                    <div class="content-img-nutritionist py-3">
                        <img src="/img/doc.png" class="border-radius" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 px-0 bg-alert end">
                <div class="text-nutritionist text-center text-md-start p-5 mb-5">
                    <p>
                        I nostri professionisti possono supportarti nel tuo percorso di crescita.
                        Il rapporto diretto col paziente, un piano di allenamento efficace e un regime
                        alimentare sano ed equilibrato, sono la chiave del nostro successo.
                    </p>
                    <button class="btn btn-success p-3"><a href="/contacts" class="text-decoration-none">Prenota un appuntamento</a></button>
                </div>
            </div>
        </div>
    </div>

    <!-- 4TH SECTION -->
    <div class="container-fluid bg-gray py-5">
        <h1 class="py-3 text-center" style="font-weight: 800;">Il nostro piano</h1>
        <div class="row justify-content-center my-5">
            <div class="col-12 col-md-6 col-lg-4 px-0">
                <div class="temporary-img d-flex justify-content-center">
                    <img src="/img/a.png" class="border-radius" alt="">
                </div>
                <h3 class="text-center py-5">Nutrizionisti</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-4 px-0">
                <div class="temporary-img d-flex justify-content-center">
                    <img src="/img/b.png" class="border-radius" alt="">
                </div>
                <h3 class="text-center py-5">Piani di allenamento</h3>
            </div>
            <div class="col-12 col-md-6 col-lg-4 px-0">
                <div class="temporary-img d-flex justify-content-center">
                    <img src="/img/c.png" class="border-radius" alt="">
                </div>
                <h3 class="text-center py-5">Piani alimentari</h3>
            </div>
        </div>
    </div>

    <!-- 5TH SECTION -->
    <div class="container-fluid bg-yellow">
        <div class="row justify-content-center">
            <div class="col-12 col-md-7 px-0">
                <div class="content text-center text-md-start p-5">
                    <div class="text-up mt-5">
                        <h1 class="py-5" style="font-weight: 800;">Goditi il momento<br>Senza noie</h1>
                        <h4 class="py-2" style="font-weight: 800;">Ti appartiene</h4>
                        <p class="py-2">
                            Siamo schiavi della scelta, ogni giorno dobbiamo compiere scelte.
                            <br>
                            Non abbiamo tempo ed energie per pensare a quello che dobbiamo mangiare.
                            <br>
                            Quememagno è qui per aiutarti a mangiare sano senza pensieri.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 px-0 d-flex align-self-center">
                <div class="content-image rounded-4 my-5">
                    <img src="/img/couple.png" class="border-radius" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- 6TH SECTION -->
    <div class="container-fluid bg-gray py-5">
        <h1 class="py-3 text-center" style="font-weight:800">Dicono di noi</h1>
        <AppSlider/>
    </div>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

/* TEXT */
p {
    text-align: justify;
}

h1 {
    font-size: 5.5em !important;
}

h2 {
    font-size: 2.5em !important;
}

/* LINK */
a {
    color: inherit !important;
    text-decoration: none !important;
    cursor: pointer;
}

/* MARGIN PADDING */
.margin-top {
    margin-top: 120px;
}

.padding-top {
    padding-top: 125px;
}

/* SIZE */
.height {
    height: 200px;
}

.border-radius {
    border-radius: 20%;
}

/* IMG */
.content-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.content-img img,
.temporary-img img,
.content-img-nutritionist img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.temporary-img img{
    width: 50%;
}
.content-image img {
    width: 80%;
}

.content-img-nutritionist img {
    width: 80%;
}

.end {
    display: flex;
    align-self: flex-end;
}

/* MEDIA QUERIES */
@media screen and (max-width: 576px) {
    .content-img-nutritionist img,
    .temporary-img img {
        width: 100%;
        height: auto;
    }

    .content-image img {
        width: 80%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
}

@media screen and (max-width: 768px) {
    .content-img-nutritionist img,
    .temporary-img img,
    .content-img img {
        width: 100%;
        height: auto;
    }

    .content-image img {
        width: 94%;
        height: 521px;
    }

    h1,
    h2 {
        font-size: 2.5em !important;
    }

    
}

@media screen and (max-width: 992px) {
    .temporary-img img,
    .content-image img {
        width: 75%;
        height: auto;
    }

    h1,
    h2 {
        font-size: 2.5em !important;
    }
}



</style>