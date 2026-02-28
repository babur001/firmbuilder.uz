<?php
/**
 * GlobalTech Industries — single.php
 * Individual blog post template
 */
get_header();
?>

<main class="single-post-main">
    <div class="container single-post-container">
        <?php while (have_posts()) : the_post(); ?>

        <?php $cat = get_the_category(); ?>
        <div class="single-post-header">
            <div class="section-label">
                <?php if ($cat) echo esc_html($cat[0]->name); ?>
            </div>
            <h1 class="single-post-title"><?php the_title(); ?></h1>
            <div class="single-post-meta">
                <span><?php echo get_the_date(); ?></span>
                <span>By <?php the_author(); ?></span>
            </div>
        </div>

        <?php if (has_post_thumbnail()) : ?>
        <div class="single-post-thumbnail">
            <?php the_post_thumbnail('globaltech-blog-full'); ?>
        </div>
        <?php endif; ?>

        <div class="wp-content">
            <?php the_content(); ?>
        </div>

        <div class="single-post-nav">
            <a href="<?php echo esc_url(home_url('/#blog')); ?>" class="btn-secondary">
                &larr; Back to Articles
            </a>
        </div>

        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>
