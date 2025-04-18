import { createClient } from "@/utils/supabase/server";
import AccountForm from "./components/account-form";

export default async function PerfilPage() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="w-full h-screen flex items-center justify-center">
			<AccountForm user={user} />
		</div>
	);
}
