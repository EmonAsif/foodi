<template>
  

     <a href="#" class=" h-26  flex  items-center bg-white border shadow-2xl rounded-3xl  hover:bg-gray-100 dark:border-white dark:bg-white">
    <img class="object-cover w-16 m-1   rounded-3xl" src="/image/image_noodles.png " alt="">
    <div class="flex flex-col justify-between p-1 leading-normal">
        <h6 class="  text-xs md:text-sm tracking-tight text-gray-900 dark:text-black">Vegetarian</h6>
        <div class="flex items-center">
               
            <svg v-for="x in 5" :class="x<=rating?'text-yellow-500':' text-gray-400'" class="w-2 h-2  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>

            </div>
            <div class="mt-1">
                <span class="text-md font-bold text-gray-900 dark:text-black">$23.00</span>
            </div>
    </div>
</a>
</template>

<script setup lang="js">

 const rating=4;
</script>
