
import { useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Sp Smart Button – hello from the saved content!' }
		</p>
	);
}
