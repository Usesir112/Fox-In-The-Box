<template>
  <section>
    <div class="flex items-center justify-center h-screen">
      <img
        class="absolute top-0 w-screen h-fit z-[-10]"
        src="@/assets/images/background.jpg"
        alt="background"
      />
      <div
        class="absolute top-0 backdrop-brightness-[.30] w-screen h-screen z-[-9]"
      ></div>
      <div class="flex flex-col text-white text-center w-[70%]">
        <div class="flex items-center">
          <img class="w-1/4" src="@/assets/images/logo-white.png" alt="Logo" />
          <div>
            <p>DON'T STAY IN THE BOX</p>
            <p class="text-[4rem] tracking-tighter">
              THINK OUTSIDE THE
              <span class="rounded bg-primary text-white">FOX</span>
            </p>
            <p>THIS IS PLACE BY GAMERS, FOR GAMERS</p>
          </div>
        </div>
        <div class="grid grid-cols-3 place-content-center justify-items-center">
          <div
            v-for="item in contents"
            :key="item.title"
            class="m-3 w-1/2 hover:scale-125 duration-300 cursor-pointer"
          >
            <p class="text-[2rem]">{{ item.number }}</p>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-black p-10">
    <div class="flex text-center text-[3rem] justify-center">
      <p class="text-white bg-primary w-auto px-4 drop-shadow-xl mb-[5rem]">
        Our Events
      </p>
    </div>
    <div class="grid grid-cols-2 gap-10">
      <div>
        <img
          class="rounded-xl shadow-lg shadow-primary hover:shadow-xl hover:shadow-primary hover:scale-105 duration-300"
          src="@/assets/images/event-photo.jpg"
          alt="Event 1"
        />
      </div>
      <div class="flex items-center">
        <div class="p-3 bg-white/30 rounded-xl text-white">
          <p class="text-[3rem]">Festi Verse</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            deleniti rem sunt asperiores aut quas nesciunt provident ex magni
            eius!
          </p>
        </div>
      </div>
      <div class="flex items-center text-right">
        <div class="p-3 bg-white/30 rounded-xl text-white">
          <p class="text-[3rem]">Festi Verse</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            deleniti rem sunt asperiores aut quas nesciunt provident ex magni
            eius!
          </p>
        </div>
      </div>
      <div>
        <img
          class="rounded-xl drop-shadow-xl shadow-lg shadow-secondary hover:shadow-xl hover:shadow-secondary hover:scale-105 duration-300"
          src="@/assets/images/event-photo-2.jpg"
          alt="Event 2"
        />
      </div>
    </div>
  </section>

  <section class="h-fit bg-black">
    <div class="flex items-center">
      <img
        class="w-1/2"
        src="@/assets/images/logo-white.png"
        alt="Logo-White"
      />
      <div class="text-white">
        <p class="text-[3rem] px-3">Follow us on</p>
        <div class="text-[2rem]">
          <!-- Facebook -->
          <NuxtLink to="/" class="hover:bg-primary px-3 rounded duration-300">
            <span>
              <font-awesome-icon icon="fa-brands fa-square-facebook" />
            </span>
            <span class="text-[1.5rem] ml-3">facebook</span>
          </NuxtLink>

          <!-- Instagram -->
          <NuxtLink to="/" class="hover:bg-primary px-3 rounded duration-300">
            <span>
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </span>
            <span class="text-[1.5rem] ml-3">instagram</span>
          </NuxtLink>

          <!-- Twitter -->
          <NuxtLink to="/" class="hover:bg-primary px-3 rounded duration-300">
            <span>
              <font-awesome-icon icon="fa-brands fa-square-twitter" />
            </span>
            <span class="text-[1.5rem] ml-3">twitter</span>
          </NuxtLink>

          <!-- Telegram -->
          <NuxtLink to="/" class="hover:bg-primary px-3 rounded duration-300">
            <span>
              <font-awesome-icon icon="fa-brands fa-telegram" />
            </span>
            <span class="text-[1.5rem] ml-3">telegram</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import contents from "@/components/contents.json";
export default {
  head() {
    return {
      title: "Vue Dose is awesome!",
    };
  },
  data() {
    return {
      contents,
    };
  },
};
</script>
