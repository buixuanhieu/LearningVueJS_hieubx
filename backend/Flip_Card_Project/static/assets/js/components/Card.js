export const cardFlip = {
    template: `
        <div class="card">
            <div class="card__inner" :class=" {'is-flipped' : isFlipped} " @click="onToggleFlipCard">
                <div class="card__face card__face--front">
                    <div class="card__content">front</div>
                </div>
                <div class="card__face card__face--back">
                    <div class="card__content">back</div>
                </div>
            </div>
        </div>
    `,
    data() {
      return{
          isFlipped: false,
      }
    },
    methods: {
        onToggleFlipCard() {
            this.isFlipped = !this.isFlipped;
        }
    }
}