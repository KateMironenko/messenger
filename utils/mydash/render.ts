export function render(query: string, block: any): Element {
  const root: any = document.querySelector(query);

  root.innerHTML = "";

  root.appendChild(block.element);

  block.dispatchComponentDidMount();

  return root;
}
