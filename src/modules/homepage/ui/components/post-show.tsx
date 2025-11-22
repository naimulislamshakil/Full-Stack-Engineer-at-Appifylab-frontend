import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from '@/components/ui/card';
import { useGetAllPost } from '../../api/get-all-post';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	EllipsisVerticalIcon,
	Heart,
	MessageCircle,
	Mic,
	SendHorizonalIcon,
	Share,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';

dayjs.extend(relativeTime);

export const PostShow = () => {
	const { data: posts, isLoading, isError, error } = useGetAllPost();

	console.log(posts?.post);
	return (
		<div>
			{posts?.post.map((post, i) => (
				<Card key={i} className="rounded mt-5">
					<CardHeader className="grid grid-cols-4 gap-5">
						<div className="col-span-3 flex items-center gap-5">
							<div>
								<Avatar className="w-14 h-14">
									<AvatarImage className="size-14" src="/chat6_img.png" />
								</Avatar>
							</div>
							<div>
								<h5 className="text-md hover:underline font-sans font-semibold">
									{post.user.firstName} {post.user.lastName}
								</h5>
								<div className="flex items-center gap-3">
									<p className="text-sm font-sans text-gray-500">
										{dayjs(post.createdAt).fromNow()}
									</p>

									<p className="text-sm font-sans text-gray-500 hover:underline">
										{post.postStatus === true ? 'Public' : 'Private'}
									</p>
								</div>
							</div>
						</div>
						<div className="text-end">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<EllipsisVerticalIcon className="text-gray-500 hover:text-blue-500" />
								</DropdownMenuTrigger>

								<DropdownMenuContent className="rounded">
									<DropdownMenuItem>dhasvhgsnab</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</CardHeader>

					<CardContent>
						<p>{post.text}</p>

						<Image
							className="mt-2"
							src={post.image}
							height={1000}
							width={1000}
							alt="Post"
						/>
					</CardContent>

					<CardFooter className="mt-3 flex flex-col">
						<div className="flex items-center justify-between w-full">
							<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
								<Avatar>
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage
										src="https://github.com/maxleiter.png"
										alt="@maxleiter"
									/>
									<AvatarFallback>LR</AvatarFallback>
								</Avatar>
								<Avatar>
									<AvatarImage
										src="https://github.com/evilrabbit.png"
										alt="@evilrabbit"
									/>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
							</div>

							<div className="flex items-center gap-5">
								<p className="text-md text-gray-500 font-sans">
									{post.comment.length} Comment
								</p>
								<p className="text-md text-gray-500 font-sans">
									{post.comment.length} Share
								</p>
							</div>
						</div>

						<div className="grid grid-cols-3 items-center gap-4 w-full mt-4">
							<Button variant="secondary" className="p-6 rounded">
								<Heart className="size-6" />
								Love
							</Button>
							<Button variant="secondary" className="p-6 rounded">
								<MessageCircle className="size-6" />
								Comment
							</Button>
							<Button variant="secondary" className="p-6 rounded">
								<Share className="size-6" />
								Share
							</Button>
						</div>

						<div className="w-full">
							<InputGroup className="bg-secondary mt-5 p-7 w-full rounded-full">
								<InputGroupInput
									className="text-lg font-sans"
									placeholder="Write a comment"
								/>
								<InputGroupAddon>
									<Avatar>
										<AvatarImage src="/comment_img.png" />
									</Avatar>
								</InputGroupAddon>
								<InputGroupAddon align="inline-end">
									<Mic />
								</InputGroupAddon>

								<InputGroupAddon align="inline-end">
									<SendHorizonalIcon className="size-5" />
								</InputGroupAddon>
							</InputGroup>
						</div>
					</CardFooter>
				</Card>
			))}
		</div>
	);
};
