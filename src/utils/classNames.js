const isString = val => typeof val === 'string';
const isBoolean = val => typeof val === 'boolean'
  || val instanceof Boolean;

const objClassNames = obj => Object.keys(obj)
  .reduce((acc, key) => {
    if (isBoolean(obj[key]) && !obj[key]) {
      return acc;
    }

    return `${acc} ${key}`;
  }, '');

export default function classNames(...classes) {
  return classes
    .filter(val => val !== undefined && val !== null)
    .map((val) => {
      if (isString(val)) {
        return val;
      }

      return objClassNames(val);
    })
    .join(' ');
}
