export const DEFAULT_HOME_STATE = {
    colors: {
        background: {
            calendar: {
                primary: "#734B45",
                secondary: "#D8EDF7",
            },
            global: "#393939"
        },
        text: {
            primary: "#E01818",
            secondary: "#F3A908",
        }
    },
    start: "2024-01-01",
    end: "2023-02-26",
    duration: 5
}

export type _HomeState = typeof DEFAULT_HOME_STATE;

export const HomeReducer = (state = DEFAULT_HOME_STATE, action: Action): _HomeState => {
    action.refresh(Math.random());

    switch (action.type) {
        case "SET_HOME_STATE_START":
            state.start = action.payload;
            return state;

        case "SET_HOME_STATE_END":
            state.end = action.payload;
            return state;

        case "SET_HOME_STATE_DURATION":
            state.duration = action.payload;
            return state;

        case "SET_BACKGROUND_COLOR_GLOBAL":
            state.colors.background.global = action.payload;
            return state;

        case "SET_BACKGROUND_COLOR_CALENDAR_PRIMARY":
            state.colors.background.calendar.primary = action.payload;
            return state;

        case "SET_BACKGROUND_COLOR_CALENDAR_SECONDARY":
            state.colors.background.calendar.secondary = action.payload;
            return state;

        case "SET_TEXT_COLOR_PRIMARY":
            state.colors.text.primary = action.payload;
            return state;

        case "SET_TEXT_COLOR_SECONDARY":
            state.colors.text.secondary = action.payload;
            return state;

        default:
            return state;
    }
}

