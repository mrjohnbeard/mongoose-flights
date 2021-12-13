const Flight = require('../models/flight');

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

    console.log(flights)
    res.render('flights/index', { flights });

  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    {
      res.render('flights/show', { title: "Flight Detail", flight, });
    };
  });
};



function newFlight(req, res) {
  res.render("flights/new");
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