import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link, linkOff } from "@wordpress/icons";
import "./style.scss";

const InputBoxSides = ({ value, onChange }) => {
	const [linked, setLinked] = useState(false);
	const maxPadding = 100;
	const minPadding = 0;

	const updateValue = (side, newValue) => {
		if (linked) {
			onChange({
				top: newValue,
				right: newValue,
				bottom: newValue,
				left: newValue,
			});
		} else {
			onChange({
				...value,
				[side]: newValue,
			});
		}
	};
	return (
		<div className="sp-smart-button-spacing-inputs">
			{["top", "right", "bottom", "left"].map((side) => (
				<div className="input-indicator-wrapper">
					<input
						max={maxPadding}
						min={minPadding}
						key={side}
						type="number"
						value={value[side]}
						onChange={(e) => {
							if (
								e.target.value <= maxPadding &&
								e.target.value >= minPadding
							) {
								updateValue(side, Number(e.target.value));
								value[side];
							}
						}}
						className={`sp-smart-button-spacing-input is-${side}`}
					/>
					<span className={`sp-input-side-indicator-${side}`}></span>
				</div>
			))}

			<Button
				icon={linked ? link : linkOff}
				onClick={() => setLinked(!linked)}
				size="small"
				className={`sp-smart-button-spacing-link ${
					linked ? "sp-linked" : "sp-not-linked"
				}`}
			/>
		</div>
	);
};

export default InputBoxSides;
