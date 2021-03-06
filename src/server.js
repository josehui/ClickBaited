const express = require('express');
// const path = require('path');
const clickbait = require('./func/clickbait');

// ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req, res, next) => {
    if (req.originalUrl.includes('favicon.ico')) {
        res.status(204).end();
    }
    next();
};


// fn to create express server
const create = async () => {

    // server
    const app = express();

    // configure nonFeature
    app.use(ignoreFavicon);
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())
    app.use(express.static('public'));

    // root route - serve static file
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/client.html'));
    // });

    app.get('/clickbait', (req, res) => {
        const clickbaitTitle = clickbait();
        res.send(clickbaitTitle);
    });

    app.post('/submit', (req, res) => {
        console.log("received submission");
        console.log(req.body.title);
        res.json({ status: 'Clickbait saved' });
    });

    // Error handler
    /* eslint-disable no-unused-vars */
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    return app;
};


module.exports = {
    create
};
