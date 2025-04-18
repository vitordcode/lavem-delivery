"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				"text-sm flex gap-2 items-center p-2",
				isActive
					? "text-primary font-semibold underline underline-offset-4"
					: "text-foreground",
			)}
		>
			{children}
		</Link>
	);
}
