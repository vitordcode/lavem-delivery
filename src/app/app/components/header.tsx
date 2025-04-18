"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	HandPlatter,
	LogOut,
	Search,
	Settings,
	ShoppingBag,
	Ticket,
	User,
} from "lucide-react";
import Link from "next/link";
import NavLink from "./nav-link";

export default function Header() {
	return (
		<header className="border-b">
			<div className="container mx-auto p-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-6">
						<Link
							className="text-2xl font-bold flex items-center gap-1"
							href="/app"
							aria-label="Lá Vem Delivery - Página inicial"
						>
							<HandPlatter className="size-7 text-primary" />
							<span className="text-primary font-sans">
								lá<span className="text-muted-foreground font-medium">Vem</span>
							</span>
						</Link>

						<nav className="flex items-center space-x-4">
							<NavLink href="/app">Início</NavLink>
							<NavLink href="/app/restaurantes">Restaurantes</NavLink>
							<NavLink href="/app/farmacias">Farmácias</NavLink>
							<NavLink href="/app/bebidas">Bebidas</NavLink>
						</nav>
					</div>
					<div className="flex-1">
						<div className="flex items-center max-w-lg border-border rounded-md bg-muted mx-auto gap-4">
							<Search className="size-4 text-primary ml-6" />
							<label htmlFor="search" className="sr-only">
								Buscar por item ou loja
							</label>
							<Input
								id="search"
								name="search"
								type="search"
								placeholder="Busque por item ou loja"
								className="bg-transparent border-0 focus:ring-0 focus-visible:ring-0"
							/>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<div>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="ghost"
										className="cursor-pointer"
										aria-label="Abrir menu de perfil"
									>
										<User className="size-5 text-primary" />
									</Button>
								</PopoverTrigger>
								<PopoverContent align="end" className="w-[19rem]">
									<div className="grid gap-4">
										<div className="space-y-2">
											<h4 className="font-semibold leading-none text-xl">
												Olá, Vitor
											</h4>
										</div>
										<Separator />
										<div className="grid gap-2">
											<div className="w-full group">
												<Link
													className="flex items-center gap-2 text-muted-foreground group-hover:bg-secondary group-hover:rounded-md group-hover:text-primary text-lg font-medium p-2"
													href="/pedidos"
												>
													<Ticket className="size-5 text-muted-foreground group-hover:text-primary" />
													Pedidos
												</Link>
											</div>
											<div className="w-full group">
												<Link
													className="flex items-center gap-2 text-muted-foreground group-hover:bg-secondary group-hover:rounded-md group-hover:text-primary text-lg font-medium p-2"
													href="/app/perfil"
												>
													<Settings className="size-5 text-muted-foreground group-hover:bg-secondary group-hover:rounded-md group-hover:text-primary" />
													Perfil
												</Link>
											</div>
											<div className="w-full group">
												<form
													action="/auth/signout"
													method="post"
													className="group"
												>
													<Button
														variant="ghost"
														type="submit"
														className="w-full flex justify-start cursor-pointer gap-2 text-muted-foreground hover:bg-secondary hover:rounded-md hover:text-primary text-lg font-medium p-2"
													>
														<LogOut className="size-5 " />
														Sair
													</Button>
												</form>
											</div>
										</div>
									</div>
								</PopoverContent>
							</Popover>
						</div>

						<div>
							<Sheet>
								<SheetTrigger asChild>
									<div className="bg-primary rounded-md flex items-center">
										<Button
											variant="ghost"
											className="cursor-pointer"
											aria-label="Abrir carrinho"
										>
											<ShoppingBag className="size-5 text-background relative" />
											<span className="text-background fontp-bold">2</span>
										</Button>
									</div>
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<div className="mt-4">
											<span className="text-muted-foreground text-[12px] font-light">
												Seu pedido em:
											</span>
											<div className="flex items-start justify-between">
												<SheetTitle className="text-foreground text-xl">
													Burger King
												</SheetTitle>
												<Link
													href="#"
													className="text-primary text-sm font-semibold"
												>
													Ver cardápio
												</Link>
											</div>
										</div>
									</SheetHeader>
									<Separator />
									<div className="grid gap-4 py-4 px-4">
										<div className="w-full">
											<h4 className="font-semibold text-sm">Bk taste</h4>
											<div className="flex items-start justify-between">
												<div>
													<span className="text-foreground">
														1x Comobo Bk Taste 3.0
													</span>
													<p className="text-muted-foreground text-[12px]">
														1x Batata Média, 1x Pepsi Black Lata - 350ml
													</p>

													<div className="flex items-center gap-4">
														<Button variant="ghost" className="text-primary">
															Editar
														</Button>

														<Button
															variant="ghost"
															className="text-muted-foreground"
														>
															Remover
														</Button>
													</div>
												</div>
												<div>
													<span className="font-medium text-md text-foreground">
														R$ 41,90
													</span>
												</div>
											</div>
											<Separator />
										</div>
										<div className="w-full">
											<h4 className="font-semibold text-sm">Bk taste</h4>
											<div className="flex items-start justify-between">
												<div>
													<span className="text-foreground">
														1x Comobo Bk Taste 3.0
													</span>
													<p className="text-muted-foreground text-[12px]">
														1x Batata Média, 1x Pepsi Black Lata - 350ml
													</p>

													<div className="flex items-center gap-4">
														<Button variant="ghost" className="text-primary">
															Editar
														</Button>

														<Button
															variant="ghost"
															className="text-muted-foreground"
														>
															Remover
														</Button>
													</div>
												</div>
												<div>
													<span className="font-medium text-md text-foreground">
														R$ 41,90
													</span>
												</div>
											</div>
											<Separator />
										</div>
										<div className="text-muted-foreground text-sm space-y-1">
											<div className="flex items-center justify-between">
												<span>Subtotal</span>
												<span>R$ 93,80</span>
											</div>

											<div className="flex items-center justify-between">
												<span>Taxa de entrega</span>
												<span>R$ 6,99</span>
											</div>
										</div>
									</div>
									<SheetFooter>
										<div className="flex items-center justify-between font-semibold text-foreground text-lg">
											<span>Total</span>
											<span>R$ 100,79</span>
										</div>

										<SheetClose asChild>
											<Button type="submit" className="w-full">
												Escolher forma de pagamento
											</Button>
										</SheetClose>
									</SheetFooter>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
