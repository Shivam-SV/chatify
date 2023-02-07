<template>
    <header>
        <Header></Header>
    </header>
    <main>
        <Slot></Slot>
        <Footer></Footer>
    </main>
</template>

<style>

</style>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default{
    name: "Layout",
}
</script>
