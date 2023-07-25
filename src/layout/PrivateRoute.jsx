import { Navigate } from 'react-router-dom';
import { useGlobalContext } from '../Context/AppContext';
const PrivateRoute = ({ children }) => {
  const { user } = useGlobalContext();

  if (!user) return <Navigate to="/auth" />;
  return <div>{children}</div>;
};

export default PrivateRoute;
