interface ElementChecker {
  <T>(item: T[],tobeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(
  item: T[],
  tobeChecked: T,
  atIndex: number
): boolean {
  if (item[atIndex] === tobeChecked) {
  }

  let checker: ElementChecker = checkElementAt;
  let items = [1, 3, 5, 7];
  let b;Boolean = checker<number>(items, 5, 1);
  console.log(b); 