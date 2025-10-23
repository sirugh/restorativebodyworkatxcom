import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_CM5XzD-x.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/user/restorativebodyworkatxcom/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-cid-2zp6q64z]{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh;padding:20px}.container[data-astro-cid-2zp6q64z]{max-width:900px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 20px 60px #0000004d;overflow:hidden}.header[data-astro-cid-2zp6q64z]{background:#4a5568;color:#fff;padding:30px;text-align:center}.header[data-astro-cid-2zp6q64z] h1[data-astro-cid-2zp6q64z]{font-size:28px;margin-bottom:8px}.header[data-astro-cid-2zp6q64z] p[data-astro-cid-2zp6q64z]{opacity:.9;font-size:14px}.content[data-astro-cid-2zp6q64z]{padding:40px}.login-form[data-astro-cid-2zp6q64z]{max-width:400px;margin:0 auto;padding:40px 0}.form-group[data-astro-cid-2zp6q64z]{margin-bottom:24px}label[data-astro-cid-2zp6q64z]{display:block;font-weight:600;margin-bottom:8px;color:#2d3748;font-size:14px}input[data-astro-cid-2zp6q64z][type=text],input[data-astro-cid-2zp6q64z][type=email],input[data-astro-cid-2zp6q64z][type=number],input[data-astro-cid-2zp6q64z][type=password],textarea[data-astro-cid-2zp6q64z]{width:100%;padding:12px 16px;border:2px solid #E2E8F0;border-radius:8px;font-size:15px;transition:border-color .2s;font-family:inherit}input[data-astro-cid-2zp6q64z]:focus,textarea[data-astro-cid-2zp6q64z]:focus{outline:none;border-color:#667eea}textarea[data-astro-cid-2zp6q64z]{min-height:100px;resize:vertical}.btn[data-astro-cid-2zp6q64z]{background:#667eea;color:#fff;padding:14px 32px;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;width:100%;transition:background .2s}.btn[data-astro-cid-2zp6q64z]:hover{background:#5a67d8}.btn[data-astro-cid-2zp6q64z]:disabled{background:#cbd5e0;cursor:not-allowed}.section[data-astro-cid-2zp6q64z]{background:#f7fafc;padding:24px;border-radius:8px;margin-bottom:24px}.section-title[data-astro-cid-2zp6q64z]{font-size:20px;font-weight:700;color:#2d3748;margin-bottom:20px;padding-bottom:12px;border-bottom:2px solid #E2E8F0}.grid[data-astro-cid-2zp6q64z]{display:grid;grid-template-columns:1fr 1fr;gap:16px}@media (max-width: 640px){.grid[data-astro-cid-2zp6q64z]{grid-template-columns:1fr}.content[data-astro-cid-2zp6q64z]{padding:24px}}.error[data-astro-cid-2zp6q64z]{background:#fed7d7;color:#9b2c2c;padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:14px}.success[data-astro-cid-2zp6q64z]{background:#c6f6d5;color:#22543d;padding:12px 16px;border-radius:8px;margin-bottom:20px;font-size:14px}.pricing-item[data-astro-cid-2zp6q64z]{background:#fff;padding:16px;border-radius:6px;margin-bottom:12px;border:2px solid #E2E8F0}.faq-item[data-astro-cid-2zp6q64z]{background:#fff;padding:16px;border-radius:6px;margin-bottom:16px;border:2px solid #E2E8F0}.help-text[data-astro-cid-2zp6q64z]{font-size:13px;color:#718096;margin-top:4px}#saveStatus[data-astro-cid-2zp6q64z]{margin-top:16px;text-align:center;font-weight:600}\n"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/save-content","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/save-content$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"save-content","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/save-content.ts","pathname":"/api/save-content","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"site":"https://restorativebodyworkatx.com","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/home/user/restorativebodyworkatxcom/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/services.astro",{"propagation":"none","containsHead":true}],["/home/user/restorativebodyworkatxcom/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/save-content@_@ts":"pages/api/save-content.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BvH_9166.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/app-store.png":"chunks/app-store_Dlj0FXYG.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/cupping-back.jpeg":"chunks/cupping-back_uPaVLiRA.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/cupping-back1.jpeg":"chunks/cupping-back1_CoD6bmSr.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/cupping-back2.jpeg":"chunks/cupping-back2_Ch_2genH.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back.jpeg":"chunks/hands-back_DJiXfn3W.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back1.jpeg":"chunks/hands-back1_BgZIxp3Y.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-back2.jpeg":"chunks/hands-back2_BtwAtI4v.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-hand.jpeg":"chunks/hands-hand_BCvxvO91.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/hands-leg.jpeg":"chunks/hands-leg_CGFc0XYi.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/knife-back.jpeg":"chunks/knife-back_D7Qd3seh.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/closeups/knife-leg.jpeg":"chunks/knife-leg_yrK9VaQN.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/generic-spa-generated.jpg":"chunks/generic-spa-generated_0WwMCipH.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-letter-color-01.png":"chunks/ResBodWork-letter-color-01_DH8vTvhn.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-letter-white-01.png":"chunks/ResBodWork-letter-white-01_C-1IVuLk.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-color.jpg":"chunks/ResBodWork-logo-color_Bd3ZPrFJ.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-color.png":"chunks/ResBodWork-logo-color_BK7bf_x3.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-symbol-color-01.png":"chunks/ResBodWork-logo-symbol-color-01_D3QpBKKH.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-symbol-color.png":"chunks/ResBodWork-logo-symbol-color_DbTHpyeo.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-symbol-white-01.png":"chunks/ResBodWork-logo-symbol-white-01__wqP5d5H.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/logo/ResBodWork-logo-white.png":"chunks/ResBodWork-logo-white_LZdTyAM2.mjs","/home/user/restorativebodyworkatxcom/src/assets/images/rose_headshot.jpeg":"chunks/rose_headshot_DrmMngC5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BvYtMSga.js","/astro/hoisted.js?q=1":"_astro/hoisted.C_s0hLA4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/favicon.EPZh9nUB.ico","/_astro/favicon.ShMWJ6e_.svg","/_astro/apple-touch-icon.BRZ01j4a.png","/_astro/app-store.t3tG4Jz3.png","/_astro/cupping-back1.aXC1fcvi.jpeg","/_astro/hands-back.BBpdYc7S.jpeg","/_astro/cupping-back.DEk4xcDD.jpeg","/_astro/cupping-back2.DYhb-3lK.jpeg","/_astro/hands-leg.9KuMqh7q.jpeg","/_astro/hands-back2.CouiJbX5.jpeg","/_astro/hands-hand.Dt63zxx5.jpeg","/_astro/hands-back1.BfDsVWIn.jpeg","/_astro/ResBodWork-letter-white-01.CxEMxNnE.png","/_astro/ResBodWork-letter-color-01.DPx4kLl3.png","/_astro/ResBodWork-logo-color.DXJRuVDo.png","/_astro/knife-back.CgsWWGKQ.jpeg","/_astro/knife-leg.C8olLZ8X.jpeg","/_astro/ResBodWork-logo-symbol-color-01.D_rRK4IW.png","/_astro/ResBodWork-logo-symbol-white-01.BckXcW08.png","/_astro/ResBodWork-logo-color.u6FBjRbr.jpg","/_astro/ResBodWork-logo-white.BpzUnF6U.png","/_astro/ResBodWork-logo-symbol-color.CpVZ5weB.png","/_astro/rose_headshot.C2RZKleA.jpeg","/_astro/generic-spa-generated.DhH7CqjU.jpg","/_astro/about.DnLAuXdV.css","/_headers","/robots.txt","/assets/hands-back1.jpeg","/decapcms/config.yml","/decapcms/index.html","/404.html","/about/index.html","/contact/index.html","/faq/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"OA0gCmYENu7R0BgGSJO0juoZof00S1FYMz0LMQrsHS4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
