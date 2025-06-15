import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser, transformAddressData, transformBasicData, transformCompanyData, transformCoordinateData } from "../services/users.service";
import userModel from "../models/user.model";
import { Grid } from "@mui/material";
import ItemGridDetails from "../../../components/ItemGridDetails/item-grid-details.component";
import userBasicDataModel from "../models/user-basic-data.model";
import userCompanyDataModel from "../models/user-company-data.model";
import userAddressDataModel from "../models/user-address-data.model";
import ItemGridMap from "../../../components/ItemGridMap/item-grid-map.component";

const Details = () => {
    const { idUsuario } = useParams();
    const [user, setUser] = useState(userModel);
    const [basicData, setBasicData] = useState(userBasicDataModel);
    const [companyData, setCompanyData] = useState(userCompanyDataModel);
    const [addressData, setAddressData] = useState(userAddressDataModel);
    const [coordinatesData, setCoordinatesData] = useState(userModel.address.geo);

    const getUser = async () => {
        // Obtenemos los datos del usuario.
        const data = await fetchUser(idUsuario);

        // Guardamos el usuario.
        setUser(data);

        // Obtenemos los datos básicos del usuario y los guardamos.
        setBasicData(transformBasicData(data));

        // Obtenemos los datos de la compañía del usuario y los guardamos.
        setCompanyData(transformCompanyData(data));

        // Obtenemos los datos de la dirección del usuario y los guardamos.
        setAddressData(transformAddressData(data));

        // Obtenemos los datos de la geolocalización del usuario y los guardamos.
        setCoordinatesData(transformCoordinateData(data));
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <ItemGridDetails title="Datos básicos" values={basicData} size={{ xs: 12, md: 12, lg: 7 }} />
                <ItemGridDetails title="Datos de la compañía" values={companyData} size={{ xs: 12, md: 12, lg: 5 }} />
                <ItemGridDetails title="Dirección" values={addressData} size={{ xs: 12, md: 12, lg: 7 }} />
                <ItemGridMap title="Coordenadas" coordinates={coordinatesData} size={{ xs: 12, md: 12, lg: 5 }} />
            </Grid>
        </div>
    );
};

export default Details;
