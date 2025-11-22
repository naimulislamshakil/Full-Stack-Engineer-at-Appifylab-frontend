'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
	BellIcon,
	ChevronDown,
	HomeIcon,
	Menu,
	MessageCircle,
	Moon,
	Reply,
	SearchIcon,
	Sun,
	UsersIcon,
	X,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { logoutUser, useUser } from '@/modules/homepage/api/get-user';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '../ui/input-group';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';

export const Topbar = () => {
	const pathName = usePathname();
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const queryClient = useQueryClient();
	const router = useRouter();

	const { data: user } = useUser();

	const { mutate: logout, isPending } = useMutation({
		mutationFn: logoutUser,
		onSuccess: (data) => {
			queryClient.clear();
			toast.success(data?.message);
			router.push('/login');
		},
		onError: (err) => {
			toast.error(err.message);
		},
	});

	return (
		<div>
			<nav className="w-full bg-background border-b">
				<div className="container mx-auto flex items-center px-3 md:px-0 justify-between py-3">
					{/* Logo */}
					<button className="md:hidden" onClick={() => setOpen(!open)}>
						{open ? <X size={26} /> : <Menu size={26} />}
					</button>

					<Link href="/" className="text-2xl font-bold font-manrope">
						<Image src="/logo.svg" height={150} width={200} alt="Logo" />
					</Link>

					<InputGroup className="rounded-full max-w-[300px] border-blue-500">
						<InputGroupInput
							className="focus:ring-0"
							placeholder="input search text"
						/>
						<InputGroupAddon>
							<SearchIcon className="text-blue-500" />
						</InputGroupAddon>
					</InputGroup>

					{/* Desktop Menu */}

					<div className="flex items-center gap-5">
						<div className="hidden md:flex items-center gap-6 font-manrope">
							<Link
								href="/"
								className={
									pathName === '/'
										? 'hover:text-primary border-b-2 pb-4 border-b-blue-500 duration-100'
										: 'hover:text-primary hover:border-b-2 hover:pb-4 hover:border-b-blue-500 duration-100'
								}
							>
								<HomeIcon
									className={
										pathName === '/'
											? 'text-blue-500 hover:text-blue-500'
											: 'text-gray-500 hover:text-blue-500'
									}
								/>
							</Link>
							<Link
								href="/login"
								className={
									pathName === '/group'
										? 'hover:text-primary border-b-2 pb-4 border-b-blue-500 duration-100'
										: 'hover:text-primary hover:border-b-2 hover:pb-4 hover:border-b-blue-500 duration-100'
								}
							>
								<UsersIcon
									className={
										pathName === '/group'
											? 'text-blue-500 hover:text-blue-500'
											: 'text-gray-500 hover:text-blue-500'
									}
								/>
							</Link>
							<Link
								href="/register"
								className={
									pathName === '/notifiction'
										? 'hover:text-primary border-b-2 pb-4 border-b-blue-500 duration-100'
										: 'hover:text-primary hover:border-b-2 hover:pb-4 hover:border-b-blue-500 duration-100'
								}
							>
								<BellIcon
									className={
										pathName === '/notifiction'
											? 'text-blue-500 hover:text-blue-500'
											: 'text-gray-500 hover:text-blue-500'
									}
								/>
							</Link>
							<Link
								href="/register"
								className={
									pathName === '/message'
										? 'hover:text-primary border-b-2 pb-4 border-b-blue-500 duration-100'
										: 'hover:text-primary hover:border-b-2 hover:pb-4 hover:border-b-blue-500 duration-100'
								}
							>
								<MessageCircle
									className={
										pathName === '/message'
											? 'text-blue-500 hover:text-blue-500'
											: 'text-gray-500 hover:text-blue-500'
									}
								/>
							</Link>
						</div>

						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-3">
								<Avatar>
									<AvatarImage src="/profile.png" />
								</Avatar>
								<span>
									{user?.user.firstName ? user?.user.firstName : 'Naimul'}
								</span>
								<ChevronDown size={18} className="text-gray-500" />
							</DropdownMenuTrigger>

							<DropdownMenuContent>
								<DropdownMenuLabel>My Profile</DropdownMenuLabel>
								<Separator />

								{user?.success === true && (
									<>
										<DropdownMenuItem>
											<Button
												className="w-full"
												onClick={() => logout()}
												disabled={isPending}
											>
												Logout
											</Button>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												onClick={() =>
													setTheme(theme === 'light' ? 'dark' : 'light')
												}
												className="hidden md:flex"
												variant="ghost"
											>
												{theme === 'light' ? (
													<Moon className="w-5 h-5" />
												) : (
													<Sun className="w-5 h-5" />
												)}
											</Button>
										</DropdownMenuItem>
									</>
								)}

								{user === undefined && (
									<>
										<DropdownMenuItem>
											<Link href="/login" className="w-full">
												Login
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Link href="/register" className="w-full">
												Register
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Button
												onClick={() =>
													setTheme(theme === 'light' ? 'dark' : 'light')
												}
												className="hidden md:flex"
												variant="ghost"
											>
												{theme === 'light' ? (
													<Moon className="w-5 h-5" />
												) : (
													<Sun className="w-5 h-5" />
												)}
											</Button>
										</DropdownMenuItem>
									</>
								)}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				{/* Mobile Dropdown Menu */}
				{open && (
					<div className="md:hidden flex flex-col gap-4 px-6 pb-5 animate-in slide-in-from-top duration-300 z-50">
						<Link href="/" onClick={() => setOpen(false)}>
							Home
						</Link>
						<Link href="/login" onClick={() => setOpen(false)}>
							Login
						</Link>
						<Link href="/register" onClick={() => setOpen(false)}>
							Register
						</Link>
					</div>
				)}
			</nav>
		</div>
	);
};
