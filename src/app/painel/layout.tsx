import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HeaderSidebar from "./components/header";
import { PainelSidebar } from "./components/painel-sidebar";

export default function PainelLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<SidebarProvider>
			<PainelSidebar />
			<SidebarInset>
				<HeaderSidebar />
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
