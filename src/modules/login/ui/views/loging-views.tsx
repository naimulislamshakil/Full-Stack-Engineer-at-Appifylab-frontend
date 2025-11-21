'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@/components/ui/input-group';
import { Label } from '@/components/ui/label';
import {
	EyeClosedIcon,
	EyeIcon,
	LockIcon,
	MailIcon,
	UsersIcon,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../schema/login-schema';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
	email: string;
	password: string;
}

export const LoginViews = () => {
	const [passwordType, setPasswordType] = useState(true);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (data: Props) => {
		console.log(data);
	};
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
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<Label className="font-sans mb-2">Email</Label>
							<InputGroup className="">
								<InputGroupInput
									type="email"
									{...register('email')}
									className="font-sans"
									placeholder="you@example.com"
								/>
								<InputGroupAddon>
									<MailIcon />
								</InputGroupAddon>
							</InputGroup>

							{errors.email && (
								<p className="text-red-500 mt-1">{errors.email.message}</p>
							)}
						</div>

						<div className="mt-5">
							<Label className="font-sans mb-2">Password</Label>
							<InputGroup className="">
								<InputGroupInput
									type={passwordType ? 'password' : 'text'}
									{...register('password')}
									className="font-sans"
									placeholder="****************"
								/>
								<InputGroupAddon align="inline-start">
									<LockIcon />
								</InputGroupAddon>
								<InputGroupAddon
									align="inline-end"
									onClick={() => setPasswordType(!passwordType)}
								>
									{passwordType ? <EyeIcon /> : <EyeClosedIcon />}
								</InputGroupAddon>
							</InputGroup>

							{errors.password && (
								<p className="text-red-500 mt-1">{errors.password.message}</p>
							)}
						</div>

						<Button type="submit" className="w-full rounded mt-5">
							Login
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
