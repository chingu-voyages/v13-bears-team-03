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

