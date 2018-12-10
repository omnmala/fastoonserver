const express = require('express');
const Series = require('../models/series');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const series = await Series.find().limit(20);
        res.json(series);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/curating', async (req, res, next) => {
    try {
        const series = await Series.find().limit(10).sort({createdAt:-1});
        res.json(series);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get('/:title', async (req, res, next) => {
    try {
        const series = await Series.find({ title: req.params.title });
        res.json(series);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    const series = new Series({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        thumnail: req.body.thumnail,
        postList: req.body.postList,
        tagList: req.body.tagList,
    });
    try {
        await series.save();
        console.log(series);
        res.status(201).json(series);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;