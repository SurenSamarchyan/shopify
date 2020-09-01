import {Navigation} from "@shopify/polaris";
import {
	StoreMajorMonotone,
	ReferralMajorMonotone,
	AnalyticsMajorMonotone,
	AppsMajorMonotone,
	CashDollarMajorMonotone,
	VocabularyMajorMonotone,
	ChatMajorMonotone,
	TeamMajorMonotone,
	SettingsMajorMonotone
} from "@shopify/polaris-icons";
import React from "react";

export default () => {
	return (
		<Navigation location="/">
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
		</Navigation>)
}