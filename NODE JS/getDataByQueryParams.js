export const getDataByQueryParams = (data, queryParams) => {
    return data.filter((destination) => {
        for (let key in queryParams) {
            if (destination[key].toLowerCase() !== queryParams[key].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
    );
}
