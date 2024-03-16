import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, Slide } from "@mui/material";

const CustomSnackBar = ({ open, setOpen, stateColor, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {/* <Snackbar
        open={open}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        autoHideDuration={1000}
        onClose={handleClose}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
        message="Note archived"
        action={action}
        sx={{ marginTop: "50px", marginRight: "-10px" }}
      >
        <Alert
          onClose={handleClose}
          severity={stateColor}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar> */}
    </div>
  );
};

export default CustomSnackBar;
