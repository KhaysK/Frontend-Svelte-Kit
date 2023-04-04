import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape } from './index-41dea004.js';
import { p as page } from './stores-c5f4d1a6.js';
import { b as base } from './paths-2dd71926.js';

const css$1 = {
  code: "footer.svelte-4gdh81.svelte-4gdh81{background-color:#453c38;flex-shrink:0}#socials.svelte-4gdh81.svelte-4gdh81{width:100%;display:flex;align-items:center;padding:16px 0}#socials.svelte-4gdh81 ul.svelte-4gdh81{margin:0;width:100%;display:flex;justify-content:center;list-style-type:none}#socials.svelte-4gdh81 li.svelte-4gdh81{float:left;font-size:2rem;padding-right:2%}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-4gdh81"><div id="socials" class="svelte-4gdh81"><ul class="svelte-4gdh81"><li class="svelte-4gdh81"><a href="https://github.com/KhaysK/" class="gh-link"><i class="fa-brands fa-github"></i></a></li>
			<li class="svelte-4gdh81"><a href="https://t.me/KhaysK" class="tg-link"><i class="fa-brands fa-telegram"></i></a></li>
			<li class="svelte-4gdh81"><a href="https://www.instagram.com/khabib_khays" class="is-link"><i class="fa-brands fa-instagram"></i></a></li>
			<li class="svelte-4gdh81"><a href="mailto:haysadykov@gmail.com" class="email"><i class="fa-solid fa-envelope"></i></a></li></ul></div>
</footer>`;
});
const css = {
  code: "#navbar.svelte-1btj8k0{height:60px;display:flex;justify-content:space-around;align-items:center;background-color:#453c38;flex-shrink:0}#links-container.svelte-1btj8k0{display:flex;gap:32px;font-size:24px}#logo.svelte-1btj8k0{font-size:32px;font-weight:bold;color:#f4efdb}.active.svelte-1btj8k0{font-weight:bold}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  routeId = $page.route.id;
  $$unsubscribe_page();
  return `<div id="navbar" class="svelte-1btj8k0"><div id="logo" class="svelte-1btj8k0">Khays logo</div>
	<div id="links-container" class="svelte-1btj8k0"><a href="${escape(base, true) + "/"}" class="${["svelte-1btj8k0", routeId == "/" ? "active" : ""].join(" ").trim()}">Home</a>
		<a href="${escape(base, true) + "/comic"}" class="${["svelte-1btj8k0", routeId == "/comic" ? "active" : ""].join(" ").trim()}">Comic</a></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-383f9870.js.map
