import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_HOME_STATE } from "../home/hooks/HomeReducer";
import { ChangeDay, CompareDate, DayDifference, MONTHS } from "../../utils";

export function Result() {
    const [params] = useSearchParams();
    const [settings] = useState<HomeState>(
        JSON.parse(atob(params.get("data") || "{}")) || DEFAULT_HOME_STATE
    );

    const [currentDate, setCurrentDate] = useState(settings.start);
    const [lastFlip, setLastFlip] = useState(0);
    // const [date, setDate] = useState(currentDate.split("-")[2]);
    // const [month, setMonth] = useState(parseInt(currentDate.split("-")[1]));
    // const [year, setYear] = useState(currentDate.split("-")[0]);

    const date = currentDate.split("-")[2];
    const month = parseInt(currentDate.split("-")[1]);
    const year = currentDate.split("-")[0];

    useEffect(() => {
        const stop = CompareDate(currentDate, settings.end);
        const decrease = CompareDate(settings.start, settings.end) >= 0;

        if ((decrease && stop <= 0) || (!decrease && stop >= 0)) return;

        const newDate = ChangeDay(currentDate, !decrease);

        setCurrentDate(newDate);
    }, []);

    useEffect(() => {
        const innerCal = document.getElementById("innerCalendar");

        if (!innerCal) return;

        const intervalTime =
            (settings.duration / DayDifference(settings.start, settings.end)) *
            1000;

        setTimeout(() => {
            const stop = CompareDate(currentDate, settings.end);
            const decrease = CompareDate(settings.start, settings.end) >= 0;

            if ((decrease && stop <= 0) || (!decrease && stop >= 0)) {
                innerCal.classList.remove("innerFlip");
                return;
            }

            const newDate = ChangeDay(currentDate, !decrease);

            setCurrentDate(newDate);

            if (Date.now() - lastFlip > 600) {
                if (innerCal.classList.contains("innerFlip")) {
                    innerCal.classList.remove("innerFlip");
                } else {
                    innerCal.classList.add("innerFlip");
                }

                const t = settings.colors.background.calendar.primary;
                settings.colors.background.calendar.primary =
                    settings.colors.background.calendar.secondary;
                settings.colors.background.calendar.secondary = t;

                const t2 = settings.colors.text.primary;
                settings.colors.text.primary = settings.colors.text.secondary;
                settings.colors.text.secondary = t2;

                setLastFlip(Date.now());
            }
        }, intervalTime);
    }, [currentDate]);

    return (
        <div
            className="container flex"
            style={{
                backgroundColor: settings.colors.background.global,
            }}
        >
            <div
                className="calendar superCenter"
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
                    id="innerCalendar"
                    className="calendarContainer"
                    style={{
                        backgroundColor:
                            settings.colors.background.calendar.secondary,
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
        </div>
    );
}
