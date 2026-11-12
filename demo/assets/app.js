/**
 * Copyright (c) 2026 Salesforce, Inc.
 */
/**
 * Copyright (c) 2026 Salesforce, Inc.
 */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 *
 * @param value
 * @param msg
 */
function invariant(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}
/**
 *
 * @param value
 * @param msg
 */
function isTrue$1(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
/**
 *
 * @param value
 * @param msg
 */
function isFalse$1(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
/**
 *
 * @param msg
 */
function fail(msg) {
  throw new Error(msg);
}
var assert = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fail: fail,
  invariant: invariant,
  isFalse: isFalse$1,
  isTrue: isTrue$1
});

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const {
  /** Detached {@linkcode Object.assign}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign MDN Reference}. */
  assign,
  /** Detached {@linkcode Object.create}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create MDN Reference}. */
  create,
  /** Detached {@linkcode Object.defineProperties}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties MDN Reference}. */
  defineProperties,
  /** Detached {@linkcode Object.defineProperty}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty MDN Reference}. */
  defineProperty,
  /** Detached {@linkcode Object.entries}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries MDN Reference}. */
  entries,
  /** Detached {@linkcode Object.freeze}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze MDN Reference}. */
  freeze,
  /** Detached {@linkcode Object.getOwnPropertyDescriptor}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor MDN Reference}. */
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
  /** Detached {@linkcode Object.getOwnPropertyDescriptors}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors MDN Reference}. */
  getOwnPropertyDescriptors,
  /** Detached {@linkcode Object.getOwnPropertyNames}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames MDN Reference}. */
  getOwnPropertyNames: getOwnPropertyNames$1,
  /** Detached {@linkcode Object.getPrototypeOf}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf MDN Reference}. */
  getPrototypeOf: getPrototypeOf$1,
  /** Detached {@linkcode Object.hasOwnProperty}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty MDN Reference}. */
  hasOwnProperty: hasOwnProperty$1,
  /** Detached {@linkcode Object.isFrozen}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen MDN Reference}. */
  isFrozen,
  /** Detached {@linkcode Object.keys}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys MDN Reference}. */
  keys,
  /** Detached {@linkcode Object.seal}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal MDN Reference}. */
  seal,
  /** Detached {@linkcode Object.setPrototypeOf}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf MDN Reference}. */
  setPrototypeOf
} = Object;
const {
  /** Detached {@linkcode Array.isArray}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray MDN Reference}. */
  isArray: isArray$1,
  /** Detached {@linkcode Array.from}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from MDN Reference}. */
  from: ArrayFrom
} = Array;
// For some reason, JSDoc don't get picked up for multiple renamed destructured constants (even
// though it works fine for one, e.g. isArray), so comments for these are added to the export
// statement, rather than this declaration.
const {
  filter: ArrayFilter,
  indexOf: ArrayIndexOf,
  join: ArrayJoin,
  map: ArrayMap,
  pop: ArrayPop,
  push: ArrayPush$1,
  slice: ArraySlice,
  splice: ArraySplice,
  unshift: ArrayUnshift,
  forEach // Weird anomaly!
} = Array.prototype;
/** Detached {@linkcode String.fromCharCode}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode MDN Reference}. */
const {
  fromCharCode: StringFromCharCode
} = String;
// No JSDocs here - see comment for Array.prototype
const {
  charAt: StringCharAt,
  charCodeAt: StringCharCodeAt,
  replace: StringReplace,
  slice: StringSlice,
  toLowerCase: StringToLowerCase,
  trim: StringTrim
} = String.prototype;
/**
 * Determines whether the argument is `undefined`.
 * @param obj Value to test
 * @returns `true` if the value is `undefined`.
 */
function isUndefined$1(obj) {
  return obj === undefined;
}
/**
 * Determines whether the argument is `null`.
 * @param obj Value to test
 * @returns `true` if the value is `null`.
 */
function isNull(obj) {
  return obj === null;
}
/**
 * Determines whether the argument is `true`.
 * @param obj Value to test
 * @returns `true` if the value is `true`.
 */
function isTrue(obj) {
  return obj === true;
}
/**
 * Determines whether the argument is `false`.
 * @param obj Value to test
 * @returns `true` if the value is `false`.
 */
function isFalse(obj) {
  return obj === false;
}
/**
 * Determines whether the argument is a function.
 * @param obj Value to test
 * @returns `true` if the value is a function.
 */
// Replacing `Function` with a narrower type that works for all our use cases is tricky...
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction$1(obj) {
  return typeof obj === 'function';
}
/**
 * Determines whether the argument is an object or null.
 * @param obj Value to test
 * @returns `true` if the value is an object or null.
 */
function isObject(obj) {
  return typeof obj === 'object';
}
/**
 * Determines whether the argument is a string.
 * @param obj Value to test
 * @returns `true` if the value is a string.
 */
function isString(obj) {
  return typeof obj === 'string';
}
/** Does nothing! 🚀 */
function noop() {
  /* Do nothing */
}
const OtS = {}.toString;
/**
 * Converts the argument to a string, safely accounting for objects with "null" prototype.
 * Note that `toString(null)` returns `"[object Null]"` rather than `"null"`.
 * @param obj Value to convert to a string.
 * @returns String representation of the value.
 */
function toString(obj) {
  if (obj?.toString) {
    // Arrays might hold objects with "null" prototype So using
    // Array.prototype.toString directly will cause an error Iterate through
    // all the items and handle individually.
    if (isArray$1(obj)) {
      // This behavior is slightly different from Array#toString:
      // 1. Array#toString calls `this.join`, rather than Array#join
      // Ex: arr = []; arr.join = () => 1; arr.toString() === 1; toString(arr) === ''
      // 2. Array#toString delegates to Object#toString if `this.join` is not a function
      // Ex: arr = []; arr.join = 'no'; arr.toString() === '[object Array]; toString(arr) = ''
      // 3. Array#toString converts null/undefined to ''
      // Ex: arr = [null, undefined]; arr.toString() === ','; toString(arr) === '[object Null],undefined'
      // 4. Array#toString converts recursive references to arrays to ''
      // Ex: arr = [1]; arr.push(arr, 2); arr.toString() === '1,,2'; toString(arr) throws
      // Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
      return ArrayJoin.call(ArrayMap.call(obj, toString), ',');
    }
    return obj.toString();
  } else if (typeof obj === 'object') {
    // This catches null and returns "[object Null]". Weird, but kept for backwards compatibility.
    return OtS.call(obj);
  } else {
    return String(obj);
  }
}
/**
 * Gets the property descriptor for the given object and property key. Similar to
 * {@linkcode Object.getOwnPropertyDescriptor}, but looks up the prototype chain.
 * @param o Value to get the property descriptor for
 * @param p Property key to get the descriptor for
 * @returns The property descriptor for the given object and property key.
 */
function getPropertyDescriptor(o, p) {
  do {
    const d = getOwnPropertyDescriptor$1(o, p);
    if (!isUndefined$1(d)) {
      return d;
    }
    o = getPrototypeOf$1(o);
  } while (o !== null);
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// These must be updated when the enum is updated.
// It's a bit annoying to do have to do this manually, but this makes the file tree-shakeable,
// passing the `verify-treeshakeable.js` test.
const allVersions = [58 /* APIVersion.V58_244_SUMMER_23 */, 59 /* APIVersion.V59_246_WINTER_24 */, 60 /* APIVersion.V60_248_SPRING_24 */, 61 /* APIVersion.V61_250_SUMMER_24 */, 62 /* APIVersion.V62_252_WINTER_25 */, 63 /* APIVersion.V63_254_SPRING_25 */, 64 /* APIVersion.V64_256_SUMMER_25 */, 65 /* APIVersion.V65_258_WINTER_26 */, 66 /* APIVersion.V66_260_SPRING_26 */];
const LOWEST_API_VERSION = allVersions[0];
/**
 * @param apiVersionFeature
 */
function minApiVersion(apiVersionFeature) {
  switch (apiVersionFeature) {
    case 0 /* APIFeature.LOWERCASE_SCOPE_TOKENS */:
    case 1 /* APIFeature.TREAT_ALL_PARSE5_ERRORS_AS_ERRORS */:
      return 59 /* APIVersion.V59_246_WINTER_24 */;
    case 3 /* APIFeature.DISABLE_OBJECT_REST_SPREAD_TRANSFORMATION */:
    case 4 /* APIFeature.SKIP_UNNECESSARY_REGISTER_DECORATORS */:
    case 5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */:
    case 2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */:
      return 60 /* APIVersion.V60_248_SPRING_24 */;
    case 7 /* APIFeature.ENABLE_ELEMENT_INTERNALS_AND_FACE */:
    case 6 /* APIFeature.USE_LIGHT_DOM_SLOT_FORWARDING */:
      return 61 /* APIVersion.V61_250_SUMMER_24 */;
    case 8 /* APIFeature.ENABLE_THIS_DOT_HOST_ELEMENT */:
    case 9 /* APIFeature.ENABLE_THIS_DOT_STYLE */:
    case 10 /* APIFeature.TEMPLATE_CLASS_NAME_OBJECT_BINDING */:
      return 62 /* APIVersion.V62_252_WINTER_25 */;
    case 11 /* APIFeature.ENABLE_COMPLEX_TEMPLATE_EXPRESSIONS */:
      return 66 /* APIVersion.V66_260_SPRING_26 */;
  }
}
/**
 *
 * @param apiVersionFeature
 * @param apiVersion
 */
function isAPIFeatureEnabled(apiVersionFeature, apiVersion) {
  return apiVersion >= minApiVersion(apiVersionFeature);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
 * ariaGrabbed) are deprecated:
 * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
 *
 * The above list of 46 aria attributes is consistent with the following resources:
 * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
 * https://wicg.github.io/aom/spec/aria-reflection.html
 *
 * NOTE: If you update this list, please update test files that implicitly reference this list!
 * Searching the codebase for `aria-flowto` and `ariaFlowTo` should be good enough to find all usages.
 */
const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColIndexText', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDescription', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowIndexText', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'ariaBrailleLabel', 'ariaBrailleRoleDescription', 'role'];
const {
  AriaAttrNameToPropNameMap,
  AriaPropNameToAttrNameMap
} = /*@__PURE__*/(() => {
  const AriaAttrNameToPropNameMap = create(null);
  const AriaPropNameToAttrNameMap = create(null);
  // Synthetic creation of all AOM property descriptors for Custom Elements
  forEach.call(AriaPropertyNames, propName => {
    const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
    // These type assertions are because the map types are a 1:1 mapping of ariaX to aria-x.
    // TypeScript knows we have one of ariaX | ariaY and one of aria-x | aria-y, and tries to
    // prevent us from doing ariaX: aria-y, but we that it's safe.
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();

/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ContextEventName = 'lightning:context-request';
let contextKeys;
function getContextKeys() {
  return contextKeys;
}
function isTrustedContext(target) {
  {
    // The runtime didn't set a trustedContext set
    // this check should only be performed for runtimes that care about filtering context participants to track
    return true;
  }
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const KEY__SHADOW_RESOLVER = '$shadowResolver$';
const KEY__SHADOW_STATIC = '$shadowStaticNode$';
const KEY__SHADOW_TOKEN = '$shadowToken$';
const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
const KEY__SCOPED_CSS = '$scoped$';
const KEY__NATIVE_ONLY_CSS = '$nativeOnly$';
const KEY__NATIVE_GET_ELEMENT_BY_ID = '$nativeGetElementById$';
const KEY__NATIVE_QUERY_SELECTOR_ALL = '$nativeQuerySelectorAll$';
const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const CAMEL_REGEX = /-([a-z])/g;
// These are HTML standard prop/attribute IDL mappings, but are not predictable based on camel/kebab-case conversion
const SPECIAL_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
// Global properties that this framework currently reflects. For CSR, the native
// descriptors for these properties are added from HTMLElement.prototype to
// LightningElement.prototype. For SSR, in order to match CSR behavior, this
// list is used to determine which attributes to reflect.
const REFLECTIVE_GLOBAL_PROPERTY_SET = /*@__PURE__@*/new Set(['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title']);
/**
 * Map associating previously transformed HTML property into HTML attribute.
 */
const CACHED_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map();
/**
 *
 * @param propName
 */
function htmlPropertyToAttribute(propName) {
  const ariaAttributeName = AriaPropNameToAttrNameMap[propName];
  if (!isUndefined$1(ariaAttributeName)) {
    return ariaAttributeName;
  }
  const specialAttributeName = SPECIAL_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(specialAttributeName)) {
    return specialAttributeName;
  }
  const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(cachedAttributeName)) {
    return cachedAttributeName;
  }
  let attributeName = '';
  for (let i = 0, len = propName.length; i < len; i++) {
    const code = StringCharCodeAt.call(propName, i);
    if (code >= 65 &&
    // "A"
    code <= 90 // "Z"
    ) {
      attributeName += '-' + StringFromCharCode(code + 32);
    } else {
      attributeName += StringFromCharCode(code);
    }
  }
  CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
  return attributeName;
}
/**
 * Map associating previously transformed kabab-case attributes into camel-case props.
 */
const CACHED_KEBAB_CAMEL_MAPPING = /*@__PURE__@*/new Map();
/**
 *
 * @param attrName
 */
function kebabCaseToCamelCase(attrName) {
  let result = CACHED_KEBAB_CAMEL_MAPPING.get(attrName);
  if (isUndefined$1(result)) {
    result = StringReplace.call(attrName, CAMEL_REGEX, g => g[1].toUpperCase());
    CACHED_KEBAB_CAMEL_MAPPING.set(attrName, result);
  }
  return result;
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * [ncls] - Normalize class name attribute.
 *
 * Transforms the provided class property value from an object/string into a string the diffing algo
 * can operate on.
 *
 * This implementation is borrowed from Vue:
 * https://github.com/vuejs/core/blob/e790e1bdd7df7be39e14780529db86e4da47a3db/packages/shared/src/normalizeProp.ts#L63-L82
 */
function normalizeClass(value) {
  if (isUndefined$1(value) || isNull(value)) {
    // Returning undefined here improves initial render cost, because the old vnode's class will be considered
    // undefined in the `patchClassAttribute` routine, so `oldClass === newClass` will be true so we return early
    return undefined;
  }
  let res = '';
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value) && !isNull(value)) {
    // Iterate own enumerable keys of the object
    const _keys = keys(value);
    for (let i = 0; i < _keys.length; i += 1) {
      const key = _keys[i];
      if (value[key]) {
        res += key + ' ';
      }
    }
  }
  return StringTrim.call(res);
}
let sanitizeHtmlContentImpl = () => {
  // locker-service patches this function during runtime to sanitize HTML content.
  throw new Error('sanitizeHtmlContent hook must be implemented.');
};
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize HTML content. This hook process the content passed via the template to
 * lwc:inner-html directive.
 * It is meant to be overridden via `setHooks`; it throws an error by default.
 */
const sanitizeHtmlContent = value => {
  return sanitizeHtmlContentImpl();
};
function maybeSanitizeHtmlContent(value) {
  return value;
}
function flattenStylesheets(stylesheets) {
  const list = [];
  for (const stylesheet of stylesheets) {
    if (!isArray$1(stylesheet)) {
      list.push(stylesheet);
    } else {
      list.push(...flattenStylesheets(stylesheet));
    }
  }
  return list;
}
function isTrustedSignal(target) {
  {
    return false;
  }
}
if (!globalThis.lwcRuntimeFlags) {
  Object.defineProperty(globalThis, 'lwcRuntimeFlags', {
    value: create(null)
  });
}
/**
 * Whether reporting is enabled.
 *
 * Note that this may seem redundant, given you can just check if the currentDispatcher is undefined,
 * but it turns out that Terser only strips out unused code if we use this explicit boolean.
 */
let enabled$1 = false;
/**
 * Report to the current dispatcher, if there is one.
 * @param reportingEventId
 * @param payload data to report
 */
function report(reportingEventId, payload) {
}
/**
 * Return true if reporting is enabled
 */
function isReportingEnabled() {
  return enabled$1;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getComponentTag(vm) {
  return `<${StringToLowerCase.call(vm.tagName)}>`;
}
// TODO [#1695]: Unify getComponentStack and getErrorComponentStack
function getComponentStack(vm) {
  const stack = [];
  let prefix = '';
  while (!isNull(vm.owner)) {
    ArrayPush$1.call(stack, prefix + getComponentTag(vm));
    vm = vm.owner;
    prefix += '\t';
  }
  return ArrayJoin.call(stack, '\n');
}
function getErrorComponentStack(vm) {
  const wcStack = [];
  let currentVm = vm;
  while (!isNull(currentVm)) {
    ArrayPush$1.call(wcStack, getComponentTag(currentVm));
    currentVm = currentVm.owner;
  }
  return wcStack.reverse().join('\n\t');
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function addErrorComponentStack(vm, error) {
  if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
    const wcStack = getErrorComponentStack(vm);
    defineProperty(error, 'wcStack', {
      get() {
        return wcStack;
      }
    });
  }
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const alreadyLoggedMessages = new Set();
function log(method, message, vm, once) {
  let msg = `[LWC ${method}]: ${message}`;
  if (!isUndefined$1(vm)) {
    msg = `${msg}\n${getComponentStack(vm)}`;
  }
  if (once) {
    if (alreadyLoggedMessages.has(msg)) {
      return;
    }
    alreadyLoggedMessages.add(msg);
  }
  try {
    throw new Error(msg);
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console[method](e);
  }
}
function logError(message, vm) {
  log('error', message, vm, false);
}
function logWarnOnce(message, vm) {
  log('warn', message, vm, true);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal(create(null));
const EmptyArray = seal([]);
function flushCallbackQueue() {
  const callbacks = nextTickCallbackQueue;
  nextTickCallbackQueue = []; // reset to a new queue
  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    callbacks[i]();
  }
}
function addCallbackToNextTick(callback) {
  if (nextTickCallbackQueue.length === 0) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.resolve().then(flushCallbackQueue);
  }
  ArrayPush$1.call(nextTickCallbackQueue, callback);
}
// Throw an error if we're running in prod mode. Ensures code is truly removed from prod mode.
function assertNotProd() {
  /* istanbul ignore if */
  {
    // this method should never leak to prod
    throw new ReferenceError();
  }
}
function shouldBeFormAssociated(Ctor) {
  const ctorFormAssociated = Boolean(Ctor.formAssociated);
  const apiVersion = getComponentAPIVersion(Ctor);
  const apiFeatureEnabled = isAPIFeatureEnabled(7 /* APIFeature.ENABLE_ELEMENT_INTERNALS_AND_FACE */, apiVersion);
  return ctorFormAssociated && apiFeatureEnabled;
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const TargetToReactiveRecordMap = new WeakMap();
function getReactiveRecord(target) {
  let reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (isUndefined$1(reactiveRecord)) {
    const newRecord = create(null);
    reactiveRecord = newRecord;
    TargetToReactiveRecordMap.set(target, newRecord);
  }
  return reactiveRecord;
}
let currentReactiveObserver = null;
function valueMutated(target, key) {
  const reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (!isUndefined$1(reactiveRecord)) {
    const reactiveObservers = reactiveRecord[key];
    if (!isUndefined$1(reactiveObservers)) {
      for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
        const ro = reactiveObservers[i];
        ro.notify();
      }
    }
  }
}
function valueObserved(target, key) {
  // We should determine if an active Observing Record is present to track mutations.
  if (currentReactiveObserver === null) {
    return;
  }
  const ro = currentReactiveObserver;
  const reactiveRecord = getReactiveRecord(target);
  let reactiveObservers = reactiveRecord[key];
  if (isUndefined$1(reactiveObservers)) {
    reactiveObservers = [];
    reactiveRecord[key] = reactiveObservers;
  } else if (reactiveObservers[0] === ro) {
    return; // perf optimization considering that most subscriptions will come from the same record
  }
  if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
    ro.link(reactiveObservers);
  }
}
class ReactiveObserver {
  constructor(callback) {
    this.listeners = [];
    this.callback = callback;
  }
  observe(job) {
    const inceptionReactiveRecord = currentReactiveObserver;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    currentReactiveObserver = this;
    let error;
    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      currentReactiveObserver = inceptionReactiveRecord;
      if (error !== undefined) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }
  /**
   * This method is responsible for disconnecting the Reactive Observer
   * from any Reactive Record that has a reference to it, to prevent future
   * notifications about previously recorded access.
   */
  reset() {
    const {
      listeners
    } = this;
    const len = listeners.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const set = listeners[i];
        const setLength = set.length;
        // The length is usually 1, so avoid doing an indexOf when we know for certain
        // that `this` is the first item in the array.
        if (setLength > 1) {
          // Swap with the last item before removal.
          // (Avoiding splice here is a perf optimization, and the order doesn't matter.)
          const index = ArrayIndexOf.call(set, this);
          set[index] = set[setLength - 1];
        }
        // Remove the last item
        ArrayPop.call(set);
      }
      listeners.length = 0;
    }
  }
  // friend methods
  notify() {
    this.callback.call(undefined, this);
  }
  link(reactiveObservers) {
    ArrayPush$1.call(reactiveObservers, this);
    // we keep track of observing records where the observing record was added to so we can do some clean up later on
    ArrayPush$1.call(this.listeners, reactiveObservers);
  }
  isObserving() {
    return currentReactiveObserver === this;
  }
}

/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This map keeps track of objects to signals. There is an assumption that the signal is strongly referenced
 * on the object which allows the SignalTracker to be garbage collected along with the object.
 */
const TargetToSignalTrackerMap = new WeakMap();
function getSignalTracker(target) {
  let signalTracker = TargetToSignalTrackerMap.get(target);
  if (isUndefined$1(signalTracker)) {
    signalTracker = new SignalTracker();
    TargetToSignalTrackerMap.set(target, signalTracker);
  }
  return signalTracker;
}
function subscribeToSignal(target, signal, update) {
  const signalTracker = getSignalTracker(target);
  if (isFalse(signalTracker.seen(signal))) {
    signalTracker.subscribeToSignal(signal, update);
  }
}
function unsubscribeFromSignals(target) {
  if (TargetToSignalTrackerMap.has(target)) {
    const signalTracker = getSignalTracker(target);
    signalTracker.unsubscribeFromSignals();
    signalTracker.reset();
  }
}
/**
 * A normalized string representation of an error, because browsers behave differently
 */
const errorWithStack = err => {
  if (typeof err !== 'object' || err === null) {
    return String(err);
  }
  const stack = 'stack' in err ? String(err.stack) : '';
  const message = 'message' in err ? String(err.message) : '';
  const constructor = err.constructor.name;
  return stack.includes(message) ? stack : `${constructor}: ${message}\n${stack}`;
};
/**
 * This class is used to keep track of the signals associated to a given object.
 * It is used to prevent the LWC engine from subscribing duplicate callbacks multiple times
 * to the same signal. Additionally, it keeps track of all signal unsubscribe callbacks, handles invoking
 * them when necessary and discarding them.
 */
class SignalTracker {
  constructor() {
    this.signalToUnsubscribeMap = new Map();
  }
  seen(signal) {
    return this.signalToUnsubscribeMap.has(signal);
  }
  subscribeToSignal(signal, update) {
    try {
      const unsubscribe = signal.subscribe(update);
      if (isFunction$1(unsubscribe)) {
        // TODO [#3978]: Evaluate how we should handle the case when unsubscribe is not a function.
        // Long term we should throw an error or log a warning.
        this.signalToUnsubscribeMap.set(signal, unsubscribe);
      }
    } catch (err) {
      logWarnOnce(`Attempted to subscribe to an object that has the shape of a signal but received the following error: ${errorWithStack(err)}`);
    }
  }
  unsubscribeFromSignals() {
    try {
      this.signalToUnsubscribeMap.forEach(unsubscribe => unsubscribe());
    } catch (err) {
      logWarnOnce(`Attempted to call a signal's unsubscribe callback but received the following error: ${errorWithStack(err)}`);
    }
  }
  reset() {
    this.signalToUnsubscribeMap.clear();
  }
}
function componentValueMutated(vm, key) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueMutated(vm.component, key);
  }
}
function componentValueObserved(vm, key, target = {}) {
  const {
    component,
    tro
  } = vm;
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueObserved(component, key);
  }
  // The portion of reactivity that's exposed to signals is to subscribe a callback to re-render the VM (templates).
  // We check the following to ensure re-render is subscribed at the correct time.
  //  1. The template is currently being rendered (there is a template reactive observer)
  //  2. There was a call to a getter to access the signal (happens during vnode generation)
  if (lwcRuntimeFlags.ENABLE_EXPERIMENTAL_SIGNALS && isObject(target) && !isNull(target) && true &&
  // Only subscribe if a template is being rendered by the engine
  tro.isObserving()) {
    if (isTrustedSignal()) {
      // Subscribe the template reactive observer's notify method, which will mark the vm as dirty and schedule hydration.
      subscribeToSignal(component, target, tro.notify.bind(tro));
    }
  }
}
function createReactiveObserver(callback) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return new ReactiveObserver(callback);
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function resolveCircularModuleDependency(fn) {
  const module = fn();
  return module?.__esModule ? module.default : module;
}
function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const instrumentDef = globalThis.__lwc_instrument_cmp_def ?? noop;
const instrumentInstance = globalThis.__lwc_instrument_cmp_instance ?? noop;

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
// to inject at runtime.
const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
const HTMLElementPrototype = HTMLElementConstructor.prototype;

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Apply ARIA string reflection behavior to a prototype.
// This is deliberately kept separate from @lwc/aria-reflection. @lwc/aria-reflection is a global polyfill that is
// needed for backwards compatibility in LEX, whereas this is designed to only apply to our own
// LightningElement/BaseBridgeElement prototypes.
// Note we only need to handle ARIA reflections that aren't already in Element.prototype
const ariaReflectionPolyfillDescriptors = create(null);
for (const [propName, attrName] of entries(AriaPropNameToAttrNameMap)) {
  if (isUndefined$1(getPropertyDescriptor(HTMLElementPrototype, propName))) {
    // Note that we need to call this.{get,set,has,remove}Attribute rather than dereferencing
    // from Element.prototype, because these methods are overridden in LightningElement.
    ariaReflectionPolyfillDescriptors[propName] = {
      get() {
        return this.getAttribute(attrName);
      },
      set(newValue) {
        // TODO [#3284]: According to the spec, IDL nullable type values
        // (null and undefined) should remove the attribute; however, we
        // only do so in the case of null for historical reasons.
        // See also https://github.com/w3c/aria/issues/1858
        if (isNull(newValue)) {
          this.removeAttribute(attrName);
        } else {
          this.setAttribute(attrName, newValue);
        }
      },
      // configurable and enumerable to allow it to be overridden – this mimics Safari's/Chrome's behavior
      configurable: true,
      enumerable: true
    };
  }
}
// Add descriptors for ARIA attributes
for (const [attrName, propName] of entries(AriaAttrNameToPropNameMap)) {}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This is a descriptor map that contains
 * all standard properties that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base HTML Element and
 * Base Lightning Element should support.
 */
const HTMLElementOriginalDescriptors = create(null);
forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
for (const propName of REFLECTIVE_GLOBAL_PROPERTY_SET) {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
  // this category, so, better to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function updateComponentValue(vm, key, newValue) {
  const {
    cmpFields
  } = vm;
  if (newValue !== cmpFields[key]) {
    cmpFields[key] = newValue;
    componentValueMutated(vm, key);
  }
}

/**
 * Copyright (C) 2017 salesforce.com, inc.
 */
const {
  isArray
} = Array;
const {
  prototype: ObjectDotPrototype,
  getPrototypeOf,
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  isExtensible,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  preventExtensions,
  hasOwnProperty
} = Object;
const {
  push: ArrayPush,
  concat: ArrayConcat
} = Array.prototype;
function isUndefined(obj) {
  return obj === undefined;
}
function isFunction(obj) {
  return typeof obj === 'function';
}
const proxyToValueMap = new WeakMap();
function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}
const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;
class BaseProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }
  // Shared utility methods
  wrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = this.wrapValue(descriptor.value);
    } else {
      const {
        set: originalSet,
        get: originalGet
      } = descriptor;
      if (!isUndefined(originalGet)) {
        descriptor.get = this.wrapGetter(originalGet);
      }
      if (!isUndefined(originalSet)) {
        descriptor.set = this.wrapSetter(originalSet);
      }
    }
    return descriptor;
  }
  copyDescriptorIntoShadowTarget(shadowTarget, key) {
    const {
      originalTarget
    } = this;
    // Note: a property might get defined multiple times in the shadowTarget
    //       but it will always be compatible with the previous descriptor
    //       to preserve the object invariants, which makes these lines safe.
    const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
    // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed
    /* istanbul ignore else */
    if (!isUndefined(originalDescriptor)) {
      const wrappedDesc = this.wrapDescriptor(originalDescriptor);
      ObjectDefineProperty(shadowTarget, key, wrappedDesc);
    }
  }
  lockShadowTarget(shadowTarget) {
    const {
      originalTarget
    } = this;
    const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    });
    const {
      membrane: {
        tagPropertyKey
      }
    } = this;
    if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
      ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
    }
    preventExtensions(shadowTarget);
  }
  // Shared Traps
  // TODO: apply() is never called
  /* istanbul ignore next */
  apply(shadowTarget, thisArg, argArray) {
    /* No op */
  }
  // TODO: construct() is never called
  /* istanbul ignore next */
  construct(shadowTarget, argArray, newTarget) {
    /* No op */
  }
  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    const value = originalTarget[key];
    valueObserved(originalTarget, key);
    return this.wrapValue(value);
  }
  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey,
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    // since key is never going to be undefined, and tagPropertyKey might be undefined
    // we can simply compare them as the second part of the condition.
    return key in originalTarget || key === tagPropertyKey;
  }
  ownKeys(shadowTarget) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey
      }
    } = this;
    // if the membrane tag key exists and it is not in the original target, we add it to the keys.
    const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey];
    // small perf optimization using push instead of concat to avoid creating an extra array
    ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
    ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
    return keys;
  }
  isExtensible(shadowTarget) {
    const {
      originalTarget
    } = this;
    // optimization to avoid attempting to lock down the shadowTarget multiple times
    if (!isExtensible(shadowTarget)) {
      return false; // was already locked down
    }
    if (!isExtensible(originalTarget)) {
      this.lockShadowTarget(shadowTarget);
      return false;
    }
    return true;
  }
  getPrototypeOf(shadowTarget) {
    const {
      originalTarget
    } = this;
    return getPrototypeOf(originalTarget);
  }
  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved,
        tagPropertyKey
      }
    } = this;
    // keys looked up via getOwnPropertyDescriptor need to be reactive
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor(originalTarget, key);
    if (isUndefined(desc)) {
      if (key !== tagPropertyKey) {
        return undefined;
      }
      // if the key is the membrane tag key, and is not in the original target,
      // we produce a synthetic descriptor and install it on the shadow target
      desc = {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      };
      ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
      return desc;
    }
    if (desc.configurable === false) {
      // updating the descriptor to non-configurable on the shadow
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    // Note: by accessing the descriptor, the key is marked as observed
    // but access to the value, setter or getter (if available) cannot observe
    // mutations, just like regular methods, in which case we just do nothing.
    return this.wrapDescriptor(desc);
  }
}
const getterMap$1 = new WeakMap();
const setterMap$1 = new WeakMap();
const reverseGetterMap = new WeakMap();
const reverseSetterMap = new WeakMap();
class ReactiveProxyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap$1.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap$1.set(originalGet, get);
    reverseGetterMap.set(get, originalGet);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap$1.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const set = function (v) {
      // invoking the original setter with the original target
      originalSet.call(unwrap$1(this), unwrap$1(v));
    };
    setterMap$1.set(originalSet, set);
    reverseSetterMap.set(set, originalSet);
    return set;
  }
  unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      // dealing with a data descriptor
      descriptor.value = unwrap$1(descriptor.value);
    } else {
      const {
        set,
        get
      } = descriptor;
      if (!isUndefined(get)) {
        descriptor.get = this.unwrapGetter(get);
      }
      if (!isUndefined(set)) {
        descriptor.set = this.unwrapSetter(set);
      }
    }
    return descriptor;
  }
  unwrapGetter(redGet) {
    const reverseGetter = reverseGetterMap.get(redGet);
    if (!isUndefined(reverseGetter)) {
      return reverseGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the red getter with the proxy of this
      return unwrap$1(redGet.call(handler.wrapValue(this)));
    };
    getterMap$1.set(get, redGet);
    reverseGetterMap.set(redGet, get);
    return get;
  }
  unwrapSetter(redSet) {
    const reverseSetter = reverseSetterMap.get(redSet);
    if (!isUndefined(reverseSetter)) {
      return reverseSetter;
    }
    const handler = this;
    const set = function (v) {
      // invoking the red setter with the proxy of this
      redSet.call(handler.wrapValue(this), handler.wrapValue(v));
    };
    setterMap$1.set(set, redSet);
    reverseSetterMap.set(redSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    const oldValue = originalTarget[key];
    if (oldValue !== value) {
      originalTarget[key] = value;
      valueMutated(originalTarget, key);
    } else if (key === 'length' && isArray(originalTarget)) {
      // fix for issue #236: push will add the new index, and by the time length
      // is updated, the internal length is already equal to the new length value
      // therefore, the oldValue is equal to the value. This is the forking logic
      // to support this use case.
      valueMutated(originalTarget, key);
    }
    return true;
  }
  deleteProperty(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    delete originalTarget[key];
    valueMutated(originalTarget, key);
    return true;
  }
  setPrototypeOf(shadowTarget, prototype) {}
  preventExtensions(shadowTarget) {
    if (isExtensible(shadowTarget)) {
      const {
        originalTarget
      } = this;
      preventExtensions(originalTarget);
      // if the originalTarget is a proxy itself, it might reject
      // the preventExtension call, in which case we should not attempt to lock down
      // the shadow target.
      // TODO: It should not actually be possible to reach this `if` statement.
      // If a proxy rejects extensions, then calling preventExtensions will throw an error:
      // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY
      /* istanbul ignore if */
      if (isExtensible(originalTarget)) {
        return false;
      }
      this.lockShadowTarget(shadowTarget);
    }
    return true;
  }
  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane: {
        valueMutated,
        tagPropertyKey
      }
    } = this;
    if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
      // To avoid leaking the membrane tag property into the original target, we must
      // be sure that the original target doesn't have yet.
      // NOTE: we do not return false here because Object.freeze and equivalent operations
      // will attempt to set the descriptor to the same value, and expect no to throw. This
      // is an small compromise for the sake of not having to diff the descriptors.
      return true;
    }
    ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor));
    // intentionally testing if false since it could be undefined as well
    if (descriptor.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    valueMutated(originalTarget, key);
    return true;
  }
  /*LWC compiler v9.5.3*/
}
const getterMap = new WeakMap();
const setterMap = new WeakMap();
class ReadOnlyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getReadOnlyProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap.set(originalGet, get);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const set = function (v) {};
    setterMap.set(originalSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    /* istanbul ignore next */
    return false;
  }
  deleteProperty(shadowTarget, key) {
    /* istanbul ignore next */
    return false;
  }
  setPrototypeOf(shadowTarget, prototype) {}
  preventExtensions(shadowTarget) {
    /* istanbul ignore next */
    return false;
  }
  defineProperty(shadowTarget, key, descriptor) {
    /* istanbul ignore next */
    return false;
  }
  /*LWC compiler v9.5.3*/
}
function defaultValueIsObservable(value) {
  // intentionally checking for null
  if (value === null) {
    return false;
  }
  // treat all non-object types, including undefined, as non-observable values
  if (typeof value !== 'object') {
    return false;
  }
  if (isArray(value)) {
    return true;
  }
  const proto = getPrototypeOf(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
}
const defaultValueObserved = (obj, key) => {
  /* do nothing */
};
const defaultValueMutated = (obj, key) => {
  /* do nothing */
};
function createShadowTarget(value) {
  return isArray(value) ? [] : {};
}
class ObservableMembrane {
  constructor(options = {}) {
    this.readOnlyObjectGraph = new WeakMap();
    this.reactiveObjectGraph = new WeakMap();
    const {
      valueMutated,
      valueObserved,
      valueIsObservable,
      tagPropertyKey
    } = options;
    this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
    this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
    this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
    this.tagPropertyKey = tagPropertyKey;
  }
  getProxy(value) {
    const unwrappedValue = unwrap$1(value);
    if (this.valueIsObservable(unwrappedValue)) {
      // When trying to extract the writable version of a readonly we return the readonly.
      if (this.readOnlyObjectGraph.get(unwrappedValue) === value) {
        return value;
      }
      return this.getReactiveHandler(unwrappedValue);
    }
    return unwrappedValue;
  }
  getReadOnlyProxy(value) {
    value = unwrap$1(value);
    if (this.valueIsObservable(value)) {
      return this.getReadOnlyHandler(value);
    }
    return value;
  }
  unwrapProxy(p) {
    return unwrap$1(p);
  }
  getReactiveHandler(value) {
    let proxy = this.reactiveObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReactiveProxyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.reactiveObjectGraph.set(value, proxy);
    }
    return proxy;
  }
  getReadOnlyHandler(value) {
    let proxy = this.readOnlyObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReadOnlyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.readOnlyObjectGraph.set(value, proxy);
    }
    return proxy;
  }
}
/** version: 2.0.0 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');
const reactiveMembrane = new ObservableMembrane({
  valueObserved,
  valueMutated,
  tagPropertyKey: lockerLivePropertyKey
});
function getReadOnlyProxy(value) {
  // We must return a frozen wrapper around the value, so that child components cannot mutate properties passed to
  // them from their parents. This applies to both the client and server.
  return reactiveMembrane.getReadOnlyProxy(value);
}
function getReactiveProxy(value) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return reactiveMembrane.getProxy(value);
}
// Making the component instance a live value when using Locker to support expandos.
function markLockerLiveObject(obj) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    obj[lockerLivePropertyKey] = undefined;
  }
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
/**
 * This operation is called with a descriptor of an standard html property
 * that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
 * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
 * @param propName
 * @param descriptor
 */
function createBridgeToElementDescriptor(propName, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  if (!isFunction$1(get)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
  }
  if (!isFunction$1(set)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
  }
  return {
    enumerable,
    configurable,
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        return;
      }
      componentValueObserved(vm, propName);
      return get.call(vm.elm);
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      updateComponentValue(vm, propName, newValue);
      return set.call(vm.elm, newValue);
    }
  };
}
const refsCache = new WeakMap();
/**
 * This class is the base class for any LWC element.
 * Some elements directly extends this class, others implement it via inheritance.
 */
// @ts-expect-error When exported, it will conform, but we need to build it first!
const LightningElement = function () {
  // This should be as performant as possible, while any initialization should be done lazily
  if (isNull(vmBeingConstructed)) {
    // Thrown when doing something like `new LightningElement()` or
    // `class Foo extends LightningElement {}; new Foo()`
    throw new TypeError('Illegal constructor');
  }
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentInstance(this, vmBeingConstructed);
  const vm = vmBeingConstructed;
  const {
    def,
    elm
  } = vm;
  const {
    bridge
  } = def;
  setPrototypeOf(elm, bridge.prototype);
  vm.component = this;
  // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
  // component creation and passes hooks to instrument all the component interactions with the
  // engine. We are intentionally hiding this argument from the formal API of LightningElement
  // because we don't want folks to know about it just yet.
  if (arguments.length === 1) {
    const {
      callHook,
      setHook,
      getHook
    } = arguments[0];
    vm.callHook = callHook;
    vm.setHook = setHook;
    vm.getHook = getHook;
  }
  markLockerLiveObject(this);
  // Linking elm, shadow root and component with the VM.
  associateVM(this, vm);
  associateVM(elm, vm);
  if (vm.renderMode === 1 /* RenderMode.Shadow */) {
    vm.renderRoot = doAttachShadow(vm);
  } else {
    vm.renderRoot = elm;
  }
  return this;
};
function doAttachShadow(vm) {
  const {
    elm,
    mode,
    shadowMode,
    def: {
      ctor
    },
    renderer: {
      attachShadow
    }
  } = vm;
  const shadowRoot = attachShadow(elm, {
    [KEY__SYNTHETIC_MODE]: shadowMode === 1 /* ShadowMode.Synthetic */,
    delegatesFocus: Boolean(ctor.delegatesFocus),
    mode
  });
  vm.shadowRoot = shadowRoot;
  associateVM(shadowRoot, vm);
  return shadowRoot;
}
// Type assertion because we need to build the prototype before it satisfies the interface.
LightningElement.prototype = {
  constructor: LightningElement,
  dispatchEvent(event) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        dispatchEvent
      }
    } = vm;
    return dispatchEvent(elm, event);
  },
  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        addEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    addEventListener(elm, type, wrappedListener, options);
  },
  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    removeEventListener(elm, type, wrappedListener, options);
  },
  hasAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name));
  },
  hasAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name, namespace));
  },
  removeAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = vm;
    removeAttribute(elm, name);
  },
  removeAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    removeAttribute(elm, name, namespace);
  },
  getAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name);
  },
  getAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name, namespace);
  },
  setAttribute(name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    setAttribute(elm, name, value);
  },
  setAttributeNS(namespace, name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    setAttribute(elm, name, value, namespace);
  },
  getBoundingClientRect() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getBoundingClientRect
      }
    } = vm;
    return getBoundingClientRect(elm);
  },
  attachInternals() {
    const vm = getAssociatedVM(this);
    const {
      def: {
        ctor
      },
      elm,
      apiVersion,
      renderer: {
        attachInternals
      }
    } = vm;
    if (!isAPIFeatureEnabled(7 /* APIFeature.ENABLE_ELEMENT_INTERNALS_AND_FACE */, apiVersion)) {
      throw new Error(`The attachInternals API is only supported in API version 61 and above. ` + `The current version is ${apiVersion}. ` + `To use this API, update the LWC component API version. https://lwc.dev/guide/versioning`);
    }
    const internals = attachInternals(elm);
    if (vm.shadowMode === 1 /* ShadowMode.Synthetic */ && supportsSyntheticElementInternals(ctor)) {
      const handler = {
        get(target, prop) {
          if (prop === 'shadowRoot') {
            return vm.shadowRoot;
          }
          const value = Reflect.get(target, prop);
          if (typeof value === 'function') {
            return value.bind(target);
          }
          return value;
        },
        set(target, prop, value) {
          return Reflect.set(target, prop, value);
        }
      };
      return new Proxy(internals, handler);
    } else if (vm.shadowMode === 1 /* ShadowMode.Synthetic */) {
      throw new Error('attachInternals API is not supported in synthetic shadow.');
    }
    return internals;
  },
  get isConnected() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        isConnected
      }
    } = vm;
    return isConnected(elm);
  },
  get classList() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getClassList
      }
    } = vm;
    return getClassList(elm);
  },
  get template() {
    const vm = getAssociatedVM(this);
    return vm.shadowRoot;
  },
  get hostElement() {
    const vm = getAssociatedVM(this);
    const apiVersion = getComponentAPIVersion(vm.def.ctor);
    if (!isAPIFeatureEnabled(8 /* APIFeature.ENABLE_THIS_DOT_HOST_ELEMENT */, apiVersion)) {
      // Simulate the old behavior for `this.hostElement` to avoid a breaking change
      return undefined;
    }
    return vm.elm;
  },
  get refs() {
    const vm = getAssociatedVM(this);
    if (isUpdatingTemplate) {
      // If the template is in the process of being updated, then we don't want to go through the normal
      // process of returning the refs and caching them, because the state of the refs is unstable.
      // This can happen if e.g. a template contains `<div class={foo}></div>` and `foo` is computed
      // based on `this.refs.bar`.
      return;
    }
    const {
      refVNodes,
      cmpTemplate
    } = vm;
    // For backwards compatibility with component written before template refs
    // were introduced, we return undefined if the template has no refs defined
    // anywhere. This fixes components that may want to add an expando called `refs`
    // and are checking if it exists with `if (this.refs)`  before adding it.
    // Note we use a null refVNodes to indicate that the template has no refs defined.
    if (isNull(refVNodes)) {
      return;
    }
    // The refNodes can be cached based on the refVNodes, since the refVNodes
    // are recreated from scratch every time the template is rendered.
    // This happens with `vm.refVNodes = null` in `template.ts` in `@lwc/engine-core`.
    let refs = refsCache.get(refVNodes);
    if (isUndefined$1(refs)) {
      refs = create(null);
      for (const key of keys(refVNodes)) {
        refs[key] = refVNodes[key].elm;
      }
      freeze(refs);
      refsCache.set(refVNodes, refs);
    }
    return refs;
  },
  // For backwards compat, we allow component authors to set `refs` as an expando
  set refs(value) {
    defineProperty(this, 'refs', {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    });
  },
  get shadowRoot() {
    // From within the component instance, the shadowRoot is always reported as "closed".
    // Authors should rely on this.template instead.
    return null;
  },
  get children() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.getChildren(vm.elm);
  },
  get childNodes() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    // getChildNodes returns a NodeList, which has `item(index: number): Node | null`.
    // NodeListOf<T> extends NodeList, but claims to not return null. That seems inaccurate,
    // but these are built-in types, so ultimately not our problem.
    return renderer.getChildNodes(vm.elm);
  },
  get firstChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.getFirstChild(vm.elm);
  },
  get firstElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.getFirstElementChild(vm.elm);
  },
  get lastChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.getLastChild(vm.elm);
  },
  get lastElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.getLastElementChild(vm.elm);
  },
  get ownerDocument() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    return renderer.ownerDocument(vm.elm);
  },
  get tagName() {
    const {
      elm,
      renderer
    } = getAssociatedVM(this);
    return renderer.getTagName(elm);
  },
  get style() {
    const {
      elm,
      renderer,
      def
    } = getAssociatedVM(this);
    const apiVersion = getComponentAPIVersion(def.ctor);
    if (!isAPIFeatureEnabled(9 /* APIFeature.ENABLE_THIS_DOT_STYLE */, apiVersion)) {
      // Simulate the old behavior for `this.style` to avoid a breaking change
      return undefined;
    }
    return renderer.getStyle(elm);
  },
  render() {
    const vm = getAssociatedVM(this);
    return vm.def.template;
  },
  toString() {
    const vm = getAssociatedVM(this);
    return `[object ${vm.def.name}]`;
  }
};
const queryAndChildGetterDescriptors = create(null);
const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'];
// Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs
for (const queryMethod of queryMethods) {
  queryAndChildGetterDescriptors[queryMethod] = {
    value(arg) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer
      } = vm;
      return renderer[queryMethod](elm, arg);
    },
    configurable: true,
    enumerable: true,
    writable: true
  };
}
defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
const lightningBasedDescriptors = create(null);
for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}
// Apply ARIA reflection to LightningElement.prototype, on both the browser and server.
// This allows `this.aria*` property accessors to work from inside a component, and to reflect `aria-*` attrs.
// Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
{
  // In the browser, we use createBridgeToElementDescriptor, so we can get the normal reactivity lifecycle for
  // aria* properties
  for (const [propName, descriptor] of entries(ariaReflectionPolyfillDescriptors)) {
    lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, descriptor);
  }
}
defineProperties(LightningElement.prototype, lightningBasedDescriptors);
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    // If required, a runtime-specific implementation must be defined.
    throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
  },
  configurable: true
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function createObservedFieldPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      const val = vm.cmpFields[key];
      componentValueObserved(vm, key, val);
      return val;
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      updateComponentValue(vm, key, newValue);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const AdapterToTokenMap = new Map();
function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
  const {
    adapter
  } = wireDef;
  const adapterContextToken = AdapterToTokenMap.get(adapter);
  if (isUndefined$1(adapterContextToken)) {
    return; // no provider found, nothing to be done
  }
  const {
    elm,
    context: {
      wiredConnecting,
      wiredDisconnecting
    },
    renderer: {
      registerContextConsumer
    }
  } = vm;
  // waiting for the component to be connected to formally request the context via the token
  ArrayPush$1.call(wiredConnecting, () => {
    // This will attempt to connect the current element with one of its anscestors
    // that can provide context for the given wire adapter. This relationship is
    // keyed on the secret & internal value of `adapterContextToken`, which is unique
    // to a given wire adapter.
    //
    // Depending on the runtime environment, this connection is made using either DOM
    // events (in the browser) or a custom traversal (on the server).
    registerContextConsumer(elm, adapterContextToken, {
      setNewContext(newContext) {
        // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
        // TODO: dev-mode validation of config based on the adapter.contextSchema
        callbackWhenContextIsReady(newContext);
        // Return true as the context is always consumed here and the consumer should
        // stop bubbling.
        return true;
      },
      setDisconnectedCallback(disconnectCallback) {
        // adds this callback into the disconnect bucket so it gets disconnected from parent
        // the the element hosting the wire is disconnected
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
      }
    });
  });
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
const WireMetaMap = new Map();
function createFieldDataCallback(vm, name) {
  return value => {
    updateComponentValue(vm, name, value);
  };
}
function createMethodDataCallback(vm, method) {
  return value => {
    // dispatching new value into the wired method
    runWithBoundaryProtection(vm, vm.owner, noop, () => {
      // job
      method.call(vm.component, value);
    }, noop);
  };
}
function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
  let hasPendingConfig = false;
  // creating the reactive observer for reactive params when needed
  const ro = createReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true;
      // collect new config in the micro-task
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      Promise.resolve().then(() => {
        hasPendingConfig = false;
        // resetting current reactive params
        ro.reset();
        // dispatching a new config due to a change in the configuration
        computeConfigAndUpdate();
      });
    }
  });
  const computeConfigAndUpdate = () => {
    let config;
    ro.observe(() => config = configCallback(component));
    // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
    // TODO: dev-mode validation of config based on the adapter.configSchema
    // @ts-expect-error it is assigned in the observe() callback
    callbackWhenConfigIsReady(config);
  };
  return {
    computeConfigAndUpdate,
    ro
  };
}
function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    dynamic
  } = wireDef;
  let debugInfo;
  const fieldOrMethodCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  const dataCallback = value => {
    fieldOrMethodCallback(value);
  };
  let context;
  let connector;
  // Workaround to pass the component element associated to this wire adapter instance.
  defineProperty(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
    value: dynamic
  });
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    connector = new adapter(dataCallback, {
      tagName: vm.tagName
    });
  }, noop);
  const updateConnectorConfig = config => {
    // every time the config is recomputed due to tracking,
    // this callback will be invoked with the new computed config
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      if ("production" !== 'production') ;
      connector.update(config, context);
    }, noop);
  };
  // Computes the current wire config and calls the update method on the wire adapter.
  // If it has params, we will need to observe changes in the next tick.
  const {
    computeConfigAndUpdate,
    ro
  } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig);
  // if the adapter needs contextualization, we need to watch for new context and push it alongside the config
  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      // every time the context is pushed into this component,
      // this callback will be invoked with the new computed context
      if (context !== newContext) {
        context = newContext;
        // Note: when new context arrives, the config will be recomputed and pushed along side the new
        // context, this is to preserve the identity characteristics, config should not have identity
        // (ever), while context can have identity
        if (vm.state === 1 /* VMState.connected */) {
          computeConfigAndUpdate();
        }
      }
    });
  }
  return {
    // @ts-expect-error the boundary protection executes sync, connector is always defined
    connector,
    computeConfigAndUpdate,
    resetConfigWatcher: () => ro.reset()
  };
}
function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const def = {
    adapter,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function installWireAdapters(vm) {
  const {
    context,
    def: {
      wire
    }
  } = vm;
  const wiredConnecting = context.wiredConnecting = [];
  const wiredDisconnecting = context.wiredDisconnecting = [];
  for (const fieldNameOrMethod in wire) {
    const descriptor = wire[fieldNameOrMethod];
    const wireDef = WireMetaMap.get(descriptor);
    if (!isUndefined$1(wireDef)) {
      const {
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher
      } = createConnector(vm, fieldNameOrMethod, wireDef);
      const hasDynamicParams = wireDef.dynamic.length > 0;
      ArrayPush$1.call(wiredConnecting, () => {
        connector.connect();
        if (!lwcRuntimeFlags.ENABLE_WIRE_SYNC_EMIT) {
          if (hasDynamicParams) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            Promise.resolve().then(computeConfigAndUpdate);
            return;
          }
        }
        computeConfigAndUpdate();
      });
      ArrayPush$1.call(wiredDisconnecting, () => {
        connector.disconnect();
        resetConfigWatcher();
      });
    }
  }
}
function connectWireAdapters(vm) {
  const {
    wiredConnecting
  } = vm.context;
  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}
function disconnectWireAdapters(vm) {
  const {
    wiredDisconnecting
  } = vm.context;
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop);
}
function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        return;
      }
      const val = vm.cmpProps[key];
      componentValueObserved(vm, key, val);
      return val;
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      vm.cmpProps[key] = newValue;
      componentValueMutated(vm, key);
    },
    enumerable: true,
    configurable: true
  };
}
function createPublicAccessorDescriptor(key, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  assert.invariant(isFunction$1(get), `Invalid public accessor ${toString(key)} decorated with @api. The property is missing a getter.`);
  return {
    get() {
      return get.call(this);
    },
    set(newValue) {
      getAssociatedVM(this);
      if (set) {
        set.call(this, newValue);
      }
    },
    enumerable,
    configurable
  };
}
function internalTrackDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      const val = vm.cmpFields[key];
      componentValueObserved(vm, key, val);
      return val;
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      const reactiveOrAnyValue = getReactiveProxy(newValue);
      updateComponentValue(vm, key, reactiveOrAnyValue);
    },
    enumerable: true,
    configurable: true
  };
}
function internalWireFieldDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(value) {
      const vm = getAssociatedVM(this);
      /**
       * Reactivity for wired fields is provided in wiring.
       * We intentionally add reactivity here since this is just
       * letting the author to do the wrong thing, but it will keep our
       * system to be backward compatible.
       */
      updateComponentValue(vm, key, value);
    },
    enumerable: true,
    configurable: true
  };
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by user-land code.
 * @param Ctor
 * @param meta
 */
function registerDecorators(Ctor, meta) {
  const proto = Ctor.prototype;
  const {
    publicProps,
    publicMethods,
    wire,
    track,
    fields
  } = meta;
  const apiMethods = create(null);
  const apiFields = create(null);
  const wiredMethods = create(null);
  const wiredFields = create(null);
  const observedFields = create(null);
  const apiFieldsConfig = create(null);
  let descriptor;
  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      if (propConfig.config > 0) {
        if (isUndefined$1(descriptor)) {
          // TODO [#3441]: This line of code does not seem possible to reach.
          throw new Error();
        }
        descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
      } else {
        // [W-9927596] If a component has both a public property and a private setter/getter
        // with the same name, the property is defined as a public accessor. This branch is
        // only here for backward compatibility reasons.
        if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          descriptor = createPublicPropertyDescriptor(fieldName);
        }
      }
      apiFields[fieldName] = descriptor;
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(publicMethods)) {
    forEach.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$1(proto, methodName);
      if (isUndefined$1(descriptor)) {
        throw new Error();
      }
      apiMethods[methodName] = descriptor;
    });
  }
  if (!isUndefined$1(wire)) {
    for (const fieldOrMethodName in wire) {
      const {
        adapter,
        method,
        config: configCallback,
        dynamic = []
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);
      if (method === 1) {
        if (isUndefined$1(descriptor)) {
          throw new Error(`Missing descriptor for wired method "${fieldOrMethodName}".`);
        }
        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
      } else {
        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
        defineProperty(proto, fieldOrMethodName, descriptor);
      }
    }
  }
  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      descriptor = internalTrackDecorator(fieldName);
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
      // tracked property. This is only here for backward compatibility purposes.
      const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
      const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;
      if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
        observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
      }
    }
  }
  setDecoratorsMeta(Ctor, {
    apiMethods,
    apiFields,
    apiFieldsConfig,
    wiredMethods,
    wiredFields,
    observedFields
  });
  return Ctor;
}
const signedDecoratorToMetaMap = new Map();
function setDecoratorsMeta(Ctor, meta) {
  signedDecoratorToMetaMap.set(Ctor, meta);
}
const defaultMeta = {
  apiMethods: EmptyObject,
  apiFields: EmptyObject,
  apiFieldsConfig: EmptyObject,
  wiredMethods: EmptyObject,
  wiredFields: EmptyObject,
  observedFields: EmptyObject
};
function getDecoratorsMeta(Ctor) {
  const meta = signedDecoratorToMetaMap.get(Ctor);
  return isUndefined$1(meta) ? defaultMeta : meta;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const signedTemplateSet = new Set();
function defaultEmptyTemplate() {
  return [];
}
signedTemplateSet.add(defaultEmptyTemplate);
function isTemplateRegistered(tpl) {
  return signedTemplateSet.has(tpl);
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 * @param tpl
 */
function registerTemplate(tpl) {
  signedTemplateSet.add(tpl);
  // chaining this method as a way to wrap existing
  // assignment of templates easily, without too much transformation
  return tpl;
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for creating the base bridge class BaseBridgeElement
 * that represents the HTMLElement extension used for any LWC inserted in the DOM.
 */
// A bridge descriptor is a descriptor whose job is just to get the component instance
// from the element instance, and get the value or set a new value on the component.
// This means that across different elements, similar names can get the exact same
// descriptor, so we can cache them:
const cachedGetterByKey = create(null);
const cachedSetterByKey = create(null);
function assertPublicBridgeMember(vm, memberMap, memberName) {
  if (!hasOwnProperty$1.call(memberMap, memberName)) {
    throw new TypeError(`Invalid attempt to access "${memberName}" on <${vm.def.name}>. This member is not a public property or method of the component.`);
  }
}
function createGetter(key) {
  let fn = cachedGetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedGetterByKey[key] = function () {
      const vm = getAssociatedVM(this);
      assertPublicBridgeMember(vm, vm.def.props, key);
      const {
        getHook
      } = vm;
      return getHook(vm.component, key);
    };
  }
  return fn;
}
function createSetter(key) {
  let fn = cachedSetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedSetterByKey[key] = function (newValue) {
      const vm = getAssociatedVM(this);
      assertPublicBridgeMember(vm, vm.def.props, key);
      const {
        setHook
      } = vm;
      newValue = getReadOnlyProxy(newValue);
      setHook(vm.component, key, newValue);
    };
  }
  return fn;
}
function createMethodCaller(methodName) {
  return function () {
    const vm = getAssociatedVM(this);
    assertPublicBridgeMember(vm, vm.def.methods, methodName);
    const {
      callHook,
      component
    } = vm;
    const fn = component[methodName];
    return callHook(vm.component, fn, ArraySlice.call(arguments));
  };
}
function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
  return function attributeChangedCallback(attrName, oldValue, newValue) {
    // W-17420330 & W-23590585
    if (this instanceof BaseBridgeElement || lwcRuntimeFlags.ENABLE_LEGACY_ATTRIBUTE_CHANGED_CALLBACK) {
      if (oldValue === newValue) {
        // Ignore same values.
        return;
      }
      const propName = attributeToPropMap[attrName];
      if (isUndefined$1(propName)) {
        if (!isUndefined$1(superAttributeChangedCallback)) {
          // delegate unknown attributes to the super.
          // Typescript does not like it when you treat the `arguments` object as an array
          // @ts-expect-error type-mismatch
          superAttributeChangedCallback.apply(this, arguments);
        }
        return;
      }
      // Reflect attribute change to the corresponding property when changed from outside.
      this[propName] = newValue;
    }
  };
}
function HTMLBridgeElementFactory(SuperClass, publicProperties, methods, observedFields, proto, hasCustomSuperClass) {
  const HTMLBridgeElement = class extends SuperClass {
    /*LWC compiler v9.5.3*/
  };
  // generating the hash table for attributes to avoid duplicate fields and facilitate validation
  // and false positives in case of inheritance.
  const attributeToPropMap = create(null);
  const {
    attributeChangedCallback: superAttributeChangedCallback
  } = SuperClass.prototype;
  const {
    observedAttributes: superObservedAttributes = []
  } = SuperClass;
  const descriptors = create(null);
  // expose getters and setters for each public props on the new Element Bridge
  for (let i = 0, len = publicProperties.length; i < len; i += 1) {
    const propName = publicProperties[i];
    attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
    descriptors[propName] = {
      get: createGetter(propName),
      set: createSetter(propName),
      enumerable: true,
      configurable: true
    };
  }
  // expose public methods as props on the new Element Bridge
  for (let i = 0, len = methods.length; i < len; i += 1) {
    const methodName = methods[i];
    descriptors[methodName] = {
      value: createMethodCaller(methodName),
      writable: true,
      configurable: true
    };
  }
  // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
  // map of attributes to props. We do this after all other props and methods to avoid the possibility
  // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
  // to preserve this definition.
  descriptors.attributeChangedCallback = {
    value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
  };
  // To avoid leaking private component details, accessing internals from outside a component is not allowed.
  descriptors.attachInternals = {
    set() {
    },
    get() {
    }
  };
  descriptors.formAssociated = {
    set() {
    },
    get() {
    }
  };
  // Specify attributes for which we want to reflect changes back to their corresponding
  // properties via attributeChangedCallback.
  defineProperty(HTMLBridgeElement, 'observedAttributes', {
    get() {
      return [...superObservedAttributes, ...keys(attributeToPropMap)];
    }
  });
  defineProperties(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}
// We do some special handling of non-standard ARIA props like ariaLabelledBy as well as props without (as of this
// writing) broad cross-browser support like ariaBrailleLabel. This is so the reflection works correctly and preserves
// backwards compatibility with the previous global polyfill approach.
//
// The goal here is to expose `elm.aria*` property accessors to work from outside a component, and to reflect `aria-*`
// attrs. This is especially important because the template compiler compiles aria-* attrs on components to aria* props.
// Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
//
// Also note this ARIA reflection only really makes sense in the browser. On the server, there is no
// `renderedCallback()`, so you cannot do e.g. `this.template.querySelector('x-child').ariaBusy = 'true'`. So we don't
// need to expose ARIA props outside the LightningElement
const basePublicProperties = [...getOwnPropertyNames$1(HTMLElementOriginalDescriptors), ...getOwnPropertyNames$1(ariaReflectionPolyfillDescriptors)];
const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, basePublicProperties, []);
freeze(BaseBridgeElement);
seal(BaseBridgeElement.prototype);

/*
 * Copyright (c) 2025, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const VALID_SCOPE_TOKEN_REGEX = /^[a-zA-Z0-9\-_]+$/;
function getOrCreateAbortSignal(cssContent) {
  return undefined;
}
function makeHostToken(token) {
  // Note: if this ever changes, update the `cssScopeTokens` returned by `@lwc/compiler`
  return `${token}-host`;
}
function createInlineStyleVNode(content) {
  return api.h('style', {
    key: 'style',
    // special key
    attrs: {
      type: 'text/css'
    }
  }, [api.t(content)]);
}
function updateStylesheetToken(vm, template) {
  const {
    elm,
    context,
    renderMode,
    shadowMode,
    renderer: {
      getClassList,
      removeAttribute,
      setAttribute
    }
  } = vm;
  const {
    stylesheets: newStylesheets
  } = template;
  const newStylesheetToken = template.stylesheetToken;
  const {
    stylesheets: newVmStylesheets
  } = vm;
  const isSyntheticShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */;
  const {
    hasScopedStyles
  } = context;
  let newToken;
  let newHasTokenInClass;
  let newHasTokenInAttribute;
  // Reset the styling token applied to the host element.
  const oldToken = context.stylesheetToken;
  const oldHasTokenInClass = context.hasTokenInClass;
  const oldHasTokenInAttribute = context.hasTokenInAttribute;
  if (!isUndefined$1(oldToken)) {
    if (oldHasTokenInClass) {
      getClassList(elm).remove(makeHostToken(oldToken));
    }
    if (oldHasTokenInAttribute) {
      removeAttribute(elm, makeHostToken(oldToken));
    }
  }
  // Apply the new template styling token to the host element, if the new template has any
  // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.
  const hasNewStylesheets = hasStyles(newStylesheets);
  const hasNewVmStylesheets = hasStyles(newVmStylesheets);
  if (hasNewStylesheets || hasNewVmStylesheets) {
    newToken = newStylesheetToken;
  }
  // Set the new styling token on the host element
  if (!isUndefined$1(newToken)) {
    if (hasScopedStyles) {
      const hostScopeTokenClass = makeHostToken(newToken);
      getClassList(elm).add(hostScopeTokenClass);
      newHasTokenInClass = true;
    }
    if (isSyntheticShadow) {
      setAttribute(elm, makeHostToken(newToken), '');
      newHasTokenInAttribute = true;
    }
  }
  // Update the styling tokens present on the context object.
  context.stylesheetToken = newToken;
  context.hasTokenInClass = newHasTokenInClass;
  context.hasTokenInAttribute = newHasTokenInAttribute;
}
function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
  const content = [];
  let root;
  for (let i = 0; i < stylesheets.length; i++) {
    let stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
    } else {
      const isScopedCss = isTrue(stylesheet[KEY__SCOPED_CSS]);
      const isNativeOnlyCss = isTrue(stylesheet[KEY__NATIVE_ONLY_CSS]);
      const {
        renderMode,
        shadowMode
      } = vm;
      if (lwcRuntimeFlags.DISABLE_LIGHT_DOM_UNSCOPED_CSS && !isScopedCss && renderMode === 0 /* RenderMode.Light */) {
        logError('Unscoped CSS is not supported in Light DOM in this environment. Please use scoped CSS ' + '(*.scoped.css) instead of unscoped CSS (*.css). See also: https://sfdc.co/scoped-styles-light-dom');
        continue;
      }
      // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.
      const scopeToken = isScopedCss || shadowMode === 1 /* ShadowMode.Synthetic */ && renderMode === 1 /* RenderMode.Shadow */ ? stylesheetToken : undefined;
      // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
      // native shadow DOM. Synthetic shadow DOM never uses `:host`.
      const useActualHostSelector = renderMode === 0 /* RenderMode.Light */ ? !isScopedCss : shadowMode === 0 /* ShadowMode.Native */;
      // Use the native :dir() pseudoclass only in native shadow DOM. Otherwise, in synthetic shadow,
      // we use an attribute selector on the host to simulate :dir().
      let useNativeDirPseudoclass;
      if (renderMode === 1 /* RenderMode.Shadow */) {
        useNativeDirPseudoclass = shadowMode === 0 /* ShadowMode.Native */;
      } else {
        // Light DOM components should only render `[dir]` if they're inside of a synthetic shadow root.
        // At the top level (root is null) or inside of a native shadow root, they should use `:dir()`.
        if (isUndefined$1(root)) {
          // Only calculate the root once as necessary
          root = getNearestShadowComponent(vm);
        }
        useNativeDirPseudoclass = isNull(root) || root.shadowMode === 0 /* ShadowMode.Native */;
      }
      let cssContent;
      if (isNativeOnlyCss && renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */) {
        // Native-only (i.e. disableSyntheticShadowSupport) CSS should be ignored entirely
        // in synthetic shadow. It's fine to use in either native shadow or light DOM, but in
        // synthetic shadow it wouldn't be scoped properly and so should be ignored.
        cssContent = '/* ignored native-only CSS */';
      } else {
        cssContent = stylesheet(scopeToken, useActualHostSelector, useNativeDirPseudoclass);
      }
      ArrayPush$1.call(content, cssContent);
    }
  }
  return content;
}
function getStylesheetsContent(vm, template) {
  const {
    stylesheets,
    stylesheetToken
  } = template;
  const {
    stylesheets: vmStylesheets
  } = vm;
  if (!isUndefined$1(stylesheetToken) && !isValidScopeToken(stylesheetToken)) {
    throw new Error('stylesheet token must be a valid string');
  }
  const hasTemplateStyles = hasStyles(stylesheets);
  const hasVmStyles = hasStyles(vmStylesheets);
  if (hasTemplateStyles) {
    const content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
    if (hasVmStyles) {
      // Slow path – merge the template styles and vm styles
      ArrayPush$1.apply(content, evaluateStylesheetsContent(vmStylesheets, stylesheetToken, vm));
    }
    return content;
  }
  if (hasVmStyles) {
    // No template styles, so return vm styles directly
    return evaluateStylesheetsContent(vmStylesheets, stylesheetToken, vm);
  }
  // Fastest path - no styles, so return an empty array
  return EmptyArray;
}
// It might be worth caching this to avoid doing the lookup repeatedly, but
// perf testing has not shown it to be a huge improvement yet:
// https://github.com/salesforce/lwc/pull/2460#discussion_r691208892
function getNearestShadowComponent(vm) {
  let owner = vm;
  while (!isNull(owner)) {
    if (owner.renderMode === 1 /* RenderMode.Shadow */) {
      return owner;
    }
    owner = owner.owner;
  }
  return owner;
}
/**
 * If the component that is currently being rendered uses scoped styles,
 * this returns the unique token for that scoped stylesheet. Otherwise
 * it returns null.
 * @param owner
 */
function getScopeTokenClass(owner) {
  const {
    cmpTemplate,
    context
  } = owner;
  return context.hasScopedStyles && cmpTemplate?.stylesheetToken || null;
}
function getNearestNativeShadowComponent(vm) {
  const owner = getNearestShadowComponent(vm);
  if (!isNull(owner) && owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
    // Synthetic-within-native is impossible. So if the nearest shadow component is
    // synthetic, we know we won't find a native component if we go any further.
    return null;
  }
  return owner;
}
function createStylesheet(vm, stylesheets) {
  const {
    renderMode,
    shadowMode,
    renderer: {
      insertStylesheet
    }
  } = vm;
  if (renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */) {
    for (let i = 0; i < stylesheets.length; i++) {
      const stylesheet = stylesheets[i];
      insertStylesheet(stylesheet, undefined, getOrCreateAbortSignal());
    }
  } else if (vm.hydrated) {
    // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
    //       This works in the client, because the stylesheets are created, and cached in the VM
    //       the first time the VM renders.
    // native shadow or light DOM, SSR
    return ArrayMap.call(stylesheets, createInlineStyleVNode);
  } else {
    // native shadow or light DOM, DOM renderer
    const root = getNearestNativeShadowComponent(vm);
    // null root means a global style
    const target = isNull(root) ? undefined : root.shadowRoot;
    for (let i = 0; i < stylesheets.length; i++) {
      const stylesheet = stylesheets[i];
      insertStylesheet(stylesheet, target, getOrCreateAbortSignal());
    }
  }
  return null;
}
function isValidScopeToken(token) {
  if (!isString(token)) {
    return false;
  }
  // See W-16614556
  return VALID_SCOPE_TOKEN_REGEX.test(token);
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * A map where the keys are weakly held and the values are a Set that are also each weakly held.
 * The goal is to avoid leaking the values, which is what would happen with a WeakMap<K, Set<V>>.
 *
 * Note that this is currently only intended to be used in dev/PRODDEBUG environments.
 *
 * This implementation relies on WeakRefs and FinalizationRegistry.
 * For some background, see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef
 */
class WeakMultiMap {
  constructor() {
    this._map = new WeakMap();
    this._registry = new FinalizationRegistry(weakRefs => {
      // This should be considered an optional cleanup method to remove GC'ed values from their respective arrays.
      // JS VMs are not obligated to call FinalizationRegistry callbacks.
      // Work backwards, removing stale VMs
      for (let i = weakRefs.length - 1; i >= 0; i--) {
        const vm = weakRefs[i].deref();
        if (isUndefined$1(vm)) {
          ArraySplice.call(weakRefs, i, 1); // remove
        }
      }
    });
  }
  _getWeakRefs(key) {
    let weakRefs = this._map.get(key);
    if (isUndefined$1(weakRefs)) {
      weakRefs = [];
      this._map.set(key, weakRefs);
    }
    return weakRefs;
  }
  get(key) {
    const weakRefs = this._getWeakRefs(key);
    const result = new Set();
    for (const weakRef of weakRefs) {
      const vm = weakRef.deref();
      if (!isUndefined$1(vm)) {
        result.add(vm);
      }
    }
    return result;
  }
  add(key, value) {
    const weakRefs = this._getWeakRefs(key);
    // Skip adding if already present
    for (const weakRef of weakRefs) {
      if (weakRef.deref() === value) {
        return;
      }
    }
    ArrayPush$1.call(weakRefs, new WeakRef(value));
    // It's important here not to leak the second argument, which is the "held value." The FinalizationRegistry
    // effectively creates a strong reference between the first argument (the "target") and the held value. When
    // the target is GC'ed, the callback is called, and then the held value is GC'ed.
    // Putting the key here would mean the key is not GC'ed until the value is GC'ed, which defeats the purpose
    // of the WeakMap. Whereas putting the weakRefs array here is fine, because it doesn't have a strong reference
    // to anything. See also this example:
    // https://gist.github.com/nolanlawson/79a3d36e8e6cc25c5048bb17c1795aea
    this._registry.register(value, weakRefs);
  }
  delete(key) {
    this._map.delete(key);
  }
}
let swappedStyleMap = /*@__PURE__@*/new WeakMap();
// The important thing here is the weak values – VMs are transient (one per component instance) and should be GC'ed,
// so we don't want to create strong references to them.
// The weak keys are kind of useless, because Templates, LightningElementConstructors, and Stylesheets are
// never GC'ed. But maybe they will be someday, so we may as well use weak keys too.
// The "pure" annotations are so that Rollup knows for sure it can remove these from prod mode
let activeTemplates = /*@__PURE__@*/new WeakMultiMap();
let activeComponents = /*@__PURE__@*/new WeakMultiMap();
let activeStyles = /*@__PURE__@*/new WeakMultiMap();
function getStyleOrSwappedStyle(style) {
  assertNotProd(); // this method should never leak to prod
  // TODO [#4154]: shows stale content when swapping content back and forth multiple times
  const visited = new Set();
  while (swappedStyleMap.has(style) && !visited.has(style)) {
    visited.add(style);
    style = swappedStyleMap.get(style);
  }
  return style;
}
function addActiveStylesheets(stylesheets, vm) {
  if (isUndefined$1(stylesheets) || isNull(stylesheets)) {
    // Ignore non-existent stylesheets
    return;
  }
  for (const stylesheet of flattenStylesheets(stylesheets)) {
    // this is necessary because we don't hold the list of styles
    // in the vm, we only hold the selected (already swapped template)
    // but the styles attached to the template might not be the actual
    // active ones, but the swapped versions of those.
    const swappedStylesheet = getStyleOrSwappedStyle(stylesheet);
    // this will allow us to keep track of the stylesheet that are
    // being used by a hot component
    activeStyles.add(swappedStylesheet, vm);
  }
}
function setActiveVM(vm) {
  assertNotProd(); // this method should never leak to prod
  // tracking active component
  const Ctor = vm.def.ctor;
  // this will allow us to keep track of the hot components
  activeComponents.add(Ctor, vm);
  // tracking active template
  const template = vm.cmpTemplate;
  if (!isNull(template)) {
    // this will allow us to keep track of the templates that are
    // being used by a hot component
    activeTemplates.add(template, vm);
    // Tracking active styles from the template or the VM. `template.stylesheets` are implicitly associated
    // (e.g. `foo.css` associated with `foo.html`), whereas `vm.stylesheets` are from `static stylesheets`.
    addActiveStylesheets(template.stylesheets, vm);
    addActiveStylesheets(vm.stylesheets, vm);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
const CtorToDefMap = new WeakMap();
function getCtorProto(Ctor) {
  let proto = getPrototypeOf$1(Ctor);
  if (isNull(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
  }
  // covering the cases where the ref is circular in AMD
  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);
    // escape hatch for Locker and other abstractions to provide their own base class instead
    // of our Base class without having to leak it to user-land. If the circular function returns
    // itself, that's the signal that we have hit the end of the proto chain, which must always
    // be base.
    proto = p === proto ? LightningElement : p;
  }
  return proto;
}
function createComponentDef(Ctor) {
  // Enforce component-level feature flag if provided at compile time
  if (!isComponentFeatureEnabled(Ctor)) {
    const metadata = getComponentMetadata(Ctor);
    const componentName = Ctor.name || metadata?.sel || 'Unknown';
    const componentFeatureFlagPath = metadata?.componentFeatureFlag?.path || 'Unknown';
    throw new Error(`Component ${componentName} is disabled by the feature flag at ${componentFeatureFlagPath}.`);
  }
  const {
    shadowSupportMode: ctorShadowSupportMode,
    renderMode: ctorRenderMode,
    formAssociated: ctorFormAssociated
  } = Ctor;
  const decoratorsMeta = getDecoratorsMeta(Ctor);
  const {
    apiFields,
    apiFieldsConfig,
    apiMethods,
    wiredFields,
    wiredMethods,
    observedFields
  } = decoratorsMeta;
  const proto = Ctor.prototype;
  let {
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    formAssociatedCallback,
    formResetCallback,
    formDisabledCallback,
    formStateRestoreCallback,
    render
  } = proto;
  const superProto = getCtorProto(Ctor);
  const hasCustomSuperClass = superProto !== LightningElement;
  const superDef = hasCustomSuperClass ? getComponentInternalDef(superProto) : lightingElementDef;
  const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods));
  const props = assign(create(null), superDef.props, apiFields);
  const propsConfig = assign(create(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign(create(null), superDef.methods, apiMethods);
  const wire = assign(create(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  formAssociatedCallback = formAssociatedCallback || superDef.formAssociatedCallback;
  formResetCallback = formResetCallback || superDef.formResetCallback;
  formDisabledCallback = formDisabledCallback || superDef.formDisabledCallback;
  formStateRestoreCallback = formStateRestoreCallback || superDef.formStateRestoreCallback;
  render = render || superDef.render;
  let shadowSupportMode = superDef.shadowSupportMode;
  if (!isUndefined$1(ctorShadowSupportMode)) {
    shadowSupportMode = ctorShadowSupportMode;
    if (isReportingEnabled() && (shadowSupportMode === 'any' || shadowSupportMode === 'native')) {
      report("ShadowSupportModeUsage" /* ReportingEventId.ShadowSupportModeUsage */, {
        tagName: Ctor.name});
    }
  }
  let renderMode = superDef.renderMode;
  if (!isUndefined$1(ctorRenderMode)) {
    renderMode = ctorRenderMode === 'light' ? 0 /* RenderMode.Light */ : 1 /* RenderMode.Shadow */;
  }
  let formAssociated = superDef.formAssociated;
  if (!isUndefined$1(ctorFormAssociated)) {
    formAssociated = ctorFormAssociated;
  }
  const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
  const name = Ctor.name || superDef.name;
  // installing observed fields into the prototype.
  defineProperties(proto, observedFields);
  const def = {
    ctor: Ctor,
    name,
    wire,
    props,
    propsConfig,
    methods,
    bridge,
    template,
    renderMode,
    shadowSupportMode,
    formAssociated,
    connectedCallback,
    disconnectedCallback,
    errorCallback,
    formAssociatedCallback,
    formDisabledCallback,
    formResetCallback,
    formStateRestoreCallback,
    renderedCallback,
    render
  };
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentDef(def);
  return def;
}
/**
 * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
 * subject to change or being removed.
 * @param ctor
 */
function isComponentConstructor(ctor) {
  if (!isFunction$1(ctor)) {
    return false;
  }
  // Fast path: LightningElement is part of the prototype chain of the constructor.
  if (ctor.prototype instanceof LightningElement) {
    return true;
  }
  // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
  // climb up the constructor prototype chain to check in case there are circular dependencies
  // to resolve.
  let current = ctor;
  do {
    if (isCircularModuleDependency(current)) {
      const circularResolved = resolveCircularModuleDependency(current);
      // If the circular function returns itself, that's the signal that we have hit the end
      // of the proto chain, which must always be a valid base constructor.
      if (circularResolved === current) {
        return true;
      }
      current = circularResolved;
    }
    if (current === LightningElement) {
      return true;
    }
  } while (!isNull(current) && (current = getPrototypeOf$1(current)));
  // Finally return false if the LightningElement is not part of the prototype chain.
  return false;
}
function getComponentInternalDef(Ctor) {
  let def = CtorToDefMap.get(Ctor);
  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      const resolvedCtor = resolveCircularModuleDependency(Ctor);
      def = getComponentInternalDef(resolvedCtor);
      // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
      // look up the definition in cache instead of re-resolving and recreating the def.
      CtorToDefMap.set(Ctor, def);
      return def;
    }
    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }
    def = createComponentDef(Ctor);
    CtorToDefMap.set(Ctor, def);
  }
  return def;
}
function getComponentHtmlPrototype(Ctor) {
  const def = getComponentInternalDef(Ctor);
  return def.bridge;
}
const lightingElementDef = {
  name: LightningElement.name,
  props: lightningBasedDescriptors,
  propsConfig: EmptyObject,
  methods: EmptyObject,
  renderMode: 1 /* RenderMode.Shadow */,
  shadowSupportMode: 'reset',
  formAssociated: undefined,
  wire: EmptyObject,
  bridge: BaseBridgeElement,
  template: defaultEmptyTemplate,
  render: LightningElement.prototype.render
};

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isVBaseElement(vnode) {
  const {
    type
  } = vnode;
  return type === 2 /* VNodeType.Element */ || type === 3 /* VNodeType.CustomElement */;
}
function isSameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVCustomElement(vnode) {
  return vnode.type === 3 /* VNodeType.CustomElement */;
}
function isVFragment(vnode) {
  return vnode.type === 5 /* VNodeType.Fragment */;
}
function isVScopedSlotFragment(vnode) {
  return vnode.type === 6 /* VNodeType.ScopedSlotFragment */;
}
function isVStatic(vnode) {
  return vnode.type === 4 /* VNodeType.Static */;
}
function isVStaticPartElement(vnode) {
  return vnode.type === 1 /* VStaticPartType.Element */;
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const sanitizedHtmlContentSymbol = Symbol('lwc-get-sanitized-html-content');
// W-23680734: brand "trusted sanitized HTML" objects by IDENTITY, not by a structural
// property/symbol. The previous brand check (`sanitizedHtmlContentSymbol in value`) and read
// (`value[sanitizedHtmlContentSymbol]`) resolve through `value`'s own property semantics, so an
// object with caller-controlled property behavior can report the brand and yield markup it does
// not legitimately hold — trust based on shape rather than provenance.
//
// A WeakMap keyed on the wrapper's identity closes that gap: `WeakMap.prototype.has`/`get`
// perform an internal-slot identity lookup that does not consult the object's property handlers,
// and only wrappers we created were ever registered — so any other object is `false` regardless
// of its shape. This mirrors the existing identity-based trust sets for signals/context in
// `@lwc/shared` (`isTrustedSignal`, `isTrustedContext`).
const sanitizedContentToString = new WeakMap();
function isSanitizedHtmlContent(object) {
  if (!isObject(object) || isNull(object)) {
    return false;
  }
  // Kill-switch: when the flag is set, fall back to the legacy structural symbol brand.
  // Present so the hardening can be disabled at runtime if it regresses a legit integration;
  // the default (flag unset) is the safe, identity-based check.
  if (lwcRuntimeFlags.DISABLE_SANITIZED_HTML_CONTENT_IDENTITY_CHECK) {
    return sanitizedHtmlContentSymbol in object;
  }
  // Identity check — only wrappers we created are members, independent of `object`'s shape.
  return sanitizedContentToString.has(object);
}
function getSanitizedContent(object) {
  if (lwcRuntimeFlags.DISABLE_SANITIZED_HTML_CONTENT_IDENTITY_CHECK) {
    return object[sanitizedHtmlContentSymbol];
  }
  // Read the sanitized string from OUR map by identity, never from a property access on
  // `object` (whose semantics may be caller-controlled).
  return sanitizedContentToString.get(object);
}
/**
 * Wrap a pre-sanitized string designated for `.innerHTML` via `lwc:inner-html`
 * as an object branded by identity in a module-private WeakMap that only we have access to.
 * @param sanitizedString
 * @returns SanitizedHtmlContent
 */
function createSanitizedHtmlContent(sanitizedString) {
  // The wrapper keeps the non-enumerable symbol property so the legacy kill-switch path and
  // any structural consumers still work; the authoritative brand is WeakMap membership.
  const wrapper = create(null, {
    [sanitizedHtmlContentSymbol]: {
      value: sanitizedString,
      configurable: false,
      writable: false
    }
  });
  sanitizedContentToString.set(wrapper, sanitizedString);
  return wrapper;
}
/**
 * Safely call setProperty on an Element while handling any SanitizedHtmlContent objects correctly
 *
 * @param setProperty - renderer.setProperty
 * @param elm - Element
 * @param key - key to set
 * @param value -  value to set
 */
function safelySetProperty(setProperty, elm, key, value) {
  // See W-16614337
  // we support setting innerHTML to `undefined` because it's inherently safe
  if ((key === 'innerHTML' || key === 'outerHTML') && !isUndefined$1(value)) {
    if (isSanitizedHtmlContent(value)) {
      // it's a SanitizedHtmlContent object
      setProperty(elm, key, getSanitizedContent(value));
    }
  } else {
    setProperty(elm, key, value);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ColonCharCode = 58;
function patchAttributes(oldVnode, vnode, renderer) {
  const {
    data,
    elm
  } = vnode;
  const {
    attrs
  } = data;
  if (isUndefined$1(attrs)) {
    return;
  }
  const oldAttrs = isNull(oldVnode) ? EmptyObject : oldVnode.data.attrs;
  // Attrs may be the same due to the static content optimization, so we can skip diffing
  if (oldAttrs === attrs) {
    return;
  }
  // Note VStaticPartData does not contain the external property so it will always default to false.
  const external = 'external' in data ? data.external : false;
  const {
    setAttribute,
    removeAttribute,
    setProperty
  } = renderer;
  for (const key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];
    if (old !== cur) {
      let propName;
      // For external custom elements, sniff to see if the attr should be considered a prop.
      // Use kebabCaseToCamelCase directly because we don't want to set props like `ariaLabel` or `tabIndex`
      // on a custom element versus just using the more reliable attribute format.
      if (external && (propName = kebabCaseToCamelCase(key)) in elm) {
        safelySetProperty(setProperty, elm, propName, cur);
      } else if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
        // Assume xml namespace
        setAttribute(elm, key, cur, XML_NAMESPACE);
      } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
        // Assume xlink namespace
        setAttribute(elm, key, cur, XLINK_NAMESPACE);
      } else if (isNull(cur) || isUndefined$1(cur)) {
        removeAttribute(elm, key);
      } else {
        setAttribute(elm, key, cur);
      }
    }
  }
}
function patchSlotAssignment(oldVnode, vnode, renderer) {
  const {
    slotAssignment
  } = vnode;
  if (oldVnode?.slotAssignment === slotAssignment) {
    return;
  }
  const {
    elm
  } = vnode;
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  if (isUndefined$1(slotAssignment) || isNull(slotAssignment)) {
    removeAttribute(elm, 'slot');
  } else {
    setAttribute(elm, 'slot', slotAssignment);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isLiveBindingProp(sel, key) {
  // For properties with live bindings, we read values from the DOM element
  // instead of relying on internally tracked values.
  return sel === 'input' && (key === 'value' || key === 'checked');
}
function patchProps(oldVnode, vnode, renderer) {
  const {
    props
  } = vnode.data;
  if (isUndefined$1(props)) {
    return;
  }
  let oldProps;
  if (!isNull(oldVnode)) {
    oldProps = oldVnode.data.props;
    // Props may be the same due to the static content optimization, so we can skip diffing
    if (oldProps === props) {
      return;
    }
    if (isUndefined$1(oldProps)) {
      oldProps = EmptyObject;
    }
  }
  const isFirstPatch = isNull(oldVnode);
  const {
    elm,
    sel
  } = vnode;
  const {
    getProperty,
    setProperty
  } = renderer;
  for (const key in props) {
    const cur = props[key];
    // Set the property if it's the first time is is patched or if the previous property is
    // different than the one previously set.
    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? getProperty(elm, key) : oldProps[key]) || !(key in oldProps) // this is required because the above case will pass when `cur` is `undefined` and key is missing in `oldProps`
    ) {
      safelySetProperty(setProperty, elm, key, cur);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const classNameToClassMap = create(null);
function getMapFromClassName(className) {
  if (isUndefined$1(className) || isNull(className) || className === '') {
    return EmptyObject;
  }
  // computed class names must be string
  // This will throw if className is a symbol or null-prototype object
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  className = isString(className) ? className : className + '';
  let map = classNameToClassMap[className];
  if (map) {
    return map;
  }
  map = create(null);
  let start = 0;
  let o;
  const len = className.length;
  for (o = 0; o < len; o++) {
    if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
      if (o > start) {
        map[StringSlice.call(className, start, o)] = true;
      }
      start = o + 1;
    }
  }
  if (o > start) {
    map[StringSlice.call(className, start, o)] = true;
  }
  classNameToClassMap[className] = map;
  return map;
}
function patchClassAttribute(oldVnode, vnode, renderer) {
  const {
    elm,
    data: {
      className: newClass
    }
  } = vnode;
  const oldClass = isNull(oldVnode) ? undefined : oldVnode.data.className;
  if (oldClass === newClass) {
    return;
  }
  const newClassMap = getMapFromClassName(newClass);
  const oldClassMap = getMapFromClassName(oldClass);
  if (oldClassMap === newClassMap) {
    // These objects are cached by className string (`classNameToClassMap`), so we can only get here if there is
    // a key collision due to types, e.g. oldClass is `undefined` and newClass is `""` (empty string), or oldClass
    // is `1` (number) and newClass is `"1"` (string).
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  let name;
  for (name in oldClassMap) {
    // remove only if it is not in the new class collection and it is not set from within the instance
    if (isUndefined$1(newClassMap[name])) {
      classList.remove(name);
    }
  }
  for (name in newClassMap) {
    if (isUndefined$1(oldClassMap[name])) {
      classList.add(name);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The style property is a string when defined via an expression in the template.
function patchStyleAttribute(oldVnode, vnode, renderer, owner) {
  const {
    elm,
    data: {
      style: newStyle
    }
  } = vnode;
  const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;
  if (oldStyle === newStyle) {
    return;
  }
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  if (!isString(newStyle) || newStyle === '') {
    removeAttribute(elm, 'style');
  } else {
    setAttribute(elm, 'style', newStyle);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function applyEventListeners(vnode, renderer) {
  const {
    elm,
    data
  } = vnode;
  const {
    on
  } = data;
  if (isUndefined$1(on)) {
    return;
  }
  const {
    addEventListener
  } = renderer;
  for (const name in on) {
    const handler = on[name];
    addEventListener(elm, name, handler);
  }
}

/*
 * Copyright (c) 2025, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function patchDynamicEventListeners(oldVnode, vnode, renderer, owner) {
  const {
    elm,
    data: {
      dynamicOn,
      dynamicOnRaw
    },
    sel
  } = vnode;
  // dynamicOn : A cloned version of the object passed to lwc:on, with null prototype and only its own enumerable properties.
  const oldDynamicOn = oldVnode?.data?.dynamicOn ?? EmptyObject;
  const newDynamicOn = dynamicOn ?? EmptyObject;
  // dynamicOnRaw : object passed to lwc:on
  // Compare dynamicOnRaw to check if same object is passed to lwc:on
  oldVnode?.data?.dynamicOnRaw === dynamicOnRaw;
  const {
    addEventListener,
    removeEventListener
  } = renderer;
  const attachedEventListeners = getAttachedEventListeners(owner, elm);
  // Properties that are present in 'oldDynamicOn' but not in 'newDynamicOn'
  for (const eventType in oldDynamicOn) {
    if (!(eventType in newDynamicOn)) {
      // Remove listeners that were attached previously but don't have a corresponding property in `newDynamicOn`
      const attachedEventListener = attachedEventListeners[eventType];
      removeEventListener(elm, eventType, attachedEventListener);
      attachedEventListeners[eventType] = undefined;
    }
  }
  // Ensure that the event listeners that are attached match what is present in `newDynamicOn`
  for (const eventType in newDynamicOn) {
    const typeExistsInOld = eventType in oldDynamicOn;
    const newCallback = newDynamicOn[eventType];
    // Skip if callback hasn't changed
    if (typeExistsInOld && oldDynamicOn[eventType] === newCallback) {
      continue;
    }
    // Remove listener that was attached previously
    if (typeExistsInOld) {
      const attachedEventListener = attachedEventListeners[eventType];
      removeEventListener(elm, eventType, attachedEventListener);
    }
    // Bind new callback to owner component and add it as listener to element
    const newBoundEventListener = bindEventListener(owner, newCallback);
    addEventListener(elm, eventType, newBoundEventListener);
    // Store the newly added eventListener
    attachedEventListeners[eventType] = newBoundEventListener;
  }
}
function getAttachedEventListeners(vm, elm) {
  let attachedEventListeners = vm.attachedEventListeners.get(elm);
  if (isUndefined$1(attachedEventListeners)) {
    attachedEventListeners = {};
    vm.attachedEventListeners.set(elm, attachedEventListeners);
  }
  return attachedEventListeners;
}
function bindEventListener(vm, fn) {
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML class property becomes the vnode.data.classMap object when defined as a string in the template.
// The compiler takes care of transforming the inline classnames into an object. It's faster to set the
// different classnames properties individually instead of via a string.
function applyStaticClassAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      classMap
    }
  } = vnode;
  if (isUndefined$1(classMap)) {
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  for (const name in classMap) {
    classList.add(name);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML style property becomes the vnode.data.styleDecls object when defined as a string in the template.
// The compiler takes care of transforming the inline style into an object. It's faster to set the
// different style properties individually instead of via a string.
function applyStaticStyleAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      styleDecls
    }
  } = vnode;
  if (isUndefined$1(styleDecls)) {
    return;
  }
  const {
    setCSSStyleProperty
  } = renderer;
  for (let i = 0; i < styleDecls.length; i++) {
    const [prop, value, important] = styleDecls[i];
    setCSSStyleProperty(elm, prop, value, important);
  }
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Set a ref (lwc:ref) on a VM, from a template API
function applyRefs(vnode, owner) {
  const {
    data
  } = vnode;
  const {
    ref
  } = data;
  if (isUndefined$1(ref)) {
    return;
  }
  // If this method is called, then vm.refVNodes is set as the template has refs.
  // If not, then something went wrong and we threw an error above.
  const refVNodes = owner.refVNodes;
  // In cases of conflict (two elements with the same ref), prefer the last one,
  // in depth-first traversal order. This happens automatically due to how we render
  refVNodes[ref] = vnode;
}

/*
 * Copyright (c) 2024, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function patchTextVNode(n1, n2, renderer) {
  n2.elm = n1.elm;
  if (n2.text !== n1.text) {
    updateTextContent$1(n2, renderer);
  }
}
function patchTextVStaticPart(n1, n2, renderer) {
  if (isNull(n1) || n2.text !== n1.text) {
    updateTextContent$1(n2, renderer);
  }
}
function updateTextContent$1(vnode, renderer) {
  const {
    elm,
    text
  } = vnode;
  const {
    setText
  } = renderer;
  setText(elm, text);
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * Given an array of static parts, mounts the DOM element to the part based on the staticPartId
 * @param root the root element
 * @param parts an array of VStaticParts
 * @param renderer the renderer to use
 */
function traverseAndSetElements(root, parts, renderer) {
  const numParts = parts.length;
  // Optimization given that, in most cases, there will be one part, and it's just the root
  if (numParts === 1) {
    const firstPart = parts[0];
    if (firstPart.partId === 0) {
      // 0 means the root node
      firstPart.elm = root;
      return;
    }
  }
  const partIdsToParts = new Map();
  for (const staticPart of parts) {
    partIdsToParts.set(staticPart.partId, staticPart);
  }
  // Note that we traverse using `*Child`/`*Sibling` rather than `children` because the browser uses a linked
  // list under the hood to represent the DOM tree, so it's faster to do this than to create an underlying array
  // by calling `children`.
  const {
    nextSibling,
    getFirstChild,
    getParentNode
  } = renderer;
  let numFoundParts = 0;
  let partId = -1;
  // Depth-first traversal. We assign a partId to each element, which is an integer based on traversal order.
  // This function is very hot, which is why it's micro-optimized. Note we don't use a stack at all; we traverse
  // using an algorithm that relies on the parentNode getter: https://stackoverflow.com/a/5285417
  // This is very slightly faster than a TreeWalker (~0.5% on js-framework-benchmark create-10k), but basically
  // the same idea.
  let node = root;
  while (!isNull(node)) {
    // visit node
    partId++;
    const part = partIdsToParts.get(partId);
    if (!isUndefined$1(part)) {
      part.elm = node;
      numFoundParts++;
      if (numFoundParts === numParts) {
        return; // perf optimization - stop traversing once we've found everything we need
      }
    }
    const child = getFirstChild(node);
    if (!isNull(child)) {
      // walk down
      node = child;
    } else {
      let sibling;
      while (isNull(sibling = nextSibling(node))) {
        // walk up
        node = getParentNode(node);
      }
      // walk right
      node = sibling;
    }
  }
}
/**
 * Given an array of static parts, do all the mounting required for these parts.
 * @param root the root element
 * @param vnode the parent VStatic
 * @param renderer the renderer to use
 */
function mountStaticParts(root, vnode, renderer) {
  const {
    parts,
    owner
  } = vnode;
  if (isUndefined$1(parts)) {
    return;
  }
  // This adds `part.elm` to each `part`. We have to do this on every mount because the `parts`
  // array is recreated from scratch every time, so each `part.elm` is now undefined.
  traverseAndSetElements(root, parts, renderer);
  // Currently only event listeners and refs are supported for static vnodes
  for (const part of parts) {
    if (isVStaticPartElement(part)) {
      // Event listeners only need to be applied once when mounting
      applyEventListeners(part, renderer);
      // Refs must be updated after every render due to refVNodes getting reset before every render
      applyRefs(part, owner);
      patchAttributes(null, part, renderer);
      patchClassAttribute(null, part, renderer);
      patchStyleAttribute(null, part, renderer);
    } else {
      patchTextVStaticPart(null, part, renderer);
    }
  }
}
/**
 * Updates the static elements based on the content of the VStaticParts
 * @param n1 the previous VStatic vnode
 * @param n2 the current VStatic vnode
 * @param renderer the renderer to use
 */
function patchStaticParts(n1, n2, renderer) {
  const {
    parts: currParts,
    owner: currPartsOwner
  } = n2;
  if (isUndefined$1(currParts)) {
    return;
  }
  const {
    parts: prevParts
  } = n1;
  for (let i = 0; i < currParts.length; i++) {
    const prevPart = prevParts[i];
    const part = currParts[i];
    // Patch only occurs if the vnode is newly generated, which means the part.elm is always undefined
    // Since the vnode and elements are the same we can safely assume that prevParts[i].elm is defined.
    part.elm = prevPart.elm;
    if (isVStaticPartElement(part)) {
      // Refs must be updated after every render due to refVNodes getting reset before every render
      applyRefs(part, currPartsOwner);
      patchAttributes(prevPart, part, renderer);
      patchClassAttribute(prevPart, part, renderer);
      patchStyleAttribute(prevPart, part, renderer);
    } else {
      patchTextVStaticPart(null, part, renderer);
    }
  }
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function patchChildren(c1, c2, parent, renderer) {
  if (hasDynamicChildren(c2)) {
    updateDynamicChildren(c1, c2, parent, renderer);
  } else {
    updateStaticChildren(c1, c2, parent, renderer);
  }
}
function patch(n1, n2, parent, renderer) {
  if (n1 === n2) {
    return;
  }
  switch (n2.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      patchTextVNode(n1, n2, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      patchComment(n1, n2, renderer);
      break;
    case 4 /* VNodeType.Static */:
      patchStatic(n1, n2, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      patchFragment(n1, n2, parent, renderer);
      break;
    case 2 /* VNodeType.Element */:
      patchElement(n1, n2, n2.data.renderer ?? renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      patchCustomElement(n1, n2, parent, n2.data.renderer ?? renderer);
      break;
  }
}
function mount(node, parent, renderer, anchor) {
  switch (node.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      mountText(node, parent, anchor, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      mountComment(node, parent, anchor, renderer);
      break;
    case 4 /* VNodeType.Static */:
      // VStatic cannot have a custom renderer associated to them, using owner's renderer
      mountStatic(node, parent, anchor, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      mountFragment(node, parent, anchor, renderer);
      break;
    case 2 /* VNodeType.Element */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountElement(node, parent, anchor, node.data.renderer ?? renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountCustomElement(node, parent, anchor, node.data.renderer ?? renderer);
      break;
  }
}
function mountText(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createText
  } = renderer;
  const textNode = vnode.elm = createText(vnode.text);
  linkNodeToShadow(textNode, owner, renderer);
  insertNode(textNode, parent, anchor, renderer);
}
function patchComment(n1, n2, renderer) {
  n2.elm = n1.elm;
  // FIXME: Comment nodes should be static, we shouldn't need to diff them together. However
  // it is the case today.
  if (n2.text !== n1.text) {
    updateTextContent$1(n2, renderer);
  }
}
function mountComment(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createComment
  } = renderer;
  const commentNode = vnode.elm = createComment(vnode.text);
  linkNodeToShadow(commentNode, owner, renderer);
  insertNode(commentNode, parent, anchor, renderer);
}
function mountFragment(vnode, parent, anchor, renderer) {
  const {
    children
  } = vnode;
  mountVNodes(children, parent, renderer, anchor);
  vnode.elm = vnode.leading.elm;
}
function patchFragment(n1, n2, parent, renderer) {
  const {
    children,
    stable
  } = n2;
  if (stable) {
    updateStaticChildren(n1.children, children, parent, renderer);
  } else {
    updateDynamicChildren(n1.children, children, parent, renderer);
  }
  // Note: not reusing n1.elm, because during patching, it may be patched with another text node.
  n2.elm = n2.leading.elm;
}
function mountElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner,
    data: {
      svg
    }
  } = vnode;
  const {
    createElement
  } = renderer;
  const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
  const elm = vnode.elm = createElement(sel, namespace);
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  applyDomManual(elm, vnode);
  patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  mountVNodes(vnode.children, elm, renderer, null);
}
function patchStatic(n1, n2, renderer) {
  n2.elm = n1.elm;
  // slotAssignments can only apply to the top level element, never to a static part.
  patchSlotAssignment(n1, n2, renderer);
  // The `refs` object is blown away in every re-render, so we always need to re-apply them
  patchStaticParts(n1, n2, renderer);
}
function patchElement(n1, n2, renderer) {
  const elm = n2.elm = n1.elm;
  patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
  patchChildren(n1.children, n2.children, elm, renderer);
}
function mountStatic(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    cloneNode,
    isSyntheticShadowDefined
  } = renderer;
  const elm = vnode.elm = cloneNode(vnode.fragment, true);
  // Define the root node shadow resolver
  linkNodeToShadow(elm, owner, renderer);
  const {
    renderMode,
    shadowMode
  } = owner;
  if (isSyntheticShadowDefined) {
    // Marks this node as Static to propagate the shadow resolver. must happen after elm is assigned to the proper shadow
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_STATIC] = true;
    }
  }
  // slotAssignments can only apply to the top level element, never to a static part.
  patchSlotAssignment(null, vnode, renderer);
  mountStaticParts(elm, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
}
function mountCustomElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner,
    ctor
  } = vnode;
  const {
    createCustomElement
  } = renderer;
  /**
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  let vm;
  const upgradeCallback = elm => {
    // the custom element from the registry is expecting an upgrade callback
    vm = createViewModelHook(elm, vnode, renderer);
  };
  // Should never get a tag with upper case letter at this point; the compiler
  // should produce only tags with lowercase letters. However, the Java
  // compiler may generate tagnames with uppercase letters so - for backwards
  // compatibility, we lower case the tagname here.
  const normalizedTagname = sel.toLowerCase();
  const useNativeLifecycle = !lwcRuntimeFlags.DISABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE;
  const isFormAssociated = shouldBeFormAssociated(ctor);
  const elm = createCustomElement(normalizedTagname, upgradeCallback, useNativeLifecycle, isFormAssociated);
  vnode.elm = elm;
  vnode.vm = vm;
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  if (vm) {
    allocateChildren(vnode, vm);
  }
  patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  if (vm) {
    {
      if (!useNativeLifecycle) {
        runConnectedCallback(vm);
      }
    }
  }
  mountVNodes(vnode.children, elm, renderer, null);
  if (vm) {
    appendVM(vm);
  }
}
function patchCustomElement(n1, n2, parent, renderer) {
  // TODO [#3331]: This if branch should be removed in 246 with lwc:dynamic
  if (n1.ctor !== n2.ctor) {
    // If the constructor differs, unmount the current component and mount a new one using the new
    // constructor.
    const anchor = renderer.nextSibling(n1.elm);
    unmount(n1, parent, renderer, true);
    mountCustomElement(n2, parent, anchor, renderer);
  } else {
    // Otherwise patch the existing component with new props/attrs/etc.
    const elm = n2.elm = n1.elm;
    const vm = n2.vm = n1.vm;
    patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
    if (!isUndefined$1(vm)) {
      // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
      allocateChildren(n2, vm);
      // Solves an edge case with slotted VFragments in native shadow mode.
      //
      // During allocation, in native shadow, slotted VFragment nodes are flattened and their text delimiters are removed
      // to avoid interfering with native slot behavior. When this happens, if any of the fragments
      // were not stable, the children must go through the dynamic diffing algo.
      //
      // If the new children (n2.children) contain no VFragments, but the previous children (n1.children) were dynamic,
      // the new nodes must be marked dynamic so that all nodes are properly updated. The only indicator that the new
      // nodes need to be dynamic comes from the previous children, so we check that to determine whether we need to
      // mark the new children dynamic.
      //
      // Example:
      // n1.children: [div, VFragment('', div, null, ''), div] => [div, div, null, div]; // marked dynamic
      // n2.children: [div, null, div] => [div, null, div] // marked ???
      const {
        shadowMode,
        renderMode
      } = vm;
      if (shadowMode == 0 /* ShadowMode.Native */ && renderMode !== 0 /* RenderMode.Light */ && hasDynamicChildren(n1.children)) {
        // No-op if children has already been marked dynamic by 'allocateChildren()'.
        markAsDynamicChildren(n2.children);
      }
    }
    // in fallback mode, the children will be always empty, so, nothing
    // will happen, but in native, it does allocate the light dom
    patchChildren(n1.children, n2.children, elm, renderer);
    if (!isUndefined$1(vm)) {
      // this will probably update the shadowRoot, but only if the vm is in a dirty state
      // this is important to preserve the top to bottom synchronous rendering phase.
      rerenderVM(vm);
    }
  }
}
function mountVNodes(vnodes, parent, renderer, anchor, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const vnode = vnodes[start];
    if (isVNode(vnode)) {
      mount(vnode, parent, renderer, anchor);
    }
  }
}
function unmount(vnode, parent, renderer, doRemove = false) {
  const {
    type,
    elm,
    sel
  } = vnode;
  // When unmounting a VNode subtree not all the elements have to removed from the DOM. The
  // subtree root, is the only element worth unmounting from the subtree.
  if (doRemove && type !== 5 /* VNodeType.Fragment */) {
    // The vnode might or might not have a data.renderer associated to it
    // but the removal used here is from the owner instead.
    removeNode(elm, parent, renderer);
  }
  switch (type) {
    case 5 /* VNodeType.Fragment */:
      {
        unmountVNodes(vnode.children, parent, renderer, doRemove);
        break;
      }
    case 2 /* VNodeType.Element */:
      {
        // Slot content is removed to trigger slotchange event when removing slot.
        // Only required for synthetic shadow.
        const shouldRemoveChildren = sel === 'slot' && vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
        unmountVNodes(vnode.children, elm, renderer, shouldRemoveChildren);
        break;
      }
    case 3 /* VNodeType.CustomElement */:
      {
        const {
          vm
        } = vnode;
        // No need to unmount the children here, `removeVM` will take care of removing the
        // children.
        if (!isUndefined$1(vm)) {
          removeVM(vm);
        }
      }
  }
}
function unmountVNodes(vnodes, parent, renderer, doRemove = false, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const ch = vnodes[start];
    if (isVNode(ch)) {
      unmount(ch, parent, renderer, doRemove);
    }
  }
}
function isVNode(vnode) {
  return vnode != null;
}
function linkNodeToShadow(elm, owner, renderer) {
  const {
    renderRoot,
    renderMode,
    shadowMode
  } = owner;
  const {
    isSyntheticShadowDefined
  } = renderer;
  // TODO [#1164]: this should eventually be done by the polyfill directly
  if (isSyntheticShadowDefined) {
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_RESOLVER] = renderRoot[KEY__SHADOW_RESOLVER];
    }
  }
}
function insertFragmentOrNode(vnode, parent, anchor, renderer) {
  if (isVFragment(vnode)) {
    const children = vnode.children;
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (!isNull(child)) {
        renderer.insert(child.elm, parent, anchor);
      }
    }
  } else {
    renderer.insert(vnode.elm, parent, anchor);
  }
}
function insertNode(node, parent, anchor, renderer) {
  renderer.insert(node, parent, anchor);
}
function removeNode(node, parent, renderer) {
  renderer.remove(node, parent);
}
function patchElementPropsAndAttrsAndRefs$1(oldVnode, vnode, renderer) {
  if (isNull(oldVnode)) {
    applyEventListeners(vnode, renderer);
    applyStaticClassAttribute(vnode, renderer);
    applyStaticStyleAttribute(vnode, renderer);
  }
  const {
    owner
  } = vnode;
  patchDynamicEventListeners(oldVnode, vnode, renderer, owner);
  // Attrs need to be applied to element before props IE11 will wipe out value on radio inputs if
  // value is set before type=radio.
  patchClassAttribute(oldVnode, vnode, renderer);
  patchStyleAttribute(oldVnode, vnode, renderer);
  patchAttributes(oldVnode, vnode, renderer);
  patchProps(oldVnode, vnode, renderer);
  patchSlotAssignment(oldVnode, vnode, renderer);
  // The `refs` object is blown away in every re-render, so we always need to re-apply them
  applyRefs(vnode, owner);
}
function applyStyleScoping(elm, owner, renderer) {
  const {
    getClassList
  } = renderer;
  // Set the class name for `*.scoped.css` style scoping.
  const scopeToken = getScopeTokenClass(owner);
  if (!isNull(scopeToken)) {
    if (!isValidScopeToken(scopeToken)) {
      // See W-16614556
      throw new Error('stylesheet token must be a valid string');
    }
    // TODO [#2762]: this dot notation with add is probably problematic
    // probably we should have a renderer api for just the add operation
    getClassList(elm).add(scopeToken);
  }
  // Set property element for synthetic shadow DOM style scoping.
  const {
    stylesheetToken: syntheticToken
  } = owner.context;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
    if (!isUndefined$1(syntheticToken)) {
      elm.$shadowToken$ = syntheticToken;
    }
  }
}
function applyDomManual(elm, vnode) {
  const {
    owner,
    data: {
      context
    }
  } = vnode;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */ && context?.lwc?.dom === 'manual') {
    elm.$domManual$ = true;
  }
}
function allocateChildren(vnode, vm) {
  // A component with slots will re-render because:
  // 1- There is a change of the internal state.
  // 2- There is a change on the external api (ex: slots)
  //
  // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
  // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
  // in a reused VCustomElement, there won't be any slotted children.
  // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
  //
  // In case #2, we will always get a fresh VCustomElement.
  const children = vnode.aChildren || vnode.children;
  const {
    renderMode,
    shadowMode
  } = vm;
  // If any of the children being allocated are VFragments, we remove the text delimiters and flatten all immediate
  // children VFragments to avoid them interfering with default slot behavior.
  const allocatedChildren = flattenFragmentsInChildren(children);
  vnode.children = allocatedChildren;
  vm.aChildren = allocatedChildren;
  if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
    // slow path
    allocateInSlot(vm, allocatedChildren, vnode.owner);
    // save the allocated children in case this vnode is reused.
    vnode.aChildren = allocatedChildren;
    // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!
    vnode.children = EmptyArray;
  }
}
/**
 * Flattens the contents of all VFragments in an array of VNodes, removes the text delimiters on those VFragments, and
 * marks the resulting children array as dynamic. Uses a stack (array) to iteratively traverse the nested VFragments
 * and avoid the perf overhead of creating/destroying throwaway arrays/objects in a recursive approach.
 *
 * With the delimiters removed, the contents are marked dynamic so they are diffed correctly.
 *
 * This function is used for slotted VFragments to avoid the text delimiters interfering with slotting functionality.
 * @param children
 */
function flattenFragmentsInChildren(children) {
  const flattenedChildren = [];
  // Initialize our stack with the direct children of the custom component and check whether we have a VFragment.
  // If no VFragment is found in children, we don't need to traverse anything or mark the children dynamic and can return early.
  const nodeStack = [];
  let fragmentFound = false;
  for (let i = children.length - 1; i > -1; i -= 1) {
    const child = children[i];
    ArrayPush$1.call(nodeStack, child);
    fragmentFound = fragmentFound || !!(child && isVFragment(child));
  }
  if (!fragmentFound) {
    return children;
  }
  let currentNode;
  while (!isUndefined$1(currentNode = ArrayPop.call(nodeStack))) {
    if (!isNull(currentNode) && isVFragment(currentNode)) {
      const fChildren = currentNode.children;
      // Ignore the start and end text node delimiters
      for (let i = fChildren.length - 2; i > 0; i -= 1) {
        ArrayPush$1.call(nodeStack, fChildren[i]);
      }
    } else {
      ArrayPush$1.call(flattenedChildren, currentNode);
    }
  }
  // We always mark the children as dynamic because nothing generates stable VFragments yet.
  // If/when stable VFragments are generated by the compiler, this code should be updated to
  // not mark dynamic if all flattened VFragments were stable.
  markAsDynamicChildren(flattenedChildren);
  return flattenedChildren;
}
function createViewModelHook(elm, vnode, renderer) {
  let vm = getAssociatedVMIfPresent(elm);
  // There is a possibility that a custom element is registered under tagName, in which case, the
  // initialization is already carry on, and there is nothing else to do here since this hook is
  // called right after invoking `document.createElement`.
  if (!isUndefined$1(vm)) {
    return vm;
  }
  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  vm = createVM(elm, ctor, renderer, {
    mode,
    owner,
    tagName: sel
  });
  return vm;
}
function allocateInSlot(vm, children, owner) {
  const {
    cmpSlots: {
      slotAssignments: oldSlotsMapping
    }
  } = vm;
  const cmpSlotsMapping = create(null);
  // Collect all slots into cmpSlotsMapping
  for (let i = 0, len = children.length; i < len; i += 1) {
    const vnode = children[i];
    if (isNull(vnode)) {
      continue;
    }
    let slotName = '';
    if (isVBaseElement(vnode) || isVStatic(vnode)) {
      slotName = vnode.slotAssignment ?? '';
    } else if (isVScopedSlotFragment(vnode)) {
      slotName = vnode.slotName;
    }
    // Can't use toString here because Symbol(1).toString() is 'Symbol(1)'
    // but elm.setAttribute('slot', Symbol(1)) is an error.
    // the following line also throws same error for symbols
    // Similar for Object.create(null)
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    const normalizedSlotName = '' + slotName;
    const vnodes = cmpSlotsMapping[normalizedSlotName] = cmpSlotsMapping[normalizedSlotName] || [];
    ArrayPush$1.call(vnodes, vnode);
  }
  vm.cmpSlots = {
    owner,
    slotAssignments: cmpSlotsMapping
  };
  if (isFalse(vm.isDirty)) {
    // We need to determine if the old allocation is really different from the new one
    // and mark the vm as dirty
    const oldKeys = keys(oldSlotsMapping);
    if (oldKeys.length !== keys(cmpSlotsMapping).length) {
      markComponentAsDirty(vm);
      return;
    }
    for (let i = 0, len = oldKeys.length; i < len; i += 1) {
      const key = oldKeys[i];
      if (isUndefined$1(cmpSlotsMapping[key]) || oldSlotsMapping[key].length !== cmpSlotsMapping[key].length) {
        markComponentAsDirty(vm);
        return;
      }
      const oldVNodes = oldSlotsMapping[key];
      const vnodes = cmpSlotsMapping[key];
      for (let j = 0, a = cmpSlotsMapping[key].length; j < a; j += 1) {
        if (oldVNodes[j] !== vnodes[j]) {
          markComponentAsDirty(vm);
          return;
        }
      }
    }
  }
}
const DynamicChildren = new WeakSet();
// dynamic children means it was either generated by an iteration in a template
// or part of an unstable fragment, and will require a more complex diffing algo.
function markAsDynamicChildren(children) {
  DynamicChildren.add(children);
}
function hasDynamicChildren(children) {
  return DynamicChildren.has(children);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  const map = {};
  for (let j = beginIdx; j <= endIdx; ++j) {
    const ch = children[j];
    if (isVNode(ch)) {
      const {
        key
      } = ch;
      if (key !== undefined) {
        map[key] = j;
      }
    }
  }
  return map;
}
function updateDynamicChildren(oldCh, newCh, parent, renderer) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  const newChEnd = newCh.length - 1;
  let newEndIdx = newChEnd;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx;
  let idxInOld;
  let elmToMove;
  let before;
  let clonedOldCh = false;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!isVNode(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
    } else if (!isVNode(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!isVNode(newStartVnode)) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!isVNode(newEndVnode)) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode, parent, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode, parent, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patch(oldStartVnode, newEndVnode, parent, renderer);
      // In the case of fragments, the `elm` property of a vfragment points to the leading
      // anchor. To determine the next sibling of the whole fragment, we need to use the
      // trailing anchor as the argument to nextSibling():
      // [..., [leading, ...content, trailing], nextSibling, ...]
      let anchor;
      if (isVFragment(oldEndVnode)) {
        anchor = renderer.nextSibling(oldEndVnode.trailing.elm);
      } else {
        anchor = renderer.nextSibling(oldEndVnode.elm);
      }
      insertFragmentOrNode(oldStartVnode, parent, anchor, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patch(oldEndVnode, newStartVnode, parent, renderer);
      insertFragmentOrNode(newStartVnode, parent, oldStartVnode.elm, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }
      idxInOld = oldKeyToIdx[newStartVnode.key];
      if (isUndefined$1(idxInOld)) {
        // New element
        mount(newStartVnode, parent, renderer, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];
        if (isVNode(elmToMove)) {
          if (elmToMove.sel !== newStartVnode.sel) {
            // New element
            mount(newStartVnode, parent, renderer, oldStartVnode.elm);
          } else {
            patch(elmToMove, newStartVnode, parent, renderer);
            // Delete the old child, but copy the array since it is read-only.
            // The `oldCh` will be GC'ed after `updateDynamicChildren` is complete,
            // so we only care about the `oldCh` object inside this function.
            // To avoid cloning over and over again, we check `clonedOldCh`
            // and only clone once.
            if (!clonedOldCh) {
              clonedOldCh = true;
              oldCh = [...oldCh];
            }
            // We've already cloned at least once, so it's no longer read-only
            oldCh[idxInOld] = undefined;
            insertFragmentOrNode(elmToMove, parent, oldStartVnode.elm, renderer);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
  }
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
      // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
      let i = newEndIdx;
      let n;
      do {
        n = newCh[++i];
      } while (!isVNode(n) && i < newChEnd);
      before = isVNode(n) ? n.elm : null;
      mountVNodes(newCh, parent, renderer, before, newStartIdx, newEndIdx + 1);
    } else {
      unmountVNodes(oldCh, parent, renderer, true, oldStartIdx, oldEndIdx + 1);
    }
  }
}
function updateStaticChildren(c1, c2, parent, renderer) {
  const c1Length = c1.length;
  const c2Length = c2.length;
  if (c1Length === 0) {
    // the old list is empty, we can directly insert anything new
    mountVNodes(c2, parent, renderer, null);
    return;
  }
  if (c2Length === 0) {
    // the old list is nonempty and the new list is empty so we can directly remove all old nodes
    // this is the case in which the dynamic children of an if-directive should be removed
    unmountVNodes(c1, parent, renderer, true);
    return;
  }
  // if the old list is not empty, the new list MUST have the same
  // amount of nodes, that's why we call this static children
  let anchor = null;
  for (let i = c2Length - 1; i >= 0; i -= 1) {
    const n1 = c1[i];
    const n2 = c2[i];
    if (n2 !== n1) {
      if (isVNode(n1)) {
        if (isVNode(n2)) {
          if (isSameVnode(n1, n2)) {
            // both vnodes are equivalent, and we just need to patch them
            patch(n1, n2, parent, renderer);
            anchor = n2.elm;
          } else {
            // removing the old vnode since the new one is different
            unmount(n1, parent, renderer, true);
            mount(n2, parent, renderer, anchor);
            anchor = n2.elm;
          }
        } else {
          // removing the old vnode since the new one is null
          unmount(n1, parent, renderer, true);
        }
      } else if (isVNode(n2)) {
        mount(n2, parent, renderer, anchor);
        anchor = n2.elm;
      }
    }
  }
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const SymbolIterator = Symbol.iterator;
function addVNodeToChildLWC(vnode) {
  ArrayPush$1.call(getVMBeingRendered().velements, vnode);
}
// [s]tatic [p]art
function sp(partId, data, text) {
  // Static part will always have either text or data, it's guaranteed by the compiler.
  const type = isNull(text) ? 1 /* VStaticPartType.Element */ : 0 /* VStaticPartType.Text */;
  return {
    type,
    partId,
    data,
    text,
    elm: undefined // elm is defined later
  };
}
// [s]coped [s]lot [f]actory
function ssf(slotName, factory) {
  return {
    type: 6 /* VNodeType.ScopedSlotFragment */,
    factory,
    owner: getVMBeingRendered(),
    elm: undefined,
    sel: '__scoped_slot_fragment__',
    key: undefined,
    slotName
  };
}
// [st]atic node
function st(fragmentFactory, key, parts) {
  const owner = getVMBeingRendered();
  const fragment = fragmentFactory(parts);
  const vnode = {
    type: 4 /* VNodeType.Static */,
    sel: '__static__',
    key,
    elm: undefined,
    fragment,
    owner,
    parts,
    slotAssignment: undefined
  };
  return vnode;
}
// [fr]agment node
function fr(key, children, stable) {
  const owner = getVMBeingRendered();
  const useCommentNodes = isAPIFeatureEnabled(5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */, owner.apiVersion);
  const leading = useCommentNodes ? co('') : t('');
  const trailing = useCommentNodes ? co('') : t('');
  return {
    type: 5 /* VNodeType.Fragment */,
    sel: '__fragment__',
    key,
    elm: undefined,
    children: [leading, ...children, trailing],
    stable,
    owner,
    leading,
    trailing
  };
}
// [h]tml node
function h(sel, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  const {
    key,
    slotAssignment
  } = data;
  const vnode = {
    type: 2 /* VNodeType.Element */,
    sel,
    data,
    children,
    elm: undefined,
    key,
    owner: vmBeingRendered,
    slotAssignment
  };
  return vnode;
}
// [t]ab[i]ndex function
function ti(value) {
  // if value is greater than 0, we normalize to 0
  // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
  // If value is less than -1, we don't care
  const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));
  return shouldNormalize ? 0 : value;
}
// [s]lot element node
function s(slotName, data, children, slotset) {
  const vmBeingRendered = getVMBeingRendered();
  const {
    renderMode,
    apiVersion
  } = vmBeingRendered;
  if (!isUndefined$1(slotset) && !isUndefined$1(slotset.slotAssignments) && !isUndefined$1(slotset.slotAssignments[slotName]) && slotset.slotAssignments[slotName].length !== 0) {
    const newChildren = [];
    const slotAssignments = slotset.slotAssignments[slotName];
    for (let i = 0; i < slotAssignments.length; i++) {
      const vnode = slotAssignments[i];
      if (!isNull(vnode)) {
        const assignedNodeIsScopedSlot = isVScopedSlotFragment(vnode);
        // The only sniff test for a scoped <slot> element is the presence of `slotData`
        const isScopedSlotElement = !isUndefined$1(data.slotData);
        // Check if slot types of parent and child are matching
        if (assignedNodeIsScopedSlot !== isScopedSlotElement) {
          // Ignore slot content from parent
          continue;
        }
        // If the passed slot content is factory, evaluate it and add the produced vnodes
        if (assignedNodeIsScopedSlot) {
          // Evaluate in the scope of the slot content's owner
          // if a slotset is provided, there will always be an owner. The only case where owner is
          // undefined is for root components, but root components cannot accept slotted content
          setVMBeingRendered(slotset.owner);
          try {
            // The factory function is a template snippet from the slot set owner's template,
            // hence switch over to the slot set owner's template reactive observer
            const {
              tro
            } = slotset.owner;
            tro.observe(() => {
              ArrayPush$1.call(newChildren, vnode.factory(data.slotData, data.key));
            });
          } finally {
            setVMBeingRendered(vmBeingRendered);
          }
        } else {
          // This block is for standard slots (non-scoped slots)
          let clonedVNode;
          if (renderMode === 0 /* RenderMode.Light */ && isAPIFeatureEnabled(6 /* APIFeature.USE_LIGHT_DOM_SLOT_FORWARDING */, apiVersion) && (isVBaseElement(vnode) || isVStatic(vnode)) && vnode.slotAssignment !== data.slotAssignment) {
            // When the light DOM slot assignment (slot attribute) changes, we can't use the same reference
            // to the vnode because the current way the diffing algo works, it will replace the original
            // reference to the host element with a new one. This means the new element will be mounted and
            // immediately unmounted. Creating a copy of the vnode preserves a reference to the previous
            // host element.
            clonedVNode = {
              ...vnode,
              slotAssignment: data.slotAssignment
            };
            // For disconnectedCallback to work correctly in synthetic lifecycle mode, we need to link the
            // current VM's velements to the clone, so that when the VM unmounts, the clone also unmounts.
            // Note this only applies to VCustomElements, since those are the elements that we manually need
            // to call disconnectedCallback for, when running in synthetic lifecycle mode.
            //
            // You might think it would make more sense to add the clonedVNode to the same velements array
            // as the original vnode's VM (i.e. `vnode.owner.velements`) rather than the current VM (i.e.
            // `vmBeingRendered.velements`), but this actually might not trigger disconnectedCallback
            // in synthetic lifecycle mode. The reason for this is that a reactivity change may cause
            // the slottable component to unmount, but _not_ the slotter component (see issue #4446).
            //
            // If this occurs, then the slottable component (i.e .this component we are rendering right
            // now) is the one that needs to own the clone. Whereas if a reactivity change higher in the
            // tree causes the slotter to unmount, then the slottable will also unmount. So using the
            // current VM works either way.
            if (isVCustomElement(vnode)) {
              addVNodeToChildLWC(clonedVNode);
            }
          }
          // If the slot content is standard type, the content is static, no additional
          // processing needed on the vnode
          ArrayPush$1.call(newChildren, clonedVNode ?? vnode);
        }
      }
    }
    children = newChildren;
  }
  const {
    shadowMode
  } = vmBeingRendered;
  if (renderMode === 0 /* RenderMode.Light */) {
    // light DOM slots - backwards-compatible behavior uses flattening, new behavior uses fragments
    if (isAPIFeatureEnabled(2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */, apiVersion)) {
      return fr(data.key, children, 0);
    } else {
      sc(children);
      return children;
    }
  }
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
    sc(children);
  }
  return h('slot', data, children);
}
// [c]ustom element node
function c(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  const {
    key,
    slotAssignment
  } = data;
  const vnode = {
    type: 3 /* VNodeType.CustomElement */,
    sel,
    data,
    children,
    elm: undefined,
    key,
    slotAssignment,
    ctor: Ctor,
    owner: vmBeingRendered,
    mode: 'open',
    // TODO [#1294]: this should be defined in Ctor
    aChildren: undefined,
    vm: undefined
  };
  addVNodeToChildLWC(vnode);
  return vnode;
}
// [i]terable node
function i(iterable, factory) {
  const list = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(list);
  if (isUndefined$1(iterable) || isNull(iterable)) {
    return list;
  }
  const iterator = iterable[SymbolIterator]();
  let next = iterator.next();
  let j = 0;
  let {
    value,
    done: last
  } = next;
  while (last === false) {
    // implementing a look-back-approach because we need to know if the element is the last
    next = iterator.next();
    last = next.done;
    // template factory logic based on the previous collected value
    const vnode = factory(value, j, j === 0, last === true);
    if (isArray$1(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      // `isArray` doesn't narrow this block properly...
      ArrayPush$1.call(list, vnode);
    }
    // preparing next value
    j += 1;
    value = next.value;
  }
  return list;
}
/**
 * [f]lattening
 * @param items
 */
function f(items) {
  const len = items.length;
  const flattened = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(flattened);
  for (let j = 0; j < len; j += 1) {
    const item = items[j];
    if (isArray$1(item)) {
      ArrayPush$1.apply(flattened, item);
    } else {
      // `isArray` doesn't narrow this block properly...
      ArrayPush$1.call(flattened, item);
    }
  }
  return flattened;
}
// [t]ext node
function t(text) {
  return {
    type: 0 /* VNodeType.Text */,
    sel: '__text__',
    text,
    elm: undefined,
    key: undefined,
    owner: getVMBeingRendered()
  };
}
// [co]mment node
function co(text) {
  return {
    type: 1 /* VNodeType.Comment */,
    sel: '__comment__',
    text,
    elm: undefined,
    key: undefined,
    owner: getVMBeingRendered()
  };
}
// [d]ynamic text
function d(value) {
  return value == null ? '' : String(value);
}
// [b]ind function
function b(fn) {
  const vmBeingRendered = getVMBeingRendered();
  if (isNull(vmBeingRendered)) {
    throw new Error();
  }
  const vm = vmBeingRendered;
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
}
// [k]ey function
function k(compilerKey, obj) {
  switch (typeof obj) {
    case 'number':
    case 'string':
      return compilerKey + ':' + obj;
  }
}
// [g]lobal [id] function
function gid(id) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(id) || id === '') {
    return id;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(id)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
  }
  return id;
}
// [f]ragment [id] function
function fid(url) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(url) || url === '') {
    return url;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(url)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  // Apply transformation only for fragment-only-urls, and only in shadow DOM
  if (shadowMode === 1 /* ShadowMode.Synthetic */ && /^#/.test(url)) {
    return `${url}-${idx}`;
  }
  return url;
}
/**
 * [ddc] - create a (deprecated) dynamic component via `<x-foo lwc:dynamic={Ctor}>`
 *
 * TODO [#3331]: remove usage of lwc:dynamic in 246
 * @param sel
 * @param Ctor
 * @param data
 * @param children
 */
function ddc(sel, Ctor, data, children = EmptyArray) {
  // null or undefined values should produce a null value in the VNodes
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid LWC Constructor ${toString(Ctor)} for custom element <${sel}>.`);
  }
  return c(sel, Ctor, data, children);
}
/**
 * [dc] - create a dynamic component via `<lwc:component lwc:is={Ctor}>`
 * @param Ctor
 * @param data
 * @param children
 */
function dc(Ctor, data, children = EmptyArray) {
  // Null or undefined values should produce a null value in the VNodes.
  // This is the only value at compile time as the constructor will not be known.
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid constructor: "${toString(Ctor)}" is not a LightningElement constructor.`);
  }
  // Look up the dynamic component's name at runtime once the constructor is available.
  // This information is only known at runtime and is stored as part of registerComponent.
  const sel = getComponentRegisteredName(Ctor);
  if (isUndefined$1(sel) || sel === '') {
    throw new Error(`Invalid LWC constructor ${toString(Ctor)} does not have a registered name`);
  }
  return c(sel, Ctor, data, children);
}
/**
 * slow children collection marking mechanism. this API allows the compiler to signal
 * to the engine that a particular collection of children must be diffed using the slow
 * algo based on keys due to the nature of the list. E.g.:
 *
 * - slot element's children: the content of the slot has to be dynamic when in synthetic
 * shadow mode because the `vnode.children` might be the slotted
 * content vs default content, in which case the size and the
 * keys are not matching.
 * - children that contain dynamic components
 * - children that are produced by iteration
 * @param vnodes
 */
function sc(vnodes) {
  // We have to mark the vnodes collection as dynamic so we can later on
  // choose to use the snabbdom virtual dom diffing algo instead of our
  // static dummy algo.
  markAsDynamicChildren(vnodes);
  return vnodes;
}
// [s]anitize [h]tml [c]ontent
function shc(content) {
  const sanitizedString = sanitizeHtmlContent();
  return createSanitizedHtmlContent(sanitizedString);
}
const ncls = normalizeClass;
const api = freeze({
  s,
  h,
  c,
  i,
  f,
  t,
  d,
  b,
  k,
  co,
  dc,
  fr,
  ti,
  st,
  gid,
  fid,
  shc,
  ssf,
  ddc,
  sp,
  ncls
});

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// HAS_SCOPED_STYLE | SHADOW_MODE_SYNTHETIC = 3
const MAX_CACHE_KEY = 3;
// Mapping of cacheKeys to `string[]` (assumed to come from a tagged template literal) to an Element.
// Note that every unique tagged template literal will have a unique `string[]`. So by using `string[]`
// as the WeakMap key, we effectively associate each Element with a unique tagged template literal.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// Also note that this array only needs to be large enough to account for the maximum possible cache key
const fragmentCache = ArrayFrom({
  length: MAX_CACHE_KEY + 1
}, () => new WeakMap());
function getFromFragmentCache(cacheKey, strings) {
  return fragmentCache[cacheKey].get(strings);
}
function setInFragmentCache(cacheKey, strings, element) {
  fragmentCache[cacheKey].set(strings, element);
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isUpdatingTemplate = false;
let vmBeingRendered = null;
function getVMBeingRendered() {
  return vmBeingRendered;
}
function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}
function validateSlots(vm) {
  assertNotProd(); // this method should never leak to prod
  const {
    cmpSlots
  } = vm;
  for (const slotName in cmpSlots.slotAssignments) {
    assert.isTrue(isArray$1(cmpSlots.slotAssignments[slotName]), `Slots can only be set to an array, instead received ${toString(cmpSlots.slotAssignments[slotName])} for slot "${slotName}" in ${vm}.`);
  }
}
function checkHasMatchingRenderMode(template, vm) {
  // don't validate in prod environments where reporting is disabled
  if (!isReportingEnabled()) {
    return;
  }
  // don't validate the default empty template - it is not inherently light or shadow
  if (template === defaultEmptyTemplate) {
    return;
  }
  // TODO [#4663]: `renderMode` mismatch between template and component causes `console.error` but no error
  // Note that `undefined` means shadow in this case, because shadow is the default.
  const vmIsLight = vm.renderMode === 0 /* RenderMode.Light */;
  const templateIsLight = template.renderMode === 'light';
  if (vmIsLight !== templateIsLight) {
    report("RenderModeMismatch" /* ReportingEventId.RenderModeMismatch */, {
      tagName: vm.tagName,
      mode: vm.renderMode
    });
  }
}
const browserExpressionSerializer = (partToken, classAttrToken) => {
  // This will insert the scoped style token as a static class attribute in the fragment
  // bypassing the need to call applyStyleScoping when mounting static parts.
  const type = StringCharAt.call(partToken, 0);
  switch (type) {
    case "c" /* STATIC_PART_TOKEN_ID.CLASS */:
      return classAttrToken;
    case "t" /* STATIC_PART_TOKEN_ID.TEXT */:
      // Using a single space here gives us a single empty text node
      return ' ';
    default:
      return '';
  }
};
// This function serializes the expressions generated by static content optimization.
// Currently this is only needed for SSR.
// TODO [#4078]: Split the implementation between @lwc/engine-dom and @lwc/engine-server
function buildSerializeExpressionFn(parts) {
  {
    return browserExpressionSerializer;
  }
}
function buildParseFragmentFn(createFragmentFn) {
  return function parseFragment(strings, ...keys) {
    return function applyFragmentParts(parts) {
      const {
        context: {
          hasScopedStyles,
          stylesheetToken
        },
        shadowMode,
        renderer
      } = getVMBeingRendered();
      const hasStyleToken = !isUndefined$1(stylesheetToken);
      const isSyntheticShadow = shadowMode === 1 /* ShadowMode.Synthetic */;
      let cacheKey = 0;
      if (hasStyleToken && hasScopedStyles) {
        cacheKey |= 1 /* FragmentCacheKey.HAS_SCOPED_STYLE */;
      }
      if (hasStyleToken && isSyntheticShadow) {
        cacheKey |= 2 /* FragmentCacheKey.SHADOW_MODE_SYNTHETIC */;
      }
      // Cache is only here to prevent calling innerHTML multiple times which doesn't happen on the server.
      {
        // Disable this on the server to prevent cache poisoning when expressions are used.
        const cached = getFromFragmentCache(cacheKey, strings);
        if (!isUndefined$1(cached)) {
          return cached;
        }
      }
      // See W-16614556
      // TODO [#2826]: freeze the template object
      if (hasStyleToken && !isValidScopeToken(stylesheetToken)) {
        throw new Error('stylesheet token must be a valid string');
      }
      const classToken = hasScopedStyles && hasStyleToken ? ' ' + stylesheetToken : '';
      const classAttrToken = hasScopedStyles && hasStyleToken ? ` class="${stylesheetToken}"` : '';
      const attrToken = hasStyleToken && isSyntheticShadow ? ' ' + stylesheetToken : '';
      // In the browser, we provide the entire class attribute as a perf optimization to avoid applying it on mount.
      // The remaining class expression will be applied when the static parts are mounted.
      // In SSR, the entire class attribute (expression included) is assembled along with the fragment.
      // This is why in the browser we provide the entire class attribute and in SSR we only provide the class token.
      const exprClassToken = classAttrToken;
      // TODO [#3624]: The implementation of this function should be specific to @lwc/engine-dom and @lwc/engine-server.
      // Find a way to split this in a future refactor.
      const serializeExpression = buildSerializeExpressionFn();
      let htmlFragment = '';
      for (let i = 0, n = keys.length; i < n; i++) {
        switch (keys[i]) {
          case 0:
            // styleToken in existing class attr
            htmlFragment += strings[i] + classToken;
            break;
          case 1:
            // styleToken for added class attr
            htmlFragment += strings[i] + classAttrToken;
            break;
          case 2:
            // styleToken as attr
            htmlFragment += strings[i] + attrToken;
            break;
          case 3:
            // ${1}${2}
            htmlFragment += strings[i] + classAttrToken + attrToken;
            break;
          default:
            // expressions ${partId:attributeName/textId}
            htmlFragment += strings[i] + serializeExpression(keys[i], exprClassToken);
            break;
        }
      }
      htmlFragment += strings[strings.length - 1];
      const element = createFragmentFn(htmlFragment, renderer);
      // Cache is only here to prevent calling innerHTML multiple times which doesn't happen on the server.
      {
        setInFragmentCache(cacheKey, strings, element);
      }
      return element;
    };
  };
}
// Note: at the moment this code executes, we don't have a renderer yet.
const parseFragment = buildParseFragmentFn((html, renderer) => {
  const {
    createFragment
  } = renderer;
  return createFragment(maybeSanitizeHtmlContent(html));
});
function evaluateTemplate(vm, html) {
  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    // pre
    vmBeingRendered = vm;
  }, () => {
    // job
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro
    } = vm;
    tro.observe(() => {
      // Reset the cache memoizer for template when needed.
      if (html !== cmpTemplate) {
        // Check that the template was built by the compiler.
        if (!isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm.tagName}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString(html)}.`);
        }
        checkHasMatchingRenderMode(html, vm);
        // Perf opt: do not reset the shadow root during the first rendering (there is
        // nothing to reset).
        if (!isNull(cmpTemplate)) {
          // It is important to reset the content to avoid reusing similar elements
          // generated from a different template, because they could have similar IDs,
          // and snabbdom just rely on the IDs.
          resetComponentRoot(vm);
        }
        vm.cmpTemplate = html;
        // Create a brand new template cache for the swapped templated.
        context.tplCache = create(null);
        // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.
        context.hasScopedStyles = computeHasScopedStyles(html, vm);
        // Update the scoping token on the host element.
        updateStylesheetToken(vm, html);
        // Evaluate, create stylesheet and cache the produced VNode for future
        // re-rendering.
        const stylesheetsContent = getStylesheetsContent(vm, html);
        context.styleVNodes = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
      }
      if ("production" !== 'production') ;
      // right before producing the vnodes, we clear up all internal references
      // to custom elements from the template.
      vm.velements = [];
      // Set the global flag that template is being updated
      isUpdatingTemplate = true;
      vnodes = Reflect.apply(html, undefined, [api, component, cmpSlots, context.tplCache]);
      const {
        styleVNodes
      } = context;
      if (!isNull(styleVNodes)) {
        // It's important here not to mutate the underlying `vnodes` returned from the template invocation.
        // The reason for this is because, due to the static content optimization, the vnodes array
        // may be a static array shared across multiple component instances. E.g. this occurs in the
        // case of an empty `<template></template>` in a `component.html` file, due to the underlying
        // children being `[]` (no children). If we append the `<style>` vnode to this array, then the same
        // array will be reused for every component instance, i.e. whenever `tmpl()` is called.
        vnodes = [...styleVNodes, ...vnodes];
      }
    });
  }, () => {
    // post
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;
  });
  return vnodes;
}
function computeHasScopedStylesInStylesheets(stylesheets) {
  if (hasStyles(stylesheets)) {
    for (let i = 0; i < stylesheets.length; i++) {
      if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
        return true;
      }
    }
  }
  return false;
}
function computeHasScopedStyles(template, vm) {
  const {
    stylesheets
  } = template;
  const vmStylesheets = !isUndefined$1(vm) ? vm.stylesheets : null;
  return computeHasScopedStylesInStylesheets(stylesheets) || computeHasScopedStylesInStylesheets(vmStylesheets);
}
function hasStyles(stylesheets) {
  return !isUndefined$1(stylesheets) && !isNull(stylesheets) && stylesheets.length > 0;
}
let vmBeingConstructed = null;
function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}
function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    callHook(component, fn, args);
  }, noop);
}
function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;
  vmBeingConstructed = vm;
  /**
   * Constructors don't need to be wrapped with a boundary because for root elements
   * it should throw, while elements from template are already wrapped by a boundary
   * associated to the diffing algo.
   */
  try {
    // job
    const result = new Ctor();
    // When strict, reject when the constructor returns a *native* HTMLElement — that is,
    // result instanceof HTMLElement.
    const useStrictValidation = !lwcRuntimeFlags.DISABLE_STRICT_VALIDATION && true;
    const isMismatchedConstructor = vmBeingConstructed.component !== result;
    const isInvalidConstructor = isMismatchedConstructor || useStrictValidation && result instanceof HTMLElement;
    if (isInvalidConstructor) {
      throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
    }
  } catch (e) {
    error = Object(e);
  } finally {
    vmBeingConstructed = vmBeingConstructedInception;
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      // re-throwing the original error annotated after restoring the context
      throw error; // eslint-disable-line no-unsafe-finally
    }
  }
}
function invokeComponentRenderMethod(vm) {
  const {
    def: {
      render
    },
    callHook,
    component,
    owner
  } = vm;
  const vmBeingRenderedInception = getVMBeingRendered();
  let html;
  let renderInvocationSuccessful = false;
  runWithBoundaryProtection(vm, owner, () => {
    setVMBeingRendered(vm);
  }, () => {
    // job
    vm.tro.observe(() => {
      html = callHook(component, render);
      renderInvocationSuccessful = true;
    });
  }, () => {
    setVMBeingRendered(vmBeingRenderedInception);
  });
  // If render() invocation failed, process errorCallback in boundary and return an empty template
  return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
}
function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    // job
    if ("production" !== 'production') ;
    callHook(thisValue, fn, [event]);
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const registeredComponentMap = new Map();
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 * @param Ctor
 * @param metadata
 */
function registerComponent(
// We typically expect a LightningElementConstructor, but technically you can call this with anything
Ctor, metadata) {
  if (isFunction$1(Ctor)) {
    // TODO [#3331]: add validation to check the value of metadata.sel is not an empty string.
    registeredComponentMap.set(Ctor, metadata);
  }
  // chaining this method as a way to wrap existing assignment of component constructor easily,
  // without too much transformation
  return Ctor;
}
function getComponentRegisteredTemplate(Ctor) {
  return registeredComponentMap.get(Ctor)?.tmpl;
}
function getComponentRegisteredName(Ctor) {
  return registeredComponentMap.get(Ctor)?.sel;
}
function getComponentAPIVersion(Ctor) {
  const metadata = registeredComponentMap.get(Ctor);
  const apiVersion = metadata?.apiVersion;
  if (isUndefined$1(apiVersion)) {
    // This should only occur in our integration tests; in practice every component
    // is registered, and so this code path should not get hit. But to be safe,
    // return the lowest possible version.
    return LOWEST_API_VERSION;
  }
  return apiVersion;
}
function supportsSyntheticElementInternals(Ctor) {
  return registeredComponentMap.get(Ctor)?.enableSyntheticElementInternals || false;
}
function isComponentFeatureEnabled(Ctor) {
  const flag = registeredComponentMap.get(Ctor)?.componentFeatureFlag;
  // Default to true if not provided
  return flag?.value !== false;
}
function getComponentMetadata(Ctor) {
  return registeredComponentMap.get(Ctor);
}
function getTemplateReactiveObserver(vm) {
  const reactiveObserver = createReactiveObserver(() => {
    const {
      isDirty
    } = vm;
    if (isFalse(isDirty)) {
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  });
  return reactiveObserver;
}
function resetTemplateObserverAndUnsubscribe(vm) {
  const {
    tro,
    component
  } = vm;
  tro.reset();
  // Unsubscribe every time the template reactive observer is reset.
  if (lwcRuntimeFlags.ENABLE_EXPERIMENTAL_SIGNALS) {
    unsubscribeFromSignals(component);
  }
}
function renderComponent(vm) {
  // The engine should only hold a subscription to a signal if it is rendered in the template.
  // Because of the potential presence of conditional rendering logic, we unsubscribe on each render
  // in the scenario where it is present in one condition but not the other.
  // For example:
  // 1. There is an lwc:if=true conditional where the signal is present on the template.
  // 2. The lwc:if changes to false and the signal is no longer present on the template.
  // If the signal is still subscribed to, the template will re-render when it receives a notification
  // from the signal, even though we won't be using the new value.
  resetTemplateObserverAndUnsubscribe(vm);
  const vnodes = invokeComponentRenderMethod(vm);
  vm.isDirty = false;
  vm.isScheduled = false;
  return vnodes;
}
function markComponentAsDirty(vm) {
  vm.isDirty = true;
}
const cmpEventListenerMap = new WeakMap();
function getWrappedComponentsListener(vm, listener) {
  if (!isFunction$1(listener)) {
    throw new TypeError('Expected an EventListener but received ' + typeof listener); // avoiding problems with non-valid listeners
  }
  let wrappedListener = cmpEventListenerMap.get(listener);
  if (isUndefined$1(wrappedListener)) {
    wrappedListener = function (event) {
      invokeEventListener(vm, listener, undefined, event);
    };
    cmpEventListenerMap.set(listener, wrappedListener);
  }
  return wrappedListener;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (typeof state === "function" ? receiver !== state || true : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return state.set(receiver, value), value;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var _ContextBinding_renderer, _ContextBinding_providedContextVarieties, _ContextBinding_elm;
// Provider-listener teardowns per VM, registered on connect and invoked on disconnect. Without this
// the listener closures retain the detached component after every mount/unmount.
const contextProviderUnregisters = new WeakMap();
class ContextBinding {
  constructor(vm, component, providedContextVarieties) {
    _ContextBinding_renderer.set(this, void 0);
    _ContextBinding_providedContextVarieties.set(this, void 0);
    _ContextBinding_elm.set(this, void 0);
    this.component = component;
    __classPrivateFieldSet(this, _ContextBinding_renderer, vm.renderer);
    __classPrivateFieldSet(this, _ContextBinding_elm, vm.elm);
    __classPrivateFieldSet(this, _ContextBinding_providedContextVarieties, providedContextVarieties);
    // Register the component as a context provider.
    const unregister = __classPrivateFieldGet(this, _ContextBinding_renderer, "f").registerContextProvider(__classPrivateFieldGet(this, _ContextBinding_elm, "f"), ContextEventName, contextConsumer => {
      // This callback is invoked when the provided context is consumed somewhere down
      // in the component's subtree.
      return contextConsumer.setNewContext(__classPrivateFieldGet(this, _ContextBinding_providedContextVarieties, "f"));
    });
    // deprecated engine-server doesn't provide `unregister`
    if (unregister) {
      const unregisters = contextProviderUnregisters.get(vm);
      if (isUndefined$1(unregisters)) {
        contextProviderUnregisters.set(vm, [unregister]);
      } else {
        ArrayPush$1.call(unregisters, unregister);
      }
    }
  }
  provideContext(contextVariety, providedContextSignal) {
    if (__classPrivateFieldGet(this, _ContextBinding_providedContextVarieties, "f").has(contextVariety)) {
      logWarnOnce('Multiple contexts of the same variety were provided. Only the first context will be used.');
      return;
    }
    __classPrivateFieldGet(this, _ContextBinding_providedContextVarieties, "f").set(contextVariety, providedContextSignal);
  }
  consumeContext(contextVariety, contextProvidedCallback) {
    __classPrivateFieldGet(this, _ContextBinding_renderer, "f").registerContextConsumer(__classPrivateFieldGet(this, _ContextBinding_elm, "f"), ContextEventName, {
      setNewContext: providerContextVarieties => {
        // If the provider has the specified context variety, then it is consumed
        // and true is returned to stop bubbling.
        if (providerContextVarieties.has(contextVariety)) {
          contextProvidedCallback(providerContextVarieties.get(contextVariety));
          return true;
        }
        // Return false as context has not been found/consumed
        // and the consumer should continue traversing the context tree
        return false;
      }
    });
  }
}
_ContextBinding_renderer = new WeakMap(), _ContextBinding_providedContextVarieties = new WeakMap(), _ContextBinding_elm = new WeakMap();
function connectContext(vm) {
  // Non-decorated objects
  connect(vm, keys(vm.cmpFields), vm.cmpFields);
  // Decorated objects like @api context
  connect(vm, keys(vm.cmpProps), vm.cmpProps);
}
function disconnectContext(vm) {
  // Non-decorated objects
  disconnect(vm, keys(vm.cmpFields), vm.cmpFields);
  // Decorated objects like @api context
  disconnect(vm, keys(vm.cmpProps), vm.cmpProps);
  // Remove the provider listeners registered on connect.
  const unregisters = contextProviderUnregisters.get(vm);
  if (!isUndefined$1(unregisters)) {
    for (let i = 0; i < unregisters.length; i++) {
      unregisters[i]();
    }
    contextProviderUnregisters.delete(vm);
  }
}
function connect(vm, enumerableKeys, contextContainer) {
  const contextKeys = getContextKeys();
  if (isUndefined$1(contextKeys)) {
    return;
  }
  const {
    connectContext
  } = contextKeys;
  const {
    component
  } = vm;
  const contextfulKeys = ArrayFilter.call(enumerableKeys, enumerableKey => isTrustedContext(contextContainer[enumerableKey]));
  if (contextfulKeys.length === 0) {
    return;
  }
  const providedContextVarieties = new Map();
  try {
    for (let i = 0; i < contextfulKeys.length; i++) {
      contextContainer[contextfulKeys[i]][connectContext](new ContextBinding(vm, component, providedContextVarieties));
    }
  } catch (err) {
    logWarnOnce(`Attempted to connect to trusted context but received the following error: ${err.message}`);
  }
}
function disconnect(vm, enumerableKeys, contextContainer) {
  const contextKeys = getContextKeys();
  if (!contextKeys) {
    return;
  }
  const {
    disconnectContext
  } = contextKeys;
  const {
    component
  } = vm;
  const contextfulKeys = ArrayFilter.call(enumerableKeys, enumerableKey => isTrustedContext(contextContainer[enumerableKey]));
  if (contextfulKeys.length === 0) {
    return;
  }
  try {
    for (let i = 0; i < contextfulKeys.length; i++) {
      contextContainer[contextfulKeys[i]][disconnectContext](component);
    }
  } catch (err) {
    logWarnOnce(`Attempted to disconnect from trusted context but received the following error: ${err.message}`);
  }
}

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let idx = 0;
/** The internal slot used to associate different objects the engine manipulates with the VM */
const ViewModelReflection = new WeakMap();
function callHook(cmp, fn, args = []) {
  return fn.apply(cmp, args);
}
function setHook(cmp, prop, newValue) {
  cmp[prop] = newValue;
}
function getHook(cmp, prop) {
  return cmp[prop];
}
function rerenderVM(vm) {
  rehydrate(vm);
}
function connectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  // Usually means moving the element from one place to another, which is observable via
  // life-cycle hooks.
  if (vm.state === 1 /* VMState.connected */) {
    disconnectRootElement(elm);
  }
  runConnectedCallback(vm);
  rehydrate(vm);
}
function disconnectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  resetComponentStateWhenRemoved(vm);
}
function appendVM(vm) {
  rehydrate(vm);
}
// just in case the component comes back, with this we guarantee re-rendering it
// while preventing any attempt to rehydration until after reinsertion.
function resetComponentStateWhenRemoved(vm) {
  const {
    state
  } = vm;
  if (state !== 2 /* VMState.disconnected */) {
    // Making sure that any observing record will not trigger the rehydrated on this vm
    resetTemplateObserverAndUnsubscribe(vm);
    runDisconnectedCallback(vm);
    // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)
    runChildNodesDisconnectedCallback(vm);
    runLightChildNodesDisconnectedCallback(vm);
  }
}
// this method is triggered by the diffing algo only when a vnode from the
// old vnode.children is removed from the DOM.
function removeVM(vm) {
  resetComponentStateWhenRemoved(vm);
}
function getNearestShadowAncestor(owner) {
  let ancestor = owner;
  while (!isNull(ancestor) && ancestor.renderMode === 0 /* RenderMode.Light */) {
    ancestor = ancestor.owner;
  }
  return ancestor;
}
function createVM(elm, ctor, renderer, options) {
  const {
    mode,
    owner,
    tagName,
    hydrated
  } = options;
  const def = getComponentInternalDef(ctor);
  const apiVersion = getComponentAPIVersion(ctor);
  const vm = {
    elm,
    def,
    idx: idx++,
    state: 0 /* VMState.created */,
    isScheduled: false,
    isDirty: true,
    tagName,
    mode,
    owner,
    refVNodes: null,
    attachedEventListeners: new WeakMap(),
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpProps: create(null),
    cmpFields: create(null),
    cmpSlots: {
      slotAssignments: create(null)
    },
    cmpTemplate: null,
    hydrated: Boolean(hydrated),
    renderMode: def.renderMode,
    context: {
      stylesheetToken: undefined,
      hasTokenInClass: undefined,
      hasTokenInAttribute: undefined,
      hasScopedStyles: undefined,
      styleVNodes: null,
      tplCache: EmptyObject,
      wiredConnecting: EmptyArray,
      wiredDisconnecting: EmptyArray
    },
    // Properties set right after VM creation.
    tro: null,
    shadowMode: null,
    stylesheets: null,
    // Properties set by the LightningElement constructor.
    component: null,
    shadowRoot: null,
    renderRoot: null,
    callHook,
    setHook,
    getHook,
    renderer,
    apiVersion
  };
  vm.stylesheets = computeStylesheets(vm, def.ctor);
  vm.shadowMode = computeShadowMode(def, vm.owner, renderer, hydrated);
  vm.tro = getTemplateReactiveObserver(vm);
  // We don't need to report the shadow mode if we're rendering in light DOM
  if (isReportingEnabled() && vm.renderMode === 1 /* RenderMode.Shadow */) {
    report("ShadowModeUsage" /* ReportingEventId.ShadowModeUsage */, {
      tagName: vm.tagName,
      mode: vm.shadowMode
    });
  }
  // Create component instance associated to the vm and the element.
  invokeComponentConstructor(vm, def.ctor);
  // Initializing the wire decorator per instance only when really needed
  if (hasWireAdapters(vm)) {
    installWireAdapters(vm);
  }
  return vm;
}
function validateComponentStylesheets(vm, stylesheets) {
  let valid = true;
  const validate = arrayOrStylesheet => {
    if (isArray$1(arrayOrStylesheet)) {
      for (let i = 0; i < arrayOrStylesheet.length; i++) {
        validate(arrayOrStylesheet[i]);
      }
    } else if (!isFunction$1(arrayOrStylesheet)) {
      // function assumed to be a stylesheet factory
      valid = false;
    }
  };
  if (!isArray$1(stylesheets)) {
    valid = false;
  } else {
    validate(stylesheets);
  }
  return valid;
}
// Validate and flatten any stylesheets defined as `static stylesheets`
function computeStylesheets(vm, ctor) {
  const {
    stylesheets
  } = ctor;
  if (!isUndefined$1(stylesheets)) {
    const valid = validateComponentStylesheets(vm, stylesheets);
    if (valid) {
      return flattenStylesheets(stylesheets);
    }
  }
  return null;
}
// Compute the shadowMode/renderMode without creating a VM. This is used in some scenarios like hydration.
function computeShadowAndRenderMode(Ctor, renderer) {
  const def = getComponentInternalDef(Ctor);
  const {
    renderMode
  } = def;
  // Assume null `owner` - this is what happens in hydration cases anyway
  // Also assume we are not in hydration mode for this exported API
  const shadowMode = computeShadowMode(def, /* owner */null, renderer, false);
  return {
    renderMode,
    shadowMode
  };
}
function computeShadowMode(def, owner, renderer, hydrated) {
  if (
  // Force the shadow mode to always be native. Used for running tests with synthetic shadow patches
  // on, but components running in actual native shadow mode
  // If synthetic shadow is explicitly disabled, use pure-native
  lwcRuntimeFlags.DISABLE_SYNTHETIC_SHADOW ||
  // hydration only supports native shadow
  isTrue(hydrated)) {
    return 0 /* ShadowMode.Native */;
  }
  const {
    isSyntheticShadowDefined
  } = renderer;
  let shadowMode;
  if (isSyntheticShadowDefined) {
    if (def.renderMode === 0 /* RenderMode.Light */) {
      // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
      // everything defaults to native when the synthetic shadow polyfill is unavailable.
      shadowMode = 0 /* ShadowMode.Native */;
    } else if (def.shadowSupportMode === 'native') {
      shadowMode = 0 /* ShadowMode.Native */;
    } else {
      const shadowAncestor = getNearestShadowAncestor(owner);
      if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0 /* ShadowMode.Native */) {
        // Transitive support for native Shadow DOM. A component in native mode
        // transitively opts all of its descendants into native.
        shadowMode = 0 /* ShadowMode.Native */;
      } else {
        // Synthetic if neither this component nor any of its ancestors are configured
        // to be native.
        shadowMode = 1 /* ShadowMode.Synthetic */;
      }
    }
  } else {
    // Native if the synthetic shadow polyfill is unavailable.
    shadowMode = 0 /* ShadowMode.Native */;
  }
  return shadowMode;
}
function associateVM(obj, vm) {
  ViewModelReflection.set(obj, vm);
}
function getAssociatedVM(obj) {
  const vm = ViewModelReflection.get(obj);
  return vm;
}
function getAssociatedVMIfPresent(obj) {
  const maybeVm = ViewModelReflection.get(obj);
  return maybeVm;
}
function rehydrate(vm) {
  if (isTrue(vm.isDirty)) {
    const children = renderComponent(vm);
    patchShadowRoot(vm, children);
  }
}
function patchShadowRoot(vm, newCh) {
  const {
    renderRoot,
    children: oldCh,
    renderer
  } = vm;
  // reset the refs; they will be set during `patchChildren`
  resetRefVNodes(vm);
  // caching the new children collection
  vm.children = newCh;
  if (newCh.length > 0 || oldCh.length > 0) {
    // patch function mutates vnodes by adding the element reference,
    // however, if patching fails it contains partial changes.
    if (oldCh !== newCh) {
      runWithBoundaryProtection(vm, vm, () => {
      }, () => {
        // job
        patchChildren(oldCh, newCh, renderRoot, renderer);
      }, () => {
      });
    }
  }
  if (vm.state === 1 /* VMState.connected */) {
    // If the element is connected, that means connectedCallback was already issued, and
    // any successive rendering should finish with the call to renderedCallback, otherwise
    // the connectedCallback will take care of calling it in the right order at the end of
    // the current rehydration process.
    runRenderedCallback(vm);
  }
}
function runRenderedCallback(vm) {
  const {
    def: {
      renderedCallback
    }
  } = vm;
  if (!isUndefined$1(renderedCallback)) {
    invokeComponentCallback(vm, renderedCallback);
  }
}
let rehydrateQueue = [];
function flushRehydrationQueue() {
  const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
  rehydrateQueue = []; // reset to a new queue
  for (let i = 0, len = vms.length; i < len; i += 1) {
    const vm = vms[i];
    try {
      // We want to prevent rehydration from occurring when nodes are detached from the DOM as this can trigger
      // unintended side effects, like lifecycle methods being called multiple times.
      if (vm.state === 1 /* VMState.connected */) {
        rehydrate(vm);
      }
    } catch (error) {
      if (i + 1 < len) {
        // pieces of the queue are still pending to be rehydrated, those should have priority
        if (rehydrateQueue.length === 0) {
          addCallbackToNextTick(flushRehydrationQueue);
        }
        ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
      }
      // re-throwing the original error will break the current tick, but since the next tick is
      // already scheduled, it should continue patching the rest.
      throw error;
    }
  }
}
function runConnectedCallback(vm) {
  const {
    state
  } = vm;
  if (state === 1 /* VMState.connected */) {
    return; // nothing to do since it was already connected
  }
  vm.state = 1 /* VMState.connected */;
  if (hasWireAdapters(vm)) {
    connectWireAdapters(vm);
  }
  if (lwcRuntimeFlags.ENABLE_EXPERIMENTAL_SIGNALS) {
    // Setup context before connected callback is executed
    connectContext(vm);
  }
  const {
    connectedCallback
  } = vm.def;
  if (!isUndefined$1(connectedCallback)) {
    invokeComponentCallback(vm, connectedCallback);
  }
  // This test only makes sense in the browser, with synthetic lifecycle, and when reporting is enabled or
  // we're in dev mode. This is to detect a particular issue with synthetic lifecycle.
  if (lwcRuntimeFlags.DISABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE && (isReportingEnabled())) {
    if (!vm.renderer.isConnected(vm.elm)) {
      report("ConnectedCallbackWhileDisconnected" /* ReportingEventId.ConnectedCallbackWhileDisconnected */, {
        tagName: vm.tagName
      });
    }
  }
}
function hasWireAdapters(vm) {
  return getOwnPropertyNames$1(vm.def.wire).length > 0;
}
function runDisconnectedCallback(vm) {
  if (lwcRuntimeFlags.ENABLE_EXPERIMENTAL_SIGNALS) {
    disconnectContext(vm);
  }
  if (isFalse(vm.isDirty)) {
    // this guarantees that if the component is reused/reinserted,
    // it will be re-rendered because we are disconnecting the reactivity
    // linking, so mutations are not automatically reflected on the state
    // of disconnected components.
    vm.isDirty = true;
  }
  vm.state = 2 /* VMState.disconnected */;
  if (hasWireAdapters(vm)) {
    disconnectWireAdapters(vm);
  }
  const {
    disconnectedCallback
  } = vm.def;
  if (!isUndefined$1(disconnectedCallback)) {
    invokeComponentCallback(vm, disconnectedCallback);
  }
}
function runChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm;
  // Reporting disconnection for every child in inverse order since they are
  // inserted in reserved order.
  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const {
      elm
    } = vCustomElementCollection[i];
    // There are two cases where the element could be undefined:
    // * when there is an error during the construction phase, and an error
    //   boundary picks it, there is a possibility that the VCustomElement
    //   is not properly initialized, and therefore is should be ignored.
    // * when slotted custom element is not used by the element where it is
    //   slotted into it, as  a result, the custom element was never
    //   initialized.
    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVMIfPresent(elm);
      // The VM associated with the element might be associated undefined
      // in the case where the VM failed in the middle of its creation,
      // eg: constructor throwing before invoking super().
      if (!isUndefined$1(childVM)) {
        resetComponentStateWhenRemoved(childVM);
      }
    }
  }
}
function runLightChildNodesDisconnectedCallback(vm) {
  const {
    aChildren: adoptedChildren
  } = vm;
  recursivelyDisconnectChildren(adoptedChildren);
}
/**
 * The recursion doesn't need to be a complete traversal of the vnode graph,
 * instead it can be partial, when a custom element vnode is found, we don't
 * need to continue into its children because by attempting to disconnect the
 * custom element itself will trigger the removal of anything slotted or anything
 * defined on its shadow.
 * @param vnodes
 */
function recursivelyDisconnectChildren(vnodes) {
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode) && !isUndefined$1(vnode.elm)) {
      switch (vnode.type) {
        case 2 /* VNodeType.Element */:
          recursivelyDisconnectChildren(vnode.children);
          break;
        case 3 /* VNodeType.CustomElement */:
          {
            const vm = getAssociatedVM(vnode.elm);
            resetComponentStateWhenRemoved(vm);
            break;
          }
      }
    }
  }
}
// This is a super optimized mechanism to remove the content of the root node (shadow root
// for shadow DOM components and the root element itself for light DOM) without having to go
// into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
// children VNodes might not be representing the current state of the DOM.
function resetComponentRoot(vm) {
  recursivelyRemoveChildren(vm.children, vm);
  vm.children = EmptyArray;
  runChildNodesDisconnectedCallback(vm);
  vm.velements = EmptyArray;
}
// Helper function to remove all children of the root node.
// If the set of children includes VFragment nodes, we need to remove the children of those nodes too.
// Since VFragments can contain other VFragments, we need to traverse the entire of tree of VFragments.
// If the set contains no VFragment nodes, no traversal is needed.
function recursivelyRemoveChildren(vnodes, vm) {
  const {
    renderRoot,
    renderer: {
      remove
    }
  } = vm;
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode)) {
      // VFragments are special; their .elm property does not point to the root element since they have no single root.
      if (isVFragment(vnode)) {
        recursivelyRemoveChildren(vnode.children, vm);
      } else if (!isUndefined$1(vnode.elm)) {
        remove(vnode.elm, renderRoot);
      }
    }
  }
}
function scheduleRehydration(vm) {
  if (isTrue(vm.isScheduled)) {
    return;
  }
  vm.isScheduled = true;
  if (rehydrateQueue.length === 0) {
    addCallbackToNextTick(flushRehydrationQueue);
  }
  ArrayPush$1.call(rehydrateQueue, vm);
}
function getErrorBoundaryVM(vm) {
  let currentVm = vm;
  while (!isNull(currentVm)) {
    if (!isUndefined$1(currentVm.def.errorCallback)) {
      return currentVm;
    }
    currentVm = currentVm.owner;
  }
}
function runWithBoundaryProtection(vm, owner, pre, job, post) {
  let error;
  pre();
  try {
    job();
  } catch (e) {
    error = Object(e);
  } finally {
    post();
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);
      // Error boundaries are not in effect when server-side rendering. `errorCallback`
      // is intended to allow recovery from errors - changing the state of a component
      // and instigating a re-render. That is at odds with the single-pass, synchronous
      // nature of SSR. For that reason, all errors bubble up to the `renderComponent`
      // call site.
      if (isUndefined$1(errorBoundaryVm)) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
      resetComponentRoot(vm); // remove offenders
      // error boundaries must have an ErrorCallback
      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
    }
  }
}
function runFormAssociatedCustomElementCallback(vm, faceCb, args) {
  const {
    renderMode,
    shadowMode,
    def: {
      ctor
    }
  } = vm;
  if (shadowMode === 1 /* ShadowMode.Synthetic */ && renderMode !== 0 /* RenderMode.Light */ && !supportsSyntheticElementInternals(ctor)) {
    throw new Error('Form associated lifecycle methods are not available in synthetic shadow. Please use native shadow or light DOM.');
  }
  invokeComponentCallback(vm, faceCb, args);
}
function runFormAssociatedCallback(elm, form) {
  const vm = getAssociatedVM(elm);
  const {
    formAssociatedCallback
  } = vm.def;
  if (!isUndefined$1(formAssociatedCallback)) {
    runFormAssociatedCustomElementCallback(vm, formAssociatedCallback, [form]);
  }
}
function runFormDisabledCallback(elm, disabled) {
  const vm = getAssociatedVM(elm);
  const {
    formDisabledCallback
  } = vm.def;
  if (!isUndefined$1(formDisabledCallback)) {
    runFormAssociatedCustomElementCallback(vm, formDisabledCallback, [disabled]);
  }
}
function runFormResetCallback(elm) {
  const vm = getAssociatedVM(elm);
  const {
    formResetCallback
  } = vm.def;
  if (!isUndefined$1(formResetCallback)) {
    runFormAssociatedCustomElementCallback(vm, formResetCallback);
  }
}
function runFormStateRestoreCallback(elm, state, reason) {
  const vm = getAssociatedVM(elm);
  const {
    formStateRestoreCallback
  } = vm.def;
  if (!isUndefined$1(formStateRestoreCallback)) {
    runFormAssociatedCustomElementCallback(vm, formStateRestoreCallback, [state, reason]);
  }
}
function resetRefVNodes(vm) {
  const {
    cmpTemplate
  } = vm;
  vm.refVNodes = !isNull(cmpTemplate) && cmpTemplate.hasRefs ? create(null) : null;
}
// This is a "handoff" from synthetic-shadow to engine-core – we want to clean up after ourselves
// so nobody else can misuse these global APIs.
delete globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
delete globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
// Our detection logic relies on some modern browser features. We can just skip reporting the data
// for unsupported browsers
function supportsCssEscape() {
  return typeof CSS !== 'undefined' && isFunction$1(CSS.escape);
}
// If this page is not using synthetic shadow, then we don't need to install detection. Note
// that we are assuming synthetic shadow is loaded before LWC.
function isSyntheticShadowLoaded() {
  // We should probably be calling `renderer.isSyntheticShadowDefined`, but 1) we don't have access to the renderer,
  // and 2) this code needs to run in @lwc/engine-core, so it can access `logWarn()` and `report()`.
  return hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN);
}
// Detecting cross-root ARIA in synthetic shadow only makes sense for the browser
if (supportsCssEscape() && isSyntheticShadowLoaded()) ;
// Deeply freeze the entire array (of arrays) of stylesheet factory functions
function deepFreeze(stylesheets) {
  traverseStylesheets(stylesheets, subStylesheets => {
    freeze(subStylesheets);
  });
}
// Deep-traverse an array (of arrays) of stylesheet factory functions, and call the callback for every array/function
function traverseStylesheets(stylesheets, callback) {
  callback(stylesheets);
  for (let i = 0; i < stylesheets.length; i++) {
    const stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      traverseStylesheets(stylesheet, callback);
    } else {
      callback(stylesheet);
    }
  }
}
function addLegacyStylesheetTokensShim(tmpl) {
  // When ENABLE_FROZEN_TEMPLATE is false, then we shim stylesheetTokens on top of stylesheetToken for anyone who
  // is accessing the old internal API (backwards compat). Details: W-14210169
  defineProperty(tmpl, 'stylesheetTokens', {
    enumerable: true,
    configurable: true,
    get() {
      const {
        stylesheetToken
      } = this;
      if (isUndefined$1(stylesheetToken)) {
        return stylesheetToken;
      }
      // Shim for the old `stylesheetTokens` property
      // See https://github.com/salesforce/lwc/pull/2332/files#diff-7901555acef29969adaa6583185b3e9bce475cdc6f23e799a54e0018cb18abaa
      return {
        hostAttribute: `${stylesheetToken}-host`,
        shadowAttribute: stylesheetToken
      };
    },
    set(value) {
      // If the value is null or some other exotic object, you would be broken anyway in the past
      // because the engine would try to access hostAttribute/shadowAttribute, which would throw an error.
      // However it may be undefined in newer versions of LWC, so we need to guard against that case.
      this.stylesheetToken = isUndefined$1(value) ? undefined : value.shadowAttribute;
    }
  });
}
function freezeTemplate(tmpl) {
  // TODO [#2782]: remove this flag and delete the legacy behavior
  if (lwcRuntimeFlags.ENABLE_FROZEN_TEMPLATE) {
    // Deep freeze the template
    freeze(tmpl);
    if (!isUndefined$1(tmpl.stylesheets)) {
      deepFreeze(tmpl.stylesheets);
    }
  } else {
    // template is not frozen - shim, report, and warn
    // this shim should be applied in both dev and prod
    addLegacyStylesheetTokensShim(tmpl);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// Feature detection
//
// This check for constructable style sheets is similar to Fast's:
// https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
// See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070
const supportsConstructableStylesheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) && isArray$1(document.adoptedStyleSheets);
const stylesheetCache = new Map();
function createFreshStyleElement(content) {
  const elm = document.createElement('style');
  elm.type = 'text/css';
  elm.textContent = content;
  // Add an attribute to distinguish global styles added by LWC as opposed to other frameworks/libraries on the page
  elm.setAttribute('data-rendered-by-lwc', '');
  return elm;
}
function createStyleElement(content, cacheData) {
  const {
    element,
    usedElement
  } = cacheData;
  // If the <style> was already used, then we should clone it. We cannot insert
  // the same <style> in two places in the DOM.
  if (usedElement) {
    // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
    // faster to call `cloneNode()` on an existing node than to recreate it every time.
    return element.cloneNode(true);
  }
  // We don't clone every time, because that would be a perf tax on the first time
  cacheData.usedElement = true;
  return element;
}
function createConstructableStylesheet(content) {
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(content);
  return stylesheet;
}
function insertConstructableStylesheet(content, target, cacheData, signal) {
  const {
    adoptedStyleSheets
  } = target;
  const {
    stylesheet
  } = cacheData;
  // The reason we prefer .push() rather than reassignment is for perf: https://github.com/salesforce/lwc/pull/2683
  adoptedStyleSheets.push(stylesheet);
}
function insertStyleElement(content, target, cacheData, signal) {
  const elm = createStyleElement(content, cacheData);
  target.appendChild(elm);
}
function getCacheData(content, useConstructableStylesheet) {
  let cacheData = stylesheetCache.get(content);
  if (isUndefined$1(cacheData)) {
    cacheData = {
      stylesheet: undefined,
      element: undefined,
      roots: undefined,
      global: false,
      usedElement: false
    };
    stylesheetCache.set(content, cacheData);
  }
  // Create <style> elements or CSSStyleSheets on-demand, as needed
  if (useConstructableStylesheet && isUndefined$1(cacheData.stylesheet)) {
    cacheData.stylesheet = createConstructableStylesheet(content);
  } else if (!useConstructableStylesheet && isUndefined$1(cacheData.element)) {
    cacheData.element = createFreshStyleElement(content);
  }
  return cacheData;
}
function insertGlobalStylesheet(content, signal) {
  // Force a <style> element for global stylesheets. See comment below.
  const cacheData = getCacheData(content, false);
  if (cacheData.global) {
    // already inserted
    return;
  }
  cacheData.global = true; // mark inserted
  // TODO [#2922]: use document.adoptedStyleSheets in supported browsers. Currently we can't, due to backwards compat.
  insertStyleElement(content, document.head, cacheData);
}
function insertLocalStylesheet(content, target, signal) {
  const cacheData = getCacheData(content, supportsConstructableStylesheets);
  let {
    roots
  } = cacheData;
  if (isUndefined$1(roots)) {
    roots = cacheData.roots = new WeakSet(); // lazily initialize (not needed for global styles)
  } else if (roots.has(target)) {
    // already inserted
    return;
  }
  roots.add(target); // mark inserted
  // Constructable stylesheets are only supported in certain browsers:
  // https://caniuse.com/mdn-api_document_adoptedstylesheets
  // The reason we use it is for perf: https://github.com/salesforce/lwc/pull/2460
  if (supportsConstructableStylesheets) {
    insertConstructableStylesheet(content, target, cacheData);
  } else {
    // Fall back to <style> element
    insertStyleElement(content, target, cacheData);
  }
}
/**
 * Injects a stylesheet into the global (document) level or inside a shadow root.
 * @param content CSS content to insert
 * @param target ShadowRoot to insert into, or undefined if global (document) level
 * @param signal AbortSignal for aborting the stylesheet render. Used in dev mode for HMR to unrender stylesheets.
 */
function insertStylesheet(content, target, signal) {
  if (isUndefined$1(target)) {
    // global
    insertGlobalStylesheet(content);
  } else {
    // local
    insertLocalStylesheet(content, target);
  }
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const cachedConstructors = new Map();
const nativeLifecycleElementsToUpgradedByLWC = new WeakMap();
let elementBeingUpgradedByLWC = false;
let BaseUpgradableConstructor;
let BaseHTMLElement;
function createBaseUpgradableConstructor() {
  // Creates a constructor that is intended to be used directly as a custom element, except that the upgradeCallback is
  // passed in to the constructor so LWC can reuse the same custom element constructor for multiple components.
  // Another benefit is that only LWC can create components that actually do anything – if you do
  // `customElements.define('x-foo')`, then you don't have access to the upgradeCallback, so it's a dummy custom element.
  // This class should be created once per tag name.
  // TODO [#2972]: this class should expose observedAttributes as necessary
  BaseUpgradableConstructor = class TheBaseUpgradableConstructor extends HTMLElement {
    constructor(upgradeCallback, useNativeLifecycle) {
      super();
      if (useNativeLifecycle) {
        // When in native lifecycle mode, we need to keep track of instances that were created outside LWC
        // (i.e. not created by `lwc.createElement()`). If the element uses synthetic lifecycle, then we don't
        // need to track this.
        nativeLifecycleElementsToUpgradedByLWC.set(this, elementBeingUpgradedByLWC);
      }
      // If the element is not created using lwc.createElement(), e.g. `document.createElement('x-foo')`,
      // then elementBeingUpgradedByLWC will be false
      if (elementBeingUpgradedByLWC) {
        upgradeCallback(this);
      }
      // TODO [#2970]: LWC elements cannot be upgraded via new Ctor()
      // Do we want to support this? Throw an error? Currently for backwards compat it's a no-op.
    }
    connectedCallback() {
      // native `connectedCallback`/`disconnectedCallback` are only enabled in native lifecycle mode
      if (isTrue(nativeLifecycleElementsToUpgradedByLWC.get(this))) {
        connectRootElement(this);
      }
    }
    disconnectedCallback() {
      // native `connectedCallback`/`disconnectedCallback` are only enabled in native lifecycle mode
      if (isTrue(nativeLifecycleElementsToUpgradedByLWC.get(this))) {
        disconnectRootElement(this);
      }
    }
    formAssociatedCallback(form) {
      runFormAssociatedCallback(this, form);
    }
    formDisabledCallback(disabled) {
      runFormDisabledCallback(this, disabled);
    }
    formResetCallback() {
      runFormResetCallback(this);
    }
    formStateRestoreCallback(state, reason) {
      runFormStateRestoreCallback(this, state, reason);
    }
    /*LWC compiler v9.5.3*/
  };
  BaseHTMLElement = HTMLElement; // cache to track if it changes
}
const createUpgradableConstructor = isFormAssociated => {
  if (HTMLElement !== BaseHTMLElement) {
    // If the global HTMLElement changes out from under our feet, then we need to create a new
    // BaseUpgradableConstructor from scratch (since it extends from HTMLElement). This can occur if
    // polyfills are in play, e.g. a polyfill for scoped custom element registries.
    // This workaround can potentially be removed when W-15361244 is resolved.
    createBaseUpgradableConstructor();
  }
  // Using a BaseUpgradableConstructor superclass here is a perf optimization to avoid
  // re-defining the same logic (connectedCallback, disconnectedCallback, etc.) over and over.
  class UpgradableConstructor extends BaseUpgradableConstructor {
    /*LWC compiler v9.5.3*/
  }
  if (isFormAssociated) {
    // Perf optimization - the vast majority of components have formAssociated=false,
    // so we can skip the setter in those cases, since undefined works the same as false.
    UpgradableConstructor.formAssociated = isFormAssociated;
  }
  return UpgradableConstructor;
};
function getUpgradableConstructor(tagName, isFormAssociated) {
  let UpgradableConstructor = cachedConstructors.get(tagName);
  if (isUndefined$1(UpgradableConstructor)) {
    if (!isUndefined$1(customElements.get(tagName))) {
      throw new Error(`Unexpected tag name "${tagName}". This name is a registered custom element, preventing LWC to upgrade the element.`);
    }
    UpgradableConstructor = createUpgradableConstructor(isFormAssociated);
    customElements.define(tagName, UpgradableConstructor);
    cachedConstructors.set(tagName, UpgradableConstructor);
  }
  return UpgradableConstructor;
}
const createCustomElement = (tagName, upgradeCallback, useNativeLifecycle, isFormAssociated) => {
  const UpgradableConstructor = getUpgradableConstructor(tagName, isFormAssociated);
  if (Boolean(UpgradableConstructor.formAssociated) !== isFormAssociated) {
    throw new Error(`<${tagName}> was already registered with formAssociated=${UpgradableConstructor.formAssociated}. It cannot be re-registered with formAssociated=${isFormAssociated}. Please rename your component to have a different name than <${tagName}>`);
  }
  elementBeingUpgradedByLWC = true;
  try {
    return new UpgradableConstructor(upgradeCallback, useNativeLifecycle);
  } finally {
    elementBeingUpgradedByLWC = false;
  }
};

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * A factory function that produces a renderer.
 * Renderer encapsulates operations that are required to render an LWC component into the underlying
 * runtime environment. In the case of @lwc/enigne-dom, it is meant to be used in a DOM environment.
 * @param baseRenderer Either null or the base renderer imported from 'lwc'.
 * @returns The created renderer
 * @example
 * import { renderer, rendererFactory } from 'lwc';
 * const customRenderer = rendererFactory(renderer);
 */
function rendererFactory(baseRenderer) {
  // Type assertion because this is replaced by rollup with an object, not a string.
  // See `injectInlineRenderer` in /scripts/rollup/rollup.config.js
  const renderer = function (exports) {
    /**
     * Copyright (c) 2026 Salesforce, Inc.
     */
    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    /**
     *
     * @param value
     * @param msg
     */
    function invariant(value, msg) {
      if (!value) {
        throw new Error(`Invariant Violation: ${msg}`);
      }
    }
    /**
     *
     * @param value
     * @param msg
     */
    function isTrue$1(value, msg) {
      if (!value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    /**
     *
     * @param value
     * @param msg
     */
    function isFalse$1(value, msg) {
      if (value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    /**
     *
     * @param msg
     */
    function fail(msg) {
      throw new Error(msg);
    }
    var assert = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fail: fail,
      invariant: invariant,
      isFalse: isFalse$1,
      isTrue: isTrue$1
    });

    /*
     * Copyright (c) 2024, Salesforce, Inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    const {
      /** Detached {@linkcode Object.getOwnPropertyDescriptors}; see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors MDN Reference}. */
      getOwnPropertyDescriptors
    } = Object;
    /**
     * Determines whether the argument is `undefined`.
     * @param obj Value to test
     * @returns `true` if the value is `undefined`.
     */
    function isUndefined(obj) {
      return obj === undefined;
    }
    /**
     * Determines whether the argument is `null`.
     * @param obj Value to test
     * @returns `true` if the value is `null`.
     */
    function isNull(obj) {
      return obj === null;
    }
    /** version: 9.5.3 */

    /*
     * Copyright (c) 2024, Salesforce, Inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    // Like @lwc/shared, but for DOM APIs
    const ElementDescriptors = getOwnPropertyDescriptors(Element.prototype);
    const ElementAttachShadow = ElementDescriptors.attachShadow.value;
    const ElementShadowRootGetter = ElementDescriptors.shadowRoot.get;

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    class WireContextSubscriptionEvent extends CustomEvent {
      constructor(adapterToken, {
        setNewContext,
        setDisconnectedCallback
      }) {
        super(adapterToken, {
          bubbles: true,
          composed: true
        });
        this.setNewContext = setNewContext;
        this.setDisconnectedCallback = setDisconnectedCallback;
      }
      /*LWC compiler v9.5.3*/
    }
    function registerContextConsumer(elm, adapterContextToken, subscriptionPayload) {
      dispatchEvent(elm, new WireContextSubscriptionEvent(adapterContextToken, subscriptionPayload));
    }
    function registerContextProvider(elm, adapterContextToken, onContextSubscription) {
      const listener = evt => {
        const {
          setNewContext,
          setDisconnectedCallback
        } = evt;
        // If context subscription is successful, stop event propagation
        if (onContextSubscription({
          setNewContext,
          setDisconnectedCallback
        })) {
          evt.stopImmediatePropagation();
        }
      };
      addEventListener(elm, adapterContextToken, listener);
      // Caller removes the listener on disconnect; otherwise its closure retains the detached element.
      return () => removeEventListener(elm, adapterContextToken, listener);
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function cloneNode(node, deep) {
      return node.cloneNode(deep);
    }
    function createElement(tagName, namespace) {
      return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
    }
    function createText(content) {
      return document.createTextNode(content);
    }
    function createComment(content) {
      return document.createComment(content);
    }
    // Parse the fragment HTML string into DOM
    function createFragment(html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      return template.content.firstChild;
    }
    function insert(node, parent, anchor) {
      parent.insertBefore(node, anchor);
    }
    function remove(node, parent) {
      parent.removeChild(node);
    }
    function nextSibling(node) {
      return node.nextSibling;
    }
    function previousSibling(node) {
      return node.previousSibling;
    }
    function getParentNode(node) {
      return node.parentNode;
    }
    function attachShadow(element, options) {
      // `shadowRoot` will be non-null in two cases:
      //   1. upon initial load with an SSR-generated DOM, while in Shadow render mode
      //   2. when a webapp author places <c-app> in their static HTML and mounts their
      //      root component with customElement.define('c-app', Ctor)
      // see W-17441501
      const shadowRoot = ElementShadowRootGetter.call(element);
      if (!isNull(shadowRoot)) {
        return shadowRoot;
      }
      return ElementAttachShadow.call(element, options);
    }
    function setText(node, content) {
      node.nodeValue = content;
    }
    function getProperty(node, key) {
      return node[key];
    }
    function setProperty(node, key, value) {
      node[key] = value;
    }
    function getAttribute(element, name, namespace) {
      return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
    }
    function setAttribute(element, name, value, namespace) {
      return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
    }
    function removeAttribute(element, name, namespace) {
      if (isUndefined(namespace)) {
        element.removeAttribute(name);
      } else {
        element.removeAttributeNS(namespace, name);
      }
    }
    function addEventListener(target, type, callback, options) {
      target.addEventListener(type, callback, options);
    }
    function removeEventListener(target, type, callback, options) {
      target.removeEventListener(type, callback, options);
    }
    function dispatchEvent(target, event) {
      return target.dispatchEvent(event);
    }
    function getClassList(element) {
      return element.classList;
    }
    function setCSSStyleProperty(element, name, value, important) {
      // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
      // represent elements in the engine?
      element.style.setProperty(name, value, important ? 'important' : '');
    }
    function getBoundingClientRect(element) {
      return element.getBoundingClientRect();
    }
    function querySelector(element, selectors) {
      return element.querySelector(selectors);
    }
    function querySelectorAll(element, selectors) {
      return element.querySelectorAll(selectors);
    }
    function getElementsByTagName(element, tagNameOrWildCard) {
      return element.getElementsByTagName(tagNameOrWildCard);
    }
    function getElementsByClassName(element, names) {
      return element.getElementsByClassName(names);
    }
    function getChildren(element) {
      return element.children;
    }
    function getChildNodes(element) {
      return element.childNodes;
    }
    function getFirstChild(element) {
      return element.firstChild;
    }
    function getFirstElementChild(element) {
      return element.firstElementChild;
    }
    function getLastChild(element) {
      return element.lastChild;
    }
    function getLastElementChild(element) {
      return element.lastElementChild;
    }
    function isConnected(node) {
      return node.isConnected;
    }
    function assertInstanceOfHTMLElement(elm, msg) {
      assert.invariant(elm instanceof HTMLElement, msg);
    }
    function ownerDocument(element) {
      return element.ownerDocument;
    }
    function getTagName(elm) {
      return elm.tagName;
    }
    function getStyle(elm) {
      return elm.style;
    }
    function attachInternals(elm) {
      return attachInternalsFunc.call(elm);
    }
    // Use the attachInternals method from HTMLElement.prototype because access to it is removed
    // in HTMLBridgeElement, ie: elm.attachInternals is undefined.
    // Additionally, cache the attachInternals method to protect against 3rd party monkey-patching.
    const attachInternalsFunc = typeof ElementInternals !== 'undefined' ? HTMLElement.prototype.attachInternals : () => {
      throw new Error('attachInternals API is not supported in this browser environment.');
    };
    exports.addEventListener = addEventListener;
    exports.assertInstanceOfHTMLElement = assertInstanceOfHTMLElement;
    exports.attachInternals = attachInternals;
    exports.attachShadow = attachShadow;
    exports.cloneNode = cloneNode;
    exports.createComment = createComment;
    exports.createElement = createElement;
    exports.createFragment = createFragment;
    exports.createText = createText;
    exports.dispatchEvent = dispatchEvent;
    exports.getAttribute = getAttribute;
    exports.getBoundingClientRect = getBoundingClientRect;
    exports.getChildNodes = getChildNodes;
    exports.getChildren = getChildren;
    exports.getClassList = getClassList;
    exports.getElementsByClassName = getElementsByClassName;
    exports.getElementsByTagName = getElementsByTagName;
    exports.getFirstChild = getFirstChild;
    exports.getFirstElementChild = getFirstElementChild;
    exports.getLastChild = getLastChild;
    exports.getLastElementChild = getLastElementChild;
    exports.getParentNode = getParentNode;
    exports.getProperty = getProperty;
    exports.getStyle = getStyle;
    exports.getTagName = getTagName;
    exports.insert = insert;
    exports.isConnected = isConnected;
    exports.nextSibling = nextSibling;
    exports.ownerDocument = ownerDocument;
    exports.previousSibling = previousSibling;
    exports.querySelector = querySelector;
    exports.querySelectorAll = querySelectorAll;
    exports.registerContextConsumer = registerContextConsumer;
    exports.registerContextProvider = registerContextProvider;
    exports.remove = remove;
    exports.removeAttribute = removeAttribute;
    exports.removeEventListener = removeEventListener;
    exports.setAttribute = setAttribute;
    exports.setCSSStyleProperty = setCSSStyleProperty;
    exports.setProperty = setProperty;
    exports.setText = setText;
    return exports;
  }({});
  // Meant to inherit any properties passed via the base renderer as the argument to the factory.
  Object.setPrototypeOf(renderer, baseRenderer);
  return renderer;
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Host element mutation tracking is for SSR only
const startTrackingMutations = noop;
const stopTrackingMutations = noop;
/**
 * The base renderer that will be used by engine-core.
 * This will be used for DOM operations when lwc is running in a browser environment.
 */
const renderer = assign(
// The base renderer will invoke the factory with null and assign additional properties that are
// shared across renderers
rendererFactory(null),
// Properties that are either not required to be sandboxed or rely on a globally shared information
{
  // insertStyleSheet implementation shares a global cache of stylesheet data
  insertStylesheet,
  // relies on a shared global cache
  createCustomElement,
  defineCustomElement: getUpgradableConstructor,
  isSyntheticShadowDefined: hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN),
  startTrackingMutations,
  stopTrackingMutations
});

/*
 * Copyright (c) 2024, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Like @lwc/shared, but for DOM APIs
const ElementDescriptors = getOwnPropertyDescriptors(Element.prototype);
ElementDescriptors.attachShadow.value;
ElementDescriptors.shadowRoot.get;
function clearNode(node) {
  const childNodes = renderer.getChildNodes(node);
  for (let i = childNodes.length - 1; i >= 0; i--) {
    renderer.remove(childNodes[i], node);
  }
}
/**
 * The real `buildCustomElementConstructor`. Should not be accessible to external users!
 * @internal
 * @param Ctor LWC constructor to build
 * @returns A Web Component class
 * @see {@linkcode deprecatedBuildCustomElementConstructor}
 */
function buildCustomElementConstructor(Ctor) {
  var _a;
  const HtmlPrototype = getComponentHtmlPrototype(Ctor);
  const {
    observedAttributes
  } = HtmlPrototype;
  const {
    attributeChangedCallback
  } = HtmlPrototype.prototype;
  return _a = class extends HTMLElement {
    constructor() {
      super();
      if (!isNull(this.shadowRoot)) {
        clearNode(this.shadowRoot);
      }
      // Compute renderMode/shadowMode in advance. This must be done before `createVM` because `createVM` may
      // mutate the element.
      const {
        shadowMode,
        renderMode
      } = computeShadowAndRenderMode(Ctor, renderer);
      // Native shadow components are allowed to have pre-existing `childNodes` before upgrade. This supports
      // use cases where a custom element has declaratively-defined slotted content, e.g.:
      // https://github.com/salesforce/lwc/issues/3639
      const isNativeShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 0 /* ShadowMode.Native */;
      if (!isNativeShadow && this.childNodes.length > 0) {
        clearNode(this);
      }
      createVM(this, Ctor, renderer, {
        mode: 'open',
        owner: null,
        tagName: this.tagName
      });
    }
    connectedCallback() {
      connectRootElement(this);
    }
    disconnectedCallback() {
      disconnectRootElement(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (!lwcRuntimeFlags.ENABLE_LEGACY_ATTRIBUTE_CHANGED_CALLBACK || this instanceof BaseBridgeElement) {
        // W-17420330
        attributeChangedCallback.call(this, name, oldValue, newValue);
      }
    }
    formAssociatedCallback(form) {
      runFormAssociatedCallback(this, form);
    }
    formDisabledCallback(disabled) {
      runFormDisabledCallback(this, disabled);
    }
    formResetCallback() {
      runFormResetCallback(this);
    }
    formStateRestoreCallback(state, reason) {
      runFormStateRestoreCallback(this, state, reason);
    }
    /*LWC compiler v9.5.3*/
  }, _a.observedAttributes = observedAttributes,
  // Note CustomElementConstructor is not upgraded by LWC and inherits directly from HTMLElement which means it calls the native
  // attachInternals API.
  _a.formAssociated = Boolean(Ctor.formAssociated), _a;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line @lwc/lwc-internal/no-global-node
const _Node$1 = Node;
const ConnectingSlot = new WeakMap();
const DisconnectingSlot = new WeakMap();
function callNodeSlot(node, slot) {
  const fn = slot.get(node);
  if (!isUndefined$1(fn)) {
    fn(node);
  }
  return node; // for convenience
}
let monkeyPatched = false;
function monkeyPatchDomAPIs() {
  if (monkeyPatched) {
    // don't double-patch
    return;
  }
  monkeyPatched = true;
  // Monkey patching Node methods to be able to detect the insertions and removal of root elements
  // created via createElement.
  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = _Node$1.prototype;
  assign(_Node$1.prototype, {
    appendChild(newChild) {
      const appendedNode = appendChild.call(this, newChild);
      return callNodeSlot(appendedNode, ConnectingSlot);
    },
    insertBefore(newChild, referenceNode) {
      const insertedNode = insertBefore.call(this, newChild, referenceNode);
      return callNodeSlot(insertedNode, ConnectingSlot);
    },
    removeChild(oldChild) {
      const removedNode = removeChild.call(this, oldChild);
      return callNodeSlot(removedNode, DisconnectingSlot);
    },
    replaceChild(newChild, oldChild) {
      const replacedNode = replaceChild.call(this, newChild, oldChild);
      callNodeSlot(replacedNode, DisconnectingSlot);
      callNodeSlot(newChild, ConnectingSlot);
      return replacedNode;
    }
  });
}
/**
 * EXPERIMENTAL: This function is almost identical to document.createElement with the slightly
 * difference that in the options, you can pass the `is` property set to a Constructor instead of
 * just a string value. The intent is to allow the creation of an element controlled by LWC without
 * having to register the element as a custom element.
 *
 * NOTE: The returned type incorrectly includes _all_ properties defined on the component class,
 * even though the runtime object only uses those decorated with `@api`. This is due to a
 * limitation of TypeScript. To avoid inferring incorrect properties, provide an explicit generic
 * parameter, e.g. `createElement<typeof LightningElement>('x-foo', { is: FooCtor })`.
 * @param sel The tagname of the element to create
 * @param options Control the behavior of the created element
 * @param options.is The LWC component that the element should be
 * @param options.mode What kind of shadow root to use
 * @returns The created HTML element
 * @throws Throws when called with invalid parameters.
 * @example
 * const el = createElement('x-foo', { is: FooCtor });
 */
function createElement(sel, options) {
  if (!isObject(options) || isNull(options)) {
    throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString(options)}".`);
  }
  const Ctor = options.is;
  if (!isFunction$1(Ctor)) {
    throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
  }
  const {
    createCustomElement
  } = renderer;
  // tagName must be all lowercase, unfortunately, we have legacy code that is
  // passing `sel` as a camel-case, which makes them invalid custom elements name
  // the following line guarantees that this does not leaks beyond this point.
  const tagName = StringToLowerCase.call(sel);
  const useNativeCustomElementLifecycle = !lwcRuntimeFlags.DISABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE;
  const isFormAssociated = shouldBeFormAssociated(Ctor);
  // the custom element from the registry is expecting an upgrade callback
  /*
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  const upgradeCallback = elm => {
    createVM(elm, Ctor, renderer, {
      tagName,
      mode: options.mode !== 'closed' ? 'open' : 'closed',
      owner: null
    });
    if (!useNativeCustomElementLifecycle) {
      // Monkey-patch on-demand, because `lwcRuntimeFlags.DISABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE` may be set to
      // `true` lazily, after `@lwc/engine-dom` has finished initializing but before a component has rendered.
      monkeyPatchDomAPIs();
      ConnectingSlot.set(elm, connectRootElement);
      DisconnectingSlot.set(elm, disconnectRootElement);
    }
  };
  return createCustomElement(tagName, upgradeCallback, useNativeCustomElementLifecycle, isFormAssociated);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ComponentConstructorToCustomElementConstructorMap = new Map();
function getCustomElementConstructor(Ctor) {
  if (Ctor === LightningElement) {
    throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
  }
  let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
  if (isUndefined$1(ce)) {
    ce = buildCustomElementConstructor(Ctor);
    ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
  }
  return ce;
}
/**
 * This static getter builds a Web Component class from a LWC constructor so it can be registered
 * as a new element via customElements.define() at any given time.
 * @example
 * import Foo from 'ns/foo';
 * customElements.define('x-foo', Foo.CustomElementConstructor);
 * const elm = document.createElement('x-foo');
 */
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    return getCustomElementConstructor(this);
  }
});
freeze(LightningElement);
seal(LightningElement.prototype);
/** version: 9.5.3 */

function stylesheet$1(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [((useActualHostSelector ? ":host {" : hostSelector + " {")), "display: block;color: #242c32;}*", shadowSelector, " {box-sizing: border-box;}button", shadowSelector, ",select", shadowSelector, " {font: inherit;}button", shadowSelector, " {cursor: pointer;}a", shadowSelector, " {color: inherit;text-underline-offset: 4px;}button:focus-visible", shadowSelector, ",a:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, ",pre:focus-visible", shadowSelector, " {outline: 3px solid #a44d35;outline-offset: 4px;}button", shadowSelector, " {min-height: 44px;}svg", shadowSelector, " {width: 19px;height: 19px;fill: none;stroke: currentColor;stroke-width: 1.5;flex-shrink: 0;}.shell", shadowSelector, " {max-width: 1460px;padding: 0 60px;margin: auto;}.topbar", shadowSelector, " {height: 92px;border-bottom: 1px solid #d9d9d2;display: flex;align-items: center;gap: 36px;}.brand", shadowSelector, " {text-decoration: none;display: flex;align-items: center;gap: 12px;font-size: 23px;font-weight: 700;letter-spacing: -0.04em;}.brand", shadowSelector, " svg", shadowSelector, " {width: 28px;height: 28px;stroke: none;}.brand-light", shadowSelector, " {font-weight: 400;}.topbar", shadowSelector, " nav", shadowSelector, " {margin-left: auto;display: flex;gap: 24px;}.nav", shadowSelector, " {border: 0;background: none;font-size: 12px;padding: 8px 0;color: #515b5c;}.nav:hover", shadowSelector, ",.nav.active", shadowSelector, " {color: #242c32;text-decoration: underline;text-underline-offset: 7px;}.download", shadowSelector, " {display: flex;gap: 10px;align-items: center;text-decoration: none;font-size: 12px;font-weight: 500;padding: 10px 0 10px 30px;border-left: 1px solid #cbd5c5;}.intro", shadowSelector, " {padding: 48px 0 38px;display: flex;align-items: flex-end;justify-content: space-between;gap: 30px;}h1", shadowSelector, ",h2", shadowSelector, ",h3", shadowSelector, ",p", shadowSelector, " {margin: 0;}h1", shadowSelector, " {font-size: 42px;font-weight: 500;letter-spacing: -0.035em;line-height: 1.17;}h1", shadowSelector, " span", shadowSelector, " {color: #a44d35;}.intro", shadowSelector, " p", shadowSelector, " {max-width: 560px;font-size: 13px;line-height: 1.85;color: #515b5c;margin-top: 21px;}.runtime", shadowSelector, " {display: flex;gap: 9px;align-items: flex-start;font-size: 12px;white-space: nowrap;margin-bottom: 6px;}.runtime-dot", shadowSelector, " {width: 6px;height: 6px;background: #a44d35;border-radius: 50%;margin-top: 4px;}.runtime", shadowSelector, " small", shadowSelector, " {display: block;font-size: 12px;color: #515b5c;margin-top: 8px;}.workspace-heading", shadowSelector, " {display: flex;justify-content: space-between;align-items: center;border-bottom: 1px solid #babdb6;gap: 20px;}.demo-tabs", shadowSelector, " {display: flex;gap: 30px;min-width: 0;}.demo-tab", shadowSelector, " {display: flex;align-items: center;gap: 9px;background: none;border: 0;border-bottom: 2px solid transparent;padding: 15px 0;color: #515b5c;font-size: 13px;font-weight: 500;white-space: nowrap;}.demo-tab.active", shadowSelector, " {border-bottom-color: #263d4a;color: #263d4a;}.demo-tab:hover", shadowSelector, " {color: #263d4a;}.reset", shadowSelector, " {background: none;border: 0;font-size: 12px;color: #515b5c;white-space: nowrap;padding: 10px 0;}.reset:hover", shadowSelector, " {text-decoration: underline;}.implementation-bar", shadowSelector, " {display: flex;justify-content: space-between;gap: 20px;align-items: center;margin-top: 30px;padding: 18px 0;border-top: 1px solid #d9d9d2;font-size: 12px;}.implementation-bar", shadowSelector, " > div", shadowSelector, " {display: flex;gap: 18px;flex-wrap: wrap;align-items: center;}.implementation-bar", shadowSelector, " code", shadowSelector, " {font-size: 12px;color: #31583e;}.implementation-bar", shadowSelector, " span", shadowSelector, " {font-size: 12px;color: #515b5c;}.implementation-bar", shadowSelector, " button", shadowSelector, " {border: 0;background: none;color: #263d4a;display: flex;align-items: center;gap: 9px;font-size: 12px;white-space: nowrap;}footer", shadowSelector, " {padding: 24px 0 30px;display: flex;justify-content: space-between;gap: 20px;font-size: 12px;color: #515b5c;border-top: 1px solid #d9d9d2;margin-top: 14px;}footer", shadowSelector, " p", shadowSelector, " {display: flex;align-items: center;gap: 6px;}.sample-dot", shadowSelector, " {height: 5px;width: 5px;border-radius: 50%;background: #6d8861;}footer", shadowSelector, " > span", shadowSelector, " {white-space: nowrap;}main", shadowSelector, " {min-height: 550px;}[hidden]", shadowSelector, " {display: none !important;}.architecture", shadowSelector, ",.source-section", shadowSelector, " {padding: 36px 0 18px;}h2", shadowSelector, " {font-size: 29px;letter-spacing: -0.025em;font-weight: 500;line-height: 1.25;}.lead", shadowSelector, " {font-size: 14px;line-height: 1.9;color: #515b5c;max-width: 80ch;margin-top: 18px;}.architecture-columns", shadowSelector, " {display: grid;grid-template-columns: 1fr 1fr;gap: 70px;margin-top: 34px;}.architecture", shadowSelector, " h3", shadowSelector, " {font-size: 17px;font-weight: 600;margin-bottom: 22px;}.architecture", shadowSelector, " ol", shadowSelector, " {padding-left: 20px;margin: 0;}.architecture", shadowSelector, " li", shadowSelector, " {padding: 0 0 24px 8px;font-size: 14px;}.architecture", shadowSelector, " li", shadowSelector, " strong", shadowSelector, " {font-weight: 500;}.architecture", shadowSelector, " li", shadowSelector, " p", shadowSelector, " {font-size: 12px;line-height: 1.9;color: #515b5c;margin-top: 8px;}.engineering", shadowSelector, " {margin-top: 18px;}.engineering", shadowSelector, " > div", shadowSelector, " {display: grid;grid-template-columns: 180px 1fr;gap: 25px;padding: 17px 0;border-top: 1px solid #d9d9d2;font-size: 12px;}.engineering", shadowSelector, " strong", shadowSelector, " {font-weight: 500;}.engineering", shadowSelector, " p", shadowSelector, " {color: #515b5c;line-height: 1.9;}.platform-note", shadowSelector, " {margin-top: 25px;background: #eaf0e1;padding: 20px 24px;font-size: 12px;line-height: 1.9;color: #385235;}.source-heading", shadowSelector, " {display: flex;justify-content: space-between;align-items: flex-start;gap: 30px;}.source-heading", shadowSelector, " p", shadowSelector, " {font-size: 13px;color: #515b5c;line-height: 1.8;margin-top: 14px;}.source-heading", shadowSelector, " label", shadowSelector, " {font-size: 12px;display: block;min-width: 260px;}.source-heading", shadowSelector, " select", shadowSelector, " {display: block;width: 100%;border: 1px solid #bac9b7;border-radius: 5px;background: white;padding: 11px;margin-top: 9px;font-size: 12px;color: #242c32;}.source-note", shadowSelector, " {font-size: 12px;color: #515b5c;margin-top: 26px;line-height: 1.8;}pre", shadowSelector, " {margin: 18px 0 0;background: #1b2e26;color: #e6eddf;border-radius: 8px;overflow: auto;max-height: 660px;padding: 28px;font-size: 12px;line-height: 1.9;tab-size: 2;}pre", shadowSelector, " code", shadowSelector, " {font-family: ui-monospace, SFMono-Regular, Consolas, monospace;}.error", shadowSelector, " {font-size: 12px;color: #a33529;margin-top: 16px;}@media (min-width: 1500px) {.shell", shadowSelector, " {padding: 0 70px;}}@media (max-width: 1100px) {.shell", shadowSelector, " {padding: 0 32px;}h1", shadowSelector, " {font-size: 36px;}.intro", shadowSelector, " {gap: 20px;}.topbar", shadowSelector, " {gap: 25px;}.demo-tabs", shadowSelector, " {gap: 24px;}}@media (max-width: 850px) {.runtime", shadowSelector, " {display: none;}.intro", shadowSelector, " {padding-top: 36px;}.download", shadowSelector, " {padding-left: 20px;}.topbar", shadowSelector, " {gap: 20px;}.topbar", shadowSelector, " nav", shadowSelector, " {gap: 18px;}.footer-detail", shadowSelector, " {display: none;}.architecture-columns", shadowSelector, " {gap: 30px;}.source-heading", shadowSelector, " {display: block;}.source-heading", shadowSelector, " label", shadowSelector, " {max-width: 360px;margin-top: 25px;}}@media (max-width: 600px) {.shell", shadowSelector, " {padding: 0 20px;}.topbar", shadowSelector, " {height: auto;min-height: 88px;flex-wrap: wrap;gap: 12px;padding: 20px 0 14px;}.brand", shadowSelector, " {font-size: 21px;}.brand", shadowSelector, " svg", shadowSelector, " {width: 24px;height: 24px;}.topbar", shadowSelector, " nav", shadowSelector, " {order: 3;width: 100%;margin-left: 0;gap: 25px;}.download", shadowSelector, " {margin-left: auto;font-size: 12px;border: 0;padding: 0;}.download", shadowSelector, " svg", shadowSelector, " {width: 15px;}.nav", shadowSelector, " {font-size: 12px;min-height: 30px;}h1", shadowSelector, " {font-size: 30px;line-height: 1.2;}.intro", shadowSelector, " {padding: 30px 0;}.intro", shadowSelector, " p", shadowSelector, " {font-size: 12px;margin-top: 18px;}.desktop", shadowSelector, " {display: none;}.workspace-heading", shadowSelector, " {display: block;position: relative;}.demo-tabs", shadowSelector, " {gap: 18px;overflow-x: auto;}.demo-tab", shadowSelector, " {font-size: 12px;gap: 6px;padding: 13px 0;}.demo-tab", shadowSelector, " svg", shadowSelector, " {width: 15px;}.reset", shadowSelector, " {position: absolute;right: 0;top: -33px;min-height: 30px;font-size: 12px;}.implementation-bar", shadowSelector, " {display: block;margin-top: 22px;}.implementation-bar", shadowSelector, " > div", shadowSelector, " {gap: 8px;}.implementation-bar", shadowSelector, " button", shadowSelector, " {margin-top: 8px;padding: 0;}footer", shadowSelector, " {flex-wrap: wrap;font-size: 12px;padding-bottom: 20px;margin-top: 0;gap: 12px;}.architecture-columns", shadowSelector, " {grid-template-columns: 1fr;gap: 16px;}h2", shadowSelector, " {font-size: 26px;}.engineering", shadowSelector, " > div", shadowSelector, " {grid-template-columns: 1fr;gap: 6px;}.platform-note", shadowSelector, " {padding: 18px;}.source-heading", shadowSelector, " label", shadowSelector, " {min-width: 0;}pre", shadowSelector, " {padding: 18px;font-size: 12px;}}.topbar", shadowSelector, " {height: 76px;}.intro", shadowSelector, " {padding: 38px 0 28px;}.intro", shadowSelector, " p", shadowSelector, " {font-size: 15px;line-height: 1.7;margin-top: 15px;}.demo-tabs", shadowSelector, " {gap: 8px;}.demo-tab", shadowSelector, " {padding: 13px 16px;border-radius: 7px 7px 0 0;}.demo-tab:hover", shadowSelector, " {background: #f0f0eb;}.demo-tab.active", shadowSelector, " {background: #e5e9e6;border-bottom-color: #263d4a;}.download", shadowSelector, " {font-size: 13px;}@media (max-width: 600px) {.topbar", shadowSelector, " {height: auto;}.intro", shadowSelector, " {padding: 25px 0 32px;}.intro", shadowSelector, " p", shadowSelector, " {font-size: 14px;}.demo-tabs", shadowSelector, " {gap: 4px;}.demo-tab", shadowSelector, " {padding: 12px 10px;font-size: 12px;}.reset", shadowSelector, " {top: -30px;}}.shell", shadowSelector, " {max-width: 1360px;}.topbar", shadowSelector, " {border-bottom: 2px solid #263d4a;}.brand", shadowSelector, " {letter-spacing: -0.025em;}.intro", shadowSelector, " {padding: 42px 0 34px;}h1", shadowSelector, " {font-size: clamp(34px, 4.1vw, 52px);font-weight: 600;letter-spacing: -0.03em;line-height: 1.12;}h1", shadowSelector, " span", shadowSelector, " {color: #a44d35;}.intro", shadowSelector, " p", shadowSelector, " {max-width: 64ch;font-size: 15px;line-height: 1.7;}.demo-tab", shadowSelector, " {border-radius: 0;font-weight: 600;}.demo-tab.active", shadowSelector, " {background: transparent;border-bottom: 2px solid #a44d35;color: #242c32;}.implementation-bar", shadowSelector, " {justify-content: flex-end;}@media(max-width:600px) {.intro", shadowSelector, " {padding: 28px 0 36px;}h1", shadowSelector, " {font-size: 34px;}.intro", shadowSelector, " p", shadowSelector, " {font-size: 14px;}.demo-tab", shadowSelector, " {padding-left: 8px;padding-right: 8px;}}.shell", shadowSelector, "{max-width:1320px}.topbar", shadowSelector, "{height:76px;border-bottom-color:#ccd3d1}.intro", shadowSelector, "{padding:38px 0 30px;align-items:flex-start}.intro", shadowSelector, " h1", shadowSelector, "{font-size:clamp(34px,3.6vw,48px);line-height:1.12;font-weight:600;letter-spacing:-.03em;text-wrap:balance}.intro", shadowSelector, " h1", shadowSelector, " span", shadowSelector, "{color:#93523f}.intro", shadowSelector, " p", shadowSelector, "{max-width:58ch;margin-top:14px;font-size:15px;line-height:1.6;text-wrap:pretty}.demo-tabs", shadowSelector, "{gap:0}.demo-tab", shadowSelector, "{font-size:14px;padding:14px 12px 13px;border-radius:0}.demo-tab.active", shadowSelector, "{border-bottom:2px solid #a44d35;background:transparent}.nav", shadowSelector, ",.reset", shadowSelector, ",.implementation-bar", shadowSelector, " button", shadowSelector, "{font-size:13px}.nav:active", shadowSelector, ",.reset:active", shadowSelector, ",.implementation-bar", shadowSelector, " button:active", shadowSelector, "{transform:translateY(1px)}@media(max-width:600px){.topbar", shadowSelector, "{height:auto}.intro", shadowSelector, "{padding:28px 0 35px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:34px}.intro", shadowSelector, " p", shadowSelector, "{font-size:14px}.demo-tab", shadowSelector, "{padding:12px 0;font-size:13px}.workspace-heading", shadowSelector, " .reset", shadowSelector, "{top:-33px}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#1d304a}.shell", shadowSelector, "{max-width:1440px;padding:0 64px}.topbar", shadowSelector, "{height:84px;border-bottom:1px solid #cfc8ba}.brand", shadowSelector, "{font-size:23px;color:#203d64;letter-spacing:-.05em}.brand", shadowSelector, " svg", shadowSelector, "{background:#e66d3c;padding:5px;width:32px;height:32px}.brand", shadowSelector, " svg", shadowSelector, " path", shadowSelector, "{fill:#fff}.brand-light", shadowSelector, "{font-weight:400}.topbar", shadowSelector, " nav", shadowSelector, "{gap:30px}.nav", shadowSelector, "{font-size:13px;font-weight:600;color:#46566a}.nav.active", shadowSelector, ",.nav:hover", shadowSelector, "{color:#bc552d;text-decoration-color:#e66d3c}.download", shadowSelector, "{border-left:1px solid #d3ccbd;color:#203d64;font-size:13px;font-weight:700}.intro", shadowSelector, "{margin:28px 0 0;padding:45px 52px 49px;background:#203d64;color:#fff;min-height:254px;position:relative;overflow:hidden}.intro", shadowSelector, ":after{content:'✳';position:absolute;right:55px;top:20px;font-family:Georgia,serif;font-size:180px;line-height:1;color:#f1ad78;opacity:.85;pointer-events:none}.intro", shadowSelector, " h1", shadowSelector, "{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(38px,4.2vw,60px);letter-spacing:-.035em;line-height:1.06;position:relative;z-index:1}.intro", shadowSelector, " h1", shadowSelector, " span", shadowSelector, "{color:#f3c19b}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{font-size:15px;max-width:55ch;color:#e6e5dd;margin-top:17px;position:relative;z-index:1}.intro", shadowSelector, " .intro-kicker", shadowSelector, "{font-size:10px;font-weight:700;letter-spacing:.13em;color:#efbb8f;margin:0 0 22px;max-width:none}.intro-kicker", shadowSelector, " span", shadowSelector, "{padding:0 6px;color:#fff}main", shadowSelector, "{min-height:550px}.workspace-heading", shadowSelector, "{border-bottom:1px solid #bcb4a6;margin-top:18px}.demo-tab", shadowSelector, "{padding:16px 0;color:#203d64;font-weight:700}.demo-tab.active", shadowSelector, "{color:#203d64;border-bottom:3px solid #e66d3c}.demo-tab:hover", shadowSelector, "{background:transparent}.reset", shadowSelector, "{font-weight:600;color:#405471}.implementation-bar", shadowSelector, "{border-color:#d2cbbc;justify-content:flex-end}.implementation-bar", shadowSelector, " button", shadowSelector, "{color:#203d64;font-weight:700}.architecture", shadowSelector, ",.source-section", shadowSelector, "{padding:40px 0}.architecture", shadowSelector, " h2", shadowSelector, ",.source-section", shadowSelector, " h2", shadowSelector, "{font:400 35px/1.15 Georgia,serif;color:#203d64}.lead", shadowSelector, ",.architecture", shadowSelector, " li", shadowSelector, " p", shadowSelector, ",.engineering", shadowSelector, " p", shadowSelector, ",.source-heading", shadowSelector, " p", shadowSelector, ",.source-note", shadowSelector, "{color:#536171}.architecture", shadowSelector, " h3", shadowSelector, "{color:#203d64}.engineering", shadowSelector, ">div", shadowSelector, "{border-color:#d2cbbc}.source-heading", shadowSelector, " select", shadowSelector, "{border-color:#c9c2b5}pre", shadowSelector, "{background:#20344d;color:#f5efe3;border-radius:2px}footer", shadowSelector, "{border-color:#cfc8ba;color:#5f6873}.sample-dot", shadowSelector, "{background:#d97948}@media(max-width:850px){.shell", shadowSelector, "{padding:0 28px}.intro", shadowSelector, "{padding:40px}.intro", shadowSelector, ":after{right:25px;font-size:130px;opacity:.3}.intro", shadowSelector, " h1", shadowSelector, "{font-size:44px}}@media(max-width:600px){.shell", shadowSelector, "{padding:0 18px}.topbar", shadowSelector, "{height:auto;padding:16px 0;gap:10px}.topbar", shadowSelector, " nav", shadowSelector, "{gap:24px}.brand", shadowSelector, "{font-size:20px}.brand", shadowSelector, " svg", shadowSelector, "{width:28px;height:28px}.download", shadowSelector, "{padding:0;border:0}.intro", shadowSelector, "{margin-top:18px;padding:30px 24px 32px;min-height:0}.intro", shadowSelector, ":after{font-size:90px;right:12px;top:20px;opacity:.25}.intro", shadowSelector, " h1", shadowSelector, "{font-size:38px}.intro", shadowSelector, " .intro-kicker", shadowSelector, "{font-size:9px;margin-bottom:18px}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{font-size:14px;margin-top:14px}.workspace-heading", shadowSelector, "{display:flex;position:static;margin-top:10px}.workspace-heading", shadowSelector, " .reset", shadowSelector, "{position:static;min-height:44px}.demo-tab", shadowSelector, "{font-size:12px;padding:13px 0}.architecture", shadowSelector, " h2", shadowSelector, ",.source-section", shadowSelector, " h2", shadowSelector, "{font-size:29px}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#352f2a}.shell", shadowSelector, "{max-width:1280px;padding:0 48px}.topbar", shadowSelector, "{height:80px;border-color:#d8d0c4}.brand", shadowSelector, "{color:#49352e;font-size:21px;letter-spacing:-.025em}.brand", shadowSelector, " svg", shadowSelector, "{background:#9a513b;border-radius:50%;padding:7px;width:34px;height:34px}.brand-light", shadowSelector, "{font-weight:400}.nav", shadowSelector, ",.download", shadowSelector, "{color:#5c514b}.nav.active", shadowSelector, ",.nav:hover", shadowSelector, "{color:#8c4936;text-decoration-color:#a45d44}.download", shadowSelector, "{border-color:#d8d0c4}.intro", shadowSelector, "{background:transparent;color:#352f2a;margin:0;padding:56px 0 34px;min-height:0}.intro", shadowSelector, ":after{display:none}.intro", shadowSelector, " h1", shadowSelector, "{font-family:Studio,'Segoe UI',sans-serif;color:#352f2a;font-size:clamp(32px,3.5vw,46px);font-weight:600;letter-spacing:-.035em;line-height:1.12}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{color:#665c54;font-size:15px;line-height:1.65;margin-top:13px}.workspace-heading", shadowSelector, "{margin-top:0;border-color:#cfc4b5}.demo-tab", shadowSelector, "{color:#4a3931}.demo-tab.active", shadowSelector, "{color:#4a3931;border-bottom-color:#a45d44}.reset", shadowSelector, "{color:#66564d}.implementation-bar", shadowSelector, "{border-color:#d9d0c5}.implementation-bar", shadowSelector, " button", shadowSelector, "{color:#704735}.architecture", shadowSelector, " h2", shadowSelector, ",.source-section", shadowSelector, " h2", shadowSelector, "{font-family:Studio,'Segoe UI',sans-serif;font-size:30px;font-weight:600;color:#47372e}.architecture", shadowSelector, " h3", shadowSelector, "{color:#47372e}.lead", shadowSelector, ",.architecture", shadowSelector, " li", shadowSelector, " p", shadowSelector, ",.engineering", shadowSelector, " p", shadowSelector, ",.source-heading", shadowSelector, " p", shadowSelector, ",.source-note", shadowSelector, "{color:#665c54}pre", shadowSelector, "{background:#3c3833;color:#f7f0e6}.sample-dot", shadowSelector, "{background:#a45d44}footer", shadowSelector, "{border-color:#d8d0c4;color:#6a6058}@media(max-width:850px){.shell", shadowSelector, "{padding:0 28px}.intro", shadowSelector, "{padding:44px 0 30px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:38px}}@media(max-width:600px){.shell", shadowSelector, "{padding:0 20px}.topbar", shadowSelector, "{height:auto;padding:16px 0}.intro", shadowSelector, "{margin:0;padding:34px 0 28px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:32px}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{font-size:14px}.workspace-heading", shadowSelector, "{margin-top:0}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#2a1a12}.shell", shadowSelector, "{max-width:1440px;padding:0 48px}.topbar", shadowSelector, "{height:88px;border-color:rgba(42,26,18,.1)}.brand", shadowSelector, "{color:#2a1a12;letter-spacing:-.04em;font-size:22px;font-weight:600}.brand", shadowSelector, " svg", shadowSelector, "{background:#3b2116}.brand-light", shadowSelector, "{font-weight:400}.topbar", shadowSelector, " nav", shadowSelector, "{gap:8px}.nav", shadowSelector, "{background:#ece3d7;border-radius:999px;padding:9px 18px;color:#5b4a3f;font-size:13px;font-weight:500}.nav.active", shadowSelector, ",.nav:hover", shadowSelector, "{background:#e3d6c6;color:#2a1a12;text-decoration:none}.download", shadowSelector, "{border:0;border-radius:999px;background:#3b2116;color:#f6ede2;padding:12px 20px;font-weight:500}.download:hover", shadowSelector, "{background:#573829}.intro", shadowSelector, "{padding:72px 0 52px}.intro", shadowSelector, " h1", shadowSelector, "{font-family:'Inter Tight',Studio,system-ui,sans-serif;color:#2a1a12;font-size:clamp(48px,6vw,84px);font-weight:400;letter-spacing:-.045em;line-height:.98;max-width:900px}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{color:#5b4a3f;font-size:clamp(16px,1.4vw,19px);font-weight:300;line-height:1.5;margin-top:22px}.workspace-heading", shadowSelector, "{border-color:rgba(42,26,18,.13)}.demo-tab", shadowSelector, "{color:#5b4a3f;font-weight:500}.demo-tab.active", shadowSelector, "{border-bottom-color:#3b2116;color:#2a1a12}.reset", shadowSelector, "{color:#5b4a3f}.implementation-bar", shadowSelector, " button", shadowSelector, "{color:#3b2116}.architecture", shadowSelector, " h2", shadowSelector, ",.source-section", shadowSelector, " h2", shadowSelector, "{font-family:'Inter Tight',Studio,system-ui,sans-serif;font-size:clamp(34px,4vw,52px);font-weight:400;letter-spacing:-.04em;color:#2a1a12}.architecture", shadowSelector, " h3", shadowSelector, "{color:#2a1a12}.lead", shadowSelector, ",.architecture", shadowSelector, " li", shadowSelector, " p", shadowSelector, ",.engineering", shadowSelector, " p", shadowSelector, ",.source-heading", shadowSelector, " p", shadowSelector, ",.source-note", shadowSelector, ",footer", shadowSelector, "{color:#5b4a3f}pre", shadowSelector, "{background:#3b2116;color:#f6f0e7;border-radius:20px}.sample-dot", shadowSelector, "{background:#8d7b6f}@media(max-width:850px){.shell", shadowSelector, "{padding:0 24px}.intro", shadowSelector, "{padding:55px 0 40px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:clamp(44px,7vw,64px)}}@media(max-width:600px){.shell", shadowSelector, "{padding:0 16px}.topbar", shadowSelector, "{height:auto;padding:16px 0}.topbar", shadowSelector, " nav", shadowSelector, "{gap:6px}.nav", shadowSelector, "{padding:8px 14px}.download", shadowSelector, "{padding:10px 15px;font-size:12px}.intro", shadowSelector, "{padding:46px 0 36px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:clamp(42px,10vw,55px)}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{font-size:16px}.workspace-heading", shadowSelector, "{gap:10px}.demo-tab", shadowSelector, "{white-space:normal;text-align:left}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#2a1a12}.topbar", shadowSelector, "{border-color:rgba(42,26,18,.08)}.brand", shadowSelector, ",.demo-tab.active", shadowSelector, "{color:#2a1a12}.brand", shadowSelector, " svg", shadowSelector, ",.download", shadowSelector, "{background:#3b2116}.brand", shadowSelector, " svg", shadowSelector, " path", shadowSelector, "{fill:#f6f0e7}.nav", shadowSelector, "{background:#ece3d7;color:#5b4a3f}.nav:hover", shadowSelector, ",.nav.active", shadowSelector, "{background:#e3d6c6;color:#2a1a12}.intro", shadowSelector, " h1", shadowSelector, "{color:#3a2419}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, ",.reset", shadowSelector, ",footer", shadowSelector, "{color:#5b4a3f}.workspace-heading", shadowSelector, ",.implementation-bar", shadowSelector, ",footer", shadowSelector, "{border-color:rgba(42,26,18,.10)}.demo-tab.active", shadowSelector, "{border-color:#3b2116}.download", shadowSelector, ",.download:hover", shadowSelector, "{color:#f6ede2}.source-heading", shadowSelector, " select", shadowSelector, "{background:#fffaf4;border-color:#d6c5b6;color:#2a1a12}pre", shadowSelector, "{background:#3b2116;color:#f6f0e7}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "font-family:Arial,Helvetica,sans-serif;color:#181818}.shell", shadowSelector, "{max-width:none;padding:0 24px;background:#f3f3f3}.topbar", shadowSelector, "{height:58px;background:#fff;border-bottom:1px solid #d8dde6;margin:0 -24px;padding:0 24px;gap:24px}.brand", shadowSelector, "{font-family:Arial,Helvetica,sans-serif;color:#032d60;font-size:16px;letter-spacing:0;font-weight:700}.brand", shadowSelector, " svg", shadowSelector, "{background:#0176d3;border-radius:4px;padding:6px;width:32px;height:32px}.brand", shadowSelector, " svg", shadowSelector, " path", shadowSelector, "{fill:#fff}.topbar", shadowSelector, " nav", shadowSelector, "{height:100%;gap:0}.nav", shadowSelector, "{border-radius:0;background:transparent;color:#444;padding:0 18px;border-bottom:3px solid transparent;font-weight:600}.nav.active", shadowSelector, ",.nav:hover", shadowSelector, "{background:#eef4ff;color:#0176d3;text-decoration:none}.nav.active", shadowSelector, "{border-bottom-color:#0176d3}.download", shadowSelector, "{background:#0176d3;color:#fff;border-radius:4px;font-size:13px;padding:9px 14px}.download:hover", shadowSelector, "{background:#014486;color:#fff}.intro", shadowSelector, "{background:#f8f9fa;border:1px solid #dddbda;border-radius:5px 5px 0 0;margin:24px 0 0;padding:20px 24px;min-height:0}.intro", shadowSelector, ":after{display:none}.intro", shadowSelector, " h1", shadowSelector, "{font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.2;letter-spacing:0;color:#181818;font-weight:700}.intro", shadowSelector, " p:not(.intro-kicker)", shadowSelector, "{font-size:14px;line-height:1.5;color:#586779;margin-top:8px}.workspace-heading", shadowSelector, "{background:#fff;border:1px solid #dddbda;border-top:0;padding:0 20px;margin:0}.demo-tab", shadowSelector, "{color:#444;font-size:13px;font-weight:600}.demo-tab.active", shadowSelector, "{color:#0176d3;border-bottom-color:#0176d3}.reset", shadowSelector, ",.implementation-bar", shadowSelector, " button", shadowSelector, "{color:#0176d3}.reset", shadowSelector, "{border:1px solid #c9c9c9;background:#fff;border-radius:4px;padding:7px 12px;min-height:34px}.reset:hover", shadowSelector, "{background:#eef4ff;text-decoration:none}.implementation-bar", shadowSelector, ",footer", shadowSelector, "{border-color:#dddbda;color:#586779}.architecture", shadowSelector, " h2", shadowSelector, ",.source-section", shadowSelector, " h2", shadowSelector, "{font-family:Arial,Helvetica,sans-serif;font-size:25px;letter-spacing:0;color:#181818;font-weight:700}.architecture", shadowSelector, " h3", shadowSelector, "{color:#032d60}.lead", shadowSelector, ",.architecture", shadowSelector, " li", shadowSelector, " p", shadowSelector, ",.engineering", shadowSelector, " p", shadowSelector, ",.source-heading", shadowSelector, " p", shadowSelector, ",.source-note", shadowSelector, "{color:#586779}.source-heading", shadowSelector, " select", shadowSelector, "{border-color:#c9c9c9;color:#181818;background:#fff}pre", shadowSelector, "{background:#1b2638;color:#f3f3f3;border-radius:5px}.sample-dot", shadowSelector, "{background:#2e844a}@media(max-width:600px){.shell", shadowSelector, "{padding:0 12px}.topbar", shadowSelector, "{height:auto;margin:0 -12px;padding:12px;gap:8px}.topbar", shadowSelector, " nav", shadowSelector, "{min-height:40px}.nav", shadowSelector, "{padding:8px 10px}.intro", shadowSelector, "{margin-top:16px;padding:18px}.intro", shadowSelector, " h1", shadowSelector, "{font-size:23px}.workspace-heading", shadowSelector, "{padding:0 12px}}"].join('');
  /*LWC compiler v9.5.3*/
}
var _implicitStylesheets$1 = [stylesheet$1];

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [((useActualHostSelector ? ":host {" : hostSelector + " {")), "display: block;color: #242c32;}*", shadowSelector, " {box-sizing: border-box;}h2", shadowSelector, ",h3", shadowSelector, ",h4", shadowSelector, ",p", shadowSelector, " {margin: 0;}button", shadowSelector, ",input", shadowSelector, ",select", shadowSelector, " {font: inherit;}button", shadowSelector, " {cursor: pointer;}button:disabled", shadowSelector, " {cursor: default;opacity: 0.5;}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, " {outline: 3px solid #a44d35;outline-offset: 3px;}svg", shadowSelector, " {width: 20px;height: 20px;fill: none;stroke: currentColor;stroke-width: 1.5;}input", shadowSelector, ",select", shadowSelector, " {border: 1px solid #b6bcb7;border-radius: 5px;background: white;color: #242c32;padding: 11px;width: 100%;font-size: 12px;}.scenario", shadowSelector, " {display: grid;grid-template-columns: 1fr auto;padding: 20px 0 28px;border-bottom: 1px solid #d9d9d2;font-size: 13px;gap: 5px 30px;}.scenario", shadowSelector, " p", shadowSelector, " {max-width: 67ch;line-height: 1.7;color: #515b5c;grid-column: 1;}.scenario", shadowSelector, " > span", shadowSelector, " {grid-column: 2;grid-row: 1;white-space: nowrap;color: #515b5c;}.booking-layout", shadowSelector, " {display: grid;grid-template-columns: minmax(0, 1fr) 290px;gap: 40px;padding-top: 30px;}.schedule", shadowSelector, " {background: white;border: 1px solid #d9d9d2;border-radius: 12px;min-width: 0;padding: 28px;}h2", shadowSelector, " {font-size: 25px;font-weight: 600;letter-spacing: -0.025em;}.heading", shadowSelector, " p", shadowSelector, " {font-size: 12px;color: #515b5c;margin-top: 8px;}.service-select", shadowSelector, " {margin-top: 28px;}.service-select", shadowSelector, " p", shadowSelector, " {font-size: 12px;line-height: 1.7;color: #515b5c;margin-top: 8px;}label", shadowSelector, ",legend", shadowSelector, " {font-size: 12px;font-weight: 600;margin-bottom: 9px;display: block;}.service-select", shadowSelector, " select", shadowSelector, " {max-width: 360px;}fieldset", shadowSelector, " {border: 0;padding: 0;margin: 26px 0 0;}.days", shadowSelector, " {display: grid;grid-template-columns: repeat(5, 1fr);gap: 9px;}.day", shadowSelector, " {border: 1px solid #d9d9d2;border-radius: 6px;padding: 13px 5px;background: white;color: #242c32;min-height: 70px;}.day", shadowSelector, " span", shadowSelector, " {display: block;font-size: 12px;color: #515b5c;margin-bottom: 6px;}.day", shadowSelector, " strong", shadowSelector, " {font-size: 13px;font-weight: 500;}.day:hover", shadowSelector, ",.slot:hover", shadowSelector, " {background: #f5f8f0;}.day.selected", shadowSelector, " {background: #263d4a;color: white;border-color: #263d4a;}.day.selected", shadowSelector, " span", shadowSelector, " {color: #d6e6ce;}.availability-title", shadowSelector, " {display: flex;flex-wrap: wrap;justify-content: space-between;gap: 12px;margin-top: 30px;align-items: center;}h3", shadowSelector, " {font-size: 14px;font-weight: 600;}.availability-title", shadowSelector, " span", shadowSelector, ",.timezone", shadowSelector, " {font-size: 12px;color: #515b5c;}.timezone", shadowSelector, " {margin-top: 7px;line-height: 1.6;}.slots", shadowSelector, " {margin-top: 18px;}.slot", shadowSelector, " {display: flex;align-items: center;gap: 12px;padding: 15px 0;border: 0;border-bottom: 1px solid #e2e8dd;background: white;width: 100%;text-align: left;color: #242c32;min-height: 78px;}.avatar", shadowSelector, " {border-radius: 50%;background: #edf2e8;color: #486341;display: grid;place-items: center;width: 35px;height: 35px;font-size: 12px;flex-shrink: 0;}.slot-person", shadowSelector, " {flex: 1;min-width: 0;}.slot-person", shadowSelector, " strong", shadowSelector, " {display: block;font-size: 12px;font-weight: 500;}.slot-person", shadowSelector, " small", shadowSelector, " {display: block;font-size: 12px;color: #515b5c;margin-top: 5px;}.slot-time", shadowSelector, " {font-size: 12px;white-space: nowrap;}.slot", shadowSelector, " svg", shadowSelector, " {margin-left: 4px;color: #aebdad;flex-shrink: 0;}.slot", shadowSelector, " svg", shadowSelector, " path", shadowSelector, " {visibility: hidden;}.slot.selected", shadowSelector, " {background: #f1f7e9;}.slot.selected", shadowSelector, " svg", shadowSelector, " {color: #3f6d38;}.slot.selected", shadowSelector, " svg", shadowSelector, " path", shadowSelector, " {visibility: visible;}.booking-details", shadowSelector, " > h3", shadowSelector, " {font-size: 26px;font-weight: 500;letter-spacing: -0.025em;line-height: 1.2;padding-top: 8px;}.details-intro", shadowSelector, " {font-size: 12px;line-height: 1.8;color: #515b5c;margin-top: 14px;}.selection", shadowSelector, " {display: flex;flex-direction: column;gap: 8px;padding: 20px 0;border-top: 1px solid #d9d9d2;border-bottom: 1px solid #d9d9d2;margin: 22px 0;font-size: 12px;}.selection", shadowSelector, " strong", shadowSelector, " {font-size: 13px;font-weight: 500;}.selection", shadowSelector, " span", shadowSelector, " {color: #515b5c;}.booking-details", shadowSelector, " label", shadowSelector, " {margin-top: 18px;font-size: 12px;}.data-note", shadowSelector, " {font-size: 12px;line-height: 1.7;color: #515b5c;margin-top: 12px;}.primary", shadowSelector, " {border: 1px solid #263d4a;background: #263d4a;color: white;padding: 12px 15px;border-radius: 5px;display: flex;align-items: center;justify-content: space-between;gap: 12px;font-size: 12px;font-weight: 600;width: 100%;margin-top: 18px;min-height: 44px;}.primary:hover", shadowSelector, " {background: #182f3c;}.confirmation", shadowSelector, " {padding: 20px 0;color: #2d5e30;border-bottom: 1px solid #d9d9d2;}.confirmation", shadowSelector, " h4", shadowSelector, " {font-size: 14px;font-weight: 500;margin-top: 7px;}.confirmation", shadowSelector, " p", shadowSelector, " {font-size: 12px;line-height: 1.7;margin-top: 8px;}.try-note", shadowSelector, " {margin-top: 26px;padding-top: 22px;border-top: 1px solid #d9d9d2;}.try-note", shadowSelector, " h4", shadowSelector, " {font-size: 12px;font-weight: 600;}.try-note", shadowSelector, " p", shadowSelector, " {font-size: 12px;line-height: 1.8;color: #515b5c;margin-top: 8px;}.error", shadowSelector, " {color: #a33529;font-size: 12px;line-height: 1.7;margin-top: 12px;}.bookings", shadowSelector, " {margin-top: 35px;}.bookings", shadowSelector, " > h3", shadowSelector, " {font-size: 18px;margin-bottom: 16px;}.booking-list", shadowSelector, " {border-top: 1px solid #cbd7c7;}.booking-list", shadowSelector, " article", shadowSelector, " {padding: 18px 0;display: flex;align-items: center;gap: 25px;border-bottom: 1px solid #d9d9d2;}.booking-list", shadowSelector, " article", shadowSelector, " > div", shadowSelector, " {flex: 1;}.booking-list", shadowSelector, " strong", shadowSelector, " {display: block;font-size: 12px;font-weight: 500;}.booking-list", shadowSelector, " article", shadowSelector, " > div", shadowSelector, " > span", shadowSelector, " {display: block;font-size: 12px;color: #515b5c;margin-top: 6px;}.badge", shadowSelector, " {font-size: 12px;padding: 6px 9px;border-radius: 4px;background: #e5f2df;color: #2d5e30;}.badge.cancelled", shadowSelector, " {background: #e9ece6;color: #515b5c;}.cancel", shadowSelector, " {font-size: 12px;background: white;border: 1px solid #bdcbb9;border-radius: 5px;padding: 9px 13px;min-height: 40px;color: #263d4a;}.empty", shadowSelector, " {padding: 30px 0;font-size: 12px;line-height: 1.8;}.empty", shadowSelector, " p", shadowSelector, " {margin-top: 8px;color: #515b5c;}@media (max-width: 1100px) {.booking-layout", shadowSelector, " {gap: 24px;grid-template-columns: minmax(0, 1fr) 250px;}.schedule", shadowSelector, " {padding: 22px;}}@media (max-width: 850px) {.booking-layout", shadowSelector, " {grid-template-columns: 1fr;}.booking-details", shadowSelector, " {max-width: 100%;display: block;}.booking-details", shadowSelector, " input", shadowSelector, " {max-width: 100%;}.scenario", shadowSelector, " > span", shadowSelector, " {display: none;}.booking-list", shadowSelector, " article", shadowSelector, " {flex-wrap: wrap;}.booking-list", shadowSelector, " article", shadowSelector, " > div", shadowSelector, " {min-width: 40%;}}@media (max-width: 520px) {.schedule", shadowSelector, " {padding: 20px 16px;}h2", shadowSelector, " {font-size: 22px;}.days", shadowSelector, " {gap: 5px;}.day", shadowSelector, " strong", shadowSelector, " {font-size: 12px;}.slot", shadowSelector, " {gap: 9px;flex-wrap: wrap;}.slot-person", shadowSelector, " small", shadowSelector, " {font-size: 12px;}.slot-time", shadowSelector, " {font-size: 12px;}.avatar", shadowSelector, " {width: 29px;height: 29px;}.slot", shadowSelector, " svg", shadowSelector, " {width: 16px;margin-left: 0;}.availability-title", shadowSelector, " {display: block;}.availability-title", shadowSelector, " span", shadowSelector, " {display: block;margin-top: 7px;}.booking-list", shadowSelector, " article", shadowSelector, " {gap: 16px;}}.scenario", shadowSelector, " {padding: 18px 0 22px;}.scenario", shadowSelector, " p", shadowSelector, ", .scenario", shadowSelector, " strong", shadowSelector, " {font-size: 14px;}.booking-layout", shadowSelector, " {padding-top: 24px;}.heading", shadowSelector, " p", shadowSelector, ", .service-select", shadowSelector, " p", shadowSelector, ", .details-intro", shadowSelector, ", .try-note", shadowSelector, " p", shadowSelector, " {font-size: 13px;}.slot-person", shadowSelector, " strong", shadowSelector, ", .slot-time", shadowSelector, ", .booking-details", shadowSelector, " input", shadowSelector, ", .booking-details", shadowSelector, " label", shadowSelector, " {font-size: 13px;}.slot.selected", shadowSelector, " {box-shadow: inset 0 0 0 1px #89a681;border-radius: 6px;padding-left: 10px;padding-right: 10px;}.primary", shadowSelector, " {font-size: 13px;min-height: 46px;}@media (max-width: 520px) {.scenario", shadowSelector, " p", shadowSelector, " {font-size: 13px;}.slot-person", shadowSelector, " small", shadowSelector, " {font-size: 12px;}.slot-time", shadowSelector, " {font-size: 12px;}}.scenario", shadowSelector, " {border-bottom-color: #bcbeb9;}.scenario", shadowSelector, " strong", shadowSelector, " {color: #a44d35;}.primary", shadowSelector, " {border-radius: 3px;}.primary", shadowSelector, ",.day", shadowSelector, ",.slot", shadowSelector, ",.cancel", shadowSelector, "{transition:transform 140ms cubic-bezier(.23,1,.32,1),background-color 140ms ease}.primary:active:not(:disabled)", shadowSelector, ",.day:active:not(:disabled)", shadowSelector, ",.slot:active:not(:disabled)", shadowSelector, ",.cancel:active:not(:disabled)", shadowSelector, "{transform:scale(.985)}@media (pointer:coarse){input", shadowSelector, ",select", shadowSelector, "{font-size:16px}button", shadowSelector, "{touch-action:manipulation}}@media (prefers-reduced-motion:reduce){.primary", shadowSelector, ",.day", shadowSelector, ",.slot", shadowSelector, ",.cancel", shadowSelector, "{transition:none;transform:none!important}}.scenario", shadowSelector, "{padding:18px 0 22px;align-items:start}.scenario", shadowSelector, " strong", shadowSelector, "{font-size:13px;letter-spacing:.02em;color:#8c4d3d}.scenario", shadowSelector, " p", shadowSelector, "{font-size:14px;line-height:1.65;max-width:65ch}.scenario", shadowSelector, ">span", shadowSelector, "{font-size:12px}.booking-layout", shadowSelector, "{grid-template-columns:minmax(0,1fr) minmax(270px,310px);gap:36px;padding-top:24px;align-items:start}.schedule", shadowSelector, "{border-radius:8px;padding:32px;background:#fff;border-color:#d6dcda}.heading", shadowSelector, " h2", shadowSelector, "{font-size:28px;line-height:1.2;letter-spacing:-.025em;text-wrap:balance}.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{font-size:14px;line-height:1.6}.service-select", shadowSelector, "{margin-top:26px}.service-select", shadowSelector, " select", shadowSelector, "{min-height:46px;font-size:14px}fieldset", shadowSelector, "{margin-top:28px}.days", shadowSelector, "{gap:8px}.day", shadowSelector, "{min-height:72px;border-radius:5px;transition:background-color 140ms cubic-bezier(.23,1,.32,1),border-color 140ms cubic-bezier(.23,1,.32,1),transform 140ms cubic-bezier(.23,1,.32,1)}.day.selected", shadowSelector, "{background:#263d4a;border-color:#263d4a}.day", shadowSelector, " strong", shadowSelector, "{font-size:14px}.day", shadowSelector, " span", shadowSelector, "{font-size:12px}.availability-title", shadowSelector, "{margin-top:30px}.availability-title", shadowSelector, " h3", shadowSelector, "{font-size:16px}.availability-title", shadowSelector, " span", shadowSelector, ",.timezone", shadowSelector, "{font-size:12px}.slot", shadowSelector, "{min-height:80px;padding:14px 10px;border-radius:5px}.slot-person", shadowSelector, " strong", shadowSelector, "{font-size:14px}.slot-person", shadowSelector, " small", shadowSelector, ",.slot-time", shadowSelector, "{font-size:12px}.avatar", shadowSelector, "{background:#e6eeed;color:#345b5a;width:38px;height:38px;font-size:12px}.slot.selected", shadowSelector, "{background:#eef4f2;box-shadow:inset 0 0 0 1px #92afaa}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#356b65}.booking-details", shadowSelector, "{padding:4px 0}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:25px}.booking-details", shadowSelector, " label", shadowSelector, "{font-size:13px;margin-top:18px}.booking-details", shadowSelector, " input", shadowSelector, "{font-size:14px;min-height:46px}.selection", shadowSelector, "{background:#e7edeb;padding:18px;margin:20px 0;border:0;border-radius:5px;font-size:13px}.selection", shadowSelector, " strong", shadowSelector, "{font-size:14px}.primary", shadowSelector, "{min-height:48px;font-size:14px;background:#263d4a}.confirmation", shadowSelector, " h4", shadowSelector, "{font-size:15px}.confirmation", shadowSelector, " p", shadowSelector, ",.data-note", shadowSelector, "{font-size:12px}.bookings", shadowSelector, ">h3", shadowSelector, "{font-size:20px}@media(hover:hover) and (pointer:fine){.day:hover:not(.selected)", shadowSelector, ",.slot:hover:not(.selected)", shadowSelector, "{background:#f2f6f4}.primary:hover:not(:disabled)", shadowSelector, "{background:#1b303b}.cancel:hover:not(:disabled)", shadowSelector, "{background:#eef3f0}}@media(pointer:coarse){input", shadowSelector, ",select", shadowSelector, "{font-size:16px}.day", shadowSelector, ",.slot", shadowSelector, ",.primary", shadowSelector, ",.cancel", shadowSelector, "{touch-action:manipulation}}@media(max-width:850px){.booking-layout", shadowSelector, "{grid-template-columns:1fr;gap:28px}.booking-details", shadowSelector, "{padding:0}.scenario", shadowSelector, ">span", shadowSelector, "{display:none}}@media(max-width:520px){.schedule", shadowSelector, "{padding:22px 16px}.heading", shadowSelector, " h2", shadowSelector, "{font-size:24px}.scenario", shadowSelector, " p", shadowSelector, "{font-size:13px}.days", shadowSelector, "{gap:5px}.day", shadowSelector, " strong", shadowSelector, "{font-size:12px}.day", shadowSelector, " span", shadowSelector, "{font-size:11px}.slot-person", shadowSelector, " strong", shadowSelector, "{font-size:13px}.slot-person", shadowSelector, " small", shadowSelector, ",.slot-time", shadowSelector, "{font-size:11px}.avatar", shadowSelector, "{width:32px;height:32px}.booking-layout", shadowSelector, "{gap:24px}.availability-title", shadowSelector, "{display:block}.availability-title", shadowSelector, " span", shadowSelector, "{display:block;margin-top:5px}}@media(prefers-reduced-motion:reduce){.day", shadowSelector, ",.slot", shadowSelector, ",.primary", shadowSelector, ",.cancel", shadowSelector, "{transition:none}.primary:active", shadowSelector, ",.day:active", shadowSelector, ",.slot:active", shadowSelector, ",.cancel:active", shadowSelector, "{transform:none}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#1d304a}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, "{outline-color:#d76839}.scenario", shadowSelector, "{background:#f0e2cd;border:0;padding:18px 24px;margin-top:22px;grid-template-columns:1fr auto;align-items:center}.scenario", shadowSelector, " strong", shadowSelector, "{color:#9a4625;font-size:11px;letter-spacing:.1em;text-transform:uppercase}.scenario", shadowSelector, " p", shadowSelector, "{color:#404c59;font-size:14px}.scenario", shadowSelector, ">span", shadowSelector, "{color:#695f55;font-size:12px;grid-row:1 / span 2;align-self:center}.booking-layout", shadowSelector, "{grid-template-columns:minmax(0,1fr) minmax(280px,340px);gap:0;padding-top:24px}.schedule", shadowSelector, "{background:#fffdf8;border:1px solid #d8d0c3;border-right:0;border-radius:0;padding:38px}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, "{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:32px;letter-spacing:-.025em;color:#203d64}.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, "{color:#5d6874}.service-select", shadowSelector, "{margin-top:28px}.service-select", shadowSelector, " select", shadowSelector, ",input", shadowSelector, "{border:1px solid #bdb7ab;border-radius:2px;background:#fffdf8;color:#1d304a;min-height:47px}.service-select", shadowSelector, " select", shadowSelector, "{max-width:420px}label", shadowSelector, ",legend", shadowSelector, "{font-weight:700;color:#263b55;font-size:13px}.days", shadowSelector, "{gap:7px}.day", shadowSelector, "{border-color:#d6d0c5;border-radius:2px;background:#fffdf8;min-height:78px}.day", shadowSelector, " span", shadowSelector, "{color:#627082}.day", shadowSelector, " strong", shadowSelector, "{font-weight:700}.day.selected", shadowSelector, "{background:#203d64;border-color:#203d64;color:white}.day.selected", shadowSelector, " span", shadowSelector, "{color:#e7d2bf}.availability-title", shadowSelector, "{border-top:1px solid #e1dace;padding-top:25px}.availability-title", shadowSelector, " h3", shadowSelector, "{color:#203d64}.availability-title", shadowSelector, " span", shadowSelector, ",.timezone", shadowSelector, "{color:#66717c}.slot", shadowSelector, "{padding:14px 12px;border-radius:0;border-bottom:1px solid #e4ded4;background:transparent}.avatar", shadowSelector, "{background:#f1e3d1;color:#935032;border-radius:2px;font-weight:700}.slot.selected", shadowSelector, "{background:#e9eef2;box-shadow:inset 3px 0 #203d64;padding-left:12px}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#203d64}.slot-person", shadowSelector, " small", shadowSelector, "{color:#66717c}.booking-details", shadowSelector, "{padding:38px 32px;background:#e7e2d8;border:1px solid #d8d0c3;align-self:stretch}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:28px;padding:0}.details-intro", shadowSelector, "{font-size:13px}.selection", shadowSelector, "{background:#fffdf8;border-left:3px solid #e66d3c;border-radius:0;padding:17px 16px}.selection", shadowSelector, " span", shadowSelector, "{color:#5f6873}.booking-details", shadowSelector, " label", shadowSelector, "{color:#263b55}.booking-details", shadowSelector, " input", shadowSelector, "{background:#fffdf8;border-color:#bdb7ab;border-radius:2px}.data-note", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#626b73}.primary", shadowSelector, "{background:#203d64;border-color:#203d64;border-radius:2px;min-height:50px}.confirmation", shadowSelector, "{color:#315a40}.try-note", shadowSelector, "{border-color:#c9c1b4}.try-note", shadowSelector, " h4", shadowSelector, "{color:#203d64}.bookings", shadowSelector, "{background:#fffdf8;padding:28px 32px;border:1px solid #d8d0c3;margin-top:24px}.bookings", shadowSelector, ">h3", shadowSelector, "{font:400 25px Georgia,serif;color:#203d64}.booking-list", shadowSelector, ",.booking-list", shadowSelector, " article", shadowSelector, "{border-color:#ded7ca}.badge", shadowSelector, "{background:#e5eee5;color:#315a40}.cancel", shadowSelector, "{color:#203d64;border-color:#bdb7ab;border-radius:2px}.empty", shadowSelector, " p", shadowSelector, "{color:#626b73}@media(hover:hover) and (pointer:fine){.day:hover:not(.selected)", shadowSelector, ",.slot:hover:not(.selected)", shadowSelector, "{background:#f6eee1}.primary:hover:not(:disabled)", shadowSelector, "{background:#142d4c}.cancel:hover:not(:disabled)", shadowSelector, "{background:#f4ede1}}@media(max-width:850px){.booking-layout", shadowSelector, "{grid-template-columns:1fr;gap:0}.schedule", shadowSelector, "{border-right:1px solid #d8d0c3}.booking-details", shadowSelector, "{padding:32px;border-top:0}.scenario", shadowSelector, ">span", shadowSelector, "{display:none}}@media(max-width:520px){.scenario", shadowSelector, "{padding:16px}.schedule", shadowSelector, "{padding:25px 18px}.heading", shadowSelector, " h2", shadowSelector, "{font-size:27px}.booking-details", shadowSelector, "{padding:26px 18px}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:26px}.days", shadowSelector, "{gap:4px}.day", shadowSelector, "{min-height:67px}.day", shadowSelector, " strong", shadowSelector, "{font-size:12px}.slot", shadowSelector, "{padding:13px 6px}.slot.selected", shadowSelector, "{padding-left:10px}.bookings", shadowSelector, "{padding:22px 18px}input", shadowSelector, ",select", shadowSelector, "{font-size:16px!important}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#352f2a}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, "{outline-color:#9a513b}.scenario", shadowSelector, "{background:transparent;border:0;border-bottom:1px solid #ded6c9;margin:0;padding:22px 0;grid-template-columns:1fr auto}.scenario", shadowSelector, " strong", shadowSelector, "{color:#87503b;font-size:12px;letter-spacing:0;text-transform:none}.scenario", shadowSelector, " p", shadowSelector, "{color:#5d544d;font-size:14px}.scenario", shadowSelector, ">span", shadowSelector, "{color:#75695f}.booking-layout", shadowSelector, "{gap:32px;padding-top:28px;grid-template-columns:minmax(0,1fr) minmax(280px,330px)}.schedule", shadowSelector, "{background:#fffdf9;border:1px solid #e1d8ca;border-radius:4px;padding:32px}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, "{font-family:Studio,'Segoe UI',sans-serif;font-size:25px;letter-spacing:-.025em;font-weight:600;color:#352f2a}.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, "{color:#71655a}.service-select", shadowSelector, " select", shadowSelector, ",input", shadowSelector, ",.booking-details", shadowSelector, " input", shadowSelector, "{border-color:#c6bbae;border-radius:3px;background:#fffdf9;color:#352f2a}.service-select", shadowSelector, " select", shadowSelector, "{max-width:420px}label", shadowSelector, ",legend", shadowSelector, ",.booking-details", shadowSelector, " label", shadowSelector, "{color:#4f443c}.day", shadowSelector, "{background:#fffdf9;border-color:#ded4c7;border-radius:3px}.day", shadowSelector, " span", shadowSelector, "{color:#776b60}.day.selected", shadowSelector, "{background:#68493b;border-color:#68493b;color:#fff}.day.selected", shadowSelector, " span", shadowSelector, "{color:#f1e6da}.availability-title", shadowSelector, "{border-color:#e8e0d5}.availability-title", shadowSelector, " h3", shadowSelector, "{color:#40352e}.availability-title", shadowSelector, " span", shadowSelector, ",.timezone", shadowSelector, ",.slot-person", shadowSelector, " small", shadowSelector, "{color:#71665d}.slot", shadowSelector, "{background:transparent;border-color:#ece4da}.avatar", shadowSelector, "{border-radius:50%;background:#eee3d7;color:#76503b}.slot.selected", shadowSelector, "{background:#f6eee6;box-shadow:inset 0 0 0 1px #b98265;border-radius:3px}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#87503b}.booking-details", shadowSelector, "{padding:29px;background:#eee7dc;border:0;align-self:start;border-radius:4px}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:23px}.selection", shadowSelector, "{background:#fffdf9;border:1px solid #e1d8ca;border-radius:3px}.selection", shadowSelector, " span", shadowSelector, ",.data-note", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#71665d}.primary", shadowSelector, "{background:#68493b;border-color:#68493b;border-radius:3px}.confirmation", shadowSelector, "{color:#355d43}.try-note", shadowSelector, "{border-color:#d6cabc}.try-note", shadowSelector, " h4", shadowSelector, "{color:#4f443c}.bookings", shadowSelector, "{background:#fffdf9;border-color:#e1d8ca;border-radius:4px}.bookings", shadowSelector, ">h3", shadowSelector, "{font-family:Studio,'Segoe UI',sans-serif;font-size:20px;font-weight:600;color:#352f2a}.cancel", shadowSelector, "{color:#68493b;border-color:#c6bbae}.empty", shadowSelector, " p", shadowSelector, "{color:#71665d}@media(hover:hover) and (pointer:fine){.day:hover:not(.selected)", shadowSelector, ",.slot:hover:not(.selected)", shadowSelector, "{background:#f8f1e8}.primary:hover:not(:disabled)", shadowSelector, "{background:#4e362d}.cancel:hover:not(:disabled)", shadowSelector, "{background:#f8f1e8}}@media(max-width:850px){.booking-layout", shadowSelector, "{grid-template-columns:1fr;gap:18px}.schedule", shadowSelector, "{border-right:1px solid #e1d8ca}.booking-details", shadowSelector, "{border:0;padding:26px}.scenario", shadowSelector, ">span", shadowSelector, "{display:none}}@media(max-width:520px){.scenario", shadowSelector, "{padding:18px 0}.schedule", shadowSelector, "{padding:23px 18px}.heading", shadowSelector, " h2", shadowSelector, "{font-size:23px}.booking-details", shadowSelector, "{padding:24px 18px}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:22px}.booking-layout", shadowSelector, "{gap:16px}.slot", shadowSelector, "{padding:13px 6px}.slot.selected", shadowSelector, "{padding-left:6px}input", shadowSelector, ",select", shadowSelector, "{font-size:16px!important}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#2a1a12}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, "{outline-color:#81523b}.scenario", shadowSelector, "{border-color:rgba(42,26,18,.1);padding:24px 0}.scenario", shadowSelector, " strong", shadowSelector, "{color:#3b2116;font-weight:600}.scenario", shadowSelector, " p", shadowSelector, ",.scenario", shadowSelector, ">span", shadowSelector, "{color:#5b4a3f}.booking-layout", shadowSelector, "{gap:20px;padding-top:26px}.schedule", shadowSelector, "{background:#fcf8f2;border:1px solid rgba(42,26,18,.09);border-radius:28px;padding:36px}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, ",.bookings", shadowSelector, ">h3", shadowSelector, "{font-family:'Inter Tight',Studio,system-ui,sans-serif;color:#2a1a12;font-weight:400;letter-spacing:-.04em;line-height:1.08}.heading", shadowSelector, " h2", shadowSelector, "{font-size:34px}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:30px}.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#5b4a3f;line-height:1.55}.service-select", shadowSelector, " select", shadowSelector, ",input", shadowSelector, ",.booking-details", shadowSelector, " input", shadowSelector, "{background:#fffdf9;border:1px solid #d8ccbd;border-radius:12px;color:#2a1a12}.service-select", shadowSelector, " select", shadowSelector, "{padding-left:14px}label", shadowSelector, ",legend", shadowSelector, ",.booking-details", shadowSelector, " label", shadowSelector, "{color:#3b2116;font-weight:500}.day", shadowSelector, "{border:1px solid #e0d5c8;background:#fcf8f2;border-radius:14px}.day", shadowSelector, " span", shadowSelector, ",.availability-title", shadowSelector, " span", shadowSelector, ",.timezone", shadowSelector, ",.slot-person", shadowSelector, " small", shadowSelector, "{color:#6d5b4e}.day.selected", shadowSelector, "{background:#3b2116;border-color:#3b2116;color:#fff}.day.selected", shadowSelector, " span", shadowSelector, "{color:#efe0d3}.availability-title", shadowSelector, "{border-color:rgba(42,26,18,.1)}.availability-title", shadowSelector, " h3", shadowSelector, "{color:#2a1a12}.slot", shadowSelector, "{border-color:#e9dfd3;border-radius:12px}.avatar", shadowSelector, "{background:#ece3d7;color:#5b4a3f}.slot.selected", shadowSelector, "{background:#f0e6da;box-shadow:inset 0 0 0 1px #aa8d77;border-radius:12px}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#3b2116}.booking-details", shadowSelector, "{background:#ece3d7;border:0;border-radius:26px;padding:30px}.selection", shadowSelector, "{background:#fcf8f2;border:1px solid rgba(42,26,18,.08);border-radius:15px}.selection", shadowSelector, " span", shadowSelector, ",.data-note", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#5b4a3f}.primary", shadowSelector, "{background:#3b2116;border:0;border-radius:999px;padding-left:20px;padding-right:20px}.try-note", shadowSelector, "{border-color:rgba(42,26,18,.12)}.try-note", shadowSelector, " h4", shadowSelector, "{color:#3b2116}.bookings", shadowSelector, "{background:#fcf8f2;border-color:rgba(42,26,18,.09);border-radius:24px}.bookings", shadowSelector, ">h3", shadowSelector, "{font-size:25px}.cancel", shadowSelector, "{color:#3b2116;border-color:#cdbfac;border-radius:999px}@media(hover:hover) and (pointer:fine){.day:hover:not(.selected)", shadowSelector, ",.slot:hover:not(.selected)", shadowSelector, "{background:#f1e9dd}.primary:hover:not(:disabled)", shadowSelector, "{background:#583a2c}.cancel:hover:not(:disabled)", shadowSelector, "{background:#eee4d8}}@media(max-width:850px){.booking-layout", shadowSelector, "{gap:16px}.schedule", shadowSelector, "{border:1px solid rgba(42,26,18,.09)}.booking-details", shadowSelector, "{border:0}}@media(max-width:520px){.schedule", shadowSelector, "{padding:24px 18px;border-radius:22px}.heading", shadowSelector, " h2", shadowSelector, "{font-size:29px}.booking-details", shadowSelector, "{padding:24px 18px;border-radius:22px}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:27px}.days", shadowSelector, "{gap:4px}.day", shadowSelector, "{border-radius:10px}.bookings", shadowSelector, "{padding:22px 18px}.slot-person", shadowSelector, " strong", shadowSelector, "{font-size:13px}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#2a1a12}.scenario", shadowSelector, "{border-color:rgba(42,26,18,.10)}.scenario", shadowSelector, " strong", shadowSelector, ",.availability-title", shadowSelector, " h3", shadowSelector, ",.try-note", shadowSelector, " h4", shadowSelector, "{color:#3b2116}.scenario", shadowSelector, " p", shadowSelector, ",.scenario", shadowSelector, ">span", shadowSelector, ",.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, ",.timezone", shadowSelector, ",.selection", shadowSelector, " span", shadowSelector, ",.data-note", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#5b4a3f}.schedule", shadowSelector, "{background:#fdf9f3;border-color:rgba(42,26,18,.08)}.booking-details", shadowSelector, "{background:#ece3d7}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, ",.bookings", shadowSelector, ">h3", shadowSelector, "{color:#2a1a12}.selection", shadowSelector, ",.service-select", shadowSelector, " select", shadowSelector, ",.booking-details", shadowSelector, " input", shadowSelector, "{background:#fffcf8;border-color:#dacbbc;color:#2a1a12}.day", shadowSelector, "{background:#fffaf4;border-color:#ded0c2;color:#2a1a12}.day", shadowSelector, " span", shadowSelector, ",.slot-person", shadowSelector, " small", shadowSelector, ",.availability-title", shadowSelector, " span", shadowSelector, "{color:#6a594d}.day.selected", shadowSelector, ",.primary", shadowSelector, "{background:#3b2116;border-color:#3b2116;color:#f6ede2}.day.selected", shadowSelector, " span", shadowSelector, "{color:#eadbcd}.slot", shadowSelector, "{color:#2a1a12;border-color:#e9ded2}.avatar", shadowSelector, "{background:#ece3d7;color:#5b4a3f}.slot.selected", shadowSelector, "{background:#efe3d5;box-shadow:inset 0 0 0 1px #a88b76}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#3b2116}.try-note", shadowSelector, "{border-color:rgba(42,26,18,.1)}.cancel", shadowSelector, "{color:#3b2116}.bookings", shadowSelector, "{background:#fdf9f3;border-color:rgba(42,26,18,.08)}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "font-family:Arial,Helvetica,sans-serif;color:#181818}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",select:focus-visible", shadowSelector, "{outline-color:#0176d3}.scenario", shadowSelector, "{background:transparent;border-bottom:1px solid #dddbda;padding:18px 0;margin-top:0}.scenario", shadowSelector, " strong", shadowSelector, "{color:#032d60}.scenario", shadowSelector, " p", shadowSelector, ",.scenario", shadowSelector, ">span", shadowSelector, ",.heading", shadowSelector, " p", shadowSelector, ",.service-select", shadowSelector, " p", shadowSelector, ",.details-intro", shadowSelector, ",.timezone", shadowSelector, ",.selection", shadowSelector, " span", shadowSelector, ",.data-note", shadowSelector, ",.try-note", shadowSelector, " p", shadowSelector, "{color:#586779}.booking-layout", shadowSelector, "{gap:16px;padding-top:16px}.schedule", shadowSelector, ",.booking-details", shadowSelector, ",.bookings", shadowSelector, "{background:#fff;border:1px solid #dddbda;border-radius:5px;padding:24px}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, ",.bookings", shadowSelector, ">h3", shadowSelector, "{font-family:Arial,Helvetica,sans-serif;color:#181818;font-weight:700;letter-spacing:0;font-size:20px;line-height:1.25}.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:18px}.availability-title", shadowSelector, " h3", shadowSelector, ",.try-note", shadowSelector, " h4", shadowSelector, "{color:#181818}.service-select", shadowSelector, " select", shadowSelector, ",input", shadowSelector, ",.booking-details", shadowSelector, " input", shadowSelector, "{background:#fff;border:1px solid #c9c9c9;border-radius:4px;color:#181818}.service-select", shadowSelector, " select:focus", shadowSelector, ",.booking-details", shadowSelector, " input:focus", shadowSelector, "{border-color:#0176d3}.booking-details", shadowSelector, " label", shadowSelector, ",label", shadowSelector, ",legend", shadowSelector, "{color:#444}.day", shadowSelector, "{background:#fff;border:1px solid #c9c9c9;border-radius:4px;color:#181818}.day", shadowSelector, " span", shadowSelector, ",.slot-person", shadowSelector, " small", shadowSelector, ",.availability-title", shadowSelector, " span", shadowSelector, "{color:#586779}.day.selected", shadowSelector, "{background:#0176d3;border-color:#0176d3;color:#fff}.day.selected", shadowSelector, " span", shadowSelector, "{color:#fff}.slot", shadowSelector, "{background:#fff;color:#181818;border-radius:4px;border-color:#e5e5e5}.avatar", shadowSelector, "{background:#e5efff;color:#014486}.slot.selected", shadowSelector, "{background:#eef4ff;box-shadow:inset 0 0 0 1px #0176d3;border-radius:4px}.slot.selected", shadowSelector, " svg", shadowSelector, "{color:#0176d3}.selection", shadowSelector, "{background:#f3f3f3;border:1px solid #e5e5e5;border-radius:4px}.primary", shadowSelector, "{background:#0176d3;border:1px solid #0176d3;border-radius:4px;color:#fff}.cancel", shadowSelector, "{background:#fff;border:1px solid #c9c9c9;color:#0176d3;border-radius:4px}.try-note", shadowSelector, "{border-color:#dddbda}@media(hover:hover) and (pointer:fine){.day:hover:not(.selected)", shadowSelector, ",.slot:hover:not(.selected)", shadowSelector, ",.cancel:hover:not(:disabled)", shadowSelector, "{background:#eef4ff}.primary:hover:not(:disabled)", shadowSelector, "{background:#014486}}@media(max-width:520px){.schedule", shadowSelector, ",.booking-details", shadowSelector, ",.bookings", shadowSelector, "{padding:18px;border-radius:5px}.heading", shadowSelector, " h2", shadowSelector, ",.booking-details", shadowSelector, ">h3", shadowSelector, "{font-size:19px}.day", shadowSelector, "{border-radius:4px}}.overview", shadowSelector, "{background:#fff;border:1px solid #dddbda;border-radius:5px;margin-top:14px;padding:18px;box-shadow:0 2px 3px #0000000d}.scenario", shadowSelector, "{display:flex;align-items:center;gap:12px;padding:0 0 16px;margin:0;border:0}.scenario-icon", shadowSelector, "{display:grid;place-items:center;flex:0 0 38px;width:38px;height:38px;border-radius:4px;background:#f4c94b;color:#fff}.scenario-icon", shadowSelector, " svg", shadowSelector, "{width:22px;height:22px;stroke-width:1.8}.scenario", shadowSelector, ">div", shadowSelector, "{min-width:0}.scenario-label", shadowSelector, "{display:block;color:#586779;font-size:12px}.scenario", shadowSelector, " strong", shadowSelector, "{display:block;color:#181818;font-size:19px;line-height:1.2}.scenario", shadowSelector, " p", shadowSelector, "{color:#586779;font-size:12px;line-height:1.4;margin-top:4px}.scenario", shadowSelector, " .sample-badge", shadowSelector, "{display:inline-block;margin-left:auto;border:1px solid #c9c9c9;border-radius:16px;background:#f3f3f3;padding:3px 10px;color:#444;font-size:12px;white-space:nowrap}.booking-summary", shadowSelector, "{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.booking-summary", shadowSelector, ">div", shadowSelector, "{min-width:0;background:#f8f8f8;border:1px solid #e5e5e5;border-radius:4px;padding:12px 14px}.booking-summary", shadowSelector, ">div:first-child", shadowSelector, "{background:#eef4ff;border:2px solid #0176d3;padding:11px 13px}.booking-summary", shadowSelector, " span", shadowSelector, "{display:block;font-size:11px;text-transform:uppercase;color:#586779}.booking-summary", shadowSelector, " strong", shadowSelector, "{display:block;font-size:21px;line-height:1.25;margin-top:5px;color:#181818;overflow-wrap:anywhere}.booking-summary", shadowSelector, " strong.summary-service", shadowSelector, ",.booking-summary", shadowSelector, " strong.summary-date", shadowSelector, "{font-size:14px;line-height:1.5}.booking-layout", shadowSelector, "{grid-template-columns:minmax(0,1fr) minmax(280px,350px);gap:12px;padding-top:12px}.schedule", shadowSelector, ",.booking-details", shadowSelector, "{padding:20px}.heading", shadowSelector, "{padding-bottom:14px;border-bottom:1px solid #e5e5e5}.service-select", shadowSelector, "{margin-top:18px}.days", shadowSelector, "{gap:8px}.availability-title", shadowSelector, "{padding:13px 0 0;border-top:1px solid #e5e5e5}.booking-details", shadowSelector, ">h3", shadowSelector, "{padding-bottom:14px;border-bottom:1px solid #e5e5e5}.bookings", shadowSelector, "{margin-top:12px}.slot-person", shadowSelector, " strong", shadowSelector, "{color:#0176d3}@media(max-width:850px){.booking-layout", shadowSelector, "{grid-template-columns:1fr}.booking-summary", shadowSelector, "{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:520px){.overview", shadowSelector, "{padding:14px}.scenario", shadowSelector, "{align-items:flex-start}.scenario", shadowSelector, " .sample-badge", shadowSelector, "{display:none}.booking-summary", shadowSelector, "{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.booking-summary", shadowSelector, ">div", shadowSelector, "{padding:9px}.booking-summary", shadowSelector, ">div:first-child", shadowSelector, "{padding:8px}.booking-summary", shadowSelector, " strong", shadowSelector, "{font-size:18px}.schedule", shadowSelector, ",.booking-details", shadowSelector, "{padding:16px}}.success-toast", shadowSelector, "{position:fixed;z-index:1000;top:16px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:12px;width:max-content;max-width:calc(100vw - 32px);padding:12px 14px;background:#2e844a;color:#fff;border-radius:4px;box-shadow:0 4px 14px #0003;font:600 14px/1.4 Arial,Helvetica,sans-serif}.toast-icon", shadowSelector, "{display:grid;place-items:center;flex:0 0 22px;width:22px;height:22px;border:2px solid #fff;border-radius:50%;font-size:14px}.toast-close", shadowSelector, "{margin-left:auto;padding:2px 6px;background:transparent;border:0;color:#fff;font-size:22px;line-height:1;cursor:pointer}.toast-close:focus-visible", shadowSelector, "{outline:2px solid #fff;outline-offset:2px}@media(max-width:600px){.success-toast", shadowSelector, "{top:10px;width:calc(100vw - 24px)}}"].join('');
  /*LWC compiler v9.5.3*/
}
var _implicitStylesheets = [stylesheet];

const $fragment1$1 = parseFragment`<div class="success-toast${0}" role="status" aria-live="polite"${2}><span class="toast-icon${0}" aria-hidden="true"${2}>✓</span><span${3}>${"t4"}</span><button type="button" class="toast-close${0}" aria-label="Dismiss notification"${2}>×</button></div>`;
const $fragment2$1 = parseFragment`<section class="overview${0}" aria-label="Appointment overview"${2}><div class="scenario${0}"${2}><span class="scenario-icon${0}" aria-hidden="true"${2}><svg viewBox="0 0 24 24"${3}><rect x="4" y="5" width="16" height="15" rx="2"${3}/><path d="M8 3v4M16 3v4M4 10h16"${3}/></svg></span><div${3}><span class="scenario-label${0}"${2}>Service appointments</span><strong${3}>Appointment workspace</strong><p${3}>Maya needs help with her heating. Find a qualified technician and a suitable time.</p></div><span class="sample-badge${0}"${2}>Sample data</span></div><div class="booking-summary${0}" aria-label="Appointment summary"${2}><div${3}><span${3}>Service</span><strong class="summary-service${0}"${2}>${"t20"}</strong></div><div${3}><span${3}>Selected day</span><strong class="summary-date${0}"${2}>${"t25"}</strong></div><div${3}><span${3}>Available slots</span><strong${3}>${"t30"}</strong></div><div${3}><span${3}>Confirmed</span><strong${3}>${"t35"}</strong></div><div${3}><span${3}>Cancelled</span><strong${3}>${"t40"}</strong></div></div></section>`;
const $fragment3$1 = parseFragment`<div class="heading${0}"${2}><h2${3}>Find an appointment</h2><p${3}>Choose a service and day to see available technicians.</p></div>`;
const $fragment4$1 = parseFragment`<label${"a0:for"}${3}>Service needed</label>`;
const $fragment5$1 = parseFragment`<option${"a0:value"}${3}>${"t1"}</option>`;
const $fragment6$1 = parseFragment`<p${3}>${"t1"}</p>`;
const $fragment7$1 = parseFragment`<legend${3}>Choose a day</legend>`;
const $fragment8$1 = parseFragment`<button${"c0"}${"a0:aria-pressed"}${"a0:data-date"}${2}><span${3}>${"t2"}</span><strong${3}>${"t4"}</strong></button>`;
const $fragment9$1 = parseFragment`<div class="availability-title${0}"${2}><h3${3}>Available appointments</h3><span${3}>${"t4"}</span></div>`;
const $fragment10$1 = parseFragment`<p class="timezone${0}"${2}>Times are shown in your browser’s local time. Visits take two hours.</p>`;
const $fragment11$1 = parseFragment`<button${"c0"}${"a0:aria-pressed"}${"a0:aria-label"}${"a0:data-id"}${"a0:disabled"}${2}><span class="avatar${0}"${2}>${"t2"}</span><span class="slot-person${0}"${2}><strong${3}>${"t5"}</strong><small${3}>${"t7"}</small></span><span class="slot-time${0}"${2}>${"t9"}</span><svg viewBox="0 0 20 20" aria-hidden="true"${3}><circle cx="10" cy="10" r="7"${3}/><path d="m6.5 10 2.5 2.5 4.5-5"${3}/></svg></button>`;
const $fragment12$1 = parseFragment`<div class="empty${0}"${2}><h3${3}>That day is fully booked.</h3><p${3}>Choose another date or service to find an available technician.</p></div>`;
const $fragment13 = parseFragment`<h3${3}>Confirm the visit</h3>`;
const $fragment14 = parseFragment`<p class="details-intro${0}"${2}>Your chosen time is checked again when you confirm.</p>`;
const $fragment15 = parseFragment`<div class="selection${0}"${2}><strong${3}>${"t2"}</strong><span${3}>${"t4"}</span><span${3}>${"t6"}</span></div>`;
const $fragment16 = parseFragment`<label${"a0:for"}${3}>Customer name</label>`;
const $fragment17 = parseFragment`<label${"a0:for"}${3}>Email address</label>`;
const $fragment18 = parseFragment`<label${"a0:for"}${3}>Service address</label>`;
const $fragment19 = parseFragment`<p class="data-note${0}"${2}>Use fictional details. This demo keeps data in this tab and sends no emails.</p>`;
const $fragment20 = parseFragment`<p class="error${0}" role="alert"${2}>${"t1"}</p>`;
const $fragment21 = parseFragment`<button class="primary${0}"${"a0:disabled"}${2}>${"t1"}<svg viewBox="0 0 20 20" aria-hidden="true"${3}><path d="M4 10h12m-5-5 5 5-5 5"${3}/></svg></button>`;
const $fragment22 = parseFragment`<div class="confirmation${0}" role="status"${2}><svg viewBox="0 0 20 20" aria-hidden="true"${3}><path d="m4 10 4 4 8-9"${3}/></svg><h4${3}>${"t4"}</h4><p${3}>${"t6"}<br${3}>${"t8"}</p></div>`;
const $fragment23 = parseFragment`<div class="try-note${0}"${2}><h4${3}>How availability works</h4><p${3}>Booked times disappear from the list. Cancel a booking to make the time available again.</p></div>`;
const $fragment24 = parseFragment`<h3${3}>This session’s appointments</h3>`;
const $fragment25 = parseFragment`<div${3}><strong${3}>${"t2"}</strong><span${3}>${"t4"}</span></div>`;
const $fragment26 = parseFragment`<div${3}><strong${3}>${"t2"}</strong><span${3}>${"t4"}</span></div>`;
const $fragment27 = parseFragment`<span${"c0"}${2}>${"t1"}</span>`;
const $fragment28 = parseFragment`<button class="cancel${0}"${"a0:data-id"}${"a0:aria-label"}${"a0:disabled"}${2}>Cancel booking</button>`;
const stc0$1 = {
  classMap: {
    "booking-layout": true
  },
  key: 5
};
const stc1$1 = {
  classMap: {
    "schedule": true
  },
  attrs: {
    "aria-label": "Appointment booking"
  },
  key: 6
};
const stc2$1 = {
  classMap: {
    "service-select": true
  },
  key: 9
};
const stc3$1 = {
  classMap: {
    "days": true
  },
  key: 20
};
const stc4 = {
  classMap: {
    "slots": true
  },
  key: 27
};
const stc5 = {
  classMap: {
    "booking-details": true
  },
  key: 33
};
const stc6 = {
  classMap: {
    "bookings": true
  },
  key: 62
};
const stc7 = {
  classMap: {
    "booking-list": true
  },
  key: 65
};
function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, b: api_bind, sp: api_static_part, st: api_static_fragment, fr: api_fragment, gid: api_scoped_id, k: api_key, i: api_iterator, h: api_element, ncls: api_normalize_class_name} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12} = $ctx;
  return [$cmp.toastMessage ? api_fragment(0, [api_static_fragment($fragment1$1, 2, [api_static_part(4, null, api_dynamic_text($cmp.toastMessage)), api_static_part(5, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.dismissToast)
    })
  }, null)])], 0) : null, api_static_fragment($fragment2$1, 4, [api_static_part(20, null, api_dynamic_text($cmp.chosenService.name)), api_static_part(25, null, api_dynamic_text($cmp.dateLabel)), api_static_part(30, null, api_dynamic_text($cmp.availableCount)), api_static_part(35, null, api_dynamic_text($cmp.confirmedCount)), api_static_part(40, null, api_dynamic_text($cmp.cancelledCount))]), api_element("div", stc0$1, [api_element("section", stc1$1, [api_static_fragment($fragment3$1, 8), api_element("div", stc2$1, [api_static_fragment($fragment4$1, 11, [api_static_part(0, {
    attrs: {
      "for": api_scoped_id("service")
    }
  }, null)]), api_element("select", {
    attrs: {
      "id": api_scoped_id("service"),
      "disabled": $cmp.busy ? "" : null
    },
    key: 12,
    on: _m1 || ($ctx._m1 = {
      "change": api_bind($cmp.serviceChanged)
    })
  }, api_iterator($cmp.serviceOptions, function (option) {
    return api_static_fragment($fragment5$1, api_key(14, option.id), [api_static_part(0, {
      attrs: {
        "value": option.id
      }
    }, null), api_static_part(1, null, api_dynamic_text(option.name))]);
  })), api_static_fragment($fragment6$1, 16, [api_static_part(1, null, api_dynamic_text($cmp.chosenService.description))])]), api_element("fieldset", {
    attrs: {
      "disabled": $cmp.busy ? "" : null
    },
    key: 17
  }, [api_static_fragment($fragment7$1, 19), api_element("div", stc3$1, api_iterator($cmp.days, function (day) {
    return api_static_fragment($fragment8$1, api_key(22, day.value), [api_static_part(0, {
      on: _m3 || ($ctx._m3 = {
        "click": api_bind($cmp.dayChanged)
      }),
      className: api_normalize_class_name(day.className),
      attrs: {
        "aria-pressed": day.pressed,
        "data-date": day.value
      }
    }, null), api_static_part(2, null, api_dynamic_text(day.weekday)), api_static_part(4, null, api_dynamic_text(day.label))]);
  }))]), api_static_fragment($fragment9$1, 24, [api_static_part(4, null, api_dynamic_text($cmp.dateLabel))]), api_static_fragment($fragment10$1, 26), api_element("div", stc4, api_iterator($cmp.slots, function (slot) {
    return api_static_fragment($fragment11$1, api_key(29, slot.id), [api_static_part(0, {
      on: _m5 || ($ctx._m5 = {
        "click": api_bind($cmp.selectSlot)
      }),
      className: api_normalize_class_name(slot.className),
      attrs: {
        "aria-pressed": slot.pressed,
        "aria-label": slot.label,
        "data-id": slot.id,
        "disabled": $cmp.busy ? "" : null
      }
    }, null), api_static_part(2, null, api_dynamic_text(slot.initials)), api_static_part(5, null, api_dynamic_text(slot.name)), api_static_part(7, null, api_dynamic_text(slot.specialty)), api_static_part(9, null, api_dynamic_text(slot.time))]);
  })), $cmp.noSlots ? api_fragment(30, [api_static_fragment($fragment12$1, 32)], 0) : null]), api_element("aside", stc5, [api_static_fragment($fragment13, 35), api_static_fragment($fragment14, 37), api_static_fragment($fragment15, 39, [api_static_part(2, null, api_dynamic_text($cmp.chosenService.name)), api_static_part(4, null, api_dynamic_text($cmp.dateLabel)), api_static_part(6, null, api_dynamic_text($cmp.selectionLabel))]), api_static_fragment($fragment16, 41, [api_static_part(0, {
    attrs: {
      "for": api_scoped_id("customer")
    }
  }, null)]), api_element("input", {
    attrs: {
      "id": api_scoped_id("customer"),
      "name": "name",
      "autocomplete": "name",
      "required": "",
      "minlength": "2",
      "maxlength": "100",
      "disabled": $cmp.busy ? "" : null
    },
    props: {
      "value": $cmp.name
    },
    key: 42,
    on: _m6 || ($ctx._m6 = {
      "input": api_bind($cmp.fieldChanged)
    })
  }), api_static_fragment($fragment17, 44, [api_static_part(0, {
    attrs: {
      "for": api_scoped_id("email")
    }
  }, null)]), api_element("input", {
    attrs: {
      "id": api_scoped_id("email"),
      "name": "email",
      "type": "email",
      "autocomplete": "email",
      "required": "",
      "maxlength": "120",
      "disabled": $cmp.busy ? "" : null
    },
    props: {
      "value": $cmp.email
    },
    key: 45,
    on: _m7 || ($ctx._m7 = {
      "input": api_bind($cmp.fieldChanged)
    })
  }), api_static_fragment($fragment18, 47, [api_static_part(0, {
    attrs: {
      "for": api_scoped_id("address")
    }
  }, null)]), api_element("input", {
    attrs: {
      "id": api_scoped_id("address"),
      "name": "address",
      "autocomplete": "street-address",
      "required": "",
      "minlength": "8",
      "maxlength": "255",
      "disabled": $cmp.busy ? "" : null
    },
    props: {
      "value": $cmp.address
    },
    key: 48,
    on: _m8 || ($ctx._m8 = {
      "input": api_bind($cmp.fieldChanged)
    })
  }), api_static_fragment($fragment19, 50), $cmp.error ? api_fragment(51, [api_static_fragment($fragment20, 53, [api_static_part(1, null, api_dynamic_text($cmp.error))])], 0) : null, api_static_fragment($fragment21, 55, [api_static_part(0, {
    on: _m10 || ($ctx._m10 = {
      "click": api_bind($cmp.book)
    }),
    attrs: {
      "disabled": $cmp.busy ? "" : null
    }
  }, null), api_static_part(1, null, api_dynamic_text($cmp.buttonLabel))]), $cmp.confirmation ? api_fragment(56, [api_static_fragment($fragment22, 58, [api_static_part(4, null, "You’re booked, " + api_dynamic_text($cmp.confirmation.name) + "."), api_static_part(6, null, api_dynamic_text($cmp.confirmation.id) + " · " + api_dynamic_text($cmp.confirmation.technician)), api_static_part(8, null, api_dynamic_text($cmp.confirmation.date) + " · " + api_dynamic_text($cmp.confirmation.time))])], 0) : null, api_static_fragment($fragment23, 60)])]), $cmp.hasBookings ? api_fragment(61, [api_element("section", stc6, [api_static_fragment($fragment24, 64), api_element("div", stc7, api_iterator($cmp.bookingRows, function (booking) {
    return api_element("article", {
      key: api_key(66, booking.id)
    }, [api_static_fragment($fragment25, 68, [api_static_part(2, null, api_dynamic_text(booking.serviceName)), api_static_part(4, null, api_dynamic_text(booking.id) + " · " + api_dynamic_text(booking.name))]), api_static_fragment($fragment26, 70, [api_static_part(2, null, api_dynamic_text(booking.dateText) + " · " + api_dynamic_text(booking.time)), api_static_part(4, null, api_dynamic_text(booking.technician))]), api_static_fragment($fragment27, 72, [api_static_part(0, {
      className: api_normalize_class_name(booking.className)
    }, null), api_static_part(1, null, api_dynamic_text(booking.status))]), booking.active ? api_fragment(73, [api_static_fragment($fragment28, 75, [api_static_part(0, {
      on: _m12 || ($ctx._m12 = {
        "click": api_bind($cmp.cancel)
      }),
      attrs: {
        "data-id": booking.id,
        "aria-label": booking.cancelLabel,
        "disabled": $cmp.busy ? "" : null
      }
    }, null)])], 0) : null]);
  }))])], 0) : null];
  /*LWC compiler v9.5.3*/
}
var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.stylesheets = [];
tmpl$1.stylesheetToken = "lwc-5p6c6m2i6f8";
if (_implicitStylesheets) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets);
}
freezeTemplate(tmpl$1);

// Public demo adapter. No Salesforce calls or credentials; all records are fictional.
const services = [{
  id: "repair",
  name: "Heating repair",
  description: "Diagnose a heating fault and get the system running."
}, {
  id: "install",
  name: "Installation survey",
  description: "Assess a property before a heat-pump installation."
}, {
  id: "maintenance",
  name: "Annual maintenance",
  description: "A scheduled inspection to keep equipment in good order."
}];
const technicians = [{
  id: "alex",
  name: "Alex Morgan",
  initials: "AM",
  skills: ["repair", "maintenance"],
  specialty: "Heating & diagnostics"
}, {
  id: "sam",
  name: "Sam Rivera",
  initials: "SR",
  skills: ["install", "maintenance"],
  specialty: "Installation & commissioning"
}, {
  id: "jordan",
  name: "Jordan Lee",
  initials: "JL",
  skills: ["repair", "install"],
  specialty: "Heat-pump specialist"
}];
const copy = value => JSON.parse(JSON.stringify(value));
const pause = () => new Promise(resolve => setTimeout(resolve, 280));
let bookings = [];
let bookingSequence = 2100;
function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function getDemoDays() {
  const start = new Date();
  start.setHours(12, 0, 0, 0);
  return Array.from({
    length: 5
  }, (_, i) => {
    const day = new Date(start);
    day.setDate(day.getDate() + i + 1);
    return {
      value: dateKey(day),
      weekday: day.toLocaleDateString("en-US", {
        weekday: "short"
      }),
      label: day.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      }),
      full: day.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    };
  });
}
function getAvailability(service, date) {
  if (!services.some(s => s.id === service)) throw new Error("Choose a service type.");
  if (!getDemoDays().some(d => d.value === date)) throw new Error("Choose one of the next five available dates.");
  return technicians.filter(t => t.skills.includes(service)).flatMap(t => [{
    hour: 9,
    label: "9:00–11:00 AM"
  }, {
    hour: 11,
    label: "11:00 AM–1:00 PM"
  }, {
    hour: 14,
    label: "2:00–4:00 PM"
  }].map(time => ({
    ...t,
    technicianId: t.id,
    id: `${date}-${t.id}-${time.hour}`,
    date,
    time: time.label,
    hour: time.hour
  }))) .filter(slot => { const day = Math.floor(Date.parse(`${date}T00:00:00Z`) / 86400000); const technicianIndex = technicians.findIndex(t => t.id === slot.technicianId); const timeIndex = [9, 11, 14].indexOf(slot.hour); return (day + technicianIndex + timeIndex) % 4 !== 0; }).filter(slot => !bookings.some(b => b.slotId === slot.id && b.status === "Confirmed")).map(copy);
}
function getBookings() {
  return copy(bookings);
}
async function bookAppointment(request) {
  const input = copy(request);
  await pause();
  const name = String(input.name || "").trim(),
    email = String(input.email || "").trim(),
    address = String(input.address || "").trim();
  if (name.length < 2 || name.length > 100) throw new Error("Enter a customer name between 2 and 100 characters.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) throw new Error("Enter a valid email address.");
  if (address.length < 8 || address.length > 255) throw new Error("Enter a full service address (8–255 characters).");
  const slot = getAvailability(input.service, input.date).find(s => s.id === input.slotId);
  if (!slot) throw new Error("That appointment is no longer available. Choose another time.");
  const booking = {
    id: `APT-${++bookingSequence}`,
    slotId: slot.id,
    date: input.date,
    service: input.service,
    serviceName: services.find(s => s.id === input.service).name,
    technician: slot.name,
    time: slot.time,
    name,
    email,
    address,
    status: "Confirmed"
  };
  bookings = [...bookings, booking];
  return copy(booking);
}
async function cancelAppointment(id) {
  await pause();
  const booking = bookings.find(b => b.id === id);
  if (!booking || booking.status !== "Confirmed") throw new Error("This appointment is no longer active.");
  bookings = bookings.map(b => b.id === id ? {
    ...b,
    status: "Cancelled"
  } : b);
  return getBookings();
}

class AppointmentBooking extends LightningElement {
  constructor(...args) {
    super(...args);
    this.service = "repair";
    this.date = getDemoDays()[0].value;
    this.slotId = "";
    this.name = "Maya Patel";
    this.email = "maya@example.com";
    this.address = "24 Cedar Lane, Boston, MA";
    this.busy = false;
    this.error = "";
    this.bookings = getBookings();
    this.confirmation = null;
    this.revision = 0;
    this.toastMessage = "";
    this.toastTimer = void 0;
  }
  showToast(text) {
    clearTimeout(this.toastTimer);
    this.toastMessage = text;
    this.toastTimer = setTimeout(() => {
      this.toastMessage = "";
    }, 5000);
  }
  dismissToast() {
    clearTimeout(this.toastTimer);
    this.toastMessage = "";
  }
  disconnectedCallback() {
    clearTimeout(this.toastTimer);
  }
  get serviceOptions() {
    return services;
  }
  get days() {
    return getDemoDays().map(d => ({
      ...d,
      className: d.value === this.date ? "day selected" : "day",
      pressed: d.value === this.date
    }));
  }
  get chosenService() {
    return services.find(s => s.id === this.service);
  }
  get dateLabel() {
    return getDemoDays().find(d => d.value === this.date)?.full;
  }
  get slots() {
    this.revision;
    return getAvailability(this.service, this.date).map(s => ({
      ...s,
      className: s.id === this.slotId ? "slot selected" : "slot",
      pressed: s.id === this.slotId,
      label: `${s.name}, ${s.time}`
    }));
  }
  get availableCount() {
    return this.slots.length;
  }
  get confirmedCount() {
    return this.bookings.filter(b => b.status === "Confirmed").length;
  }
  get cancelledCount() {
    return this.bookings.filter(b => b.status === "Cancelled").length;
  }
  get noSlots() {
    return !this.slots.length;
  }
  get chosenSlot() {
    return this.slots.find(s => s.id === this.slotId);
  }
  get selectionLabel() {
    return this.chosenSlot ? `${this.chosenSlot.name} · ${this.chosenSlot.time}` : "Select an available time";
  }
  get hasBookings() {
    return this.bookings.length > 0;
  }
  get bookingRows() {
    return this.bookings.map(b => ({
      ...b,
      active: b.status === "Confirmed",
      className: b.status === "Confirmed" ? "badge" : "badge cancelled",
      dateText: getDemoDays().find(d => d.value === b.date)?.label || b.date,
      cancelLabel: `Cancel appointment ${b.id}`
    }));
  }
  get buttonLabel() {
    return this.busy ? "Booking appointment…" : "Confirm appointment";
  }
  renderedCallback() {
    const select = this.template.querySelector("select");
    if (select) select.value = this.service;
  }
  serviceChanged(e) {
    this.service = e.target.value;
    this.clearSelection();
  }
  dayChanged(e) {
    this.date = e.currentTarget.dataset.date;
    this.clearSelection();
  }
  clearSelection() {
    this.slotId = "";
    this.error = "";
    this.confirmation = null;
  }
  selectSlot(e) {
    if (this.busy) return;
    this.slotId = e.currentTarget.dataset.id;
    this.error = "";
    this.confirmation = null;
  }
  fieldChanged(e) {
    this[e.target.name] = e.target.value;
  }
  async book() {
    if (this.busy) return;
    this.error = "";
    if (![...this.template.querySelectorAll("input")].reduce((valid, field) => field.reportValidity() && valid, true)) return;
    if (!this.slotId) {
      this.error = "Select an available time before confirming.";
      return;
    }
    this.busy = true;
    try {
      this.confirmation = await bookAppointment({
        service: this.service,
        date: this.date,
        slotId: this.slotId,
        name: this.name,
        email: this.email,
        address: this.address
      });
      this.showToast("Appointment confirmed.");
      this.bookings = getBookings();
      this.slotId = "";
      this.revision++;
    } catch (e) {
      this.error = e.message;
      this.slotId = "";
      this.revision++;
    } finally {
      this.busy = false;
    }
  }
  async cancel(e) {
    if (this.busy) return;
    this.busy = true;
    this.error = "";
    try {
      this.bookings = await cancelAppointment(e.currentTarget.dataset.id);
      this.showToast("Appointment cancelled. The time is available again.");
      this.confirmation = null;
      this.revision++;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.busy = false;
    }
  }
  /*LWC compiler v9.5.3*/
}
registerDecorators(AppointmentBooking, {
  fields: ["service", "date", "slotId", "name", "email", "address", "busy", "error", "bookings", "confirmation", "revision", "toastMessage", "toastTimer"]
});
const __lwc_component_class_internal$1 = registerComponent(AppointmentBooking, {
  tmpl: _tmpl$1,
  sel: "c-appointment-booking",
  apiVersion: 66
});

const $fragment1 = parseFragment`<header class="topbar${0}"${2}><a class="brand${0}" href="/" aria-label="Service Studio home"${2}><svg viewBox="0 0 32 32" aria-hidden="true"${3}><path fill="currentColor" d="M3 3h12v12H3zM17 3h12v12H17zM3 17h12v12H3z"${3}/><path fill="#a44d35" d="M17 17h12v12H17z"${3}/></svg><span${3}>Service <span class="brand-light${0}"${2}>Studio</span></span></a><nav aria-label="Project navigation"${3}><button${"c10"} data-view="architecture"${2}>How it works</button><button${"c12"} data-view="source"${2}>Source code</button></nav><a class="download${0}" href="service-studio-source.zip" download${2}>Download project<svg viewBox="0 0 20 20" aria-hidden="true"${3}><path d="M5 15 15 5M5 5h10v10"${3}/></svg></a></header>`;
const $fragment2 = parseFragment`<section class="intro${0}"${2}><div${3}><h1${3}>Book a service visit.</h1><p${3}>Choose a service, find an available technician, and pick a time that works for you.</p></div></section>`;
const $fragment3 = parseFragment`<div class="workspace-heading${0}"${2}><nav class="demo-tabs${0}" aria-label="Live demo"${2}><button${"c2"}${"a2:aria-current"} data-view="booking"${2}><svg viewBox="0 0 20 20" aria-hidden="true"${3}><rect x="3" y="4" width="14" height="13" rx="1"${3}/><path d="M6 2v4M14 2v4M3 8h14m-10 4 2 2 4-4"${3}/></svg>Field-service booking</button></nav><button class="reset${0}"${2}>Reset demo</button></div>`;
const $fragment4 = parseFragment`<section${"a0:hidden"} class="architecture${0}"${2}><h2${3}>Follow the work, from click to record.</h2><p class="lead${0}"${2}>A field-service booking workflow, with the implementation open for inspection. The public demo runs in your browser; the included Salesforce package is designed to run against records in your org.</p><div class="architecture-columns${0}"${2}><article${3}><h3${3}>What’s running here</h3><ol${3}><li${3}><strong${3}>Lightning Web Components</strong><p${3}>The booking component presents service types, available dates, technician slots and customer details.</p></li><li${3}><strong${3}>Browser data adapter</strong><p${3}>A JavaScript service filters fictional technicians and times, validates requests and keeps appointments in memory.</p></li><li${3}><strong${3}>Booking and cancellation</strong><p${3}>A confirmed appointment removes its slot. Cancelling releases it. Reset restores the sample data.</p></li></ol></article><article${3}><h3${3}>What runs in Salesforce</h3><ol${3}><li${3}><strong${3}>Platform LWC calls Apex</strong><p${3}>The fieldBookingStudio component calls Apex to retrieve availability and submit or cancel a booking.</p></li><li${3}><strong${3}>Server-side validation</strong><p${3}>BookingStudioController checks the customer, service and slot, then locks the selected slot before reserving it.</p></li><li${3}><strong${3}>Records and permissions</strong><p${3}>Custom objects store availability and appointments. Sharing and user-mode database access respect the caller’s access.</p></li></ol></article></div><div class="engineering${0}"${2}><h3${3}>Decisions worth inspecting</h3><div${3}><strong${3}>Matching</strong><p${3}>Availability matches the service to a technician’s skills and filters already booked slots.</p></div><div${3}><strong${3}>Concurrency</strong><p${3}>Apex uses FOR UPDATE and a unique active slot reference to guard competing requests.</p></div><div${3}><strong${3}>Testing</strong><p${3}>Node tests cover invalid input, slot matching, concurrent requests and cancellation. Apex tests are included for org verification.</p></div></div></section>`;
const $fragment5 = parseFragment`<div${3}><h2${3}>The implementation, without the mystery.</h2><p${3}>Browse the actual source, or download the complete project.</p></div>`;
const $fragment6 = parseFragment`<option${"a0:value"}${3}>${"t1"}</option>`;
const $fragment7 = parseFragment`<p class="source-note${0}"${2}>.cls files run in Salesforce. Public demo components call workflowService.js in the browser. The download includes object metadata, permission sets, tests and setup instructions.</p>`;
const $fragment8 = parseFragment`<p role="status"${3}>Loading source…</p>`;
const $fragment9 = parseFragment`<p class="error${0}" role="alert"${2}>${"t1"}</p>`;
const $fragment10 = parseFragment`<pre tabindex="0" aria-label="Project source code"${3}><code${3}>${"t2"}</code></pre>`;
const $fragment11 = parseFragment`<div class="implementation-bar${0}"${2}><button${3}>Inspect the Apex<svg viewBox="0 0 20 20" aria-hidden="true"${3}><path d="M5 15 15 5M5 5h10v10"${3}/></svg></button></div>`;
const $fragment12 = parseFragment`<footer${3}><p${3}><span class="sample-dot${0}"${2}></span>Sample data mode<span class="footer-detail${0}"${2}>· Apex behavior is simulated. No Salesforce org is connected.</span></p><span${3}>Salesforce LWC · Apex · JavaScript</span></footer>`;
const stc0 = {
  classMap: {
    "shell": true
  },
  key: 0
};
const stc1 = {
  key: 9
};
const stc2 = {
  "source-section": true
};
const stc3 = {
  classMap: {
    "source-heading": true
  },
  key: 13
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, ncls: api_normalize_class_name, sp: api_static_part, st: api_static_fragment, gid: api_scoped_id, c: api_custom_element, h: api_element, t: api_text, k: api_key, d: api_dynamic_text, i: api_iterator, fr: api_fragment} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(10, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.changeView)
    }),
    className: api_normalize_class_name($cmp.architectureClass)
  }, null), api_static_part(12, {
    on: _m1 || ($ctx._m1 = {
      "click": api_bind($cmp.changeView)
    }),
    className: api_normalize_class_name($cmp.sourceClass)
  }, null)]), api_static_fragment($fragment2, 4), api_element("main", {
    attrs: {
      "id": api_scoped_id("main")
    },
    key: 5
  }, [api_static_fragment($fragment3, 7, [api_static_part(2, {
    on: _m2 || ($ctx._m2 = {
      "click": api_bind($cmp.changeView)
    }),
    className: api_normalize_class_name($cmp.bookingClass),
    attrs: {
      "aria-current": $cmp.bookingCurrent
    }
  }, null), api_static_part(7, {
    on: _m3 || ($ctx._m3 = {
      "click": api_bind($cmp.reset)
    })
  }, null)]), api_element("div", {
    attrs: {
      "hidden": $cmp.bookingHidden ? "" : null
    },
    key: 8
  }, [api_custom_element("c-appointment-booking", __lwc_component_class_internal$1, stc1)]), api_static_fragment($fragment4, 11, [api_static_part(0, {
    attrs: {
      "hidden": $cmp.architectureHidden ? "" : null
    }
  }, null)]), api_element("section", {
    classMap: stc2,
    attrs: {
      "hidden": $cmp.sourceHidden ? "" : null
    },
    key: 12
  }, [api_element("div", stc3, [api_static_fragment($fragment5, 15), api_element("label", {
    attrs: {
      "for": api_scoped_id("source-file")
    },
    key: 16
  }, [api_text("Project file"), api_element("select", {
    attrs: {
      "id": api_scoped_id("source-file")
    },
    key: 17,
    on: _m4 || ($ctx._m4 = {
      "change": api_bind($cmp.fileChanged)
    })
  }, api_iterator($cmp.options, function (file) {
    return api_static_fragment($fragment6, api_key(19, file.name), [api_static_part(0, {
      attrs: {
        "value": file.name
      }
    }, null), api_static_part(1, null, api_dynamic_text(file.name))]);
  }))])]), api_static_fragment($fragment7, 21), $cmp.sourceLoading ? api_fragment(22, [api_static_fragment($fragment8, 24)], 0) : null, $cmp.sourceError ? api_fragment(25, [api_static_fragment($fragment9, 27, [api_static_part(1, null, api_dynamic_text($cmp.sourceError))])], 0) : null, api_static_fragment($fragment10, 29, [api_static_part(2, null, api_dynamic_text($cmp.source))])]), $cmp.isDemo ? api_fragment(30, [api_static_fragment($fragment11, 32, [api_static_part(1, {
    on: _m5 || ($ctx._m5 = {
      "click": api_bind($cmp.inspect)
    })
  }, null)])], 0) : null]), api_static_fragment($fragment12, 34)])];
  /*LWC compiler v9.5.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-2rjvebuuto3";
if (_implicitStylesheets$1) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$1);
}
freezeTemplate(tmpl);

class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.view = "booking";
    this.source = "";
    this.sourceFile = "BookingStudioController.cls";
    this.sourceLoading = false;
    this.sourceError = "";
    this.sourceSeq = 0;
    this.resetVersion = 0;
    this.files = ["BookingStudioController.cls", "BookingStudioControllerTest.cls", "appointmentBooking.js", "appointmentBooking.html", "workflowService.js", "fieldBookingStudio.js"];
  }
  get bookingHidden() {
    return this.view !== "booking";
  }
  get architectureHidden() {
    return this.view !== "architecture";
  }
  get sourceHidden() {
    return this.view !== "source";
  }
  get bookingClass() {
    return this.view === "booking" ? "demo-tab active" : "demo-tab";
  }
  get bookingCurrent() {
    return this.view === "booking" ? "page" : null;
  }
  get architectureClass() {
    return this.view === "architecture" ? "nav active" : "nav";
  }
  get sourceClass() {
    return this.view === "source" ? "nav active" : "nav";
  }
  get isBooking() {
    return this.view === "booking";
  }
  get isDemo() {
    return this.isBooking;
  }
  get options() {
    return this.files.map(name => ({
      name
    }));
  }
  changeView(e) {
    this.view = e.currentTarget.dataset.view;
    if (this.view === "source") this.loadSource();
  }
  inspect() {
    this.sourceFile = "BookingStudioController.cls";
    this.view = "source";
    this.loadSource();
  }
  fileChanged(e) {
    this.sourceFile = e.target.value;
    this.loadSource();
  }
  renderedCallback() {
    const select = this.template.querySelector("select");
    if (select) select.value = this.sourceFile;
  }
  async loadSource() {
    const seq = ++this.sourceSeq;
    this.sourceLoading = true;
    this.sourceError = "";
    try {
      const response = await fetch("source/" + this.sourceFile);
      if (!response.ok) throw new Error("Source could not be loaded. Download the project to inspect it.");
      const text = await response.text();
      if (seq === this.sourceSeq) this.source = text;
    } catch (e) {
      if (seq === this.sourceSeq) {
        this.source = "";
        this.sourceError = e.message;
      }
    } finally {
      if (seq === this.sourceSeq) this.sourceLoading = false;
    }
  }
  reset() {
    window.location.reload();
  }
  /*LWC compiler v9.5.3*/
}
registerDecorators(App, {
  fields: ["view", "source", "sourceFile", "sourceLoading", "sourceError", "sourceSeq", "resetVersion", "files"]
});
const __lwc_component_class_internal = registerComponent(App, {
  tmpl: _tmpl,
  sel: "c-app",
  apiVersion: 66
});

document.getElementById("app").appendChild(createElement("c-app", {
  is: __lwc_component_class_internal
}));
//# sourceMappingURL=app.js.map
