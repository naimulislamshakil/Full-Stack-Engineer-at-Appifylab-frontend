import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

export const TopSection = () => {
	return (
		<div className="grid grid-cols-4 gap-5">
			<div className="relative w-full h-40 overflow-hidden rounded-lg">
				<Image
					src="/card_ppl1.png"
					className="absolute inset-0 w-full h-full object-cover"
					height={150}
					width={150}
					alt="My profile"
				/>

				<div className="absolute inset-0 bg-black/50"></div>

				{/* Text on top */}
				<div className="absolute bottom-10 left-13 text-white font-semibold">
					<Button
						variant="ghost"
						className="p-4 bg-blue-500 rounded-full h-10 w-10 text-white"
					>
						<PlusIcon />
					</Button>
				</div>
				<div className="absolute bottom-3 left-11 text-white font-semibold">
					<p className="font-semibold text-sm text-md mx-auto">Your Story</p>
				</div>
			</div>
			<div className="relative w-full h-40 overflow-hidden rounded-lg">
				<Image
					src="/card_ppl2.png"
					className="absolute inset-0 w-full h-full object-cover"
					height={150}
					width={150}
					alt="My profile"
				/>

				<div className="absolute inset-0 bg-black/50"></div>

				{/* Text on top */}
				<div className="absolute top-3 right-3 text-white font-semibold">
					<Avatar className="border-2">
						<AvatarImage src="/mini_pic.png" />
					</Avatar>
				</div>
				<div className="absolute bottom-3 left-6 text-white font-semibold">
					<p className="font-semibold text-sm mx-auto">Ryan Roslansky</p>
				</div>
			</div>
			<div className="relative w-full h-40 overflow-hidden rounded-lg">
				<Image
					src="/card_ppl2.png"
					className="absolute inset-0 w-full h-full object-cover"
					height={150}
					width={150}
					alt="My profile"
				/>

				<div className="absolute inset-0 bg-black/50"></div>

				{/* Text on top */}
				<div className="absolute top-3 right-3 text-white font-semibold">
					<Avatar className="border-2">
						<AvatarImage src="/mini_pic.png" />
					</Avatar>
				</div>
				<div className="absolute bottom-3 left-6 text-white font-semibold">
					<p className="font-semibold text-sm mx-auto">Ryan Roslansky</p>
				</div>
			</div>
			<div className="relative w-full h-40 overflow-hidden rounded-lg">
				<Image
					src="/card_ppl2.png"
					className="absolute inset-0 w-full h-full object-cover"
					height={150}
					width={150}
					alt="My profile"
				/>

				<div className="absolute inset-0 bg-black/50"></div>

				{/* Text on top */}
				<div className="absolute top-3 right-3 text-white font-semibold">
					<Avatar className="border-2">
						<AvatarImage src="/mini_pic.png" />
					</Avatar>
				</div>
				<div className="absolute bottom-3 left-6 text-white font-semibold">
					<p className="font-semibold text-sm mx-auto">Ryan Roslansky</p>
				</div>
			</div>
		</div>
	);
};
