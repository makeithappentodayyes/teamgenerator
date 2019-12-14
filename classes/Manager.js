var Employe = require('./Employe')

class Manager extends Employe{
constructor(name,id,email,officeid){
    super(name,id,email)
    this.officeid = officeid
}
getofficeid(){

  return this.officeid
}
}
module.exports = Manager
