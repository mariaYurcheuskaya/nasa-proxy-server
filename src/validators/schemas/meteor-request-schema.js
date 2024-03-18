import { constants } from '../../constants/constants.js';

import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

const meteorRequestSchema = Joi.object({
  date: Joi.date().less('now').format(constants.DATE_FORMAT),
  count: Joi.boolean().sensitive(),
  hasDangerousMeteors: Joi.boolean().sensitive(),
});

export default meteorRequestSchema;