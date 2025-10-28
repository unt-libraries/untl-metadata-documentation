
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

/* Fix accessibility issues with docutils tables */
function isOnlyArrows(text) {
  return /^>+$/.test(text.replace(/\s+/g, ''));
}

function isVisuallyEmpty(node) {
  // Consider empty if no text or only whitespace/non-breaking spaces/zero-width chars
  const text = (node.textContent || '')
    .replace(/\u00A0/g, ' ')     // nbsp
    .replace(/[\u200B-\u200D\u2060]/g, '') // zero-width chars
    .trim();
  return text.length === 0;
}

function ensureHeaderName(th, fallback) {
  // If the header is visually empty, give it an accessible name.
  if (isVisuallyEmpty(th)) {
    // Prefer aria-label (non-visual), fall back to visually hidden text node.
    if (!th.hasAttribute('aria-label')) {
      th.setAttribute('aria-label', fallback);
    }
    if (!th.querySelector('.visually-hidden')) {
      const span = document.createElement('span');
      span.className = 'visually-hidden';
      span.textContent = fallback;
      th.appendChild(span);
    }
  }
  // Make sure it's scoped as a column header.
  th.setAttribute('scope', 'col');
}

document.addEventListener('DOMContentLoaded', function () {
  // Target only docutils tables rendered by Sphinx
  document.querySelectorAll('table.docutils').forEach(function (table) {
    const thead = table.querySelector('thead');
    if (thead) {
      const headers = Array.from(thead.querySelectorAll('tr:first-child > th'));
      headers.forEach((th, i) => {
        // Generic fallback: Column N
        const fallback = ('Column ' + (i + 1));
        ensureHeaderName(th, fallback);
      });
    }

    // Mark purely decorative arrow cells as hidden from AT
    table.querySelectorAll('tbody tr').forEach(function (tr) {
      const cells = Array.from(tr.children);
      if (cells.length === 0) return;
      cells.forEach(function (cell) {
        const text = (cell.textContent || '').trim();
        if (isOnlyArrows(text)) {
          cell.setAttribute('aria-hidden', 'true');
          cell.setAttribute('role', 'presentation');
        }
      });
    });
  });
});

// Make unique titles for header permalinks
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.headerlink').forEach(a => {
    const parent = a.parentElement;
    if (!parent) return;

    const clone = parent.cloneNode(true);
    const cloneLink = clone.querySelector('.headerlink');
    if (cloneLink) cloneLink.remove();

    let text = (clone.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return;

    if (text.length > 120) text = `${text.slice(0, 117)}...`;
    const title = `Permalink to "${text}"`;

    a.setAttribute('title', title);
    a.setAttribute('aria-label', title);
  });
});
