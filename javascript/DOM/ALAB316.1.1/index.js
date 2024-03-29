// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//PART 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//PART 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//PART 3
menuLinks.forEach((m) => {
  const link = document.createElement("a");
  link.setAttribute("href", m.href);
  link.textContent = m.text;
  topMenuEl.appendChild(link);
});

///SECOND PART
//PART 3
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a");

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "A") {
    return;
  }

  //clear subMenu if clicked again same top link
  subMenuEl.replaceChildren();
  event.target.classList.toggle("active");
  console.log(event.target);
  topMenuLinks.forEach((anchor) => {
    if (anchor !== event.target) {
      anchor.classList.remove("active");
    }
  });
  // console.log(event.target);
  const link = menuLinks.find((obj) => {
    if (obj.text === event.target.text) {
      return true;
    }
  });

  console.log(link);

  if (link.hasOwnProperty("subLinks")) {
    buildSubMenu(link.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }
});

function buildSubMenu(array) {
  array.forEach((subLink) => {
    const a = document.createElement("a");
    a.setAttribute("href", subLink.href);
    a.textContent = subLink.text;
    subMenuEl.appendChild(a);
  });
}

subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName !== "A") {
    return;
  }

  subMenuEl.style.top = "0";

  topMenuLinks.forEach((anchor) => {
    if (anchor !== e.target) {
      anchor.classList.remove("active");
    }
  });

  mainEl.innerHTML = `<h1>${e.target.text}</h1>`;
});
