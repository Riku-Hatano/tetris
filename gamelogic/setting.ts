interface Setting {
    block: {
        size: number,
        initialX: number,
        initialY: number
    },
    field: {
        width: number,
        height: number
    },
    speed: {
        initialSpeed: number,
        additionalSpeed: number,
    },
    score: {
        normal: number,
        event: number,
        tetris: number
    },
    tetriNames: string[]
}

export const Setting: Setting = {
    block: {
        size: 20,
        initialX: 100, //should be size * 5
        initialY: 40 //should be size * 2
    },
    field: {
        width: 200, //should be size * 10
        height: 400 //should be size * 20
    },
    speed: {
        initialSpeed: 1000,
        additionalSpeed: 10
    },
    score: {
        normal: 100,
        event: 30,
        tetris: 1000
    },
    tetriNames: ["i", "o", "t", "s", "z", "j", "l"]
}