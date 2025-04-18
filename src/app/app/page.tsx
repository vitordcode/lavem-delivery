import { createClient } from "@/utils/supabase/server";

export default async function AppPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="w-full flex items-center justify-center">
			<h1 className="font-semibold leading-tight text-4xl mt-20 text-primary">
				Bem vindo ao seu app de delivery
			</h1>
		</div>
	);
}
