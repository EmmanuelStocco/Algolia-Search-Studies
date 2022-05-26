const schedule = require('node-schedule');

//const data = new Date(2022, 4, 16, 00, 23)
//execução recorrente

schedule.scheduleJob('*/2 * * * * *', () => {
    console.log('estou aqui');
} )
 