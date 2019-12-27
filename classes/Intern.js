var Employe = require('./Employe')

class Intern extends Employe{
constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
}
getschool(){

  return this.school
}
}
module.exports = Intern
