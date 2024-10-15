<template>
    <div ref="homeContainer" class="home-container" v-scroll-lock="isScrollAllowed">
        <span class="grant-gonzalez"></span>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, ref, withDirectives } from 'vue';
    import VScrollLock from 'v-scroll-lock';
    import TextPlugin from 'gsap/TextPlugin';

    const isScrollAllowed = ref<boolean>(false);

    withDirectives(document.querySelector('.home-container'), VScrollLock)

    gsap.registerPlugin(TextPlugin);

    onMounted(() => {
        console.log(isScrollAllowed.value);
        let tl = gsap.timeline();

        tl.fromTo(".grant-gonzalez", 
            {
                fontSize: 144
            }, 
            {
                ease: "none",
                fontSize: 144,
                text: {
                    value: "GRANT GONZALEZ",
                    speed: 1
                }
            }
        );

        tl.fromTo(".grant-gonzalez", 
            {
                opacity: 1,
                fontSize: 144
            },
            {
                ease: "none",
                color: "#5CA8BF",
                duration: 0.1,
                fontSize: 196
            },
            ">+=0.5"
        );

        tl.fromTo(".grant-gonzalez", 
            {
                opacity: 1,
                fontSize: 196
            },
            {
                ease: "none",
                duration: 0.1,
                fontSize: 144,
                onComplete: () => { isScrollAllowed.value = true }
            },
            ">+=0.25"
        );
    });
</script>

<style lang="scss" scoped>
    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
        background-color: black;
    }

    .grant-gonzalez {
        font-size: 144px;
        margin-left: 5rem;
        opacity: 1;
        color: white;
    }
</style>