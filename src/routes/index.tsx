import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

function Routes() {
  const { user, userStorageLoading } = useAuth();

  if (userStorageLoading) {
    return null;
  }

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
