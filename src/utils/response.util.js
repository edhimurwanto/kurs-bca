const resOk = (res, values) => {
    res.send(values);
    res.end();
}

const resCreated = (res, values) => {
    res.status(201).send({...values})
    res.end();
}

const resNotFound = (res, message) => {
    res.status(404).send({ code: 404, message });
    res.end();
}

const resInternalServerError = (res, message) => {
    res.status(500).send({ code: 500, message: message || 'Internal Server Error' });
    res.end();
}

export { resOk, resNotFound, resInternalServerError, resCreated };