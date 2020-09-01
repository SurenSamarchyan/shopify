import React from 'react';
import Navigation  from "./component/Navigation";
import Top from "./component/Top";
import {AppProvider} from '@shopify/polaris'
import '@shopify/polaris/dist/styles.css';

function App() {
	
	
	
	return (
		<div >
			<AppProvider >
				<Top/>
				<Navigation/>
			</AppProvider>
		</div>
	)
}

export default App;
