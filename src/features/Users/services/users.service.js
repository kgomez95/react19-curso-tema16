import axios from "axios";
import userBasicDataModel from "../models/user-basic-data.model";
import userCompanyDataModel from "../models/user-company-data.model";
import userAddressDataModel from "../models/user-address-data.model";
import userModel from "../models/user.model";

const url = "https://jsonplaceholder.typicode.com/users";

const fetchUser = async (idUser) => {
    try {
        const response = await axios.get(`${url}/${idUser}`);

        return response.data;
    } catch (error) {
        return error;
    }
};

const transformBasicData = (user) => {
    if (!user) return userBasicDataModel;

    return [
        [
            { name: "Nombre", value: user.name },
            { name: "Usuario", value: user.username },
            { name: "Correo electrónico", value: user.email },
        ],
        [
            { name: "Teléfono", value: user.phone },
            { name: "Web", value: user.website },
        ],
    ];
};

const transformCompanyData = (user) => {
    if (!user || !user.company) return userCompanyDataModel;

    return [
        [
            { name: "Nombre", value: user.company.name },
            { name: "Eslogan", value: user.company.catchPhrase },
        ],
    ];
};

const transformAddressData = (user) => {
    if (!user || !user.address) return userAddressDataModel;

    return [
        [
            { name: "Calle", value: user.address.street },
            { name: "Suite", value: user.address.suite },
            { name: "Ciudad", value: user.address.city },
            { name: "Código postal", value: user.address.zipcode },
        ],
    ];
};

const transformCoordinateData = (user) => {
    if (!user || !user.address || !user.address.geo)
        return userModel.address.geo;

    return {
        lat: user.address.geo.lat,
        lng: user.address.geo.lng,
    };
};

export {
    fetchUser,
    transformBasicData,
    transformCompanyData,
    transformAddressData,
    transformCoordinateData,
};
