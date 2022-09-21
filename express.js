const express = require('express');
const ExpressError = require('./expressError');
const { average, midpoint, mostFrequent } = require('./helpers')

const app = express();

// http://localhost:3000/mean?nums=1,3,5
app.get('/mean', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (typeof nums === 'undefined') throw new ExpressError(`nums are required!`, 404);

        const stringArr = nums.split(",");
        for (let num of stringArr) {
            if (isNaN(num)) throw new ExpressError(`${num} is not a number!`, 404);
        }
        const numArr = stringArr.map(Number);

        const result = {
            operation: "mean",
            value: average(numArr)
        }
        return res.json(result)
    } catch (e) {
        next(e);
    }
})

//http://localhost:3000/median?nums=1,7,9,8,5,3
app.get('/median', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (typeof nums === 'undefined') throw new ExpressError(`nums are required!`, 404);

        const stringArr = nums.split(",");
        for (let num of stringArr) {
            if (isNaN(num)) throw new ExpressError(`${num} is not a number!`, 404);
        }
        const numArr = stringArr.map(Number);

        const result = {
            operation: "median",
            value: midpoint(numArr)
        }
        return res.json(result)
    } catch (e) {
        next(e);
    }
})

//http://localhost:3000/mode?nums=-1,2,3,4,-1,2,4,-1,-1,3
app.get('/mode', (req, res, next) => {
    try {
        const { nums } = req.query;
        if (typeof nums === 'undefined') throw new ExpressError(`nums are required!`, 404);

        const stringArr = nums.split(",");
        for (let num of stringArr) {
            if (isNaN(num)) throw new ExpressError(`${num} is not a number!`, 404);
        }
        const numArr = stringArr.map(Number);

        const result = {
            operation: "median",
            value: mostFrequent(numArr)
        }
        return res.json(result)

    } catch (e) {
        next(e);
    }
})

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;
    return res.status(status).json({
        error: { message, status }
    })
})


app.listen(3000, function () {
    console.log("Express app on port 3000")
})