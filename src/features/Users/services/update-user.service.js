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

export {
    changeName,
    changeUsername,
    changeEmail,
    changePhone,
    changeWebsite,
    changeCompanyName,
    changeCompanyCatchPhrase,
};
