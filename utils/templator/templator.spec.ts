import { expect } from "chai";
import { Templator } from "./Templator";

const { JSDOM } = require("jsdom");

describe("Check Templator", () => {
  let templator: Templator;
  function createTemplate(template: string) {
    templator = new Templator(template);
  }
  before(function () {
    const dom = new JSDOM(
      `<html>
    <head>
    </head>
    <body style="margin: 0">
      <main id="root"></main>
    </body>
  </html>`,
      { url: "http://localhost:3000" }
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it("Check template render without values", () => {
    createTemplate(`<div class="file-form__input">
    <label for="avatar" class="file-form__input-lable">
    Select image</label></div>`);
    expect(templator.compile({})).to.eq(`<div class="file-form__input">
    <label for="avatar" class="file-form__input-lable">
    Select image</label></div>`);
  });

  it("Check template render with values", () => {
    createTemplate(`<img class="{{ className }}" alt="{{ pictureName }}" />`);
    expect(
      templator.compile({
        className: "class-name",
        pictureName: "picture-name",
      })
    ).to.eq(`<img class="class-name" alt="picture-name" />`);
  });

  it("Check template onclick function render", () => {
    createTemplate(`<button onclick="{{ click }}"></button>`);
    expect(
      templator.compile({
        click: () => {},
      })
    ).to.eq(`<button onclick="window.click()"></button>`);
  });
});
