import executeQuery, { processError } from "./pg";

const getStock = async ({
    id
}) => {
    const query = `SELECT * FROM sstocks WHERE id = ${id}`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}
const getStocks = async ({
    name
}) => {
    const query = `SELECT * FROM stocks WHERE name ='${name}'`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows;
}

const addItem = async ({
    item
}) => {
    const {
        name,
        quantity,
        description
    } = item;
    const query = `INSERT INTO stocks (name, quantity, description)
    VALUES('${name}', ${quantity}, '${description}') returning *`;
    const [result, hasError] = await executeQuery(query);
    processError(result, hasError);
    return result.rows[0];
}

const updateItemQuantity = async ({
    id,
    quantity
}) => {
    const query = `UPDATE stocks SET quantity=${quantity} WHERE id=${id} returning *`;
    const [result, hasError] = await executeQuery(query);
   processError(result, hasError);
    return result.rows[0];
}

export {
    getStock,
    getStocks,
    addItem,
    updateItemQuantity
}