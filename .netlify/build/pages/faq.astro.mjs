import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CM5XzD-x.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper, a as $$Headline } from '../chunks/Headline_B-z4oYc-.mjs';
import { twMerge } from 'tailwind-merge';
import { b as $$Icon, c as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_CR274QlN.mjs';
import { s as siteData } from '../chunks/site-data_CA2xTrsl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://restorativebodyworkatx.com");
const $$ItemGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", activeIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => {
    return renderTemplate`<div><div data-faq-toggle${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center icon">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2", defaultIconClass, itemClasses?.icon) })}`}${(icon || activeIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || activeIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2 hidden", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5 border-b-2">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(
      `${title ? "mt-3" : ""} text-muted overflow-hidden description mb-2`,
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(`${title || description ? "mt-3" : ""}`, actionClass, itemClasses?.actionClass), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`;
  })}</div>`}`;
}, "/home/user/restorativebodyworkatxcom/src/components/ui/ItemGrid.astro", void 0);

const $$Astro = createAstro("https://restorativebodyworkatx.com");
const $$FAQs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQs;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    items = [],
    columns = 2,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:chevron-right", "activeIcon": "tabler:chevron-down", "classes": {
    container: `${columns === 1 ? "max-w-4xl" : ""} gap-y-8 md:gap-y-12`,
    panel: "max-w-none",
    icon: "flex-shrink-0 mt-1 w-6 h-6 text-primary"
  } })} ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/components/widgets/FAQs.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "FAQ - Massage Appointment Questions & Policies",
    description: "Frequently asked questions about massage appointments, payment, cancellation policies, and what to expect at Restorative Bodywork in Austin, TX."
  };
  const { faqs } = siteData;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FAQs", $$FAQs, { "id": "faq", "title": "Frequently Asked Questions", "subtitle": "Questions about your therapeutic experience? Find answers here. If you don't see what you're looking for, please do not hesitate to contact us.", "tagline": "FAQs", "classes": { container: "max-w-6xl" }, "items": faqs })} ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/pages/faq.astro", void 0);

const $$file = "/home/user/restorativebodyworkatxcom/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
