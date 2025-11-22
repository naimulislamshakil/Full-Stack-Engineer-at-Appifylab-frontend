import { useQuery } from '@tanstack/react-query';

interface User {
	success: boolean;
	user: {
		_id: string;
		firstName: string;
		lastName: string;
		email: string;
		password: string;
		posts: any[];
		createdAt: string;
		updatedAt: string;
		__v: number;
	};
}

interface Logout {
	success: boolean;
	message: string;
}

const fetchUser = async (): Promise<User> => {
	const res = await fetch('http://localhost:5000/api/v1/user/me', {
		credentials: 'include',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch users');
	}

	return res.json();
};

export const useUser = () => {
	return useQuery<User, Error>({
		queryKey: ['user'],
		queryFn: fetchUser,
		staleTime: 1000 * 60 * 5,
	});
};

export const logoutUser = async (): Promise<Logout> => {
	const res = await fetch('http://localhost:5000/api/v1/user/logout', {
		method: 'POST',
		credentials: 'include',
	});

	if (!res.ok) throw new Error('Logout failed');

	return res.json();
};
