import { LineHeightControl } from "@wordpress/block-editor";
import { FontSizePicker } from "@wordpress/components";



const TypographyPanel = ({ value, onChange }) => {
	const fontSizes = [
		{
			name: "Small",
			slug: "small",
			size: 12,
		},
		{
			name: "Medium",
			slug: "medium",
			size: 18,
		},
		{
			name: "Big",
			slug: "big",
			size: 26,
		},
	];
	return (
		<>
			<FontSizePicker
				value={value.fontSize}
				fontSizes={fontSizes}
				onChange={(size) => onChange({ ...value, fontSize: size })}
                fallbackFontSize={12}
                withReset
                withSlider
			/>

			<LineHeightControl
				value={value.lineHeight}
				onChange={(newLineHeight) =>
					onChange({ ...value, lineHeight: newLineHeight })
				}
			/>
		</>
	);
};

export default TypographyPanel;
