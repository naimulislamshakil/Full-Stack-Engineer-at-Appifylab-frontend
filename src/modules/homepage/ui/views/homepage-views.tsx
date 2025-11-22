'use client';
import { redirect } from 'next/navigation';
import { useUser } from '../../api/get-user';
import { TopSection } from '../components/top-section';

export const HomepageViews = () => {
	const { data: user, isLoading, isError, error } = useUser();

	console.log({ user, isLoading, isError, error });

	if (isLoading) return <div>Loading...</div>;

	if (isError || error) {
		redirect('/login');
	}

	return (
		<div>
			<TopSection />
		</div>
	);
};
