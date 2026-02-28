<?php
/**
 * GlobalTech Industries — WordPress Theme
 * index.php — Blog archive template
 *
 * For the one-page landing, set WordPress to show a static front page:
 * WP Admin > Settings > Reading > Your homepage displays > A static page
 */
get_header();
?>

<main id="main" class="blog-archive">
    <div class="container">
        <div class="blog-header">
            <div class="section-label">News</div>
            <h2><?php echo is_home() ? 'Blog' : get_the_archive_title(); ?></h2>
        </div>

        <?php if (have_posts()) : ?>
        <div class="blog-grid">
            <?php while (have_posts()) : the_post(); ?>
            <a href="<?php the_permalink(); ?>" class="blog-card">
                <div class="blog-card-image">
                    <?php if (has_post_thumbnail()) :
                        the_post_thumbnail('globaltech-blog-card');
                    else : ?>
                        <div class="blog-card-image-placeholder">&#9881;</div>
                    <?php endif; ?>
                </div>
                <div class="blog-card-meta">
                    <?php $cat = get_the_category(); if ($cat) : ?>
                    <span class="blog-card-category"><?php echo esc_html($cat[0]->name); ?></span>
                    <?php endif; ?>
                    <span class="blog-card-date"><?php echo get_the_date(); ?></span>
                </div>
                <div class="blog-card-body">
                    <h3><?php the_title(); ?></h3>
                    <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                </div>
            </a>
            <?php endwhile; ?>
        </div>

        <div class="blog-pagination">
            <?php the_posts_pagination(['mid_size' => 2]); ?>
        </div>

        <?php else : ?>
        <p class="blog-no-posts active">No posts found.</p>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>
