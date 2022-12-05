const shapes = document.querySelectorAll('.shape');
const shapeArray = Array.from('shape');

//defined the Rectangle's area and perimeter 
const Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  surfaceArea() {
      return this.height * this.width;
    }
  perimeterRect() {
    return 2 * (this.height + this.width);
    }
  };
  
//defined the Circle's area and circumference 
  const Circle = class Circle {
      constructor(ray) {
        this.ray = ray;
        }
        surfaceArea() {
          return Math.PI * (ray * 2);
        }
        circumfCercle() {
          return 2 * Math.PI * ray;
        }
  };

//defined the Triangle's area and perimeter 
const Triangle = class Triangle {
    constructor(ab, bc, ac, ah) {
      this.ab = ab;
      this.bc = bc;
      this.ac = ac;
      this.ah = ah;
    }
    surfaceArea() {
      return this.bc * this.ah / 2;
    }
    perimeterTriangle() {
      return this.ab + this.bc + this.ac;
    }
};


//defined the Cube's volume 
const Cube = class Cube {
    constructor(height, width, depth) {
        this.height = height;
        this.width = width;
        this.depth = depth;
    }
    volumeCube() {
        return this.height * this.width * this.depth;
    }
};
  
//defined the Sphere's volume
const Sphere = class Sphere {
    constructor(ray) {
      this.ray = ray;
    }
    volumeSphere() {
        return 4/3 * Math.PI * ray * ray * ray;
    }
};
  
// console.log(new Cube(6, 2, 6).volumeCube());
let shapeName =''
shapes.forEach(element => element.addEventListener('click', () =>  {
  shapeName = element.childNodes[1].id
  // function qui affiche la formule math du shapeName.
})
);


