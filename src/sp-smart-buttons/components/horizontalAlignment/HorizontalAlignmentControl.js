import { Tooltip } from "@wordpress/components";
import "./horizontalAlignStyle.scss";
import AlignCenterIcon from "./icons/AlignCenter";
import AlignRightIcon from "./icons/AlignRightIcon";
import AlignLeftIcon from "./icons/AlignLeft";
import SpaceAroundIcon from "./icons/SpaceAroundIcon";
import SpaceBetweenIcon from "./icons/SpaceBetweenIcon";
import SpaceEvenIcon from "./icons/SpaceEvenIcon";

const OPTIONS = [
	{
		value: "flex-start",
		label: "Align left",
		Icon: AlignLeftIcon,
	},
	{
		value: "center",
		label: "Align center",
		Icon: AlignCenterIcon,
	},
	{
		value: "flex-end",
		label: "Align right",
		Icon: AlignRightIcon,
	},
	{
		value: "space-between",
		label: "Space Between",
		Icon: SpaceBetweenIcon,
	},
	{
		value: "space-around",
		label: "Space Around",
		Icon: SpaceAroundIcon,
	},
	{
		value: "space-evenly",
		label: "Space Evenly",
		Icon: SpaceEvenIcon,
	},
];

export default function HorizontalAlignmentControl({
	value = "flex-start",
	onChange,
}) {
	return (
		<div className="sp-align-control">
			{OPTIONS.map(({ value: option, label, Icon }) => (
				<Tooltip text={label} key={option}>
					<button
						type="button"
						className={`sp-align-control__btn ${
							value === option ? "is-active" : ""
						}`}
						onClick={() => onChange(option)}
						aria-pressed={value === option}
						aria-label={label}
					>
						<Icon />
					</button>
				</Tooltip>
			))}
		</div>
	);
}
