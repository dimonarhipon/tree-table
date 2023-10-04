import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiCircularProgress: {
			styleOverrides: {
				root: {
					color: 'rgba(255, 255, 255, 1)',
					display: 'block',
					margin: '0 auto',
				}
			}
		},
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
		MuiInputBase: {
			styleOverrides: {
				root: {
					padding: '7px 10px',
					color: 'rgba(113, 113, 122, 1)',
					borderRadius: 6,
					border: '1px solid rgba(65, 65, 68, 1)',

					input: {
						padding: 0,
						fontFamily: 'Roboto, Arial',
						fontSize: 14,
						fontStyle: 'normal',
						fontWeight: 400,
						lineHeight: 1.3,
						letterSpacing: 0.1,
					},
				}
			}
		},
		MuiInput: {
			styleOverrides: {
				root: {
					padding: 0,
				}
			}
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					flexGrow: 1,
					padding: '0 12px;',
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
					alignContent: 'center',
					alignItems: 'center',
					padding: '11px 0px 12px',
					borderTop: '1px solid rgba(65, 65, 68, 1)'
				}
			}
		},
		MuiButtonGroup: {
			styleOverrides: {
				root: {
					borderRadius: 6,
					transition: '0.5s ease',
					'&:hover': {
            backgroundColor: 'rgba(65, 65, 68, 1)',
						transition: '0.5s ease',
          },

          '&.Mui-focused': {
            backgroundColor: 'rgba(65, 65, 68, 1)',
						transition: '0.5s ease',
          },
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: '4px',
					'&:hover, &.Mui-focusVisible, &:focus': {
						backgroundColor: 'rgba(255, 255, 255, 1)',
					}
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
		info: {
			main: 'rgba(65, 65, 68, 1)',
		}
	},
});

export default theme;
