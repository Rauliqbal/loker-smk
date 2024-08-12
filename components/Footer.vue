<script setup>
const lowongan = [
   {
      name: "Lokasi pekerjaan",
      url: "home",
   },
   {
      name: "Nama perusahaan",
      url: "#",
   },
   {
      name: "Kategori pekerjaan",
      url: "#",
   },
   {
      name: "Paling banyak dicari",
      url: "#",
   },
];

const information = [
   {
      name: "FAQ",
      url: "frequentlyasnwerquestion",
   },
   { name: "Tips", url: "blog" },
   { name: "Events", url: "events" },
];

const company = [
   { name: "About us", url: "about" },
   { name: "Careers", url: "careers" },
   { name: "Contact us", url: "contact" },
];
</script>

<template>
   <footer>
      <div class="bg-blue-500">
         <div class="container py-20">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div class="mx-auto text-center md:mx-0 md:text-left">
                  <img class="mx-auto md:mx-0" src="~/assets/images/logo_lokersmk-light.svg" alt="LokerSmk - Lowongan Kerja Smk dan sederajat" />
                  <p class="text-base text-white mt-6">Website yang menyediakan lowongan pekerjaan bagi fresh graduate.</p>
               </div>

               <div class="mx-auto text-center md:mx-0 md:text-left">
                  <h4 class="text-lg font-semibold text-white">Temukan Lowongan</h4>
                  <ul class="mt-6">
                     <li class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 mb-2" v-for="list in lowongan" :key="list.id">
                        <a :href="'/' + list.url">{{ list.name }}</a>
                     </li>
                  </ul>
               </div>

               <div class="mx-auto text-center md:mx-0 md:text-left">
                  <h4 class="text-lg font-semibold text-white">Information</h4>
                  <ul class="mt-4">
                     <li class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 mb-2" v-for="info in information" :key="info.id">
                        <a :href="'/' + info.url">{{ info.name }}</a>
                     </li>
                  </ul>
               </div>

               <div class="mx-auto text-center md:mx-0 md:text-left">
                  <h4 class="text-lg font-semibold text-white">Company</h4>
                  <ul class="mt-4">
                     <li class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 mb-2" v-for="comp in company" :key="comp.id">
                        <a :href="'/' + comp.url">{{ comp.name }}</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>

      <div class="container">
         <div class="flex justify-between items-center py-8">
            <p class="text-blue-500 text-center text-lg font-semibold tracking-wider">©LokerSmk Group</p>
            <div class="flex items-center gap-4">
               <div class="bg-blue-100 hover:bg-blue-500 group p-3 rounded-full transition-all duration-300 ease-out">
                  <span class="fill-blue-500 group-hover:fill-white"
                     ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: ">
                        <path
                           d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"
                        ></path>
                        <circle cx="11.994" cy="11.979" r="3.003"></circle></svg
                  ></span>
               </div>

               <div class="bg-blue-100 hover:bg-blue-500 group p-3 rounded-full transition-all duration-300 ease-out">
                  <span class="fill-blue-500 group-hover:fill-white"
                     ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: ">
                        <circle cx="4.983" cy="5.009" r="2.188"></circle>
                        <path
                           d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                        ></path></svg
                  ></span>
               </div>

               <div class="bg-blue-100 hover:bg-blue-500 group p-3 rounded-full transition-all duration-300 ease-out">
                  <span class="fill-blue-500 group-hover:fill-white"
                     ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="transform: ; msfilter: ">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg
                  ></span>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>
