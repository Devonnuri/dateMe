module.exports = class DateMe {
  constructor(date) {
    this.date = date;
  }

  static now() {
    return new this(new Date());
  }

  static from(date) {
    return new this(this.parse(date));
  }

  static parse(date) {
    if (!date) {
      return new Date();
    } else if (date instanceof Date) {
      return date;
    } else if (typeof date === 'string' || typeof date === 'number') {
      return new Date(date);
    }

    const result = new Date();
    result.setFullYear(date.year || 1970);
    result.setMonth(date.month - 1 || 0);
    result.setDate(date.day || 1);
    result.setHours(date.hour || 0);
    result.setMilliseconds(date.millisecond || 0);
    result.setMinutes(date.minute || 0);
    result.setSeconds(date.second || 0);

    return result;
  }

  toString() {
    return this.date.toString();
  }

  valueOf() {
    return this.date.getTime();
  }

  toDate() {
    return this.date;
  }
};
