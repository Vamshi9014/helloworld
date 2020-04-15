class MyConsole   {
    listData=[];

    log(value){
        var result = this.calcaLog(value);
        console.log('"'+result+'"');
        this.listData.push(result);
    }
    calcaLog(value){
        if(typeof(value)=='object'){
            var arrayOfKeyPairs = Object.keys(value).map( (key)=> {
                return  key + ':' + this.convertToString(value[key]);
            });
            return "{"+ arrayOfKeyPairs.join(',')+"}";
        }  else {
            return this.convertToString(value);
        }  
    }

    history(range=this.listData.length){
        if(range===this.listData.length){
            console.log('"'+this.listData.join('\n')+'"');
        } else {
            console.log('"'+this.listData.slice(0,range).join('\n')+'"');
        }    
    }

    clearHistory(){
        this.listData=[];
        console.log(true);
    }

    convertToString(value){
        switch (typeof(value)){
            case 'string':
                return value;
            case 'boolean':
                return "" + value;
            case 'number':
                return "" + value;
            case 'object':
                return this.calcaLog(value);
        }
    }
    
}
var myConsole = new MyConsole();
