import {currencyTypes} from "../components/AdminMain/Options";

export const getCurrency = (currency: string): string => {
    let cur = ''
    currencyTypes.map(el => el.id === currency ? cur = el.currency : currency)
    return cur
}