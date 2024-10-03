import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

// position: fixed;
// /* border: solid 1px; */
// /* z-index: 1000000; */
// box-shadow: 2px -1px 10px -4px;
// width: 16rem;
// }

export const BostonSearch = ({
  setSelectedObj,
  width,
  filterFields,
  listArray,
  label,
  primaryValue,
  secondary,
  secondaryName,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      setSelectedObj({});
      setIsSuggestionOpen(false);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    const { value } = event.target;

    setSearchTerm(value);
    setIsSuggestionOpen(true);

    if (value) {
      const filtered = listArray?.filter?.((item) =>
        filterFields.some((field) => {
          // Dynamically access nested fields
          const fieldValue = field
            .split(".")
            .reduce((acc, part) => acc && acc[part], item);
          return fieldValue?.toLowerCase().includes(value.toLowerCase());
        })
      );

      setFilteredList(filtered);
    } else {
      setFilteredList(listArray); // Show all clients when no search term
      // setSelectedObj({});
      // setIsSuggestionOpen(false);
    }
  };

  const handleSearchText = (item) => {
    setIsSuggestionOpen(false);
    setSearchTerm(accessField(item, primaryValue));
    setSelectedObj(item);
  };

  const accessField = (object, fieldPath) => {
    return fieldPath.split(".").reduce((acc, part) => acc && acc[part], object);
  };

  return (
    <>
      <div>
        <TextField
          variant="standard"
          label={label}
          name="clientName"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          className={`w-${width ? width : 100}`}
          autoComplete="off"
        />
        <div
          className="d-flex justify-content-center"
          style={{ position: "relative" }}
        >
          {filteredList?.length > 0 && isSuggestionOpen && (
            <Paper
              className={`w-${width ? width : 100}`}
              style={{
                position: "absolute", // Overlay without shifting other content
                top: "100%", // Position right below the TextField
                zIndex: 1000, // Ensure it is above other elements
                marginTop: "5px",
                maxHeight: "200px",
                overflow: "auto",
                backgroundColor: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a shadow for emphasis
              }}
            >
              <List>
                {filteredList?.map((item, ind) => (
                  <ListItem
                    button
                    onClick={() => handleSearchText(item)}
                    key={ind}
                  >
                    <ListItemText
                      primary={accessField(item, primaryValue)}
                      secondary={
                        secondary
                          ? `${secondaryName}: ${item?.[secondary]}`
                          : ""
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </div>
      </div>
    </>
  );
};
