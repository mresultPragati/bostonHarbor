import { Grid2, TextField } from "@mui/material";

export const DividendForm = ({ selectedOwnership, formData, setFormData }) => {
  return (
    <div>
      <>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <TextField
              label="Investment Amount"
              value={formData?.investmentAmount}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  investmentAmount: e.target.value,
                })
              }
              fullWidth
              margin="normal"
              variant="standard"
              type="number"
            />
          </Grid2>
          <Grid2 item size={{ md: 1 }} />
          <Grid2 item size={{ xs: 12, md: 4 }}>
            <TextField
              sx={{
                "& .Mui-disabled": {
                  WebkitTextFillColor: "black",
                },
              }}
              label="Dividend Yield (%)"
              //   defaultValue={0}
              value={formData.dividendYield?.toFixed(2)}
              // onChange={(e) => setDividendYield(e.target.value)}

              fullWidth
              margin="normal"
              variant="standard"
              type="number"
              disabled
            />
          </Grid2>
        </Grid2>
      </>
    </div>
  );
};
