const express=require('express')
const {
  getHealth,
  analyzeThread,
  getAnalyzedDetails,
} = require('./controllers')
const {validInput} =require('./validation')
const router=express.Router()

router.get('/health',getHealth)
router.post('/submit-threat',validInput,analyzeThread)
router.get('/analyzed',getAnalyzedDetails)


module.exports=router