/* empty css                                      */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CNDNgDNa.mjs';
import 'kleur/colors';
import { $ as $$SectionContainer, a as $$Badge, b as $$SocialPill, c as $$LinkedIn, d as $$Layout } from '../chunks/Layout_BAxC2X5T.mjs';
export { renderers } from '../renderers.mjs';

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System porfolio.dev", "description": "El cat\xE1logo de componentes de nuestro porfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/bsalinasrojas" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/pages/components.astro", void 0);

const $$file = "E:/Escritorio Programación/Portafolio/porfolio.dev-main/src/pages/components.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
