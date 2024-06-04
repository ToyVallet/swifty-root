'use server';

import { deleteCookie } from '@/app/lib/cookies';
import { COOKIE_KEYS } from '@constant';
import { RedirectType, redirect } from 'next/navigation';

export const checkStatusForRefreshToken = async (status: number) => {
  if (status === 401) {
    // refrech token 만료시 login으로 redirect 및 쿠키 삭제
    await deleteCookie(COOKIE_KEYS.accessToken);
    await deleteCookie(COOKIE_KEYS.refreshToken);
    redirect('/login', RedirectType['replace']);
  }
};
