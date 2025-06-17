const changeName = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            name: event.target.value,
        }));
    };
};

const changeUsername = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            username: event.target.value,
        }));
    };
};

const changeEmail = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            email: event.target.value,
        }));
    };
};

const changePhone = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            phone: event.target.value,
        }));
    };
};

const changeWebsite = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            website: event.target.value,
        }));
    };
};

const changeCompanyName = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            company: {
                ...x.company,
                name: event.target.value,
            },
        }));
    };
};

const changeCompanyCatchPhrase = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            company: {
                ...x.company,
                catchPhrase: event.target.value,
            },
        }));
    };
};

const changeAddressStreet = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                street: event.target.value,
            },
        }));
    };
};

const changeAddressSuite = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                suite: event.target.value,
            },
        }));
    };
};

const changeAddressCity = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                city: event.target.value,
            },
        }));
    };
};

const changeAddressZipcode = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                zipcode: event.target.value,
            },
        }));
    };
};

const changeAddressGeoLat = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                geo: {
                    ...x.address.geo,
                    lat: event.target.value,
                },
            },
        }));
    };
};

const changeAddressGeoLng = (setUser) => {
    return (event) => {
        setUser((x) => ({
            ...x,
            address: {
                ...x.address,
                geo: {
                    ...x.address.geo,
                    lng: event.target.value,
                },
            },
        }));
    };
};

const validateUser = (user) => {
    let errors = [];

    if (!user || !user.company || !user.address) {
        errors.push("Debes proporcionar los datos completos de un usuario.");
        return errors;
    }

    if (!user.name) errors.push(`El campo "Nombre" es obligatorio.`);
    if (!user.username) errors.push(`El campo "Nombre de usuario" es obligatorio.`);
    if (!user.email) errors.push(`El campo "Correo electrónico" es obligatorio.`);
    if (!user.company.name) errors.push(`El campo "Nombre" de la compañía es obligatorio.`);
    if (!user.address.street) errors.push(`El campo "Calle" de la dirección es obligatorio.`);
    if (!user.address.city) errors.push(`El campo "Ciudad" de la dirección es obligatorio.`);
    if (!user.address.zipcode) errors.push(`El campo "Código postal" de la dirección es obligatorio.`);

    return errors;
};

export {
    changeName,
    changeUsername,
    changeEmail,
    changePhone,
    changeWebsite,
    changeCompanyName,
    changeCompanyCatchPhrase,
    changeAddressStreet,
    changeAddressSuite,
    changeAddressCity,
    changeAddressZipcode,
    changeAddressGeoLat,
    changeAddressGeoLng,
    validateUser,
};
