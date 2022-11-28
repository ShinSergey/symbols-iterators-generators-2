export default class Team {
  * [Symbol.iterator]() {
    let current = Object.keys(this)[0];
    const size = Object.keys(this).length;
    if (current <= size) {
      yield current += 1;
    }
    return {
      done: true,
    };
  }
}
