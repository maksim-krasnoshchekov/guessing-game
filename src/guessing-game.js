class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.num = this.max - this.min;
        this.num = Math.floor(this.num / 2);
        this.num = this.max - this.num;
        return this.num;
    }

    lower() {
        this.max = this.num;
    }

    greater() {
        this.min = this.num;
    }
}

module.exports = GuessingGame;