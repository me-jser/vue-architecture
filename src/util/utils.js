/**
 * @file utils
 * @version 0.1.0
 * @since 0.1.0
 * @requires lodash
 * @module util/utils
 */
import has from 'lodash/has'

export function notNull (val) {
  return !!val
}

/**
 * @name 数据类型检查
 * @function
 * @param {any} val 需要验证的数据
 * @example getType('string')
 */
export function getType (val) {
  return Object.prototype.toString.call(val)
}

/**
     * @name 检查深度嵌套有效性，例如接口返回值
     * @function
     * @param {object} object 验证的object
     * @param {string} target 验证的属性
     * @example let o = {
        t: {
          s: {
            a: {
              s: 1
            }
          }
        }
      };
      if (objectValidation(o, "t.s.a")) {
        console.log("bingo");
      }
     */
export function objectValidation (object, target) {
  return has(object, target)
}
