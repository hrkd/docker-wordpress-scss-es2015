<?php
function create_post_type() {
  // register_post_type( 'cover',  // カスタム投稿名
  //   array(
  //     'label' => 'COVER',  // 管理画面の左メニューに表示されるテキスト
  //     'public' => true,  // 投稿タイプをパブリックにするか否か
  //     'has_archive' => true,  // アーカイブを有効にするか否か
  //     'menu_position' => 4  // 管理画面上でどこに配置するか今回の場合は「投稿」の下に配置
  //     //'supports' => $exampleSupports  // 初期値だと title と editor のみ投稿画面で使える
  //   )
  // );
}

// if(function_exists('acf_add_options_page')) {
//   $option_page = acf_add_options_page(array(
//     'page_title' => 'カバー設定', // 設定ページで表示される名前
//     'menu_title' => 'カバー設定', // ナビに表示される名前
//     'menu_slug'  => 'cover_setting',
//     'capability' => 'edit_posts',
//     'redirect' => false
//   ));
// }

//add_action('init', 'create_post_type');
add_theme_support('menus');
?>
