/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, s as spreadAttributes, f as createAstro, b as renderSlot, a as renderComponent, F as Fragment } from '../chunks/astro/server_CNDNgDNa.mjs';
import 'kleur/colors';
import { a as $$Badge, b as $$SocialPill, c as $$LinkedIn, $ as $$SectionContainer, d as $$Layout } from '../chunks/Layout_BAxC2X5T.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Basti\xE1n Salinas Rojas";
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row"> <div class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"> <p>
Soy Bastián Salinas Rojas, Ingeniero en Informática titulado en 2019 por Duoc UC. Actualmente trabajo como <strong>Desarrollador Full Stack</strong>, encargándome de implementar mejoras tanto en el lado visual del cliente como en la base de datos.
</p> <p>
Entre mis logros destacan haber completado el <strong>Diplomado en Diseño y Programación Web en AIEP</strong> y la <strong>Carrera de Desarrollo Full Stack en Coderhouse</strong>. Estas experiencias han sido fundamentales para enfrentar diversos desafíos, y siempre estoy en búsqueda de nuevos retos.
</p> <p>
En mi tiempo libre, disfruto practicando deportes, compartiendo momentos con familiares y amigos, y jugando videojuegos. Creo firmemente que, con una buena organización, siempre hay tiempo para todo. <strong>Mi objetivo es mejorar tanto a nivel personal como profesional.</strong> </p> </div> <img width="200" height="200" src="/fotodeperfil.jpeg"${addAttribute(personalImageAlt, "alt")} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%"> </article>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/AboutMe.astro", void 0);

const $$Astro$f = createAstro();
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path><path d="M3 13a20 20 0 0 0 18 0"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Briefcase.astro", void 0);

const $$Astro$e = createAstro();
const $$Code = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Code.astro", void 0);

const $$Astro$d = createAstro();
const $$LinkInline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LinkInline;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/LinkInline.astro", void 0);

const $$Astro$c = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, company, description, link, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-12 md:col-span-2"> <div class="sticky top-0"> <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl">&bull;</span> <h3 class="text-xl font-bold text-yellow-400">${title}</h3> <h4 class="font-semibold text-xl text-gray-600 dark:text-white">${company}</h4> <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">${date}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3"> ${description} ${link && renderTemplate`${renderComponent($$result, "LinkInline", $$LinkInline, { "href": link }, { "default": ($$result2) => renderTemplate`
Saber más${" "}<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> ` })} </svg> ` })}`} </div> </div>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/ExperienceItem.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const EXPERIENCE = [
    {
      date: "Marzo 2023 - Actualidad",
      title: "Software Developer",
      company: "Inputsoft",
      description: "Soporte posventa de aplicaciones web, desarrollo de software creando nuevas funcionalidades y implementaci\xF3n de mejoras a los distintos sitios de la empresa. Aptitudes: Servicios web \xB7 Hojas de estilos en cascada (CSS) \xB7 Software \xB7 ASP.NET \xB7 Desarrollo de software \xB7 JavaScript \xB7 Microsoft SQL Server \xB7 C# \xB7 Jquery \xB7 Bootstrap \xB7 HTML \xB7 CSS \xB7 Servicios de Windows \xB7 API de Swagger \xB7 React \xB7 Next.js \xB7 Scrum. ",
      link: "https://inputsoft.cl/"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative mt-16"> ${EXPERIENCE.map((experience) => renderTemplate`<li class=""> ${renderComponent($$result, "ExperienceItem", $$ExperienceItem, { ...experience })} </li>`)} </ol>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/Experience.astro", void 0);

const $$Astro$b = createAstro();
const $$ProfileCheck = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ProfileCheck;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path><path d="M15 19l2 2l4 -4"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/ProfileCheck.astro", void 0);

const $$Astro$a = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/GitHub.astro", void 0);

const $$Astro$9 = createAstro();
const $$NextJS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NextJS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <defs> <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"> <stop offset="0%" stop-color="#FFF"></stop> <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop> </linearGradient> <circle id="a" cx="128" cy="128" r="128"></circle> </defs> <mask id="b" fill="#fff"> <use xlink:href="#a"></use> </mask> <g mask="url(#b)"> <circle cx="128" cy="128" r="128"></circle> <path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"></path> <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path> </g> </svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/NextJS.astro", void 0);

const $$Astro$8 = createAstro();
const $$HTML = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$HTML;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path fill="#E34F26" d="M1.5 0h29l-2.634 29.67L16 32l-11.87-2.33L1.5 0z"></path> <path fill="#EF652A" d="M16 30.09l9.6-2.02 2.25-25.2H16v27.22z"></path> <path fill="#EBEBEB" d="M16 13.45h-4.8l-.33-3.68H16V6.18H8.03l.03.37.86 9.68H16v-2.78zm0 7.12h-4.2l-.28-3.18H9.01l.56 6.24H16v-3.06z"></path> <path fill="#FFF" d="M16 13.45v2.78h4.5l-.42 4.7H16v3.07h6.07l.04-.37.86-9.68.02-.37H16zm0-7.27v3.58h8.3l.03-.37.28-3.2.03-.38H16z"></path> </svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/HTML.astro", void 0);

const $$Astro$7 = createAstro();
const $$CSS = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CSS;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path fill="#264DE4" d="M1.5 0h29L27.1 29.67 16 32l-11.1-2.33L1.5 0z"></path> <path fill="#2965F1" d="M16 30.09l9.6-2.02L27.85 4.87H16v25.22z"></path> <path fill="#EBEBEB" d="M16 13.45H10.5l-.33-3.68H16V6.18H7.73l.03.37.86 9.68H16v-2.78zm0 7.12h-4.46l-.28-3.18H10.3l.56 6.24H16v-3.06z"></path> <path fill="#FFF" d="M16 13.45v2.78h4.5l-.42 4.7H16v3.07h6.07l.04-.37.86-9.68.02-.37H16zm0-7.27v3.58h8.29l.03-.37.28-3.2.03-.38H16z"></path> </svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/CSS.astro", void 0);

const $$Astro$6 = createAstro();
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"> <path fill="#F7DF1E" d="M0 0h32v32H0z"></path> <path d="M18.07 24.3c.573.93 1.18 1.73 2.52 1.73 1.06 0 1.73-.53 1.73-1.27 0-.88-.7-1.19-1.88-1.7l-.65-.28c-1.88-.8-3.13-1.79-3.13-3.89 0-1.93 1.47-3.4 3.77-3.4 1.64 0 2.82.57 3.66 2.06l-2.01 1.29c-.44-.79-.91-1.1-1.65-1.1-.75 0-1.23.48-1.23 1.1 0 .78.48 1.1 1.59 1.59l.65.28c2.21.95 3.47 1.89 3.47 4.06 0 2.33-1.83 3.62-4.29 3.62-2.41 0-3.97-1.14-4.75-2.63l2.1-1.23zm-7.55.18c.41.73.78 1.35 1.68 1.35.86 0 1.41-.34 1.41-1.68v-8.83h2.68v8.88c0 2.77-1.62 4.03-3.99 4.03-2.14 0-3.38-1.11-4.01-2.44l2.23-1.31z" fill="#000"></path> </svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Javascript.astro", void 0);

const $$Astro$5 = createAstro();
const $$React = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"></path> </svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/React.astro", void 0);

const $$Astro$4 = createAstro();
const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"></path></clipPath></defs></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Tailwind.astro", void 0);

const $$Astro$3 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Link.astro", void 0);

const $$Astro$2 = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/LinkButton.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: $$NextJS
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: $$Tailwind
    },
    HTML: {
      name: "HTML",
      class: "bg-[#2965F1] text-white",
      icon: $$HTML
    },
    CSS: {
      name: "CSS",
      class: "bg-[#264DE4] text-white",
      icon: $$CSS
    },
    React: {
      name: "ReactJS",
      class: "bg-white text-black",
      icon: $$React
    },
    ReactN: {
      name: "React Native",
      class: "bg-white text-black",
      icon: $$React
    },
    Javascript: {
      name: "Javascript",
      class: "bg-white text-black",
      icon: $$Javascript
    }
  };
  const PROJECTS = [
    {
      title: "Total Cam Security",
      description: "P\xE1gina desarrollada en curso de Desarrollo Web de Coderhouse que informa acerca del rubro de la empresa Total Cam Security S.A y contacta con sus potenciales clientes.",
      link: "https://totalcamsecurity.cl/",
      github: "https://github.com/bastianSalinas/TotalCamSec",
      image: "/projects/totalcamsec.webp",
      tags: [TAGS.HTML, TAGS.CSS]
    },
    {
      title: "Tienda Online React JS",
      description: "P\xE1gina de tienda online creada en curso de React de Coderhouse. Creada desde cero con React, Javascript, HTML, CSS.",
      link: "https://tienda-online-rjs.vercel.app/",
      github: "https://github.com/bastianSalinas/TiendaOnlineRJS",
      image: "/projects/tiendareact.webp",
      tags: [TAGS.React, TAGS.Javascript, TAGS.HTML, TAGS.CSS]
    },
    {
      title: "Hicking Santiago",
      description: "P\xE1gina informativa de Hicking en Santiago interactiva, creada en curso de Javascript de Coderhouse. Creada desde cero con Javascript, HTML, CSS.",
      github: "https://github.com/bastianSalinas/HikingSantiago",
      image: "/projects/paginahicking.webp",
      tags: [TAGS.Javascript, TAGS.HTML, TAGS.CSS]
    },
    {
      title: "App Store Viajes Lit",
      description: "Aplicaci\xF3n de tienda online para dispositivos m\xF3viles creada en curso de Desarrollo de Aplicaciones de Coderhouse. Creada desde cero con React Native, Expo y Javascript.",
      github: "https://github.com/bastianSalinas/AppStoreViajesLit",
      image: "/projects/viajeslit.webp",
      tags: [TAGS.ReactN, TAGS.Javascript]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-16"> ${PROJECTS.map(({ image, title, description, tags, link, github }) => renderTemplate`<article class="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"> <div class="w-full md:w-1/2"> <div class="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50"> <img alt="Imagen de Proyecto" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(image, "src")}> </div> </div> <div class="w-full md:w-1/2 md:max-w-lg"> <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-100"> ${title} </h3> <div class="flex flex-wrap mt-2"> <ul class="flex flex-row mb-2 gap-x-2"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <div class="mt-2 text-gray-700 dark:text-gray-400">${description}</div> <footer class="flex items-end justify-start mt-4 gap-x-4"> ${github && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": github }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHub", $$GitHub, { "class": "size-6" })}
Code
` })}`} ${link && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "class": "size-4" })}
Preview
` })}`} </footer> </div> </div> </article>`)} </div>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/Projects.astro", void 0);

const $$Astro$1 = createAstro();
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/icons/Mail.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const personalImageAlt = "Miguel \xC1ngel";
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-16" src="/fotodeperfil.jpeg"${addAttribute(personalImageAlt, "alt")}> <a href="https://www.linkedin.com/in/bsalinasrojas" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> </div> <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
Hola, soy Bastián Salinas
</h1> <p class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
+1 año de experiencia. <strong>Ingeniero en Informática, Desarrollador de Software</strong> de Santiago, Chile cl. Especializado en el desarrollo de aplicaciones web
    únicas.
</p> <nav class="flex flex-wrap gap-4 mt-8"> ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "mailto:bast.s.rojas@gmail.com" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MailIcon", $$Mail, { "class": "size-4" })}
Contáctame
` })} ${renderComponent($$result, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/bsalinasrojas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedIn, { "class": "size-4" })}
LinkedIn
` })} </nav> </div>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/components/TitleSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Basti\xE1n - Desarrollador y Programador Web con m\xE1s de un a\xF1o de experiencia", "description": "Contrata a Basti\xE1n para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador Web. Especializado en crear aplicaciones \xFAnicas." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Briefcase", $$Briefcase, { "class": "size-8" })}
Experiencia laboral
` })} ${renderComponent($$result3, "Experience", $$Experience, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "CodeIcon", $$Code, { "class": "size-7" })}
Proyectos
` })} ${renderComponent($$result3, "Projects", $$Projects, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "sobre-mi" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ProfileCheck", $$ProfileCheck, { "class": "size-8" })}
Sobre mí
` })} ${renderComponent($$result3, "AboutMe", $$AboutMe, {})} ` })} </div> </main> ` })}`;
}, "E:/Escritorio Programaci\xF3n/Portafolio/porfolio.dev-main/src/pages/index.astro", void 0);

const $$file = "E:/Escritorio Programación/Portafolio/porfolio.dev-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
