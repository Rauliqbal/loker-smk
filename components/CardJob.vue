<script setup></script>
<template>
   <NuxtLink :to="'/jobs/'" class="bg-white p-4 border-2 hover:shadow-lg active:scale-95 active:shadow-sm rounded-xl transition-all">
      <div class="flex flex-row md:flex-col gap-4">
         <div class="w-16 h-16 object-cover rounded-lg overflow-hidden">
            <img src="~/assets/images/logo_default.webp" alt="Logo Default Loker" />
         </div>
         <div>
            <h1 class="text-xl 2xl:text-2xl text-blue-500 font-semibold mb-1">Web Designer</h1>
            <h2 class="text-sm text-gray-500 mb-4 font-medium">HiStudio Comp</h2>
            <div class="flex items-center gap-2">
               <img class="w-5" src="~/assets/images/icons/map.svg" alt="" />
               <span class="text-sm font-medium text-gray-700">Bekasi</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
               <img class="w-5" src="~/assets/images/icons/briefcase.svg" alt="" />
               <span class="text-sm font-medium text-gray-700">1 Tahun</span>
            </div>
            <div class="flex items-center gap-2 mt-2">
               <img class="w-5" src="~/assets/images/icons/author.svg" />
               <span class="text-sm font-medium text-gray-700">Fulltime</span>
            </div>
         </div>
      </div>
      <hr class="bg-gray-700 mt-5" />

      <div class="mt-1">
         <span class="text-[12px] font-medium text-gray-500">2 Jam</span>
      </div>
   </NuxtLink>
</template>
