import { RangeControl } from "@wordpress/components";
/**
 * Range control with optional marks.
 *
 * @param {Object} props
 * @param {number} props.value
 * @param {number} [props.step=2]
 * @param {number} [props.max=30]
 * @param {boolean} [props.marks=false]
 * @param {(value: number) => void} props.onChange
 * @returns {JSX.Element}
 */

const RangeControlMarks = ({
	value = 2,
	step = 2,
	max = 30,
	onChange,
	marks,
}) => {
	return (
		<div>
			<RangeControl
				value={value}
				step={step}
				max={max}
				marks={marks}
				onChange={(value) => onChange(value)}
			/>
		</div>
	);
};

export default RangeControlMarks;
