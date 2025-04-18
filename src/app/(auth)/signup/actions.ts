"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signupWithPassword(formData: FormData) {
	const supabase = await createClient();

	const { error } = await supabase.auth.signUp({
		email: formData.get("email") as string,
		password: formData.get("password") as string,
		options: {
			emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
		},
	});

	if (error) {
		console.log(error);
		redirect("/error");
	}

	revalidatePath("/", "layout");
	redirect("/ativar-conta");
}
