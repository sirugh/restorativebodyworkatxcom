import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_CM5XzD-x.mjs';
import 'kleur/colors';
import { b as $$Icon, a as $$Image, c as $$Button, $ as $$PageLayout } from '../chunks/PageLayout_DRUCuVYP.mjs';
import { $ as $$WidgetWrapper, a as $$Headline } from '../chunks/Headline_B-z4oYc-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://restorativebodyworkatx.com");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    subSubTitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "subSubTitle": subSubTitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 my-2 lg:my-4 py-1 px-3 rounded-md dark:bg-gray-200"> ${renderComponent($$result2, "Image", $$Image, { "class": "max-h-12 rounded-md", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 500px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 800, "height": 400, ...image })} </div>`
  )} </div> ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/components/widgets/Brands.astro", void 0);

const $$Astro = createAstro("https://restorativebodyworkatx.com");
const $$Hero2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    actions = await Astro2.slots.render("actions"),
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <!-- lg:h calculation to prevent hero from being way too big/low when with header --> <div class="py-8 md:py-2 lg:flex lg:items-center"> <div class="basis-1/2 text-center mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto lg:max-w-none"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:m-0 lg:max-w-7xl"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> ${image && renderTemplate`<div class="basis-1/2"> <div class="relative m-auto max-w-5xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "mx-auto rounded-md w-full", "widths": [400, 768, 1024, 2040], "sizes": "(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px", "loading": "eager", "width": 600, "height": 600, ...image })}`} </div> </div>`} </div> </div> </section>`;
}, "/home/user/restorativebodyworkatxcom/src/components/widgets/Hero2.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Massage Services - Deep Tissue, Cupping, Muscle Scraping in Austin",
    description: "Professional massage services in Austin: Deep tissue massage, cupping therapy, muscle scraping (IASTM), Swedish massage, pregnancy massage, and Manual Lymph Drainage."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero2", $$Hero2, { "title": "Services", "subtitle": "We offer a variety of services to help personalize your treatment.", "actions": [
    {
      variant: "primary",
      text: "Book an appointment",
      href: "https://www.massagebook.com/therapists/restorativebodyworkatx",
      icon: "tabler:calendar-plus"
    }
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Deep Tissue Massage", "subtitle": "Deep tissue massage is a therapeutic technique targeting deep muscle layers with firm pressure and slow strokes. Benefits include pain relief, improved range of motion, stress reduction, and injury rehabilitation.", "images": [
    // { src: '~/assets/images/closeups/hands-back.jpeg', alt: 'Deep tissue - back' },
    // { src: '~/assets/images/closeups/hands-back1.jpeg', alt: 'Deep tissue - back' },
    { src: "~/assets/images/closeups/hands-back2.jpeg", alt: "deep tissue massage on back" }
    // { src: '~/assets/images/closeups/hands-hand.jpeg', alt: 'Deep tissue - hands' },
    // { src: '~/assets/images/closeups/hands-leg.jpeg', alt: 'Deep tissue - legs' },
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Cupping Therapy", "subtitle": "Cupping therapy is a traditional alternative medicine practice that involves placing cups on the skin to create suction. The suction created by the cups is intended to mobilize blood flow, promote healing, and relieve muscle tension.", "subSubTitle": "* Available for appointments of any length at no extra charge", "images": [
    { src: "~/assets/images/closeups/cupping-back.jpeg", alt: "cupping therapy on back" }
    // { src: '~/assets/images/closeups/cupping-back1.jpeg', alt: 'Cupping therapy - back' },
    // { src: '~/assets/images/closeups/cupping-back2.jpeg', alt: 'Cupping therapy - back' },
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Muscle Scraping", "subtitle": "Instrument Assisted Soft Tissue Mobilization (IASTM) is a therapeutic technique that uses specialized tools to massage and manipulate soft tissues in the body. These tools are typically made of metal or plastic and have various shapes and edges. During IASTM, the therapist glides the tools over the skin, applying controlled pressure to address issues in muscles, fascia, and other connective tissues.", "subSubTitle": "* Available for appointments of any length at no extra charge", "images": [
    { src: "~/assets/images/closeups/knife-back.jpeg", alt: "muscle scraping on back" }
    // { src: '~/assets/images/closeups/knife-leg.jpeg', alt: 'IASTM - legs' },
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Pregnancy & Postpartum Massage", "subtitle": "Our pregnancy and postpartum massage services are tailored to support women during and after pregnancy. This specialized massage helps relieve common discomforts such as back pain, swelling, and fatigue while promoting relaxation and overall well-being. In the postpartum period, massage aids in recovery by reducing muscle tension, improving circulation, and providing emotional support. Each session is customized to ensure comfort and care during every stage of this beautiful journey.", "images": [
    { src: "~/assets/images/closeups/hands-back.jpeg", alt: "massage hands on back" }
    // { src: '~/assets/images/closeups/hands-back1.jpeg'},
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Swedish Massage", "subtitle": "Swedish massage involves gentle, rhythmic strokes to induce relaxation, improve circulation, relieve muscle tension, enhance flexibility, and reduce stress. It's a classic and versatile massage technique known for its calming effects.", "images": [
    { src: "~/assets/images/closeups/hands-hand.jpeg", alt: "massage hands on" }
    // { src: '~/assets/images/closeups/knife-leg.jpeg'},
  ] })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Manual Lymph Drainage (MLD)", "subtitle": "Manual Lymph Drainage (MLD) is a gentle massage technique designed to stimulate lymphatic fluid flow, promoting edema reduction, immune system support, detoxification, relaxation, and aiding post-surgical recovery. Consultation with a qualified healthcare professional or therapist is recommended for proper application.", "images": [
    { src: "~/assets/images/closeups/hands-leg.jpeg", alt: "massage hands on leg" }
    // { src: '~/assets/images/closeups/knife-leg.jpeg'},
  ] })} ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/pages/services.astro", void 0);

const $$file = "/home/user/restorativebodyworkatxcom/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
