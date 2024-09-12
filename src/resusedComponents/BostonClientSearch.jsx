import { List, ListItem, ListItemText, Paper, TextField } from "@mui/material";
import { useState } from "react";

export const BostonClientSearch = ({ setSelectedClient, width }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);
  const [isSuggestionOpen, setIsSuggestionOpen] = useState(false);

  const clientList = JSON?.parse?.(localStorage?.getItem?.("financialForm"));

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setIsSuggestionOpen(true);
    // Filter clients based on name or id
    const filtered = clientList?.filter?.(
      (client) =>
        client?.clientDetail?.clientName
          ?.toLowerCase()
          .includes(value.toLowerCase()) ||
        client?.uniqueId?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <>
      <div>
        <TextField
          variant="standard"
          label="Name Of Client"
          name="clientName"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          className={`w-${width ? width : 100}`}
          autoComplete="off"
        />
        <div className="d-flex justify-content-center">
          {filteredClients.length > 0 && isSuggestionOpen && (
            <Paper
              className={`w-${width ? width : 100}`}
              style={{
                marginTop: "10px",
                maxHeight: "200px",
                overflow: "auto",
              }}
            >
              <List>
                {filteredClients?.map((client) => (
                  <ListItem
                    button
                    onClick={() => {
                      setIsSuggestionOpen(false);
                      setSearchTerm(client?.clientDetail?.clientName);
                      setSelectedClient(client);
                    }}
                    key={client?.uniqueId}
                  >
                    <ListItemText
                      primary={client?.clientDetail?.clientName}
                      secondary={`ID: ${client?.uniqueId}`}
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
