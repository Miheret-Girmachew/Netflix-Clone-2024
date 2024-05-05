import axios from "axios";

const instance =axios.create({
    baseURL: "https://api.themoviewdb.org/3",
});

export default instance;