import React, { useState } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close
} from '@mui/icons-material';
import CentralizeItems from './components/CentralizeItems';

function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  //const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  //const fullName = `${user.firstname} ${user.lastname}`;
  const fullName = `Ajijola Fauziya`;

  return (
    <CentralizeItems padding='1rem 6%' backgroundColor={alt}>
      <CentralizeItems gap="1.75rem">
        <Typography fontWeight='bold' fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer"
            }
          }}
        >
          YusZiya
        </Typography>
        {isNonMobileScreens && (
          <CentralizeItems backgroundColor={alt} borderRadius={"9px"}
            gap={'3rem'} padding={'0.1rem 1.5rem'}
          >
            <InputBase placeholder='Search...' />
            <IconButton>
              <Search />
            </IconButton>
          </CentralizeItems>
        )}
      </CentralizeItems>
      {/* DESKTOP NAV */}
      {isNonMobileScreens ?
        (
          <CentralizeItems gap={'2rem'}>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (<LightMode sx={{ color: dark, fontSize: "25px" }} />)}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant='standard' value={fullName} >
              <Select value={fullName}
                sx={{
                  backgroundColor: alt,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select: focus": {
                    backgroundColor: alt
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>

                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </CentralizeItems>) :
        (<IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>)}


      {/* mobile nav */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position={'fixed'}
          right={'0'}
          bottom={'0'}
          height={'100%'}
          zIndex={'10'}
          maxWidth={'500px'}
          minWidth={'300px'}
          backgroundColor={background}
        >
          <Box display={"flex"} justifyContent={'flex-end'} p={'1rem'}>
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* menu items */}
          <CentralizeItems display="flex" flexDirection={'column'}
            justifyContent={'center'} alignContent={'center'} gap={'3rem'}>

            <IconButton onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (<LightMode sx={{ color: dark, fontSize: "25px" }} />)}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant='standard' value={fullName} >
              <Select value={fullName}
                sx={{
                  backgroundColor: alt,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem"
                  },
                  "& .MuiSelect-select: focus": {
                    backgroundColor: alt
                  }
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>

                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </CentralizeItems>

        </Box>
      )}
    </CentralizeItems>
  )
}

export default Navbar;