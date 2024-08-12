<script setup></script>
<template>
   <section class="container py-32 md:py-40 overflow-hidden">
      <img class="absolute left-36 top-24 w-48 md:w-auto" src="~/assets/images/shape1.svg" alt="" />
      <img class="absolute left-0 top-28 md:top-36 w-8 md:w--20 lg:w-auto" src="~/assets/images/element1.svg" alt="" />
      <img class="absolute left-80 top-[30rem] hidden md:block" src="~/assets/images/shape1.svg" alt="" />

      <div class="relative grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8">
         <div class="col-span-1 order-last md:order-first flex flex-col justify-center items-center md:justify-start md:items-start">
            <h1 class="text-center md:text-left text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-wider leading-tight lg:leading-normal">Find and Apply Your Dream Job with <span class="text-blue-500">LokerSmk</span></h1>
            <p class="desc md:text-lg text-gray-500 text-center md:text-left leading-relaxed mt-4 mx-auto md:mx-0 max-w-[480px]">Get the most excitting jobs from all around the world and grow your career fast with others.</p>
            <button class="btn btn-primary mt-8">Get started</button>
         </div>
         <div class="col-span-1 order-first md:order-last">
            <img class="max-w-[400px] md:max-w-[480px] w-full" src="~/assets/images/banner.png" alt="Hero image loker smk" />
         </div>
      </div>
      <img class="absolute w-14 md:w-auto left-0 top-[43rem] md:top-[38rem]" src="~/assets/images/element2.svg" alt="" />
      <img class="absolute top-80 right-4" src="~/assets/images/shape.svg" alt="" />
   </section>
</template>
