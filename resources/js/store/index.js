import { atom } from "recoil";

const modalgejala = atom({
    key: "modalgejala",
    default: false,
});


const modalpenyakit = atom({
    key: "modalpenyakit",
    default: false,
});


const modalaturan = atom({
    key: "modalaturan",
    default: false,
});


const modalclient = atom({
    key: "modalclient",
    default: false,
});


const modaladmin = atom({
    key: "modaladmin",
    default: false,
});

const editPenyakit = atom({
    key: "editPenyakit",
    default: null,
});

const editGejala = atom({
    key: "editGejala",
    default: null,
});

const editAdmin = atom({
    key: "editAdmin",
    default: null,
});

const editClient = atom({
    key: "editClient",
    default: null,
});
const editAturan = atom({
    key: "editAturan",
    default: null,
});

const lihatPenyakit = atom({
    key: "lihatPenyakit",
    default: null,
});

const lihatGejala = atom({
    key: "lihatGejala",
    default: null,
});

const lihatAturan = atom({
    key: "lihatAturan",
    default: null,
});

const lihatAdmin = atom({
    key: "lihatAdmin",
    default: null,
});

const lihatClient = atom({
    key: "lihatClient",
    default: null,
});

const sidebar = atom({
    key: "sidebar",
    default: true,
});

export { sidebar,modaladmin, modalgejala, modalpenyakit, modalaturan, modalclient, editPenyakit, editGejala, editAdmin, editClient,editAturan, lihatPenyakit, lihatGejala, lihatAturan, lihatAdmin, lihatClient};

