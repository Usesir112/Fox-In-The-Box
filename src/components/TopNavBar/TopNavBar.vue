<template>
    <div class="w-screen overflow-hidden sticky top-0">
        <!-- Brackground -->
        <div class="absolute bg-secondary opacity-50 w-screen left-0 text-secondary h-[5rem] skew-x-[40deg] ml-[5rem]">b</div>
        
        <!-- Inside Nav -->
        <div class="relative ml-[7rem] flex items-center h-[5rem]">
            <div><img class="w-[7rem]" src="@/assets/images/logo.png" alt="logo" /></div>
            <NuxtLink to="/" 
            v-for="item in menu"
            :key="item.name"
            class="uppercase bg-hover rounded">
            {{ item.name }}
        </NuxtLink>
        </div>
    </div>
</template>
<script>
import menu from "./json/menu.json"
export default {
    data() {
        return {
            menu,
        }
    }
}
</script>
<style lang="sass">
@import @/sass/TopNavBar
</style>