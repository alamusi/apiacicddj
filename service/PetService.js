'use strict';

var examples = [{
  "photoUrls": ["url1", "url2"],
  "name": "alpha",
  "id": 0,
  "status": "available"
}, {
  "photoUrls": ["url3", "url4"],
  "name": "beta",
  "id": 1,
  "status": "pending"
}];

/**
 * Add a new pet to the store
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    let len = examples.push({
      id: examples.length,
      name: body.name,
      status: body.status || "available",
      photoUrls: body.photoUrls
    })
    resolve(examples[len-1]);
  });
}


/**
 * Deletes a pet
 * 
 *
 * petId Long Pet id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(petId) {
  return new Promise(function(resolve, reject) {
    let i = examples.findIndex(item=> item.id === petId);
    if (i >= 0) {
      resolve(examples.splice(i,1)[0]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    console.log(status)
    resolve(examples.filter(item => status.indexOf(item.status) >= 0 ));
  });
}


/**
 * Finds Pets by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findPetsByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    resolve(examples);
  });
}


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 **/
exports.getPetById = function(petId) {
  return new Promise(function(resolve, reject) {
    resolve(examples.find(item => item.id === petId));
  });
}


/**
 * Update an existing pet
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    let i = examples.findIndex(item => item.id === body.id);
    console.log(i, body);
    if (i >= 0) {
      examples[i] = body;
      resolve(examples[i]);
    } else {
      resolve()
    }
  });
}

