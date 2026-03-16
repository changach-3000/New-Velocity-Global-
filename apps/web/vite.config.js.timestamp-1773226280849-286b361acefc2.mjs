// vite.config.js
import path3 from "node:path";
import react from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createLogger, defineConfig } from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/vite/dist/node/index.js";

// plugins/visual-editor/vite-plugin-react-inline-editor.js
import path2 from "path";
import { parse as parse2 } from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/parser/lib/index.js";
import traverseBabel2 from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/traverse/lib/index.js";
import * as t from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/types/lib/index.js";
import fs2 from "fs";

// plugins/utils/ast-utils.js
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import generate from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/generator/lib/index.js";
import { parse } from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/parser/lib/index.js";
import traverseBabel from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/traverse/lib/index.js";
import {
  isJSXIdentifier,
  isJSXMemberExpression
} from "file:///home/u511399157/websites/HNBxq2Lwz/public_html/node_modules/@babel/types/lib/index.js";
var __vite_injected_original_import_meta_url = "file:///home/u511399157/websites/HNBxq2Lwz/public_html/apps/web/plugins/utils/ast-utils.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname2 = path.dirname(__filename);
var VITE_PROJECT_ROOT = path.resolve(__dirname2, "../../../..");
function validateFilePath(filePath) {
  if (!filePath) {
    return { isValid: false, error: "Missing filePath" };
  }
  const absoluteFilePath = path.resolve(VITE_PROJECT_ROOT, filePath);
  if (filePath.includes("..") || !absoluteFilePath.startsWith(VITE_PROJECT_ROOT) || absoluteFilePath.includes("node_modules")) {
    return { isValid: false, error: "Invalid path" };
  }
  if (!fs.existsSync(absoluteFilePath)) {
    return { isValid: false, error: "File not found" };
  }
  return { isValid: true, absolutePath: absoluteFilePath };
}
function parseFileToAST(absoluteFilePath) {
  const content = fs.readFileSync(absoluteFilePath, "utf-8");
  return parse(content, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
    errorRecovery: true
  });
}
function findJSXElementAtPosition(ast, line, column) {
  let targetNodePath = null;
  let closestNodePath = null;
  let closestDistance = Infinity;
  const allNodesOnLine = [];
  const visitor = {
    JSXOpeningElement(path4) {
      const node = path4.node;
      if (node.loc) {
        if (node.loc.start.line === line && Math.abs(node.loc.start.column - column) <= 1) {
          targetNodePath = path4;
          path4.stop();
          return;
        }
        if (node.loc.start.line === line) {
          allNodesOnLine.push({
            path: path4,
            column: node.loc.start.column,
            distance: Math.abs(node.loc.start.column - column)
          });
        }
        if (node.loc.start.line === line) {
          const distance = Math.abs(node.loc.start.column - column);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestNodePath = path4;
          }
        }
      }
    },
    // Also check JSXElement nodes that contain the position
    JSXElement(path4) {
      var _a;
      const node = path4.node;
      if (!node.loc) {
        return;
      }
      if (node.loc.start.line > line || node.loc.end.line < line) {
        return;
      }
      if (!((_a = path4.node.openingElement) == null ? void 0 : _a.loc)) {
        return;
      }
      const openingLine = path4.node.openingElement.loc.start.line;
      const openingCol = path4.node.openingElement.loc.start.column;
      if (openingLine === line) {
        const distance = Math.abs(openingCol - column);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNodePath = path4.get("openingElement");
        }
        return;
      }
      if (openingLine < line) {
        const distance = (line - openingLine) * 100;
        if (distance < closestDistance) {
          closestDistance = distance;
          closestNodePath = path4.get("openingElement");
        }
      }
    }
  };
  traverseBabel.default(ast, visitor);
  const threshold = closestDistance < 100 ? 50 : 500;
  return targetNodePath || (closestDistance <= threshold ? closestNodePath : null);
}
function generateCode(node, options = {}) {
  const generateFunction = generate.default || generate;
  const output = generateFunction(node, options);
  return output.code;
}
function generateSourceWithMap(ast, sourceFileName, originalCode) {
  const generateFunction = generate.default || generate;
  return generateFunction(ast, {
    sourceMaps: true,
    sourceFileName
  }, originalCode);
}

// plugins/visual-editor/vite-plugin-react-inline-editor.js
var EDITABLE_JSX_TAGS = ["a", "Link", "button", "Button", "p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "label", "Label", "img"];
function parseEditId(editId) {
  const parts = editId.split(":");
  if (parts.length < 3) {
    return null;
  }
  const column = parseInt(parts.at(-1), 10);
  const line = parseInt(parts.at(-2), 10);
  const filePath = parts.slice(0, -2).join(":");
  if (!filePath || isNaN(line) || isNaN(column)) {
    return null;
  }
  return { filePath, line, column };
}
function checkTagNameEditable(openingElementNode, editableTagsList = EDITABLE_JSX_TAGS) {
  if (!openingElementNode || !openingElementNode.name)
    return false;
  const nameNode = openingElementNode.name;
  if (nameNode.type === "JSXIdentifier" && editableTagsList.includes(nameNode.name)) {
    return true;
  }
  if (nameNode.type === "JSXMemberExpression" && nameNode.property && nameNode.property.type === "JSXIdentifier" && editableTagsList.includes(nameNode.property.name)) {
    return true;
  }
  return false;
}
function validateImageSrc(openingNode) {
  var _a;
  if (!openingNode || !openingNode.name || openingNode.name.name !== "img" && ((_a = openingNode.name.property) == null ? void 0 : _a.name) !== "img") {
    return { isValid: true, reason: null };
  }
  const hasPropsSpread = openingNode.attributes.some(
    (attr) => t.isJSXSpreadAttribute(attr) && attr.argument && t.isIdentifier(attr.argument) && attr.argument.name === "props"
  );
  if (hasPropsSpread) {
    return { isValid: false, reason: "props-spread" };
  }
  const srcAttr = openingNode.attributes.find(
    (attr) => t.isJSXAttribute(attr) && attr.name && attr.name.name === "src"
  );
  if (!srcAttr) {
    return { isValid: false, reason: "missing-src" };
  }
  if (!t.isStringLiteral(srcAttr.value)) {
    return { isValid: false, reason: "dynamic-src" };
  }
  if (!srcAttr.value.value || srcAttr.value.value.trim() === "") {
    return { isValid: false, reason: "empty-src" };
  }
  return { isValid: true, reason: null };
}
function inlineEditPlugin() {
  return {
    name: "vite-inline-edit-plugin",
    enforce: "pre",
    transform(code, id) {
      if (!/\.(jsx|tsx)$/.test(id) || !id.startsWith(VITE_PROJECT_ROOT) || id.includes("node_modules")) {
        return null;
      }
      const relativeFilePath = path2.relative(VITE_PROJECT_ROOT, id);
      const webRelativeFilePath = relativeFilePath.split(path2.sep).join("/");
      try {
        const babelAst = parse2(code, {
          sourceType: "module",
          plugins: ["jsx", "typescript"],
          errorRecovery: true
        });
        let attributesAdded = 0;
        traverseBabel2.default(babelAst, {
          enter(path4) {
            var _a;
            if (path4.isJSXOpeningElement()) {
              const openingNode = path4.node;
              const elementNode = path4.parentPath.node;
              if (!openingNode.loc) {
                return;
              }
              const alreadyHasId = openingNode.attributes.some(
                (attr) => t.isJSXAttribute(attr) && attr.name.name === "data-edit-id"
              );
              if (alreadyHasId) {
                return;
              }
              const isCurrentElementEditable = checkTagNameEditable(openingNode, EDITABLE_JSX_TAGS);
              if (!isCurrentElementEditable) {
                return;
              }
              const imageValidation = validateImageSrc(openingNode);
              if (!imageValidation.isValid) {
                const disabledAttribute = t.jsxAttribute(
                  t.jsxIdentifier("data-edit-disabled"),
                  t.stringLiteral("true")
                );
                openingNode.attributes.push(disabledAttribute);
                attributesAdded++;
                return;
              }
              let shouldBeDisabledDueToChildren = false;
              if (t.isJSXElement(elementNode) && elementNode.children) {
                const hasPropsSpread = openingNode.attributes.some(
                  (attr) => t.isJSXSpreadAttribute(attr) && attr.argument && t.isIdentifier(attr.argument) && attr.argument.name === "props"
                );
                const hasDynamicChild = elementNode.children.some(
                  (child) => t.isJSXExpressionContainer(child)
                );
                if (hasDynamicChild || hasPropsSpread) {
                  shouldBeDisabledDueToChildren = true;
                }
              }
              if (!shouldBeDisabledDueToChildren && t.isJSXElement(elementNode) && elementNode.children) {
                const hasEditableJsxChild = elementNode.children.some((child) => {
                  if (t.isJSXElement(child)) {
                    return checkTagNameEditable(child.openingElement, EDITABLE_JSX_TAGS);
                  }
                  return false;
                });
                if (hasEditableJsxChild) {
                  shouldBeDisabledDueToChildren = true;
                }
              }
              if (shouldBeDisabledDueToChildren) {
                const disabledAttribute = t.jsxAttribute(
                  t.jsxIdentifier("data-edit-disabled"),
                  t.stringLiteral("true")
                );
                openingNode.attributes.push(disabledAttribute);
                attributesAdded++;
                return;
              }
              if (t.isJSXElement(elementNode) && elementNode.children && elementNode.children.length > 0) {
                let hasTextContent = false;
                let hasNonEditableJsxChild = false;
                let hasNonSelfClosingChild = false;
                for (const child of elementNode.children) {
                  if (t.isJSXText(child)) {
                    if (child.value.trim().length > 0)
                      hasTextContent = true;
                    continue;
                  }
                  if (t.isJSXElement(child)) {
                    const childNode = child.openingElement;
                    if (childNode.selfClosing) {
                      const childName = ((_a = childNode.name) == null ? void 0 : _a.name) || "";
                      if (!/^[A-Z]/.test(childName) && !checkTagNameEditable(childNode, EDITABLE_JSX_TAGS)) {
                        hasNonEditableJsxChild = true;
                      }
                      continue;
                    }
                    hasNonSelfClosingChild = true;
                    if (!checkTagNameEditable(childNode, EDITABLE_JSX_TAGS)) {
                      hasNonEditableJsxChild = true;
                    }
                  }
                }
                if (!hasTextContent && !hasNonSelfClosingChild)
                  return;
                if (hasNonEditableJsxChild) {
                  const disabledAttribute = t.jsxAttribute(
                    t.jsxIdentifier("data-edit-disabled"),
                    t.stringLiteral("true")
                  );
                  openingNode.attributes.push(disabledAttribute);
                  attributesAdded++;
                  return;
                }
              }
              let currentAncestorCandidatePath = path4.parentPath.parentPath;
              while (currentAncestorCandidatePath) {
                const ancestorJsxElementPath = currentAncestorCandidatePath.isJSXElement() ? currentAncestorCandidatePath : currentAncestorCandidatePath.findParent((p) => p.isJSXElement());
                if (!ancestorJsxElementPath) {
                  break;
                }
                if (checkTagNameEditable(ancestorJsxElementPath.node.openingElement, EDITABLE_JSX_TAGS)) {
                  return;
                }
                currentAncestorCandidatePath = ancestorJsxElementPath.parentPath;
              }
              const line = openingNode.loc.start.line;
              const column = openingNode.loc.start.column + 1;
              const editId = `${webRelativeFilePath}:${line}:${column}`;
              const idAttribute = t.jsxAttribute(
                t.jsxIdentifier("data-edit-id"),
                t.stringLiteral(editId)
              );
              openingNode.attributes.push(idAttribute);
              attributesAdded++;
            }
          }
        });
        if (attributesAdded > 0) {
          const output = generateSourceWithMap(babelAst, webRelativeFilePath, code);
          return { code: output.code, map: output.map };
        }
        return null;
      } catch (error) {
        console.error(`[vite][visual-editor] Error transforming ${id}:`, error);
        return null;
      }
    },
    // Updates source code based on the changes received from the client
    configureServer(server) {
      server.middlewares.use("/api/apply-edit", async (req, res, next) => {
        if (req.method !== "POST")
          return next();
        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });
        req.on("end", async () => {
          var _a;
          let absoluteFilePath = "";
          try {
            const { editId, newFullText } = JSON.parse(body);
            if (!editId || typeof newFullText === "undefined") {
              res.writeHead(400, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: "Missing editId or newFullText" }));
            }
            const parsedId = parseEditId(editId);
            if (!parsedId) {
              res.writeHead(400, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: "Invalid editId format (filePath:line:column)" }));
            }
            const { filePath, line, column } = parsedId;
            const validation = validateFilePath(filePath);
            if (!validation.isValid) {
              res.writeHead(400, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: validation.error }));
            }
            absoluteFilePath = validation.absolutePath;
            const originalContent = fs2.readFileSync(absoluteFilePath, "utf-8");
            const babelAst = parseFileToAST(absoluteFilePath);
            const targetNodePath = findJSXElementAtPosition(babelAst, line, column + 1);
            if (!targetNodePath) {
              res.writeHead(404, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: "Target node not found by line/column", editId }));
            }
            const targetOpeningElement = targetNodePath.node;
            const parentElementNode = (_a = targetNodePath.parentPath) == null ? void 0 : _a.node;
            const isImageElement = targetOpeningElement.name && targetOpeningElement.name.name === "img";
            let beforeCode = "";
            let afterCode = "";
            let modified = false;
            if (isImageElement) {
              beforeCode = generateCode(targetOpeningElement);
              const srcAttr = targetOpeningElement.attributes.find(
                (attr) => t.isJSXAttribute(attr) && attr.name && attr.name.name === "src"
              );
              if (srcAttr && t.isStringLiteral(srcAttr.value)) {
                srcAttr.value = t.stringLiteral(newFullText);
                modified = true;
                afterCode = generateCode(targetOpeningElement);
              }
            } else {
              if (parentElementNode && t.isJSXElement(parentElementNode)) {
                beforeCode = generateCode(parentElementNode);
                let textReplaced = false;
                parentElementNode.children = parentElementNode.children.reduce((acc, child) => {
                  if (t.isJSXText(child)) {
                    if (!textReplaced && child.value.trim().length > 0 && newFullText && newFullText.trim() !== "") {
                      const leading = child.value.match(/^(\s*)/)[0];
                      const trailing = child.value.match(/(\s*)$/)[0];
                      acc.push(t.jsxText(leading + newFullText.trim() + trailing));
                      textReplaced = true;
                    } else {
                      acc.push(child);
                    }
                    return acc;
                  }
                  acc.push(child);
                  return acc;
                }, []);
                if (!textReplaced && newFullText && newFullText.trim() !== "") {
                  parentElementNode.children.push(t.jsxText(newFullText));
                }
                modified = true;
                afterCode = generateCode(parentElementNode);
              }
            }
            if (!modified) {
              res.writeHead(409, { "Content-Type": "application/json" });
              return res.end(JSON.stringify({ error: "Could not apply changes to AST." }));
            }
            const webRelativeFilePath = path2.relative(VITE_PROJECT_ROOT, absoluteFilePath).split(path2.sep).join("/");
            const output = generateSourceWithMap(babelAst, webRelativeFilePath, originalContent);
            const newContent = output.code;
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
              success: true,
              newFileContent: newContent,
              beforeCode,
              afterCode
            }));
          } catch (error) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Internal server error during edit application." }));
          }
        });
      });
    }
  };
}

// plugins/visual-editor/vite-plugin-edit-mode.js
import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";

// plugins/visual-editor/visual-editor-config.js
var EDIT_MODE_STYLES = `
	#root[data-edit-mode-enabled="true"] [data-edit-id] {
		cursor: pointer; 
		outline: 2px dashed #357DF9; 
		outline-offset: 2px;
		min-height: 1em;
	}
	#root[data-edit-mode-enabled="true"] img[data-edit-id] {
		outline-offset: -2px;
	}
	#root[data-edit-mode-enabled="true"] {
		cursor: pointer;
	}
	#root[data-edit-mode-enabled="true"] [data-edit-id]:hover {
		background-color: #357DF933;
		outline-color: #357DF9; 
	}

	@keyframes fadeInTooltip {
		from {
			opacity: 0;
			transform: translateY(5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	#inline-editor-disabled-tooltip {
		display: none; 
		opacity: 0; 
		position: absolute;
		background-color: #1D1E20;
		color: white;
		padding: 4px 8px;
		border-radius: 8px;
		z-index: 10001;
		font-size: 14px;
		border: 1px solid #3B3D4A;
		max-width: 184px;
		text-align: center;
	}

	#inline-editor-disabled-tooltip.tooltip-active {
		display: block;
		animation: fadeInTooltip 0.2s ease-out forwards;
	}
`;

// plugins/visual-editor/vite-plugin-edit-mode.js
var __vite_injected_original_import_meta_url2 = "file:///home/u511399157/websites/HNBxq2Lwz/public_html/apps/web/plugins/visual-editor/vite-plugin-edit-mode.js";
var __filename2 = fileURLToPath2(__vite_injected_original_import_meta_url2);
var __dirname3 = resolve(__filename2, "..");
function inlineEditDevPlugin() {
  return {
    name: "vite:inline-edit-dev",
    apply: "serve",
    transformIndexHtml() {
      const scriptPath = resolve(__dirname3, "edit-mode-script.js");
      const scriptContent = readFileSync(scriptPath, "utf-8");
      return [
        {
          tag: "script",
          attrs: { type: "module" },
          children: scriptContent,
          injectTo: "body"
        },
        {
          tag: "style",
          children: EDIT_MODE_STYLES,
          injectTo: "head"
        }
      ];
    }
  };
}

// plugins/selection-mode/vite-plugin-selection-mode.js
import { readFileSync as readFileSync2 } from "node:fs";
import { resolve as resolve2 } from "node:path";
import { fileURLToPath as fileURLToPath3 } from "node:url";
var __vite_injected_original_import_meta_url3 = "file:///home/u511399157/websites/HNBxq2Lwz/public_html/apps/web/plugins/selection-mode/vite-plugin-selection-mode.js";
var __filename3 = fileURLToPath3(__vite_injected_original_import_meta_url3);
var __dirname4 = resolve2(__filename3, "..");
function selectionModePlugin() {
  return {
    name: "vite:selection-mode",
    apply: "serve",
    transformIndexHtml() {
      const scriptPath = resolve2(__dirname4, "selection-mode-script.js");
      const scriptContent = readFileSync2(scriptPath, "utf-8");
      return [
        {
          tag: "script",
          attrs: { type: "module" },
          children: scriptContent,
          injectTo: "body"
        }
      ];
    }
  };
}

// plugins/vite-plugin-iframe-route-restoration.js
function iframeRouteRestorationPlugin() {
  return {
    name: "vite:iframe-route-restoration",
    apply: "serve",
    transformIndexHtml() {
      const script = `
			const ALLOWED_PARENT_ORIGINS = [
          "https://horizons.hostinger.com",
          "https://horizons.hostinger.dev",
          "https://horizons-frontend-local.hostinger.dev",
      ];

      // Check to see if the page is in an iframe
      if (window.self !== window.top) {
			const STORAGE_KEY = 'horizons-iframe-saved-route';

			const getCurrentRoute = () => location.pathname + location.search + location.hash;

			const save = () => {
				try {
					const currentRoute = getCurrentRoute();
					sessionStorage.setItem(STORAGE_KEY, currentRoute);
					window.parent.postMessage({message: 'route-changed', route: currentRoute}, '*');
				} catch {}
			};

			const replaceHistoryState = (url) => {
				try {
					history.replaceState(null, '', url);
					window.dispatchEvent(new PopStateEvent('popstate', { state: history.state }));
					return true;
				} catch {}
				return false;
			};

			const restore = () => {
				try {
					const saved = sessionStorage.getItem(STORAGE_KEY);
					if (!saved) return;

					if (!saved.startsWith('/')) {
						sessionStorage.removeItem(STORAGE_KEY);
						return;
					}

					const current = getCurrentRoute();
					if (current !== saved) {
						if (!replaceHistoryState(saved)) {
							replaceHistoryState('/');
						}

						requestAnimationFrame(() => setTimeout(() => {
							try {
							const text = (document.body?.innerText || '').trim();

							// If the restored route results in too little content, assume it is invalid and navigate home
							if (text.length < 50) {
								replaceHistoryState('/');
							}
							} catch {}
						}, 1000));
					}
				} catch {}
			};

			const originalPushState = history.pushState;
			history.pushState = function(...args) {
				originalPushState.apply(this, args);
				save();
			};

			const originalReplaceState = history.replaceState;
			history.replaceState = function(...args) {
				originalReplaceState.apply(this, args);
				save();
			};

      const getParentOrigin = () => {
          if (
              window.location.ancestorOrigins &&
              window.location.ancestorOrigins.length > 0
          ) {
              return window.location.ancestorOrigins[0];
          }

          if (document.referrer) {
              try {
                  return new URL(document.referrer).origin;
              } catch (e) {
                  console.warn("Invalid referrer URL:", document.referrer);
              }
          }

          return null;
      };

			window.addEventListener('popstate', save);
			window.addEventListener('hashchange', save);
			window.addEventListener("message", function (event) {
				const parentOrigin = getParentOrigin();

				if (event.data?.type === "redirect-home" && parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {
                const saved = sessionStorage.getItem(STORAGE_KEY);

                if(saved && saved !== '/') {
                  replaceHistoryState('/')
                }
        }
			});


			restore();
        }
      `;
      return [
        {
          tag: "script",
          attrs: { type: "module" },
          children: script,
          injectTo: "head"
        }
      ];
    }
  };
}

// plugins/vite-plugin-pocketbase-auth.js
function pocketbaseAuthPlugin() {
  return {
    name: "vite:pocketbase-auth",
    apply: "serve",
    transformIndexHtml() {
      const script = `
                const ALLOWED_PARENT_ORIGINS = [
                    "https://horizons.hostinger.com",
                    "https://horizons.hostinger.dev",
                    "https://horizons-frontend-local.hostinger.dev",
                ];
                const getParentOrigin = () => {
                    if (
                        window.location.ancestorOrigins &&
                        window.location.ancestorOrigins.length > 0
                    ) {
                        return window.location.ancestorOrigins[0];
                    }

                    if (document.referrer) {
                        try {
                            return new URL(document.referrer).origin;
                        } catch (e) {
                            console.warn("Invalid referrer URL:", document.referrer);
                        }
                    }

                    return null;
                };
                    
                    
                    
                window.addEventListener("message", function (event) {
                    const parentOrigin = getParentOrigin();

                    if (event.data?.type === "database_preview_auth" && parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {
                        localStorage.setItem("__pb_superuser_auth__", event.data.value);
                    }
                });
            `;
      return [
        {
          tag: "script",
          attrs: { type: "module" },
          children: script,
          injectTo: "head"
        }
      ];
    }
  };
}

// vite.config.js
var __vite_injected_original_dirname = "/home/u511399157/websites/HNBxq2Lwz/public_html/apps/web";
var isDev = process.env.NODE_ENV !== "production";
var configHorizonsViteErrorHandler = `
const observer = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		for (const addedNode of mutation.addedNodes) {
			if (
				addedNode.nodeType === Node.ELEMENT_NODE &&
				(
					addedNode.tagName?.toLowerCase() === 'vite-error-overlay' ||
					addedNode.classList?.contains('backdrop')
				)
			) {
				handleViteOverlay(addedNode);
			}
		}
	}
});

observer.observe(document.documentElement, {
	childList: true,
	subtree: true
});

function handleViteOverlay(node) {
	if (!node.shadowRoot) {
		return;
	}

	const backdrop = node.shadowRoot.querySelector('.backdrop');

	if (backdrop) {
		const overlayHtml = backdrop.outerHTML;
		const parser = new DOMParser();
		const doc = parser.parseFromString(overlayHtml, 'text/html');
		const messageBodyElement = doc.querySelector('.message-body');
		const fileElement = doc.querySelector('.file');
		const messageText = messageBodyElement ? messageBodyElement.textContent.trim() : '';
		const fileText = fileElement ? fileElement.textContent.trim() : '';
		const error = messageText + (fileText ? ' File:' + fileText : '');

		window.parent.postMessage({
			type: 'horizons-vite-error',
			error,
		}, '*');
	}
}
`;
var configHorizonsRuntimeErrorHandler = `
window.onerror = (message, source, lineno, colno, errorObj) => {
	const errorDetails = errorObj ? JSON.stringify({
		name: errorObj.name,
		message: errorObj.message,
		stack: errorObj.stack,
		source,
		lineno,
		colno,
	}) : null;

	window.parent.postMessage({
		type: 'horizons-runtime-error',
		message,
		error: errorDetails
	}, '*');
};
`;
var configHorizonsConsoleErrorHandler = `
const originalConsoleError = console.error;
const MATCH_LINE_COL_REGEX = /:(\\d+):(\\d+)\\)?\\s*$/; // regex to match the :lineNum:colNum
const MATCH_AT_REGEX = /^\\s*at\\s+(?:async\\s+)?(?:.*?\\s+)?\\(?/; // regex to remove the 'at' keyword and any 'async' or function name
const MATCH_PATH_REGEX = /^\\//; // regex to remove the leading slash

function parseStackFrameLine(line) {
	const lineColMatch = line.match(MATCH_LINE_COL_REGEX);
	if (!lineColMatch) return null;
	const [, lineNum, colNum] = lineColMatch;
	const suffix = \`:\${lineNum}:\${colNum}\`;
	const idx = line.lastIndexOf(suffix);
	if (idx === -1) return null;
	const before = line.substring(0, idx);
	const path = before.replace(MATCH_AT_REGEX, '').trim();
	
	if (!path) return null;

	try {
		const pathname = new URL(path).pathname;
		const filePath = pathname.replace(MATCH_PATH_REGEX, '') || pathname;
		return \`\${filePath}:\${lineNum}:\${colNum}\`;
	} catch (e) {
		const filePath = path.replace(MATCH_PATH_REGEX, '') || path;
		return \`\${filePath}:\${lineNum}:\${colNum}\`;
	}
}

function getFilePathFromStack(stack, skipFrames = 0) {
	if (!stack || typeof stack !== 'string') return null;
	const lines = stack.split('\\n').slice(1);

	const frames = lines.map(line => parseStackFrameLine(line.replace(/\\r$/, ''))).filter(Boolean);

	return frames[skipFrames] ?? null;
}

console.error = function(...args) {
	originalConsoleError.apply(console, args);

	let errorString = '';
	let filePath = null;

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
		if (arg instanceof Error) {
			filePath = getFilePathFromStack(arg.stack, 0);
			errorString = \`\${arg.name}: \${arg.message}\`;
			if (filePath) {
				errorString = \`\${errorString} at \${filePath}\`;
			}
			break;
		}
	}

	if (!errorString) {
		errorString = args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : String(arg)).join(' ');
		const stack = new Error().stack;
		filePath = getFilePathFromStack(stack, 1);
		if (filePath) {
			errorString = \`\${errorString} at \${filePath}\`;
		}
	}

	window.parent.postMessage({
		type: 'horizons-console-error',
		error: errorString
	}, '*');
};
`;
var configWindowFetchMonkeyPatch = `
const originalFetch = window.fetch;

window.fetch = function(...args) {
	const url = args[0] instanceof Request ? args[0].url : args[0];

	// Skip WebSocket URLs
	if (url.startsWith('ws:') || url.startsWith('wss:')) {
		return originalFetch.apply(this, args);
	}

	return originalFetch.apply(this, args)
		.then(async response => {
			const contentType = response.headers.get('Content-Type') || '';

			// Exclude HTML document responses
			const isDocumentResponse =
				contentType.includes('text/html') ||
				contentType.includes('application/xhtml+xml');

			if (!response.ok && !isDocumentResponse) {
					const responseClone = response.clone();
					const errorFromRes = await responseClone.text();
					const requestUrl = response.url;
					console.error(\`Fetch error from \${requestUrl}: \${errorFromRes}\`);
			}

			return response;
		})
		.catch(error => {
			if (!url.match(/.html?$/i)) {
				console.error(error);
			}

			throw error;
		});
};
`;
var configNavigationHandler = `
if (window.navigation && window.self !== window.top) {
	window.navigation.addEventListener('navigate', (event) => {
		const url = event.destination.url;

		try {
			const destinationUrl = new URL(url);
			const destinationOrigin = destinationUrl.origin;
			const currentOrigin = window.location.origin;

			if (destinationOrigin === currentOrigin) {
				return;
			}
		} catch (error) {
			return;
		}

		window.parent.postMessage({
			type: 'horizons-navigation-error',
			url,
		}, '*');
	});
}
`;
var addTransformIndexHtml = {
  name: "add-transform-index-html",
  transformIndexHtml(html) {
    const tags = [
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsRuntimeErrorHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsViteErrorHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configHorizonsConsoleErrorHandler,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configWindowFetchMonkeyPatch,
        injectTo: "head"
      },
      {
        tag: "script",
        attrs: { type: "module" },
        children: configNavigationHandler,
        injectTo: "head"
      }
    ];
    if (!isDev && process.env.TEMPLATE_BANNER_SCRIPT_URL && process.env.TEMPLATE_REDIRECT_URL) {
      tags.push(
        {
          tag: "script",
          attrs: {
            src: process.env.TEMPLATE_BANNER_SCRIPT_URL,
            "template-redirect-url": process.env.TEMPLATE_REDIRECT_URL
          },
          injectTo: "head"
        }
      );
    }
    return {
      html,
      tags
    };
  }
};
console.warn = () => {
};
var logger = createLogger();
var loggerError = logger.error;
logger.error = (msg, options) => {
  var _a;
  if ((_a = options == null ? void 0 : options.error) == null ? void 0 : _a.toString().includes("CssSyntaxError: [postcss]")) {
    return;
  }
  loggerError(msg, options);
};
var vite_config_default = defineConfig({
  customLogger: logger,
  plugins: [
    ...isDev ? [inlineEditPlugin(), inlineEditDevPlugin(), selectionModePlugin(), iframeRouteRestorationPlugin(), pocketbaseAuthPlugin()] : [],
    react(),
    addTransformIndexHtml
  ],
  server: {
    port: 3e3,
    cors: true,
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless"
    },
    allowedHosts: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts", ".json"],
    alias: {
      "@": path3.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  build: {
    rollupOptions: {
      external: [
        "@babel/parser",
        "@babel/traverse",
        "@babel/generator",
        "@babel/types"
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGx1Z2lucy92aXN1YWwtZWRpdG9yL3ZpdGUtcGx1Z2luLXJlYWN0LWlubGluZS1lZGl0b3IuanMiLCAicGx1Z2lucy91dGlscy9hc3QtdXRpbHMuanMiLCAicGx1Z2lucy92aXN1YWwtZWRpdG9yL3ZpdGUtcGx1Z2luLWVkaXQtbW9kZS5qcyIsICJwbHVnaW5zL3Zpc3VhbC1lZGl0b3IvdmlzdWFsLWVkaXRvci1jb25maWcuanMiLCAicGx1Z2lucy9zZWxlY3Rpb24tbW9kZS92aXRlLXBsdWdpbi1zZWxlY3Rpb24tbW9kZS5qcyIsICJwbHVnaW5zL3ZpdGUtcGx1Z2luLWlmcmFtZS1yb3V0ZS1yZXN0b3JhdGlvbi5qcyIsICJwbHVnaW5zL3ZpdGUtcGx1Z2luLXBvY2tldGJhc2UtYXV0aC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBpbmxpbmVFZGl0UGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXN1YWwtZWRpdG9yL3ZpdGUtcGx1Z2luLXJlYWN0LWlubGluZS1lZGl0b3IuanMnO1xuaW1wb3J0IGVkaXRNb2RlRGV2UGx1Z2luIGZyb20gJy4vcGx1Z2lucy92aXN1YWwtZWRpdG9yL3ZpdGUtcGx1Z2luLWVkaXQtbW9kZS5qcyc7XG5pbXBvcnQgc2VsZWN0aW9uTW9kZVBsdWdpbiBmcm9tICcuL3BsdWdpbnMvc2VsZWN0aW9uLW1vZGUvdml0ZS1wbHVnaW4tc2VsZWN0aW9uLW1vZGUuanMnO1xuaW1wb3J0IGlmcmFtZVJvdXRlUmVzdG9yYXRpb25QbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLWlmcmFtZS1yb3V0ZS1yZXN0b3JhdGlvbi5qcyc7XG5pbXBvcnQgcG9ja2V0YmFzZUF1dGhQbHVnaW4gZnJvbSAnLi9wbHVnaW5zL3ZpdGUtcGx1Z2luLXBvY2tldGJhc2UtYXV0aC5qcyc7XG5cbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxuY29uc3QgY29uZmlnSG9yaXpvbnNWaXRlRXJyb3JIYW5kbGVyID0gYFxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG5cdGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zKSB7XG5cdFx0Zm9yIChjb25zdCBhZGRlZE5vZGUgb2YgbXV0YXRpb24uYWRkZWROb2Rlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRhZGRlZE5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG5cdFx0XHRcdChcblx0XHRcdFx0XHRhZGRlZE5vZGUudGFnTmFtZT8udG9Mb3dlckNhc2UoKSA9PT0gJ3ZpdGUtZXJyb3Itb3ZlcmxheScgfHxcblx0XHRcdFx0XHRhZGRlZE5vZGUuY2xhc3NMaXN0Py5jb250YWlucygnYmFja2Ryb3AnKVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0aGFuZGxlVml0ZU92ZXJsYXkoYWRkZWROb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG5vYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xuXHRjaGlsZExpc3Q6IHRydWUsXG5cdHN1YnRyZWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVWaXRlT3ZlcmxheShub2RlKSB7XG5cdGlmICghbm9kZS5zaGFkb3dSb290KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYmFja2Ryb3AgPSBub2RlLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmJhY2tkcm9wJyk7XG5cblx0aWYgKGJhY2tkcm9wKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheUh0bWwgPSBiYWNrZHJvcC5vdXRlckhUTUw7XG5cdFx0Y29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXHRcdGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcob3ZlcmxheUh0bWwsICd0ZXh0L2h0bWwnKTtcblx0XHRjb25zdCBtZXNzYWdlQm9keUVsZW1lbnQgPSBkb2MucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtYm9keScpO1xuXHRcdGNvbnN0IGZpbGVFbGVtZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJy5maWxlJyk7XG5cdFx0Y29uc3QgbWVzc2FnZVRleHQgPSBtZXNzYWdlQm9keUVsZW1lbnQgPyBtZXNzYWdlQm9keUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpIDogJyc7XG5cdFx0Y29uc3QgZmlsZVRleHQgPSBmaWxlRWxlbWVudCA/IGZpbGVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSA6ICcnO1xuXHRcdGNvbnN0IGVycm9yID0gbWVzc2FnZVRleHQgKyAoZmlsZVRleHQgPyAnIEZpbGU6JyArIGZpbGVUZXh0IDogJycpO1xuXG5cdFx0d2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XG5cdFx0XHR0eXBlOiAnaG9yaXpvbnMtdml0ZS1lcnJvcicsXG5cdFx0XHRlcnJvcixcblx0XHR9LCAnKicpO1xuXHR9XG59XG5gO1xuXG5jb25zdCBjb25maWdIb3Jpem9uc1J1bnRpbWVFcnJvckhhbmRsZXIgPSBgXG53aW5kb3cub25lcnJvciA9IChtZXNzYWdlLCBzb3VyY2UsIGxpbmVubywgY29sbm8sIGVycm9yT2JqKSA9PiB7XG5cdGNvbnN0IGVycm9yRGV0YWlscyA9IGVycm9yT2JqID8gSlNPTi5zdHJpbmdpZnkoe1xuXHRcdG5hbWU6IGVycm9yT2JqLm5hbWUsXG5cdFx0bWVzc2FnZTogZXJyb3JPYmoubWVzc2FnZSxcblx0XHRzdGFjazogZXJyb3JPYmouc3RhY2ssXG5cdFx0c291cmNlLFxuXHRcdGxpbmVubyxcblx0XHRjb2xubyxcblx0fSkgOiBudWxsO1xuXG5cdHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe1xuXHRcdHR5cGU6ICdob3Jpem9ucy1ydW50aW1lLWVycm9yJyxcblx0XHRtZXNzYWdlLFxuXHRcdGVycm9yOiBlcnJvckRldGFpbHNcblx0fSwgJyonKTtcbn07XG5gO1xuXG5jb25zdCBjb25maWdIb3Jpem9uc0NvbnNvbGVFcnJvckhhbmRsZXIgPSBgXG5jb25zdCBvcmlnaW5hbENvbnNvbGVFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG5jb25zdCBNQVRDSF9MSU5FX0NPTF9SRUdFWCA9IC86KFxcXFxkKyk6KFxcXFxkKylcXFxcKT9cXFxccyokLzsgLy8gcmVnZXggdG8gbWF0Y2ggdGhlIDpsaW5lTnVtOmNvbE51bVxuY29uc3QgTUFUQ0hfQVRfUkVHRVggPSAvXlxcXFxzKmF0XFxcXHMrKD86YXN5bmNcXFxccyspPyg/Oi4qP1xcXFxzKyk/XFxcXCg/LzsgLy8gcmVnZXggdG8gcmVtb3ZlIHRoZSAnYXQnIGtleXdvcmQgYW5kIGFueSAnYXN5bmMnIG9yIGZ1bmN0aW9uIG5hbWVcbmNvbnN0IE1BVENIX1BBVEhfUkVHRVggPSAvXlxcXFwvLzsgLy8gcmVnZXggdG8gcmVtb3ZlIHRoZSBsZWFkaW5nIHNsYXNoXG5cbmZ1bmN0aW9uIHBhcnNlU3RhY2tGcmFtZUxpbmUobGluZSkge1xuXHRjb25zdCBsaW5lQ29sTWF0Y2ggPSBsaW5lLm1hdGNoKE1BVENIX0xJTkVfQ09MX1JFR0VYKTtcblx0aWYgKCFsaW5lQ29sTWF0Y2gpIHJldHVybiBudWxsO1xuXHRjb25zdCBbLCBsaW5lTnVtLCBjb2xOdW1dID0gbGluZUNvbE1hdGNoO1xuXHRjb25zdCBzdWZmaXggPSBcXGA6XFwke2xpbmVOdW19OlxcJHtjb2xOdW19XFxgO1xuXHRjb25zdCBpZHggPSBsaW5lLmxhc3RJbmRleE9mKHN1ZmZpeCk7XG5cdGlmIChpZHggPT09IC0xKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgYmVmb3JlID0gbGluZS5zdWJzdHJpbmcoMCwgaWR4KTtcblx0Y29uc3QgcGF0aCA9IGJlZm9yZS5yZXBsYWNlKE1BVENIX0FUX1JFR0VYLCAnJykudHJpbSgpO1xuXHRcblx0aWYgKCFwYXRoKSByZXR1cm4gbnVsbDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhdGhuYW1lID0gbmV3IFVSTChwYXRoKS5wYXRobmFtZTtcblx0XHRjb25zdCBmaWxlUGF0aCA9IHBhdGhuYW1lLnJlcGxhY2UoTUFUQ0hfUEFUSF9SRUdFWCwgJycpIHx8IHBhdGhuYW1lO1xuXHRcdHJldHVybiBcXGBcXCR7ZmlsZVBhdGh9OlxcJHtsaW5lTnVtfTpcXCR7Y29sTnVtfVxcYDtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXBsYWNlKE1BVENIX1BBVEhfUkVHRVgsICcnKSB8fCBwYXRoO1xuXHRcdHJldHVybiBcXGBcXCR7ZmlsZVBhdGh9OlxcJHtsaW5lTnVtfTpcXCR7Y29sTnVtfVxcYDtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRGaWxlUGF0aEZyb21TdGFjayhzdGFjaywgc2tpcEZyYW1lcyA9IDApIHtcblx0aWYgKCFzdGFjayB8fCB0eXBlb2Ygc3RhY2sgIT09ICdzdHJpbmcnKSByZXR1cm4gbnVsbDtcblx0Y29uc3QgbGluZXMgPSBzdGFjay5zcGxpdCgnXFxcXG4nKS5zbGljZSgxKTtcblxuXHRjb25zdCBmcmFtZXMgPSBsaW5lcy5tYXAobGluZSA9PiBwYXJzZVN0YWNrRnJhbWVMaW5lKGxpbmUucmVwbGFjZSgvXFxcXHIkLywgJycpKSkuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdHJldHVybiBmcmFtZXNbc2tpcEZyYW1lc10gPz8gbnVsbDtcbn1cblxuY29uc29sZS5lcnJvciA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0b3JpZ2luYWxDb25zb2xlRXJyb3IuYXBwbHkoY29uc29sZSwgYXJncyk7XG5cblx0bGV0IGVycm9yU3RyaW5nID0gJyc7XG5cdGxldCBmaWxlUGF0aCA9IG51bGw7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgYXJnID0gYXJnc1tpXTtcblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdGZpbGVQYXRoID0gZ2V0RmlsZVBhdGhGcm9tU3RhY2soYXJnLnN0YWNrLCAwKTtcblx0XHRcdGVycm9yU3RyaW5nID0gXFxgXFwke2FyZy5uYW1lfTogXFwke2FyZy5tZXNzYWdlfVxcYDtcblx0XHRcdGlmIChmaWxlUGF0aCkge1xuXHRcdFx0XHRlcnJvclN0cmluZyA9IFxcYFxcJHtlcnJvclN0cmluZ30gYXQgXFwke2ZpbGVQYXRofVxcYDtcblx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmICghZXJyb3JTdHJpbmcpIHtcblx0XHRlcnJvclN0cmluZyA9IGFyZ3MubWFwKGFyZyA9PiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGFyZykgOiBTdHJpbmcoYXJnKSkuam9pbignICcpO1xuXHRcdGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG5cdFx0ZmlsZVBhdGggPSBnZXRGaWxlUGF0aEZyb21TdGFjayhzdGFjaywgMSk7XG5cdFx0aWYgKGZpbGVQYXRoKSB7XG5cdFx0XHRlcnJvclN0cmluZyA9IFxcYFxcJHtlcnJvclN0cmluZ30gYXQgXFwke2ZpbGVQYXRofVxcYDtcblx0XHR9XG5cdH1cblxuXHR3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHtcblx0XHR0eXBlOiAnaG9yaXpvbnMtY29uc29sZS1lcnJvcicsXG5cdFx0ZXJyb3I6IGVycm9yU3RyaW5nXG5cdH0sICcqJyk7XG59O1xuYDtcblxuY29uc3QgY29uZmlnV2luZG93RmV0Y2hNb25rZXlQYXRjaCA9IGBcbmNvbnN0IG9yaWdpbmFsRmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XG5cbndpbmRvdy5mZXRjaCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0Y29uc3QgdXJsID0gYXJnc1swXSBpbnN0YW5jZW9mIFJlcXVlc3QgPyBhcmdzWzBdLnVybCA6IGFyZ3NbMF07XG5cblx0Ly8gU2tpcCBXZWJTb2NrZXQgVVJMc1xuXHRpZiAodXJsLnN0YXJ0c1dpdGgoJ3dzOicpIHx8IHVybC5zdGFydHNXaXRoKCd3c3M6JykpIHtcblx0XHRyZXR1cm4gb3JpZ2luYWxGZXRjaC5hcHBseSh0aGlzLCBhcmdzKTtcblx0fVxuXG5cdHJldHVybiBvcmlnaW5hbEZldGNoLmFwcGx5KHRoaXMsIGFyZ3MpXG5cdFx0LnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykgfHwgJyc7XG5cblx0XHRcdC8vIEV4Y2x1ZGUgSFRNTCBkb2N1bWVudCByZXNwb25zZXNcblx0XHRcdGNvbnN0IGlzRG9jdW1lbnRSZXNwb25zZSA9XG5cdFx0XHRcdGNvbnRlbnRUeXBlLmluY2x1ZGVzKCd0ZXh0L2h0bWwnKSB8fFxuXHRcdFx0XHRjb250ZW50VHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24veGh0bWwreG1sJyk7XG5cblx0XHRcdGlmICghcmVzcG9uc2Uub2sgJiYgIWlzRG9jdW1lbnRSZXNwb25zZSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlQ2xvbmUgPSByZXNwb25zZS5jbG9uZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGVycm9yRnJvbVJlcyA9IGF3YWl0IHJlc3BvbnNlQ2xvbmUudGV4dCgpO1xuXHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RVcmwgPSByZXNwb25zZS51cmw7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihcXGBGZXRjaCBlcnJvciBmcm9tIFxcJHtyZXF1ZXN0VXJsfTogXFwke2Vycm9yRnJvbVJlc31cXGApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSlcblx0XHQuY2F0Y2goZXJyb3IgPT4ge1xuXHRcdFx0aWYgKCF1cmwubWF0Y2goL1xcLmh0bWw/JC9pKSkge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHRcdH1cblxuXHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0fSk7XG59O1xuYDtcblxuY29uc3QgY29uZmlnTmF2aWdhdGlvbkhhbmRsZXIgPSBgXG5pZiAod2luZG93Lm5hdmlnYXRpb24gJiYgd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3ApIHtcblx0d2luZG93Lm5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignbmF2aWdhdGUnLCAoZXZlbnQpID0+IHtcblx0XHRjb25zdCB1cmwgPSBldmVudC5kZXN0aW5hdGlvbi51cmw7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGVzdGluYXRpb25VcmwgPSBuZXcgVVJMKHVybCk7XG5cdFx0XHRjb25zdCBkZXN0aW5hdGlvbk9yaWdpbiA9IGRlc3RpbmF0aW9uVXJsLm9yaWdpbjtcblx0XHRcdGNvbnN0IGN1cnJlbnRPcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuXG5cdFx0XHRpZiAoZGVzdGluYXRpb25PcmlnaW4gPT09IGN1cnJlbnRPcmlnaW4pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh7XG5cdFx0XHR0eXBlOiAnaG9yaXpvbnMtbmF2aWdhdGlvbi1lcnJvcicsXG5cdFx0XHR1cmwsXG5cdFx0fSwgJyonKTtcblx0fSk7XG59XG5gO1xuXG5jb25zdCBhZGRUcmFuc2Zvcm1JbmRleEh0bWwgPSB7XG5cdG5hbWU6ICdhZGQtdHJhbnNmb3JtLWluZGV4LWh0bWwnLFxuXHR0cmFuc2Zvcm1JbmRleEh0bWwoaHRtbCkge1xuXHRcdGNvbnN0IHRhZ3MgPSBbXG5cdFx0XHR7XG5cdFx0XHRcdHRhZzogJ3NjcmlwdCcsXG5cdFx0XHRcdGF0dHJzOiB7IHR5cGU6ICdtb2R1bGUnIH0sXG5cdFx0XHRcdGNoaWxkcmVuOiBjb25maWdIb3Jpem9uc1J1bnRpbWVFcnJvckhhbmRsZXIsXG5cdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRjaGlsZHJlbjogY29uZmlnSG9yaXpvbnNWaXRlRXJyb3JIYW5kbGVyLFxuXHRcdFx0XHRpbmplY3RUbzogJ2hlYWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0YXR0cnM6IHt0eXBlOiAnbW9kdWxlJ30sXG5cdFx0XHRcdGNoaWxkcmVuOiBjb25maWdIb3Jpem9uc0NvbnNvbGVFcnJvckhhbmRsZXIsXG5cdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRjaGlsZHJlbjogY29uZmlnV2luZG93RmV0Y2hNb25rZXlQYXRjaCxcblx0XHRcdFx0aW5qZWN0VG86ICdoZWFkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRhZzogJ3NjcmlwdCcsXG5cdFx0XHRcdGF0dHJzOiB7IHR5cGU6ICdtb2R1bGUnIH0sXG5cdFx0XHRcdGNoaWxkcmVuOiBjb25maWdOYXZpZ2F0aW9uSGFuZGxlcixcblx0XHRcdFx0aW5qZWN0VG86ICdoZWFkJyxcblx0XHRcdH0sXG5cdFx0XTtcblxuXHRcdGlmICghaXNEZXYgJiYgcHJvY2Vzcy5lbnYuVEVNUExBVEVfQkFOTkVSX1NDUklQVF9VUkwgJiYgcHJvY2Vzcy5lbnYuVEVNUExBVEVfUkVESVJFQ1RfVVJMKSB7XG5cdFx0XHR0YWdzLnB1c2goXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRcdGF0dHJzOiB7XG5cdFx0XHRcdFx0XHRzcmM6IHByb2Nlc3MuZW52LlRFTVBMQVRFX0JBTk5FUl9TQ1JJUFRfVVJMLFxuXHRcdFx0XHRcdFx0J3RlbXBsYXRlLXJlZGlyZWN0LXVybCc6IHByb2Nlc3MuZW52LlRFTVBMQVRFX1JFRElSRUNUX1VSTCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGluamVjdFRvOiAnaGVhZCcsXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGh0bWwsXG5cdFx0XHR0YWdzLFxuXHRcdH07XG5cdH0sXG59O1xuXG5jb25zb2xlLndhcm4gPSAoKSA9PiB7fTtcblxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbmNvbnN0IGxvZ2dlckVycm9yID0gbG9nZ2VyLmVycm9yXG5cbmxvZ2dlci5lcnJvciA9IChtc2csIG9wdGlvbnMpID0+IHtcblx0aWYgKG9wdGlvbnM/LmVycm9yPy50b1N0cmluZygpLmluY2x1ZGVzKCdDc3NTeW50YXhFcnJvcjogW3Bvc3Rjc3NdJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsb2dnZXJFcnJvcihtc2csIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRjdXN0b21Mb2dnZXI6IGxvZ2dlcixcblx0cGx1Z2luczogW1xuXHRcdC4uLihpc0RldiA/IFtpbmxpbmVFZGl0UGx1Z2luKCksIGVkaXRNb2RlRGV2UGx1Z2luKCksIHNlbGVjdGlvbk1vZGVQbHVnaW4oKSwgaWZyYW1lUm91dGVSZXN0b3JhdGlvblBsdWdpbigpLCBwb2NrZXRiYXNlQXV0aFBsdWdpbigpXSA6IFtdKSxcblx0XHRyZWFjdCgpLFxuXHRcdGFkZFRyYW5zZm9ybUluZGV4SHRtbFxuXHRdLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiAzMDAwLFxuXHRcdGNvcnM6IHRydWUsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0Nyb3NzLU9yaWdpbi1FbWJlZGRlci1Qb2xpY3knOiAnY3JlZGVudGlhbGxlc3MnLFxuXHRcdH0sXG5cdFx0YWxsb3dlZEhvc3RzOiB0cnVlLFxuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0ZXh0ZW5zaW9uczogWycuanN4JywgJy5qcycsICcudHN4JywgJy50cycsICcuanNvbicsIF0sXG5cdFx0YWxpYXM6IHtcblx0XHRcdCdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG5cdFx0fSxcblx0fSxcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRleHRlcm5hbDogW1xuXHRcdFx0XHQnQGJhYmVsL3BhcnNlcicsXG5cdFx0XHRcdCdAYmFiZWwvdHJhdmVyc2UnLFxuXHRcdFx0XHQnQGJhYmVsL2dlbmVyYXRvcicsXG5cdFx0XHRcdCdAYmFiZWwvdHlwZXMnXG5cdFx0XHRdXG5cdFx0fVxuXHR9XG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXN1YWwtZWRpdG9yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3Zpc3VhbC1lZGl0b3Ivdml0ZS1wbHVnaW4tcmVhY3QtaW5saW5lLWVkaXRvci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3Zpc3VhbC1lZGl0b3Ivdml0ZS1wbHVnaW4tcmVhY3QtaW5saW5lLWVkaXRvci5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAYmFiZWwvcGFyc2VyJztcbmltcG9ydCB0cmF2ZXJzZUJhYmVsIGZyb20gJ0BiYWJlbC90cmF2ZXJzZSc7XG5pbXBvcnQgKiBhcyB0IGZyb20gJ0BiYWJlbC90eXBlcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgXG5cdHZhbGlkYXRlRmlsZVBhdGgsIFxuXHRwYXJzZUZpbGVUb0FTVCwgXG5cdGZpbmRKU1hFbGVtZW50QXRQb3NpdGlvbixcblx0Z2VuZXJhdGVDb2RlLFxuXHRnZW5lcmF0ZVNvdXJjZVdpdGhNYXAsXG5cdFZJVEVfUFJPSkVDVF9ST09UXG59IGZyb20gJy4uL3V0aWxzL2FzdC11dGlscy5qcyc7XG5cbmNvbnN0IEVESVRBQkxFX0pTWF9UQUdTID0gW1wiYVwiLCBcIkxpbmtcIiwgXCJidXR0b25cIiwgXCJCdXR0b25cIiwgXCJwXCIsIFwic3BhblwiLCBcImgxXCIsIFwiaDJcIiwgXCJoM1wiLCBcImg0XCIsIFwiaDVcIiwgXCJoNlwiLCBcImxhYmVsXCIsIFwiTGFiZWxcIiwgXCJpbWdcIl07XG5cbmZ1bmN0aW9uIHBhcnNlRWRpdElkKGVkaXRJZCkge1xuXHRjb25zdCBwYXJ0cyA9IGVkaXRJZC5zcGxpdCgnOicpO1xuXG5cdGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCBjb2x1bW4gPSBwYXJzZUludChwYXJ0cy5hdCgtMSksIDEwKTtcblx0Y29uc3QgbGluZSA9IHBhcnNlSW50KHBhcnRzLmF0KC0yKSwgMTApO1xuXHRjb25zdCBmaWxlUGF0aCA9IHBhcnRzLnNsaWNlKDAsIC0yKS5qb2luKCc6Jyk7XG5cblx0aWYgKCFmaWxlUGF0aCB8fCBpc05hTihsaW5lKSB8fCBpc05hTihjb2x1bW4pKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4geyBmaWxlUGF0aCwgbGluZSwgY29sdW1uIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFnTmFtZUVkaXRhYmxlKG9wZW5pbmdFbGVtZW50Tm9kZSwgZWRpdGFibGVUYWdzTGlzdCA9IEVESVRBQkxFX0pTWF9UQUdTKSB7XG5cdGlmICghb3BlbmluZ0VsZW1lbnROb2RlIHx8ICFvcGVuaW5nRWxlbWVudE5vZGUubmFtZSkgcmV0dXJuIGZhbHNlO1xuXHRjb25zdCBuYW1lTm9kZSA9IG9wZW5pbmdFbGVtZW50Tm9kZS5uYW1lO1xuXG5cdC8vIENoZWNrIDE6IERpcmVjdCBuYW1lIChmb3IgPHA+LCA8QnV0dG9uPilcblx0aWYgKG5hbWVOb2RlLnR5cGUgPT09ICdKU1hJZGVudGlmaWVyJyAmJiBlZGl0YWJsZVRhZ3NMaXN0LmluY2x1ZGVzKG5hbWVOb2RlLm5hbWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBDaGVjayAyOiBQcm9wZXJ0eSBuYW1lIG9mIGEgbWVtYmVyIGV4cHJlc3Npb24gKGZvciA8bW90aW9uLmgxPiwgY2hlY2sgaWYgXCJoMVwiIGlzIGluIGVkaXRhYmxlVGFnc0xpc3QpXG5cdGlmIChuYW1lTm9kZS50eXBlID09PSAnSlNYTWVtYmVyRXhwcmVzc2lvbicgJiYgbmFtZU5vZGUucHJvcGVydHkgJiYgbmFtZU5vZGUucHJvcGVydHkudHlwZSA9PT0gJ0pTWElkZW50aWZpZXInICYmIGVkaXRhYmxlVGFnc0xpc3QuaW5jbHVkZXMobmFtZU5vZGUucHJvcGVydHkubmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVJbWFnZVNyYyhvcGVuaW5nTm9kZSkge1xuXHRpZiAoIW9wZW5pbmdOb2RlIHx8ICFvcGVuaW5nTm9kZS5uYW1lIHx8ICggb3BlbmluZ05vZGUubmFtZS5uYW1lICE9PSAnaW1nJyAmJiBvcGVuaW5nTm9kZS5uYW1lLnByb3BlcnR5Py5uYW1lICE9PSAnaW1nJykpIHtcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiB0cnVlLCByZWFzb246IG51bGwgfTsgLy8gTm90IGFuIGltYWdlLCBza2lwIHZhbGlkYXRpb25cblx0fVxuXG5cdGNvbnN0IGhhc1Byb3BzU3ByZWFkID0gb3BlbmluZ05vZGUuYXR0cmlidXRlcy5zb21lKGF0dHIgPT5cblx0XHR0LmlzSlNYU3ByZWFkQXR0cmlidXRlKGF0dHIpICYmXG5cdFx0YXR0ci5hcmd1bWVudCAmJlxuXHRcdHQuaXNJZGVudGlmaWVyKGF0dHIuYXJndW1lbnQpICYmXG5cdFx0YXR0ci5hcmd1bWVudC5uYW1lID09PSAncHJvcHMnXG5cdCk7XG5cblx0aWYgKGhhc1Byb3BzU3ByZWFkKSB7XG5cdFx0cmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIHJlYXNvbjogJ3Byb3BzLXNwcmVhZCcgfTtcblx0fVxuXG5cdGNvbnN0IHNyY0F0dHIgPSBvcGVuaW5nTm9kZS5hdHRyaWJ1dGVzLmZpbmQoYXR0ciA9PlxuXHRcdHQuaXNKU1hBdHRyaWJ1dGUoYXR0cikgJiZcblx0XHRhdHRyLm5hbWUgJiZcblx0XHRhdHRyLm5hbWUubmFtZSA9PT0gJ3NyYydcblx0KTtcblxuXHRpZiAoIXNyY0F0dHIpIHtcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgcmVhc29uOiAnbWlzc2luZy1zcmMnIH07XG5cdH1cblxuXHRpZiAoIXQuaXNTdHJpbmdMaXRlcmFsKHNyY0F0dHIudmFsdWUpKSB7XG5cdFx0cmV0dXJuIHsgaXNWYWxpZDogZmFsc2UsIHJlYXNvbjogJ2R5bmFtaWMtc3JjJyB9O1xuXHR9XG5cblx0aWYgKCFzcmNBdHRyLnZhbHVlLnZhbHVlIHx8IHNyY0F0dHIudmFsdWUudmFsdWUudHJpbSgpID09PSAnJykge1xuXHRcdHJldHVybiB7IGlzVmFsaWQ6IGZhbHNlLCByZWFzb246ICdlbXB0eS1zcmMnIH07XG5cdH1cblxuXHRyZXR1cm4geyBpc1ZhbGlkOiB0cnVlLCByZWFzb246IG51bGwgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5saW5lRWRpdFBsdWdpbigpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiAndml0ZS1pbmxpbmUtZWRpdC1wbHVnaW4nLFxuXHRcdGVuZm9yY2U6ICdwcmUnLFxuXG5cdFx0dHJhbnNmb3JtKGNvZGUsIGlkKSB7XG5cdFx0XHRpZiAoIS9cXC4oanN4fHRzeCkkLy50ZXN0KGlkKSB8fCAhaWQuc3RhcnRzV2l0aChWSVRFX1BST0pFQ1RfUk9PVCkgfHwgaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByZWxhdGl2ZUZpbGVQYXRoID0gcGF0aC5yZWxhdGl2ZShWSVRFX1BST0pFQ1RfUk9PVCwgaWQpO1xuXHRcdFx0Y29uc3Qgd2ViUmVsYXRpdmVGaWxlUGF0aCA9IHJlbGF0aXZlRmlsZVBhdGguc3BsaXQocGF0aC5zZXApLmpvaW4oJy8nKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYmFiZWxBc3QgPSBwYXJzZShjb2RlLCB7XG5cdFx0XHRcdFx0c291cmNlVHlwZTogJ21vZHVsZScsXG5cdFx0XHRcdFx0cGx1Z2luczogWydqc3gnLCAndHlwZXNjcmlwdCddLFxuXHRcdFx0XHRcdGVycm9yUmVjb3Zlcnk6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IGF0dHJpYnV0ZXNBZGRlZCA9IDA7XG5cblx0XHRcdFx0dHJhdmVyc2VCYWJlbC5kZWZhdWx0KGJhYmVsQXN0LCB7XG5cdFx0XHRcdFx0ZW50ZXIocGF0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHBhdGguaXNKU1hPcGVuaW5nRWxlbWVudCgpKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9wZW5pbmdOb2RlID0gcGF0aC5ub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlbGVtZW50Tm9kZSA9IHBhdGgucGFyZW50UGF0aC5ub2RlOyAvLyBUaGUgSlNYRWxlbWVudCBpdHNlbGZcblxuXHRcdFx0XHRcdFx0XHRpZiAoIW9wZW5pbmdOb2RlLmxvYykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGFscmVhZHlIYXNJZCA9IG9wZW5pbmdOb2RlLmF0dHJpYnV0ZXMuc29tZShcblx0XHRcdFx0XHRcdFx0XHQoYXR0cikgPT4gdC5pc0pTWEF0dHJpYnV0ZShhdHRyKSAmJiBhdHRyLm5hbWUubmFtZSA9PT0gJ2RhdGEtZWRpdC1pZCdcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoYWxyZWFkeUhhc0lkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8gQ29uZGl0aW9uIDE6IElzIHRoZSBjdXJyZW50IGVsZW1lbnQgdGFnIHR5cGUgZWRpdGFibGU/XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGlzQ3VycmVudEVsZW1lbnRFZGl0YWJsZSA9IGNoZWNrVGFnTmFtZUVkaXRhYmxlKG9wZW5pbmdOb2RlLCBFRElUQUJMRV9KU1hfVEFHUyk7XG5cdFx0XHRcdFx0XHRcdGlmICghaXNDdXJyZW50RWxlbWVudEVkaXRhYmxlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgaW1hZ2VWYWxpZGF0aW9uID0gdmFsaWRhdGVJbWFnZVNyYyhvcGVuaW5nTm9kZSk7XG5cdFx0XHRcdFx0XHRcdGlmICghaW1hZ2VWYWxpZGF0aW9uLmlzVmFsaWQpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBkaXNhYmxlZEF0dHJpYnV0ZSA9IHQuanN4QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0dC5qc3hJZGVudGlmaWVyKCdkYXRhLWVkaXQtZGlzYWJsZWQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHQuc3RyaW5nTGl0ZXJhbCgndHJ1ZScpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRvcGVuaW5nTm9kZS5hdHRyaWJ1dGVzLnB1c2goZGlzYWJsZWRBdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNBZGRlZCsrO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGxldCBzaG91bGRCZURpc2FibGVkRHVlVG9DaGlsZHJlbiA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIENvbmRpdGlvbiAyOiBEb2VzIHRoZSBlbGVtZW50IGhhdmUgZHluYW1pYyBvciBlZGl0YWJsZSBjaGlsZHJlblxuXHRcdFx0XHRcdFx0XHRpZiAodC5pc0pTWEVsZW1lbnQoZWxlbWVudE5vZGUpICYmIGVsZW1lbnROb2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgZWxlbWVudCBoYXMgey4uLnByb3BzfSBzcHJlYWQgYXR0cmlidXRlIC0gZGlzYWJsZSBlZGl0aW5nIGlmIGl0IGRvZXNcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBoYXNQcm9wc1NwcmVhZCA9IG9wZW5pbmdOb2RlLmF0dHJpYnV0ZXMuc29tZShhdHRyID0+IHQuaXNKU1hTcHJlYWRBdHRyaWJ1dGUoYXR0cilcblx0XHRcdFx0XHRcdFx0XHRcdCYmIGF0dHIuYXJndW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdCYmIHQuaXNJZGVudGlmaWVyKGF0dHIuYXJndW1lbnQpXG5cdFx0XHRcdFx0XHRcdFx0XHQmJiBhdHRyLmFyZ3VtZW50Lm5hbWUgPT09ICdwcm9wcydcblx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgaGFzRHluYW1pY0NoaWxkID0gZWxlbWVudE5vZGUuY2hpbGRyZW4uc29tZShjaGlsZCA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0dC5pc0pTWEV4cHJlc3Npb25Db250YWluZXIoY2hpbGQpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChoYXNEeW5hbWljQ2hpbGQgfHwgaGFzUHJvcHNTcHJlYWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHNob3VsZEJlRGlzYWJsZWREdWVUb0NoaWxkcmVuID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRpZiAoIXNob3VsZEJlRGlzYWJsZWREdWVUb0NoaWxkcmVuICYmIHQuaXNKU1hFbGVtZW50KGVsZW1lbnROb2RlKSAmJiBlbGVtZW50Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGhhc0VkaXRhYmxlSnN4Q2hpbGQgPSBlbGVtZW50Tm9kZS5jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0LmlzSlNYRWxlbWVudChjaGlsZCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGNoZWNrVGFnTmFtZUVkaXRhYmxlKGNoaWxkLm9wZW5pbmdFbGVtZW50LCBFRElUQUJMRV9KU1hfVEFHUyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmIChoYXNFZGl0YWJsZUpzeENoaWxkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzaG91bGRCZURpc2FibGVkRHVlVG9DaGlsZHJlbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0aWYgKHNob3VsZEJlRGlzYWJsZWREdWVUb0NoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGlzYWJsZWRBdHRyaWJ1dGUgPSB0LmpzeEF0dHJpYnV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHQuanN4SWRlbnRpZmllcignZGF0YS1lZGl0LWRpc2FibGVkJyksXG5cdFx0XHRcdFx0XHRcdFx0XHR0LnN0cmluZ0xpdGVyYWwoJ3RydWUnKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0XHRvcGVuaW5nTm9kZS5hdHRyaWJ1dGVzLnB1c2goZGlzYWJsZWRBdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdFx0XHRcdGF0dHJpYnV0ZXNBZGRlZCsrO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC8vIENvbmRpdGlvbiAzOiBQYXJlbnQgaXMgbm9uLWVkaXRhYmxlIGlmIGl0IGhhcyBub24tZWRpdGFibGUsIG5vbi1pY29uIEpTWCBjaGlsZHJlbi5cblx0XHRcdFx0XHRcdFx0aWYgKHQuaXNKU1hFbGVtZW50KGVsZW1lbnROb2RlKSAmJiBlbGVtZW50Tm9kZS5jaGlsZHJlbiAmJiBlbGVtZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGhhc1RleHRDb250ZW50ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGhhc05vbkVkaXRhYmxlSnN4Q2hpbGQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRsZXQgaGFzTm9uU2VsZkNsb3NpbmdDaGlsZCA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBjaGlsZCBvZiBlbGVtZW50Tm9kZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHQuaXNKU1hUZXh0KGNoaWxkKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hpbGQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIGhhc1RleHRDb250ZW50ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHQuaXNKU1hFbGVtZW50KGNoaWxkKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2hpbGROb2RlID0gY2hpbGQub3BlbmluZ0VsZW1lbnQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hpbGROb2RlLnNlbGZDbG9zaW5nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNoaWxkTmFtZSA9IGNoaWxkTm9kZS5uYW1lPy5uYW1lIHx8ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIS9eW0EtWl0vLnRlc3QoY2hpbGROYW1lKSAmJiAhY2hlY2tUYWdOYW1lRWRpdGFibGUoY2hpbGROb2RlLCBFRElUQUJMRV9KU1hfVEFHUykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNOb25FZGl0YWJsZUpzeENoaWxkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGhhc05vblNlbGZDbG9zaW5nQ2hpbGQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFjaGVja1RhZ05hbWVFZGl0YWJsZShjaGlsZE5vZGUsIEVESVRBQkxFX0pTWF9UQUdTKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNOb25FZGl0YWJsZUpzeENoaWxkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFoYXNUZXh0Q29udGVudCAmJiAhaGFzTm9uU2VsZkNsb3NpbmdDaGlsZCkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGhhc05vbkVkaXRhYmxlSnN4Q2hpbGQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpc2FibGVkQXR0cmlidXRlID0gdC5qc3hBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHQuanN4SWRlbnRpZmllcignZGF0YS1lZGl0LWRpc2FibGVkJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHQuc3RyaW5nTGl0ZXJhbChcInRydWVcIilcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRvcGVuaW5nTm9kZS5hdHRyaWJ1dGVzLnB1c2goZGlzYWJsZWRBdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0YXR0cmlidXRlc0FkZGVkKys7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8gQ29uZGl0aW9uIDQ6IElzIGFueSBhbmNlc3RvciBKU1hFbGVtZW50IGFsc28gZWRpdGFibGU/XG5cdFx0XHRcdFx0XHRcdGxldCBjdXJyZW50QW5jZXN0b3JDYW5kaWRhdGVQYXRoID0gcGF0aC5wYXJlbnRQYXRoLnBhcmVudFBhdGg7XG5cdFx0XHRcdFx0XHRcdHdoaWxlIChjdXJyZW50QW5jZXN0b3JDYW5kaWRhdGVQYXRoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgYW5jZXN0b3JKc3hFbGVtZW50UGF0aCA9IGN1cnJlbnRBbmNlc3RvckNhbmRpZGF0ZVBhdGguaXNKU1hFbGVtZW50KClcblx0XHRcdFx0XHRcdFx0XHRcdD8gY3VycmVudEFuY2VzdG9yQ2FuZGlkYXRlUGF0aFxuXHRcdFx0XHRcdFx0XHRcdFx0OiBjdXJyZW50QW5jZXN0b3JDYW5kaWRhdGVQYXRoLmZpbmRQYXJlbnQocCA9PiBwLmlzSlNYRWxlbWVudCgpKTtcblxuXHRcdFx0XHRcdFx0XHRcdGlmICghYW5jZXN0b3JKc3hFbGVtZW50UGF0aCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrVGFnTmFtZUVkaXRhYmxlKGFuY2VzdG9ySnN4RWxlbWVudFBhdGgubm9kZS5vcGVuaW5nRWxlbWVudCwgRURJVEFCTEVfSlNYX1RBR1MpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRBbmNlc3RvckNhbmRpZGF0ZVBhdGggPSBhbmNlc3RvckpzeEVsZW1lbnRQYXRoLnBhcmVudFBhdGg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBsaW5lID0gb3BlbmluZ05vZGUubG9jLnN0YXJ0LmxpbmU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNvbHVtbiA9IG9wZW5pbmdOb2RlLmxvYy5zdGFydC5jb2x1bW4gKyAxO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlZGl0SWQgPSBgJHt3ZWJSZWxhdGl2ZUZpbGVQYXRofToke2xpbmV9OiR7Y29sdW1ufWA7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgaWRBdHRyaWJ1dGUgPSB0LmpzeEF0dHJpYnV0ZShcblx0XHRcdFx0XHRcdFx0XHR0LmpzeElkZW50aWZpZXIoJ2RhdGEtZWRpdC1pZCcpLFxuXHRcdFx0XHRcdFx0XHRcdHQuc3RyaW5nTGl0ZXJhbChlZGl0SWQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0b3BlbmluZ05vZGUuYXR0cmlidXRlcy5wdXNoKGlkQXR0cmlidXRlKTtcblx0XHRcdFx0XHRcdFx0YXR0cmlidXRlc0FkZGVkKys7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAoYXR0cmlidXRlc0FkZGVkID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IG91dHB1dCA9IGdlbmVyYXRlU291cmNlV2l0aE1hcChiYWJlbEFzdCwgd2ViUmVsYXRpdmVGaWxlUGF0aCwgY29kZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHsgY29kZTogb3V0cHV0LmNvZGUsIG1hcDogb3V0cHV0Lm1hcCB9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBbdml0ZV1bdmlzdWFsLWVkaXRvcl0gRXJyb3IgdHJhbnNmb3JtaW5nICR7aWR9OmAsIGVycm9yKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0fSxcblxuXG5cdFx0Ly8gVXBkYXRlcyBzb3VyY2UgY29kZSBiYXNlZCBvbiB0aGUgY2hhbmdlcyByZWNlaXZlZCBmcm9tIHRoZSBjbGllbnRcblx0XHRjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG5cdFx0XHRzZXJ2ZXIubWlkZGxld2FyZXMudXNlKCcvYXBpL2FwcGx5LWVkaXQnLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcblx0XHRcdFx0aWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykgcmV0dXJuIG5leHQoKTtcblxuXHRcdFx0XHRsZXQgYm9keSA9ICcnO1xuXHRcdFx0XHRyZXEub24oJ2RhdGEnLCBjaHVuayA9PiB7IGJvZHkgKz0gY2h1bmsudG9TdHJpbmcoKTsgfSk7XG5cblx0XHRcdFx0cmVxLm9uKCdlbmQnLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGFic29sdXRlRmlsZVBhdGggPSAnJztcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgeyBlZGl0SWQsIG5ld0Z1bGxUZXh0IH0gPSBKU09OLnBhcnNlKGJvZHkpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIWVkaXRJZCB8fCB0eXBlb2YgbmV3RnVsbFRleHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ01pc3NpbmcgZWRpdElkIG9yIG5ld0Z1bGxUZXh0JyB9KSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCBwYXJzZWRJZCA9IHBhcnNlRWRpdElkKGVkaXRJZCk7XG5cdFx0XHRcdFx0XHRcdGlmICghcGFyc2VkSWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXMud3JpdGVIZWFkKDQwMCwgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdJbnZhbGlkIGVkaXRJZCBmb3JtYXQgKGZpbGVQYXRoOmxpbmU6Y29sdW1uKScgfSkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnN0IHsgZmlsZVBhdGgsIGxpbmUsIGNvbHVtbiB9ID0gcGFyc2VkSWQ7XG5cblx0XHRcdFx0XHRcdC8vIFZhbGlkYXRlIGZpbGUgcGF0aFxuXHRcdFx0XHRcdFx0Y29uc3QgdmFsaWRhdGlvbiA9IHZhbGlkYXRlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXHRcdFx0XHRcdFx0aWYgKCF2YWxpZGF0aW9uLmlzVmFsaWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDAsIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogdmFsaWRhdGlvbi5lcnJvciB9KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRhYnNvbHV0ZUZpbGVQYXRoID0gdmFsaWRhdGlvbi5hYnNvbHV0ZVBhdGg7XG5cblx0XHRcdFx0XHRcdC8vIFBhcnNlIEFTVFxuXHRcdFx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxDb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsICd1dGYtOCcpO1xuXHRcdFx0XHRcdFx0Y29uc3QgYmFiZWxBc3QgPSBwYXJzZUZpbGVUb0FTVChhYnNvbHV0ZUZpbGVQYXRoKTtcblxuXHRcdFx0XHRcdFx0Ly8gRmluZCB0YXJnZXQgbm9kZSAobm90ZTogYXBwbHktZWRpdCB1c2VzIGNvbHVtbisxKVxuXHRcdFx0XHRcdFx0Y29uc3QgdGFyZ2V0Tm9kZVBhdGggPSBmaW5kSlNYRWxlbWVudEF0UG9zaXRpb24oYmFiZWxBc3QsIGxpbmUsIGNvbHVtbiArIDEpO1xuXG5cdFx0XHRcdFx0XHRpZiAoIXRhcmdldE5vZGVQYXRoKSB7XG5cdFx0XHRcdFx0XHRcdHJlcy53cml0ZUhlYWQoNDA0LCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdUYXJnZXQgbm9kZSBub3QgZm91bmQgYnkgbGluZS9jb2x1bW4nLCBlZGl0SWQgfSkpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCB0YXJnZXRPcGVuaW5nRWxlbWVudCA9IHRhcmdldE5vZGVQYXRoLm5vZGU7XG5cdFx0XHRcdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50Tm9kZSA9IHRhcmdldE5vZGVQYXRoLnBhcmVudFBhdGg/Lm5vZGU7XG5cblx0XHRcdFx0XHRcdGNvbnN0IGlzSW1hZ2VFbGVtZW50ID0gdGFyZ2V0T3BlbmluZ0VsZW1lbnQubmFtZSAmJiB0YXJnZXRPcGVuaW5nRWxlbWVudC5uYW1lLm5hbWUgPT09ICdpbWcnO1xuXG5cdFx0XHRcdFx0XHRsZXQgYmVmb3JlQ29kZSA9ICcnO1xuXHRcdFx0XHRcdFx0bGV0IGFmdGVyQ29kZSA9ICcnO1xuXHRcdFx0XHRcdFx0bGV0IG1vZGlmaWVkID0gZmFsc2U7XG5cblx0XHRcdFx0XHRcdGlmIChpc0ltYWdlRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgaW1hZ2Ugc3JjIGF0dHJpYnV0ZSB1cGRhdGVcblx0XHRcdFx0XHRcdFx0YmVmb3JlQ29kZSA9IGdlbmVyYXRlQ29kZSh0YXJnZXRPcGVuaW5nRWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3JjQXR0ciA9IHRhcmdldE9wZW5pbmdFbGVtZW50LmF0dHJpYnV0ZXMuZmluZChhdHRyID0+XG5cdFx0XHRcdFx0XHRcdFx0dC5pc0pTWEF0dHJpYnV0ZShhdHRyKSAmJiBhdHRyLm5hbWUgJiYgYXR0ci5uYW1lLm5hbWUgPT09ICdzcmMnXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHNyY0F0dHIgJiYgdC5pc1N0cmluZ0xpdGVyYWwoc3JjQXR0ci52YWx1ZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRzcmNBdHRyLnZhbHVlID0gdC5zdHJpbmdMaXRlcmFsKG5ld0Z1bGxUZXh0KTtcblx0XHRcdFx0XHRcdFx0XHRtb2RpZmllZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YWZ0ZXJDb2RlID0gZ2VuZXJhdGVDb2RlKHRhcmdldE9wZW5pbmdFbGVtZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnROb2RlICYmIHQuaXNKU1hFbGVtZW50KHBhcmVudEVsZW1lbnROb2RlKSkge1xuXHRcdFx0XHRcdFx0XHRcdGJlZm9yZUNvZGUgPSBnZW5lcmF0ZUNvZGUocGFyZW50RWxlbWVudE5vZGUpO1xuXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHRleHRSZXBsYWNlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdHBhcmVudEVsZW1lbnROb2RlLmNoaWxkcmVuID0gcGFyZW50RWxlbWVudE5vZGUuY2hpbGRyZW4ucmVkdWNlKChhY2MsIGNoaWxkKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodC5pc0pTWFRleHQoY2hpbGQpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghdGV4dFJlcGxhY2VkICYmIGNoaWxkLnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwICYmIG5ld0Z1bGxUZXh0ICYmIG5ld0Z1bGxUZXh0LnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBsZWFkaW5nID0gY2hpbGQudmFsdWUubWF0Y2goL14oXFxzKikvKVswXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0cmFpbGluZyA9IGNoaWxkLnZhbHVlLm1hdGNoKC8oXFxzKikkLylbMF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjLnB1c2godC5qc3hUZXh0KGxlYWRpbmcgKyBuZXdGdWxsVGV4dC50cmltKCkgKyB0cmFpbGluZykpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHRSZXBsYWNlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWNjLnB1c2goY2hpbGQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRhY2MucHVzaChjaGlsZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gYWNjO1xuXHRcdFx0XHRcdFx0XHRcdH0sIFtdKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXRleHRSZXBsYWNlZCAmJiBuZXdGdWxsVGV4dCAmJiBuZXdGdWxsVGV4dC50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJlbnRFbGVtZW50Tm9kZS5jaGlsZHJlbi5wdXNoKHQuanN4VGV4dChuZXdGdWxsVGV4dCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdG1vZGlmaWVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRhZnRlckNvZGUgPSBnZW5lcmF0ZUNvZGUocGFyZW50RWxlbWVudE5vZGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghbW9kaWZpZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDksIHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0NvdWxkIG5vdCBhcHBseSBjaGFuZ2VzIHRvIEFTVC4nIH0pKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y29uc3Qgd2ViUmVsYXRpdmVGaWxlUGF0aCA9IHBhdGgucmVsYXRpdmUoVklURV9QUk9KRUNUX1JPT1QsIGFic29sdXRlRmlsZVBhdGgpLnNwbGl0KHBhdGguc2VwKS5qb2luKCcvJyk7XG5cdFx0XHRcdFx0XHRjb25zdCBvdXRwdXQgPSBnZW5lcmF0ZVNvdXJjZVdpdGhNYXAoYmFiZWxBc3QsIHdlYlJlbGF0aXZlRmlsZVBhdGgsIG9yaWdpbmFsQ29udGVudCk7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdDb250ZW50ID0gb3V0cHV0LmNvZGU7XG5cblx0XHRcdFx0XHRcdHJlcy53cml0ZUhlYWQoMjAwLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG5cdFx0XHRcdFx0XHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0bmV3RmlsZUNvbnRlbnQ6IG5ld0NvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdGJlZm9yZUNvZGUsXG5cdFx0XHRcdFx0XHRcdGFmdGVyQ29kZSxcblx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRyZXMud3JpdGVIZWFkKDUwMCwgeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuXHRcdFx0XHRcdFx0cmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yIGR1cmluZyBlZGl0IGFwcGxpY2F0aW9uLicgfSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG59IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3V0aWxzL2FzdC11dGlscy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3V0aWxzL2FzdC11dGlscy5qc1wiO2ltcG9ydCBmcyBmcm9tICdub2RlOmZzJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuaW1wb3J0IGdlbmVyYXRlIGZyb20gJ0BiYWJlbC9nZW5lcmF0b3InO1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAYmFiZWwvcGFyc2VyJztcbmltcG9ydCB0cmF2ZXJzZUJhYmVsIGZyb20gJ0BiYWJlbC90cmF2ZXJzZSc7XG5pbXBvcnQge1xuXHRpc0pTWElkZW50aWZpZXIsXG5cdGlzSlNYTWVtYmVyRXhwcmVzc2lvbixcbn0gZnJvbSAnQGJhYmVsL3R5cGVzJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IHBhdGguZGlybmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IFZJVEVfUFJPSkVDVF9ST09UID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLy4uJyk7XG5cbi8vIEJsYWNrbGlzdCBvZiBjb21wb25lbnRzIHRoYXQgc2hvdWxkIG5vdCBiZSBleHRyYWN0ZWQgKHV0aWxpdHkvbm9uLXZpc3VhbCBjb21wb25lbnRzKVxuY29uc3QgQ09NUE9ORU5UX0JMQUNLTElTVCA9IG5ldyBTZXQoW1xuXHQnSGVsbWV0Jyxcblx0J0hlbG1ldFByb3ZpZGVyJyxcblx0J0hlYWQnLFxuXHQnaGVhZCcsXG5cdCdNZXRhJyxcblx0J21ldGEnLFxuXHQnU2NyaXB0Jyxcblx0J3NjcmlwdCcsXG5cdCdOb1NjcmlwdCcsXG5cdCdub3NjcmlwdCcsXG5cdCdTdHlsZScsXG5cdCdzdHlsZScsXG5cdCd0aXRsZScsXG5cdCdUaXRsZScsXG5cdCdsaW5rJyxcblx0J0xpbmsnLFxuXSk7XG5cbi8qKlxuICogVmFsaWRhdGVzIHRoYXQgYSBmaWxlIHBhdGggaXMgc2FmZSB0byBhY2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCAtIFJlbGF0aXZlIGZpbGUgcGF0aFxuICogQHJldHVybnMge3sgaXNWYWxpZDogYm9vbGVhbiwgYWJzb2x1dGVQYXRoPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZyB9fSAtIE9iamVjdCBjb250YWluaW5nIHZhbGlkYXRpb24gcmVzdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZpbGVQYXRoKGZpbGVQYXRoKSB7XG5cdGlmICghZmlsZVBhdGgpIHtcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3I6ICdNaXNzaW5nIGZpbGVQYXRoJyB9O1xuXHR9XG5cblx0Y29uc3QgYWJzb2x1dGVGaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShWSVRFX1BST0pFQ1RfUk9PVCwgZmlsZVBhdGgpO1xuXG5cdGlmIChmaWxlUGF0aC5pbmNsdWRlcygnLi4nKVxuXHRcdHx8ICFhYnNvbHV0ZUZpbGVQYXRoLnN0YXJ0c1dpdGgoVklURV9QUk9KRUNUX1JPT1QpXG5cdFx0fHwgYWJzb2x1dGVGaWxlUGF0aC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIHBhdGgnIH07XG5cdH1cblxuXHRpZiAoIWZzLmV4aXN0c1N5bmMoYWJzb2x1dGVGaWxlUGF0aCkpIHtcblx0XHRyZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3I6ICdGaWxlIG5vdCBmb3VuZCcgfTtcblx0fVxuXG5cdHJldHVybiB7IGlzVmFsaWQ6IHRydWUsIGFic29sdXRlUGF0aDogYWJzb2x1dGVGaWxlUGF0aCB9O1xufVxuXG4vKipcbiAqIFBhcnNlcyBhIGZpbGUgaW50byBhIEJhYmVsIEFTVFxuICogQHBhcmFtIHtzdHJpbmd9IGFic29sdXRlRmlsZVBhdGggLSBBYnNvbHV0ZSBwYXRoIHRvIGZpbGVcbiAqIEByZXR1cm5zIHtvYmplY3R9IEJhYmVsIEFTVFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWxlVG9BU1QoYWJzb2x1dGVGaWxlUGF0aCkge1xuXHRjb25zdCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGFic29sdXRlRmlsZVBhdGgsICd1dGYtOCcpO1xuXG5cdHJldHVybiBwYXJzZShjb250ZW50LCB7XG5cdFx0c291cmNlVHlwZTogJ21vZHVsZScsXG5cdFx0cGx1Z2luczogWydqc3gnLCAndHlwZXNjcmlwdCddLFxuXHRcdGVycm9yUmVjb3Zlcnk6IHRydWUsXG5cdH0pO1xufVxuXG4vKipcbiAqIEZpbmRzIGEgSlNYIG9wZW5pbmcgZWxlbWVudCBhdCBhIHNwZWNpZmljIGxpbmUgYW5kIGNvbHVtblxuICogQHBhcmFtIHtvYmplY3R9IGFzdCAtIEJhYmVsIEFTVFxuICogQHBhcmFtIHtudW1iZXJ9IGxpbmUgLSBMaW5lIG51bWJlciAoMS1pbmRleGVkKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBudW1iZXIgKDAtaW5kZXhlZCBmb3IgZ2V0LWNvZGUtYmxvY2ssIDEtaW5kZXhlZCBmb3IgYXBwbHktZWRpdClcbiAqIEByZXR1cm5zIHtvYmplY3QgfCBudWxsfSBCYWJlbCBwYXRoIHRvIHRoZSBKU1ggb3BlbmluZyBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSlNYRWxlbWVudEF0UG9zaXRpb24oYXN0LCBsaW5lLCBjb2x1bW4pIHtcblx0bGV0IHRhcmdldE5vZGVQYXRoID0gbnVsbDtcblx0bGV0IGNsb3Nlc3ROb2RlUGF0aCA9IG51bGw7XG5cdGxldCBjbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0Y29uc3QgYWxsTm9kZXNPbkxpbmUgPSBbXTtcblxuXHRjb25zdCB2aXNpdG9yID0ge1xuXHRcdEpTWE9wZW5pbmdFbGVtZW50KHBhdGgpIHtcblx0XHRcdGNvbnN0IG5vZGUgPSBwYXRoLm5vZGU7XG5cdFx0XHRpZiAobm9kZS5sb2MpIHtcblx0XHRcdFx0Ly8gRXhhY3QgbWF0Y2ggKHdpdGggdG9sZXJhbmNlIGZvciBvZmYtYnktb25lIGNvbHVtbiBkaWZmZXJlbmNlcylcblx0XHRcdFx0aWYgKG5vZGUubG9jLnN0YXJ0LmxpbmUgPT09IGxpbmVcblx0XHRcdFx0XHQmJiBNYXRoLmFicyhub2RlLmxvYy5zdGFydC5jb2x1bW4gLSBjb2x1bW4pIDw9IDEpIHtcblx0XHRcdFx0XHR0YXJnZXROb2RlUGF0aCA9IHBhdGg7XG5cdFx0XHRcdFx0cGF0aC5zdG9wKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgYWxsIG5vZGVzIG9uIHRoZSBzYW1lIGxpbmVcblx0XHRcdFx0aWYgKG5vZGUubG9jLnN0YXJ0LmxpbmUgPT09IGxpbmUpIHtcblx0XHRcdFx0XHRhbGxOb2Rlc09uTGluZS5wdXNoKHtcblx0XHRcdFx0XHRcdHBhdGgsXG5cdFx0XHRcdFx0XHRjb2x1bW46IG5vZGUubG9jLnN0YXJ0LmNvbHVtbixcblx0XHRcdFx0XHRcdGRpc3RhbmNlOiBNYXRoLmFicyhub2RlLmxvYy5zdGFydC5jb2x1bW4gLSBjb2x1bW4pLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgY2xvc2VzdCBtYXRjaCBvbiB0aGUgc2FtZSBsaW5lIGZvciBmYWxsYmFja1xuXHRcdFx0XHRpZiAobm9kZS5sb2Muc3RhcnQubGluZSA9PT0gbGluZSkge1xuXHRcdFx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMobm9kZS5sb2Muc3RhcnQuY29sdW1uIC0gY29sdW1uKTtcblx0XHRcdFx0XHRpZiAoZGlzdGFuY2UgPCBjbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRcdFx0Y2xvc2VzdE5vZGVQYXRoID0gcGF0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIEFsc28gY2hlY2sgSlNYRWxlbWVudCBub2RlcyB0aGF0IGNvbnRhaW4gdGhlIHBvc2l0aW9uXG5cdFx0SlNYRWxlbWVudChwYXRoKSB7XG5cdFx0XHRjb25zdCBub2RlID0gcGF0aC5ub2RlO1xuXHRcdFx0aWYgKCFub2RlLmxvYykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIENoZWNrIGlmIHRoaXMgZWxlbWVudCBzcGFucyB0aGUgdGFyZ2V0IGxpbmUgKGZvciBtdWx0aS1saW5lIGVsZW1lbnRzKVxuXHRcdFx0aWYgKG5vZGUubG9jLnN0YXJ0LmxpbmUgPiBsaW5lIHx8IG5vZGUubG9jLmVuZC5saW5lIDwgbGluZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlJ3JlIGluc2lkZSB0aGlzIGVsZW1lbnQncyByYW5nZSwgY29uc2lkZXIgaXRzIG9wZW5pbmcgZWxlbWVudFxuXHRcdFx0aWYgKCFwYXRoLm5vZGUub3BlbmluZ0VsZW1lbnQ/LmxvYykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9wZW5pbmdMaW5lID0gcGF0aC5ub2RlLm9wZW5pbmdFbGVtZW50LmxvYy5zdGFydC5saW5lO1xuXHRcdFx0Y29uc3Qgb3BlbmluZ0NvbCA9IHBhdGgubm9kZS5vcGVuaW5nRWxlbWVudC5sb2Muc3RhcnQuY29sdW1uO1xuXG5cdFx0XHQvLyBQcmVmZXIgZWxlbWVudHMgdGhhdCBzdGFydCBvbiB0aGUgZXhhY3QgbGluZVxuXHRcdFx0aWYgKG9wZW5pbmdMaW5lID09PSBsaW5lKSB7XG5cdFx0XHRcdGNvbnN0IGRpc3RhbmNlID0gTWF0aC5hYnMob3BlbmluZ0NvbCAtIGNvbHVtbik7XG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRcdGNsb3Nlc3ROb2RlUGF0aCA9IHBhdGguZ2V0KCdvcGVuaW5nRWxlbWVudCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGFuZGxlIGVsZW1lbnRzIHRoYXQgc3RhcnQgYmVmb3JlIHRoZSB0YXJnZXQgbGluZVxuXHRcdFx0aWYgKG9wZW5pbmdMaW5lIDwgbGluZSkge1xuXHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IChsaW5lIC0gb3BlbmluZ0xpbmUpICogMTAwOyAvLyBQZW5hbGl6ZSBieSBsaW5lIGRpc3RhbmNlXG5cdFx0XHRcdGlmIChkaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRcdGNsb3Nlc3ROb2RlUGF0aCA9IHBhdGguZ2V0KCdvcGVuaW5nRWxlbWVudCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblxuXHR0cmF2ZXJzZUJhYmVsLmRlZmF1bHQoYXN0LCB2aXNpdG9yKTtcblxuXHQvLyBSZXR1cm4gZXhhY3QgbWF0Y2ggaWYgZm91bmQsIG90aGVyd2lzZSByZXR1cm4gY2xvc2VzdCBtYXRjaCBpZiB3aXRoaW4gcmVhc29uYWJsZSBkaXN0YW5jZVxuXHQvLyBVc2UgbGFyZ2VyIHRocmVzaG9sZCAoNTAgY2hhcnMpIGZvciBzYW1lLWxpbmUgZWxlbWVudHMsIDUgbGluZXMgZm9yIG11bHRpLWxpbmUgZWxlbWVudHNcblx0Y29uc3QgdGhyZXNob2xkID0gY2xvc2VzdERpc3RhbmNlIDwgMTAwID8gNTAgOiA1MDA7XG5cdHJldHVybiB0YXJnZXROb2RlUGF0aCB8fCAoY2xvc2VzdERpc3RhbmNlIDw9IHRocmVzaG9sZCA/IGNsb3Nlc3ROb2RlUGF0aCA6IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIEpTWCBlbGVtZW50IG5hbWUgaXMgYmxhY2tsaXN0ZWRcbiAqIEBwYXJhbSB7b2JqZWN0fSBqc3hPcGVuaW5nRWxlbWVudCAtIEJhYmVsIEpTWCBvcGVuaW5nIGVsZW1lbnQgbm9kZVxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgYmxhY2tsaXN0ZWRcbiAqL1xuZnVuY3Rpb24gaXNCbGFja2xpc3RlZENvbXBvbmVudChqc3hPcGVuaW5nRWxlbWVudCkge1xuXHRpZiAoIWpzeE9wZW5pbmdFbGVtZW50IHx8ICFqc3hPcGVuaW5nRWxlbWVudC5uYW1lKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSGFuZGxlIEpTWElkZW50aWZpZXIgKGUuZy4sIDxIZWxtZXQ+KVxuXHRpZiAoaXNKU1hJZGVudGlmaWVyKGpzeE9wZW5pbmdFbGVtZW50Lm5hbWUpKSB7XG5cdFx0cmV0dXJuIENPTVBPTkVOVF9CTEFDS0xJU1QuaGFzKGpzeE9wZW5pbmdFbGVtZW50Lm5hbWUubmFtZSk7XG5cdH1cblxuXHQvLyBIYW5kbGUgSlNYTWVtYmVyRXhwcmVzc2lvbiAoZS5nLiwgPFJlYWN0LkZyYWdtZW50Pilcblx0aWYgKGlzSlNYTWVtYmVyRXhwcmVzc2lvbihqc3hPcGVuaW5nRWxlbWVudC5uYW1lKSkge1xuXHRcdGxldCBjdXJyZW50ID0ganN4T3BlbmluZ0VsZW1lbnQubmFtZTtcblx0XHR3aGlsZSAoaXNKU1hNZW1iZXJFeHByZXNzaW9uKGN1cnJlbnQpKSB7XG5cdFx0XHRjdXJyZW50ID0gY3VycmVudC5wcm9wZXJ0eTtcblx0XHR9XG5cdFx0aWYgKGlzSlNYSWRlbnRpZmllcihjdXJyZW50KSkge1xuXHRcdFx0cmV0dXJuIENPTVBPTkVOVF9CTEFDS0xJU1QuaGFzKGN1cnJlbnQubmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBjb2RlIGZyb20gYW4gQVNUIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBub2RlIC0gQmFiZWwgQVNUIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gR2VuZXJhdG9yIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEdlbmVyYXRlZCBjb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvZGUobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGdlbmVyYXRlRnVuY3Rpb24gPSBnZW5lcmF0ZS5kZWZhdWx0IHx8IGdlbmVyYXRlO1xuXHRjb25zdCBvdXRwdXQgPSBnZW5lcmF0ZUZ1bmN0aW9uKG5vZGUsIG9wdGlvbnMpO1xuXHRyZXR1cm4gb3V0cHV0LmNvZGU7XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZnVsbCBzb3VyY2UgZmlsZSBmcm9tIEFTVCB3aXRoIHNvdXJjZSBtYXBzXG4gKiBAcGFyYW0ge29iamVjdH0gYXN0IC0gQmFiZWwgQVNUXG4gKiBAcGFyYW0ge3N0cmluZ30gc291cmNlRmlsZU5hbWUgLSBTb3VyY2UgZmlsZSBuYW1lIGZvciBzb3VyY2UgbWFwXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luYWxDb2RlIC0gT3JpZ2luYWwgc291cmNlIGNvZGVcbiAqIEByZXR1cm5zIHt7Y29kZTogc3RyaW5nLCBtYXA6IG9iamVjdH19IC0gT2JqZWN0IGNvbnRhaW5pbmcgZ2VuZXJhdGVkIGNvZGUgYW5kIHNvdXJjZSBtYXBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU291cmNlV2l0aE1hcChhc3QsIHNvdXJjZUZpbGVOYW1lLCBvcmlnaW5hbENvZGUpIHtcblx0Y29uc3QgZ2VuZXJhdGVGdW5jdGlvbiA9IGdlbmVyYXRlLmRlZmF1bHQgfHwgZ2VuZXJhdGU7XG5cdHJldHVybiBnZW5lcmF0ZUZ1bmN0aW9uKGFzdCwge1xuXHRcdHNvdXJjZU1hcHM6IHRydWUsXG5cdFx0c291cmNlRmlsZU5hbWUsXG5cdH0sIG9yaWdpbmFsQ29kZSk7XG59XG5cbi8qKlxuICogRXh0cmFjdHMgY29kZSBibG9ja3MgZnJvbSBhIEpTWCBlbGVtZW50IGF0IGEgc3BlY2lmaWMgbG9jYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCAtIFJlbGF0aXZlIGZpbGUgcGF0aFxuICogQHBhcmFtIHtudW1iZXJ9IGxpbmUgLSBMaW5lIG51bWJlclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbiAtIENvbHVtbiBudW1iZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZG9tQ29udGV4dF0gLSBPcHRpb25hbCBET00gY29udGV4dCB0byByZXR1cm4gb24gZmFpbHVyZVxuICogQHJldHVybnMge3tzdWNjZXNzOiBib29sZWFuLCBmaWxlUGF0aD86IHN0cmluZywgc3BlY2lmaWNMaW5lPzogc3RyaW5nLCBlcnJvcj86IHN0cmluZywgZG9tQ29udGV4dD86IG9iamVjdH19IC0gT2JqZWN0IHdpdGggbWV0YWRhdGEgZm9yIExMTVxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdENvZGVCbG9ja3MoZmlsZVBhdGgsIGxpbmUsIGNvbHVtbiwgZG9tQ29udGV4dCkge1xuXHR0cnkge1xuXHRcdC8vIFZhbGlkYXRlIGZpbGUgcGF0aFxuXHRcdGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0ZUZpbGVQYXRoKGZpbGVQYXRoKTtcblx0XHRpZiAoIXZhbGlkYXRpb24uaXNWYWxpZCkge1xuXHRcdFx0cmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiB2YWxpZGF0aW9uLmVycm9yLCBkb21Db250ZXh0IH07XG5cdFx0fVxuXG5cdFx0Ly8gUGFyc2UgQVNUXG5cdFx0Y29uc3QgYXN0ID0gcGFyc2VGaWxlVG9BU1QodmFsaWRhdGlvbi5hYnNvbHV0ZVBhdGgpO1xuXG5cdFx0Ly8gRmluZCB0YXJnZXQgbm9kZVxuXHRcdGNvbnN0IHRhcmdldE5vZGVQYXRoID0gZmluZEpTWEVsZW1lbnRBdFBvc2l0aW9uKGFzdCwgbGluZSwgY29sdW1uKTtcblxuXHRcdGlmICghdGFyZ2V0Tm9kZVBhdGgpIHtcblx0XHRcdHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1RhcmdldCBub2RlIG5vdCBmb3VuZCBhdCBzcGVjaWZpZWQgbGluZS9jb2x1bW4nLCBkb21Db250ZXh0IH07XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIHRhcmdldCBub2RlIGlzIGEgYmxhY2tsaXN0ZWQgY29tcG9uZW50XG5cdFx0Y29uc3QgaXNCbGFja2xpc3RlZCA9IGlzQmxhY2tsaXN0ZWRDb21wb25lbnQodGFyZ2V0Tm9kZVBhdGgubm9kZSk7XG5cblx0XHRpZiAoaXNCbGFja2xpc3RlZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcblx0XHRcdFx0ZmlsZVBhdGgsXG5cdFx0XHRcdHNwZWNpZmljTGluZTogJycsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEdldCBzcGVjaWZpYyBsaW5lIGNvZGVcblx0XHRjb25zdCBzcGVjaWZpY0xpbmUgPSBnZW5lcmF0ZUNvZGUodGFyZ2V0Tm9kZVBhdGgucGFyZW50UGF0aD8ubm9kZSB8fCB0YXJnZXROb2RlUGF0aC5ub2RlKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdWNjZXNzOiB0cnVlLFxuXHRcdFx0ZmlsZVBhdGgsXG5cdFx0XHRzcGVjaWZpY0xpbmUsXG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbYXN0LXV0aWxzXSBFcnJvciBleHRyYWN0aW5nIGNvZGUgYmxvY2tzOicsIGVycm9yKTtcblx0XHRyZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZXh0cmFjdCBjb2RlIGJsb2NrcycsIGRvbUNvbnRleHQgfTtcblx0fVxufVxuXG4vKipcbiAqIFByb2plY3Qgcm9vdCBwYXRoXG4gKi9cbmV4cG9ydCB7IFZJVEVfUFJPSkVDVF9ST09UIH07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViL3BsdWdpbnMvdmlzdWFsLWVkaXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXN1YWwtZWRpdG9yL3ZpdGUtcGx1Z2luLWVkaXQtbW9kZS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3Zpc3VhbC1lZGl0b3Ivdml0ZS1wbHVnaW4tZWRpdC1tb2RlLmpzXCI7aW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBFRElUX01PREVfU1RZTEVTIH0gZnJvbSAnLi92aXN1YWwtZWRpdG9yLWNvbmZpZyc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSByZXNvbHZlKF9fZmlsZW5hbWUsICcuLicpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmxpbmVFZGl0RGV2UGx1Z2luKCkge1xuXHRyZXR1cm4ge1xuXHRcdG5hbWU6ICd2aXRlOmlubGluZS1lZGl0LWRldicsXG5cdFx0YXBwbHk6ICdzZXJ2ZScsXG5cdFx0dHJhbnNmb3JtSW5kZXhIdG1sKCkge1xuXHRcdFx0Y29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCAnZWRpdC1tb2RlLXNjcmlwdC5qcycpO1xuXHRcdFx0Y29uc3Qgc2NyaXB0Q29udGVudCA9IHJlYWRGaWxlU3luYyhzY3JpcHRQYXRoLCAndXRmLTgnKTtcblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ3NjcmlwdCcsXG5cdFx0XHRcdFx0YXR0cnM6IHsgdHlwZTogJ21vZHVsZScgfSxcblx0XHRcdFx0XHRjaGlsZHJlbjogc2NyaXB0Q29udGVudCxcblx0XHRcdFx0XHRpbmplY3RUbzogJ2JvZHknXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YWc6ICdzdHlsZScsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IEVESVRfTU9ERV9TVFlMRVMsXG5cdFx0XHRcdFx0aW5qZWN0VG86ICdoZWFkJ1xuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH1cblx0fTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXN1YWwtZWRpdG9yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3Zpc3VhbC1lZGl0b3IvdmlzdWFsLWVkaXRvci1jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXN1YWwtZWRpdG9yL3Zpc3VhbC1lZGl0b3ItY29uZmlnLmpzXCI7ZXhwb3J0IGNvbnN0IFBPUFVQX1NUWUxFUyA9IGBcbiNpbmxpbmUtZWRpdG9yLXBvcHVwIHtcblx0d2lkdGg6IDM2MHB4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDEwMDAwO1xuXHRiYWNrZ3JvdW5kOiAjMTYxNzE4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM0YTU1Njg7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdHBhZGRpbmc6IDhweDtcblx0Ym94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMik7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMTBweDtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdCNpbmxpbmUtZWRpdG9yLXBvcHVwIHtcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG5cdH1cbn1cblxuI2lubGluZS1lZGl0b3ItcG9wdXAuaXMtYWN0aXZlIHtcblx0ZGlzcGxheTogZmxleDtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbiNpbmxpbmUtZWRpdG9yLXBvcHVwLmlzLWRpc2FibGVkLXZpZXcge1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbiNpbmxpbmUtZWRpdG9yLXBvcHVwIHRleHRhcmVhIHtcblx0aGVpZ2h0OiAxMDBweDtcblx0cGFkZGluZzogNHB4IDhweDtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdGxpbmUtaGVpZ2h0OiAxLjQyO1xuXHRyZXNpemU6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbiNpbmxpbmUtZWRpdG9yLXBvcHVwIC5idXR0b24tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0Z2FwOiAxMHB4O1xufVxuXG4jaW5saW5lLWVkaXRvci1wb3B1cCAucG9wdXAtYnV0dG9uIHtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiA2cHggMTZweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0aGVpZ2h0OiAzNHB4O1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4jaW5saW5lLWVkaXRvci1wb3B1cCAuc2F2ZS1idXR0b24ge1xuXHRiYWNrZ3JvdW5kOiAjNjczZGU2O1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbiNpbmxpbmUtZWRpdG9yLXBvcHVwIC5jYW5jZWwtYnV0dG9uIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzYjNkNGE7XG5cdGNvbG9yOiB3aGl0ZTtcblxuXHQmOmhvdmVyIHtcblx0YmFja2dyb3VuZDojNDc0OTU4O1xuXHR9XG59XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9wdXBIVE1MVGVtcGxhdGUoc2F2ZUxhYmVsLCBjYW5jZWxMYWJlbCkge1xuXHRyZXR1cm4gYFxuXHQ8dGV4dGFyZWE+PC90ZXh0YXJlYT5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwicG9wdXAtYnV0dG9uIGNhbmNlbC1idXR0b25cIj4ke2NhbmNlbExhYmVsfTwvYnV0dG9uPlxuXHRcdDxidXR0b24gY2xhc3M9XCJwb3B1cC1idXR0b24gc2F2ZS1idXR0b25cIj4ke3NhdmVMYWJlbH08L2J1dHRvbj5cblx0PC9kaXY+XG5cdGA7XG59XG5cbmV4cG9ydCBjb25zdCBFRElUX01PREVfU1RZTEVTID0gYFxuXHQjcm9vdFtkYXRhLWVkaXQtbW9kZS1lbmFibGVkPVwidHJ1ZVwiXSBbZGF0YS1lZGl0LWlkXSB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyOyBcblx0XHRvdXRsaW5lOiAycHggZGFzaGVkICMzNTdERjk7IFxuXHRcdG91dGxpbmUtb2Zmc2V0OiAycHg7XG5cdFx0bWluLWhlaWdodDogMWVtO1xuXHR9XG5cdCNyb290W2RhdGEtZWRpdC1tb2RlLWVuYWJsZWQ9XCJ0cnVlXCJdIGltZ1tkYXRhLWVkaXQtaWRdIHtcblx0XHRvdXRsaW5lLW9mZnNldDogLTJweDtcblx0fVxuXHQjcm9vdFtkYXRhLWVkaXQtbW9kZS1lbmFibGVkPVwidHJ1ZVwiXSB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5cdCNyb290W2RhdGEtZWRpdC1tb2RlLWVuYWJsZWQ9XCJ0cnVlXCJdIFtkYXRhLWVkaXQtaWRdOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzU3REY5MzM7XG5cdFx0b3V0bGluZS1jb2xvcjogIzM1N0RGOTsgXG5cdH1cblxuXHRAa2V5ZnJhbWVzIGZhZGVJblRvb2x0aXAge1xuXHRcdGZyb20ge1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuXHRcdH1cblx0XHR0byB7XG5cdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdH1cblx0fVxuXG5cdCNpbmxpbmUtZWRpdG9yLWRpc2FibGVkLXRvb2x0aXAge1xuXHRcdGRpc3BsYXk6IG5vbmU7IFxuXHRcdG9wYWNpdHk6IDA7IFxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMUQxRTIwO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiA0cHggOHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHR6LWluZGV4OiAxMDAwMTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzNCM0Q0QTtcblx0XHRtYXgtd2lkdGg6IDE4NHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdCNpbmxpbmUtZWRpdG9yLWRpc2FibGVkLXRvb2x0aXAudG9vbHRpcC1hY3RpdmUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGFuaW1hdGlvbjogZmFkZUluVG9vbHRpcCAwLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xuXHR9XG5gO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3NlbGVjdGlvbi1tb2RlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS91NTExMzk5MTU3L3dlYnNpdGVzL0hOQnhxMkx3ei9wdWJsaWNfaHRtbC9hcHBzL3dlYi9wbHVnaW5zL3NlbGVjdGlvbi1tb2RlL3ZpdGUtcGx1Z2luLXNlbGVjdGlvbi1tb2RlLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViL3BsdWdpbnMvc2VsZWN0aW9uLW1vZGUvdml0ZS1wbHVnaW4tc2VsZWN0aW9uLW1vZGUuanNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdub2RlOmZzJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IHJlc29sdmUoX19maWxlbmFtZSwgJy4uJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdGlvbk1vZGVQbHVnaW4oKSB7XG5cdHJldHVybiB7XG5cdFx0bmFtZTogJ3ZpdGU6c2VsZWN0aW9uLW1vZGUnLFxuXHRcdGFwcGx5OiAnc2VydmUnLFxuXG5cdFx0dHJhbnNmb3JtSW5kZXhIdG1sKCkge1xuXHRcdFx0Y29uc3Qgc2NyaXB0UGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCAnc2VsZWN0aW9uLW1vZGUtc2NyaXB0LmpzJyk7XG5cdFx0XHRjb25zdCBzY3JpcHRDb250ZW50ID0gcmVhZEZpbGVTeW5jKHNjcmlwdFBhdGgsICd1dGYtOCcpO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBzY3JpcHRDb250ZW50LFxuXHRcdFx0XHRcdGluamVjdFRvOiAnYm9keScsXG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXHRcdH0sXG5cdH07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViL3BsdWdpbnMvdml0ZS1wbHVnaW4taWZyYW1lLXJvdXRlLXJlc3RvcmF0aW9uLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3U1MTEzOTkxNTcvd2Vic2l0ZXMvSE5CeHEyTHd6L3B1YmxpY19odG1sL2FwcHMvd2ViL3BsdWdpbnMvdml0ZS1wbHVnaW4taWZyYW1lLXJvdXRlLXJlc3RvcmF0aW9uLmpzXCI7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaWZyYW1lUm91dGVSZXN0b3JhdGlvblBsdWdpbigpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiAndml0ZTppZnJhbWUtcm91dGUtcmVzdG9yYXRpb24nLFxuXHRcdGFwcGx5OiAnc2VydmUnLFxuXHRcdHRyYW5zZm9ybUluZGV4SHRtbCgpIHtcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGBcblx0XHRcdGNvbnN0IEFMTE9XRURfUEFSRU5UX09SSUdJTlMgPSBbXG4gICAgICAgICAgXCJodHRwczovL2hvcml6b25zLmhvc3Rpbmdlci5jb21cIixcbiAgICAgICAgICBcImh0dHBzOi8vaG9yaXpvbnMuaG9zdGluZ2VyLmRldlwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9ob3Jpem9ucy1mcm9udGVuZC1sb2NhbC5ob3N0aW5nZXIuZGV2XCIsXG4gICAgICBdO1xuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIHBhZ2UgaXMgaW4gYW4gaWZyYW1lXG4gICAgICBpZiAod2luZG93LnNlbGYgIT09IHdpbmRvdy50b3ApIHtcblx0XHRcdGNvbnN0IFNUT1JBR0VfS0VZID0gJ2hvcml6b25zLWlmcmFtZS1zYXZlZC1yb3V0ZSc7XG5cblx0XHRcdGNvbnN0IGdldEN1cnJlbnRSb3V0ZSA9ICgpID0+IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaDtcblxuXHRcdFx0Y29uc3Qgc2F2ZSA9ICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50Um91dGUgPSBnZXRDdXJyZW50Um91dGUoKTtcblx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBjdXJyZW50Um91dGUpO1xuXHRcdFx0XHRcdHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe21lc3NhZ2U6ICdyb3V0ZS1jaGFuZ2VkJywgcm91dGU6IGN1cnJlbnRSb3V0ZX0sICcqJyk7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IHJlcGxhY2VIaXN0b3J5U3RhdGUgPSAodXJsKSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsIHVybCk7XG5cdFx0XHRcdFx0d2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFBvcFN0YXRlRXZlbnQoJ3BvcHN0YXRlJywgeyBzdGF0ZTogaGlzdG9yeS5zdGF0ZSB9KSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgcmVzdG9yZSA9ICgpID0+IHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBzYXZlZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xuXHRcdFx0XHRcdGlmICghc2F2ZWQpIHJldHVybjtcblxuXHRcdFx0XHRcdGlmICghc2F2ZWQuc3RhcnRzV2l0aCgnLycpKSB7XG5cdFx0XHRcdFx0XHRzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCBjdXJyZW50ID0gZ2V0Q3VycmVudFJvdXRlKCk7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnQgIT09IHNhdmVkKSB7XG5cdFx0XHRcdFx0XHRpZiAoIXJlcGxhY2VIaXN0b3J5U3RhdGUoc2F2ZWQpKSB7XG5cdFx0XHRcdFx0XHRcdHJlcGxhY2VIaXN0b3J5U3RhdGUoJy8nKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0ID0gKGRvY3VtZW50LmJvZHk/LmlubmVyVGV4dCB8fCAnJykudHJpbSgpO1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHRoZSByZXN0b3JlZCByb3V0ZSByZXN1bHRzIGluIHRvbyBsaXR0bGUgY29udGVudCwgYXNzdW1lIGl0IGlzIGludmFsaWQgYW5kIG5hdmlnYXRlIGhvbWVcblx0XHRcdFx0XHRcdFx0aWYgKHRleHQubGVuZ3RoIDwgNTApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBsYWNlSGlzdG9yeVN0YXRlKCcvJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0XHRcdFx0fSwgMTAwMCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3Qgb3JpZ2luYWxQdXNoU3RhdGUgPSBoaXN0b3J5LnB1c2hTdGF0ZTtcblx0XHRcdGhpc3RvcnkucHVzaFN0YXRlID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdFx0XHRvcmlnaW5hbFB1c2hTdGF0ZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHRcdFx0c2F2ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3Qgb3JpZ2luYWxSZXBsYWNlU3RhdGUgPSBoaXN0b3J5LnJlcGxhY2VTdGF0ZTtcblx0XHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdFx0XHRvcmlnaW5hbFJlcGxhY2VTdGF0ZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHRcdFx0c2F2ZSgpO1xuXHRcdFx0fTtcblxuICAgICAgY29uc3QgZ2V0UGFyZW50T3JpZ2luID0gKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFuY2VzdG9yT3JpZ2lucyAmJlxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYW5jZXN0b3JPcmlnaW5zLmxlbmd0aCA+IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5hbmNlc3Rvck9yaWdpbnNbMF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGRvY3VtZW50LnJlZmVycmVyKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2luO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHJlZmVycmVyIFVSTDpcIiwgZG9jdW1lbnQucmVmZXJyZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBzYXZlKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2F2ZSk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IHBhcmVudE9yaWdpbiA9IGdldFBhcmVudE9yaWdpbigpO1xuXG5cdFx0XHRcdGlmIChldmVudC5kYXRhPy50eXBlID09PSBcInJlZGlyZWN0LWhvbWVcIiAmJiBwYXJlbnRPcmlnaW4gJiYgQUxMT1dFRF9QQVJFTlRfT1JJR0lOUy5pbmNsdWRlcyhwYXJlbnRPcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKTtcblxuICAgICAgICAgICAgICAgIGlmKHNhdmVkICYmIHNhdmVkICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgIHJlcGxhY2VIaXN0b3J5U3RhdGUoJy8nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHRcdFx0fSk7XG5cblxuXHRcdFx0cmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICBgO1xuXG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAnc2NyaXB0Jyxcblx0XHRcdFx0XHRhdHRyczogeyB0eXBlOiAnbW9kdWxlJyB9LFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBzY3JpcHQsXG5cdFx0XHRcdFx0aW5qZWN0VG86ICdoZWFkJ1xuXHRcdFx0XHR9XG5cdFx0XHRdO1xuXHRcdH1cblx0fTtcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXRlLXBsdWdpbi1wb2NrZXRiYXNlLWF1dGguanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvdTUxMTM5OTE1Ny93ZWJzaXRlcy9ITkJ4cTJMd3ovcHVibGljX2h0bWwvYXBwcy93ZWIvcGx1Z2lucy92aXRlLXBsdWdpbi1wb2NrZXRiYXNlLWF1dGguanNcIjtleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2NrZXRiYXNlQXV0aFBsdWdpbigpIHtcblx0cmV0dXJuIHtcblx0XHRuYW1lOiAndml0ZTpwb2NrZXRiYXNlLWF1dGgnLFxuXHRcdGFwcGx5OiAnc2VydmUnLFxuXHRcdHRyYW5zZm9ybUluZGV4SHRtbCgpIHtcblx0XHRcdGNvbnN0IHNjcmlwdCA9IGBcbiAgICAgICAgICAgICAgICBjb25zdCBBTExPV0VEX1BBUkVOVF9PUklHSU5TID0gW1xuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaG9yaXpvbnMuaG9zdGluZ2VyLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaG9yaXpvbnMuaG9zdGluZ2VyLmRldlwiLFxuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vaG9yaXpvbnMtZnJvbnRlbmQtbG9jYWwuaG9zdGluZ2VyLmRldlwiLFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0UGFyZW50T3JpZ2luID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYW5jZXN0b3JPcmlnaW5zICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYW5jZXN0b3JPcmlnaW5zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmFuY2VzdG9yT3JpZ2luc1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5yZWZlcnJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2luO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgcmVmZXJyZXIgVVJMOlwiLCBkb2N1bWVudC5yZWZlcnJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50T3JpZ2luID0gZ2V0UGFyZW50T3JpZ2luKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGE/LnR5cGUgPT09IFwiZGF0YWJhc2VfcHJldmlld19hdXRoXCIgJiYgcGFyZW50T3JpZ2luICYmIEFMTE9XRURfUEFSRU5UX09SSUdJTlMuaW5jbHVkZXMocGFyZW50T3JpZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfX3BiX3N1cGVydXNlcl9hdXRoX19cIiwgZXZlbnQuZGF0YS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGA7XG5cblx0XHRcdHJldHVybiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0YWc6ICdzY3JpcHQnLFxuXHRcdFx0XHRcdGF0dHJzOiB7IHR5cGU6ICdtb2R1bGUnIH0sXG5cdFx0XHRcdFx0Y2hpbGRyZW46IHNjcmlwdCxcblx0XHRcdFx0XHRpbmplY3RUbzogJ2hlYWQnXG5cdFx0XHRcdH1cblx0XHRcdF07XG5cdFx0fVxuXHR9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixPQUFPQSxXQUFVO0FBQzNXLE9BQU8sV0FBVztBQUNsQixTQUFTLGNBQWMsb0JBQW9COzs7QUNGeVosT0FBT0MsV0FBVTtBQUNyZCxTQUFTLFNBQUFDLGNBQWE7QUFDdEIsT0FBT0Msb0JBQW1CO0FBQzFCLFlBQVksT0FBTztBQUNuQixPQUFPQyxTQUFROzs7QUNKaVgsT0FBTyxRQUFRO0FBQy9ZLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLGNBQWM7QUFDckIsU0FBUyxhQUFhO0FBQ3RCLE9BQU8sbUJBQW1CO0FBQzFCO0FBQUEsRUFDQztBQUFBLEVBQ0E7QUFBQSxPQUNNO0FBVDJPLElBQU0sMkNBQTJDO0FBV25TLElBQU0s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NkIsR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLENBQUM7QUFBQSxJQUN4SSxNQUFNO0FBQUEsSUFDTjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNSLGdDQUFnQztBQUFBLElBQ2pDO0FBQUEsSUFDQSxjQUFjO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsWUFBWSxDQUFDLFFBQVEsT0FBTyxRQUFRLE9BQU8sT0FBUztBQUFBLElBQ3BELE9BQU87QUFBQSxNQUNOLEtBQUtDLE1BQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDckM7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDZCxVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInBhdGgiLCAicGF0aCIsICJwYXJzZSIsICJ0cmF2ZXJzZUJhYmVsIiwgImZzIiwgIl9fZGlybmFtZSIsICJwYXRoIiwgInBhdGgiLCAicGFyc2UiLCAidHJhdmVyc2VCYWJlbCIsICJmcyIsICJmaWxlVVJMVG9QYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiX19maWxlbmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgIl9fZGlybmFtZSIsICJyZWFkRmlsZVN5bmMiLCAicmVzb2x2ZSIsICJmaWxlVVJMVG9QYXRoIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwiLCAiX19maWxlbmFtZSIsICJmaWxlVVJMVG9QYXRoIiwgIl9fZGlybmFtZSIsICJyZXNvbHZlIiwgInJlYWRGaWxlU3luYyIsICJwYXRoIl0KfQo=
