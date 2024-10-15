<template>
    <div ref="contactContainer" class="contact-container">
        <h1 class="contact-header">Get In Touch With Me</h1>
        <div class="contact-form-container">
            <form class="contact-form" action="https://formspree.io/f/xnqrjaoe" method="POST">
                <div class="contact-form-group">
                    <label for="Name">Name *</label>
                    <input type="text" id="name" name="name" required="true">
                </div>
                <div class="contact-form-group">
                    <label for="email">Email *</label>
                    <input type="text" id="email" name="email" required="true">
                </div>
                <div class="contact-form-group">
                    <label for="textarea">Message *</label>
                    <textarea name="textarea" id="textarea" rows="10" cols="50" required="true"></textarea>
                </div>
                <button class="contact-form-submit-btn" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import "../../public/assets/main.css";

    gsap.registerPlugin(ScrollTrigger);

    const contactContainer = ref();
    let contactCtx: any;
    
    onMounted(() => {
        contactCtx = gsap.context((self: any) => {
            gsap.from('.contact-header', {
                    scrollTrigger: {
                        trigger: '.contact-header',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0,
                    opacity: 0
                }
            );

            gsap.from('.contact-form-container', {
                    scrollTrigger: {
                        trigger: '.contact-form-container',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0,
                    opacity: 0
                }
            );
        }, contactContainer.value);
    });

    onUnmounted(() => {
        contactCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;
        background-color: black;
    }

    .contact-header {
        color: white;
        margin-bottom: 1rem;
    }

    .contact-form-container {
        width: 55vw;
        background: linear-gradient(#212121, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
        border: 2px solid transparent;
        padding: 32px 24px;
        font-size: 14px;
        font-family: inherit;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        border-radius: 16px;

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .contact-form-group {
            display: flex;
            flex-direction: column;
            gap: 2px;

            label {
                display: block;
                margin-bottom: 5px;
                color: #717171;
                font-weight: 600;
                font-size: 12px;
            }

            input {
                width: calc(100% - 40px);
                padding: 12px 16px;
                border-radius: 8px;
                color: #fff;
                font-family: inherit;
                background-color: transparent;
                border: 1px solid #414141;

                &::placeholder {
                    opacity: 0.5;
                }

                &:focus {
                    outline: none;
                    border-color: #56A4B8;
                }
            }

            textarea {
                width: calc(100% - 40px);
                padding: 12px 16px;
                border-radius: 8px;
                resize: none;
                color: #fff;
                height: 96px;
                border: 1px solid #414141;
                background-color: transparent;
                font-family: inherit;

                &:focus {
                    outline: none;
                    border-color: #56A4B8;
                }
            }

        }

        .contact-form-submit-btn {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            align-self: center;
            font-family: inherit;
            color: #717171;
            font-weight: 600;
            width: 40%;
            background: #313131;
            border: 1px solid #414141;
            padding: 12px 16px;
            font-size: inherit;
            gap: 8px;
            margin-top: 8px;
            cursor: pointer;
            border-radius: 6px;
            transition: var(--transition-speed);

            &:hover {
                background-color: #56A4B8;
                border-color: #56A4B8;
                color: black;
            }
        }

        button:active {
            scale: 0.95;
        }
    }
</style>