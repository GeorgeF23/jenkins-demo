import { queryParamToInt } from "../../src/utils";

describe("Test queryParamToInt method", () => {
    test ("undefined returns NaN", () => {
        const input = undefined;

        const result = queryParamToInt(input);

        expect(result).toEqual(NaN);
    });

    test ("string returns NaN", () => {
        const input = "str";

        const result = queryParamToInt(input);

        expect(result).toEqual(NaN);
    });

    test ("float returns NaN", () => {
        const input = "1.23";

        const result = queryParamToInt(input);

        expect(result).toEqual(NaN);
    });

    test ("valid integer returns the number", () => {
        const input = "23";

        const result = queryParamToInt(input);

        expect(result).toEqual(23);
    });
});