<template>
    <div ref="skillsContainer" class="skills-container">
        <h1 class='skill-header'>My Skills</h1>
        <Card id='fmp' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/FileMakerProIcon.png'
                    alt='FileMaker Pro'
                    loading='lazy'
                    class='icon'
                    id='fmp'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'85%'">
                    <template v-slot:title>
                        FileMaker Pro
                    </template>
                    <template v-slot:tooltip>
                        85%
                    </template>
                    <template v-slot:skillDescription>
                        FileMaker Pro, a low-code platform for building relational databases and business applications. It abstracts a lot 
                        of the complexity you'd typically deal with in traditional programming environments, allowing you to focus more on 
                        logic and less on infrastructure. I use this every day to develop full-stack applications, sometimes from the ground 
                        up!
                    </template>
                </Skill>
            </template>
        </Card> 
        <Card id='vue' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-vue-js-144.png'
                    alt='Vue JS'
                    loading='lazy'
                    class='icon'
                    id='vue'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'75%'">
                    <template v-slot:title>
                        Vue JS
                    </template>
                    <template v-slot:tooltip>
                        75%
                    </template>
                </Skill>
            </template>
        </Card> 
        <Card id='typescript' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-typescript-144.png'
                    alt='Typescript'
                    loading='lazy'
                    class='icon'
                    id='typescript'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'40%'">
                    <template v-slot:title>
                        Typescript
                    </template>
                    <template v-slot:tooltip>
                        40%
                    </template>
                </Skill>
            </template>
        </Card>
        <Card id='javascript' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-javascript.svg'
                    alt='JavaScript'
                    loading='lazy'
                    class='icon'
                    id='javascript'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'60%'">
                    <template v-slot:title>
                        JavaScript
                    </template>
                    <template v-slot:tooltip>
                        60%
                    </template>
                </Skill>
            </template>
        </Card>

        <Card id="html" class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-html-5.svg'
                    alt='HTML5'
                    loading='lazy'
                    class='icon'
                    id="html"
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'40%'">
                    <template v-slot:title>
                        HTML
                    </template>
                    <template v-slot:tooltip>
                        40%
                    </template>
                </Skill>
            </template>
        </Card>
        <Card id='css' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-css3.svg'
                    alt='CSS3'
                    loading='lazy'
                    class='icon'
                    id='css'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'70%'">
                    <template v-slot:title>
                        CSS
                    </template>
                    <template v-slot:tooltip>
                        70%
                    </template>
                </Skill>
            </template>
        </Card>
        <Card id='react' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-react-160.png'
                    alt='React'
                    loading='lazy'
                    class='icon'
                    id='react'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'20%'">
                    <template v-slot:title>
                        React
                    </template>
                    <template v-slot:tooltip>
                        20%
                    </template>
                </Skill>
            </template>
        </Card>  
        
        <Card id='python' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-python.svg'
                    alt='Python'
                    loading='lazy'
                    class='icon'
                    id='python'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'50%'">
                    <template v-slot:title>
                        Python
                    </template>
                    <template v-slot:tooltip>
                        50%
                    </template>
                </Skill>
            </template>
        </Card>
        <Card id='git' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-git.svg'
                    alt='Git'
                    loading='lazy'
                    class='icon'
                    id='git'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'50%'">
                    <template v-slot:title>
                        Git
                    </template>
                    <template v-slot:tooltip>
                        50%
                    </template>
                </Skill>
            </template>
        </Card>

        <Card id='frontend' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-laptop-coding-96.png'
                    alt='Frontend Development'
                    loading='lazy'
                    class='icon'
                    id='frontend'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'80%'">
                    <template v-slot:title>
                        Frontend Development
                    </template>
                    <template v-slot:tooltip>
                        80%
                    </template>
                </Skill>
            </template>
        </Card>

        <Card id='backend' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/icons8-backend-development-96.png'
                    alt='Backend Development'
                    loading='lazy'
                    class='icon'
                    id='backend'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'80%'">
                    <template v-slot:title>
                        Backend Development
                    </template>
                    <template v-slot:tooltip>
                        80%
                    </template>
                </Skill>
            </template>
        </Card>
        
        <Card id='api' class="icon-card" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/public/assets/icons/PostmanIcon.png'
                    alt='API Integration'
                    loading='lazy'
                    class='icon'
                    id='api'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'70%'">
                    <template v-slot:title>
                        API Integrations
                    </template>
                    <template v-slot:tooltip>
                        70%
                    </template>
                </Skill>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
    import Card from '@/components/Card.vue';
    import Skill from '@/components/Skill.vue';
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { v4 as uuidv4 } from 'uuid';

    gsap.registerPlugin(ScrollTrigger);

    interface SkillInfo {
        skillID: string;
        scrollTriggerID: string;
    }

    const skillList = ref<Array<SkillInfo>>([]);
    const isSkillExpanded = ref(false);
    const currentlyExpandedSkill = ref();
    const cardWidth = ref();
    const skillsContainer = ref();
    let skillsCtx: any;

    const animateSkill = (targetID: string) => {
        if (!isSkillExpanded.value) {
            skillsCtx = gsap.context((self: any) => {
                const skills = self.selector('.icon-card');
                
                let width = document.querySelector(".project-card")?.getBoundingClientRect().width! * 0.98;
                let calculatedHeight = skills[8].getBoundingClientRect().bottom - skills[0].getBoundingClientRect().top;
                let windowHeight = window.innerHeight * 0.7;
                let height = calculatedHeight > windowHeight ? calculatedHeight : windowHeight;
                let topPosition = document.querySelector(".skill-header")!.getBoundingClientRect().bottom + 16;
                let leftPosition = skills[0].getBoundingClientRect().left;
                

                skills.forEach((skill: any) => {
                    if (skill.id == targetID) {
                        let tl = gsap.timeline();
                        currentlyExpandedSkill.value = document.getElementById(skill.id);
                        currentlyExpandedSkill.value.classList.add("expanded");
                        
                        tl.to(".icon", {
                            opacity: 0,
                            duration: 0
                        });

                        tl.to(skill, {
                                width: width,
                                height: height,
                                duration: 0.1,
                                padding: 0,
                                x: () => {
                                    let currentWidthRadius = skill.getBoundingClientRect().width / 2;
                                    let newWidthRadius = width! / 2;
                                    let afterWidthChangeLeft = newWidthRadius - currentWidthRadius;
                                    return `-=${skill.getBoundingClientRect().left - afterWidthChangeLeft - leftPosition}`
                                },
                                y: () => {
                                    let currentHeightRadius = skill.getBoundingClientRect().height / 2;
                                    let newHeightRadius = height / 2;
                                    let afterHeightChangeTop = newHeightRadius - currentHeightRadius;
                                    return `-=${skill.getBoundingClientRect().top - afterHeightChangeTop - topPosition}`
                                }
                            }
                        );

                        tl.to(".card-content", {
                            y: -height
                        }, "<+=.05");
                    } else  {
                        gsap.set(skill, {
                                scale: 0
                            }
                        );
                    }
                });
                cardWidth.value = width;
                isSkillExpanded.value = true;
            }, skillsContainer.value);
        } else {
            gsap.to(".card-content", {
                y: 500,
                onComplete: () => {
                    skillsCtx.revert();
                    isSkillExpanded.value = false;
                    currentlyExpandedSkill.value.classList.remove("expanded");
                    currentlyExpandedSkill.value = null;
                }
            });
            
            
        }
    };

    const handleScrollanimation = () => {
        if (isSkillExpanded.value) {
            skillList.value.forEach((skill: SkillInfo) => {
                if (currentlyExpandedSkill.value.id != skill.skillID) {
                    ScrollTrigger.getById(skill.scrollTriggerID)?.disable();
                }
            });
        } else {
            ScrollTrigger.enable();
        }
    }

    onMounted(() => {
        skillsCtx = gsap.context((self: any) => {
            const skills = self.selector('.icon-card');
            skills.forEach((skill: any) => {
                let uuid = uuidv4();

                // Generic animation from below card
                gsap.from(skill, {
                        scrollTrigger: {
                            id: uuid,
                            trigger: skill,
                            start: 'top bottom',
                            end: '+=' + skill.getBoundingClientRect().height * 0.95,
                            scrub: true
                        },
                        scale: 0,
                        y: 200
                    }
                );

                skillList.value.push({
                    skillID: skill.id,
                    scrollTriggerID: uuid
                });
                

                // // Like this animation, but it relies on there being exactly 5 rows
                // if (index % 5 == 0) {
                //     gsap.from(skill, {
                //             scrollTrigger: {
                //                 trigger: skill,
                //                 start: 'top bottom',
                //                 end: '+=' + skill.getBoundingClientRect().height,
                //                 scrub: true
                //             },
                //             scale: 0,
                //             y: 200,
                //             x: -200
                //         }
                //     );
                // } else if (index % 5 == 1) {
                //     gsap.from(skill, {
                //             scrollTrigger: {
                //                 trigger: skill,
                //                 start: 'top bottom',
                //                 end: '+=' + skill.getBoundingClientRect().height,
                //                 scrub: true
                //             },
                //             scale: 0,
                //             y: 200,
                //             x: -100
                //         }
                //     );
                // } else if (index % 5 == 2) {
                //     gsap.from(skill, {
                //             scrollTrigger: {
                //                 trigger: skill,
                //                 start: 'top bottom',
                //                 end: '+=' + skill.getBoundingClientRect().height,
                //                 scrub: true
                //             },
                //             scale: 0,
                //             y: 200
                //         }
                //     );
                // } else if (index % 5 == 3) {
                //     gsap.from(skill, {
                //             scrollTrigger: {
                //                 trigger: skill,
                //                 start: 'top bottom',
                //                 end: '+=' + skill.getBoundingClientRect().height,
                //                 scrub: true
                //             },
                //             scale: 0,
                //             y: 200,
                //             x: 100
                //         }
                //     );
                // } else {
                //     gsap.from(skill, {
                //             scrollTrigger: {
                //                 trigger: skill,
                //                 start: 'top bottom',
                //                 end: '+=' + skill.getBoundingClientRect().height,
                //                 scrub: true
                //             },
                //             scale: 0,
                //             y: 200,
                //             x: 200
                //         }
                //     );
                // }
            });

            window.addEventListener("scroll", handleScrollanimation);
            gsap.from('.skill-header', {
                    scrollTrigger: {
                        trigger: '.skill-header',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0
                }
            );
        }, skillsContainer.value);
    });

    onUnmounted(() => {
        skillsCtx.revert();
    });
</script>

<style lang="scss" scoped>

    .skills-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-auto-rows: 15rem;
        gap: 1rem;
        padding: 0 14%;
        align-items: center;
        min-height: 100vh;
        max-width: 100vw;
        background-color: black;
        margin-top: -5rem;

        .icon-card {
            background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
            border: 2px solid transparent;
            border-radius: 11px;
            transition: calc(var(--transition-speed) / 3);
            padding: 20px;
            grid-column: span 1;
            grid-row: span 1;
            justify-self: center;

            &:not(.expanded):hover {
                transform: scale(1.1) !important;
                transition-timing-function: ease;
            }

            &:hover {
                cursor: pointer;
            }

            .icon {
                width: 11.875rem;
                height: 11.25rem;
                transition: calc(var(--transition-speed) / 3);
            }
        }
    }

    .skill-header {
        display: flex;
        justify-content: center;
        background-color: black;
        color: var(--text-secondary);
        grid-column: 1 / -1;
        grid-row: 1;
        align-self: flex-end;
        padding-bottom: 1rem;
    }

    @media screen and (max-width: 925px) {
        .icon {
            width: 9rem;
            height: 9rem;
        }
    }
</style>