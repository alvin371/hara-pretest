export const notMandatoryParams = (args, params) => {
    return args !== "" ? params : {};
};

// Params value from react-select multiple picklist
/**
 * Helpers for params get filter data from react-select
 *
 * react-select multi-select
 */
export const paramsMultiSelect = (data, params) => {
    const toFilter = data.map((item) => `&filter[${params}]=${item.value}`);
    return data ? toFilter.join("") : "";
};

/**
 * Helpers for params get filter data from react-select
 *
 *
 */
export const paramsSelect = (data, params) => {
    return data ? { [`filter[${params}]`]: data.value } : {};
};
