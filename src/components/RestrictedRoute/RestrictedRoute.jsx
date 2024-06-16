import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

function RestrictedRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default RestrictedRoute;
