import "jquery";
import FlipClock from "flipclock";

export class BlackFriday {
    constructor() {
        const date = new Date(2019, 10, 29);
        const el = document.querySelector('.js-countdown');
        const clock = new FlipClock(el, date, {
            face: 'DayCounter',
            countdown: true,
            language:'ru-ru'
        });
    }
}
