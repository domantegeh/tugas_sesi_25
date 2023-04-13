exports.authorMiddleware = (req, res, next) => {
    req.model = ({
        nama: 'Ida Nyoman Tegeh Adnyana',
        kelompok: '1',
        tugas: 'Express.js'
    });
    next();
}