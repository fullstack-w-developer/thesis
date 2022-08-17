import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex-1 hidden lg:flex justify-end">
      <Tooltip title="تنظیمات کاربری">
        <div children="!flex ">
          <IconButton onClick={handleClick} size="medium">
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#f78fb3",
              }}
            >
              M
            </Avatar>
          </IconButton>
        </div>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter:
              "drop-shadow(0px 0px 4px rgba(0,0,0,0.22))",
            mt: 1,

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <div className="flex items-center cursor-pointer px-4">
          <Avatar className="!w-9 !h-9" />
          <p className="yekanBold text-xs px-3">
            مهدی شریفلو
          </p>
        </div>
        <Link to="/auth">
          <div className="flex items-center mt-5 mb-2 cursor-pointer justify-around ">
            <Logout className="!w-5 !h-5" />

            <p className="yekanBold text-xs px-3">خروج</p>
          </div>
        </Link>
      </Menu>
    </div>
  );
};

export default HeaderLeft;
