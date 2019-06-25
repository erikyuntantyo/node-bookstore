'use strict'

import express from 'express'
import CustomError from './custom-error'

export default class Base {
  constructor(path, models, hook, options) {
    this.hook = hook
    this.models = models
    this.options = options
    this.path = path
  }

  createRouter() {
    const router = express.Router()

    // GET
    if (this.get !== void 0) {
      router.get(`${this.path}/:id`, async (req, res, next) => {
        // hook before get methods here
        // console.log('hook before', req.originalUrl)
        next()
      }, async (req, res, next) => {
        try {
          res.results = await this.get(req.params.id, req.query)
          next()
        } catch (err) {
          if (err instanceof CustomError) {
            res.status(err.code).send(err.toJson())
          } else {
            res.status(500).send(err.message)
          }
        }
      }, async (req, res) => {
        // hook after get methods here
        // console.log('hook after', req.originalUrl)
        res.json({ data: res.results })
      })
    }

    // FIND
    if (this.find !== void 0) {
      router.get(this.path, async (req, res, next) => {
        // hook before get methods here
        // console.log('hook before', req.originalUrl)
        next()
      }, async (req, res, next) => {
        try {
          res.results = await this.find(req.query)
          next()
        } catch (err) {
          if (err instanceof CustomError) {
            res.status(err.code).send(err.toJson())
          } else {
            res.status(500).send(err.message)
          }
        }
      }, async (req, res) => {
        // hook after get methods here
        // console.log('hook after', req.originalUrl)
        res.json({ total: res.results.length, data: res.results })
      })
    }

    // CREATE
    if (this.create !== void 0) {
      router.post(this.path, async (req, res, next) => {
        // hook before get methods here
        // console.log('hook before', req.originalUrl)
        next()
      }, async (req, res, next) => {
        try {
          res.results = await this.create(req.body)
          next()
        } catch (err) {
          if (err instanceof CustomError) {
            res.status(err.code).send(err.toJson())
          } else {
            res.status(500).send(err.message)
          }
        }
      }, async (req, res) => {
        // hook after get methods here
        // console.log('hook after', req.originalUrl)
        res.json({ data: res.results })
      })
    }

    // UPDATE
    if (this.update !== void 0) {
      router.put(`${this.path}/:id`, async (req, res, next) => {
        // hook before get methods here
        // console.log('hook before', req.originalUrl)
        next()
      }, async (req, res, next) => {
        try {
          res.results = await this.update(req.params.id, req.body, req.query)
          next()
        } catch (err) {
          if (err instanceof CustomError) {
            res.status(err.code).send(err.toJson())
          } else {
            res.status(500).send(err.message)
          }
        }
      }, async (req, res) => {
        // hook after get methods here
        // console.log('hook after', req.originalUrl)
        res.json({ data: res.results })
      })
    }

    // DELETE
    if (this.delete !== void 0) {
      router.delete(`${this.path}/:id`, async (req, res, next) => {
        // hook before get methods here
        // console.log('hook before', req.originalUrl)
        next()
      }, async (req, res, next) => {
        try {
          res.results = await this.delete(req.params.id, req.query)
          next()
        } catch (err) {
          if (err instanceof CustomError) {
            res.status(err.code).send(err.toJson())
          } else {
            res.status(500).send(err.message)
          }
        }
      }, async (req, res) => {
        // hook after get methods here
        // console.log('hook after', req.originalUrl)
        res.json({ data: res.results })
      })
    }

    return router
  }
}
