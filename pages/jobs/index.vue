<script setup></script>
<template>
   <main class="py-28 container min-h-screen">
      <JobpageBreadcrumb class="mb-4" />
      <div class="bg-banner bg-cover bg-center rounded-2xl overflow-hidden">
         <div class="flex items-center justify-center px-3 bg-[#2d55aaa6] py-[70px] md:py-32 lg:py-40">
            <form>
               <input class="py-2 px-6 rounded-l-full max-w-lg w-full outline-none border-none" type="text" placeholder="Cari pekerjaan" />
            </form>
            <button class="bg-blue-500 py-1 px-6 rounded-r-full hover:bg-blue-800 active:shadow-xl transition-all"><i class="bx bx-search text-2xl text-white"></i></button>
         </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"><CardJob /><CardJob /><CardJob /></div>
   </main>
</template>
