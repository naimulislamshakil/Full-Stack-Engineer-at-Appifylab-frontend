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
	UserCircle2Icon,
	UsersRoundIcon,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../../schema/register-schema';
import { Button } from '@/components/ui/button';

interface Props {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const RegisterViews = () => {
	const [passwordType, setPasswordType] = useState(true);
	const [confirmPasswordType, setConfirmPasswordType] = useState(true);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerSchema),
	});

	const onSubmit = (data: Props) => {
		console.log(data);
	};
	return (
		<div className="container mx-auto min-h-screen flex items-center justify-center">
			<Card className="rounded w-2xl">
				<CardHeader className="text-center">
					<UsersRoundIcon className="mx-auto size-10 text-blue-600" />
					<h2 className="font-sans text-3xl font-semibold">Welcome Back!</h2>
					<p className="font-sans text-md text-gray-500">
						Login to your account to continue
					</p>
				</CardHeader>

				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
							<div>
								<Label className="font-sans mb-2">First Name</Label>
								<InputGroup className="">
									<InputGroupInput
										type="text"
										{...register('firstName')}
										className="font-sans"
										placeholder="Jon"
									/>
									<InputGroupAddon>
										<UserCircle2Icon />
									</InputGroupAddon>
								</InputGroup>

								{errors.firstName && (
									<p className="text-red-500 mt-1">
										{errors.firstName.message}
									</p>
								)}
							</div>
							<div>
								<Label className="font-sans mb-2">Last Name</Label>
								<InputGroup className="">
									<InputGroupInput
										type="text"
										{...register('lastName')}
										className="font-sans"
										placeholder="Don"
									/>
									<InputGroupAddon>
										<UserCircle2Icon />
									</InputGroupAddon>
								</InputGroup>

								{errors.lastName && (
									<p className="text-red-500 mt-1">{errors.lastName.message}</p>
								)}
							</div>
						</div>

						<div className="mt-5">
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

						<div className="mt-5">
							<Label className="font-sans mb-2">Confirm Password</Label>
							<InputGroup className="">
								<InputGroupInput
									type={confirmPasswordType ? 'password' : 'text'}
									{...register('confirmPassword')}
									className="font-sans"
									placeholder="****************"
								/>
								<InputGroupAddon align="inline-start">
									<LockIcon />
								</InputGroupAddon>
								<InputGroupAddon
									align="inline-end"
									onClick={() => setConfirmPasswordType(!confirmPasswordType)}
								>
									{confirmPasswordType ? <EyeIcon /> : <EyeClosedIcon />}
								</InputGroupAddon>
							</InputGroup>

							{errors.confirmPassword && (
								<p className="text-red-500 mt-1">
									{errors.confirmPassword.message}
								</p>
							)}
						</div>

						<Button type="submit" className="w-full rounded mt-5 font-sans">
							Register
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};
