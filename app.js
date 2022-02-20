
//  const { require } = require('yargs')
const yargs = require('yargs')
const grading = require('./grading')
yargs.command({
    command:'add',
    describe:'Add note',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'This is dgree description in add command',
            demandOption:true,
            type:'array'
        },
        comment:{

            describe:'This is comment description in add command',
            demandOption:true,
            type:'string'
        }
    
    },
    handler:(x)=>{
      grading.addNote(x.id,x.name,x.degree,x.comment)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete notes',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        },     name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        degree:{
            describe:'This is dgree description in add command',
            demandOption:true,
            type:'array'
        },
        comment:{

            describe:'This is comment description in add command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(x)=>{
         grading.removeNote(x.id,x.name,x.degree,x.comment)  
    
  
    }
})

yargs.command({
    command:'read',
    describe:'Read notes',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        grading.readNotes(x.id)
    }
})

yargs.command({
    command:'list',
    describe:'List notes',
    handler:()=>{
       grading.listNote()
    }
})




yargs.parse()

  //test