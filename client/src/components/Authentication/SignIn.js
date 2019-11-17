import React from 'react'
import Layout from './Layout'
import Form from './Form'
import { string, object } from 'yup'

const schema = object({
    email: string().email().required(),
    password: string().required(),
})

export default () => (
    <Layout>
        <Form type={"sign-in"} schema={schema} />
    </Layout>
)