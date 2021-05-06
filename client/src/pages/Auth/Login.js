import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { useHistory  } from "react-router-dom";
import Notification from '../../helpers/Notifications'
import { Form, Input, Button} from 'antd';
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

function Login() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const auth = useSelector((state)=>state.auth);
    
    let history = useHistory();

    // useEffect(() => {
    //     if(auth.loading){
    //         Notification("User Login In Process","");
    //     }else{
    //         form.resetFields();
            
    //     }

    // }, [auth.loading])

    useEffect(()=>{

        if(auth.user.email){
            console.log(auth.user)
            if(auth.user.role == 1){
                history.push('/admin')
            }else{
                history.push('/')
            }
        }
    },[auth.user]);

    const onFinish = (values) => {
        dispatch(login(values));
    };

    return (
        <Card
            style={{ marginTop:'50px' }}
        >
            <Form
                {...formItemLayout}
                form={form}
                name="login"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="username"
                    label="E-mail & Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your E-mail Or Username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
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

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login
