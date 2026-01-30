import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link, linkOff } from "@wordpress/icons";

const InputBoxCorners = ({ value, onChange }) => {
	const [linked, setLinked] = useState(false);
	const maxRadius = 35;
	const minRadius = 0;

	const updateValue = (corner, newValue) => {
		if (linked) {
			onChange({
				top_left: newValue,
				top_right: newValue,
				bottom_right: newValue,
				bottom_left: newValue,
			});
		} else {
			onChange({
				...value,
				[corner]: newValue,
			});
		}
	};
	return (
		<div className="sp-smart-button-corner-inputs">
			{["top_left", "top_right", "bottom_right", "bottom_left"].map(
				(corner) => (
					<span style={{ position: "relative" }} key={corner}>
						<input
							type="number"
							max={maxRadius}
							min={minRadius}
							value={value[corner]}
							onChange={(e) => {
								if (
									e.target.value <= maxRadius &&
									e.target.value >= minRadius
								) {
									updateValue(corner, Number(e.target.value));
									value[corner];
								}
							}}
							className={`sp-smart-button-corner-input is-${corner}`}
						/>
						<div className={`box-corner-${corner}`}></div>
					</span>
				),
			)}

			<Button
				icon={linked ? link : linkOff}
				onClick={() => setLinked(!linked)}
				size="small"
				className={`sp-smart-button-corner-link ${
					linked ? "sp-linked" : "sp-not-linked"
				}`}
			/>
		</div>
	);
};

export default InputBoxCorners;
