<template>
  <div class="">
    <div class="flex flex-row min-h-screen">
      <div class="fundo-svg"></div><!-- Background svg -->
      <div class="xs:pt-6 sm:pt-12 md:pt-16 lg:pt-16 xs:w-full mb-12 lg:w-3/5">
        <div class="">
          <div class="uppercase tracking-widest xs:text-3xl sm:text-4xl md:text-5xl lg:text6xl text-6xl xs:text-center text-left text-neutral-dark-grayish-red">
            <header class="xs:px-8 sm:px-12 md:px-12 lg:px-28"><img src="/image/logo.svg" alt="Logo"></header>
            <img src="/image/hero-mobile.jpg" alt="Cover" class="w-full object-cover mt-6 xs:visible sm:hidden md:hidden lg:hidden xl:hidden">
            <p class="text-primary-desaturated-red mt-20 font-light">We're</p>
             coming<br>soon
          </div>
          <p class="text-primary-desaturated-red mt-8 text-left xs:px-8 sm:px-12 md:px-12 lg:px-28">
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.

            <form role="form" method="POST" >
              <div class="flex flex-row xs:px-8 sm:px-12 md:px-12 lg:px-28 align-center justify-center items-center mt-8 mx-auto">
                <input id="email" v-model="email" type="email" name="email" class="shadow -mr-10 appearance-none border border-primary-desaturated-red placeholder-primary-desaturated-red rounded-3xl py-2 px-8" placeholder="Email Address" required>
                <button v-on:click="checkForm" type="submit" class="text-white bg-gradient-to-br from-gradient-left to-gradient-right px-5 py-3 rounded-3xl -xl-24 z-10">
                  <img src="/image/icon-arrow.svg" alt="Ir">
                </button>
              </div>
            </form>
            <p v-if="error" class="flex flex-row align-center justify-center mt-2 text-primary-soft-red"> Invalid e-mail<img class="pl-2" src="/image/icon-error.svg" alt="error"></p>
          </p>
        </div>
      </div>
      <div class="xs:w-0 sm:w-2/5 lg:w-2/5 visible xs:invisible sm:visible md:visible lg:visible">
        <img class="h-screen object-cover w-full" src="/image/hero-desktop.jpg" alt="">
      </div>
    </div>
    
    <footer class="teste">
      <p class="attribution">
        Challenge by <a class="text-primary-soft-red" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a class="text-primary-soft-red hover:bg-gradient-left" href="https://www.samanosuke.com.br/" target="_blank">Samanosuke</a>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data: {
    errors: null,
    email: null,
  },
  computed: {
    error() {
      return this.errors
    }
  },
  methods:{
    checkForm (e) {
      console.log("entrou");

      if (this.email) {
        var x = this.validateEmail();
        
        if (x) {
          this.errors = 'Message sended!';
          this.email = '';
          document.getElementById('email').value = '';
          alert("Message sended!");
          return true;
        }
      }
      else {
        //this.error = true;
        this.errors = "E-mail is required";
      }
    },

    validateEmail() {
      let reg = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$', 'i')
      return reg.test(this.email) && !!this.email;
    },

  }
}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.fundo-svg {
  background: url('/image/bg-pattern-desktop.svg');
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
  overflow-x: hidden;
}


.teste {
  position: fixed;
  width: 500px;
  height: 20px;
  bottom: 0;
  left: 50%;
  margin-left: -250px; /* Negative half of width. */
}
</style>