import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ResponsiveAppBar = () => {
  const router = useRouter();
  const [anchorElYear, setAnchorElYear] = React.useState(null);
  const currentYear = 2026;

  const years = [
    { year: 2023, url: 'https://brasileirao23.vercel.app/' },
    { year: 2024, url: 'https://brasileirao24.vercel.app/' },
    { year: 2025, url: 'https://brasileirao25.vercel.app/' },
    { year: 2026, url: 'https://brasileirao26.vercel.app/' },
  ];

  const navItems = [
    { label: 'Classificação', path: '/' },
    { label: 'Matriz de Resultados', path: '/resultados-matriz' },
    // { label: 'Raio-X', path: '/raio-x' }
  ];

  const handleYearMenuOpen = (event) => {
    setAnchorElYear(event.currentTarget);
  };

  const handleYearMenuClose = () => {
    setAnchorElYear(null);
  };

  const handleYearClick = (url) => {
    handleYearMenuClose();
    window.open(url, '_blank');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BRASILEIRÃO {currentYear}
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BRASILEIRÃO {currentYear}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref legacyBehavior>
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    textTransform: 'none',
                    borderBottom: router.pathname === item.path ? '2px solid white' : 'none',
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={handleYearMenuOpen}
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
              }}
            >
              📅 {currentYear}
            </Button>
            <Menu
              anchorEl={anchorElYear}
              open={Boolean(anchorElYear)}
              onClose={handleYearMenuClose}
            >
              {years.map((item) => (
                <MenuItem
                  key={item.year}
                  onClick={() => handleYearClick(item.url)}
                  sx={{
                    fontWeight: item.year === currentYear ? 'bold' : 'normal',
                    backgroundColor: item.year === currentYear ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                  }}
                >
                  {item.year} {item.year === currentYear ? '✓' : ''}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;