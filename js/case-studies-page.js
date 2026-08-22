// Renders the full case-study grid on case-studies.html from the shared
// data in js/cases-data.js (loaded first).
(() => {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  document.getElementById('case-studies-grid').innerHTML = (window.FV_CASES || []).map(([title, body, tag, img]) => `
    <div style="border:1px solid #232327;border-radius:5px;overflow:hidden;background:#121214;display:flex;flex-direction:column">
      <div style="height:150px;overflow:hidden;background:#0B0B0D"><img src="images/case-studies/${img}" alt="${esc(title)}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;filter:saturate(0.9) contrast(1.03)"></div>
      <div style="padding:16px 18px 18px;flex:1;display:flex;flex-direction:column">
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:500;font-size:16px;color:#F7F7F8;line-height:1.25;min-height:40px">${esc(title)}</div>
        <div style="font-size:14px;color:#B3B6BC;margin-top:6px;flex:1">${esc(body)}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#8C8C94;letter-spacing:0.08em;margin-top:14px;padding-top:10px;border-top:1px solid #232327">${esc(tag)}</div>
      </div>
    </div>`).join('');
})();
