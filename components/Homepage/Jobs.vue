<script setup>
const jobs = [
   {
      id: "12",
      title: "Front-End Inter",
      image: "/assets/images/logo_default.webp",
      company: "PT KitaBangun Indonesia",
      location: "Jakarta",
      type_job: "Penuh Waktu",
      time: "1 hari yang lalu",
      experience: "1-2 Tahun",
   },
   {
      id: "123",
      title: "UI Design",
      image: "/assets/images/logo_default.webp",
      company: "PT KitaBangun Indonesia",
      location: "Jakarta",
      type_job: "Penuh Waktu",
      time: "1 hari yang lalu",
      experience: "1-2 Tahun",
   },
   {
      id: "124",
      title: "Marketing",
      image: "/assets/images/logo_default.webp",
      company: "PT KitaBangun Indonesia",
      location: "Jakarta",
      type_job: "Penuh Waktu",
      time: "1 hari yang lalu",
      experience: "1-2 Tahun",
   },
];
</script>
<template>
   <section class="container">
      <h2 class="section-title text-center md:text-left">Jelajahi pekerjaan <span class="text-blue-500">populer</span></h2>
      <div class="flex flex-col md:flex-row justify-between items-center mt-4">
         <p class="desc text-gray-500 max-w-xl text-center md:text-left">Get the most exciting jobs from all around the world and grow your career fast with others.</p>

         <NuxtLink to="/jobs" class="btn btn-primary mt-4 md:mt-0">View all jobs</NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
         <CardJob v-for="job of jobs" :key="job.id" :job="job" />
      </div>
   </section>
</template>
