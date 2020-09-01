import React, {useState, useCallback} from "react";
import {TopBar} from  '@shopify/polaris'

function Top() {
	const [isSearchActive, setIsSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	
	const handleSearchResultsDismiss = useCallback(() => {
		setIsSearchActive(false);
		setSearchValue('');
	}, []);
	const handleSearchChange = useCallback((value) => {
		setSearchValue(value);
		setIsSearchActive(value.length > 0);
	}, []);
	
	const topBarMarkup = (
		<TopBar
			onSearchResultsDismiss={handleSearchResultsDismiss}
		/>
	)
	
	return (
		topBarMarkup
	)
	
}

export default Top;