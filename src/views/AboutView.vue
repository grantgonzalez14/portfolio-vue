<template>
    <div ref="aboutContainer" class="about-container">
        <!-- <div class='pictures'>
            <div class='up'>
                <img src='/assets/images/GatSeattleLake.jpeg' alt='Grant Ring Ceremony' loading='lazy' class='g-img'/>
            </div>
            <div class='down'>
                <img src='/assets/images/GGGradBowman.jpeg' alt='Grant Ring Ceremony' loading='lazy' class='g-img'/>
            </div>
            <div class='up'>
                <img src='/assets/images/GGGradSikes.jpeg' alt='Grant Ring Ceremony' loading='lazy' class='g-img'/>
            </div>
            <div class='down'>
                <img src='/assets/images/GGGradBowmanRing.jpeg' alt='Grant Ring Ceremony' loading='lazy' class='g-img'/>
            </div>
            <div class='up'>
                <img src='/assets/images/GatQ.jpeg' alt='Grant Ring Ceremony' loading='lazy' class='g-img'/>
            </div>
        </div> -->
        <div class='bio'>
            <h1 class='title'>Grant Gonzalez - Software Developer</h1>
            <h2 class='about-me'>
                Hi, I'm Grant! Welcome to my website! I'm an application developer and consultant at <a href='https://dbservices.com/about/people/grant-gonzalez' target='__blank' class='db-link'>DB Services</a> that 
                specializes full-stack development! I'm a results-driven developer with a passion for creating engaging, 
                interactive, and visually appealing applications. With a deep understanding of database management principles and experience with
                technologies such as FileMaker, Claris Studio, Claris Connect, and Claris Server I specialize in bringing
                complex ideas to life in a simple, intuitive, and effective way. <br/><br/>
                I believe that great development requires more than just technical expertise. It also requires a
                deep understanding of user experience, design principles, and the ability to work collaboratively with
                clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
                practices in full-stack development, and I'm always looking for new opportunities to learn and grow.<br/><br/>
            </h2>
        </div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const aboutContainer = ref();
    let aboutCtx: any;
    
    onMounted(() => {
        aboutCtx = gsap.context((self: any) => {
            const images = self.selector('.g-img');
            images.forEach((img: any) => {
                gsap.from('.g-img', {
                        scrollTrigger: {
                            trigger: img,
                            start: 'top bottom',
                            end: 'top 50%',
                            scrub: true
                        },
                        scale: 0,
                        opacity: 0,
                    }
                );
            });

            gsap.from('.bio', {
                    scrollTrigger: {
                        trigger: '.bio',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0,
                    opacity: 0
                }
            );
        }, aboutContainer.value);
    });

    onUnmounted(() => {
        aboutCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .about-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
        background-color: black;
    }

    .bio {
        display: block;
        text-align: center;
        margin-bottom: 4%;
    }

    .title,
    .about-me,
    .joke-container,
    .fade-container {
        color: var(--text-secondary);
        font-family: "Montserrat", "serif";
    }

    .title { 
        margin: 4rem 25% 0 25%; 
    }

    .about-me { 
        margin: 1rem 25% 0 25%; 
    }

    .title,
    .about-me,
    .up,
    .down {
        z-index: 2;
    }

    .images {
        background-color: transparent;
        text-align: center;

        .ps-img {
            display: inline-block;
            justify-content: center;
            width: 160px;
            height: 160px;
            margin: 0 4% 10%;
            
        }
    }

    .pictures {
        display: flex;
        flex-direction: row;
        background-color: transparent;
        text-align: center;
        align-items: center;
        margin: 0 5% 0 5%;
    }

    .g-img {
        display: inline-block;
        justify-content: center;
        width: 50%;
        height: 12%;
        margin: 2% 4% 0 4%;
        border-radius: 10px;
    }

    .db-link {
        color: white;

        &:hover {
            color: #56A4B8;
            cursor: pointer;
            transition: 250ms;
        }
    }

    .up {
        width: 100%;
        margin-bottom: 3%;
    }

    .down {
        width: 100%;
        margin-top: 5%;
    }

    .double {
        padding-bottom: 7%;
    }

    .joke-button {
        display: none;
        padding: 8px 20px;
        border-radius: 2px;
        outline: none;
        border: none;
        cursor: pointer;
        background-color: transparent;
        margin: 0 5px;
        font-size: 20px;
        color: white;
        border: 1px solid white;

        &:hover {
            transition: all 0.2s ease-out;
            color: #242424;
            background: white;
        }
    }

    @keyframes jokeAnimation {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    .fade-container {
        transition: opacity 1s ease-in-out;
    }

    .visible {
        opacity: 1;
    }
    
    .hidden {
        opacity: 0;
    }  

    .joke-container {
        animation-name: jokeAnimation;
        animation-duration: 1s;
        margin: 1rem 25%;
    }

    @media screen and (max-width: 425px) {
        .pictures {
            display: flex;
            flex-direction: column;
            background-color: transparent;
            text-align: center;
            align-items: center;

            .g-img {
                display: inline-block;
                justify-content: center;
                width: 50%;
                height: 50%;
                margin: 2% 4% 3% 4%;
            }
        }

        .left {
            padding-right: 20%;
        }

        .right {
            padding-left: 20%;
        }
    }
</style>