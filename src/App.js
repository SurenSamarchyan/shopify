import React from 'react';
import Navigation from "./component/Navigation";
import TopBarHomePage from "./component/TopBarHomePage";
import {AppProvider} from '@shopify/polaris'
import '@shopify/polaris/dist/styles.css';


function App() {
	return (
			<AppProvider>
				<TopBarHomePage/>
			</AppProvider>
	)
}

export default App;
