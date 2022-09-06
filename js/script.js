console.log('Warsztat-obsługa formularza "imię i nazwisko"');

const submitForm = (event) => {
    event.preventDefault();
    let firstName = querySelector('[name="fname"]');
    let lastName = querySelector('[last="lname"]');

    
console.log('Imie: ${firstName.value},Nazwisko: ${lastName.value}');
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

console.log(form);


