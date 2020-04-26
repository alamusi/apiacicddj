'use strict'

/* eslint-env mocha */
const URL = require('url').URL
const address = new URL('http://localhost')
address.port = 8080
address.pathname = '/api-docs'

const swagger = require('swagger-client')(address.toString())
const should = require('should')
const assert = require('assert')
const pet = {
  "photoUrls": ["url5", "url6"],
  "name": "delta",
  "status": "sold"
}
let id = 3

describe('pet', () => {
  describe('addPet', () => {
    it('should addPet', () => {
      return swagger.then(c => {
        return c.apis.pet.addPet({
          body: pet
        }).then(r => {
          console.log('should get pet: ', r.body)
          should.exist(r.body)
          should.exist(r.body.id)
          id = r.body.id
        })
      })
    })
  })

  describe('getPetById', () => {
    it('should getPetById', () => {
      return swagger.then(c => {
        return c.apis.pet.getPetById({
          petId: id
        }).then(r => {
          console.log('should find pet: ', r.body)
          should.exist(r.body)
          should.equal(r.body.id, id)
          should.equal(r.body.name, pet.name)
          should.equal(r.body.status, pet.status)
          should.deepEqual(r.body.photoUrls, pet.photoUrls)
        })
      })
    })
  })

  describe('updatePet', () => {
    it('should updatePet', () => {
      return swagger.then(c => {
        return c.apis.pet.updatePet({
          body: {
            id: id,
            name: pet.name,
            status: 'available',
            photoUrls: pet.photoUrls
          }
        }).then(r => {
          console.log('should update pet: ', r.body)
          should.exist(r.body)
          should.equal(r.body.id, id)
          should.equal(r.body.name, pet.name)
          should.equal(r.body.status, 'available')
          should.deepEqual(r.body.photoUrls, pet.photoUrls)
        })
      })
    })
  })

  describe('findPetsByStatus', () => {
    it('should findPetsByStatus', () => {
      return swagger.then(c => {
        return c.apis.pet.findPetsByStatus({
          status: ['available']
        }).then(r => {
          console.log('should find pets: ', r.body)
          should.exist(r.body)
          r.body.forEach(item => {
            should.equal(item.status, 'available')
          })
        })
      })
    })
  })

  describe('deletePet', () => {
    it('should deletePet', () => {
      return swagger.then(c => {
        return c.apis.pet.deletePet({
          petId: id
        }).then(r => {
          console.log('should delete pet: ', r.body)
          should.exist(r.body)
          should.equal(r.body.id, id)
          should.equal(r.body.name, pet.name)
        })
      })
    })
  })
})
