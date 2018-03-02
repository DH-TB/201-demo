module.exports = {
    handleNoContentAndData:(res,data)=>{
        if (!data) {
            return res.sendStatus(204)
        }
        return res.send(data)
    },
    handleNotFoundAndNoContent:(res,data)=>{
        if (!data) {
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    },
};