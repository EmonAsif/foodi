<template>
   <section class="grid md:grid-cols-12  pt-10 ">
      <div class="text-black items-center justify-between mx-auto  col-span-6">
         <p class="text-transparent bg-clip-text bg-gradient-to-r from-black to-green-500  text-6xl font-bold">

            Dive into Delights Of Delectable Food
         </p>

         <p class="text-3xl text-gray-600 mt-16">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship
         </p>
         <button type="button"
            class="text-white bg-lime-500 dark:bg-lime-500 font-medium text-sm px-5 py-2.5 text-center mt-14 rounded-3xl hover:text-green-500">Order
            Now</button>
         <button
            class="text-black bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-300 mr-2 mb-2 translate-x-6">
            Watch video
            <svg class="w-5 h-5 rounded-full bg-white text-black translate-x-2" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
               <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
            </svg>
         </button>

      </div>

      <div class="  col-span-6">

         <div class="w-full flex  justify-center text-center  ">
            <img class=" bg-primary mb-4 w-[500px]  " src="/image/woman.png" alt="image description">
         </div>

         <div class="flex justify-center  -translate-y-16">


            <div class="">
               <RatingItem />
            </div>
            <div class=" -translate-y-6 translate-x-6">
               <RatingItem />
            </div>
         </div>
      </div>


   </section>

   <div>
      <h1>
         <a href="/" class="flex justify-center text-red-400">Customer Favorites</a>
      </h1>
      <h2>
         <a href="#" class="flex justify-center font-bold text-3xl mt-2">Popular Catagories</a>
      </h2>
   </div>
   <main class=" grid grid-cols-4  gap-y-8 sm:gap-x-32 md:gap-x-48 lg:gap-x-48 mt-4"><!--image wrapper-->
      <div v-for="x in 4" class=" xs: col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1">
         <MenuCard />
      </div>


   </main>
   <main class="">
      <div>
         <a href="/" class="text-red-500 uppercase text-xs">Special Dishes</a>
      </div>
      <div class="mt-4">
         <span class="block font-bold text-3xl">Standout Dishes</span>
         <span class=" font-bold text-3xl">From Our Menu</span>
         <span class="flex items-center justify-end">

            <button class="mr-8">
               <div class="h-10 w-10 bg-slate-300 rounded-full flex items-center hover:bg-fuchsia-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-10 h-6 justify-center flex">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
               </div>
            </button>

            <button class="bg-lime-400 hover:bg-yellow-300 rounded-full">
               <div class="h-10 w-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-10 h-6 flex justify-center text-white">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
               </div>
            </button>

         </span>



      </div>
      <main class=" grid md:grid-cols-2 lg:grid-cols-3  xs:grid-cols-1">
         <DishCard />
         <DishCard />
         <DishCard />
      </main>

      <ChefCard />

   </main>

   <main class=" mt-16 grid md:grid-cols-1 lg:grid-cols-2">
      <div class="pr-10 col-span-1">
         <span>
            <a href="/" class=" uppercase font-bold text-red-400 text-xs">our story and Services</a>
         </span>
         <span class=" font-bold text-black text-4xl">
            <h1 class="mt-6">Our Culinary Journey</h1>
            <h2>And Services</h2>
         </span>
         <span class=" text-md">
            <p class=" mt-6">
               Rooted in passion, we curate unforgettable dining
               experiences and offer exceptional services,
               blending culinary artistry with warm hospitality.
            </p>
         </span>
         <div
            class=" bg-green-500 h-12 w-32 rounded-3xl flex text-center justify-center text-white hover:bg-lime-400 mt-4">
            <button>
               <a href="#">Explore</a>
            </button>
         </div>
      </div>

         <div class="mt-10 lg:mt-0 col-span-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4  gap-y-9">
       <GiftCard/> <GiftCard/> <GiftCard/> <GiftCard/>
      </div>
   </main>
  
</template>

