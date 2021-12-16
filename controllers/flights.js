const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    if (err) {
      console.log(err);
    }
    res.render('flights/index', { 
      title: "All Flights",
      flights 
    });

  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { 
        title: "Flight Detail", 
        flight,
        tickets
       });
    });
  });
};



function newFlight(req, res) {
  res.render("flights/new",
  { title: "Add Flight" }
  );
}


function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    // one way to handle errors
    if (err) {
      console.log(err);
      return res.redirect('/flights/new');
    }
    console.log(flight);
    res.redirect('/flights');
  });
}