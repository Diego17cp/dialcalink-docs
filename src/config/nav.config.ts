export interface NavItem {
	label: string;
	href: string;
	description?: string;
	icon?: string;
}

export interface NavConfig {
	items: NavItem[];
}

export const navConfig: NavConfig = {
	items: [
		{
			label: "FAQ",
			href: "/faq",
			description: "Frequently asked questions",
			icon: "lucide:message-circle-question-mark",
		},
		{
			label: "Guide",
			href: "/guide",
			description: "Step by step guide",
			icon: "lucide:library-big",
		},
		{
			label: "Blog",
			href: "/blog",
			description: "Latest news and updates",
			icon: "lucide:newspaper",
		},
		{
			label: "Support",
			href: "/support",
			description: "Get help with the app",
			icon: "lucide:life-buoy",
		},
	],
};
