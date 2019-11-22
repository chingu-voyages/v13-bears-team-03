import React from 'react'
import TextField from './TextField'
import RBForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik, Form } from 'formik'

export default ({ init, button, schema }) => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={init}
        >
            <RBForm noValidate as={Form}>
                {
                    Object.keys(init).map(val => {
                        const type = val === 'email' || val === 'password' ? val : 'text'
                        let label = val[0].toUpperCase() + val.slice(1)
                        return (
                            <React.Fragment key={val}>
                                <TextField
                                    label={label}
                                    name={val.replace(' ', '')}
                                    type={type}
                                    placeholder={`Enter your ${val.toLocaleLowerCase()}`}
                                />
                                {type === 'email' &&
                                    <RBForm.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </RBForm.Text>
                                }
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