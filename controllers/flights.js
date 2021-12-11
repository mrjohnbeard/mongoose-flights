const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
      res.render("flights/index"), { flights };
    });
  }

  
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