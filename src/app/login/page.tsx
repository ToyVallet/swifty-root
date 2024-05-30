'use client';

import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

import styles from './login.module.css';

type FieldType = {
  formId?: string;
  password?: string;
};

export default function Page() {
  const router = useRouter();
  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    try {
      const res = await fetch('https://dpi.swifty.kr/user/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
      });

      const data: {
        accessToken: string;
        refreshToken: string;
      } = await res.json();

      console.log(data);

      /*       // 쿠키 생성
      await createCookie({
        name: COOKIE_KEYS.accessToken,
        value: data.accessToken,
        option: {
          maxAge: 60 * 60 * 24 * 7, // 일주일
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        },
      });
      await createCookie({
        name: COOKIE_KEYS.refreshToken,
        value: data.refreshToken,
        option: {
          maxAge: 60 * 60 * 24 * 30, //한달
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
        },
      }); */

      router.replace('/');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }

    // 쿠키에 token 값 모두 저장 Next애서 만들어서 관리
    // middleware에서 쿠키로 파악하여 /login, / 라우트 관리
    // fetch 요청 분리
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = async (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };

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
