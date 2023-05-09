// export const blockSetting = {
//     size: 10,
//     initialX: 50,
//     initialY: 20,
// }

// export const fieldSetting = {
//     width: 100,
//     height: 200,
// }

// export const speedSetting = {
//     initialSpeed: 1000,
//     acceleration: 100,
//     testSpeed: 10,
// }

// export const scoreSetting = {
//     addPoint: 10,
//     tetrisPoint: 100
// }

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
        initialX: 100,
        initialY: 40
    },
    field: {
        width: 200,
        height: 400
    },
    speed: {
        initialSpeed: 1000,
        additionalSpeed: 10
    },
    score: {
        normal: 10,
        event: 30,
        tetris: 50
    },
    tetriNames: ["i", "o", "t", "s", "z", "j", "l"]
}