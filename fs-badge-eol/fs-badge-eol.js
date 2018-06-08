/**
A simple FamilySearch badge style

Example:

    <fs-badge-eol>3</fs-badge-eol>

Example:

    <fs-badge-eol option='light'>5</fs-badge-eol>

@demo fs-badge-eol/demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        background: #4d4d4a;
        border-radius: 9px;
        box-sizing: border-box;
        color: #fff;
        display: inline-block;
        font-size: 14px;
        font-size: 0.875rem;
        font-weight: normal;
        line-height: 1;
        margin: 0 4px;
        min-width: 21px;
        padding: 1px 8px;
        text-shadow: none;
      }

      :host([option=light]) {
        background: #fff;
        color: #333331;
      }
    </style>
    <slot></slot>
`,

  is: 'fs-badge-eol',

  properties: {
    /**
     * The rendering type of the badge
     *
     * _Only valid option is currently `light`_
     * @type {String}
     */
    option: {
      type: String,
      reflectToAttribute: true
    }
  }
});
