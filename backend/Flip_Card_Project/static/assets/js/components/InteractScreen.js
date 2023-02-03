import {cardFlip} from "./Card.js";

export const interactScreen = {
    template:`
        <card-flip></card-flip>
    `,
    components: {
      'card-flip' :cardFlip,
    },
}