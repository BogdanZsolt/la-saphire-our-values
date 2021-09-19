<?php

/*
	Plugin Name: La Saphire Our Values
	Description: Add Our Values Block to the Gutenberg Editor.
	Version: 1.0
	Author: Zsolt Bogdán
	Author URI: https://www.zsoltbogdan.hu
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class LaSaphireOV {
	function __construct(){
		add_action( 'init', array($this, 'adminAssets') );
	}

	function adminAssets(){
		wp_register_style( 'lsoveditcss', plugin_dir_url(__FILE__) . 'build/index.css');
		wp_register_script( 'ournewblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor') );
		register_block_type('ourplugin/la-saphire-our-values', array(
			'editor_script'		=> 'ournewblocktype',
			'editor_style'		=> 'lsoveditcss',
			'render_callback'	=> array( $this, 'theHTML' )
		));
	}

	function theHTML( $attributes ){
		if(!is_admin()){
			wp_enqueue_script( 'lasaphireFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array( 'wp-element' ) );
			wp_enqueue_style( 'lasaphireFrontendStyle' , plugin_dir_url(__FILE__) . 'build/frontend.css');
		}
		ob_start(); ?>
		<div class="lasaphire-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes); ?></pre></div>
		<?php return ob_get_clean();
	}
}

$lasaphireOurValues = new LaSaphireOV();