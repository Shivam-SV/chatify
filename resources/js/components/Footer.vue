<template>
    <footer class="p-2 w-100 shadow-sm flex justify-between">
        <div class="left-side">
            <span>chatify All rights resevered {{ year }}</span>
        </div>
        <div class="right-side">
            <h2>chatify</h2>
        </div>
    </footer>
</template>

<style>
</style>

<script>

export default{
    name:"Footer",
    data(){
        year: new Date();
    }
}
</script>
