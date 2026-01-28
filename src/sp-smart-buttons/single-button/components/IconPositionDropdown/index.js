import SpSelectControl from "../../../components/spSelectControl";

const IconPositionDropdown = ({ value, onChange }) => {
	const options = [
		{ label: "Left", value: "left" },
		{ label: "Right", value: "right" },
	];

	return (
		<SpSelectControl
			label="Icon Position"
			value={value}
			options={options}
			onChange={onChange}

		/>
	);
};

export default IconPositionDropdown;
