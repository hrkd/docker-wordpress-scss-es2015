<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<?php get_template_part( 'meta' ); ?>

</head>

<body>
<?php get_header(); ?>

INDEX
<?php
/* Get custom post type article

$loop = new WP_Query( array( 'post_type' => 'custom_type_name', 'posts_per_page'=>100));
while ( $loop->have_posts() ) : $loop->the_post();
*/
?>

<h2><?php //the_title()?></h2>
<?php //the_field('link')?>
<p><?php //the_field('description')?></p>

<?php //endwhile;?>

<?php get_footer(); ?>

</body>
</html>