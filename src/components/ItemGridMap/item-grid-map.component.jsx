import { Box, Divider, Grid } from "@mui/material";
import { memo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Item from "../../utils/mui-styles/item.styled";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
    iconSize: [23, 35],
    shadowSize: [0, 0],
});

const ItemGridMap = memo(({ title, coordinates, size }) => {
    if (!coordinates || !coordinates.lat || !coordinates.lng) {
        return <></>;
    }

    const location = [coordinates.lat, coordinates.lng];

    return (
        <>
            <Grid size={size}>
                <Item style={{ height: "400px" }}>
                    <Box
                        sx={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingLeft: "2.5px",
                        }}
                    >
                        {title}
                    </Box>
                    <Divider />
                    <Grid
                        container
                        spacing={1}
                        style={{
                            height: "90%",
                            width: "100%",
                            paddingTop: "5px",
                        }}
                    >
                        <Grid
                            size={{
                                xs: 12,
                                md: 12,
                                lg: 12,
                            }}
                        >
                            <MapContainer
                                center={location}
                                zoom={2}
                                style={{ height: "100%" }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker icon={icon} position={location}>
                                    <Popup>
                                        Coordenadas: {location[0]},{" "}
                                        {location[1]}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </Grid>
                    </Grid>
                </Item>
            </Grid>
        </>
    );
});

export default ItemGridMap;
