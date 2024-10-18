import { styled, TextareaAutosize } from "@mui/material";
import { useEffect, useState } from "react";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Use 'auto' for no smooth scrolling
  });
};

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

export const Textarea = styled(TextareaAutosize)(
  ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[600] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const isEmpty = (obj) => JSON.stringify(obj) === "{}";

// Function to calculate totals
export const calculateTotals = (key, list) => {
  return list
    .reduce((total, row) => total + parseFloat(row[key] || 0), 0)
    ?.toFixed(2);
};

export const getUSTime = () => {
  const currentDate = new Date();
  const options = {
    timeZone: "America/New_York", // Set timezone to US Eastern Time
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };
  return currentDate.toLocaleString("en-US", options);
};

export const USTimezone = () => {
  const [currentTime, setCurrentTime] = useState(getUSTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getUSTime());
    }, 1000); // Update every second (adjust this interval as needed)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return currentTime;
};
