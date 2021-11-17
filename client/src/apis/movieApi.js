import axiosClient from "./axiosClient";

const movieApi = {
    getAll: function (params) {
        return axiosClient.get({params});
    }
}
export default movieApi;