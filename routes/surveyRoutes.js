const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const recipientSchema = require('../models/Recipient');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');

const Survey = mongoose.model('surveys');


module.exports = app => {
    app.post('/api/survey', requireLogin, requireCredits, (req, res)=>{
        const {title, subject, body, recipients} = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email=>({email: email.trim()})),
            _user: req.user.id,
            dateSent: Date.now(),
        });
        //send the email here
        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();
    });
};