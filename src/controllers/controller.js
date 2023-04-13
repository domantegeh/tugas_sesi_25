exports.helloWorld = (req, res, next) => {
    console.log('Ini request: ', req);
    res.send({
        response: req.model
    });
};