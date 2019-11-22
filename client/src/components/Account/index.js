import React from 'react'
import { Form, Layout } from '../Authentication'
import { object } from 'yup'

const schema = ''

export default () => {
    return (
        <div>
            <Layout>
                <h1>Account Page</h1>
                <Form
                    schema={object(schema)}
                    init={{
                        username: '',
                        'first Name': '',
                        'last Name': '',
                        city: '',
                    }}
                    button={'Submit'}
                />
            </Layout>
        </div>
    )
}

