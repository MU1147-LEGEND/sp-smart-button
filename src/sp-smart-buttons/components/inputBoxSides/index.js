import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link, linkOff } from "@wordpress/icons";

const InputBoxSides = ({ value, onChange }) => {
	const [linked, setLinked] = useState(false);

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
				<input
					key={side}
					type="number"
					value={value[side]}
					onChange={(e) => {
						updateValue(side, Number(e.target.value));
						value[side];
					}}
					className={`sp-smart-button-spacing-input is-${side}`}
				/>
			))}

			<Button
				icon={linked ? link : linkOff}
				onClick={() => setLinked(!linked)}
				size="small"
				className="sp-smart-button-spacing-link"
			/>
		</div>
	);
};

export default InputBoxSides;
