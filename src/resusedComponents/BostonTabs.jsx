import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box, Typography } from "@mui/material";
import { a11yProps } from "./constant/ResusableConst";

const BostonTabs = ({ children, tabList }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          className="mb-3"
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx={{
            "& .MuiTab-root": {
              minWidth: 100,
              textTransform: "none",
              color: "#757575",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px 5px 0 0",
              border: "3px solid #007bff",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            },
            "& .Mui-selected": {
              color: "#007bff",
              backgroundColor: "#ffffff",
              border: "3px solid #007bff",
              borderBottom: "none",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
          }}
        >
          {tabList?.map((tab, index) => {
            return <Tab label={tab} {...a11yProps(index)} />;
          })}
        </Tabs>
      </AppBar>

      <Box p={3}>
        {React.Children.map(children, (child, index) =>
          index === value ? child : null
        )}
      </Box>
    </div>
  );
};

export default BostonTabs;
