import { useState } from '@wordpress/element';
import { RangeControl, Button } from '@wordpress/components';
import ResetIcon  from './icons/resetIcon.js';
import './style.scss';

const ButtonGap = ({
	label = 'Button Gap',
	min = 0,
	max = 30,
	step = 1,
	defaultValue = 12,
	onChange,
}) => {
	const [value, setValue] = useState(defaultValue);

	const handleChange = (newValue) => {
		setValue(newValue);
		onChange?.(newValue);
	};

	const handleReset = () => {
		handleChange(defaultValue);
	};

	return (
		<div className="sp-smart-button-gap sp-control">
			<div className="sp-smart-button-gap-header">
				<span className="sp-smart-button-gap-label">
					{label}
				</span>

				<div className="sp-smart-button-gap-actions">
					<Button
						icon={<ResetIcon />}
						label="Reset"
						onClick={handleReset}
						size="small"
                        variant='tertiary'
						className="sp-smart-button-gap-reset"
					/>

					<span className="sp-smart-button-gap-unit">
						px
					</span>
				</div>
			</div>

			<RangeControl
				value={value}
				onChange={handleChange}
				min={min}
				max={max}
				step={step}
				className="sp-smart-button-gap-range"
			/>
		</div>
	);
};

export default ButtonGap;
