export default function Mixin(inheritee) {
  return function(target) {
    Object.assign(target.prototype, inheritee.prototype);
  };
}
