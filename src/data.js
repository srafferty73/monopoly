const data = {

players: [
  {
    id: 0,
    name: "John",
    money: 100,
    current_position: 0,
    status: "end",
    icon:"fas fa-dog",
    jail_counter: 0
  },
  {
    id: 1,
    name: "Bill",
    money: 100,
    current_position: 0,
    status: "end",
    icon: "fas fa-car-side",
    jail_counter: 0
  }
],
game: {
  current_player: 0,
  current_roll1: null,
  current_roll2: null,
  double_counter: 0,
  winner: null
},
chance: [
  {
    id: 0,
    description: "Advance to Mayfair",
    move_to: 39,
    pay: 0,
    collect: 0
  },
  {
    id: 1,
    description: "Advance to GO",
    move_to: 0,
    pay: 0,
    collect: 200
  },
  {
    id: 2,
    description: "Street Repairs - £40 per House",
    move_to: "",
    pay: 40,
    collect: 0
  },
  {
    id: 3,
    description: "Go to Jail",
    move_to: 10,
    pay: 0,
    collect: 0
  },
  {
    id: 4,
    description: "Go Back 3 Spaces",
    move_to: -3,
    pay: 0,
    collect: 0
  },
  {
    id: 5,
    description: "Pay School Fees of £150",
    move_to: "",
    pay: 150,
    collect: 0
  },
  {
    id: 6,
    description: "Speeding Fine £15",
    move_to: "",
    pay: 15,
    collect: 0
  },
  {
    id: 7,
    description: "You have won a Crossword Competition, Collect £100",
    move_to: "",
    pay: 0,
    collect: 100
  },
  {
    id: 8,
    description: "Your Building and Loan Matures, Collect £150",
    move_to: "",
    pay: 0,
    collect: 150
  },
  {
    id: 9,
    description: "Advance to Trafalgar Square",
    move_to: 24,
    pay: 0,
    collect: 0
  },
  {
    id: 10,
    description: "Trip to Marylebone Station",
    move_to: 15,
    pay: 0,
    collect: 0
  },
  {
    id: 11,
    description: "Advance to Pall Mall",
    move_to: 11,
    pay: 0,
    collect: 0
  },
  {
    id: 12,
    description: "Drunken Charge Fine £20",
    move_to: "",
    pay: 20,
    collect: 0
  }
]
}

export default data;
