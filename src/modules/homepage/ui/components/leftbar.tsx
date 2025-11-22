import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
	BookmarkMinus,
	ChartColumnIncreasing,
	Gamepad,
	Save,
	Settings,
	UserPlus,
	Users,
	VideoIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Leftbar = () => {
	const routes = [
		{
			icon: VideoIcon,
			label: 'Learning',
			route: '/learning',
			feture: 'New',
		},
		{
			icon: ChartColumnIncreasing,
			label: 'Insights',
			route: '/insights',
			feture: '',
		},
		{
			icon: UserPlus,
			label: 'Find Friends',
			route: '/find-friends',
			feture: '',
		},
		{
			icon: BookmarkMinus,
			label: 'Bookmarks',
			route: '/bookmarks',
			feture: '',
		},
		{
			icon: Users,
			label: 'Group',
			route: '/group',
			feture: '',
		},
		{
			icon: Gamepad,
			label: 'Gaming',
			route: '/gaming',
			feture: 'New',
		},
		{
			icon: Settings,
			label: 'Settings',
			route: '/settings',
			feture: '',
		},
		{
			icon: Save,
			label: 'Save Post',
			route: '/save-post',
			feture: '',
		},
	];

	const connects = [
		{
			image: '/people1.png',
			name: 'Steve Jobs',
			role: 'CEO',
			company: 'Apple',
			button: 'Connect',
		},
		{
			image: '/people2.png',
			name: 'Ryan Roslansky',
			role: 'CEO',
			company: 'Linkedin',
			button: 'Connect',
		},
		{
			image: '/people3.png',
			name: 'Dylan Field',
			role: 'CEO',
			company: 'Figma',
			button: 'Connect',
		},
	];
	return (
		<div>
			<Card className="rounded">
				<CardHeader className="text-lg font-semibold">Explore</CardHeader>
				<CardContent className="mt-0">
					{routes.map((route, i) => (
						<div key={i} className="mt-5">
							<Link href={route.route}>
								<div className="flex items-center justify-between">
									<div className=" flex items-center gap-5">
										<route.icon className="text-gray-500" />
										<span className="text-[16px] font-semibold text-gray-500 hover:text-blue-500">
											{route.label}
										</span>
									</div>
									<div className="bg-green-600 px-3 rounded text-white text-sm">
										{route.feture !== '' && route.feture}
									</div>
								</div>
							</Link>
						</div>
					))}
				</CardContent>
			</Card>

			<Card className="rounded mt-5">
				<CardHeader className="flex items-center justify-between">
					<span className="text-md font-semibold">Suggested People</span>
					<span className="text-md font-semibold text-blue-500">See all</span>
				</CardHeader>

				<CardContent>
					{connects.map((connect, i) => (
						<div
							key={i}
							className="flex items-center justify-between gap-1 mt-3"
						>
							<div className="flex items-center justify-between gap-4">
								<div>
									<Avatar>
										<AvatarImage
											className="size-8"
											src={connect.image}
											alt={connect.name}
										/>
									</Avatar>
								</div>
								<div>
									<h6 className="text-[15px] font-semibold">{connect.name}</h6>
									<p className="text-sm text-gray-500">
										{connect.role} of {connect.company}
									</p>
								</div>
							</div>
							<div>
								<Button
									variant="outline"
									className="hover:bg-blue-500 rounded hover:text-white"
								>
									{connect.button}
								</Button>
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			<Card className="rounded mt-5">
				<CardHeader className="flex items-center justify-between">
					<span className="text-md font-semibold">Events</span>
					<span className="text-md font-semibold text-blue-500">See all</span>
				</CardHeader>

				{[1, 2].map((i) => (
					<div key={i}>
						<CardContent key={i}>
							<div className="mt-5">
								<Image
									src="/recommend2.png"
									className="rounded"
									width={1000}
									height={100}
									alt="events"
								/>

								<div className="mt-2 flex items-center gap-3">
									<h2 className="py-2 px-3 bg-green-500 text-white rounded text-lg font-semibold">
										<span className="font-bold">10</span> <br /> Jul
									</h2>
									<div>
										<h5 className="text-[16px] font-semibold">
											No more terroism
										</h5>
										<h5 className="text-[16px] font-semibold">No more cry</h5>
									</div>
								</div>
							</div>
						</CardContent>
						<Separator className="mt-3" />
						<CardFooter>
							<div className="flex items-center justify-between mt-3">
								<div className="flex items-center gap-3 mr-13">
									<h5 className="text-gray-500 font-bold text-sm">
										17 People Going
									</h5>
								</div>
								<div>
									<Button
										variant="outline"
										className="rounded border-blue-500 text-blue-500"
									>
										Going
									</Button>
								</div>
							</div>
						</CardFooter>
					</div>
				))}
			</Card>
		</div>
	);
};
