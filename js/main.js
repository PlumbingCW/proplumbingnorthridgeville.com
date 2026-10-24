(function () {
  "use strict";
  var toggle = document.getElementById("mob-toggle");
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var closeBtn = document.getElementById("drawer-close");

  function openDrawer() {
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.classList.add("visible");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.classList.remove("visible");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.documentElement.style.overflow = "";
  }
  if (toggle && drawer && overlay) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (closeBtn) { closeBtn.addEventListener("click", closeDrawer); }
    overlay.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeDrawer(); } });
    drawer.querySelectorAll(".drawer-toggle").forEach(function (b) {
      b.addEventListener("click", function () {
        var group = b.parentNode;
        var isOpen = group.classList.toggle("open");
        b.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.querySelectorAll(".acc-head").forEach(function (head) {
    head.addEventListener("click", function () {
      var item = head.parentNode;
      var open = item.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
      var plus = head.querySelector(".plus");
      if (plus) { plus.textContent = open ? "−" : "+"; }
    });
  });
})();
