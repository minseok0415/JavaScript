//class
import { Animal, Cat } from "./animal";

let cat = new Animal("Cat", 4);
cat.makeNoise("meow");
cat.makeNoise();
console.log(Animal.return10()); //static
console.log(cat.metaData);

let cat2 = new Cat("Cat", 4);
cat2.makeNoise();
console.log(Cat.return10());
console.log(cat2.metaData);