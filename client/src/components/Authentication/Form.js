import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Formik } from 'formik'

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
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        {type === 'sign-up' &&
                            <Form.Group controlId="validationFormik02">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    // isValid={touched.username && !errors.username}
                                    isInvalid={!!errors.username}
                                />
                            </Form.Group>
                        }

                        <Form.Group controlId="validationFormik01">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="validationFormik03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            {type === "sign-up" ? "Sign Up" : "Sign In"}
                        </Button>
                    </Form>
                )}
        </Formik>
    )
}