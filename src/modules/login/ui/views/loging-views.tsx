import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import { MailIcon, UsersIcon } from 'lucide-react';

export const LoginViews = () => {
	return (
		<div className="container mx-auto min-h-screen flex items-center justify-center">
			<Card className="rounded w-2xl">
				<CardHeader className="text-center">
					<UsersIcon className="mx-auto size-10 text-blue-600" />
					<h2 className="font-sans text-3xl font-semibold">Welcome Back!</h2>
					<p className="font-sans text-md text-gray-500">
						Login to your account to continue
					</p>
				</CardHeader>

				<CardContent>
					<div>
						<Label className="font-sans mb-2">Email</Label>
						<InputGroup className="">
							<InputGroupInput
								className="font-sans"
								placeholder="you@example.com"
							/>
							<InputGroupAddon>
								<MailIcon />
							</InputGroupAddon>
						</InputGroup>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
