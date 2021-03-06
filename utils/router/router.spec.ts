import { expect } from "chai";
import { error } from "../../src/pages/Error/index";
import Router from "./router";

const { JSDOM } = require("jsdom");

describe("Check Router", () => {
  let router: Router;
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

    router = new Router("#root");
  });

  beforeEach(function () {
    router.use("/login", error);
    router.use("/error", error).start();
  });

  it("Check if router added", () => {
    expect(router.routes[0]._pathname).to.eq("/login");
  });

  it("Check go to correct page", () => {
    router.go("/error");
    expect(window.location.href).to.eq("http://localhost:3000/error");
  });

  it("Check return seleted router", () => {
    expect(router.getRoute("/error")?._pathname).to.eq("/error");
  });
});
