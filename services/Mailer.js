const sendgrid = require('sendgrid');
const requireCredits = require('../middlewares/requireCredits');
const helper = sendgrid.mail;
const keys = require('../config/keys');
const recipientSchema = require('../models/Recipient');

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content){
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_Email = new helper.Email('gabrielarce3@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html',content);
        this.recipients = this.formatAddresses(recipients);
        //addContent is a sendgrid function
        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }
    //sendgrid function
    formatAddresses(recipients){
        return recipients.map(({email}) =>{
            return new helper.Email(email);
        });
    }
    //helper function as per sendgrid requirement
    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings;
        const clickTracking = new helper.ClickTracking(true,true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }
    //helper function
    addRecipients(){
        const personalize = new helper.Personalization;

        this.recipients.forEach(recipient =>{
            personalize.addTo(recipient);
        });
        
        this.addPersonalization(personalize);
    }
    // async function to send Mailer object to sendgrid
    async send(){
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        
        const response = this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;