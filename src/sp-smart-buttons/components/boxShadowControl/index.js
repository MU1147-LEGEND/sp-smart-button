import { RangeControl } from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import ColorControl from "../../single-button/components/colorControlButton";
import ToolbarHeader from "../toolbarHeader";
import "./style.scss";

const DEFAULT_SHADOW = {
	x: 0,
	y: 8,
	blur: 20,
	spread: 0,
	color: "rgba(0,0,0,0.25)",
};

const buildShadow = ({ x, y, blur, spread, color }) =>
	`${x}px ${y}px ${blur}px ${spread}px ${color}`;

const BoxShadowControl = ({ label, value = DEFAULT_SHADOW, onChange }) => {
	const [shadow, setShadow] = useState(value);

	useEffect(() => {
		setShadow(value);
	}, [value]);

	const updateShadow = (key, newValue) => {
		const updated = { ...shadow, [key]: newValue };
		setShadow(updated);
		onChange?.(updated);
	};

	const handleReset = () => {
		setShadow(DEFAULT_SHADOW);
		onChange?.(DEFAULT_SHADOW);
	};

	return (
		<div className="sp-box-shadow-control">
			{/* Header */}
			<ToolbarHeader
				label={__(label, "sp-smart-button")}
				hasUnit={false}
				handleReset={handleReset}
			/>

			{/* Sliders */}
			<div className="sp-box-shadow-sliders sp-control">
				<RangeControl
					label="X"
					value={shadow.x}
					onChange={(v) => updateShadow("x", v)}
					min={-50}
					max={50}
				/>

				<RangeControl
					label="Y"
					value={shadow.y}
					onChange={(v) => updateShadow("y", v)}
					min={-50}
					max={50}
				/>

				<RangeControl
					label="Blur"
					value={shadow.blur}
					onChange={(v) => updateShadow("blur", v)}
					min={0}
					max={100}
				/>

				<RangeControl
					label="Spread"
					value={shadow.spread}
					onChange={(v) => updateShadow("spread", v)}
					min={-50}
					max={50}
				/>
			</div>

			{/* Color */}
			<div className="sp-box-shadow-color">
				<ColorControl
					label="Shadow Color"
					value={shadow.color}
					onChange={(c) => updateShadow("color", c)}
					onReset={() => updateShadow("color", DEFAULT_SHADOW.color)}
				/>
			</div>

			{/* Preview */}
			<div className="sp-box-shadow-preview">
				<p style={{ margin: "0" }}>Preview</p>
				<div
					className="sp-box-shadow-preview-box"
					style={{ boxShadow: buildShadow(shadow) }}
				/>
			</div>
		</div>
	);
};

export default BoxShadowControl;
