// Renders the full post grid on blog.html from the shared data in
// js/blog-data.js (loaded first).
(() => {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.getElementById('blog-page-grid').innerHTML = (window.FV_BLOG || []).map((p) => `
    <article class="lift-hover" style="border:1px solid #232327;border-radius:5px;overflow:hidden;background:#121214;display:flex;flex-direction:column">
      <div style="height:190px;overflow:hidden;background:#0B0B0D"><img src="images/blog/${p.img}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div>
      <div style="padding:20px 22px 22px;flex:1;display:flex;flex-direction:column">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <span style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#EC4453;background:rgba(230,46,62,0.12);border:1px solid rgba(230,46,62,0.30);padding:3px 9px;border-radius:20px">${esc(p.tag)}</span>
          <span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#8C8C94">${esc(p.date)} · ${esc(p.readTime)}</span>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:19px;color:#F7F7F8;line-height:1.3;margin-bottom:10px;flex:1">${esc(p.title)}</div>
        <div style="font-size:14.5px;color:#B3B6BC;line-height:1.55;margin-bottom:16px">${esc(p.excerpt)}</div>
        <a href="blog/${p.slug}.html" class="hv-accent" style="cursor:pointer;font-family:'IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:0.06em;color:#F7F7F8">READ MORE →</a>
      </div>
    </article>`).join('');
})();
