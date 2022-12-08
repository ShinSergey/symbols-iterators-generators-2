export default class Team {
  constructor() {
    *[Symbol.iterator]() {
      const keys = Object.keys(this)
      const size = keys.length;
      let counter = 0
      if (counter <= size) {
      yield [keys[counter++]]
      }
    };
  }
}
