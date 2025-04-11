"user client";
import store from "@/redux/store";
import { Provider } from "react-redux";

import { ReactNode } from "react";
import AuthProvider from "./AuthProvider";

const ReduxProvider = ({
  children,
}: {
  children: ReactNode;
}): React.ReactNode => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default ReduxProvider;
