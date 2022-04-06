const { exec } = require("child_process");
const fs = require('fs')

const data = function(){

    exec("docker run --rm -v /tmp/43556789705456847598:/var/task lambci/lambda:python3.7 lambda_function.lambda_handler", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });

}


function decodeUnwrap(encoded)  {
    uEnv = b64.URLEncoding.DecodeString(encoded)
    return string(uEnv)
}

function writeCodeToTempFile(code) {
    const path = "/tmp/43556789705456847598/" // build the temp DIR
    // Check if path exists
    try {
        fs.stat(path);
    }
    catch (err) {
        // If not create path
        fs.mkdirSync(path)
    }
    try {
        // write the function file body to tmp
        fs.WriteFile("/tmp/43556789705456847598/lambda_function.py", code, 0644);
    }
    catch (err) {
        return (err);
    }

  
}