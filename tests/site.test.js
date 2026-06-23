const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const routes = ['index.html','commercial-cleaning.html','property-cleaning.html','offices-workspaces.html','industrial-cleaning.html','end-of-lease.html','builders-cleaning.html','industries.html','blog.html','blog-post.html','about.html','contact.html','quote.html'];
const site = fs.readFileSync(path.join(root, 'site.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

test('all multipage routes exist with unique page identifiers', () => {
  routes.forEach(route => {
    const html = fs.readFileSync(path.join(root, route), 'utf8');
    assert.match(html, /data-page="[a-z]+"/);
    assert.match(html, /<title>[^<]+<\/title>/);
    assert.match(html, /site\.js/);
  });
});

test('mega menu exposes commercial and property pathways', () => {
  assert.match(site, /class="mega"/);
  assert.match(site, /Offices & workspaces/);
  assert.match(site, /End of lease cleaning/);
  assert.match(site, /Builders cleaning/);
  assert.match(site, /Blog/);
  assert.match(site, /blog-post\.html\?slug=/);
});

test('brand, required selling points and responsive behavior are present', () => {
  assert.match(site, /assets\/aila-logo\.png/);
  ['Fully insured','White Card certified','Weekend availability','After-hours service','Short-notice attendance'].forEach(point => assert.ok(site.includes(point)));
  assert.match(css, /@media\(max-width:620px\)/);
  assert.match(css, /\.mega/);
  assert.match(css, /--green:#50923a/);
  assert.match(css, /--black:#010101/);
  assert.match(site, /ailapropertysolutions@outlook\.com/);
  assert.match(site, /Melbourne, Victoria, Australia/);
  assert.match(site, /recent-work/);
  assert.match(site, /assets\/work-office-clean\.jpg/);
  assert.match(css, /grid-template-columns:34% 43% 23%/);
  assert.match(css, /white-space:nowrap/);
  assert.doesNotMatch(site, /<b>Menu<\/b>/);
  assert.match(site, /gsap@3\.13\.0/);
  assert.match(site, /ScrollTrigger/);
  assert.match(site, /prefers-reduced-motion/);
});
