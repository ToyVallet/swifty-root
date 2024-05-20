'use client';

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

import styles from './login.module.css';

type FieldType = {
  formId?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  const res = await fetch('http://52.79.165.249:8000/user/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  const data: {
    accessToken: string;
    refreshToken: string;
  } = await res.json();
  // 쿠키에 token 값 모두 저장 Next애서 만들어서 관리
  // middleware에서 쿠키로 파악하여 /login, / 라우트 관리
  // fetch 요청 분리
  console.log(data);
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (
  errorInfo,
) => {
  console.log('Failed:', errorInfo);
};

export default function Page() {
  return (
    <main className={styles.main}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="아이디"
          name="formId"
          rules={[{ required: true, message: '아이디를 입력하세요' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="패스워드"
          name="password"
          rules={[{ required: true, message: '패스워드를 입력하세요' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
