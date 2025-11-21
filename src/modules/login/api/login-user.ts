import { useMutation } from '@tanstack/react-query';

interface LoginResponse  {
	success: boolean;
	user: {
		_id: string;
		firstName: string;
		lastName: string;
		email: string;
		pasword: string;
		post: [];
		createdAt: string;
		updatedAt: string;
		__v: number;
	};
	message: string;
	token: string;
}

interface LoginInput {
	email: string;
	password: string;
}

export const useLoginUser = () => {
	return useMutation<LoginResponse, Error, LoginInput>({
		mutationFn: async (data) => {
			const res = await fetch('http://localhost:5000/api/v1/user/login', {
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
