import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import { Search } from 'lucide-react';

export const Rightbar = () => {
	const followers = [
		{
			image: '/people1.png',
			name: 'Steve Jobs',
			role: 'CEO',
			company: 'Apple',
			button: 'follower',
		},
		{
			image: '/people2.png',
			name: 'Ryan Roslansky',
			role: 'CEO',
			company: 'Linkedin',
			button: 'follower',
		},
		{
			image: '/people3.png',
			name: 'Dylan Field',
			role: 'CEO',
			company: 'Figma',
			button: 'follower',
		},
	];

	const connects = [
		{
			image: '/people1.png',
			name: 'Steve Jobs',
			role: 'CEO',
			company: 'Apple',
			active: '5 minute ago',
		},
		{
			image: '/people2.png',
			name: 'Ryan Roslansky',
			role: 'CEO',
			company: 'Linkedin',
			active: 'active',
		},
		{
			image: '/people3.png',
			name: 'Dylan Field',
			role: 'CEO',
			company: 'Figma',
			active: 'active',
		},
		{
			image: '/people1.png',
			name: 'Steve Jobs',
			role: 'CEO',
			company: 'Apple',
			active: '5 minute ago',
		},
		{
			image: '/people2.png',
			name: 'Ryan Roslansky',
			role: 'CEO',
			company: 'Linkedin',
			active: 'active',
		},
		{
			image: '/people3.png',
			name: 'Dylan Field',
			role: 'CEO',
			company: 'Figma',
			active: 'active',
		},
		{
			image: '/people1.png',
			name: 'Steve Jobs',
			role: 'CEO',
			company: 'Apple',
			active: '5 minute ago',
		},
		{
			image: '/people2.png',
			name: 'Ryan Roslansky',
			role: 'CEO',
			company: 'Linkedin',
			active: 'active',
		},
		{
			image: '/people3.png',
			name: 'Dylan Field',
			role: 'CEO',
			company: 'Figma',
			active: 'active',
		},
	];
	return (
		<div>
			<Card className="rounded">
				<CardHeader className="flex items-center justify-between">
					<span className="text-md font-semibold">You Might Like</span>
					<span className="text-md font-semibold text-blue-500">See all</span>
				</CardHeader>

				<CardContent className="mt-0">
					{followers.map((follower, i) => (
						<div key={i}>
							<Separator className="mt-2" />

							<div>
								<div className="flex items-center gap-4 mt-3">
									<div>
										<Avatar className="w-16 h-16">
											<AvatarImage
												className="size-15"
												src={follower.image}
												alt={follower.name}
											/>
										</Avatar>
									</div>
									<div>
										<h6 className="text-lg font-semibold">{follower.name}</h6>
										<p className="text-md text-gray-500">
											{follower.role} of {follower.company}
										</p>
									</div>
								</div>
								<div className="mt-3 flex items-center justify-around gap-5">
									<Button
										variant="outline"
										className="text-md rounded font-semibold text-gray-500 hover:border-blue-500 hover:text-blue-500"
									>
										Ignore
									</Button>
									<Button className="hover:bg-blue-500 rounded bg-blue-500 text-white">
										Follow
									</Button>
								</div>
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			<Card className="rounded mt-5">
				<CardHeader className="flex items-center justify-between">
					<span className="text-md font-semibold">Your Friends</span>
					<span className="text-md font-semibold text-blue-500">See all</span>
				</CardHeader>

				<CardContent>
					<div>
						<InputGroup className="rounded-full border-blue-500">
							<InputGroupInput placeholder="Enter your friend name." />
							<InputGroupAddon>
								<Search className="text-blue-500" />
							</InputGroupAddon>
						</InputGroup>
					</div>

					{connects.map((connect, i) => (
						<div
							key={i}
							className="grid grid-cols-4 items-center justify-between gap-3 mt-2 cursor-pointer p-2 hover:bg-gray-100 rounded"
						>
							<div className="flex items-center  gap-2 col-span-3">
								<div>
									<Avatar className="h-14 w-14">
										<AvatarImage
											className="size-14"
											src={connect.image}
											alt={connect.name}
										/>
									</Avatar>
								</div>
								<div>
									<h6 className="text-[16px] font-semibold">{connect.name}</h6>
									<p className="text-sm text-gray-500">
										{connect.role} of {connect.company}
									</p>
								</div>
							</div>
							<div>
								{connect.active === 'active' ? (
									<div className="h-2 w-2 bg-green-500 rounded-full flex justify-end items-end"></div>
								) : (
									<p className="text-sm text-gray-500">{connect.active}</p>
								)}
							</div>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	);
};
