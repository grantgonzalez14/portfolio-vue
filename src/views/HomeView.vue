<template>
    <div ref="homeContainer" class="home-container">
        <span class="grant-gonzalez"></span>
        <!-- <img src="/public/assets/icons/down-arrows.png" class="arrow" /> -->
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x arrow"
        >
            <g class="fa-group">
                <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                ></path>
                <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                ></path>
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted } from 'vue';
    import TextPlugin from 'gsap/TextPlugin';

    const emit = defineEmits(['isScrollAllowed']);

    gsap.registerPlugin(TextPlugin);

    onMounted(() => {
        let tl = gsap.timeline();
        let bounceTl = gsap.timeline({repeat: -1});

        tl.set('body', { overflow: "hidden" })
        .fromTo(".grant-gonzalez", 
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
        )
        .fromTo(".grant-gonzalez", 
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
        )
        .fromTo(".grant-gonzalez", 
            {
                opacity: 1,
                fontSize: 196
            },
            {
                ease: "none",
                duration: 0.1,
                fontSize: 144,
                onComplete: () => { 
                    gsap.to('.arrow', { opacity: 1 });
                    bounceTl.set('body', { overflow: "scroll" })
                    .to('.arrow', { y: 10 })
                    .to('.arrow', { y: 0 });
                }
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

    .arrow {
        opacity: 0;
        width: 5rem;
        height: 5rem;
        transform: rotate(90deg);
    }

    .fa-primary {
        color: #407E8A;
    }

    .fa-secondary {
        color: #56A4B8;
    }
</style>