import { TextField } from "@mui/material";

export const ClientForm = (props) => {
  const { handleInputChange, formData } = props;
  console.log("clientDetail", formData);

  return (
    <>
      <div className="row mb-3">
        <div className="col-6">
          <TextField
            variant="standard"
            label="Client Name"
            name="clientName"
            value={formData?.clientName}
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
            value={formData?.clientMoNo}
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
            value={formData?.clientAge}
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
            value={formData?.coClientName}
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
            value={formData?.coMobileNo}
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
            value={formData?.coClientAge}
            onChange={(e) => handleInputChange(e)}
            fullWidth
            // required
          />
        </div>
      </div>
    </>
  );
};
