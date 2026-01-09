import { useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	console.log("child bllock");
	return <div {...useBlockProps()} id="child-block">Child Button Block</div>;
}
