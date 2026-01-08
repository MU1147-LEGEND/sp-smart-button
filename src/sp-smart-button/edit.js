import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["sp/single-button"]}
				template={[["sp/single-button"]]}
				templateLock={false}
			/>
		</div>
	);
}
