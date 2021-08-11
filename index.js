class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    const lastIndex = this.items.length - 1;
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[lastIndex];
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce(reducer);
    }
  }

  avg() {}
}

module.exports = SortedList;
