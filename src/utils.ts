export function queryParamToInt(a: unknown) {
    if (!a || typeof(a) !== "string" || !Number.isInteger(+a)) {
        return NaN;
    }
    return Number.parseInt(a);
}
