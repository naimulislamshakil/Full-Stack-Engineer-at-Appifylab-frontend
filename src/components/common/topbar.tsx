'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
	BellIcon,
	Menu,
	Moon,
	ShoppingCartIcon,
	Sun,
	UserRoundIcon,
	X,
} from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuItem,
} from '../ui/dropdown-menu';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export const Topbar = () => {
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [count, setCount] = useState(2);

	return (
		<div>
			<nav className="w-full bg-background border-b">
				<div className="container mx-auto flex items-center px-3 md:px-0 justify-between py-3">
					{/* Logo */}
					<button className="md:hidden" onClick={() => setOpen(!open)}>
						{open ? <X size={26} /> : <Menu size={26} />}
					</button>

					<Link href="/" className="text-2xl font-bold font-manrope">
						Appifylab
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-6 font-manrope">
						<Link href="/" className="hover:text-primary">
							Home
						</Link>
						<Link href="/login" className="hover:text-primary">
							Login
						</Link>
						<Link href="/register" className="hover:text-primary">
							Register
						</Link>
					</div>

					<div className="flex items-center gap-1">
						<Button
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
							className="hidden md:flex"
							variant="ghost"
						>
							{theme === 'light' ? (
								<Moon className="w-5 h-5" />
							) : (
								<Sun className="w-5 h-5" />
							)}
						</Button>
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
