const app = require('./config/server');

require('./routes/news')(app);

//Empezar servidor

app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});