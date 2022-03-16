import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (<>
     <Divider />
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Box
           display={'flex'}
           justifyContent={'space-between'}
           alignItems={'center'}
           width={1}
           flexDirection={{ xs: 'column', sm: 'row' }}
        >

          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >

             <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
                    : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
                }
                height={1}
                width={1}
             />
          </Box>
          <Box alignItems={'center'} flexWrap={'wrap'} display="flex">
             <Box  marginTop={1} marginRight={2}>
             <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                About Us
              </Link>
             </Box>
             <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/docs/introduction"
                color="text.primary"
                variant={'subtitle2'}
              >
                Documentation
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                // href="https://mui.com/store/items/the-front-landing-page/"
                size="small"
              >
                Purchase now
              </Button>
            </Box>
          </Box>

        </Box>
      </Grid>
      <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="text.secondary"
        gutterBottom
      >
      &copy; AppTiks. 2021,  All rights reserved
      </Typography>
      </Grid>
      
      
      </Grid>
   
  </>);
};

export default Footer;
