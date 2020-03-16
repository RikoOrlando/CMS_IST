import bcrypt from 'bcrypt'
const saltRounds = 5;

export const hash = (textplaint) => {
    return new Promise ((resolve, reject)=>{
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(textplaint, salt, function(err, hash) {
                resolve(hash)
            });
        });
    })
}

export const compare = (textplaint, hashed) => {
    return new Promise ((resolve, reject)=>{
        bcrypt.compare(textplaint, hashed, function(err, res) {
            resolve(res)
        });
    })
}


