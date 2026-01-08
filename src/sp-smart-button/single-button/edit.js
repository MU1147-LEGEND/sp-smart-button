import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	return <div {...useBlockProps()}>Child Button Block</div>;
}
