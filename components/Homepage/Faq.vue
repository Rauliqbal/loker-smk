<script></script>
<template>
   <section class="container">
      <h2 class="section-title text-center">Pertanyaan yang <span class="text-blue-500">sering diajukan</span></h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
         <div class="order-last md:order-first">
            <div class="flex flex-col gap-4">
               <!-- Dropdown 1 -->
               <div class="shadow bg-white rounded-xl border relative">
                  <input class="peer w-full h-full absolute z-10 cursor-pointer opacity-0" type="checkbox" id="check-1" />
                  <header class="tab-label border-b flex justify-between items-center px-8 py-4 cursor-pointer select-none" for="check-1">
                     <span class="text-lg text-black"> lorem ipsum dolor sit atmet ? </span>
                     <span class="icon w-8 h-8 flex items-center justify-center fill-gray-700 transition duration-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: "><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                     </span>
                  </header>
                  <div class="max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out">
                     <div class="px-8 py-4">
                        <p class="text-base text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae officia laborum eum, necessitatibus</p>
                     </div>
                  </div>
               </div>

               <!-- Dropdown 2 -->
               <div class="shadow bg-white rounded-xl border relative">
                  <input class="peer w-full h-full absolute z-10 cursor-pointer opacity-0" type="checkbox" id="check-2" />
                  <header class="tab-label border-b flex justify-between items-center px-8 py-4 cursor-pointer select-none" for="check-2">
                     <span class="text-lg text-black"> lorem ipsum dolor sit atmet ? </span>
                     <span class="icon w-8 h-8 flex items-center justify-center fill-gray-700 transition duration-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: "><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                     </span>
                  </header>
                  <div class="max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out">
                     <div class="px-8 py-4">
                        <p class="text-base text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae officia laborum eum, necessitatibus</p>
                     </div>
                  </div>
               </div>

               <!-- Dropdown 3 -->
               <div class="shadow bg-white rounded-xl border relative">
                  <input class="peer w-full h-full absolute z-10 cursor-pointer opacity-0" type="checkbox" id="check-3" />
                  <header class="tab-label border-b flex justify-between items-center px-8 py-4 cursor-pointer select-none" for="check-3">
                     <span class="text-lg text-black"> lorem ipsum dolor sit atmet ? </span>
                     <span class="icon w-8 h-8 flex items-center justify-center fill-gray-700 transition duration-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: "><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                     </span>
                  </header>
                  <div class="max-h-0 overflow-hidden peer-checked:max-h-screen transition-all duration-500 ease-in-out">
                     <div class="px-8 py-4">
                        <p class="text-base text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae officia laborum eum, necessitatibus</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <img class="max-w-[500px] w-full mx-auto order-first md:order-last" src="~/assets/images/cuate.webp" alt="" />
      </div>
   </section>
</template>
