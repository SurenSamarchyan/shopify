import React, {useCallback, useState} from 'react';
import {ActionList, AppProvider, Card, Frame, Icon, Navigation, TopBar, VisuallyHidden} from '@shopify/polaris';
import {
	AnalyticsMajorMonotone, AppsMajorMonotone,
	ArrowLeftMinor, CashDollarMajorMonotone, ChatMajorMonotone,
	QuestionMarkMajorTwotone,
	ReferralMajorMonotone, SettingsMajorMonotone,
	StoreMajorMonotone, TeamMajorMonotone, VocabularyMajorMonotone
} from '@shopify/polaris-icons';
import "@shopify/polaris/dist/styles.css";


export default function TopBarHomePage() {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	
	
	const toggleIsUserMenuOpen = useCallback(
		() => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
		[],
	);
	
	const toggleIsSecondaryMenuOpen = useCallback(
		() => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
		[],
	);
	
	const handleSearchResultsDismiss = useCallback(() => {
		setIsSearchActive(false);
		setSearchValue('');
	}, []);
	
	const handleSearchChange = useCallback((value) => {
		setSearchValue(value);
		setIsSearchActive(value.length > 0);
	}, []);
	
	const handleNavigationToggle = useCallback(() => {
		console.log('toggle navigation visibility');
	}, []);
	
	const theme = {
		colors: {
			topBar: {
				background: '#34485f',
			},
		},
		logo: {
			width: 124,
			topBarSource:
				'https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg',
			url: 'http://jadedpixel.com',
			accessibilityLabel: 'Jaded Pixel',
		},
	};
	
	const userMenuMarkup = (
		<TopBar.UserMenu
			actions={[
				{
					items: [{content: 'Back to Shopify', icon: ArrowLeftMinor}],
				},
				{
					items: [{content: 'Community forums'}],
				},
			]}
			name="Dharma"
			detail="Jaded Pixel"
			initials="D"
			open={isUserMenuOpen}
			onToggle={toggleIsUserMenuOpen}
		/>
	);
	
	const searchResultsMarkup = (
		<Card>
			<ActionList
				items={[
					{content: 'Shopify help center'},
					{content: 'Community forums'},
				]}
			/>
		</Card>
	);
	
	const searchFieldMarkup = (
		<TopBar.SearchField
			onChange={handleSearchChange}
			value={searchValue}
			placeholder="Search"
			showFocusBorder
		/>
	);
	
	const secondaryMenuMarkup = (
		<TopBar.Menu
			activatorContent={
				<span>
          <Icon source={QuestionMarkMajorTwotone}/>
          <VisuallyHidden>Secondary menu</VisuallyHidden>
        </span>
			}
			open={isSecondaryMenuOpen}
			onOpen={toggleIsSecondaryMenuOpen}
			onClose={toggleIsSecondaryMenuOpen}
			actions={[
				{
					items: [{content: 'Community forums'}],
				},
			]}
		/>
	);
	
	const navigationMarkup = (
		<Navigation location='/'>
			<Navigation.Section
				items={[
					{
						url: '/path/to/place',
						label: 'Stores',
						icon: StoreMajorMonotone,
					},
					{
						url: '/path/to/place',
						label: 'Referrals',
						icon: ReferralMajorMonotone,
					},
					{
						url: '/path/to/place',
						label: 'Affiliate tools',
						icon: AnalyticsMajorMonotone,
					},
					{
						url: '/path/to/place',
						label: 'Apps',
						icon: AppsMajorMonotone,
					},
				]}
			/>
			<Navigation.Section items={[
				{
					url: '/path/to/place',
					label: 'Payouts',
					icon: CashDollarMajorMonotone,
				},
				{
					url: '/path/to/place',
					label: 'Education',
					icon: VocabularyMajorMonotone,
				},
				{
					url: '/path/to/place',
					label: 'Support',
					icon: ChatMajorMonotone,
				},
			
			]}
			/>
			<Navigation.Section items={[
				{
					url: '/path/to/place',
					label: 'Team',
					icon: TeamMajorMonotone,
				},
				{
					url: '/path/to/place',
					label: 'Settings',
					icon: SettingsMajorMonotone,
				}]
			}
			/>
		</Navigation>
	)
	
	const topBarMarkup = (
		<TopBar
			showNavigationToggle
			userMenu={userMenuMarkup}
			secondaryMenu={secondaryMenuMarkup}
			searchResultsVisible={isSearchActive}
			searchField={searchFieldMarkup}
			searchResults={searchResultsMarkup}
			onSearchResultsDismiss={handleSearchResultsDismiss}
			onNavigationToggle={handleNavigationToggle}
			navigationMarkup={navigationMarkup}
		
		/>
	);
	
	
	return (
		<div style={{height: '250px'}}>
			<AppProvider
				theme={theme}
				i18n={{
					Polaris: {
						Avatar: {
							label: 'Avatar',
							labelWithInitials: 'Avatar with initials {initials}',
						},
						Frame: {skipToContent: 'Skip to content'},
						TopBar: {
							toggleMenuLabel: 'Toggle menu',
							SearchField: {
								clearButtonLabel: 'Clear',
								search: 'Search',
							},
						},
					},
				}}
			>
				<Frame topBar={topBarMarkup}/>
			</AppProvider>
		</div>
	);
}
