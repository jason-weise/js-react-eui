/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import { render, mount } from 'enzyme';

import { findTestSubject, requiredProps } from '../../../test';

import { EuiForm } from '../form';
import { EuiFormControlLayout, ICON_SIDES } from './form_control_layout';

jest.mock('../../', () => ({
  EuiIcon: 'eui_icon',
  EuiLoadingSpinner: 'eui_loading_spinner',
}));

describe('EuiFormControlLayout', () => {
  test('is rendered', () => {
    const component = render(
      <EuiFormControlLayout {...requiredProps}>
        <input />
      </EuiFormControlLayout>
    );

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    describe('icon', () => {
      describe('is rendered', () => {
        test('as a string', () => {
          const component = render(<EuiFormControlLayout icon="alert" />);

          expect(component).toMatchSnapshot();
        });

        test('as an object', () => {
          const icon = {
            type: 'alert',
            className: 'customClass',
            'data-test-subj': 'myIcon',
          };

          const component = render(<EuiFormControlLayout icon={icon} />);

          expect(component).toMatchSnapshot();
        });
      });

      describe('side', () => {
        ICON_SIDES.forEach((side) => {
          test(`${side} is rendered`, () => {
            const icon = {
              type: 'alert',
              side,
            };

            const component = render(<EuiFormControlLayout icon={icon} />);

            expect(component).toMatchSnapshot();
          });
        });
      });

      describe('onClick', () => {
        test('is called when clicked', () => {
          const icon = {
            type: 'alert',
            onClick: jest.fn(),
            'data-test-subj': 'myIcon',
          };

          const component = mount(<EuiFormControlLayout icon={icon} />);

          const closeButton = findTestSubject(component, 'myIcon');
          closeButton.simulate('click');
          expect(icon.onClick).toBeCalled();
        });
      });
    });

    describe('clear', () => {
      describe('onClick', () => {
        test('is rendered', () => {
          const clear = {
            onClick: () => {},
            className: 'customClass',
            'data-test-subj': 'clearButton',
          };

          const component = render(<EuiFormControlLayout clear={clear} />);

          expect(component).toMatchSnapshot();
        });

        test('is called when clicked', () => {
          const clear = {
            onClick: jest.fn(),
            'data-test-subj': 'clearButton',
          };

          const component = mount(<EuiFormControlLayout clear={clear} />);

          const closeButton = findTestSubject(component, 'clearButton');
          closeButton.simulate('click');
          expect(clear.onClick).toBeCalled();
        });
      });
    });

    test('isLoading is rendered', () => {
      const component = render(<EuiFormControlLayout isLoading />);

      expect(component).toMatchSnapshot();
    });

    test('isInvalid is rendered', () => {
      const component = render(<EuiFormControlLayout isInvalid />);

      expect(component).toMatchSnapshot();
    });

    test('isDropdown is rendered', () => {
      const component = render(<EuiFormControlLayout isDropdown />);

      expect(component).toMatchSnapshot();
    });

    describe('compressed', () => {
      it('renders small-sized icon, clear button, and loading spinner', () => {
        const component = render(
          <EuiFormControlLayout
            compressed
            icon={{ type: 'alert' }}
            clear={{ onClick: jest.fn() }}
            isLoading
          />
        );

        expect(component).toMatchSnapshot();
      });
    });

    test('fullWidth is rendered', () => {
      const component = render(<EuiFormControlLayout fullWidth />);

      expect(component).toMatchSnapshot();
    });

    test('readOnly is rendered', () => {
      const component = render(<EuiFormControlLayout readOnly />);

      expect(component).toMatchSnapshot();
    });

    test('one prepend node is rendered', () => {
      const component = render(
        <EuiFormControlLayout prepend={<span>1</span>} />
      );

      expect(component).toMatchSnapshot();
    });

    test('one prepend node is rendered with className', () => {
      const component = render(
        <EuiFormControlLayout prepend={<span className="myClass">1</span>} />
      );

      expect(component).toMatchSnapshot();
    });

    test('one prepend string is rendered', () => {
      const component = render(<EuiFormControlLayout prepend="1" />);

      expect(component).toMatchSnapshot();
    });

    test('one append node is rendered', () => {
      const component = render(
        <EuiFormControlLayout append={<span>1</span>} />
      );

      expect(component).toMatchSnapshot();
    });

    test('one append string is rendered', () => {
      const component = render(<EuiFormControlLayout append="1" />);

      expect(component).toMatchSnapshot();
    });

    test('multiple prepends are rendered', () => {
      const component = render(
        <EuiFormControlLayout prepend={[<span>1</span>, <span>2</span>]} />
      );

      expect(component).toMatchSnapshot();
    });

    test('multiple appends are rendered', () => {
      const component = render(
        <EuiFormControlLayout append={[<span>1</span>, <span>2</span>]} />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('inherits', () => {
    test('fullWidth from <EuiForm />', () => {
      const component = render(
        <EuiForm fullWidth>
          <EuiFormControlLayout />
        </EuiForm>
      );

      if (
        !component
          .find('.euiFormControlLayout')
          .hasClass('euiFormControlLayout--fullWidth')
      ) {
        throw new Error(
          'expected EuiFormControlLayout to inherit fullWidth from EuiForm'
        );
      }
    });
  });
});
