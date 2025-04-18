"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

import { z } from "zod";
import { signupWithPassword } from "../actions";

const signupSchema = z
	.object({
		email: z
			.string()
			.nonempty("O email é obrigatório")
			.email("Digite um email válido"),
		password: z
			.string()
			.nonempty("A senha é obrigatória")
			.min(8, "A senha deve ter pelo menos 8 caracteres"),
		confirmPassword: z
			.string()
			.nonempty("A confirmação de senha é obrigatória")
			.min(8, "A confirmação de senha deve ter pelo menos 8 caracteres"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignupForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	const supabase = createClient();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupFormData>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: SignupFormData) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("password", data.password);
		return signupWithPassword(formData);
	};

	const handleSignupWithOAuth = () => {
		supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/confirm`,
			},
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("flex flex-col gap-6", className)}
			{...props}
		>
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Criar conta</h1>
				<p className="text-balance text-sm text-muted-foreground">
					Digite seu e-mail e senha para criar sua conta
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="jhon@doe.com"
						{...register("email")}
						className={errors.email ? "border-destructive" : ""}
					/>
					{errors.email && (
						<p className="text-sm text-destructive">{errors.email.message}</p>
					)}
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Senha</Label>
					<Input
						id="password"
						type="password"
						placeholder="********"
						{...register("password")}
						className={errors.password ? "border-destructive" : ""}
					/>
					{errors.password && (
						<p className="text-sm text-destructive">
							{errors.password.message}
						</p>
					)}
				</div>
				<div className="grid gap-2">
					<Label htmlFor="confirmPassword">Confirmar senha</Label>
					<Input
						id="confirmPassword"
						type="password"
						placeholder="********"
						{...register("confirmPassword")}
						className={errors.confirmPassword ? "border-destructive" : ""}
					/>
					{errors.confirmPassword && (
						<p className="text-sm text-destructive">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting && <Loader className="size-4 animate-spin" />}
					Criar conta
				</Button>
				<div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
					<span className="relative z-10 bg-background px-2 text-muted-foreground">
						ou
					</span>
				</div>
				<Button
					variant="outline"
					className="w-full font-medium"
					onClick={() => handleSignupWithOAuth()}
				>
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<FaGoogle className="size-4" />
					Entrar com Google
				</Button>
			</div>
			<div className="text-center text-sm">
				Já tem uma conta?{" "}
				<Link href="/login" className="underline underline-offset-4">
					Fazer login
				</Link>
			</div>
		</form>
	);
}
