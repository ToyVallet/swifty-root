import { Navigation } from '@/app/components';
import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <Navigation>{children}</Navigation>;
}
