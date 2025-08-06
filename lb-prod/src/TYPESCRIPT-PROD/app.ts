function log(target, key, descriptor) {
  console.log(`${key} was called`);
}

 class coculator {
  // Using the decorator @log
  @log
  square(n: number) {
    return n * n;
  }
 }