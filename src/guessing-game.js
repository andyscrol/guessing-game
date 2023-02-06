class GuessingGame {
    constructor() {}
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
      guess() {
        this.median = Math.round((this.min + this.max) / 2);
        return this.median;
      }
      lower() {
        this.max = this.median;
      }
      greater() {
        this.min = this.median;
      }
}

module.exports = GuessingGame;
