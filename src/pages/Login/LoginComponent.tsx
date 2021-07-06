/* eslint-disable no-console */
import React from 'react';
import { Layout, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

import s from './Login.module.scss';
import MessageComponent from '../../components/Message';

const { Content } = Layout;

interface IProps {
	onFinish: (event: any) => void
	onFinishFailed: (event: any) => void
	message: string
}

type DataType = {
	email: string
	password: string
	// onFinish: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginComponent: React.FC<IProps> = ({
		onFinish, 
		onFinishFailed, 
		message
	}) => {
		
	return (
		<Layout>
			<Content>
				<div className={s.login}>
					<div className={s.login__form_wrap}>
						<Form<DataType>
							name="basic"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							initialValues={{ remember: true }}
							onFinish={onFinish }
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: 'Please input your email!' }]}
							>
							<Input />
						</Form.Item>
							<Form.Item
							label="Password"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
							>
							<Input.Password />
							</Form.Item>

							<Form.Item 
								wrapperCol={{ offset: 8, span: 5 }}
							>
							<Button 
								type="primary" 
								htmlType="submit"
							>
								Submit
							</Button>
							</Form.Item>
						</Form>
						{
							message && <MessageComponent 
								color="error"
							>{message}</MessageComponent>
						}
					</div>
				</div>
			</Content>
		</Layout>
	)
}

export default LoginComponent;