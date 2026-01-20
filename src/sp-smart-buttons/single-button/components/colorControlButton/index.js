import { Button, ColorPicker, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";

import ResetIcon from "../../../components/icons/resetIcon";
import "./style.scss";

const ColorControl = ({
	label = "Background Color",
	value,
	onChange,
	onReset,
}) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="sp-smart-button-color-control">
			{/* Left label */}
			<span className="sp-smart-button-color-label">{label}</span>

			{/* Right actions */}
			<div className="sp-smart-button-color-actions">
				<Button
					icon={<ResetIcon />}
					label="Reset"
					onClick={onReset}
					size="small"
					className="sp-reset-button-background-fix"
				/>

				<button
					className="sp-smart-button-color-button"
					style={{ backgroundColor: value }}
					onClick={() => setOpen(true)}
				/>

				{open && (
					<Popover position="bottom right" onClose={() => setOpen(false)}>
						<ColorPicker
							color={value}
							onChangeComplete={(newColor) => onChange(newColor.hex)}
							disableAlpha
						/>
					</Popover>
				)}
			</div>
		</div>
	);
};

export default ColorControl;
