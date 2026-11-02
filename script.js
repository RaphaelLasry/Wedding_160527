const config = window.weddingConfig || {};

function secureUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

document.querySelectorAll('[data-config]').forEach((link) => {
  const key = link.dataset.config;
  const url = secureUrl(config[key]);
  if (!url) return;
  link.href = url;
  link.hidden = false;
  document.querySelectorAll(`[data-pending="${key}"]`).forEach((notice) => {
    notice.hidden = true;
  });
});

const rsvpEmbedUrl = secureUrl(config.rsvpEmbedUrl);
if (rsvpEmbedUrl) {
  const embedUrl = new URL(rsvpEmbedUrl);
  if (embedUrl.hostname === 'docs.google.com' && /^\/forms\/d\/e\/[^/]+\/viewform$/.test(embedUrl.pathname)) {
    embedUrl.searchParams.set('embedded', 'true');
    document.querySelector('#rsvp-embed').src = embedUrl.href;
  }
}

if (config.responseDeadline) {
  document.querySelector('#response-deadline').textContent = `Merci de nous répondre avant le ${config.responseDeadline}.`;
}