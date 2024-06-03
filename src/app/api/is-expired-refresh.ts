'use server';

import { RedirectType, redirect } from 'next/navigation';

export const isExpiredRefresh = (response: Response) => {
  if (response.status === 401) {
    // refrech token 만료시 login으로 redirect
    redirect('/login', RedirectType['replace']);
  }
};
