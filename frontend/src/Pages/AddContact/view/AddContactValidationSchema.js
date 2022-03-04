import * as Yup from 'yup';

const AddContactValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email("Please enter a vaild email").required('Email is Required'),
    phone: Yup.string().required('Phone Number is Required').matches('^[0-9]', 'Only Numbers Allowed').min(10, 'Minimum 10 Numbers Required'),
    dob: Yup.string().required('Date Of Birth is Required'),
    gender: Yup.string().required('Gender is Required'),
    company: Yup.string().required('Company Name is Required'),
    address: Yup.string().required('Address is Required'),
    city: Yup.string().required('City is Required'),
    state: Yup.string().required('State is Required'),
    country: Yup.string().required('Country is Required'),
    postalCode: Yup.string().required('Postal Code is Required'),
    designation: Yup.string().required('Designation is Required'),
});

export default AddContactValidationSchema;