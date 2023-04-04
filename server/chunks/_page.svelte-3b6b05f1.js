import { c as create_ssr_component, d as add_attribute, e as escape } from './index-41dea004.js';

const css = {
  code: "#comic.svelte-thkmln{height:450px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px;background-color:#f4efdb;padding:32px 0;color:#453c38;font-size:24px;flex:1 0 auto}#image.svelte-thkmln{border:3px solid #453c38;max-height:300px}#img-info.svelte-thkmln{border:2px solid #453c38;height:60px;width:600px;display:flex;justify-content:space-around;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let comicSrc;
  let comicAlt;
  let comicTitle;
  let comicDate;
  $$result.css.add(css);
  return `<div id="comic" class="svelte-thkmln"><img id="image"${add_attribute("src", comicSrc, 0)}${add_attribute("alt", comicAlt, 0)} class="svelte-thkmln">
	<div id="img-info" class="svelte-thkmln"><div id="img-title">Title: ${escape(comicTitle)}</div>
		<div id="img-date">Date: ${escape(comicDate)}</div></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3b6b05f1.js.map
