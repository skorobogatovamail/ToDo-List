import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

var taskList = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index.ejs', {taskList: taskList});
});

// on post add net task to task list
app.post('/', (req, res) => {
    // console.log()
    var newTask = req.body.newTask;
    if (newTask){
        taskList.push(newTask);
    };
    res.render('index.ejs', {taskList: taskList});
});

app.post('/delete', (req, res) => {
    var keys = Object.keys(req.body);
    var taskToDelete = parseInt(keys[0].slice(-1));
    console.log(taskToDelete);
    taskList.splice(taskToDelete, 1);
    res.redirect('/');
});


app.listen(port);