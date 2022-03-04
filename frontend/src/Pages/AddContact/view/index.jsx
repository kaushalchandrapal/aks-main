import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import isEmpty from "lodash/isEmpty";
import ButtonComponent from '../../../components/ButtonComponent';
import TextInputComponent from '../../../components/TextInputComponent';
import AddContactInitialValue from './AddContactInitialValues';
import AddContactValidationSchema from './AddContactValidationSchema';
import { addContact } from '../reducers/addContact';

const AddContactPage = () => {
 
  const dispatch = useDispatch();
  return (
    <>
      
      <Formik
        initialValues={AddContactInitialValue}
        validationSchema={AddContactValidationSchema}
        onSubmit={values => {
          console.log(values);
          const payload = {};
          payload.fname = values?.firstName;
          payload.lname = values?.lastName;
          payload.email = values?.email;
          payload.phone = values?.phone;
          payload.dob = values?.dob;
          payload.jobrole = values?.designation;
          payload.company = values?.company;
          payload.address = values?.address;
          payload.country = values?.country;
          payload.gender = values?.gender;
         // payload.city = values?.city;
          payload.statename = values?.state;
          payload.postalcode = values?.postalCode;
          dispatch(addContact(payload));
        }}
      >
        {formik => {
          console.log(formik.errors)
          console.log(!isEmpty(formik.errors))
          console.log(JSON.stringify(formik.values) === JSON.stringify(AddContactInitialValue) 
          && !isEmpty(formik.errors))
          return (
            <div>
              <Form>
                <TextInputComponent
                  variant="outlined"
                  label="First Name*"
                  placeholder="First Name"
                  name="firstName"
                  value={formik?.values?.firstName}
                  onChange={e => formik.setFieldValue('firstName', e.target.value.toUpperCase())}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.firstName && formik?.errors?.firstName)}
                  helperText={
                    formik?.touched?.firstName
                      ? formik?.errors?.firstName
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Last Name*"
                  placeholder="Last Name"
                  name="lastName"
                  value={formik?.values?.lastName}
                  onChange={e => formik.setFieldValue('lastName', e.target.value.toUpperCase())}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.lastName && formik?.errors?.lastName)}
                  helperText={
                    formik?.touched?.lastName
                      ? formik?.errors?.lastName
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Email*"
                  placeholder="Email"
                  name="email"
                  value={formik?.values?.email}
                  onChange={e => formik.setFieldValue('email', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.email && formik?.errors?.email)}
                  helperText={
                    formik?.touched?.email
                      ? formik?.errors?.email
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Phone*"
                  placeholder="Phone"
                  name="phone"
                  value={formik?.values?.phone}
                  onChange={e => formik.setFieldValue('phone', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.phone && formik?.errors?.phone)}
                  helperText={
                    formik?.touched?.phone
                      ? formik?.errors?.phone
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Date Of Birth*"
                  placeholder="Date Of Birth"
                  name="dob"
                  value={formik?.values?.dob}
                  onChange={e => formik.setFieldValue('dob', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.dob && formik?.errors?.dob)}
                  helperText={
                    formik?.touched?.dob
                      ? formik?.errors?.dob
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Gender*"
                  placeholder="Gender"
                  name="gender"
                  value={formik?.values?.gender}
                  onChange={e => formik.setFieldValue('gender', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.gender && formik?.errors?.gender)}
                  helperText={
                    formik?.touched?.gender
                      ? formik?.errors?.gender
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Company*"
                  placeholder="Company"
                  name="company"
                  value={formik?.values?.company}
                  onChange={e => formik.setFieldValue('company', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.company && formik?.errors?.company)}
                  helperText={
                    formik?.touched?.company
                      ? formik?.errors?.company
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Address*"
                  placeholder="Address"
                  name="address"
                  value={formik?.values?.address}
                  onChange={e => formik.setFieldValue('address', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.address && formik?.errors?.address)}
                  helperText={
                    formik?.touched?.address
                      ? formik?.errors?.address
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="City*"
                  placeholder="City"
                  name="city"
                  value={formik?.values?.city}
                  onChange={e => formik.setFieldValue('city', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.city && formik?.errors?.city)}
                  helperText={
                    formik?.touched?.city
                      ? formik?.errors?.city
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="State*"
                  placeholder="State"
                  name="state"
                  value={formik?.values?.state}
                  onChange={e => formik.setFieldValue('state', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.state && formik?.errors?.state)}
                  helperText={
                    formik?.touched?.state
                      ? formik?.errors?.state
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Country*"
                  placeholder="Country"
                  name="country"
                  value={formik?.values?.country}
                  onChange={e => formik.setFieldValue('country', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.country && formik?.errors?.country)}
                  helperText={
                    formik?.touched?.country
                      ? formik?.errors?.country
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Postal Code*"
                  placeholder="Postal Code"
                  name="postalCode"
                  value={formik?.values?.postalCode}
                  onChange={e => formik.setFieldValue('postalCode', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.postalCode && formik?.errors?.postalCode)}
                  helperText={
                    formik?.touched?.postalCode
                      ? formik?.errors?.postalCode
                      : ''
                    }
                />
                <TextInputComponent
                  variant="outlined"
                  label="Designation*"
                  placeholder="Designation"
                  name="designation"
                  value={formik?.values?.designation}
                  onChange={e => formik.setFieldValue('designation', e.target.value)}
                  onBlur={formik.handleBlur}
                  error={!!(formik?.touched?.designation && formik?.errors?.designation)}
                  helperText={
                    formik?.touched?.designation
                      ? formik?.errors?.designation
                      : ''
                    }
                />
                <div className='row'>
                <ButtonComponent
                  type="Submit"
                  variant="text"
                  text="Submit"
                  disabled={!(formik.dirty && formik.isValid) }
                      // && JSON.stringify(formik.values) === JSON.stringify(AddContactInitialValue) 
                  //disabled={
                   // JSON.stringify(formik.values) === JSON.stringify(AddContactInitialValue) 
                   // && !isEmpty(formik.errors) === true
                  //}

                />
                <ButtonComponent
                  type="Reset"
                  variant="text"
                  text="reset"
                  disabled={JSON.stringify(formik.values) === JSON.stringify(AddContactInitialValue)}
                />
                </div>
              </Form>
            </div>
          )
        }}
      </Formik>
    </>
  )
}

export default AddContactPage