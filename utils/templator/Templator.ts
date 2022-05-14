import { getObject } from "../mydash/getObject";
export class Templator {
  TEMPLATE_REGEXP: RegExp = /\{\{(.*?)\}\}/gi;
  private readonly _template: string;

  constructor(template: string) {
    this._template = template;
  }

  public compile(ctx: any): string {
    return this._compileTemplate(ctx);
  }

  private _compileTemplate(ctx: string): string {
    let tmpl: string = this._template;
    const regExp: RegExp = this.TEMPLATE_REGEXP;
    let key: string[][] | null = [...tmpl.matchAll(regExp)];
    if (key.length > 0) {
      key.forEach((val) => {
        if (val[1]) {
          const tmplValue: any = val[1].trim();
          const data: any = getObject(ctx, tmplValue, "");
          if (Array.isArray(data)) {
            let element = "";

            for (let index = 0; index < data.length; index++) {
              element += data[index];
            }
            tmpl = tmpl.replace(new RegExp(val[0], "gi"), element);
          } else {
            if (typeof data === "function") {
              window[tmplValue] = data;
              tmpl = tmpl.replace(
                new RegExp(val[0], "gi"),
                `window.${val[1].trim()}()`
              );
            }
            tmpl = tmpl.replace(new RegExp(val[0], "gi"), data);
          }
        }
      });
    }
    return tmpl;
  }
}
