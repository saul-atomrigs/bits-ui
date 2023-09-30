export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type Navigation = {
	main: NavItem[];
	sidebar: SidebarNavItem[];
};

export const navigation: Navigation = {
	main: [
		{
			title: "Docs",
			href: "/docs"
		}
	],
	sidebar: [
		{
			title: "Overview",
			items: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					items: []
				},
				{
					title: "Getting started",
					href: "/docs/getting-started",
					items: []
				},
				{
					title: "Render delegation",
					href: "/docs/render-delegation",
					items: []
				}
			]
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
					items: []
				},
				{
					title: "Alert Dialog",
					href: "/docs/components/alert-dialog",
					items: []
				},
				{
					title: "Aspect Ratio",
					href: "/docs/components/aspect-ratio",
					items: []
				},
				{
					title: "Avatar",
					href: "/docs/components/avatar",
					items: []
				},
				{
					title: "Button",
					href: "/docs/components/button",
					items: []
				},
				{
					title: "Checkbox",
					href: "/docs/components/checkbox",
					items: []
				},
				{
					title: "Collapsible",
					href: "/docs/components/collapsible",
					items: []
				},
				{
					title: "Combobox",
					href: "/docs/components/combobox",
					items: []
				},
				{
					title: "Context Menu",
					href: "/docs/components/context-menu",
					items: []
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
					items: []
				},
				{
					title: "Dropdown Menu",
					href: "/docs/components/dropdown-menu",
					items: []
				},
				{
					title: "Label",
					href: "/docs/components/label",
					items: []
				},
				{
					title: "Link Preview",
					href: "/docs/components/link-preview",
					items: []
				},
				{
					title: "Menubar",
					href: "/docs/components/menubar",
					items: []
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
					items: []
				},
				{
					title: "Progress",
					href: "/docs/components/progress",
					items: []
				},
				{
					title: "Radio Group",
					href: "/docs/components/radio-group",
					items: []
				},
				{
					title: "Select",
					href: "/docs/components/select",
					items: []
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
					items: []
				},
				{
					title: "Slider",
					href: "/docs/components/slider",
					items: []
				},
				{
					title: "Switch",
					href: "/docs/components/switch",
					items: []
				},
				{
					title: "Tabs",
					href: "/docs/components/tabs",
					items: []
				},
				{
					title: "Toggle",
					href: "/docs/components/toggle",
					items: []
				},
				{
					title: "Tooltip",
					href: "/docs/components/tooltip",
					items: []
				}
			]
		}
	]
};
