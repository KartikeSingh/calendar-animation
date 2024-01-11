import { useReducer, useState } from "react";
import { DEFAULT_HOME_STATE, HomeReducer } from "./hooks/HomeReducer";
import { ChromePicker } from "react-color";
import { MONTHS } from "../../utils";

export function Home() {
    const [settings, dispatch] = useReducer(HomeReducer, DEFAULT_HOME_STATE);
    const [_, refresh] = useState(0);

    const date = settings.start.split("-")[2];
    const month = parseInt(settings.start.split("-")[1]);
    const year = settings.start.split("-")[0];

    return (
        <div
            className="container"
            style={{
                backgroundColor: settings.colors.background.global,
            }}
        >
            <center>
                <h1
                    className="niceHeading"
                    style={{ color: settings.colors.text.primary }}
                >
                    Clandy Animations
                </h1>
            </center>
            {/* <div className="configurations">
                <div className="row">
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Start
                        </p>
                        <input
                            type="date"
                            value={settings.start}
                            onChange={(e) =>
                                dispatch({
                                    payload: e.currentTarget.value,
                                    type: "SET_HOME_STATE_START",
                                    refresh,
                                })
                            }
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            End
                        </p>
                        <input
                            type="date"
                            value={settings.end}
                            onChange={(e) =>
                                dispatch({
                                    payload: e.currentTarget.value,
                                    type: "SET_HOME_STATE_END",
                                    refresh,
                                })
                            }
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Duration
                        </p>
                        <input
                            type="text"
                            inputMode="numeric"
                            value={settings.duration}
                            onChange={(e) =>
                                dispatch({
                                    payload:
                                        parseInt(e.currentTarget.value) || 5,
                                    type: "SET_HOME_STATE_DURATION",
                                    refresh,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Screen Background
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.background.global}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_GLOBAL",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Calendar Primary BG
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.background.calendar.primary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_CALENDAR_PRIMARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Calendar Secondary BG
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={
                                settings.colors.background.calendar.secondary
                            }
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_CALENDAR_SECONDARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Text Primary
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.text.primary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_TEXT_COLOR_PRIMARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Text Secondary
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.text.secondary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_TEXT_COLOR_SECONDARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                </div>
            </div> */}
            <div className="settingContainer">
                <div className="configurations">
                    <div className="row">
                        <div>
                            <p
                                style={{
                                    color: settings.colors.text.secondary,
                                }}
                            >
                                Start
                            </p>
                            <input
                                type="date"
                                value={settings.start}
                                onChange={(e) =>
                                    dispatch({
                                        payload: e.currentTarget.value,
                                        type: "SET_HOME_STATE_START",
                                        refresh,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <p
                                style={{
                                    color: settings.colors.text.secondary,
                                }}
                            >
                                End
                            </p>
                            <input
                                type="date"
                                value={settings.end}
                                onChange={(e) =>
                                    dispatch({
                                        payload: e.currentTarget.value,
                                        type: "SET_HOME_STATE_END",
                                        refresh,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <p
                                style={{
                                    color: settings.colors.text.secondary,
                                }}
                            >
                                Duration
                            </p>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={settings.duration}
                                onChange={(e) =>
                                    dispatch({
                                        payload:
                                            parseInt(e.currentTarget.value) ||
                                            5,
                                        type: "SET_HOME_STATE_DURATION",
                                        refresh,
                                    })
                                }
                            />
                        </div>
                    </div>
                    
                    <div className="row">
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Screen Background
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.background.global}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_GLOBAL",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Calendar Primary BG
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.background.calendar.primary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_CALENDAR_PRIMARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    </div>
                    <div className="row">
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Calendar Secondary BG
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={
                                settings.colors.background.calendar.secondary
                            }
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_BACKGROUND_COLOR_CALENDAR_SECONDARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Text Primary
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.text.primary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_TEXT_COLOR_PRIMARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                    </div>
                    <div>
                        <p style={{ color: settings.colors.text.secondary }}>
                            Text Secondary
                        </p>
                        <ChromePicker
                            className="colorPicker"
                            color={settings.colors.text.secondary}
                            onChange={(color) =>
                                dispatch({
                                    payload: color.hex,
                                    type: "SET_TEXT_COLOR_SECONDARY",
                                    refresh,
                                })
                            }
                            disableAlpha
                        />
                    </div>
                </div>
                <div>
                    <div
                        className="calendar"
                        style={{
                            backgroundColor:
                                settings.colors.background.calendar.primary,
                        }}
                    >
                        <div className="secondary">
                            <p
                                style={{
                                    color: settings.colors.text.secondary,
                                }}
                            >
                                {MONTHS[month - 1]}, {year}
                            </p>
                        </div>
                        <div
                            className="calendarContainer"
                            style={{
                                backgroundColor:
                                    settings.colors.background.calendar
                                        .secondary,
                            }}
                        >
                            <div className="primary">
                                <p
                                    style={{
                                        color: settings.colors.text.primary,
                                    }}
                                >
                                    {date}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="startButton"
                        onClick={() => {
                            window.location.href = `/result?data=${btoa(
                                JSON.stringify(settings)
                            )}`;
                        }}
                    >
                        Start
                    </div>
                </div>
            </div>
        </div>
    );
}
