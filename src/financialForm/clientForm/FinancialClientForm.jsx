import { TextField } from "@mui/material";

export const ClientForm = (props) => {
  const { handleInputChange, formData } = props;
  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <TextField
            variant="standard"
            label="Client Name"
            name="clientName"
            value={formData?.clientDetail?.clientName}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            required
          />
        </div>
        <div className="col-4">
          <TextField
            label="Mobile No."
            variant="standard"
            name="clientMoNo"
            value={formData?.clientDetail?.clientMoNo}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            required
          />
        </div>
        <div className="col-2">
          <TextField
            label="Age"
            variant="standard"
            name="clientAge"
            value={formData?.clientDetail?.clientAge}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <TextField
            variant="standard"
            label=" Co-Client Name "
            name="coClientName"
            value={formData?.clientDetail?.coClientName}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            // required
          />
        </div>
        <div className="col-4">
          <TextField
            label="Mobile No."
            variant="standard"
            name="coMobileNo"
            value={formData?.clientDetail?.coMobileNo}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            // required
          />
        </div>
        <div className="col-2">
          <TextField
            label="Age"
            variant="standard"
            name="coClientAge"
            value={formData?.clientDetail?.coClientAge}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            // required
          />
        </div>
      </div>
    </>
  );
};
