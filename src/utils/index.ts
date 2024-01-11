export const MONTHS = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]

export const ONE_DAY = 24 * 3600 * 1000;

export const DayDifference = (date1: string, date2: string) => {
    const dateObject1 = new Date(AmericaniseDate(date1));
    const dateObject2 = new Date(AmericaniseDate(date2));

    return Math.floor(
        Math.abs(dateObject1.getTime() - dateObject2.getTime()) / ONE_DAY
    ) || 1
}

export const ChangeDay = (rawDate: string, increase = false) => {
    const dateObject = new Date(rawDate);

    dateObject.setDate(dateObject.getDate() - (increase ? -1 : 1));

    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();

    return `${dateObject.getFullYear()}-${month < 10 ? "0" : ""}${month}-${date < 10 ? "0" : ""}${date}`;
}

export const AmericaniseDate = (invertedDate: string) => {
    const raw = invertedDate.split("-");
    return `${raw[1]}-${raw[2]}-${raw[0]}`;
}

export const CompareDate = (date1: string, date2: string) => {
    const dateObject1 = new Date(AmericaniseDate(date1));
    const dateObject2 = new Date(AmericaniseDate(date2));

    return dateObject1.getTime() - dateObject2.getTime();
}
