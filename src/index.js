module.exports = class DateMe {
  static now() {
    return this.from(new Date());
  }

  static from(date) {
    this.dateMe = new DateMe();

    if (typeof date === 'string' || typeof date === 'number') {
      this.dateMe.date = new Date(date);
    } else if (date instanceof Date) {
      this.dateMe.date = date;
    } else {
      this.dateMe.date = this.parse(date);
    }
    return this.dateMe;
  }

  static parse(date) {
    if (date instanceof Date) {
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
