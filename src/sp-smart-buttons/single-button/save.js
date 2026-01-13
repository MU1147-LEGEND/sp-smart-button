import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { text, url } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<a href={url} className="sp-single-button">
				{text}
			</a>
		</div>
	);
}
