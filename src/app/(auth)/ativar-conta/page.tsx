import { GalleryVerticalEnd } from "lucide-react";

export default function ConfirmSignupPage() {
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="flex flex-col justify-center items-center">
				<div className="flex justify-center gap-2 md:justify-end">
					<div className="flex items-center gap-2 font-medium">
						<div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
							<GalleryVerticalEnd className="size-4" />
						</div>
						Lá vem
					</div>
				</div>
				<div className="text-center mt-8">
					<h1 className="text-3xl font-semibold text-primary">
						Obrigado por se inscrever
					</h1>
					<p className="text-muted-foreground max-w-md">
						Para completar seu cadastro, verifique em seu email um link que
						enviamos para completar a criação da conta.
					</p>
				</div>
			</div>
		</div>
	);
}
