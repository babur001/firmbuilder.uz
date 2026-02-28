<?php
/**
 * GlobalTech Industries — 404.php
 * Error page template
 */
get_header();
?>

<main class="error-404">
    <div class="container error-404-container">
        <div class="error-404-content">
            <h1 class="error-404-code">404</h1>
            <h2 class="error-404-title">Page Not Found</h2>
            <p class="error-404-description">The page you're looking for doesn't exist or has been moved.</p>
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary">
                <span>Back to Home</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</main>

<?php get_footer(); ?>
