'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupTextarea,
} from '@/components/ui/input-group';
import {
	Calendar,
	ChevronDown,
	EarthIcon,
	EarthLockIcon,
	FileTextIcon,
	Image as ImageIcon,
	Send,
	Video,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSchema } from '../../schema/post-schema';
import { toast } from 'sonner';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAddPost } from '../../api/add-post';
import { Spinner } from '@/components/ui/spinner';

interface Props {
	text: string;
	image: string | null;
	postStatus: boolean;
}

export const PostTextarea = () => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const { mutate, data, isError, isPending, error } = useAddPost();

	console.log(data, isError, isPending);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<Props>({
		defaultValues: {
			text: '',
			image: null,
		},
		resolver: yupResolver(postSchema),
		mode: 'onChange',
	});

	if (errors) {
		if (errors.image) {
			toast.error(errors.image.message);
		}
		if (errors.text) {
			toast.error(errors.text.message);
		}
	}

	const submit = (data: Props) => {
		mutate(data);
		reset();
	};

	// Trigger hidden file input
	const handleFileClick = () => {
		fileInputRef.current?.click();
	};

	if (data?.success === true) {
		toast.success(data.message);
	}

	if (isError || error) {
		toast.error(error.message);
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		const formData = new FormData();
		formData.append('image', file);

		fetch(
			'https://api.imgbb.com/1/upload?key=4268f2bb824fb4f955a82655bbc0b28c',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data?.success === true) {
					setValue('image', data?.data?.display_url);
					toast.success('Image uplode successfully.');
				}
			});
	};

	return (
		<Card className="mt-5 rounded">
			<CardContent>
				<form onSubmit={handleSubmit(submit)}>
					<InputGroup className="shadow-none ring-0 border-0">
						<InputGroupTextarea
							{...register('text')}
							className="shadow-none ring-0 border-0 focus:ring-0 focus-visible:ring-0 font-sans"
							placeholder="Write something..."
						/>

						<InputGroupAddon>
							<Avatar>
								<AvatarImage src="/comment_img.png" />
							</Avatar>
						</InputGroupAddon>
					</InputGroup>

					<CardFooter className="p-2 flex items-center justify-between rounded">
						<div className="flex gap-2">
							<Button
								variant="ghost"
								className="hover:text-blue-500 text-gray-500"
								onClick={handleFileClick}
							>
								<ImageIcon className="size-5" />
							</Button>
							<input
								type="file"
								className="hidden"
								ref={fileInputRef}
								onChange={handleFileChange}
							/>

							<Button
								variant="ghost"
								className="hover:text-blue-500 text-gray-500"
							>
								<Video className="size-5" />
							</Button>
							<Button
								variant="ghost"
								className="hover:text-blue-500 text-gray-500"
							>
								<Calendar className="size-5" />
							</Button>
							<Button
								variant="ghost"
								className="hover:text-blue-500 text-gray-500"
							>
								<FileTextIcon className="size-5" />
							</Button>

							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center hover:text-blue-500 text-gray-500">
									<EarthIcon className="size-5" />
									<ChevronDown className="text-gray-500 size-5" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem
										onClick={() => setValue('postStatus', true)}
									>
										<EarthIcon />
										<span className="text-sm font-sans">Public</span>
									</DropdownMenuItem>
									<DropdownMenuItem
										onClick={() => setValue('postStatus', false)}
									>
										<EarthLockIcon />
										<span className="text-sm font-sans">Private</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						<div>
							{isPending ? (
								<Button
									type="submit"
									className="font-sans font-semibold bg-blue-500 hover:bg-blue-500 flex items-center gap-1"
								>
									<Spinner />
								</Button>
							) : (
								<Button
									type="submit"
									className="font-sans font-semibold bg-blue-500 hover:bg-blue-500 flex items-center gap-1"
								>
									<Send />
									Post
								</Button>
							)}
						</div>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
};
