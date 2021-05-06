import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/auth'
import { useHistory  } from "react-router-dom";
import { isUniqueEmail } from '../../helpers/index'

import Notification,{ErrorNotification} from '../../helpers/Notifications'
import { Form, Input, Button, Select } from 'antd';
import { Card } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const { Option } = Select;

const initialFieldsValues = {
    email: { status: null, msg: null },
    username: { status: null, msg: null },
    fname: { status: null, msg: null },
    lname: { status: null, msg: null },
    password: { status: null, msg: null },
    cpassword: { status: null, msg: null },
    gender: { status: null, msg: null },
    phone: { status: null, msg: null }
}

function Signup() {
    let history = useHistory();
    const [form] = Form.useForm();

    const dispatch = useDispatch();

    const registerUser = useSelector((state) => state.auth.createUser);
    // this use for server side validation
    const [formFieldsValidation, setFormFieldsValidation] = useState(initialFieldsValues);

    useEffect(() => {
        if (Object.entries(registerUser.errors).length !== 0) {
            let temp = { ...formFieldsValidation };

            for (let i = 0; i < registerUser.errors.length; i++) {
                let key = registerUser.errors[i].param;
                temp[key] = {
                    status: 'error',
                    msg: registerUser.errors[i].msg
                }
            }

            setFormFieldsValidation(temp);
            //error notification
            //Notification("There are errors", "");
        } else {
            setFormFieldsValidation(initialFieldsValues);
        }
    }, [registerUser.errors])

    useEffect(() => {
        if (Object.entries(registerUser.user).length !== 0 && registerUser.loading) {
            history.push("/");
            
            form.resetFields();
            Notification("User Successfully Registered!", `Email: ${registerUser.user.email}`)
        }
    }, [registerUser.user])

    const onFinish = (values) => {
        dispatch(createUser(values));
    };

    const onFinishFailed = () => {
        ErrorNotification('Fill Form Correctly')
    }

    const onclickee = () => {
        setFormFieldsValidation({
            ...formFieldsValidation,
            username: { status: 'error', msg: 'validation success' }
        });
    }

    return (
        <Card
            style={{ marginTop: '50px' }}
        >
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    prefix: '0300',
                }}
                scrollToFirstError
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    validateStatus={formFieldsValidation.email.status || form.validateStatus}
                    help={formFieldsValidation.email.msg}
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ({ getFieldValue }) => ({
                            async validator(_, value) {
                                try {
                                    const _checkEmail = await isUniqueEmail(value);
                                    return Promise.resolve();

                                } catch (error) {

                                    if (error.response.data.error) {

                                        return Promise.reject(new Error(error.response.data.error));
                                    } else {
                                        return Promise.reject(new Error(`${error.response.status} ${error.response.statusText}`));
                                    }
                                }

                            },
                        }),
                    ]}
                >
                    <Input allowClear />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Username"
                    tooltip="Enter a unique Username!"
                    validateStatus={formFieldsValidation.username.status || form.validateStatus}
                    help={formFieldsValidation.username.msg}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="fname"
                    label="First Name"
                    validateStatus={formFieldsValidation.fname.status || form.validateStatus}
                    help={formFieldsValidation.fname.msg}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First Name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lname"
                    label="Last Name"
                    validateStatus={formFieldsValidation.lname.status || form.validateStatus}
                    help={formFieldsValidation.lname.msg}
                    rules={[
                        {
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    validateStatus={formFieldsValidation.password.status || form.validateStatus}
                    help={formFieldsValidation.password.msg}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="cpassword"
                    label="Confirm Password"
                    validateStatus={formFieldsValidation.cpassword.status || form.validateStatus}
                    help={formFieldsValidation.cpassword.msg}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    validateStatus={formFieldsValidation.gender.status || form.validateStatus}
                    help={formFieldsValidation.gender.msg}
                    rules={[{ required: true }]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    validateStatus={formFieldsValidation.phone.status || form.validateStatus}
                    help={formFieldsValidation.phone.msg}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

                <Form.Item shouldUpdate {...tailFormItemLayout}>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Sign Up
                        </Button>
                    )}
                </Form.Item>

                <Form.Item label="Button">
                    <Button onClick={onclickee}>Button</Button>
                </Form.Item>

            </Form>
        </Card>
    )
}

export default Signup
