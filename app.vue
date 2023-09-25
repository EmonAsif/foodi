

<template>
  <div class="px-24">

    <nav class=" pt-10">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="https://flowbite.com/" class="flex items-center">
          <img src="/image/logo.png" alt="Foodi logo" />


        </a>
        <div class="flex md:order-2">
          <button type="button"
            class="text-white bg-lime-400 hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-lime-400 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-lame-600 dark:hover:bg-lime-400">Contact</button>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-lime-400 rounded md:bg-transparent md:text-lime-400 md:p-0 md:dark:text-lime-400"
                aria-current="page">Home</a>
            </li>
            <button class="hover:text-lime-400">
              <li>
                <a href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                  aria-current="page">Menu</a>
              </li>
            </button>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                aria-current="page">Services</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black"
                aria-current="page">Offers</a>

            </li>
            <li>
              <button class="hover:text-lime-400">
                <svg class="w-4 h-4  flex items-center justify-center  text-center" xmlns="http://www.w3.org/2000/svg"
                  fill="none" aria-hidden="true" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>

            </li>
            <li>
              <button class="hover:text-lime-400">
                <svg class=" w-4 h-4 text-black dark:text-black flex items-center justify-center text-center"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path fill="currentColor"
                    d="M8 1V0v1Zm4 0V0v1Zm2 4v1h1V5h-1ZM6 5H5v1h1V5Zm2-3h4V0H8v2Zm4 0a1 1 0 0 1 .707.293L14.121.879A3 3 0 0 0 12 0v2Zm.707.293A1 1 0 0 1 13 3h2a3 3 0 0 0-.879-2.121l-1.414 1.414ZM13 3v2h2V3h-2Zm1 1H6v2h8V4ZM7 5V3H5v2h2Zm0-2a1 1 0 0 1 .293-.707L5.879.879A3 3 0 0 0 5 3h2Zm.293-.707A1 1 0 0 1 8 2V0a3 3 0 0 0-2.121.879l1.414 1.414ZM2 6h16V4H2v2Zm16 0h2a2 2 0 0 0-2-2v2Zm0 0v12h2V6h-2Zm0 12v2a2 2 0 0 0 2-2h-2Zm0 0H2v2h16v-2ZM2 18H0a2 2 0 0 0 2 2v-2Zm0 0V6H0v12h2ZM2 6V4a2 2 0 0 0-2 2h2Zm16.293 3.293C16.557 11.029 13.366 12 10 12c-3.366 0-6.557-.97-8.293-2.707L.293 10.707C2.557 12.971 6.366 14 10 14c3.634 0 7.444-1.03 9.707-3.293l-1.414-1.414ZM10 9v2a2 2 0 0 0 2-2h-2Zm0 0H8a2 2 0 0 0 2 2V9Zm0 0V7a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Z" />
                </svg>
              </button>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    <NuxtPage />
    <div class="  pt-10 grid lg:grid-cols-12 sm: grid-cols-1 ">
      <div class=" col-span-5">
        <img src="/image/logo.png" class="w-32 mt-8" alt="logo">
        <p class=" mt-4 lg:pr-8">
          Savor the artistry where every dish is a culinary masterpiece
        </p>
      </div>
     <div class="grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 col-span-7">

      <div class="w-full   sm:pl-0 lg:pl-10  ">
        <h1 class=" font-bold sm: mt-4">Useful Links</h1>
        <span class=" text-sm text-gray-600">About us</span>
        <span class=" block text-sm text-gray-600">Events</span>
        <span class=" block text-sm text-gray-600">Blogs</span>
        <span class=" text-sm text-gray-600 mt-2">FAQ</span>
      </div>
      <div class="w-full   sm:pl-0 lg:pl-10 ">
        <h1 class=" font-bold sm: mt-4">Main Menu</h1>
        <span class=" text-sm text-gray-600">Home</span>
        <span class=" block text-sm text-gray-600">Offers</span>
        <span class=" block text-sm text-gray-600">Menu</span>
        <span class=" text-sm text-gray-600">Reservation</span>
      </div>
      <div class="w-full   sm:pl-0 lg:pl-10  ">
        <h1 class=" font-bold sm: mt-4">Contact Us</h1>
        <span class=" text-sm text-gray-600">asif@gmail.com</span>
        <span class=" block text-sm text-gray-600">+64 967 247 957</span>
        <span class=" block text-sm text-gray-600">Social media</span>
      </div>
     </div>
    </div>
    <div>
      <div class="grid     grid-cols-2   p-8  ">

        <div class="flex sm:col-span-1 col-span-2  items-center justify-center  mt-4">
          <div class="flex      space-x-5  ">
            <div class="  h-6 w-6 rounded-full flex items-center justify-center bg-green-400 hover hover:bg-lime-600">
              <button class="">
                <a href="#" class="text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 8 19">
                    <path fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </button>
            </div>
            <div class=" h-6 w-6 rounded-full flex items-center justify-center bg-lime-100 hover hover:bg-lime-600">
              <button>
                <a href="#" class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-instagram" viewBox="0 0 16 16">
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
              </button>
            </div>
            <div class=" h-6 w-6 rounded-full flex items-center justify-center bg-lime-100 hover hover:bg-lime-600">
              <button>
                <a href="#" class="text-gray-500">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                    viewBox="0 0 20 17">
                    <path fill-rule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clip-rule="evenodd" />
                  </svg>

                </a>
              </button>
            </div>
            <div class=" h-6 w-6 rounded-full flex items-center justify-center bg-lime-100 hover hover:bg-lime-600">
              <button>
                <a href="#" class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube"
                    viewBox="0 0 16 16">
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>

                </a>
              </button>
            </div>


          </div>
        </div>
        <div class="  text-sm sm:col-span-1 col-span-2 mt-4  text-gray-600 text-center">Copyright © 2023 <a
            href="https://flowbite.com/">Descode</a> | All rights reserved.
        </div>


      </div>
    </div>
  </div>
</template>