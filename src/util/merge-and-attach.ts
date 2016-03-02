export default function mergeAndAttach (target, functionName, fn) {

  let oldFunction = target[functionName];

  if (typeof oldFunction !== 'function') {
    target[functionName] = fn;
    return;
  }

  target[functionName] = function() {
    oldFunction.apply(this, arguments);
    fn.apply(this, arguments);
  };

}
