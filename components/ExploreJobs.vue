<template>
    <section class="max-w-container">
        <h2 class="section-title">Explore popular jobs</h2>
        <div class="flex justify-between items-center mt-8">
            <p class="desc text-gray-500 max-w-xl">Get the most exciting jobs from all around the world and grow your career fast with others.</p>
            
            <NuxtLink to="/jobs" class="btn-primary">View all jobs</NuxtLink>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <JobsCard/>
            <JobsCard/>
            <JobsCard/>
        </div>
    </section>
</template>