<?php

if (! defined('ABSPATH')) {
	exit;
}

function create_block_sp_smart_button_block_init()
{

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}


	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'create_block_sp_smart_button_block_init');

// creating new custom category
function shapedp_new_category($cats)
{
	// create a new array element with anything as its index
	$new = array(
		'key' => array(
			'slug'  => 'shapedplugin',
			'title' => 'ShapedPlugin'
		)
	);

	$position = 0;

	$cats = array_slice($cats, 0, $position, true) + $new + array_slice($cats, $position, null, true);

	// reset array indexes
	$cats = array_values($cats);

	return $cats;
}

add_filter('block_categories_all', 'shapedp_new_category');
