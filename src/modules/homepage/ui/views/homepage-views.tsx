'use client';
import { redirect } from 'next/navigation';
import { useUser } from '../../api/get-user';
import { TopSection } from '../components/top-section';
import { PostTextarea } from '../components/post-textarea';
import { PostShow } from '../components/post-show';

export const HomepageViews = () => {
	const { data: user, isLoading, isError, error } = useUser();

	if (isLoading) return <div>Loading...</div>;

	if (isError || error) {
		redirect('/login');
	}

	return (
		<div>
			<TopSection />
			<PostTextarea />
			<PostShow />
		</div>
	);
};
