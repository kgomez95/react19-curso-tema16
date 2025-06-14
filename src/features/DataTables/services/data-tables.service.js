import axios from "axios";

const fetchData = async (url, pagination, filter) => {
    const { page, rowsPerPage } = pagination;
    const { filterKey, filterValue } = filter;

    const filterUrl = filterValue ? `&${filterKey}=${filterValue}` : "";

    try {
        const response = await axios.get(
            `${url}?_page=${page + 1}&_limit=${rowsPerPage}${filterUrl}`
        );

        return {
            data: response.data,
            totalCount: response.headers.get("x-total-count"),
        };
    } catch (error) {
        return error;
    }
};

const transformData = (data, settings) => {
    return data.map((item) => {
        let newData = {};

        settings.map((key) => {
            if (key.length === 1) {
                newData[key[0]] = item[key[0]];
            } else if (key.length > 1) {
                let tempData = item[key[0]];
                let tempKey = key[0];

                for (let i = 1; i < key.length; i++) {
                    let subKey = key[i];
                    tempKey += `.${subKey}`;
                    tempData = tempData[subKey];
                }

                newData[tempKey] = tempData;
            }
        });

        return newData;
    });
};

export { fetchData, transformData };
