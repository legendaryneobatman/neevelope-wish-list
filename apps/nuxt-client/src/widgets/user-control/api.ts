import {API_URL} from "~/app/config/const";

const editUser = async ({id, username}: {id: string | number, username: string}) => {
    const body = JSON.stringify({username: username});
    console.log(body);
    return fetch(`${API_URL}/user/${id}`, {
        body,
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export const userApi = {
    editUser
}
