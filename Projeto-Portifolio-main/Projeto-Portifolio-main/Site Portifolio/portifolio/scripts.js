let skills = document.querySelector('.skills');
let skillWrapper = document.querySelector('.skill-wrapper');
let skillsClone = Array.from(skillWrapper.children);

skillsClone.forEach((skill) => {
    let elemDuplicado = skill.cloneNode(true);
    elemDuplicado.setAttribute('aria-hidden', 'true');
    skillWrapper.appendChild(elemDuplicado);
});