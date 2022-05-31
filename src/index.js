import "./styles.css";

// toppings have properties of IdleDeadline, name and price
const toppings = [
  {
    id: 1,
    name: "pepperoni",
    price: 1.75
  },
  {
    id: 2,
    name: "bacon",
    price: 2.0
  }
];

const bellPepperPizza = {
  id: 3,
  name: "bell pepper",
  price: 1.5
};

toppings.push(bellPepperPizza);

// sizes have properties of id, diameter and price
const sizes = [
  {
    id: 1,
    diameter: 12,
    price: 7.0
  },
  {
    id: 2,
    diameter: 14,
    price: 10.0
  },
  {
    id: 3,
    diameter: 16,
    price: 12.84
  }
];
sizes[0].name = "small";
sizes[1].name = "medium";
sizes[2].name = "large";
// crusts have properties of id, type and price
const crusts = [
  {
    id: 1,
    type: "thin crust",
    price: 3.0
  },
  {
    id: 2,
    type: "gluten-free",
    price: 7.0
  },
  {
    id: 3,
    type: "deep dish",
    price: 5.0
  },
  {
    id: 4,
    type: "stuffed crust",
    price: 9999.99
  }
];

const findSizePrice = (sizeVal) => {
  for (const size of sizes) {
    if (size.diameter === sizeVal) {
      return size.price;
    }
  }
};

const findCrustPrice = (crustVal) => {
  for (const crust of crusts) {
    console.log(crust.type, crustVal);
    if (crust.type === crustVal) {
      return crust.price;
    }
  }
};

const findToppingPrice = (toppingVal) => {
  return toppings.find((topping) => {
    return topping.name === toppingVal;
  }).price;
};

// A function for assembling a pizza
const makePizza = (size, topping, crust) => {
  let thePizza = {};
  thePizza.sizeOfPizza = size;
  thePizza.toppingOfPizza = topping;
  thePizza.crustOfPizza = crust;
  thePizza.totalCost = 0;

  const total =
    findCrustPrice(crust) + findSizePrice(size) + findToppingPrice(topping);

  thePizza.totalCost = total;

  return thePizza;
};

const newPizza = makePizza(12, "bacon", "deep dish");
const nextPizza = makePizza(14, "pepperoni", "thin crust");
console.log(newPizza, nextPizza);
