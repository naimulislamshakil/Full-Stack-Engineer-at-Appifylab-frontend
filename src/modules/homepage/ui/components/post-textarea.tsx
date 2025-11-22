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
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postSchema } from '../../schema/post-schema';
import { toast } from 'sonner';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Separator } from '@/components/ui/separator';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Props {
	text: string;
	image: File | null;
	postStatus?: boolean;
}

export const PostTextarea = () => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isValid },
	} = useForm<Props>({
		defaultValues: {
			text: '',
			image: null,
		},
		resolver: yupResolver(postSchema),
		mode: 'onChange',
	});

	const watchedFile = watch('image');

	useEffect(() => {
		if (!watchedFile) {
			setPreviewUrl(null);
			return;
		}
		const url = URL.createObjectURL(watchedFile);
		setPreviewUrl(url);
		return () => URL.revokeObjectURL(url);
	}, [watchedFile]);

	if (errors) {
		if (errors.image) {
			toast.error(errors.image.message);
		}
		if (errors.text) {
			toast.error(errors.text.message);
		}
	}

	const submit = (data: Props) => {
		console.log('Form submitted:', data);
	};

	// Trigger hidden file input
	const handleFileClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		setValue('image', file, { shouldValidate: true });
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
							<Button
								type="submit"
								className="font-sans font-semibold bg-blue-500 hover:bg-blue-500 flex items-center gap-1"
							>
								<Send />
								Post
							</Button>
						</div>
					</CardFooter>
				</form>
			</CardContent>
		</Card>
	);
};
