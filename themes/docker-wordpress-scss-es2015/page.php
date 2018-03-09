<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<?php get_template_part( 'meta' ); ?>
</head>

<body>
<?php get_header(); ?>

<?php the_title()?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
the_content();
endwhile; else: ?>
<p>Sorry, no posts matched your criteria.</p>
<?php endif; ?>

<?php get_footer(); ?>
</body>
</html>