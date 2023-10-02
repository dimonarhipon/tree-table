import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiToolbar: {
			styleOverrides: {
				root: {
					color: 'rgba(161, 161, 170, 1)',
				}
			}
		},
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'rgba(255, 255, 255, 1)',
          },
        },
      },
    },
		MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
    },
		MuiAccordion: {
      styleOverrides: {
        root: {
					backgroundColor: 'rgba(39, 39, 42, 1)',
					color: 'rgba(161, 161, 170, 1)',
          '&, & *': {
            margin: 0,
            padding: 0,
          }
        }
      }
    },
		MuiAccordionSummary: {
      styleOverrides: {
        content: {
          '&.Mui-expanded': {
            margin: 0
          }
        }
      }
    },
		MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(32, 33, 36, 1)',
        },
      },
    },
		MuiList: {
      styleOverrides: {
        root: {
					color: 'rgba(255, 255, 255, 1)',
          backgroundColor: 'rgba(39, 39, 42, 1)',
        },
      },
    },
		MuiListItemIcon: {
      styleOverrides: {
        root: {
					color: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  },
	palette: {
		primary: {
			main: 'rgba(39, 39, 42, 1)',
		},
		secondary: {
			main: 'rgba(120, 144, 178, 1)',
		},
		text: {
			primary: 'rgba(161, 161, 170, 1)',
			secondary: 'rgba(161, 161, 170, 1)'
		},
		background: {
			default: 'rgba(32, 33, 36, 1)',
		},
		divider: 'rgba(65, 65, 68, 1)',
	},
});

export default theme;
