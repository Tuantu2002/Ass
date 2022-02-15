import instance from "./instance";

export const getAll = () => {
    const url = "/posts";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};

export const add = () => {
    const url = `/posts`;
    return instance.post(url);
};

export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};

