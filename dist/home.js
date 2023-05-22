// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bJH1V":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "60812b4e599f4e0e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gEnYU":[function(require,module,exports) {
var _app = require("./app");
var _auth = require("../functions/auth");
var _getUser = require("./getUser");
const csvData = `title;url;type;image;desc;;
Diplomado en Marketing Digital;https://www.icesi.edu.co/sitios/diplomado-en-marketing-digital.php;scrum;https://www.icesi.edu.co/sitios/images/marketing-digital/banner-marketing-digital-mobile.png;El comercio electrónico B2C alcanzó en el mundo los 26,7 billones de dólares?(UNCTAD, 2021) y Colombia se posiciona como el tercer país que pasa más tiempo en Internet con un promedio de diez horas y tres minutos al día. Imagina lo que podrías vender con una potente estrategia de mercadeo digital. Con este diplomado desarrollarás tu capacidad para entender y aplicar conceptos, metodologías e instrumentos, a fin de que tu marca o empresa saquen el máximo provecho del mundo digital. ;;
Coaching personal y organizacional;https://www.icesi.edu.co/educacion_continua/cursos-virtuales/diplomado-blended-coaching-personal-y-organizacional;scrum;https://www.icesi.edu.co/educacion_continua/images/Educacion_continua/Banners/2022/banner-coaching-personal-y-organizacional.png;Este diplomado tiene una base importante e impactante en todo lo relacionado con el desarrollo de competencias para ser un mejor líder con recursos del coaching, con temáticas tales como auto conocimiento, comunicación, conversaciones, liderazgo y equipos de trabajo. Este diplomado es presentado por el Centro de liderazgo y coaching PANDORA, con un amplia trayectoria y reconocida experiencia en acompañar empresas y ejecutivos en los procesos de liderazgo, coaching y comportamiento humano en las organizaciones.;;
How to Speak with Effortless Confidence;https://www.linkedin.com/learning/how-to-speak-with-effortless-confidence;scrum;https://oit.duke.edu/sites/default/files/styles/large/public/thumbnails/image/linkedin%20learning%20logo.png?itok=O2hbD0eX;There’s a key business skill that top actors already know—how to speak with confidence and courage. Confidence comes from the habits you build–not just the traits you’re born with. Yet, many people dread interviewing or public speaking. In this audio-only course, sought-after speaker and voice coach Caroline Goyder offers practical tips for turning your voice into a source of strength.;;
Liderazgo con inteligencia emocional;https://www.linkedin.com/learning/liderazgo-con-inteligencia-emocional;scrum;https://oit.duke.edu/sites/default/files/styles/large/public/thumbnails/image/linkedin%20learning%20logo.png?itok=O2hbD0eX;Las emociones nos rodean en la oficina, y es importante que como líder entiendas cómo aprovecharlas para cultivar la productividad y las relaciones positivas. En este curso, la directora de formación y desarrollo de lynda.com, Britt Andreatta te mostrará cómo desarrollar la inteligencia emocional para liderar mejor tus equipos y trabajar con tus compañeros y superiores. Aprende qué es la inteligencia emocional y cómo afecta al trabajo, y descubre técnicas concretas para elevar tu propio coeficiente emocional (CE), como la percepción de ti mismo, el autocontrol emocional, la capacidad de recuperación y el desarrollo de la empatía. Luego aplica estas lecciones para mejorar tu conocimiento de los demás y aprende a incentivar la buena comunicación y a manejar conflictos.;;
Agile Project Managment;https://www.coursera.org/learn/agile-project-management;scrum;https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Data_Analytics2x.original.png;This course will explore the history, approach, and philosophy of Agile project management, including the Scrum framework. You will learn how to differentiate and blend Agile and other project management approaches. As you progress through the course, you will learn more about Scrum, exploring its pillars and values and comparing essential Scrum team roles. You will discover how to build, manage, and refine a product backlog, implement Agile’s value-driven delivery strategies, and define a value roadmap. You will also learn strategies to effectively organize the five important Scrum events for a Scrum team, introduce an Agile or Scrum approach to an organization, and coach an Agile team. Finally, you will learn how to search for and land opportunities in Agile roles. Current Google project managers will continue to instruct and provide you with the hands-on approaches, tools, and resources to meet your goals.;;
¿Qué es el Agile Coaching?;https://www.scrum.org/resources/blog/que-es-el-agile-coaching;scrum;https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/pexels-photo-4098369.jpeg;El Agile Coaching, también conocido como coaching ágil, es un enfoque utilizado en el desarrollo de software y en la gestión de proyectos fomentando la adopción y mejora continua de los principios y prácticas ágiles. El Agile Coach es un profesional especializado que brinda orientación y apoyo a los equipos y organizaciones que buscan implementar o mejorar sus procesos ágiles. Además, ese Agile Coach actúa como un facilitador y mentor, trabajando con los equipos para ayudarlos a comprender y aplicar los valores y principios ágiles en su trabajo diario. Esto implica enseñar y promover prácticas ágiles, como Scrum, Kanban o Lean, así como técnicas de colaboración, comunicación efectiva y toma de decisiones basada en la retroalimentación.;;
The public speaking lesson you never had;https://www.youtube.com/watch?v=xSp78RwcAS4;scrum;https://i3.ytimg.com/vi/xSp78RwcAS4/maxresdefault.jpg;Got an important presentation or pitch coming up and struggling to prepare? This will help: explore the three elements which make up a great talk plus a Jedi-mind trick that reframes those nerves once and for all. DK https://justadandak.com is a Creative Producer who 'crafts delicious learning experiences' online, in-studio or in-person. He spent nearly a decade as the TEDxWellington / TEDxWellingtonWomen licensee plus founder of the unique video podcast Creative Welly https://www.creativewelly.com and the annual Creative Leadership NZ conference https://www.creativeleadership.nz.;;
Perfectionism holding you back? 3 ways to shift the habit;https://ideas.ted.com/3-ways-to-break-the-perfectionism-habit/;scrum;https://ideas.ted.com/wp-content/uploads/sites/3/2023/04/FINAL_Perfectionsim_credit-iStock.png?resize=1000,600;"At its core, perfectionism is about anxiety — you’re afraid of failing or afraid that making a mistake means that there’s something wrong with you. “Perfectionism is more than pushing yourself to do your best to achieve a goal; it’s a reflection of an inner self mired in anxiety,” he adds. According to Greenspon, the most highly successful people are actually less likely to be perfectionistic, because perfectionism can leave you overwhelmed by doubt and indecision and make it difficult to bring any task to a conclusion";;
How to Use Gestures and Body Language to Keep Your Audience Engaged;https://www.youtube.com/watch?v=Yh9B6mHqvug;scrum;https://i3.ytimg.com/vi/Yh9B6mHqvug/maxresdefault.jpg;Have you ever seen someone give a speech or presentation, and the whole time they stood stiffly at the lectern or podium? It can be boring to watch someone give a speech or presentation when they don’t use movement to keep you engaged. The 2018 World Champion of Public Speaking, Ramona Smith, will help you plan how to effectively use appropriate body language to captivate your audience! ;;
The 2020 Scrum GuideTM;https://scrumguides.org/scrum-guide.html;scrum;https://mms.businesswire.com/media/20201118005129/en/838779/23/Scrumorg-Logo_tagline-TM_%281%29_%281%29_%282%29.jpg;The Scrum Guide contains the definition of Scrum. Each element of the framework serves a specific purpose that is essential to the overall value and results realized with Scrum. Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless.;;
UI Modes and Modals;https://www.youtube.com/watch?v=W6jLcFoi1mA;ui;https://i3.ytimg.com/vi/W6jLcFoi1mA/maxresdefault.jpg;Modes can be a hidden state and lead to user errors. But they can also make a user interface more efficient by allowing the same action to have different results, depending on the situation.;;
When the UI Is Too Fast;https://www.nngroup.com/articles/too-fast-ux/;ui;https://media.nngroup.com/media/articles/opengraph_images/SocialMediaPosts_20-30_jpw_09.png;"Users might overlook things that change too fast — and even when they do notice, changeable screen elements are harder to understand in a limited timeframe. Given that 99% of all usability problems related to response times are caused by user interfaces being too slow, it might be dangerous for me to write about those few cases where the computer is too fast. After all, computers are usually too slow, and
snappy response times enhance usability. Human memory decays rapidly, so people might forget some of what they were doing while waiting for a slow computer.
Further, while young users are notoriously impatient, even older users won’t linger long on a slow site.";;
25+ Best Fun & Playful Fonts in 2023;https://designshack.net/articles/inspiration/best-fun-playful-fonts/;ui;https://designshack.net/wp-content/uploads/best-fun-playful-fonts-368x246.jpg;Fonts are not just about adding text to designs. With the right font, you can also add a bit of fun and personality to your work. Today, we have a bunch of playful and fun fonts you can use to achieve that task.;;
Fitness Training App;https://dribbble.com/shots/21483136-Fitness-Training-App;ui;https://cdn.dribbble.com/userupload/7073059/file/original-7e9a26d7aa43e6bfbef8c8b2cb74a3aa.png?compress=1&resize=1200x900;Esta es una referencia de diseño que te puede servir para tus trabajos :) ;;
English Practice Design with Mascot;https://dribbble.com/shots/21482245-English-Practice-Design-with-Mascot;ui;https://cdn.dribbble.com/userupload/7070228/file/original-92aa49c34a32465360697db2bd239609.jpg?compress=1&resize=752x;Esta es una referencia de diseño que te puede servir para tus trabajos :) ;;
UI Design Patterns for Successful Software;https://www.interaction-design.org/courses/ui-design-patterns-for-successful-software;ui;https://www.interaction-design.org/certificates/course/42/sample;People are hard-wired to recognize patterns, even when there are none. It’s the same reason that we often think we know where to click when first experiencing a website—and get frustrated if things aren’t where we think they should be;;
UI design resources;https://www.figma.com/resource-library/ui-design/;ui;https://cdn.sanity.io/images/599r6htc/localized/a1dd757abcafbd6e49e75c214b74cc2adcaea714-1080x541.png?q=75&fit=max&auto=format&dpr=2;If everything looks the same, then you see nothing. Visual hierarchy can change that.;;
Mobile UI Design;https://www.interaction-design.org/courses/mobile-ui-design-course;ui;https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;People delete 3 out of 10 apps within 30 days of downloading. You must deliver an exceptional user experience to engage people with your product. Learn mobile UI design to turn design ideas into interfaces your customers will love.;;
Professional Certificate in UI Design;https://www.uxdesigninstitute.com/courses/ui-design;ui;https://www.uxdesigninstitute.com/images/professional-certificate-ui-design.png;Learn the principles, techniques and craft of designing high quality user interfaces.;;
Affordances: Designing Intuitive User Interfaces;https://www.interaction-design.org/courses/affordances-designing-intuitive-user-interfaces;ui;https://public-media.interaction-design.org/images/course/poster/topic-definition-affordances.1592398847.jpeg;Affordances are a key concept for designers. If you want to build products that are intuitive and easy to use, fully understanding the relationship between the human mind and technology is crucial. ;;
The problem with sticky menus and what to do instead;https://adamsilver.io/blog/the-problem-with-sticky-menus-and-what-to-do-instead/?ref=uxdesignweekly;ux;https://adamsilver.io/assets/images/the-problem-with-sticky-menus-and-what-to-do-instead/material-design.png;Designers use sticky menus (menus that stick to the edge of the viewport) to make them easy to access on long pages. But this fancy pattern hurts UX far more than it improves it. Here’s why;;
“That little island changes everything”;https://design.lyft.com/that-little-island-changes-everything-b89b108f45b4;ux;https://miro.medium.com/v2/resize:fit:828/format:webp/1*h7b2WE1FCqbitw2XEod47g.png;How we designed Lyft Live Activities to elevate the rider experience. Failing to deliver the right information, at the right moments can lead to poor experiences for riders & drivers alike. Fortunately, the Lyft app does a great job at delivering those critical updates. Unfortunately, we can’t actually guarantee that riders will have our app open to see them.;;
Common Region: Gestalt Principle for User Interface Design;https://www.youtube.com/watch?v=clqzTQ-nTig;ux;https://i3.ytimg.com/vi/clqzTQ-nTig/maxresdefault.jpg;Items within a boundary are perceived as a group and assumed to share some common characteristic or functionality.;;
Accessible Target Sizes Cheatsheet;https://www.smashingmagazine.com/2023/04/accessible-tap-target-sizes-rage-taps-clicks/;ux;https://files.smashing.media/articles/accessible-tap-target-sizes-rage-taps-clicks/01-rage-taps-metric-for-user-frustration.jpg;Practical guidelines to prevent rage taps and rage clicks with accessible tap targets for icons, links and buttons — on desktop and on mobile. With useful techniques and guidelines. Rage taps are annoying and frustrating. These wonderful occurrences in our interface when we need to tap twice or sometimes three times to continue our journeys. Of course, sometimes they happen because the website is too slow, but sometimes it’s the target size of interactive elements that is the culprit;;
Avoiding pitfalls in reporting user behavior changes;https://uxdesign.cc/avoiding-pitfalls-in-reporting-user-behavior-changes-fdd8175aefe9;ux;https://miro.medium.com/v2/resize:fit:828/format:webp/1*9bMgn22VghtNjy22RtmXNw.jpeg;When a product undergoes a redesign, it’s common practice to report changes in user behavior patterns as a percentage. However, such reporting assumes that users behave like robots and that any change in design will have a linear effect on their behavior. ;;
Design for a Better World with Don Norman;https://www.interaction-design.org/courses/design-for-a-better-world-with-don-norman-course;ux;https://public-media.interaction-design.org/images/course/poster/dbw-trailer-horizontal.1679010598.jpg;"Don Norman, the father of user experience, puts it bluntly when he says, “the world is a mess.” So, how do we clean up this mess? Through design. Let’s learn how to design for a better world with Don Norman. ""...professional designers have the training and the knowledge to have a major impact on the lives of people and therefore on the earth.”";;
Micromaster: Investigación de usuario;https://www.icesi.edu.co/educacion_continua/cursos-virtuales/micromaster-en-investigacion-de-usuario;ux;https://www.icesi.edu.co/educacion_continua/images/Educacion_continua/imagenes/micromaster-en-investigacion-de-usuarios/banner-investigacion-de-usuarios-2.jpg;Diseñar experiencias que fortalezcan la propuesta de valor de los usuarios es hoy una prioridad. el mundo digital ya no se rige hoy únicamente por características funcionales, la competencia es cada vez más abundante y la demanda de los profesionales capaces de conectar al negocio con sus usuarios es cada vez más elevada.  El diseño de la experiencia del usuario (UX) es el proceso que permite la creación de productos que impactan positivamente al usuario a través de experiencias significativas y relevantes. ;;
The Ultimate Guide to Visual Perception and Design;https://www.interaction-design.org/courses/the-ultimate-guide-to-visual-perception-and-design;ux;https://upload.wikimedia.org/wikipedia/commons/c/c1/Ley-14-principio-de-semejanza.png;"Human vision is an amazing ability; we are capable of interpreting our surroundings so as to interact safely and accurately with little conscious effort.";;
Maestría en Gestión de la Innovación;https://www.icesi.edu.co/facultad-ingenieria/maestria-en-gestion-de-la-innovacion;ux;https://www.icesi.edu.co/facultad-ingenieria/images/ingenierias/innovacion/ppal-maestria-gestion-innovacion-icesi-cali-posgrados-movil.jpg;Aprende a crear valor y competir mediante la diferenciación, a cómo innovar en la revolución de la información y digitalización y descubre las tendencias de las Metodologías Ágiles en procesos industriales, de innovación y de Gerencia de Proyectos.;;
Gamification - How to Create Engaging User Experiences;https://www.interaction-design.org/courses/gamification-how-to-create-engaging-user-experiences;ux;https://public-media.interaction-design.org/images/uploads/user-content/1445/nUQP5YVVLJMgorNccSDBI2lQcEcMfL3MoXSMsWJL.jpeg;Gamification, the process of adding game-like elements to real-world or productive activities, is a growing market. By making a product or service fit into the lives of users, and doing so in an engaging manner, gamification promises to create unique, competition-beating experiences that deliver immense value. In fact, TechSci Research estimates that the global gamification industry will grow to reach $40 billion by 2024.;`;
const subjectToArea = {
    coe1: "scrum",
    logica: "scrum",
    coe2: "scrum",
    pi1: "scrum",
    bi: "ui",
    dyt: "ui",
    color: "ui",
    arqui: "ui",
    intro: "ux",
    dys: "ux",
    percep: "ux",
    estad: "develop",
    fundaprogra: "develop",
    dca: "develop",
    eco: "develop",
    tri: "creative",
    fotografia: "creative",
    sonido: "creative",
    expre: "creative",
    narra: "creative",
    d4d: "creative"
};
let isLogged = false;
(0, _auth.onAuthStateChanged)((0, _app.auth), async (user)=>{
    if (user) {
        if (!isLogged) {
            const uid = user.uid;
            const userObj = await (0, _getUser.getUser)(uid);
            const faves = userObj.favoritas;
            faves.forEach((sub, index, array)=>{
                if (subjectToArea.hasOwnProperty(sub)) array[index] = subjectToArea[sub];
            });
            console.log(faves);
            isLogged = true;
        }
    }
});
// Split the CSV data into rows
const rows = csvData.split(";;");
// Remove the header row if present
if (rows.length > 0) rows.shift();
// Get the container element where the HTML structures will be inserted
const container = document.querySelector(".recommended__cardlist");
// Loop through each row in the CSV data
for (const row of rows){
    // Split the row into individual values
    const [title, url, type, image, desc] = row.split(";");
    // Create the HTML structure based on the template
    const card = document.createElement("div");
    card.classList.add("recommended__card");
    const cardImage = document.createElement("img");
    cardImage.src = image;
    cardImage.classList.add("recommended__image");
    card.appendChild(cardImage);
    const cardTitle = document.createElement("p");
    cardTitle.classList.add("recommended__subtitle");
    cardTitle.textContent = title;
    card.appendChild(cardTitle);
    const cardDesc = document.createElement("p");
    cardDesc.classList.add("recommended__psmall");
    cardDesc.textContent = desc;
    card.appendChild(cardDesc);
    // Add the card to the container
    container.appendChild(card);
}

},{}]},["bJH1V","gEnYU"], "gEnYU", "parcelRequire3705")

//# sourceMappingURL=home.js.map
