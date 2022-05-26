const nodeSchedule = require('node-schedule');


//Agendando execução de uma atividade em um horario exato
const data = new Date(2022, 4, 16, 00, 23) //data hora min - vai até milisegs
const job = nodeSchedule.scheduleJob(data, ()=>{
    console.log('olá mundo');
})


console.log(job.nextInvocation());