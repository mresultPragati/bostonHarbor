import { Button } from "@mui/material";
import { BostonFileName } from "./AdvisorStyled";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

export const AdvisoryUsingFile = (props) => {
  const { assessmentFile, setAssessmentFile, financialFile, setFinancialFile } =
    props;

  const handleAssessmentFileChange = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setAssessmentFile(file);
    }
  };

  const handleFinancialFileChange = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setFinancialFile(file);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-start">
        <div style={{ marginRight: "1.5rem" }}>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            style={{ color: "#002a4a" }}
            tabIndex={-1}
            startIcon={<CloudUploadOutlinedIcon />}
          >
            Upload Assessment Document
            <input
              style={{ display: "none" }}
              accept=".doc,.docx,.pdf"
              type="file"
              onChange={(event) => {
                handleAssessmentFileChange(event);
              }}
              // multiple
            />
          </Button>
          <BostonFileName>{assessmentFile?.name}</BostonFileName>
        </div>
        <div style={{ marginRight: " 1.5rem" }}>
          <Button
            component="label"
            role={undefined}
            variant="outlined"
            style={{ color: "#002a4a" }}
            tabIndex={-1}
            startIcon={<CloudUploadOutlinedIcon />}
          >
            Upload Financial Document
            <input
              style={{ display: "none" }}
              accept=".doc,.docx,.pdf"
              type="file"
              onChange={(event) => {
                handleFinancialFileChange(event);
                console.log("file", event?.target?.files);
              }}
              // multiple
            />
          </Button>
          <BostonFileName>{financialFile?.name}</BostonFileName>
        </div>
      </div>
    </>
  );
};
