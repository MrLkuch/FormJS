
const contactForm = document.getElementById('Form');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const NomInput = document.getElementById("Nom");
    const emailInput = document.getElementById("email");
    const telInput = document.getElementById("tel");
    const mdpInput = document.getElementById("mdp");

    const formData = {
        Nom: NomInput.value,
        email: emailInput.value,
        tel: telInput.value,
        mdp: mdpInput.value,
    }

    const errors = {
        Nom: false,
        email: false,
        tel: false,
        mdp: false
    }

    const NomError = document.getElementById('NomError');
    const emailError = document.getElementById('emailError');
    const telError = document.getElementById('telError');
    const mdpError = document.getElementById('mdpError');

    NomError.style.display = 'none';
    emailError.style.display = 'none';
    telError.style.display = 'none';
    mdpError.style.display = 'none';

    if (!formData.Nom || !formData.email || !formData.tel || !formData.mdp) {
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const nameRegex = /^[a-zA-Z ]+$/;
        const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const mdpRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (!formData.Nom || !nameRegex.test(formData.Nom)) {
            errors.Nom = true;
            NomError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.tel || !telRegex.test(formData.tel)) {
            errors.tel = true;
            telError.style.display = 'block';
        }
        if (!formData.mdp || !mdpRegex.test(formData.mdp)) {
            errors.mdp = true;
            mdpError.style.display = 'block';
        }
    }


    
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }




})