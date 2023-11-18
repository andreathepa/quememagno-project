<script>
export default {
  data() {
    return {

      name: '',
      surname:'',
      email: '',
      content: '',
      loading: false,

      errors: {
        name: [],
        surname: [],
        email: [],
        content: [],
      },
      successMessage: '',
      formSubmitted: false,
    };
  },
  methods: {
  sendForm() {
    // Resetta i valori del modulo
    this.name = '';
    this.surname = '';
    this.email = '';
    this.content = '';

    // Imposta formSubmitted a true
    this.formSubmitted = true;
  },
  closeModal() {
      // Chiudi la modale e reimposta il form
      this.formSubmitted = false;
      this.name = '';
      this.surname = '';
      this.email = '';
      this.content = '';
    },
},
};
</script>

<template lang="">
    <!-- CONTACT FORM CARD -->
    <div class="col-12 col-md-10 col-lg-6 my-5 bg-form rounded">
        <div class="row p-5">
            <!-- CONTACT FORM TITLE -->
            <div class="col-12">
                <h2 class="text-center">Contattaci</h2>
            </div>
            <!-- CONTACT FORM LAYOUT -->
            <div class="col-12">
                <form @submit.prevent="sendForm()" class="row">
                    <!-- NAME FORM GROUP -->
                    <div class="col-12 col-md-6 my-3">
                        <label class="control-label py-2">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Inserisci nome" v-model="name" class="form-control" :class="{ 'is-invalid': formSubmitted && errors.name.length > 0 }" required>
                        <span v-for="(error, index) in errors.name" :key="index" class="text-danger">{{ error }}</span>
                    </div>
                    <!-- SURNAME FORM GROUP -->
                    <div class="col-12 col-md-6 my-3">
                        <label class="control-label py-2">Cognome</label>
                        <input type="text" name="surname" id="surname" placeholder="Inserisci cognome" v-model="surname" class="form-control" :class="{ 'is-invalid': formSubmitted && errors.name.length > 0 }" required>
                        <span v-for="(error, index) in errors.name" :key="index" class="text-danger">{{ error }}</span>
                    </div>
                    <!-- EMAIL FORM GROUP -->
                    <div class="col-12 my-3">
                        <label class="control-label py-2">Email</label>
                        <input type="email" name="email" id="email" placeholder="Inserisci email" v-model="email" class="form-control" :class="{ 'is-invalid': formSubmitted && errors.name.length > 0 }" required>
                        <span v-for="(error, index) in errors.email" :key="index" class="text-danger">{{ error }}</span>
                    </div>
                    <!-- CONTENT FORM GROUP -->
                    <div class="col-12 my-3">
                        <label class="control-label py-2">Contenuto</label>
                        <textarea name="content" id="content" placeholder="Inserisci il messaggio" v-model="content" class="form-control" :class="{ 'is-invalid': formSubmitted && errors.name.length > 0 }" cols="30" rows="10" required></textarea>
                        <span v-for="(error, index) in errors.content" :key="index" class="text-danger">{{ error }}</span>
                    </div>
                    <!-- FORM SUBMIT -->
                    <div class="col-12 text-center my-3">
                        <!-- SUBMIT BUTTON -->
                        <button type="submit" class="btn bg-success text-white" :disabled="loading">{{ loading ? 'Invio in corso' : 'Invia' }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- MODAL GROUP -->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">
                <div v-if="formSubmitted" class="modal-overlay">
                    <div class="modal-content p-3">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-8 col-lg-6 bg-modal p-3 rounded pt-5">
                                <p class="text-success text-center fw-bold" style="font-size: 25px">I dati sono stati inviati correttamente<br>
                                    Ti ricontattermo al più presto</p>
                                    <i class="fa-solid fa-circle-check fa-2xl"></i>
                                <div class="content d-flex justify-content-center p-3">
                                    <button @click="closeModal" class="btn bg-yellow mx-3">Chiudi</button>
                                    <button @click="goToHome" class="btn bg-green"><a href="/">Torna alla Home</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/generals.scss' as *;

.bg-form{
    background-color:#479a0471
}

.bg-modal{
    background-color: #ffffffe5;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  padding: 20px;
  text-align: center;
}

.modal-content button {
  margin-top: 10px;
}
</style>