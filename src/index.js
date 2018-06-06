module.exports = class dateMe {
  static now() {
    return this.from(new Date());
  }

  static from(date) {
    this.dateMe = new dateMe();

    if (typeof date === 'string' || typeof date === 'number') {
      this.dateMe.date = new Date(date);
    } else if (date instanceof Date) {
      this.dateMe.date = date;
    } else {
      this.dateMe.date = new Date(0);
      this.dateMe.date.setFullYear(date.year || this.dateMe.date.getFullYear());
      this.dateMe.date.setMonth(date.month || this.dateMe.date.getMonth());
      this.dateMe.date.setDate(date.day || this.dateMe.date.getDate());
      this.dateMe.date.setHours(date.hour || this.dateMe.date.getHours());
      this.dateMe.date.setMilliseconds(date.millisecond || this.dateMe.date.getMilliseconds());
      this.dateMe.date.setMinutes(date.minute || this.dateMe.date.getMinutes());
      this.dateMe.date.setSeconds(date.second || this.dateMe.date.getSeconds());
    }
    return this.dateMe;
  }

  toString() {
    return this.date.toString();
  }
}