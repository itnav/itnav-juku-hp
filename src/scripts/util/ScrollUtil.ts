export default class ScrollUtil {
    private constructor() {}

    /**
     * jump
     * @param element
     * @param y
     */
    public static jump(element: HTMLElement, y: number) {
        element.scrollTo(0, y);
    }

    /**
     * animation ease
     * @param element
     * @param y
     */
    public static animate(element: HTMLElement, y: number) {
        const tick = 15;

        const initialHeight: number = element.scrollTop;
        const scrollHeight: number = y - element.scrollTop;
        const scrollStep: number = Math.PI / (scrollHeight / tick);
        const cosParam: number = scrollHeight / 2;

        let scrollCount: number = 0;
        let scrollY: number;

        const scrollInterval = setInterval(() => {
            if (Math.abs(scrollCount * scrollStep) < Math.PI) {
                scrollY = cosParam + cosParam * (Math.cos(++scrollCount * scrollStep) * -1);
                element.scrollTo(0, initialHeight + scrollY);
            } else {
                clearInterval(scrollInterval);
            };
        }, tick);
    }
}
