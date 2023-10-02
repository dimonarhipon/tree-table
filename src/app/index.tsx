import './styles';
import { ThemeProvider } from '@mui/material';
import { muiTheme } from './provides/Theme';
import Layout from '../components/Layout';

function App() {
	return (
		<ThemeProvider theme={muiTheme}>
			<Layout />
		</ThemeProvider>
	);
}

export default App;
