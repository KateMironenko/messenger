export function render(query: string, block: any): Element {
  const root: any= document.querySelector(query);

  root.innerHTML = "";

  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
