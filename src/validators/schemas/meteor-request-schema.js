const Joi = require('joi').extend(require('@joi/date'));

const { DATE_FORMATTER } = require('../../constants/constants');

const meteorRequestSchema = Joi.object({
  date: Joi.date().less('now').format(DATE_FORMATTER),
  count: Joi.boolean().sensitive(),
  hasDangerousMeteors: Joi.boolean().sensitive()
});

module.exports = meteorRequestSchema;