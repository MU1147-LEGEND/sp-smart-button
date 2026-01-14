import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import Button from "./components/Button";
import { Panel } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";
import ButtonContainer from "./components/ButtonContainer";
import selectedIcon from "./assets/selected.svg";
import { __ } from "@wordpress/i18n";
import "./single-button-editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { variant, hoverEffect } = attributes;

	const handleButtonClick = (btnVariant) => {
		setAttributes({ variant: btnVariant });
	};

	const handleEffectChange = (effect) => {
		setAttributes({ hoverEffect: effect });
	};
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

	return (
		<div {...useBlockProps()}>
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
					</PanelBody>

					{/* button text */}
					<PanelBody
						title={__("Button Label", "sp-smart-button")}
						initialOpen={false}
					>
						<h3>Button Label</h3>
					</PanelBody>

					{/* button icon */}
					<PanelBody title={__("Icon", "sp-smart-button")} initialOpen={false}>
						<h3>Icon</h3>
					</PanelBody>
				</Panel>
			</InspectorControls>

			<Button variant={variant} hoverEffect={hoverEffect}>
				Click Me
			</Button>
		</div>
	);
}
