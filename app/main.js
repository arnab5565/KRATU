
const { app, BrowserWindow, dialog, nativeTheme, session } = require('electron');
const { fs } = require('fs');


let mainWindow = null;
//const cookie = { url: 'https://www.github.com/', name: 'arnab' }


app.on('ready', () => {
    console.log('Hello from Electron.');
    mainWindow = new BrowserWindow({
        width: 1500,
        height: 800,
        resizable: false,
        icon: __dirname + '/kratu_icon.jpg'

    });

    nativeTheme.themeSource = 'dark';
    //mainWindow.loadURL("http://amcorner.c1.biz");
    /**    mainWindow.once('ready-to-show', () => {
            getFileFromuser();
    
        });
    
     */
    mainWindow.webContents.loadFile('index.html');
    setTimeout(() => {
        mainWindow.webContents.loadFile('kratu.html');
    }, 3000);

});
/**
 *
const getFileFromuser=()=>{
    const files=dialog.showOpenDialog({
        properties:['openFile'],
        filters:[
            {name:'Html',extensions:'html'},
            {name:'cascading style sheet',extensions:'css'}
        ]
    });
    if(!files){return;}
    const file=files[0];

    fs.readFile(file,(err,data)=>{
        if(err) throw err;
        console.log(data);
    });
};

 */