<template>
    <nav class="w-100 shadow-xl position-relative">
        <div class="container mx-auto flex justify-between">
            <div class="navbar-brander">
                <h2 class="m-0">CHatify</h2>
            </div>
            <div class="navbar-search">
                <input class="p-2 border-1 outline-none w-100" type="search" name="search" id="search" placeholder="try 'chatify' ">
            </div>
            <div class="navbar-info-section">
                <LaUserCircle />
            </div>
        </div>
    </nav>
</template>

<style>
</style>

<script>
    import { LaUserCircle } from "oh-vue-icons/icons";
    export default{
        name: 'Header'
    }
</script>
