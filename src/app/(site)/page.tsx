import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
	return (
		<main className="w-full h-screen flex flex-col items-center justify-center">
			<div className="text-center">
				<h1 className="text-6xl font-semibold">Seja muito bem-vindo(a)</h1>
				<h2 className="text-lg font-semibold">O seu app de delivery!</h2>
			</div>
			<div className="flex items-center gap-4">
				<Button asChild>
					<Link href={"/signup"}>Criar conta</Link>
				</Button>
				<Button asChild variant="ghost">
					<Link href={"/login"}>Fazer login</Link>
				</Button>
			</div>
		</main>
	);
}
