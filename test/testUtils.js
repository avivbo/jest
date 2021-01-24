import { ShallowWrapper } from 'enzyme';

import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {String} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, confirmProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    confirmProps,
    'props',
    component.name
  );
  expect(propError).toBe(undefined);
};
