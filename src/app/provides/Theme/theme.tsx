import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiTable: {
			styleOverrides: {
				root: {
					width: 'calc(100% - 8px)',
					margin: 4,
					fontSize: 14,
					fontFamily: 'Roboto',
					fontWeight: 400,
					lineHeight: 1.3,
					letterSpacing: '0.1px',
					backgroundColor: 'rgba(32, 33, 36, 1)',
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					flexGrow: 1,
					padding: '0 12px',
					color: 'rgba(255, 255, 255, 1)',
					borderBottom: 'none'
				}
			}
		},
		MuiTableRow: {
			styleOverrides: {
				root: {
					display: 'grid',
					gridTemplateColumns: 'minmax(80px, 1fr) 7fr minmax(160px, 1fr) 2fr 2fr 2fr',
					padding: '19px 0px 20px',
					borderTop: '1px solid rgba(65, 65, 68, 1)'
				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					flexWrap: 'wrap',
					borderBottom: '1px solid rgba(65, 65, 68, 1)',
					'@media all': {
						minHeight: 44,
						paddingLeft: 12,
						paddingRight: 12,
					},
					color: 'rgba(161, 161, 170, 1)',
					backgroundColor: 'rgba(39, 39, 42, 1)'
				}
			}
		},
    MuiTab: {
      styleOverrides: {
        root: {
					color: 'rgba(161, 161, 170, 1)',
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
		background: {
			default: 'rgba(32, 33, 36, 1)',
		},
		divider: 'rgba(65, 65, 68, 1)',
	},
});

export default theme;
