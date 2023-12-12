const path=require("path")


module.exports={
    mode:"development",
    entry:{
        main:'./main/main.js',
        music:'./src/music.js'
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,'dist')
    }

}