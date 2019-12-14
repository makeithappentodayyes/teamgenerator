var Employe = require('./Employe')

class Engineer extends Employe{
constructor(name,id,email,github){
    super(name,id,email)
    this.github = github
}
getgithub(){

  return this.github
}
}
module.exports = Engineer