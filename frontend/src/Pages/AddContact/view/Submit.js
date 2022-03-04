
const onSubmitForm = async e =>{
    e.preventDefault();
    try {
        const body ={firstName, lastName, email, phone, dob, gender, company, address, city, state, country, postalCode, designation};
        const response = await fetch("http://localhost:8080/addContact",{
            method: "POST",
            headers: {"Content-Type": "appication/json"},
            body: JSON.strignify(body)
        });
        console.log(response);
    } catch (err) {
        console.log(err.message);
    }
}

export default onSubmitForm