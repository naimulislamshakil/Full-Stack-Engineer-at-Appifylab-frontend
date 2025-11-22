import * as Yup from 'yup';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const SUPPORTED_FORMATS = [
	'image/jpg',
	'image/jpeg',
	'image/png',
	'image/webp',
];

export const postSchema = Yup.object().shape({
	text: Yup.string()
		.required('Text is required')
		.min(3, 'Text must be at least 3 characters')
		.max(1000, 'Text is too long'),

	postStatus: Yup.boolean().default(true),

	// image is expected to be a File object (from input[type="file"])
	image: Yup.mixed()
		.required('Image is required')
		.test('fileSize', 'Image must be less than 2 MB', (value) => {
			if (!value) return false;
			// value may be File or FileList: handle both
			const file = value instanceof FileList ? value[0] : value;
			return file && file.size <= MAX_FILE_SIZE;
		})
		.test('fileType', 'Unsupported image format', (value) => {
			if (!value) return false;
			const file = value instanceof FileList ? value[0] : value;
			return file && SUPPORTED_FORMATS.includes(file.type);
		}),
});
