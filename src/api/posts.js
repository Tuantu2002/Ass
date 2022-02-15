import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};
