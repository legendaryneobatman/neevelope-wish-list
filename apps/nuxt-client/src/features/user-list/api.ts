import type {UsersResponse} from "~/shared/model";
import {API_URL} from "~/app/config/const";

const getOneUser = async (id: string | number): Promise<UsersResponse> => {
    const response = await fetch(`/user/${id}`)
    return response.json()
}

const getMany = async () => {
    const response = await fetch(`${API_URL}/user`)
    return response.json()
}

const deleteUser = async ({id}: {id: string | number}) => {
    return
}

export const userApi = {
    getOneUser,
    getMany,
    deleteUser
}
