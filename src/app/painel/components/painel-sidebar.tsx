"use client";

import type * as React from "react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { AlarmClock, House, Store, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";

const data = {
	versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
	navMain: [
		{
			title: "Configurações iniciais",
			url: "#",
			items: [
				{
					title: "Método de pagamento",
					url: "#",
				},
				{
					title: "Cardápio",
					url: "#",
				},
			],
		},
		{
			title: "páginas",
			url: "#",
			items: [
				{
					title: "Início",
					url: "/painel",
					svg: <House className="size-5" />,
				},
				{
					title: "Horário de funcionamento",
					url: "/painel/horario-funcionamento",
					svg: <AlarmClock className="size-5" />,
				},
				{
					title: "Minha loja",
					url: "/painel/minha-loja",
					svg: <Store className="size-5" />,
				},
				{
					title: "Financeiro",
					url: "/painel/financeiro",
					svg: <Wallet className="size-5" />,
				},
			],
		},
	],
};

export function PainelSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname();

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<VersionSwitcher
					versions={data.versions}
					defaultVersion={data.versions[0]}
				/>
				<SearchForm />
			</SidebarHeader>
			<SidebarContent>
				{data.navMain.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild isActive={pathname === item.url}>
											<Link href={item.url}>
												{"svg" in item && item.svg}

												{item.title}
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
