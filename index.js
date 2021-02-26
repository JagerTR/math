module.exports = {
    sayi1: 0,
    sayi2: 0,
    topla: function () {
      return this.sayi1 + this.sayi2;
    },
    cikar: function (s1, s2) {
      return this.sayi1 - this.sayi2;
    },
    carp: function (s1, s2) {
      return this.sayi1 * this.sayi2;
    },
    bol: function (s1, s2) {
      return this.sayi1 / this.sayi2;
    }
  }