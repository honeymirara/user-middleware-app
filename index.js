const app = require('./src/app');

const port = 3000;

app.listen(port, (req, res) => {
    console.log(`server is running on ${port}`)
});