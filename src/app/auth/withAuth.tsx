import { useEffect } from 'react';


const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        window.location.href = '/auth/login';
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;