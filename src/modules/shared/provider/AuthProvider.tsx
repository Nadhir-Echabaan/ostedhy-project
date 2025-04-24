import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialise } from "../../auth/data/authSlice";
import LazyLoad from "../components/LazyLoad/LazyLoad";
import useIsMounted from "../hook/useIsMountedRef";
import { clearTokens } from "../utils/token";
import { RootState } from "../store";
import { useGetUserQuery } from "../../auth/data/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: userData, error, isLoading } = useGetUserQuery({});
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const { isInitialised } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isMounted.current || isInitialised || isLoading) return;

    if (userData) {
      dispatch(initialise({ isAuthenticated: true, user: userData.user }));
    } else if (error) {
      dispatch(initialise({ isAuthenticated: false, user: null }));
      clearTokens();
    }
  }, [userData, error, isInitialised, isMounted, isLoading, dispatch]);

  if (!isInitialised) { 
    return <LazyLoad />;
  }

  return <>{children}</>;
};

export default AuthProvider;
