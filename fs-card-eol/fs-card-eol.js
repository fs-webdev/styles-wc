/**
A simple wrapper that create a FamilySearch card element

It will use the body of a the children node as the content of the card.

If you specify an `h1`-`h6` with the attribute `card-title` it will render a preformatted title for you.

Example:

    <fs-card-eol>
      <h1 card-title>My Title!</h1>
      <div>
        <h2>This is a thing</h2>
      </div>
    </fs-card-eol>

@demo fs-card-eol/demo/index.html
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
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.35), 0 3px 2px 0 rgba(0, 0, 0, 0.18);
        display: block;
        margin-bottom: 10px;
      }

      .fs-card__body {
        padding: 15px;
      }

      :host([nopadding]) .fs-card__body {
        padding: 0;
      }

      ::slotted([name="card-title"]) {
        color: #4d4d4a;
        border-bottom: 1px solid #ccc;
        border-radius: 4px 4px 0 0;
        font-family: Verdana, sans-serif;
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 21.6px;
        line-height: 1.35rem;
        margin: 0 0 3.25px 0;
        margin: 0 0 0.203125rem 0;
        padding: 10px 15px;
      }
    </style>
    <slot name="card-title"></slot>
    <div class="fs-card__body">
      <slot></slot>
    </div>
`,

  is: 'fs-card-eol',

  properties: {
    /**
     * Whether or not the card should render with 15px padding
     * @type {Boolean}
     */
    nopadding: {
      type: Boolean,
      reflectToAttribute: true,
      value: false
    }
  }
});
