import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostResponse {
	success: boolean;
	message: string;
	liked: boolean;
	likeCount: number;
}

interface PostInput {
	id: string;
}

export const useLikeAndUnlike = () => {
	const queryClient = useQueryClient();
	return useMutation<PostResponse, Error, PostInput>({
		mutationFn: async (data) => {
			const res = await fetch(
				'http://localhost:5000/api/v1/post/addLoveOrUnlike',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					credentials: 'include',
					body: JSON.stringify(data),
				}
			);

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.message || 'Post like failed.');
			}

			const json: PostResponse = await res.json();
			return json;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['post'] });
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
