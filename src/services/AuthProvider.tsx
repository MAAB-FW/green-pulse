import { auth } from "@/firebase/firebase.config";
import { setRole } from "@/redux/features/user/roleSlice";
import { setUser } from "@/redux/features/user/userSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NEXT_PUBLIC_API_URL } from "../../env";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const { email } = useSelector((state: RootState) => state.userSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email) {
      const getUserRoleType = async () => {
        const { data } = await axios(
          `${NEXT_PUBLIC_API_URL}/api/users/${email}`
        );
        return dispatch(setRole(data));
      };
      getUserRoleType();
    }
  }, [dispatch, email]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            _id: user.uid,
            name: user.displayName || "",
            email: user.email || "",
            isLoading: false,
            isError: false,
            error: "",
          })
        );
      }
    });
  }, [dispatch]);
  return children;
};

export default AuthProvider;
