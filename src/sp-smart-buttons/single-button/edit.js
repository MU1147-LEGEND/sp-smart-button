import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { Panel, PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import TabToggle from "../components/tabToggle";
import selectedIcon from "./assets/selected.svg";
import BorderRadiusControl from "./components/borderRadiusControl";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import ColorControl from "./components/colorControlButton";
import PaddingControl from "./components/paddingControl";
import RangeControlMarks from "./components/rangeControlMarks";
import "./single-button-editor.scss";
import ToolbarHeader from "../components/toolbarHeader";

export default function Edit({ attributes, setAttributes }) {
	const {
		text,
		btnUrl,
		variant,
		hoverEffect,
		generalStyleTab,
		textColor,
		bgColor,
		hoverStyles,
		borderWidth,
		borderWidthUnit,
		borderRadiusControl,
		paddingControl,
		paddingUnit,
	} = attributes;

	const handleButtonClick = (btnVariant) => {
		setAttributes({ variant: btnVariant });
	};

	// tab options
	const options = ["normal", "hover"];

	const variants = ["default", "ghost", "gradient"];
	const hoverEffects = [
		{
			effect: "Default",
			value: "default",
		},
		{
			effect: "Raise",
			value: "raise",
		},
		{
			effect: "Grad Shadow",
			value: "gradient",
		},
		{
			effect: "Shine",
			value: "shine",
		},
		{
			effect: "Multi Layers",
			value: "multi-layers",
		},
		{
			effect: "Flip",
			value: "flip",
		},
	];

	const ghostHoverEffects = [
		{
			effect: "Default",
			value: "default",
		},
		{
			effect: "Raise",
			value: "raise",
		},
		{
			effect: "Grad Shadow",
			value: "gradient",
		},
		{
			effect: "Shine",
			value: "shine",
		},
		{
			effect: "Multi Layers",
			value: "multi-layers",
		},
		{
			effect: "Flip",
			value: "flip",
		},
	]; // need to change values.

	console.log(hoverStyles);
	return (
		<div
			{...useBlockProps({
				className: `sp-parent has-hover-${hoverEffect}`,
				style: {
					"--primary-background": `${bgColor}`,
					"--primary-text-color": `${textColor}`,
					"--sp-border-w": `${borderWidth}${borderWidthUnit}`,
					// border radius inject dynamically
					"--sp-radius-top_left": `${borderRadiusControl.top_left}px`,
					"--sp-radius-top_right": `${borderRadiusControl.top_right}px`,
					"--sp-radius-bottom_right": `${borderRadiusControl.bottom_right}px`,
					"--sp-radius-bottom_left": `${borderRadiusControl.bottom_left}px`,
					// button padding inject
					"--sp-padding-top": `${paddingControl.top}${paddingUnit}`,
					"--sp-padding-right": `${paddingControl.right}${paddingUnit}`,
					"--sp-padding-bottom": `${paddingControl.bottom}${paddingUnit}`,
					"--sp-padding-left": `${paddingControl.left}${paddingUnit}`,

					// hover styles
					// button hover background color
					"--sp-hover-bg-color": `${hoverStyles.bgColor}`,
					"--sp-border-w-hover": `${hoverStyles.borderWidth}${hoverStyles.borderWidthUnit}`,
					// border radius
					"--sp-radius-top_left-hover": `${hoverStyles.borderRadiusControl.top_left}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-top_right-hover": `${hoverStyles.borderRadiusControl.top_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_right-hover": `${hoverStyles.borderRadiusControl.bottom_right}${hoverStyles.borderRadiusUnit}`,
					"--sp-radius-bottom_left-hover": `${hoverStyles.borderRadiusControl.bottom_left}${hoverStyles.borderRadiusUnit}`,
				},
			})}
		>
			<InspectorControls>
				<Panel>
					{/* button style */}
					<PanelBody title={__("General", "sp-smart-button")}>
						<>
							<h3>Buttons Style</h3>
							<div className="inspector-variant-wrapper">
								{variants.map((value) => (
									<ButtonContainer
										key={value}
										variant={variant}
										currentVariant={value}
										handleButtonClick={handleButtonClick}
										selectedIcon={selectedIcon}
									/>
								))}
							</div>
						</>

						<h3>Hover Effects</h3>
						<div className="inspector-hover-styles-wrapper">
							{(variant === "default" &&
								hoverEffects.map((effect) => (
									<div key={effect.value} className="inspector-hover-styles">
										<span className="btn-container">
											<Button
												variant={variant}
												// className={`is-hover-${effect.value}`}
												hoverEffect={effect.value}
												onClick={() => {
													setAttributes({ hoverEffect: effect.value });
												}}
											/>

											{/* showing selected tick */}
											{effect.value === hoverEffect && (
												<span className={`selected-icon`}>
													<img src={selectedIcon} alt="" />
												</span>
											)}
										</span>
										<p>{effect.effect}</p>
									</div>
								))) ||
								(variant === "ghost" &&
									ghostHoverEffects.map((effect) => (
										<div key={effect.value} className="inspector-hover-styles">
											<>
												<Button
													variant={variant}
													// className={`is-hover-${effect.value}`}
													hoverEffect={effect.value}
													onClick={() => {
														setAttributes({ hoverEffect: effect.value });
													}}
												/>
												<span>{effect.effect}</span>
											</>
										</div>
									)))}
						</div>

						{/* ----------Normal/hover tab toggler--------- */}
						<TabToggle
							value={generalStyleTab}
							tabOptions={options}
							onChange={(newOption) =>
								setAttributes({ generalStyleTab: newOption })
							}
						/>

						{generalStyleTab === "normal" && (
							<>
								{variant === "default" && (
									<ColorControl
										label={__("Background Color", "sp-smart-button")}
										value={bgColor}
										onChange={(newBgColor) =>
											setAttributes({ bgColor: newBgColor })
										}
										onReset={() => setAttributes({ bgColor: "#2563eb" })}
									/>
								)}

								<ToolbarHeader
									label={__("Border Width", "sp-smart-button")}
									unit={borderWidthUnit}
									handleReset={() => {
										setAttributes({ borderWidthUnit: "px", borderWidth: 0 });
									}}
									handleUnitChange={(newUnit) => {
										setAttributes({ borderWidthUnit: newUnit });
									}}
								/>
								<RangeControlMarks
									value={borderWidth}
									step={1}
									max={10}
									marks={true}
									onChange={(value) =>
										setAttributes({
											borderWidth: value,
										})
									}
								/>

								<BorderRadiusControl
									value={borderRadiusControl}
									onChange={(value) =>
										setAttributes({ borderRadiusControl: value })
									}
								/>

								<h3 style={{ marginTop: "15px" }}>Button Link</h3>
								<TextControl
									value={btnUrl}
									onChange={(newUrl) => setAttributes({ btnUrl: newUrl })}
									placeholder="https://example.com"
								/>

								{/* padding control single button */}
								<PaddingControl
									unit={paddingUnit}
									onChange={(val) => {
										setAttributes({ paddingControl: val });
									}}
									value={paddingControl}
									handleUnitChange={(newUnit) =>
										setAttributes({ paddingUnit: newUnit })
									}
								/>
							</>
						)}

						{generalStyleTab === "hover" && (
							<>
								<ColorControl
									label={__("Background Color", "sp-smart-button")}
									value={hoverStyles.bgColor}
									onChange={(newHoverBgColor) =>
										setAttributes({
											hoverStyles: { ...hoverStyles, bgColor: newHoverBgColor },
										})
									}
									onReset={() =>
										setAttributes({
											hoverStyles: { ...hoverStyles, bgColor: "#0751AE" },
										})
									}
								/>

								{/* border width part */}
								<ToolbarHeader
									label={__("Border Width", "sp-smart-button")}
									unit={hoverStyles.borderWidthUnit}
									handleReset={() => {
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderWidthUnit: "px",
												borderWidth: 0,
											},
										});
									}}
									handleUnitChange={(newUnit) => {
										setAttributes({
											hoverStyles: { ...hoverStyles, borderWidthUnit: newUnit },
										});
									}}
								/>
								<RangeControlMarks
									value={hoverStyles.borderWidth}
									step={1}
									max={10}
									marks={true}
									onChange={(value) =>
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderWidth: value,
											},
										})
									}
								/>

								{/* border radius part */}

								<BorderRadiusControl
									value={hoverStyles.borderRadiusControl}
									unit={hoverStyles.borderRadiusUnit}
									handleUnitChange={(newUnit) => {
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderRadiusUnit: newUnit,
											},
										});
									}}
									onChange={(value) =>
										setAttributes({
											hoverStyles: {
												...hoverStyles,
												borderRadiusControl: value,
											},
										})
									}
								/>
							</>
						)}
					</PanelBody>

					{/* button text */}
					<PanelBody
						title={__("Button Label", "sp-smart-button")}
						initialOpen={false}
					>
						<h3>Button Label</h3>
						<TextControl
							value={text}
							placeholder="Button label"
							onChange={(newText) => {
								setAttributes({ text: newText });
							}}
						/>

						{/* colot setting */}
						<ColorControl
							label={__("Color", "sp-smart-button")}
							value={textColor}
							onChange={(newTxtColor) =>
								setAttributes({ textColor: newTxtColor })
							}
							onReset={() => setAttributes({ textColor: "#FFF" })}
						/>
					</PanelBody>

					{/* button icon */}
					<PanelBody title={__("Icon", "sp-smart-button")} initialOpen={false}>
						<h3>Icon</h3>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<Button variant={variant} hoverEffect={hoverEffect} link={btnUrl}>
				{text}
			</Button>
		</div>
	);
}
