import bcrypt from 'bcrypt';
import executeQuery, { processError } from "./pg";

const getUser = async({
    id
}) => {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}

const getUserByUsername = async({
    username
}) => {
    const query = `SELECT * FROM users WHERE name = ${username}`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}

const createUser = async ({
    user
}) => {
    const {
        fullname,
        username,
        password
    } = user;
    const hash = bcrypt.hashSync(password, 10);
    const query = `INSERT INTO users (fullname, username, password)
    VALUES('${fullname}', '${username}', '${hash}') returning *`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}

const updatePassword = async ({
    id,
    password
}) => {
    const hash = bcrypt.hashSync(password, 10);
    const query = `UPDATE users SET password=${hash} WHERE id=${id} returning *`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}

export {
    getUser,
    getUserByUsername,
    createUser,
    updatePassword
}