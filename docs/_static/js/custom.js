
/* Find all elements with role="heading" and set the aria-level attribute
  * based on the inferred heading level. This may no longer be needed if
  * Sphinx starts using semantic HTML5 elements for headings.
 */
document.addEventListener("DOMContentLoaded", function() {
  const headings = document.querySelectorAll('p[role="heading"]');
  headings.forEach(function(heading) {
    // Determine the heading level from the context or data attribute
    const level = heading.getAttribute('data-level') || inferHeadingLevel(heading);
    heading.setAttribute('aria-level', level);
  });

  function inferHeadingLevel(heading) {
    // Infer the heading level based on its position in the DOM or other logic
    const parent = heading.closest('div, section');
    if (parent) {
      const parentLevel = parseInt(parent.getAttribute('aria-level')) || 1;
      return parentLevel + 1; // Increase level by 1 relative to parent
    }
    return 1; // Default to level 1 if no context is available
  }
});
