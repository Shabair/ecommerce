import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../../redux/actions/admin/products'
import { Form, Input, Button, Upload, Card } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import slugify from 'slugify'

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

function AddProduct() {
    const { TextArea } = Input;

    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        dispatch(addProduct(values));
    };

    const createSlug = (e) => {
        const _slug = slugify(e.target.value)
        form.setFieldsValue({ slug: _slug });
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
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please Input Product Title!',
                        },
                    ]}
                >
                    <Input onChange={createSlug} />
                </Form.Item>

                <Form.Item
                    name="slug"
                    label="Slug"
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
                    name="description"
                    label="Description"
                    rules={[
                        {
                            whitespace: true,
                        },
                    ]}
                >
                    <TextArea rows={4} />
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Add Product
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default AddProduct
