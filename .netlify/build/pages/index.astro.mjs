import { d as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, r as renderComponent, a as renderTemplate, b as addAttribute } from '../chunks/astro/server_CM5XzD-x.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$PageLayout } from '../chunks/PageLayout_CR274QlN.mjs';
import { s as siteData } from '../chunks/site-data_CA2xTrsl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://restorativebodyworkatx.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    id,
    image = await Astro2.slots.render("image")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-4"${spreadAttributes(id ? { id } : {})}> <div class="flex items-center justify-center w-full h-[250px] md:h-[300px] bg-cover bg-center shadow-lg"> ${renderComponent($$result, "Image", $$Image, { "class": "h-[250px] md:h-[300px]", "loading": "eager", "style": "max-width:100%;", ...image })} <button id="appointment" class="absolute flex bg-black bg-opacity-70 text-white text-xl font-bold px-6 py-3 hover:bg-opacity-100 rounded-full transition-all">Book an Appointment</button> </div> </section> `;
}, "/home/user/restorativebodyworkatxcom/src/components/widgets/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Restorative Bodywork - Therapeutic Massage in Austin, TX",
    description: "Professional therapeutic massage services in South Austin. Deep tissue, cupping, muscle scraping, Swedish massage, and Manual Lymph Drainage. Book your appointment today.",
    ignoreTitleTemplate: true
  };
  const { businessInfo, pricing } = siteData;
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "actions": [
    {
      variant: "primary",
      text: "Book an appointment",
      href: businessInfo.bookingUrl,
      icon: "tabler:calendar-plus"
    }
  ], "image": { src: "~/assets/images/closeups/hands-back1.jpeg", alt: "Restorative Bodywork Hero" } })} ${maybeRenderHead()}<div class="w-full p-4"> <h2 class="text-2xl font-semibold text-center">Our Rates</h2> <div class="flex flex-col md:flex-row justify-center"> ${pricing.map((item) => renderTemplate`<a${addAttribute(businessInfo.bookingUrl, "href")} target="_blank" rel="noopener noreferrer" class="w-full bg-white shadow-md rounded-lg m-1 md:m-6 p-6 text-center hover:shadow-inner hover:bg-opacity-20 hover:bg-[#3d785c] transition-all"> <div class="block text-sm font-bold text-left">
Duration:
<span class="text-xs md:text-sm">${item.duration}</span> </div> <span class="block text-sm font-bold text-left">Cost: $${item.price}</span> </a>`)} </div> </div>  <div class="w-full p-4"> <h2 class="text-2xl font-semibold text-center">Contact Us</h2> <div class="flex flex-col md:flex-row justify-center"> <!-- Card 2 --> <a href="/about" class="space-x-0.5 m-1 md:m-6 p-6 text-center"> <div class="mb-5 text-xl font-[cursive]">Hi, I'm Rose!</div> <div class="overflow-hidden rounded-full shadow-lg hover:shadow-inner hover:opacity-80 hover:bg-[#3d785c] transition-all"> <div class="w-full h-full object-cover"> ${renderComponent($$result2, "Image", $$Image, { "src": "~/assets/images/rose_headshot.jpeg", "alt": "Rose" })} </div> </div> </a> <!-- Card 3 --> <a href="/contact" class="w-full h-fit self-center bg-white shadow-md rounded-lg m-1 md:m-6 p-6 text-center hover:shadow-inner hover:bg-opacity-20 hover:bg-[#3d785c] transition-all"> <div class="block text-sm text-left"> <span class="font-bold">Contact Info</span> <div>phone: ${businessInfo.phone}</div> <div>email: ${businessInfo.email}</div> <div>address: ${businessInfo.address}, ${businessInfo.city}, ${businessInfo.state} ${businessInfo.zip}</div> </div> </a> </div> </div>  <div class="w-full p-4"> <iframe style="width:100%"${addAttribute(businessInfo.mapEmbedUrl, "src")} height="450" style="border:0;" allowfullscreen="" loading="lazy" title="map for restorative body work atx" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> ` })}`;
}, "/home/user/restorativebodyworkatxcom/src/pages/index.astro", void 0);

const $$file = "/home/user/restorativebodyworkatxcom/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
