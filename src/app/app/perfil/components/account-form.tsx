"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";

export default function AccountForm({ user }: { user: User | null }) {
	const supabase = createClient();
	const [loading, setLoading] = useState(true);
	const [fullname, setFullname] = useState<string | null>(null);
	const [username, setUsername] = useState<string | null>(null);
	const [website, setWebsite] = useState<string | null>(null);
	const [avatar_url, setAvatarUrl] = useState<string | null>(null);

	const getProfile = useCallback(async () => {
		try {
			setLoading(true);

			const { data, error, status } = await supabase
				.from("profiles")
				.select("full_name, username, website, avatar_url")
				.eq("id", user?.id)
				.single();

			if (error && status !== 406) {
				console.log(error);
				throw error;
			}

			if (data) {
				setFullname(data.full_name);
				setUsername(data.username);
				setWebsite(data.website);
				setAvatarUrl(data.avatar_url);
			}
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			setLoading(false);
		}
	}, [user, supabase]);

	useEffect(() => {
		getProfile();
	}, [getProfile]);

	async function updateProfile({
		username,
		website,
		avatar_url,
	}: {
		username: string | null;
		fullname: string | null;
		website: string | null;
		avatar_url: string | null;
	}) {
		try {
			setLoading(true);

			const { error } = await supabase.from("profiles").upsert({
				id: user?.id as string,
				full_name: fullname,
				username,
				website,
				avatar_url,
				updated_at: new Date().toISOString(),
			});
			if (error) throw error;
			alert("Profile updated!");
		} catch (error) {
			alert("Error updating the data!");
		} finally {
			setLoading(false);
		}
	}

	return (
		<Card className="w-full max-w-lg px-4">
			<CardHeader>
				<CardTitle>Finalizar cadastro</CardTitle>
				<CardDescription>
					Termine de preenhcer seus dados para finalizar seu cadastro.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input id="email" type="text" value={user?.email} disabled />
					</div>
					<div className="space-y-2">
						<Label htmlFor="fullName">Full Name</Label>
						<Input
							id="fullName"
							type="text"
							value={fullname || ""}
							onChange={(e) => setFullname(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="username">Username</Label>
						<Input
							id="username"
							type="text"
							value={username || ""}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="website">Website</Label>
						<Input
							id="website"
							type="url"
							value={website || ""}
							onChange={(e) => setWebsite(e.target.value)}
						/>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<div className="flex flex-col items-center gap-2 w-full">
					<div className="w-full">
						<Button
							className="w-full"
							type="button"
							onClick={() =>
								updateProfile({ fullname, username, website, avatar_url })
							}
							disabled={loading}
						>
							{loading ? "Carregando..." : "Atualizar"}
						</Button>
					</div>

					<div className="w-full">
						<form action="/auth/signout" method="post">
							<Button className="w-full" type="submit" variant="outline">
								Sair
							</Button>
						</form>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
