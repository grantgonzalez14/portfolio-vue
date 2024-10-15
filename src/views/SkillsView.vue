<template>
    <div ref="skillsContainer" class="skills-container">
        <h1 class='skill-header'>My Skills</h1>
        <div class='skills-wrapper'>
            <div class="skills-row">
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
                                logic and less on infrastructure.
                            </template>
                        </Skill>
                    </template>
                </Card>         
            </div>
            <div class="skills-row">
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
                        <Skill :skillWidth="'20%'">
                            <template v-slot:title>
                                Python
                            </template>
                            <template v-slot:tooltip>
                                50%
                            </template>
                        </Skill>
                    </template>
                </Card>
                
                <Card id='figma' class="icon-card" @click="animateSkill($event.target.id)">
                    <template v-slot:image>
                        <img
                            src='/public/assets/icons/FigmaIcon.png'
                            alt='Figma'
                            loading='lazy'
                            class='icon'
                            id='figma'
                        />
                    </template>
                    <template v-slot:content>
                        <Skill :skillWidth="'10%'">
                            <template v-slot:title>
                                Figma
                            </template>
                            <template v-slot:tooltip>
                                10%
                            </template>
                        </Skill>
                    </template>
                </Card>
                
            </div>
            <div class="skills-row">
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

                <Card id='cpp' class="icon-card" @click="animateSkill($event.target.id)">
                    <template v-slot:image>
                        <img
                            src='/public/assets/icons/icons8-c++.svg'
                            alt='C++'
                            loading='lazy'
                            class='icon'
                            id='cpp'
                        />
                    </template>
                    <template v-slot:content>
                        <Skill :skillWidth="'10%'">
                            <template v-slot:title>
                                C++
                            </template>
                            <template v-slot:tooltip>
                                10%
                            </template>
                        </Skill>
                    </template>
                </Card>

                <Card id='c' class="icon-card" @click="animateSkill($event.target.id)">
                    <template v-slot:image>
                        <img
                            src='/public/assets/icons/icons8-c-programming.svg'
                            alt='C'
                            loading='lazy'
                            class='icon'
                            id='c'
                        />
                    </template>
                    <template v-slot:content>
                        <Skill :skillWidth="'20%'">
                            <template v-slot:title>
                                C
                            </template>
                            <template v-slot:tooltip>
                                20%
                            </template>
                        </Skill>
                    </template>
                </Card>
                
                <Card id='postman' class="icon-card" @click="animateSkill($event.target.id)">
                    <template v-slot:image>
                        <img
                            src='/public/assets/icons/PostmanIcon.png'
                            alt='Postman'
                            loading='lazy'
                            class='icon'
                            id='postman'
                        />
                    </template>
                    <template v-slot:content>
                        <Skill :skillWidth="'70%'">
                            <template v-slot:title>
                                Postman
                            </template>
                            <template v-slot:tooltip>
                                70%
                            </template>
                        </Skill>
                    </template>
                </Card>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Card from '@/components/Card.vue';
    import Skill from '@/components/Skill.vue';
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const isSkillExpanded = ref(false);
    const cardWidth = ref();
    const skillsContainer = ref();
    let skillsCtx: any;

    const animateSkill = (targetID: string) => {
        if (!isSkillExpanded.value) {
            skillsCtx = gsap.context((self: any) => {
                const skills = self.selector('.icon-card');
                let width = skills[3].getBoundingClientRect().right - skills[0].getBoundingClientRect().left;
                let height = skills[8].getBoundingClientRect().bottom - skills[0].getBoundingClientRect().top;
                let topPosition = skills[0].getBoundingClientRect().top;
                let leftPosition = window.innerWidth / 2;
                let navbarWidth = document.getElementById("navbar")?.getBoundingClientRect().width;
                console.log(targetID);

                skills.forEach((skill: any) => {
                    if (skill.id != targetID) {
                        gsap.to(skill, {
                                scale: 0,
                                duration: 0.05
                            }
                        );
                    } else {
                        let tl = gsap.timeline();

                        tl.to(".icon", {
                            opacity: 0,
                            duration: 0
                        });

                        tl.to(skill, {
                                width: width,
                                height: height,
                                duration: 0.1,
                                x: -skill.getBoundingClientRect().left - navbarWidth + leftPosition,
                                y: -(skill.getBoundingClientRect().top - topPosition),
                                padding: 0
                            }
                        );

                        tl.to(".card-content", {
                            y: -height
                        });
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
                }
            });
            
            
        }
    };

    onMounted(() => {
        skillsCtx = gsap.context((self: any) => {
            const skills = self.selector('.icon-card');
            skills.forEach((skill: any, index: number) => {
                if (index % 4 == 0) {
                    gsap.from(skill, {
                            scrollTrigger: {
                                trigger: skill,
                                start: 'top bottom',
                                end: '+=' + skill.getBoundingClientRect().height,
                                scrub: true
                            },
                            scale: 0,
                            x: -200,
                            y: 200
                        }
                    );
                } else if (index % 4 == 1 || index % 4 == 2) {
                    gsap.from(skill, {
                            scrollTrigger: {
                                trigger: skill,
                                start: 'top bottom',
                                end: '+=' + skill.getBoundingClientRect().height,
                                scrub: true
                            },
                            scale: 0,
                            y: 200
                        }
                    );
                } else if (index % 4 == 3) {
                    gsap.from(skill, {
                            scrollTrigger: {
                                trigger: skill,
                                start: 'top bottom',
                                end: '+=' + skill.getBoundingClientRect().height,
                                scrub: true
                            },
                            scale: 0,
                            x: 200,
                            y: 200
                        }
                    );
                }
                
            });

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
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
        background-color: black;
    }

    .skills {
        max-width: 68.75rem;
        margin: auto;
        text-align: center;
    }

    .skills-row {
        display: flex;
        flex-direction: row;
    }

    .skill-header {
        margin-bottom: 1rem;
        margin-top: 3rem;
        color: var(--text-secondary);
    }

    .icon {
        width: 11.875rem;
        height: 11.25rem;
        transition: calc(var(--transition-speed) / 3);
    }

    .icon-card {
        background: linear-gradient(#212121, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
        border: 2px solid transparent;
        border-radius: 11px;
        transition: calc(var(--transition-speed) / 3);

        padding: 20px;
        margin: 20px;

        &:hover {
            width: 12.875rem;
            height: 12.25rem;
            margin: 12px 12.5px;
            transition-timing-function: ease;
            cursor: pointer;
        }

        &:hover .icon {
            width: 12.875rem;
            height: 12.25rem;
        }
    }

    @media screen and (max-width: 925px) {
        .skills { margin-left: 5rem; }

        .icon {
            width: 9rem;
            height: 9rem;

            &:hover {
                width: 11rem;
                height: 11rem;
            }
        }

        .icon-card:hover {
            width: 11rem;
            height: 11rem;
        }
    }

    @media screen and (max-width: 425px) {
        .skills { margin-left: 0; }
    }
</style>