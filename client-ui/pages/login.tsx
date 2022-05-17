import {useRouter} from 'next/router';
import Login from '../containers/Login';
import useAuth from '../hooks/useAuth';

const Index = () => {
  const auth = useAuth();

  console.log('Login :', auth.currentUser);
  const router = useRouter();

  if (auth.isAuthenticated()) router.push('/');

  return <Login />;
};

export default Index;
