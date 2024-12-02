import { redirect } from 'next/navigation';
import { Home } from './home';
import { getUser } from '@/lib/db/queries';

export default async function SettingsPage() {
  const user = await getUser();

  if (!user) {
    redirect('/sign-in');
  }

  return <Home user={user} />;
}
