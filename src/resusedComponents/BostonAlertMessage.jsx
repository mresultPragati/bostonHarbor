import { Alert, Snackbar } from "@mui/material";

export const BostonAlertMessage = (props) => {
  const { alertMsg, setAlertMsg } = props;

  const handleClose = () => {
    setAlertMsg({ msg: "", severity: "" });
  };

  return (
    <>
      {" "}
      <Snackbar
        open={alertMsg.msg}
        autoHideDuration={3000} // 3 seconds
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Position of the popup
      >
        <Alert
          onClose={handleClose}
          severity={alertMsg?.severity}
          sx={{ width: "100%" }}
        >
          {alertMsg?.msg}
        </Alert>
      </Snackbar>
    </>
  );
};
