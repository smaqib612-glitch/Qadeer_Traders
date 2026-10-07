(() => {
  const productPages = {
    "Laminate Wooden Flooring": {
      eyebrow: "Laminate Flooring",
      description: "A refined wood-look finish with a warm, durable character for modern residential and commercial interiors."
    },
    "PVC UV Marble Sheets": {
      eyebrow: "PVC UV Marble",
      description: "A polished decorative surface that brings marble-inspired elegance, easy maintenance and a contemporary finish to interior walls."
    },
    "Wall Panels & PU Stone": {
      eyebrow: "Wall Panels & PU Stone",
      description: "A dimensional wall finish designed to add texture, depth and a sophisticated architectural feel to your space."
    },
    "Roller Blinds & Smart Motors": {
      eyebrow: "Roller Blinds",
      description: "A practical window solution that balances privacy, light control and clean modern styling, with smart motor options available."
    },
    "Corian Vanities & Tops": {
      eyebrow: "Corian Surfaces",
      description: "A seamless-looking surface solution with a clean, premium character for vanities, countertops and contemporary interiors."
    },
    "Custom Kitchens & Wardrobes": {
      eyebrow: "Custom Interiors",
      description: "A considered storage and kitchen design direction shaped around your space, routine and preferred visual style."
    },
    "Wallpapers & Murals": {
      eyebrow: "Wallpapers & Murals",
      description: "A distinctive decorative finish that brings pattern, personality and a polished focal point to interior walls."
    }
  };

  const pageTitle = document.querySelector(".page-title")?.textContent.trim() || "Product";
  const pageDetails = productPages[pageTitle] || {
    eyebrow: "Qadeer Traders Collection",
    description: "A carefully selected interior finish from the Qadeer Traders collection, chosen to bring lasting style and character to your space."
  };

  const modal = document.createElement("div");
  modal.className = "product-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
      <button class="product-modal-close" type="button" aria-label="Close product details">&times;</button>
      <img class="product-modal-image" alt="" />
      <div class="product-modal-content">
        <p class="product-modal-eyebrow"></p>
        <h2 class="product-modal-title" id="productModalTitle"></h2>
        <p class="product-modal-description"></p>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const image = modal.querySelector(".product-modal-image");
  const eyebrow = modal.querySelector(".product-modal-eyebrow");
  const title = modal.querySelector(".product-modal-title");
  const description = modal.querySelector(".product-modal-description");
  const closeButton = modal.querySelector(".product-modal-close");

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  };

  document.querySelectorAll(".product-card").forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    const openModal = () => {
      const cardImage = card.querySelector("img");
      const cardTitle = card.querySelector("h3")?.textContent.trim() || "Product Details";
      image.src = cardImage.src;
      image.alt = cardImage.alt || cardTitle;
      eyebrow.textContent = pageDetails.eyebrow;
      title.textContent = cardTitle;
      description.textContent = pageDetails.description;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      closeButton.focus();
    };
    card.addEventListener("click", openModal);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal();
      }
    });
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
})();
