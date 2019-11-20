import React from 'react'
import TextField from './TextField'
import RBForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik, Form } from 'formik'

export default ({ schema, type }) => {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                username: '',
                email: '',
                password: '',
            }}
        >
            <RBForm noValidate as={Form}>
                {type === 'sign-up' &&
                    <TextField
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                }

                <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                >
                    <RBForm.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </RBForm.Text>
                </TextField>

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your Password"
                />

                <Button variant="primary" type="submit">
                    {type === "sign-up" ? "Sign Up" : "Sign In"}
                </Button>
            </RBForm>
        </Formik>
    )
}