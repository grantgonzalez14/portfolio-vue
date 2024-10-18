export const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
        targetElement.scrollIntoView({behavior: 'smooth'});            
    }
}

