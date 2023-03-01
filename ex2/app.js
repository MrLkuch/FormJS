
const contactForm = document.getElementById('Form');



contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const NomInput = document.getElementById("Nom");
    const adresseInput = document.getElementById("adresse");
    const telInput = document.getElementById("tel");
    const tailleInput = document.getElementById("taille");
    const pizzaInput = document.getElementById("pizza");
    const messageInput = document.getElementById("message");


    const formData = {
        Nom: NomInput.value,
        adresse: adresseInput.value,
        tel: telInput.value,
        taille: tailleInput.value,
        pizza: pizzaInput.value,
        message: messageInput.value

    }

    const errors = {
        Nom: false,
        adresse: false,
        tel: false,
        taille: false,
        pizza: false
        
    }

    const NomError = document.getElementById('NomError');
    const adresseError = document.getElementById('adresseError');
    const telError = document.getElementById('telError');
    const tailleError = document.getElementById('tailleError');
    const pizzaError = document.getElementById('pizzaError');


    NomError.style.display = 'none';
    adresseError.style.display = 'none';
    telError.style.display = 'none';
    tailleError.style.display = 'none';
    pizzaError.style.display = 'none';


    if (!formData.Nom || !formData.adresse || !formData.tel || !formData.taille) {
        const adresseRegex = /^[a-zA-Z ]+$/;
        const NomRegex = /^[a-zA-Z ]+$/;
        const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        if (!formData.Nom || !NomRegex.test(formData.Nom)) {
            errors.Nom = true;
            NomError.style.display = 'block';
        }
        if (!formData.adresse || !adresseRegex.test(formData.adresse)) {
            errors.adresse = true;
            adresseError.style.display = 'block';
        }
        if (!formData.tel || !telRegex.test(formData.tel)) {
            errors.tel = true;
            telError.style.display = 'block';
        }
        if (formData.taille == "") {
            errors.taille = true;
            tailleError.style.display = 'block';
        }
        if (formData.pizza == "") {
            errors.pizza = true;
            pizzaError.style.display = 'block';
        }

    }


    function calcprix(){

        let prix = 0

        if(formData.taille == "S"){
            prix += 5;
        }
        if(formData.taille == "M"){
            prix += 10;
        }
        if(formData.taille == "L"){
            prix += 12;
        }
        if(formData.pizza == "royal"){
            prix += 3;
        }

        if(formData.pizza == "fromage"){
            prix += 2;
        }
        
        return prix;
    }




    
    if (!Object.values(errors).includes(true)) {
        console.log(formData);
        console.log(calcprix());
        alert("commande envoyé avec succès")
        const main = document.getElementById('main')
        const Price = document.createElement('h2')
        Price.textContent = `Le prix total est de ${calcprix()} euros`
        main.appendChild(Price);
        
        contactForm.reset();
    }




})

