<?php
// This file is generated. Do not modify it manually.
return array(
	'sp-smart-buttons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'sp/smart-buttons',
		'version' => '0.1.1',
		'title' => 'Sp Smart Button',
		'category' => 'shapedplugin',
		'icon' => 'smiley',
		'description' => 'A smart button block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'textdomain' => 'sp-smart-button',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'direction' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'justify' => array(
				'type' => 'string',
				'default' => 'start'
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'buttonGap' => array(
				'type' => 'number',
				'default' => 12
			),
			'isFullWidthButtons' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonGapUnit' => array(
				'type' => 'string',
				'default' => 'px'
			)
		)
	),
	'single-button' => array(
		'name' => 'sp/single-button',
		'editorScript' => 'file:./index.js',
		'parent' => array(
			'sp/smart-buttons'
		),
		'icon' => 'smiley',
		'category' => 'shapedplugin',
		'version' => '0.1.0',
		'title' => 'Single Button',
		'attributes' => array(
			'text' => array(
				'type' => 'string',
				'default' => 'Click me'
			),
			'url' => array(
				'type' => 'string',
				'default' => '#'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'default'
			)
		)
	)
);
