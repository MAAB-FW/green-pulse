import { auth } from "@/firebase/firebase.config";
import { setUser } from "@/redux/features/user/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const dispatch = useDispatch();
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
