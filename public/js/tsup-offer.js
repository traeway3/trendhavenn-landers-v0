/* tsup-offer.js
   Builds the offer link at RUNTIME (kept out of the lander HTML) and wires the CTA +
   Quick-Tip (21+) interstitial. Reads the inbound subID from the URL and carries it into s1.
   Upload to: https://www.tokrwd.co/js/tsup-offer.js  (referenced by the lander as /js/tsup-offer.js)
*/
(function () {
  // Respect the subID gate — a blank/untagged page never wires an offer.
  if (window.__SUBID_OK === false) return;

  // 1) Capture the inbound subID (s1 primary; common alternates as fallback).
  var p = new URLSearchParams(location.search);
  var sub = p.get('s1') || p.get('sub1') || p.get('campid') || p.get('cid') || p.get('c') || '';

  // 2) Build the offer URL, carrying the subID into s1.
  var OFFER = 'https://montrk3.co.uk/?a=26648&c=56132&s1=' + encodeURIComponent(sub);

  var overlay = document.getElementById('tipOverlay');
  function openTip(e) { if (e) e.preventDefault(); if (overlay) overlay.hidden = false; }
  function closeTip() { if (overlay) overlay.hidden = true; }

  // 3) Main CTA(s): set a real href (fallback) but open the 21+ Quick-Tip first.
  var links = document.querySelectorAll('.offer-link');
  for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('href', OFFER);
    links[i].addEventListener('click', openTip);
  }

  // 4) Quick-Tip "Got it" -> continue to the offer (subID carried).
  var go = document.getElementById('tipGo');
  if (go) {
    go.setAttribute('href', OFFER);
    go.addEventListener('click', function (e) { e.preventDefault(); window.location.href = OFFER; });
  }

  // 5) Close controls.
  var close = document.getElementById('tipClose');
  if (close) close.addEventListener('click', function (e) { e.preventDefault(); closeTip(); });
  if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) closeTip(); });
})();
