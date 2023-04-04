const manifest = {
	appDir: "_app",
	appPath: "Frontend-Svelte-Kit/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6e8e9bac.js","imports":["_app/immutable/entry/start.6e8e9bac.js","_app/immutable/chunks/index.bca108b2.js","_app/immutable/chunks/singletons.f925890e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.77b44cb4.js","imports":["_app/immutable/entry/app.77b44cb4.js","_app/immutable/chunks/index.bca108b2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-84835bf4.js'),
			() => import('./chunks/1-7af5d7fa.js'),
			() => import('./chunks/2-26d21752.js'),
			() => import('./chunks/3-a4276d71.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/comic",
				pattern: /^\/comic\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/Frontend-Svelte-Kit/","/Frontend-Svelte-Kit/comic/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map