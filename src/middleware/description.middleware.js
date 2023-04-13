exports.descriptionMiddleware = (req, res, next) => {
    req.model = ({
        description: 'Ini adalah tugas dari pertemuan 25 tentang Node.js',
        task: 'Membuat sebuah aplikasi web menggunakan express.js dan berisikan penulis dan deskripsinya'
    });
    next();
}