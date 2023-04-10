import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    // Render your custom error component here
    return (
      <Grid container item xs={12} height={"50vh"}>
        <Grid
          item
          sx={{
            display: "grid",
            placeItems: "center",
          }}
          xs={12}
        >
          <Typography variant="h4">Something went wrong</Typography>
          {/* <details style={{ whiteSpace: "pre-wrap" }}>
          {error && error.toString()}
          <br />
          {errorInfo && errorInfo.componentStack}
        </details> */}
        </Grid>
      </Grid>
    );
  }

  return props.children;
}

export default ErrorBoundary;
