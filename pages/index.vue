<template>
  <div class="">
    <div class="flex flex-row min-h-screen">
      <div class="fundo-svg"></div><!-- Background svg -->
      <div class="gradiente-2 xs:pt-6 sm:pt-12 md:pt-16 lg:pt-16 xs:w-full lg:w-3/5">
        <div class="">
          <div class="uppercase tracking-widest xs:text-3xl sm:text-4xl md:text-5xl lg:text6xl text-6xl xs:text-center text-left text-neutral-dark-grayish-red">
            <header class="xs:px-8 sm:px-12 md:px-12 lg:px-28"><img src="/image/logo.svg" alt="Logo"></header>
            <img src="/image/hero-mobile.jpg" alt="Cover" class="w-full object-cover mt-6 xs:visible sm:hidden md:hidden lg:hidden xl:hidden">
            <p class="text-primary-desaturated-red mt-20 font-light">We're</p>
            coming<br> soon
          </div>
          <p class="text-primary-desaturated-red mt-8 text-left xs:px-8 sm:px-12 md:px-12 lg:px-28">
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.

            <div class="flex flex-row xs:px-8 sm:px-12 md:px-12 lg:px-28 align-center justify-center items-center  mx-auto">
              <input class="shadow -mr-10 appearance-none border border-primary-desaturated-red placeholder-primary-desaturated-red rounded-3xl py-2 px-8" placeholder="Email Address">
              <button class="text-white bg-gradient-to-r from-primary-desaturated-red to-primary-soft-red px-6 py-2 rounded-3xl -xl-24 z-10">></button>
            </div>
            
          </p>
          
        </div>
      </div>
      <div class="xs:w-0 sm:w-2/5 lg:w-2/5 visible xs:invisible sm:visible md:visible lg:visible">
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