import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostResponse {
	success: boolean;
	message: string;
}

interface PostInput {
	text: string;
	image: string;
	postStatus: boolean;
}

export const useAddPost = () => {
	const queryClient = useQueryClient();
	return useMutation<PostResponse, Error, PostInput>({
		mutationFn: async (data) => {
			const res = await fetch('http://localhost:5000/api/v1/post/addpost', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error('Post create failed.');
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['post'] });
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
