const express = require('express');
const app = express();
const path = require('path');
var session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const moment = require('moment');

const http = require('http');
const socketio = require('socket.io');
//chat Model 
// const Chat = require('./models/chat');
//server Socket
const server = http.createServer(app);
const io = socketio(server);
const packageMessenge = (name,text)=>{
    const date = new Date().getTime();
    const message = { 
        name, 
        text,
        createAt : moment(date).format('LT')
    }
    return message;
}
var listUser = [];
io.on('connection', (socket) => {
    socket.on('newUserJoin',(data =>{
        listUser.push(data);
        socket.emit(
            'otherMessage',
            packageMessenge('Admin','Welcome to our Hood 😎')
            );
        socket.broadcast.emit(
            'otherMessage',
            packageMessenge('Admin', `${data} has joined 😍`)
            );
        io.sockets.emit('updateListUser',listUser);
        
    }))
   
    socket.on('sendMessage', (data)=>{
        console.log(data);
        io.sockets.emit(
            'otherMessage',
            packageMessenge(data.name, data.message, data.createAt)
            );

            console.log(
                packageMessenge(data.name, data.message,data.createAt)
                
            )
        // io.sockets.emit('messenge', {user:user,text:messenge});
        // console.log(roomList);
        // console.log(user);
        // console.log(messenge);
        // callback();
        
    })
    socket.on('disconnect', (name) => {
        listUser.splice(name,1);
        console.log('Disconnected');
    });
  });


//database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/web-tieng-anh',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.connection
.once("open", ()=> console.log("Connected !"))
.on("error", error =>{
   console.log("Your Error :", error); 
});




// Static folder
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//stuff
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser('keyboard cat'));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
    }
));
app.use(flash());
app.use(function(req, res, next) {
    res.locals.messages = req.flash();
    next();
});

//Handle CORS 
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); //* : give access to any client 
    res.header('Access-Control-Allow-Headers','*') ;// kind of header to accept
    if(req.method === 'OPTION'){
        res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});
// Express Mess Middleware

// Express Validator 

//View Engine Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views')); //public path


//home
app.get('/', function(req,res){
    res.render('home');
});

// Use Routes
const userRoute = require('./routes/user.route');
app.use('/users', userRoute);

//admin Routes
const adminRoute = require('./routes/adm.route');
app.use('/admin', adminRoute);

const port = 9000;
server.listen(port, ()=>{
    console.log("Server start at port :",port );
})