import React from 'react'
import Layout from './Layout'
import Form from './Form'
import { string, object } from 'yup'

const schema = {
    username: string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    email: string()
        .email('Please enter a valid email address')
        .required('Required'),
    password: string()
        .min(6, 'Password must contain at least 6 characters')
        .max(30, 'Password must contain 30 characters or less')
        .required('Required'),
}

export const SignUp = () => (
    <Layout>
        <Form
            schema={object(schema)}
            init={{ username: '', email: '', password: '' }}
            button={'Sign Up'}
        />
    </Layout>
)

export const SignIn = () => {
    const { email, password } = schema
    return (
        < Layout >
            <Form
                schema={object({ email, password })}
                init={{ email: '', password: '' }}
                button={'Sign In'}
            />
        </Layout >
    )
}