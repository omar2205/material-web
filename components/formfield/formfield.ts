/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {customElement} from 'lit/decorators';

import {Formfield} from './lib/formfield-base';
import {styles as formfieldStyles} from './lib/formfield-styles.css';

declare global {
  interface HTMLElementTagNameMap {
    'md-formfield': MdFormfield;
  }
}

/**
 * @soyCompatible
 * @final
 * @suppress {visibility}
 */
@customElement('md-formfield')
export class MdFormfield extends Formfield {
  static styles = [formfieldStyles];
}