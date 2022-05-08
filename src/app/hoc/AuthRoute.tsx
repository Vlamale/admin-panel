import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "app/components/header";
import { useAppContext } from "app/hooks";

const PublicPage: React.FC = () => {
  const { isAuthorized } = useAppContext();
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default PublicPage;
