const categories = {
  signature: {
    kicker: "Main Dish",
    title: "대표 메뉴",
    note: "테이블에서 가장 많이 주문한 메뉴",
    ingredientTitle: "대표 메뉴 재료",
    ingredientCopy: "신선한 우유, 매장에서 추출한 에스프레소, 제철 과일과 매일 준비하는 버터 베이커리 재료를 사용합니다.",
  },
  coffee: {
    kicker: "Coffee",
    title: "커피",
    note: "원두 향과 온도 선택 가능",
    ingredientTitle: "커피 재료",
    ingredientCopy: "고소한 블렌드 원두, 정제수, 신선한 우유와 바닐라 시럽을 사용해 균형 잡힌 향을 냅니다.",
  },
  tea: {
    kicker: "Tea",
    title: "티",
    note: "가볍게 마시기 좋은 블렌드",
    ingredientTitle: "티 재료",
    ingredientCopy: "얼그레이 찻잎, 캐모마일 허브, 복숭아 베이스처럼 향이 선명한 재료를 깔끔하게 우려냅니다.",
  },
  dessert: {
    kicker: "Dessert",
    title: "디저트",
    note: "커피와 함께 좋은 달콤한 메뉴",
    ingredientTitle: "디저트 재료",
    ingredientCopy: "크림치즈, 마스카포네, 초콜릿, 오트와 버터를 사용해 음료와 잘 어울리는 단맛을 만듭니다.",
  },
  dish: {
    kicker: "Light Meal",
    title: "식사",
    note: "브런치와 간단한 테이블 식사",
    ingredientTitle: "식사 메뉴 재료",
    ingredientCopy: "신선한 채소, 닭가슴살, 베이컨, 토마토 소스와 바질을 사용해 가볍지만 든든하게 준비합니다.",
  },
};

const products = [
  {
    id: "sig-latte",
    category: "signature",
    name: "크림 라떼",
    description: "부드러운 우유 거품과 진한 에스프레소가 올라간 대표 음료",
    price: 6800,
    tags: ["HOT", "ICE"],
  },
  {
    id: "sig-ade",
    category: "signature",
    name: "청포도 에이드",
    description: "상큼한 청포도와 탄산감이 살아 있는 시그니처 에이드",
    price: 7200,
    tags: ["ICE", "BEST"],
  },
  {
    id: "sig-croissant",
    category: "signature",
    name: "버터 크루아상",
    description: "겉은 바삭하고 속은 촉촉한 테이블 인기 베이커리",
    price: 5800,
    tags: ["BAKERY"],
  },
  {
    id: "americano",
    category: "coffee",
    name: "아메리카노",
    description: "깔끔한 산미와 고소한 끝맛의 기본 커피",
    price: 4500,
    tags: ["HOT", "ICE"],
  },
  {
    id: "cappuccino",
    category: "coffee",
    name: "카푸치노",
    description: "풍성한 거품과 시나몬 향이 어울리는 클래식 커피",
    price: 5600,
    tags: ["HOT"],
  },
  {
    id: "vanilla-latte",
    category: "coffee",
    name: "바닐라 라떼",
    description: "달콤한 바닐라와 고소한 우유가 어우러진 라떼",
    price: 6200,
    tags: ["HOT", "ICE"],
  },
  {
    id: "earlgrey",
    category: "tea",
    name: "얼그레이",
    description: "베르가못 향이 은은한 홍차",
    price: 5200,
    tags: ["HOT"],
  },
  {
    id: "chamomile",
    category: "tea",
    name: "캐모마일",
    description: "편안한 향의 논카페인 허브티",
    price: 5200,
    tags: ["CAFFEINE FREE"],
  },
  {
    id: "peach-iced-tea",
    category: "tea",
    name: "피치 아이스티",
    description: "복숭아 향이 산뜻한 차가운 티",
    price: 5900,
    tags: ["ICE"],
  },
  {
    id: "cheesecake",
    category: "dessert",
    name: "뉴욕 치즈케이크",
    description: "묵직하고 부드러운 크림치즈 풍미",
    price: 6900,
    tags: ["CAKE"],
  },
  {
    id: "tiramisu",
    category: "dessert",
    name: "티라미수",
    description: "에스프레소와 마스카포네 크림의 균형",
    price: 7200,
    tags: ["CAKE"],
  },
  {
    id: "cookie-set",
    category: "dessert",
    name: "쿠키 세트",
    description: "초코칩과 오트 쿠키를 함께 담은 세트",
    price: 4800,
    tags: ["SET"],
  },
  {
    id: "club-sandwich",
    category: "dish",
    name: "클럽 샌드위치",
    description: "닭가슴살, 베이컨, 신선한 채소가 들어간 든든한 메뉴",
    price: 9800,
    tags: ["MEAL"],
  },
  {
    id: "tomato-pasta",
    category: "dish",
    name: "토마토 파스타",
    description: "산뜻한 토마토 소스와 바질 향의 가벼운 파스타",
    price: 12800,
    tags: ["PASTA"],
  },
  {
    id: "soup",
    category: "dish",
    name: "오늘의 수프",
    description: "따뜻하게 제공되는 매장 추천 수프",
    price: 6500,
    tags: ["HOT"],
  },
];

const cart = new Map();
const productGrid = document.querySelector("#product-grid");
const categoryButtons = document.querySelectorAll(".category-tabs button");
const categoryKicker = document.querySelector("#category-kicker");
const categoryTitle = document.querySelector("#category-title");
const categoryNote = document.querySelector("#category-note");
const ingredientTitle = document.querySelector("#ingredient-title");
const ingredientCopy = document.querySelector("#ingredient-copy");
const orderItems = document.querySelector("#order-items");
const orderTotal = document.querySelector("#order-total");
const orderCount = document.querySelector("#order-count");
const statusMessage = document.querySelector("#status-message");
let activeCategory = "signature";

function formatPrice(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function renderProducts() {
  const filtered = products.filter((product) => product.category === activeCategory);
  productGrid.innerHTML = filtered
    .map(
      (product) => {
        const quantity = cart.get(product.id)?.quantity ?? 0;
        return `
        <article class="product-card">
          <div class="product-top">
            <h3>${product.name}</h3>
            <span class="price">${formatPrice(product.price)}</span>
          </div>
          <p>${product.description}</p>
          <div>
            <div class="tag-row">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
            <div class="menu-quantity" aria-label="${product.name} 수량 선택">
              <button type="button" data-product-decrease="${product.id}">-</button>
              <output>${quantity}</output>
              <button type="button" data-product-increase="${product.id}">+</button>
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function syncProductsAndCart() {
  renderProducts();
  renderCart();
}

function renderCart() {
  if (cart.size === 0) {
    orderItems.innerHTML = '<p class="empty-cart">메뉴를 선택하면 주문 내역이 표시됩니다.</p>';
    orderTotal.textContent = "0원";
    orderCount.textContent = "선택한 메뉴 없음";
    return;
  }

  let total = 0;
  let count = 0;
  orderItems.innerHTML = [...cart.values()]
    .map(({ product, quantity }) => {
      total += product.price * quantity;
      count += quantity;
      return `
        <article class="cart-item">
          <div class="cart-line">
            <strong>${product.name}</strong>
            <span>${formatPrice(product.price * quantity)}</span>
          </div>
          <div class="quantity-row">
            <div class="quantity-controls" aria-label="${product.name} 수량">
              <button type="button" data-decrease="${product.id}">-</button>
              <output>${quantity}</output>
              <button type="button" data-increase="${product.id}">+</button>
            </div>
            <button class="remove-button" type="button" data-remove="${product.id}">삭제</button>
          </div>
        </article>
      `;
    })
    .join("");

  orderTotal.textContent = formatPrice(total);
  orderCount.textContent = `${count}개 메뉴 선택`;
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = cart.get(productId);
  cart.set(productId, {
    product,
    quantity: existing ? existing.quantity + 1 : 1,
  });
  statusMessage.textContent = `${product.name} 담김`;
  syncProductsAndCart();
}

function updateQuantity(productId, delta) {
  const existing = cart.get(productId);
  if (!existing && delta <= 0) return;
  if (!existing) {
    addToCart(productId);
    return;
  }
  const nextQuantity = existing.quantity + delta;
  if (nextQuantity <= 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, { ...existing, quantity: nextQuantity });
  }
  syncProductsAndCart();
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    categoryKicker.textContent = categories[activeCategory].kicker;
    categoryTitle.textContent = categories[activeCategory].title;
    categoryNote.textContent = categories[activeCategory].note;
    ingredientTitle.textContent = categories[activeCategory].ingredientTitle;
    ingredientCopy.textContent = categories[activeCategory].ingredientCopy;
    renderProducts();
  });
});

productGrid.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-product-increase]");
  const decrease = event.target.closest("[data-product-decrease]");

  if (increase) updateQuantity(increase.dataset.productIncrease, 1);
  if (decrease) updateQuantity(decrease.dataset.productDecrease, -1);
});

orderItems.addEventListener("click", (event) => {
  const increase = event.target.closest("[data-increase]");
  const decrease = event.target.closest("[data-decrease]");
  const remove = event.target.closest("[data-remove]");

  if (increase) updateQuantity(increase.dataset.increase, 1);
  if (decrease) updateQuantity(decrease.dataset.decrease, -1);
  if (remove) {
    cart.delete(remove.dataset.remove);
    syncProductsAndCart();
  }
});

document.querySelector("#clear-cart").addEventListener("click", () => {
  cart.clear();
  statusMessage.textContent = "주문 내역을 비웠습니다.";
  syncProductsAndCart();
});

document.querySelector("#call-staff").addEventListener("click", () => {
  statusMessage.textContent = "직원을 호출했습니다.";
});

document.querySelector("#submit-order").addEventListener("click", () => {
  if (cart.size === 0) {
    statusMessage.textContent = "메뉴를 먼저 선택해 주세요.";
    return;
  }
  statusMessage.textContent = "주문이 접수되었습니다.";
  cart.clear();
  syncProductsAndCart();
});

renderProducts();
renderCart();
