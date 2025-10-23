import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_CM5XzD-x.mjs';
import 'kleur/colors';
import { b as $$Icon, c as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_CR274QlN.mjs';
import { $ as $$WidgetWrapper, a as $$Headline } from '../chunks/Headline_B-z4oYc-.mjs';
import { twMerge } from 'tailwind-merge';
import { s as siteData } from '../chunks/site-data_CA2xTrsl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://restorativebodyworkatx.com");
const $$ItemGrid2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const {
    items = [],
    columns,
    defaultIcon = "",
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(
    ({
      title,
      description,
      icon,
      callToAction,
      classes: itemClasses = {}
    }) => renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-col",
      panelClass,
      itemClasses?.panel
    ), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "mb-2 w-10 h-10",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}<div${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`
  )}</div>`}`;
}, "/home/user/restorativebodyworkatxcom/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro = createAstro("https://restorativebodyworkatx.com");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/components/widgets/Features2.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contact Us - Restorative Bodywork Austin Location & Hours",
    description: "Contact Restorative Bodywork in South Austin. Located at 2111 Dickson Dr #14. Call (512) 920-3103 or book online. Hours: Sunday & Saturday 10am-5pm, Monday 10am-7pm."
  };
  const { businessInfo, hours } = siteData;
  const phoneLink = businessInfo.phone.replace(/[^0-9]/g, "");
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Features2", $$Features2, { "title": "Contact information, location, and hours.", "items": [
    {
      title: "Hours",
      description: `
          <i>${hours.note}</i></br>
          Sunday: ${hours.sunday}</br>
          Monday: ${hours.monday}</br>
          Tuesday: ${hours.tuesday}</br>
          Wednesday: ${hours.wednesday}</br>
          Thursday: ${hours.thursday}</br>
          Friday: ${hours.friday}</br>
          Saturday: ${hours.saturday}</br>
          `,
      icon: "tabler:clock"
    },
    {
      title: "Contact",
      description: `<a href="tel:+1${phoneLink}">${businessInfo.phone}</a></br><a href="mailto:${businessInfo.email}">${businessInfo.email}</a>`,
      icon: "tabler:mail"
    },
    {
      title: "Location",
      description: `<a href="https://www.google.com/maps?q=${encodeURIComponent(businessInfo.address + ", " + businessInfo.city + ", " + businessInfo.state + " " + businessInfo.zip)}">${businessInfo.address}, ${businessInfo.city}, ${businessInfo.state} ${businessInfo.zip}</a>`,
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/pages/contact.astro", void 0);

const $$file = "/home/user/restorativebodyworkatxcom/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
