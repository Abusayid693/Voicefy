import {useRouter} from 'next/router';
import {useEffect} from 'react';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated()) router.push('/');
  }, [auth.isAuthenticated()]);

  return (
    <>
      {auth.isAuthenticated() ? (
        <h1>This is dashboard </h1>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
