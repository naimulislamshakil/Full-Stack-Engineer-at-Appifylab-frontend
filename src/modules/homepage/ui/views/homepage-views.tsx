'use client';
import { redirect } from 'next/navigation';
import { useUser } from '../../api/get-user';

export const HomepageViews = () => {
	const { data: user, isLoading, isError, error } = useUser();

	console.log({ user, isLoading, isError, error });

	if (isLoading) return <div>Loading...</div>;

	if (isError || error) {
		redirect('/login');
	}

	return (
		<div>
			<h2 className="text-gray-500">
				{user?.user.firstName} {user?.user.lastName}
			</h2>
			<p>{user?.user.email}</p>
		</div>
	);
};
