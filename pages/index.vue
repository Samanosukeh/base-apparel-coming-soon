<template>
  <div class="">
    <div class="flex flex-row min-h-screen">
      <div class="fundo-svg"></div><!-- Background svg -->
      <div class="gradiente-2 pt-16 w-3/5">
        <div class="px-28">
          <div class="uppercase tracking-widest text-6xl text-left text-neutral-dark-grayish-red">
            <header><img src="/image/logo.svg" alt=""></header>
            <p class="text-primary-desaturated-red mt-20 font-light">We're</p>
            coming<br> soon
          </div>
          <p class="text-primary-desaturated-red mt-8 text-left">
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.

            Email Address
          </p>
        </div>
      </div>
      <div class="w-2/5"> <!--w-3/5 w-2/5  bg-neutral-dark-grayish-red  -->
        <img class="h-screen object-cover w-full" src="/image/hero-desktop.jpg" alt="">
      </div>
    </div>
    
    <!-- <footer>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Samanosuke</a>.
      </p>
    </footer> -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.gradiente-1 {
   background: linear-gradient(135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%));
}

.gradiente-2 {
   background: linear-gradient(135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%));
}

.fundo-svg {
  background: url('/image/bg-pattern-desktop.svg');
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -1;
  overflow-x: hidden;
}

/* Sample `apply` at-rules with Tailwind CSS
*/
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>