function basicTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else{
    return undefined;
  }
}
basicTeenager(13);
basicTeenager(12);

function teenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else{
    return "You are not a teenager";
  }
}
teenager(13);
teenager(12);
teenager(29);

function ageChecker(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager!";
  }
  else if(age <= 12){
    return "You are a kid";
  }
  else if(age >= 20){
    return "You are a grownup";
  }
}
ageChecker(13);
ageChecker(12);
ageChecker(29);

function ternaryTeenager(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager";
  }
  else{
    return "You are not a teenager";
  }
}
ternaryTeenager(15);
ternaryTeenager(75);

function switchAge(age) {
  if(age >= 13 && age <= 19){
    return "You are a teenager";
  }
  else{
    return "You have an age";
  }
}
switchAge(15);
switchAge(75);
switchAge(7);


describe('ternaryTeenager', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(ternaryTeenager(15)).toEqual("You are a teenager")
    })

    it('should return "You are not a teenager" if age not between 13-19', () => {
      expect(ternaryTeenager(75)).toEqual("You are not a teenager")
    })
  })

  describe('switchAge', () => {
    it('should return "You are a teenager" if age is between 13-19', () => {
      expect(switchAge(15)).toEqual("You are a teenager")
    })

    it('should return "You have an age" if age not between 13-19', () => {
      expect(switchAge(75)).toEqual("You have an age")
      expect(switchAge(7)).toEqual("You have an age")
