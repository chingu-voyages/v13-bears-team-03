import React from 'react'
import TextField from './TextField'
import RBForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik, Form } from 'formik'

export default ({ button, fields, formName, init, schema }) => {
    const setInitVal = (key, initValObj) => {
        return JSON.parse(localStorage.getItem(key)) || initValObj
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={obj => localStorage.setItem(formName, JSON.stringify(obj))}
            initialValues={setInitVal(formName, init)}
        >
            <RBForm noValidate as={Form}>
                {
                    fields.map(field => {
                        const { label, name, placeholder, type } = field
                        return (
                            <React.Fragment key={name}>
                                <TextField
                                    label={label}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                >
                                    {type === 'email' &&
                                        <RBForm.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                    </RBForm.Text>
                                    }
                                </TextField>
                            </React.Fragment>
                        )
                    })
                }
                <Button variant="primary" type="submit">
                    {button}
                </Button>
            </RBForm>
        </Formik>
    )
}