<?php
/**
 * GlobalTech Industries — page.php
 * Generic page template (About, Privacy Policy, etc.)
 */
get_header();
?>

<main class="single-page">
    <div class="container single-page-container">
        <?php while (have_posts()) : the_post(); ?>

        <h1 class="single-page-title"><?php the_title(); ?></h1>

        <div class="wp-content">
            <?php the_content(); ?>
        </div>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
