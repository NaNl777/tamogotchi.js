const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,

 setName: function(names) {
    this.name = names;
 },

 goEat: function() {
    
   if(this.meal <= 5) {
     this.meal += 1; // or this.meal++
    } 
    else {
     this.mood -= 1; // or this.mood--
    } 

 },

 goSleep: function() {
    if(this.energy <= 5) {
      this.energy += 1; // or this.energy++
    } else {
      this.meal -= 1;  // or this.meal++
    }
 },

 goPlay: function() {
    if(this.mood <= 5) {
      this.mood += 1;  // or this.mood++
    }
      this.energy -= 1; // or this.energy++
 },



  getStatus: function () {

    if (this.energy <= 0 || this.meal <= 0 || this.mood <= 0) {
      console.log(`${this.name}: ты умер :(`)
    }


    let eat = `Еда: Я голоден (${this.meal})`
    let energy = `Энергия: Я не хочу спать (${this.energy})`
    let mood = `Настроение: Мне весело (${this.mood})`

    if (this.meal < 3) {
      console.log(`Еда: Я голоден (${this.meal})`);
    } else {
      console.log(`Я не голоден`)
    };


    if (this.energy < 3) {
      console.log(`Энергия: Я не хочу спать (${this.energy}`);
    } else {
      console.log(`Я хочу спать`)
    };


    if (this.mood < 3) {
      console.log(`Настроение: Мне весело (${this.mood})`);
    } else {
      console.log(`Мне грусто`)
    };

    console.log(`Имя: ${this.name}, ${eat}, ${energy}, ${mood}`)

  },


}