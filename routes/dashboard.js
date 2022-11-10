const express = require('express');
const { Module } = require('module');
const { dashboardView } = require('../controllers/dashboardController');
const router = express.Router();


router.get('/dashboard',dashboardView)

module.exports= router;