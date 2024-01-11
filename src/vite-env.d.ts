/// <reference types="vite/client" />

type HomeState = {
    colors: {
        background: {
            calendar: {
                primary: string,
                secondary: string,
            },
            global: string,
        },
        text: {
            primary: string,
            secondary: string,
        }
    },
    start: string,
    end: string,
    duration: number
}


type Action = { type: string, payload: any, refresh: Function };
