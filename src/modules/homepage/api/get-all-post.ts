import { useQuery } from '@tanstack/react-query';

interface Post {
	success: boolean;
	post: [
		{
			_id: string;
			text: string;
			postStatus: boolean;
			image: string;
			user: any[];
			like: any[];
			comment: any[];
			createdAt: string;
			updatedAt: string;
			__v: number;
		}
	];
}

export const useGetAllPost = () => {
	return useQuery<Post[], Error>({
		queryKey: ['post'],
		queryFn: async (): Promise<Post[]> => {
			const res = await fetch('http://localhost:5000/api/v1/post/getAllPost', {
				credentials: 'include',
			});

			if (!res.ok) {
				throw new Error('Failed to fetch users');
			}

			return res.json();
		},
		staleTime: 1000 * 60 * 5,
	});
};
