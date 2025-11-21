import { useMutation } from '@tanstack/react-query';

interface RegisterResponse {
	success: boolean;
	message: string;
}

interface RegisterInput {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export const useRegisterUser = () => {
	return useMutation<RegisterResponse, Error, RegisterInput>({
		mutationFn: async (data) => {
			const res = await fetch('http://localhost:5000/api/v1/user/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error('Register Failed.');
			return res.json();
		},
	});
};
