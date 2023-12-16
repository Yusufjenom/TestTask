import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  FormControl,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu,
  Close
} from '@mui/icons-material';
import CentralizeItems from './components/CentralizeItems';

function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const dark = theme.palette.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;


  const fullName = `Dauda Yusuf Test`;

  return (
    <CentralizeItems padding='1rem 6%' backgroundColor={alt}>
      <CentralizeItems gap="1.75rem">
        <Typography fontWeight='bold' fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer"
            }
          }}
        >
          Dauda Yusuf Test
        </Typography>

      </CentralizeItems>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ?
        (
          <CentralizeItems gap={'2rem'}>
            <FormControl variant='standard' value={fullName} >

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


          </CentralizeItems>

        </Box>
      )}
    </CentralizeItems>
  )
}

export default Navbar;