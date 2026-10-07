document.querySelectorAll(".navbar").forEach((navbar) => {
  const container = navbar.querySelector(".nav-container");
  const nav = navbar.querySelector(".nav");
  if (!container || !nav || navbar.querySelector(".nav-toggle")) return;

  const toggle = document.createElement("button");
  toggle.className = "mobile-nav-toggle";
  toggle.type = "button";
  toggle.setAttribute("aria-label", "Toggle navigation");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
  container.insertBefore(toggle, nav);

  const closeMenu = () => {
    nav.classList.remove("mobile-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("mobile-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("no-scroll", isOpen);
  });

  nav.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.addEventListener("click", () => {
      const dropdown = dropdownToggle.closest(".dropdown");
      const isOpen = dropdown.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
});
