<script setup></script>

<template>
  <nav class="fixed inset-x-0 z-20 py-4 md:py-6 bg-white">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="relative">
          <NuxtLink to="/">
            <img class="h-10" src="~/assets/images/logo_lokersmk.svg" alt="" />
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            class="peer hidden"
            name="hamburger"
            id="hamburger"
          />
          <label
            for="hamburger"
            class="peer-checked:hamburger z-30 p-4 block cursor-pointer md:hidden"
          >
            <span
              class="transition duration-200 inline-block w-7 h-1 bg-black rounded-xl after:rounded-xl before:rounded-xl"
            ></span>
          </label>
          <div
            class="absolute inset-0 h-screen bg-gray-900/30 backdrop-blur-sm opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
          ></div>
          <div
            class="peer-checked:translate-x-0 w-72 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out"
          >
            <div class="flex flex-col md:items-center md:flex-row h-full">
              <ul
                class="bg-white flex px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-12 md:pt-0"
              >
                <li>
                  <NuxtLink
                    class="capitalize font-josefin tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800"
                    to="/"
                    >Home</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="capitalize font-josefin tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800"
                    to="/jobs"
                    >Explore</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="capitalize font-josefin tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800"
                    to="#"
                    >Tips</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    class="capitalize font-josefin tracking-wide hover:text-blue-500 transition ease-out duration-200 text-gray-800"
                    to="#"
                    >About us</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
  background: #000;
  transition-delay: 0.2s, 0s;
  transition-duration: 0.2s;
  transition-property: margin, transform;
  content: "";
  position: absolute;
  width: 28px;
  height: 4px;
}

#hamburger ~ label span::after {
  margin-top: 10px;
}

#hamburger ~ label span::before {
  margin-top: -10px;
}

#hamburger:checked ~ label span {
  background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
  transition-delay: 0s, 0.2s;
  margin-top: 0;
}

#hamburger:checked ~ label span:before {
  transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
  transform: rotate(-45deg);
}
</style>
