'use strict';

var utils = require('../utils/writer.js');
var Pet = require('../service/PetService');

module.exports.addPet = function addPet (req, res, next) {
  var body = req.swagger.params['body'].value;
  Pet.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  Pet.deletePet(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Pet.findPetsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByTags = function findPetsByTags (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  Pet.findPetsByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById (req, res, next) {
  var petId = req.swagger.params['petId'].value;
  Pet.getPetById(petId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet (req, res, next) {
  var body = req.swagger.params['body'].value;
  Pet.updatePet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
