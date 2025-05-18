const axios = require('axios').default
const Url = require('../utility/UrlModel')
const { response } = require('../utility/response')

const getHealth = (req, res) => {
  res.status(200).send(response([], true, 'server is looking healthy')).end()
}

const analyzeThread = async (req, res) => {
  console.log(req.body)
  let { url } = req.body
  //call the python api
  try {
    const result = await axios.post('http://127.0.0.1:8000/analysis', req.body)
    let validData = result.data.data
    await Url.create({
      url: validData.url,
      status: validData.status,
    })
    res.status(201).send(response([], true, 'Inserted successfully')).end()
  } catch (err) {
    res.status(400).send(response([], false, err)).end()
  }

  
}

const getAnalyzedDetails = async (req, res) => {
  const result = await Url.find({})

  res.status(200).send(response(result, true)).end()
}

module.exports = { getHealth, analyzeThread, getAnalyzedDetails }
