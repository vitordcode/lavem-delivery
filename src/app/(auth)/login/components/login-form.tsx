"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	return (
		<div>
			<form className={cn("flex flex-col gap-6", className)} {...props}>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className="text-2xl font-bold">Fazer login</h1>
					<p className="text-balance text-sm text-muted-foreground">
						Digite seu e-mail abaixo para acessar sua conta
					</p>
				</div>
				<div className="grid gap-6">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="email" placeholder="jhon@doe.com" />
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							<Label htmlFor="password">Senha</Label>
							<Link
								href="#"
								className="ml-auto text-sm underline-offset-4 hover:underline"
							>
								Esqueceu sua senha?
							</Link>
						</div>
						<Input id="password" type="password" placeholder="********" />
					</div>
					<Button type="submit" className="w-full">
						Entrar
					</Button>
				</div>
			</form>
			<div className="relative py-4 text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
				<span className="relative z-10 bg-background px-2 text-muted-foreground">
					ou
				</span>
			</div>
			<Button variant="outline" className="w-full font-medium">
				<FaGoogle className="size-4" />
				Entrar com Google
			</Button>

			<div className="text-center text-sm mt-4">
				Não tem uma conta?{" "}
				<Link href="/signup" className="underline underline-offset-4">
					Criar conta
				</Link>
			</div>
		</div>
	);
}
