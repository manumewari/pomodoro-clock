
const TimerState = {
    NOTSTARTED: 0,
    START: 1,
    PAUSE: 2,
    RESET: 3
}

const TimerType = {
    SESSION: 1,
    BREAK: 2
}

const TimerLabel = {
    SESSION: "Session",
    BREAK: "Break"
}

const TimerStateLabel = {
    START: "START",
    PAUSE: "PAUSE",
    RESET: "RESET"
}

const TimerConstants = {
    sessionLength: 15,
    breakLength: 5,
    longBreakNumber: 15,
    longBreakLength: 3
}

const MAX_SESSION_TIME = 20;
const MIN_SESSION_TIME = 1;

const MAX_BREAK_TIME = 15;
const MIN_BREAK_TIME = 1;


export {TimerState, TimerType, TimerLabel, TimerStateLabel, TimerConstants, MAX_SESSION_TIME, MIN_SESSION_TIME, MAX_BREAK_TIME, MIN_BREAK_TIME};
