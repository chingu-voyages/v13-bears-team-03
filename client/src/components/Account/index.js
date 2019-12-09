import React from 'react'
import { Form, Layout } from '../Authentication'
import { object, string } from 'yup'

const schema = {
    username: string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    firstName: string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    lastName: string()
        .max(20, 'Password must contain 20 characters or less')
        .required('Required'),
    city: string()
        .max(20, 'Password must contain 20 characters or less')
        .required('Required'),
}

export default () => {
    return (
        <div>
            <Layout>
                <h1>Account Page</h1>
                <Form
                    formName='account'
                    schema={object(schema)}
                    init={{
                        username: '',
                        firstName: '',
                        lastName: '',
                        city: '',
                    }}
                    button={'Submit'}
                    fields={[
                        {
                            label: 'Username',
                            name: 'username',
                            placeholder: 'Enter your username',
                            type: 'text',
                        }, {
                            label: 'First Name',
                            name: 'firstName',
                            placeholder: 'Enter your first name',
                            type: 'text',
                        },
                        {
                            label: 'Surname',
                            name: 'lastName',
                            placeholder: 'Enter your last name',
                            type: 'text',
                        },
                        {
                            label: 'City',
                            name: 'city',
                            placeholder: 'Enter your city',
                            type: 'text',
                        }
                    ]}
                />
            </Layout>
        </div>
    )
}

