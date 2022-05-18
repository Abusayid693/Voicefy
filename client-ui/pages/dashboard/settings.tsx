import DashboardSideBar from 'components/DashboardSideBar';
import {useRouter} from 'next/router';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!auth.isAuthenticated() && !auth.loading) router.push('/');
  // }, [auth.isAuthenticated(), auth.loading]);

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={4}>
          <h1>Please first login</h1>
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
