import { Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { link, linkOff } from "@wordpress/icons";

import ToolbarHeader from "../toolbarHeader";
import "./style.scss";

const DEFAULT_VALUES = {
	top: 10,
	right: 8,
	bottom: 10,
	left: 8,
};

const MarginControl = ({
	label = "Margin",
	value = DEFAULT_VALUES,
	unit = "px",
	onChange,
	handleUnitChange,
}) => {
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

	const handleReset = () => {
		onChange(DEFAULT_VALUES);
	};

	return (
		<div className="sp-smart-button-spacing">
			<ToolbarHeader
				label={label}
				unit={unit}
				handleUnitChange={handleUnitChange}
				handleReset={handleReset}
			/>

			<div className="sp-smart-button-spacing-inputs">
				{["top", "right", "bottom", "left"].map((side) => (
					<input
						key={side}
						type="number"
						value={value[side]}
						onChange={(e) => {
							updateValue(side, Number(e.target.value));
                            value[side]
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
		</div>
	);
};

export default MarginControl;
