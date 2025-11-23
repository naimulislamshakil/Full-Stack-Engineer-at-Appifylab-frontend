import { useMutation, useQueryClient } from '@tanstack/react-query';

interface CommentResponse {
	success: boolean;
	message: string;
}

interface CommentInput {
	postId: string;
	comment: string;
}

export const useAddComment = () => {
	const queryClient = useQueryClient();
	return useMutation<CommentResponse, Error, CommentInput>({
		mutationFn: async (data) => {
			const res = await fetch('http://localhost:5000/api/v1/post/addComment', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.message || 'Post like failed.');
			}

			const json: CommentResponse = await res.json();
			return json;
		},
		onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['post'] });
            queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};
