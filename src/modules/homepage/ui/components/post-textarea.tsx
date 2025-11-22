import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupTextarea,
} from '@/components/ui/input-group';
import { Calendar, FileTextIcon, Image, Send, Video } from 'lucide-react';

export const PostTextarea = () => {
	return (
		<Card className="mt-5 rounded">
			<CardContent>
				<InputGroup className="shadow-none ring-0 border-0">
					<InputGroupTextarea
						className="shadow-none ring-0 border-0 focus:ring-0 focus-visible:ring-0 font-sans"
						placeholder={`Write something...`}
					/>

					<InputGroupAddon>
						<Avatar>
							<AvatarImage src="/comment_img.png" />
						</Avatar>
					</InputGroupAddon>
				</InputGroup>

				<CardFooter className="p-2 bg-secondary flex items-center justify-between rounded">
					<div>
						<Button
							variant="ghost"
							className="hover:text-blue-500 text-gray-500"
						>
							<Image className="size-5" />
						</Button>
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
					</div>
					<div>
						<Button className="font-sans font-semibold bg-blue-500 hover:bg-blue-500">
							<Send />
							Post
						</Button>
					</div>
				</CardFooter>
			</CardContent>
		</Card>
	);
};
