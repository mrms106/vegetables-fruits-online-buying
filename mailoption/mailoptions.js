const nodemailer=require("nodemailer");
const user=require("../modules/user");
const buy=require("../modules/buy")

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.mail, 
        pass: process.env.pass, 
    }
});


module.exports.mailtoowner=(req,res)=>{
    try{
        const newBuy= new buy(req.body.buy);
        const mailToowner = {
            from: process.env.mail,
            to: process.env.mail2, 
            subject: 'New product buy from vegetables and fruits',
            text: `A new buying has been made for your products. following is the details of customer:${newBuy}`,
        };
        transporter.sendMail(mailToowner, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ error: 'Internal server error occurred while sending email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
}




module.exports.mailtouser = (req, res) => {
    try {
        const usermail = req.user.email;
        const mailTouser = {
            from: process.env.mail, 
            to: usermail,
            subject: 'From vegetables and fruits order info',
            text: `Hello, your order of food and vegetables has been placed successfully. 
                   We will share other information in a few minutes. Thank you.`,
        };

        // Send email
        transporter.sendMail(mailTouser, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json({ error: 'Internal server error occurred while sending email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error occurred' });
    }
};