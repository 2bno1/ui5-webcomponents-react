'use client';

import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import type { ShellBarItemClickEventDetail } from '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ShellBarItemAttributes {
  /**
   * Defines the count displayed in the top-right corner.
   */
  count?: string;
  /**
   * Defines the name of the item's icon.
   */
  icon?: string;
  /**
   * Defines the item text.
   *
   * **Note:** The text is only displayed inside the overflow popover list view.
   */
  text?: string;
}

export interface ShellBarItemDomRef extends ShellBarItemAttributes, Ui5DomRef {}

export interface ShellBarItemPropTypes extends ShellBarItemAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Fired, when the item is pressed.
   */
  onClick?: (event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void;
}

/**
 * The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/fiori-ShellBar)
 */
const ShellBarItem = withWebComponent<ShellBarItemPropTypes, ShellBarItemDomRef>(
  'ui5-shellbar-item',
  ['count', 'icon', 'text'],
  [],
  [],
  ['click'],
  () => import('@ui5/webcomponents-fiori/dist/ShellBarItem.js')
);

ShellBarItem.displayName = 'ShellBarItem';

export { ShellBarItem };
