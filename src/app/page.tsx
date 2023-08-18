import AuthGuardRouteRedirect from './components/PrivateRoute/AuthGuardRouteRedirect';

export default function Home() {
  return <AuthGuardRouteRedirect />;
}
