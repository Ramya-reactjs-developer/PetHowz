import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedLayout({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedLayout;
