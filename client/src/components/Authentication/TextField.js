import React from 'react'
import Form from 'react-bootstrap/Form'
import { useField } from 'formik'

export default ({ children, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Form.Group controlId={props.id || props.name}>
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    {...field}
                    {...props}
                    isInvalid={meta.touched && meta.error}
                />
                <Form.Control.Feedback type="invalid">
                    {meta.error}
                </Form.Control.Feedback>
                {children}
            </Form.Group>
        </>
    );
};