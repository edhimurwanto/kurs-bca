const resOk = (res, values) => {
    res.json({ data: values });
    res.end();
}

const resNotFound = (res, message) => {
    res.status(404).send({ message });
    res.end();
}

export { resOk, resNotFound };