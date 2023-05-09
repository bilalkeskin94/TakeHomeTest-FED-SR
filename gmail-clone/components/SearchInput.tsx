import { useState } from "react";
import { InputBase, IconButton, Popover, Paper } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const SearchInput: React.FC = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  return (
    <div className="relative">
      <div className="absolute inset-y-0 z-10 flex items-center pl-2">
        <SearchIcon className="text-gray-500" />
      </div>
      <InputBase
        placeholder="Search mail"
        className="pl-10 pr-4 py-3 w-full bg-white rounded-lg focus:outline-none focus:bg-white"
        inputProps={{ "aria-label": "search mail" }}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-2">
        <IconButton
          aria-describedby={id}
          onClick={handlePopoverOpen}
          className="hover:bg-gray-200 rounded-md focus:outline-none"
        >
          <div className="flex items-center justify-center h-6 w-6">
            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="ml-1 w-2 h-2 rounded-full bg-gray-700"></div>
            <div className="ml-1 w-2 h-2 rounded-full bg-gray-700"></div>
          </div>
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Paper className="p-4 max-w-xs">
            <div className="flex flex-col gap-3">
              <InputBase
                placeholder="From"
                className="border-b-2 border-gray-300"
              />
              <InputBase
                placeholder="To"
                className="border-b-2 border-gray-300"
              />
              <InputBase
                placeholder="Subject"
                className="border-b-2 border-gray-300"
              />
              <InputBase
                placeholder="Has the words"
                className="border-b-2 border-gray-300"
              />
              <InputBase
                placeholder="Doesn't have"
                className="border-b-2 border-gray-300"
              />
            </div>
          </Paper>
        </Popover>
      </div>
    </div>
  );
};

export default SearchInput;
