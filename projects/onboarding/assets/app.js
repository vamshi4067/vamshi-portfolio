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

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [((useActualHostSelector ? ":host{" : hostSelector + "{")), "display:block;color:#18313e;font-family:Studio,system-ui,sans-serif}*", shadowSelector, "{box-sizing:border-box}h1", shadowSelector, ",h2", shadowSelector, ",p", shadowSelector, "{margin:0}button", shadowSelector, ",input", shadowSelector, "{font:inherit}button", shadowSelector, "{cursor:pointer}button:focus-visible", shadowSelector, ",input:focus-visible", shadowSelector, ",a:focus-visible", shadowSelector, "{outline:3px solid #c6694b;outline-offset:3px}button:disabled", shadowSelector, "{opacity:.5;cursor:not-allowed}.page", shadowSelector, "{max-width:1600px;margin:auto;padding:0 68px}.header", shadowSelector, "{height:88px;border-bottom:1px solid #c8cfca;display:flex;align-items:center;gap:35px}.brand", shadowSelector, "{display:flex;gap:11px;align-items:center;text-decoration:none;color:#163440;font-weight:700;font-size:18px;letter-spacing:-.03em}.brand", shadowSelector, " span", shadowSelector, " span", shadowSelector, "{font-weight:400;color:#6c7e7e}.brand-mark", shadowSelector, "{display:grid;place-items:center;width:31px;height:31px;background:#1c4451;color:#fff;border-radius:50%;font:italic 25px Georgia,serif}.header", shadowSelector, " nav", shadowSelector, "{display:flex;gap:24px;margin-left:auto}.header", shadowSelector, " nav", shadowSelector, " button", shadowSelector, ",.reset", shadowSelector, ",.back", shadowSelector, "{border:0;background:transparent;color:#425b61;font-size:13px;padding:11px 0}.header", shadowSelector, " nav", shadowSelector, " button:hover", shadowSelector, ",.reset:hover", shadowSelector, ",.back:hover", shadowSelector, "{text-decoration:underline;text-underline-offset:5px}.reset", shadowSelector, "{border:1px solid #9aaea9;border-radius:3px;padding:10px 14px}.intro", shadowSelector, "{display:grid;grid-template-columns:1.2fr .8fr;gap:40px;align-items:end;padding:58px 0 50px}.breadcrumb", shadowSelector, ",.section-caption", shadowSelector, ",.customer-label", shadowSelector, "{color:#a24f39;font-size:11px;font-weight:700;letter-spacing:.1em}.intro", shadowSelector, " h1", shadowSelector, ",.about", shadowSelector, " h1", shadowSelector, "{font-size:clamp(39px,4.3vw,62px);font-weight:500;letter-spacing:-.04em;line-height:1.08;margin-top:19px}.intro", shadowSelector, " h1", shadowSelector, " em", shadowSelector, ",.about", shadowSelector, " h1", shadowSelector, " em", shadowSelector, "{font-family:Georgia,serif;font-weight:400;color:#bb6247}.intro-copy", shadowSelector, "{font-size:15px;line-height:1.7;color:#526b70;max-width:52ch;margin-top:18px}.customer-card", shadowSelector, "{background:#d9e2df;border-radius:4px;padding:24px;display:flex;gap:17px;max-width:410px;width:100%;justify-self:end}.customer-icon", shadowSelector, "{display:grid;place-items:center;width:49px;height:49px;background:#234c58;color:#fff;font-size:22px;border-radius:3px}.customer-label", shadowSelector, "{color:#4d6d6d}.customer-card", shadowSelector, " h2", shadowSelector, "{font-size:19px;margin:6px 0 9px}.customer-card", shadowSelector, " p", shadowSelector, "{color:#536e71;font-size:12px;line-height:1.7}.journey", shadowSelector, "{background:#183d49;color:#fff;padding:27px 32px 0;border-radius:4px}.section-head", shadowSelector, "{display:flex;justify-content:space-between;align-items:center;gap:18px}.section-head", shadowSelector, " h2", shadowSelector, "{font-size:20px;font-weight:600}.section-head", shadowSelector, " p", shadowSelector, "{color:#c7d6d3;font-size:13px;margin-top:5px}.progress-label", shadowSelector, "{display:flex;gap:9px;align-items:baseline}.progress-label", shadowSelector, " strong", shadowSelector, "{font-size:22px;font-weight:500}.progress-label", shadowSelector, " span", shadowSelector, "{font-size:12px;color:#c7d6d3}.progress-track", shadowSelector, "{height:3px;background:#4b6a70;margin-top:22px}.progress-track", shadowSelector, " span", shadowSelector, "{display:block;height:100%;background:#e5a87f;transition:width 180ms ease}.stages", shadowSelector, "{display:grid;grid-template-columns:repeat(4,1fr);gap:1px}.stage", shadowSelector, "{display:flex;align-items:center;gap:12px;min-width:0;padding:23px 12px 23px 0;color:#b8c9c8}.stage.current", shadowSelector, "{color:#fff}.stage-number", shadowSelector, "{border:1px solid #76918f;width:35px;height:35px;border-radius:50%;display:grid;place-items:center;font-size:11px;flex-shrink:0}.stage.current", shadowSelector, " .stage-number", shadowSelector, "{background:#f0be98;border-color:#f0be98;color:#183d49}.stage.complete", shadowSelector, " .stage-number", shadowSelector, "{background:#a6cab9;color:#183d49;border-color:#a6cab9}.stage", shadowSelector, " strong", shadowSelector, ",.stage", shadowSelector, " small", shadowSelector, "{display:block}.stage", shadowSelector, " strong", shadowSelector, "{font-size:14px;font-weight:600}.stage", shadowSelector, " small", shadowSelector, "{font-size:11px;margin-top:4px}.content-grid", shadowSelector, "{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:26px;margin-top:26px;align-items:start}.tasks", shadowSelector, "{background:#fff;border:1px solid #d9e0db;border-radius:4px}.task-head", shadowSelector, "{padding:28px 30px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid #e3e9e5}.task-head", shadowSelector, " h2", shadowSelector, "{font-size:27px;letter-spacing:-.03em;margin-top:5px}.task-head", shadowSelector, " p:not(.section-caption)", shadowSelector, "{font-size:13px;color:#617579;margin-top:6px}.add", shadowSelector, "{border:1px solid #b7c6bf;background:#fff;color:#244a51;border-radius:3px;padding:10px 12px;font-size:13px;white-space:nowrap}.task-list", shadowSelector, "{padding:0 30px}.task", shadowSelector, "{display:flex;align-items:center;gap:14px;padding:20px 0;border-bottom:1px solid #e8ede9}.task-indicator", shadowSelector, "{width:20px;height:20px;border:1px solid #9eaea9;border-radius:50%;flex-shrink:0}.task.done", shadowSelector, " .task-indicator", shadowSelector, "{background:#639278;border-color:#639278}.task-copy", shadowSelector, "{flex:1;min-width:0}.task-copy", shadowSelector, " strong", shadowSelector, ",.task-copy", shadowSelector, " span", shadowSelector, "{display:block}.task-copy", shadowSelector, " strong", shadowSelector, "{font-size:14px;font-weight:600}.task-copy", shadowSelector, " span", shadowSelector, "{font-size:12px;color:#657a7d;margin-top:5px}.task.overdue", shadowSelector, " .task-copy", shadowSelector, " span", shadowSelector, "{color:#ad523a}.required", shadowSelector, "{font-size:11px;color:#637778;background:#edf2ee;padding:5px 8px;border-radius:3px}.task", shadowSelector, " button", shadowSelector, "{background:transparent;border:1px solid #bdcbc5;color:#315a58;padding:8px 11px;border-radius:3px;font-size:12px;white-space:nowrap}.done-label", shadowSelector, "{color:#41785b;font-size:12px}.task-foot", shadowSelector, "{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 30px}.task-foot", shadowSelector, " p", shadowSelector, "{font-size:12px;color:#41785b}.task-foot", shadowSelector, " .error", shadowSelector, "{color:#a53629}.primary", shadowSelector, ",.download", shadowSelector, "{background:#c36449;color:#fff;border:0;border-radius:3px;padding:13px 17px;font-size:13px;font-weight:600;text-decoration:none}.primary:hover", shadowSelector, ",.download:hover", shadowSelector, "{background:#a94f38}.primary", shadowSelector, " span", shadowSelector, "{padding-left:10px}.follow-form", shadowSelector, "{display:grid;grid-template-columns:1fr 170px auto;gap:10px;align-items:end;padding:20px 30px;background:#f3f6f3}.follow-form", shadowSelector, " label", shadowSelector, "{color:#425c5c;font-size:12px;font-weight:600}.follow-form", shadowSelector, " input", shadowSelector, "{display:block;width:100%;padding:10px;margin-top:6px;border:1px solid #b8c8bf;background:#fff;border-radius:3px;color:#18313e}.sidebar", shadowSelector, "{background:#e5e9df;border-radius:4px}.sidebar-top", shadowSelector, "{padding:27px}.aside-number", shadowSelector, "{font-size:27px;color:#bf6a4e}.sidebar", shadowSelector, " h2", shadowSelector, "{font-size:19px;letter-spacing:-.02em;margin-top:16px}.sidebar", shadowSelector, " p", shadowSelector, "{font-size:13px;line-height:1.7;color:#526a67;margin-top:12px}.sidebar-bottom", shadowSelector, "{padding:25px 27px;border-top:1px solid #c5d0c4}.sidebar-bottom", shadowSelector, ">span", shadowSelector, "{font-size:10px;font-weight:700;letter-spacing:.1em;color:#6c7e71}.sidebar-bottom", shadowSelector, " button", shadowSelector, "{padding:0;margin-top:15px;border:0;background:transparent;color:#9a4d38;font-size:13px;font-weight:600;text-align:left}.about", shadowSelector, "{padding:55px 0;max-width:1050px}.about", shadowSelector, " h1", shadowSelector, "{margin-top:28px}.about", shadowSelector, ">p", shadowSelector, "{line-height:1.7;color:#526b70;max-width:65ch;margin-top:20px}.about-grid", shadowSelector, "{display:grid;grid-template-columns:1fr 1fr;gap:25px;margin:45px 0}.about-grid", shadowSelector, " article", shadowSelector, "{border-top:2px solid #b7654a;padding-top:22px}.about-grid", shadowSelector, " article", shadowSelector, " span", shadowSelector, "{color:#a24f39;font-size:12px}.about-grid", shadowSelector, " h2", shadowSelector, "{font-size:21px;margin:12px 0}.about-grid", shadowSelector, " p", shadowSelector, "{color:#526b70;font-size:14px;line-height:1.7}.about", shadowSelector, " .note", shadowSelector, "{background:#dfe9e3;padding:18px;margin-bottom:25px;font-size:13px}.download", shadowSelector, "{display:inline-block}footer", shadowSelector, "{border-top:1px solid #c8cfca;display:flex;justify-content:space-between;gap:20px;margin-top:55px;padding:22px 0 32px;color:#657c79;font-size:11px;letter-spacing:.05em}footer", shadowSelector, " span", shadowSelector, "+span", shadowSelector, "{letter-spacing:0}@media(max-width:900px){.page", shadowSelector, "{padding:0 28px}.intro", shadowSelector, "{grid-template-columns:1fr 1fr}.content-grid", shadowSelector, "{grid-template-columns:1fr 250px}.follow-form", shadowSelector, "{grid-template-columns:1fr 1fr}.follow-form", shadowSelector, " button", shadowSelector, "{grid-column:1/-1}}@media(max-width:650px){.page", shadowSelector, "{padding:0 18px}.header", shadowSelector, "{height:auto;min-height:75px;flex-wrap:wrap;gap:9px;padding:16px 0}.header", shadowSelector, " nav", shadowSelector, "{order:3;width:100%;margin:0;gap:20px}.reset", shadowSelector, "{margin-left:auto}.intro", shadowSelector, "{grid-template-columns:1fr;padding:35px 0;gap:25px}.intro", shadowSelector, " h1", shadowSelector, ",.about", shadowSelector, " h1", shadowSelector, "{font-size:40px}.customer-card", shadowSelector, "{justify-self:start;max-width:none}.journey", shadowSelector, "{padding:23px 20px 0}.section-head", shadowSelector, "{align-items:flex-start}.progress-label", shadowSelector, "{display:block;text-align:right}.progress-label", shadowSelector, " span", shadowSelector, "{display:block}.stages", shadowSelector, "{grid-template-columns:1fr 1fr}.stage", shadowSelector, "{padding:15px 4px}.content-grid", shadowSelector, "{grid-template-columns:1fr;gap:15px}.task-head", shadowSelector, "{padding:22px 18px;align-items:flex-start}.task-list", shadowSelector, "{padding:0 18px}.task", shadowSelector, "{flex-wrap:wrap}.task-copy", shadowSelector, "{min-width:60%}.task-foot", shadowSelector, "{padding:18px;flex-wrap:wrap}.follow-form", shadowSelector, "{grid-template-columns:1fr;padding:18px}.follow-form", shadowSelector, " button", shadowSelector, "{grid-column:auto}.about-grid", shadowSelector, "{grid-template-columns:1fr;gap:18px}footer", shadowSelector, "{display:block;line-height:2}}@media(prefers-reduced-motion:reduce){.progress-track", shadowSelector, " span", shadowSelector, "{transition:none}}", ((useActualHostSelector ? ":host{" : hostSelector + "{")), "color:#282d48}.header", shadowSelector, "{border-color:#d3cfdb}.brand", shadowSelector, ",.brand", shadowSelector, " span", shadowSelector, " span", shadowSelector, "{color:#303651}.brand-mark", shadowSelector, "{background:#574d83;color:white;font:600 17px Studio,system-ui,sans-serif}.header", shadowSelector, " nav", shadowSelector, " button", shadowSelector, ",.reset", shadowSelector, ",.back", shadowSelector, "{color:#515776}.reset", shadowSelector, "{border-color:#bcb8ce}.intro", shadowSelector, " h1", shadowSelector, " em", shadowSelector, ",.about", shadowSelector, " h1", shadowSelector, " em", shadowSelector, "{color:#b45e4c}.breadcrumb", shadowSelector, ",.section-caption", shadowSelector, "{color:#a34d3d}.intro-copy", shadowSelector, ",.about", shadowSelector, ">p", shadowSelector, "{color:#5f6378}.customer-card", shadowSelector, "{background:#e1ddea}.customer-icon", shadowSelector, "{background:#695b91}.customer-label", shadowSelector, "{color:#625b7d}.customer-card", shadowSelector, " p", shadowSelector, "{color:#62607a}.journey", shadowSelector, "{background:#403b65}.section-head", shadowSelector, " p", shadowSelector, ",.progress-label", shadowSelector, " span", shadowSelector, "{color:#dbd7e9}.progress-track", shadowSelector, "{background:#777198}.progress-track", shadowSelector, " span", shadowSelector, "{background:#efad89}.stage", shadowSelector, "{color:#d1cce0}.stage.current", shadowSelector, " .stage-number", shadowSelector, "{background:#f2be9f;border-color:#f2be9f;color:#403b65}.stage.complete", shadowSelector, " .stage-number", shadowSelector, "{background:#c9d5bd;border-color:#c9d5bd;color:#403b65}.content-grid", shadowSelector, " .tasks", shadowSelector, "{border-color:#ded9e4}.task-head", shadowSelector, "{border-color:#ebe7ed}.task-head", shadowSelector, " p:not(.section-caption)", shadowSelector, ",.task-copy", shadowSelector, " span", shadowSelector, "{color:#686b80}.add", shadowSelector, ",.task", shadowSelector, " button", shadowSelector, "{border-color:#c5bdcf;color:#5b507d}.task", shadowSelector, "{border-color:#eeeaf0}.required", shadowSelector, "{background:#eeeaf4;color:#635d79}.primary", shadowSelector, ",.download", shadowSelector, "{background:#b9624e}.primary:hover", shadowSelector, ",.download:hover", shadowSelector, "{background:#994b3b}.follow-form", shadowSelector, "{background:#f4f1f7}.follow-form", shadowSelector, " label", shadowSelector, "{color:#5a5872}.follow-form", shadowSelector, " input", shadowSelector, "{border-color:#c9c0d1;color:#282d48}.sidebar", shadowSelector, "{background:#e9e0d8}.sidebar", shadowSelector, " h2", shadowSelector, "{margin-top:0}.sidebar", shadowSelector, " p", shadowSelector, "{color:#6d605d}.sidebar-bottom", shadowSelector, "{border-color:#d2c4ba}.sidebar-bottom", shadowSelector, ">span", shadowSelector, "{color:#786761}.sidebar-bottom", shadowSelector, " button", shadowSelector, "{color:#9a4d3c}footer", shadowSelector, "{border-color:#d3cfdb;color:#6c6d80}.about-grid", shadowSelector, " article", shadowSelector, "{border-color:#b9624e}.about-grid", shadowSelector, " p", shadowSelector, "{color:#5f6378}.about", shadowSelector, " .note", shadowSelector, "{background:#e6e0ec}.stage", shadowSelector, "{border:0;border-radius:4px;background:transparent;text-align:left;font:inherit;cursor:pointer;transition:background-color 150ms ease}.stage:hover", shadowSelector, "{background:rgba(255,255,255,.08)}.stage.selected", shadowSelector, "{background:rgba(255,255,255,.12)}.stage:focus-visible", shadowSelector, "{outline:3px solid #f0be98;outline-offset:-3px}.stage-text", shadowSelector, "{min-width:0}.preview-label", shadowSelector, "{font-size:12px;color:#687882}@media(prefers-reduced-motion:reduce){.stage", shadowSelector, "{transition:none}}.intro", shadowSelector, "{display:block}.intro", shadowSelector, ">div", shadowSelector, "{max-width:850px}.stages", shadowSelector, "{grid-template-columns:repeat(6,minmax(0,1fr))}.stage", shadowSelector, "{padding-left:8px;gap:9px}.stage", shadowSelector, " strong", shadowSelector, "{font-size:13px}@media(max-width:1000px){.stages", shadowSelector, "{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:650px){.stages", shadowSelector, "{grid-template-columns:repeat(2,minmax(0,1fr))}}.aside-action", shadowSelector, ",.sidebar-bottom", shadowSelector, " .aside-action", shadowSelector, "{padding:0;margin-top:14px;border:0;background:transparent;color:#934735;font-size:13px;font-weight:600;text-align:left}.detail-form", shadowSelector, "{display:grid;gap:10px;margin-top:16px}.detail-form", shadowSelector, " label", shadowSelector, ",.blocker-input", shadowSelector, "{display:block;color:#564d61;font-size:12px;font-weight:600}.detail-form", shadowSelector, " input", shadowSelector, ",.detail-form", shadowSelector, " textarea", shadowSelector, ",.blocker-input", shadowSelector, " input", shadowSelector, "{display:block;width:100%;margin-top:5px;padding:9px;border:1px solid #bdb6c7;background:#fff;border-radius:3px;color:#282d48;font:inherit;font-size:13px}.detail-form", shadowSelector, " textarea", shadowSelector, "{min-height:70px;resize:vertical}.detail-form", shadowSelector, " .primary", shadowSelector, "{justify-self:start}.customer-note", shadowSelector, ",.activity-item", shadowSelector, "{padding-top:10px;border-top:1px solid #d2c4ba}.activity-item", shadowSelector, " small", shadowSelector, "{color:#6b6267}.blocker", shadowSelector, "{display:flex;justify-content:space-between;align-items:start;gap:10px;margin-top:13px;color:#443e4c;font-size:13px;line-height:1.5}.blocker", shadowSelector, " button", shadowSelector, "{margin:0;color:#934735}.blocker", shadowSelector, " small", shadowSelector, "{color:#476c52}.blocker-input", shadowSelector, "{margin-top:16px}.edit-task", shadowSelector, "{margin-left:2px}"].join('');
  /*LWC compiler v9.5.3*/
}
var _implicitStylesheets = [stylesheet];

const $fragment1 = parseFragment`<header class="header${0}"${2}><a class="brand${0}" href="/"${2}><span class="brand-mark${0}"${2}>O</span><span${3}>Onboarding <span${3}>Tracker</span></span></a><nav aria-label="Site navigation"${3}><button data-tab="journey"${3}>Customer journey</button><button data-tab="about"${3}>How it’s built</button></nav><button class="reset${0}"${2}>Reset demo</button></header>`;
const $fragment2 = parseFragment`<section class="intro${0}"${2}><div${3}><p class="breadcrumb${0}"${2}>CUSTOMER ONBOARDING</p><h1${3}>A good start<br${3}><em${3}>makes all the difference.</em></h1><p class="intro-copy${0}"${2}>A working view of the steps that take a new customer from signed agreement to launch.</p></div></section>`;
const $fragment3 = parseFragment`<div class="section-head${0}"${2}><div${3}><h2${3}>The journey</h2><p${3}>Select a stage to explore its tasks.</p></div><div class="progress-label${0}"${2}><strong${3}>${"t8"}</strong><span${3}>required work complete</span></div></div>`;
const $fragment4 = parseFragment`<div class="progress-track${0}" role="progressbar" aria-label="Required tasks complete"${"a0:aria-valuetext"}${2}><span${"s1"}${3}></span></div>`;
const $fragment5 = parseFragment`<button type="button"${"c0"}${"a0:data-stage"}${"a0:aria-pressed"}${2}><span class="stage-number${0}"${2}>${"t2"}</span><span class="stage-text${0}"${2}><strong${3}>${"t5"}</strong><small${3}>${"t7"}</small></span></button>`;
const $fragment6 = parseFragment`<div${3}><p class="section-caption${0}"${2}>${"t2"}</p><h2${3}>${"t4"}</h2><p${3}>${"t6"}</p></div>`;
const $fragment7 = parseFragment`<button class="add${0}"${2}>+ Add follow-up</button>`;
const $fragment8 = parseFragment`<button class="add${0}"${2}>Back to current stage</button>`;
const $fragment9 = parseFragment`<button class="primary${0}"${2}>Add task</button>`;
const $fragment10 = parseFragment`<span class="task-indicator${0}"${2}></span>`;
const $fragment11 = parseFragment`<div class="task-copy${0}"${2}><strong${3}>${"t2"}</strong><span${3}>${"t4"}</span></div>`;
const $fragment12 = parseFragment`<span class="required${0}"${2}>Required</span>`;
const $fragment13 = parseFragment`<button class="edit-task${0}"${"a0:data-id"}${2}>Edit</button>`;
const $fragment14 = parseFragment`<span class="done-label${0}"${2}>Done ✓</span>`;
const $fragment15 = parseFragment`<button${"a0:data-id"}${"a0:aria-label"}${3}>Mark done</button>`;
const $fragment16 = parseFragment`<span class="preview-label${0}"${2}>Preview</span>`;
const $fragment17 = parseFragment`<div${3}><button class="primary${0}"${2}>Save task</button><button class="add${0}"${2}>Cancel</button></div>`;
const $fragment18 = parseFragment`<div${3}><p role="status"${3}>${"t2"}</p><p class="error${0}" role="alert"${2}>${"t4"}</p></div>`;
const $fragment19 = parseFragment`<button class="primary${0}"${"a0:disabled"}${2}>${"t1"}<span${3}>→</span></button>`;
const $fragment20 = parseFragment`<h2${3}>Customer details</h2>`;
const $fragment21 = parseFragment`<p${3}>${"t1"}<br${3}>${"t3"}<br${3}>${"t5"}</p>`;
const $fragment22 = parseFragment`<button class="aside-action${0}"${2}>Edit details &amp; add note</button>`;
const $fragment23 = parseFragment`<label${3}>Note <span${3}>optional</span><textarea data-field="customerNote" maxlength="500"${3}></textarea></label>`;
const $fragment24 = parseFragment`<button class="primary${0}"${2}>Save details</button>`;
const $fragment25 = parseFragment`<p class="customer-note${0}"${2}>${"t1"}</p>`;
const $fragment26 = parseFragment`<h2${3}>Stage blockers</h2>`;
const $fragment27 = parseFragment`<p${3}>Open blockers prevent this stage from advancing.</p>`;
const $fragment28 = parseFragment`<span${3}>${"t1"}</span>`;
const $fragment29 = parseFragment`<small${3}>Resolved</small>`;
const $fragment30 = parseFragment`<button${"a0:data-id"}${3}>Resolve</button>`;
const $fragment31 = parseFragment`<p${3}>No blockers in this stage.</p>`;
const $fragment32 = parseFragment`<button class="aside-action${0}"${2}>Add blocker</button>`;
const $fragment33 = parseFragment`<h2${3}>Activity</h2>`;
const $fragment34 = parseFragment`<p class="activity-item${0}"${2}><small${3}>${"t2"}</small><br${3}>${"t4"}</p>`;
const $fragment35 = parseFragment`<p${3}>Changes will appear here.</p>`;
const $fragment36 = parseFragment`<section class="about${0}"${2}><button class="back${0}" data-tab="journey"${2}>← Back to journey</button><h1${3}>From first steps<br${3}><em${3}>to a confident launch.</em></h1><p${3}>This onboarding example helps an account manager follow required work across documents, discovery, configuration, training, review and launch.</p><div class="about-grid${0}"${2}><article${3}><span${3}>01</span><h2${3}>Lightning Web Components</h2><p${3}>The component renders the journey, task state and progress. It responds to task completion and lets an account manager add a follow-up.</p></article><article${3}><span${3}>02</span><h2${3}>Apex and Salesforce</h2><p${3}>The Salesforce component calls Apex to load Account and Task records. Apex checks required tasks before advancing the onboarding stage and creates follow-up Tasks.</p></article></div><p class="note${0}"${2}>The public demo uses fictional in-memory data and does not execute Apex. Customer details, task editing, blockers and activity are browser-only features; the included Salesforce package does not yet implement them. Salesforce deployment and tests require an authenticated sandbox.</p><a class="download${0}" href="./onboarding-source.zip" download${2}>Download project source ↗</a></section>`;
const $fragment37 = parseFragment`<footer${3}><span${3}>ONBOARDING TRACKER</span><span${3}>Interactive Salesforce LWC &amp; Apex showcase</span></footer>`;
const stc0 = {
  classMap: {
    "page": true
  },
  key: 0
};
const stc1 = {
  key: 3
};
const stc2 = {
  classMap: {
    "journey": true
  },
  key: 7
};
const stc3 = {
  classMap: {
    "stages": true
  },
  key: 12
};
const stc4 = {
  classMap: {
    "content-grid": true
  },
  key: 15
};
const stc5 = {
  classMap: {
    "tasks": true
  },
  key: 16
};
const stc6 = {
  classMap: {
    "task-head": true
  },
  key: 17
};
const stc7 = {
  classMap: {
    "follow-form": true
  },
  key: 26
};
const stc8 = {
  key: 27
};
const stc9 = {
  "type": "text",
  "maxlength": "100",
  "placeholder": "e.g. Call the customer"
};
const stc10 = {
  key: 29
};
const stc11 = {
  "type": "date"
};
const stc12 = {
  classMap: {
    "task-list": true
  },
  key: 33
};
const stc13 = {
  classMap: {
    "follow-form": true
  },
  key: 54
};
const stc14 = {
  key: 55
};
const stc15 = {
  "type": "text",
  "maxlength": "100"
};
const stc16 = {
  key: 57
};
const stc17 = {
  classMap: {
    "task-foot": true
  },
  key: 61
};
const stc18 = {
  classMap: {
    "sidebar": true
  },
  key: 67
};
const stc19 = {
  classMap: {
    "sidebar-top": true
  },
  key: 68
};
const stc20 = {
  classMap: {
    "detail-form": true
  },
  key: 76
};
const stc21 = {
  key: 77
};
const stc22 = {
  "data-field": "customerName",
  "maxlength": "100"
};
const stc23 = {
  key: 79
};
const stc24 = {
  "data-field": "customerContact",
  "maxlength": "100"
};
const stc25 = {
  key: 81
};
const stc26 = {
  "data-field": "customerOwner",
  "maxlength": "100"
};
const stc27 = {
  classMap: {
    "sidebar-bottom": true
  },
  key: 89
};
const stc28 = {
  "blocker": true
};
const stc29 = {
  classMap: {
    "blocker-input": true
  },
  key: 106
};
const stc30 = {
  "type": "text",
  "maxlength": "300",
  "placeholder": "What needs attention?"
};
const stc31 = {
  classMap: {
    "sidebar-bottom": true
  },
  key: 110
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment, d: api_dynamic_text, ncls: api_normalize_class_name, k: api_key, i: api_iterator, h: api_element, fr: api_fragment, t: api_text, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14, _m15, _m16, _m17, _m18, _m19, _m20, _m21, _m22, _m23, _m24, _m25, _m26, _m27, _m28, _m29, _m30, _m31, _m32, _m33, _m34, _m35, _m36} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1, 2, [api_static_part(9, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.navigate)
    })
  }, null), api_static_part(11, {
    on: _m1 || ($ctx._m1 = {
      "click": api_bind($cmp.navigate)
    })
  }, null), api_static_part(13, {
    on: _m2 || ($ctx._m2 = {
      "click": api_bind($cmp.reset)
    })
  }, null)]), api_element("main", stc1, [$cmp.isJourney ? api_fragment(4, [api_static_fragment($fragment2, 6), api_element("section", stc2, [api_static_fragment($fragment3, 9, [api_static_part(8, null, api_dynamic_text($cmp.progress))]), api_static_fragment($fragment4, 11, [api_static_part(0, {
    attrs: {
      "aria-valuetext": $cmp.progress
    }
  }, null), api_static_part(1, {
    style: $cmp.progressStyle
  }, null)]), api_element("div", stc3, api_iterator($cmp.stageRows, function (stage) {
    return api_static_fragment($fragment5, api_key(14, stage.name), [api_static_part(0, {
      on: _m4 || ($ctx._m4 = {
        "click": api_bind($cmp.viewStageChanged)
      }),
      className: api_normalize_class_name(stage.css),
      attrs: {
        "data-stage": stage.name,
        "aria-pressed": stage.pressed
      }
    }, null), api_static_part(2, null, api_dynamic_text(stage.number)), api_static_part(5, null, api_dynamic_text(stage.name)), api_static_part(7, null, api_dynamic_text(stage.state))]);
  }))]), api_element("div", stc4, [api_element("section", stc5, [api_element("div", stc6, [api_static_fragment($fragment6, 19, [api_static_part(2, null, api_dynamic_text($cmp.stageCaption)), api_static_part(4, null, api_dynamic_text($cmp.viewStage)), api_static_part(6, null, api_dynamic_text($cmp.readyMessage))]), $cmp.canEdit ? api_fragment(20, [api_static_fragment($fragment7, 22, [api_static_part(0, {
    on: _m6 || ($ctx._m6 = {
      "click": api_bind($cmp.toggleForm)
    })
  }, null)])], 0) : api_fragment(20, [api_static_fragment($fragment8, 24, [api_static_part(0, {
    on: _m8 || ($ctx._m8 = {
      "click": api_bind($cmp.returnToCurrent)
    })
  }, null)])], 0)]), $cmp.showForm ? api_fragment(25, [api_element("div", stc7, [api_element("label", stc8, [api_text("Follow-up task"), api_element("input", {
    attrs: stc9,
    props: {
      "value": $cmp.subject
    },
    key: 28,
    on: _m9 || ($ctx._m9 = {
      "input": api_bind($cmp.subjectChanged)
    })
  })]), api_element("label", stc10, [api_text("Due date"), api_element("input", {
    attrs: stc11,
    props: {
      "value": $cmp.due
    },
    key: 30,
    on: _m10 || ($ctx._m10 = {
      "change": api_bind($cmp.dueChanged)
    })
  })]), api_static_fragment($fragment9, 32, [api_static_part(0, {
    on: _m12 || ($ctx._m12 = {
      "click": api_bind($cmp.addTask)
    })
  }, null)])])], 0) : null, api_element("div", stc12, api_iterator($cmp.currentTasks, function (task) {
    return api_element("article", {
      className: api_normalize_class_name(task.css),
      key: api_key(34, task.id)
    }, [api_static_fragment($fragment10, 36), api_static_fragment($fragment11, 38, [api_static_part(2, null, api_dynamic_text(task.subject)), api_static_part(4, null, api_dynamic_text(task.dateLabel) + " · " + api_dynamic_text(task.ownerLabel))]), task.required ? api_fragment(39, [api_static_fragment($fragment12, 41)], 0) : null, $cmp.canEdit ? api_fragment(42, [api_static_fragment($fragment13, 44, [api_static_part(0, {
      on: _m14 || ($ctx._m14 = {
        "click": api_bind($cmp.editTask)
      }),
      attrs: {
        "data-id": task.id
      }
    }, null)])], 0) : null, task.complete ? api_fragment(45, [api_static_fragment($fragment14, 47)], 0) : api_fragment(45, [$cmp.canEdit ? api_fragment(48, [api_static_fragment($fragment15, 50, [api_static_part(0, {
      on: _m16 || ($ctx._m16 = {
        "click": api_bind($cmp.finish)
      }),
      attrs: {
        "data-id": task.id,
        "aria-label": task.buttonLabel
      }
    }, null)])], 0) : api_fragment(48, [api_static_fragment($fragment16, 52)], 0)], 0)]);
  })), $cmp.taskEditing ? api_fragment(53, [api_element("div", stc13, [api_element("label", stc14, [api_text("Task owner"), api_element("input", {
    attrs: stc15,
    props: {
      "value": $cmp.taskOwner
    },
    key: 56,
    on: _m17 || ($ctx._m17 = {
      "input": api_bind($cmp.editOwner)
    })
  })]), api_element("label", stc16, [api_text("Due date"), api_element("input", {
    attrs: stc11,
    props: {
      "value": $cmp.taskDue
    },
    key: 58,
    on: _m18 || ($ctx._m18 = {
      "change": api_bind($cmp.editDue)
    })
  })]), api_static_fragment($fragment17, 60, [api_static_part(1, {
    on: _m19 || ($ctx._m19 = {
      "click": api_bind($cmp.saveTask)
    })
  }, null), api_static_part(3, {
    on: _m20 || ($ctx._m20 = {
      "click": api_bind($cmp.cancelTask)
    })
  }, null)])])], 0) : null, api_element("div", stc17, [api_static_fragment($fragment18, 63, [api_static_part(2, null, api_dynamic_text($cmp.message)), api_static_part(4, null, api_dynamic_text($cmp.error))]), $cmp.canEdit ? api_fragment(64, [api_static_fragment($fragment19, 66, [api_static_part(0, {
    on: _m22 || ($ctx._m22 = {
      "click": api_bind($cmp.advance)
    }),
    attrs: {
      "disabled": $cmp.isFinal ? "" : null
    }
  }, null), api_static_part(1, null, api_dynamic_text($cmp.nextLabel) + " ")])], 0) : null])]), api_element("aside", stc18, [api_element("div", stc19, api_flatten([api_static_fragment($fragment20, 70), api_static_fragment($fragment21, 72, [api_static_part(1, null, api_dynamic_text($cmp.plan.customer)), api_static_part(3, null, "Contact · " + api_dynamic_text($cmp.plan.contact)), api_static_part(5, null, "Manager · " + api_dynamic_text($cmp.plan.owner))]), api_static_fragment($fragment22, 74, [api_static_part(0, {
    on: _m24 || ($ctx._m24 = {
      "click": api_bind($cmp.openCustomer)
    })
  }, null)]), $cmp.showCustomer ? api_fragment(75, [api_element("div", stc20, [api_element("label", stc21, [api_text("Customer"), api_element("input", {
    attrs: stc22,
    props: {
      "value": $cmp.customerName
    },
    key: 78,
    on: _m25 || ($ctx._m25 = {
      "input": api_bind($cmp.customerField)
    })
  })]), api_element("label", stc23, [api_text("Contact"), api_element("input", {
    attrs: stc24,
    props: {
      "value": $cmp.customerContact
    },
    key: 80,
    on: _m26 || ($ctx._m26 = {
      "input": api_bind($cmp.customerField)
    })
  })]), api_element("label", stc25, [api_text("Account manager"), api_element("input", {
    attrs: stc26,
    props: {
      "value": $cmp.customerOwner
    },
    key: 82,
    on: _m27 || ($ctx._m27 = {
      "input": api_bind($cmp.customerField)
    })
  })]), api_static_fragment($fragment23, 84, [api_static_part(4, {
    on: _m28 || ($ctx._m28 = {
      "input": api_bind($cmp.customerField)
    })
  }, null)]), api_static_fragment($fragment24, 86, [api_static_part(0, {
    on: _m30 || ($ctx._m30 = {
      "click": api_bind($cmp.saveCustomer)
    })
  }, null)])])], 0) : null, api_iterator($cmp.notes, function (note) {
    return api_static_fragment($fragment25, api_key(88, note.id), [api_static_part(1, null, api_dynamic_text(note.text))]);
  })])), api_element("div", stc27, [api_static_fragment($fragment26, 91), api_static_fragment($fragment27, 93), $cmp.hasBlockers ? api_fragment(94, api_iterator($cmp.blockers, function (blocker) {
    return api_element("div", {
      classMap: stc28,
      key: api_key(95, blocker.id)
    }, [api_static_fragment($fragment28, 97, [api_static_part(1, null, api_dynamic_text(blocker.text))]), blocker.resolved ? api_fragment(98, [api_static_fragment($fragment29, 100)], 0) : blocker.canResolve ? api_fragment(98, [api_static_fragment($fragment30, 102, [api_static_part(0, {
      on: _m32 || ($ctx._m32 = {
        "click": api_bind($cmp.resolveBlockerAction)
      }),
      attrs: {
        "data-id": blocker.id
      }
    }, null)])], 0) : null]);
  }), 0) : api_fragment(94, [api_static_fragment($fragment31, 104)], 0), $cmp.canEdit ? api_fragment(105, [api_element("label", stc29, [api_text("Add a blocker"), api_element("input", {
    attrs: stc30,
    props: {
      "value": $cmp.blockerText
    },
    key: 107,
    on: _m33 || ($ctx._m33 = {
      "input": api_bind($cmp.blockerChanged)
    })
  })]), api_static_fragment($fragment32, 109, [api_static_part(0, {
    on: _m35 || ($ctx._m35 = {
      "click": api_bind($cmp.addBlockerAction)
    })
  }, null)])], 0) : null]), api_element("div", stc31, [api_static_fragment($fragment33, 112), $cmp.hasActivity ? api_fragment(113, api_iterator($cmp.activity, function (item) {
    return api_static_fragment($fragment34, api_key(115, item.id), [api_static_part(2, null, api_dynamic_text(item.date)), api_static_part(4, null, api_dynamic_text(item.text))]);
  }), 0) : api_fragment(113, [api_static_fragment($fragment35, 117)], 0)])])])], 0) : null, $cmp.isAbout ? api_fragment(118, [api_static_fragment($fragment36, 120, [api_static_part(1, {
    on: _m36 || ($ctx._m36 = {
      "click": api_bind($cmp.navigate)
    })
  }, null)])], 0) : null]), api_static_fragment($fragment37, 122)])];
  /*LWC compiler v9.5.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-2rjvebuuto3";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
freezeTemplate(tmpl);

const stages = ['Documents', 'Discovery', 'Configuration', 'Training', 'Review', 'Launch'];
function dateOffset(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
}
function initial() {
  return {
    customer: 'Northstar Coffee',
    contact: 'Jamie Rivera',
    owner: 'Alex Morgan',
    stage: 'Documents',
    notes: [],
    blockers: [],
    activity: [],
    tasks: [{
      id: 't1',
      stage: 'Documents',
      subject: 'Collect signed agreement',
      due: dateOffset(-2),
      required: true,
      complete: false
    }, {
      id: 't2',
      stage: 'Documents',
      subject: 'Confirm billing details',
      due: dateOffset(2),
      required: true,
      complete: false
    }, {
      id: 't7',
      stage: 'Discovery',
      subject: 'Confirm onboarding goals',
      due: dateOffset(3),
      required: true,
      complete: false
    }, {
      id: 't8',
      stage: 'Discovery',
      subject: 'Identify key stakeholders',
      due: dateOffset(4),
      required: true,
      complete: false
    }, {
      id: 't3',
      stage: 'Configuration',
      subject: 'Set up the customer workspace',
      due: dateOffset(5),
      required: true,
      complete: false
    }, {
      id: 't4',
      stage: 'Configuration',
      subject: 'Review access and permissions',
      due: dateOffset(6),
      required: true,
      complete: false
    }, {
      id: 't5',
      stage: 'Training',
      subject: 'Run the team training session',
      due: dateOffset(9),
      required: true,
      complete: false
    }, {
      id: 't9',
      stage: 'Review',
      subject: 'Review setup with the customer',
      due: dateOffset(10),
      required: true,
      complete: false
    }, {
      id: 't10',
      stage: 'Review',
      subject: 'Resolve outstanding questions',
      due: dateOffset(11),
      required: true,
      complete: false
    }, {
      id: 't6',
      stage: 'Launch',
      subject: 'Confirm launch readiness',
      due: dateOffset(12),
      required: true,
      complete: false
    }]
  };
}
let plan = initial();
function event(text) {
  plan.activity.unshift({
    id: String(Date.now()) + Math.random(),
    text,
    date: dateOffset(0)
  });
}
function dateValid(due) {
  const parsed = new Date(due + 'T00:00:00Z');
  return /^\d{4}-\d{2}-\d{2}$/.test(due) && !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === due;
}
function resetPlan() {
  plan = initial();
}
function getPlan() {
  return structuredClone(plan);
}
function completeTask(id) {
  const task = plan.tasks.find(t => t.id === id);
  if (!task) throw new Error('Task not found.');
  if (task.stage !== plan.stage) throw new Error('Only tasks in the current stage can be completed.');
  if (!task.complete) {
    task.complete = true;
    event('Completed: ' + task.subject);
  }
  return getPlan();
}
function advanceStage() {
  let index = stages.indexOf(plan.stage);
  if (index === stages.length - 1) throw new Error('Launch is the final stage.');
  if (plan.blockers.some(b => b.stage === plan.stage && !b.resolved)) throw new Error('Resolve the open blockers in this stage first.');
  if (plan.tasks.some(t => t.stage === plan.stage && t.required && !t.complete)) throw new Error('Complete the required tasks in this stage first.');
  plan.stage = stages[index + 1];
  event('Moved to ' + plan.stage + '.');
  return getPlan();
}
function addFollowUp(subject, due) {
  subject = (subject || '').trim();
  const parsed = new Date(due + 'T00:00:00Z');
  if (subject.length < 3 || subject.length > 100) throw new Error('Enter a task name of 3 to 100 characters.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(due) || Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== due) throw new Error('Choose a valid due date.');
  const task = {
    id: 'f' + Date.now() + Math.random(),
    stage: plan.stage,
    subject,
    due,
    required: false,
    complete: false
  };
  plan.tasks.push(task);
  event('Added follow-up: ' + subject + '.');
  return structuredClone(task);
}
function updateCustomer(data) {
  const customer = (data.customer || '').trim(),
    contact = (data.contact || '').trim(),
    owner = (data.owner || '').trim(),
    note = (data.note || '').trim();
  if (customer.length < 2 || customer.length > 100 || contact.length < 2 || contact.length > 100 || owner.length < 2 || owner.length > 100 || note.length > 500) throw new Error('Enter a customer, contact and manager (2–100 characters); notes can be up to 500 characters.');
  plan.customer = customer;
  plan.contact = contact;
  plan.owner = owner;
  if (note) {
    plan.notes.unshift(note);
    event('Customer note: ' + note);
  } else event('Customer details updated.');
  return getPlan();
}
function updateTask(id, owner, due) {
  const task = plan.tasks.find(t => t.id === id);
  if (!task || task.stage !== plan.stage) throw new Error('Choose a task in the current stage.');
  owner = (owner || '').trim();
  if (owner.length < 2 || owner.length > 100 || !dateValid(due)) throw new Error('Enter a task owner and valid due date.');
  task.owner = owner;
  task.due = due;
  event('Updated owner and due date: ' + task.subject + '.');
  return getPlan();
}
function addBlocker(text) {
  text = (text || '').trim();
  if (text.length < 3 || text.length > 300) throw new Error('Enter a blocker of 3 to 300 characters.');
  const blocker = {
    id: 'b' + Date.now() + Math.random(),
    text,
    stage: plan.stage,
    resolved: false
  };
  plan.blockers.unshift(blocker);
  event('Blocker added: ' + text + '.');
  return structuredClone(blocker);
}
function resolveBlocker(id) {
  const blocker = plan.blockers.find(b => b.id === id);
  if (!blocker || blocker.stage !== plan.stage || blocker.resolved) throw new Error('Select an open blocker in the current stage.');
  blocker.resolved = true;
  event('Blocker resolved: ' + blocker.text + '.');
  return getPlan();
}

class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.plan = {
      tasks: []
    };
    this.viewStage = 'Documents';
    this.tab = 'journey';
    this.showForm = false;
    this.subject = '';
    this.due = '';
    this.editTaskId = '';
    this.taskOwner = '';
    this.taskDue = '';
    this.blockerText = '';
    this.customerName = '';
    this.customerContact = '';
    this.customerOwner = '';
    this.customerNote = '';
    this.showCustomer = false;
    this.error = '';
    this.message = '';
  }
  connectedCallback() {
    this.refresh();
  }
  refresh() {
    this.plan = getPlan();
  }
  get isJourney() {
    return this.tab === 'journey';
  }
  get isAbout() {
    return this.tab === 'about';
  }
  get stageIndex() {
    return stages.indexOf(this.plan.stage);
  }
  get stageRows() {
    return stages.map((name, i) => ({
      name,
      number: '0' + (i + 1),
      state: i < this.stageIndex ? 'Complete' : i === this.stageIndex ? 'In progress' : 'Upcoming',
      css: (i < this.stageIndex ? 'stage complete' : i === this.stageIndex ? 'stage current' : 'stage') + (name === this.viewStage ? ' selected' : ''),
      pressed: name === this.viewStage
    }));
  }
  get currentTasks() {
    const now = new Date(),
      today = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
    return this.plan.tasks.filter(t => t.stage === this.viewStage).map(t => ({
      ...t,
      dateLabel: t.complete ? 'Completed' : this.canEdit && t.due < today ? 'Overdue · ' + t.due : 'Due ' + t.due,
      css: t.complete ? 'task done' : this.canEdit && t.due < today ? 'task overdue' : 'task',
      ownerLabel: 'Owner · ' + (t.owner || this.plan.owner),
      buttonLabel: 'Complete ' + t.subject
    }));
  }
  get taskEditing() {
    return Boolean(this.editTaskId);
  }
  get blockers() {
    return (this.plan.blockers || []).filter(b => b.stage === this.viewStage).map(b => ({
      ...b,
      canResolve: !b.resolved && this.canEdit
    }));
  }
  get activity() {
    return this.plan.activity || [];
  }
  get hasActivity() {
    return this.activity.length > 0;
  }
  get hasBlockers() {
    return this.blockers.length > 0;
  }
  get notes() {
    return (this.plan.notes || []).map((text, i) => ({
      id: i,
      text
    }));
  }
  get canEdit() {
    return this.viewStage === this.plan.stage;
  }
  get stageCaption() {
    return this.canEdit ? 'CURRENT STAGE' : 'STAGE PREVIEW';
  }
  get completeCount() {
    return this.plan.tasks.filter(t => t.required && t.complete).length;
  }
  get totalCount() {
    return this.plan.tasks.filter(t => t.required).length;
  }
  get progress() {
    return Math.round(this.completeCount / this.totalCount * 100) + '%';
  }
  get progressStyle() {
    return 'width:' + this.progress;
  }
  get remaining() {
    return this.plan.tasks.filter(t => t.stage === this.plan.stage && t.required && !t.complete).length;
  }
  get readyMessage() {
    if (!this.canEdit) return stages.indexOf(this.viewStage) < this.stageIndex ? 'Review the work completed in this stage.' : 'Preview upcoming work. Complete stages in order to make changes.';
    return this.remaining === 0 ? 'The required work for this stage is complete.' : this.remaining + ' required task(s) to finish before moving on.';
  }
  get isFinal() {
    return this.stageIndex === stages.length - 1;
  }
  get nextLabel() {
    return this.isFinal ? 'Final stage' : 'Continue to ' + stages[this.stageIndex + 1];
  }
  viewStageChanged(e) {
    this.viewStage = e.currentTarget.dataset.stage;
    this.showForm = false;
    this.editTaskId = '';
    this.error = '';
    this.message = '';
  }
  returnToCurrent() {
    this.viewStage = this.plan.stage;
    this.error = '';
    this.message = '';
  }
  navigate(e) {
    this.tab = e.currentTarget.dataset.tab;
    this.message = '';
    this.error = '';
  }
  openCustomer() {
    this.customerName = this.plan.customer;
    this.customerContact = this.plan.contact;
    this.customerOwner = this.plan.owner;
    this.customerNote = '';
    this.showCustomer = !this.showCustomer;
  }
  customerField(e) {
    this[e.target.dataset.field] = e.target.value;
  }
  saveCustomer() {
    try {
      updateCustomer({
        customer: this.customerName,
        contact: this.customerContact,
        owner: this.customerOwner,
        note: this.customerNote
      });
      this.showCustomer = false;
      this.error = '';
      this.message = 'Customer details saved.';
      this.refresh();
    } catch (e) {
      this.error = e.message;
    }
  }
  editTask(e) {
    const t = this.plan.tasks.find(t => t.id === e.currentTarget.dataset.id);
    this.editTaskId = t.id;
    this.taskOwner = t.owner || this.plan.owner;
    this.taskDue = t.due;
    this.error = '';
  }
  editOwner(e) {
    this.taskOwner = e.target.value;
  }
  editDue(e) {
    this.taskDue = e.target.value;
  }
  saveTask() {
    try {
      updateTask(this.editTaskId, this.taskOwner, this.taskDue);
      this.editTaskId = '';
      this.error = '';
      this.message = 'Task updated.';
      this.refresh();
    } catch (e) {
      this.error = e.message;
    }
  }
  cancelTask() {
    this.editTaskId = '';
  }
  blockerChanged(e) {
    this.blockerText = e.target.value;
  }
  addBlockerAction() {
    try {
      addBlocker(this.blockerText);
      this.blockerText = '';
      this.error = '';
      this.message = 'Blocker added.';
      this.refresh();
    } catch (e) {
      this.error = e.message;
    }
  }
  resolveBlockerAction(e) {
    try {
      resolveBlocker(e.currentTarget.dataset.id);
      this.error = '';
      this.message = 'Blocker resolved.';
      this.refresh();
    } catch (e) {
      this.error = e.message;
    }
  }
  toggleForm() {
    this.showForm = !this.showForm;
    this.error = '';
  }
  subjectChanged(e) {
    this.subject = e.target.value;
  }
  dueChanged(e) {
    this.due = e.target.value;
  }
  addTask() {
    try {
      addFollowUp(this.subject, this.due);
      this.subject = '';
      this.due = '';
      this.showForm = false;
      this.message = 'Follow-up added.';
      this.error = '';
      this.refresh();
    } catch (e) {
      this.error = e.message;
      this.message = '';
    }
  }
  finish(e) {
    try {
      completeTask(e.currentTarget.dataset.id);
      this.message = 'Task completed.';
      this.error = '';
      this.refresh();
    } catch (e) {
      this.error = e.message;
    }
  }
  advance() {
    try {
      advanceStage();
      this.viewStage = getPlan().stage;
      this.message = 'Moved to ' + getPlan().stage + '.';
      this.error = '';
      this.refresh();
    } catch (e) {
      this.error = e.message;
      this.message = '';
    }
  }
  reset() {
    resetPlan();
    this.viewStage = getPlan().stage;
    this.showForm = false;
    this.showCustomer = false;
    this.editTaskId = '';
    this.blockerText = '';
    this.subject = '';
    this.due = '';
    this.error = '';
    this.message = 'Sample journey restored.';
    this.refresh();
  }
  /*LWC compiler v9.5.3*/
}
registerDecorators(App, {
  fields: ["plan", "viewStage", "tab", "showForm", "subject", "due", "editTaskId", "taskOwner", "taskDue", "blockerText", "customerName", "customerContact", "customerOwner", "customerNote", "showCustomer", "error", "message"]
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
