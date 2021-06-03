{
    interface ClockConstructor {
        new(hour: number, minute: number): { hour: number, minute: number };
    }

    class Clock implements ClockConstructor {
        constructor(h: number, m: number) { }
    }

    const clock = new Clock(1, 1)
}
