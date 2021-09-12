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
	handleInputField: (event: React.ChangeEvent<HTMLInputElement>) => void
	message: string
	formValid: boolean
	validateStatus: any
	formError: ({
		[key: string] : string 
	})
}

type DataType = {
	email: string
	password: string
	onFinish: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginComponent: React.FC<IProps> = ({
		onFinish, 
		onFinishFailed,
		handleInputField, 
		message,
		validateStatus,
		// formError,
		formValid
	}) => {
		
	// const validStat = `${validateStatus}` as keyof JSX.IntrinsicAttributes
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
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
						>
							<Form.Item
								label="Email"
								name="email"
								id={validateStatus.email}
								validateStatus={validateStatus.email}
								// help={formError.email}
								hasFeedback
								rules={[{ 
									required: true,
									type: "email",
									message: 'Please input your email!' }]}
							>
								<Input type="email" onChange={handleInputField}/>
							</Form.Item>
							<Form.Item
								label="Password"
								name="password"
								validateStatus={validateStatus.password}
								// help={formError.password}
								id={validateStatus.password}
								hasFeedback
								rules={[{ 
									required: true,
									message: 'Please input your password!' }]}
							>
							<Input.Password onChange={handleInputField}/>
							</Form.Item>

							<Form.Item 
								wrapperCol={{ offset: 8, span: 5 }}
							>
							<Button 
								disabled={!formValid && true }
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