import DashboardSideBar from 'components/DashboardSideBar';
import {useRouter} from 'next/router';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!auth.isAuthenticated()) router.push('/');
  // }, [auth.isAuthenticated()]);

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar />
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
