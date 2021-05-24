import Joi from "joi";

const kursPayload = Joi.object().keys({
    id: Joi.string().optional(),
    symbol: Joi.string().required(),
    e_rate: Joi.object().keys({
        buy: Joi.number().required(),
        sell: Joi.number().required(),
    }),
    tt_counter: Joi.object().keys({
        buy: Joi.number().required(),
        sell: Joi.number().required(),
    }),
    bank_note: Joi.object().keys({
        buy: Joi.number().required(),
        sell: Joi.number().required(),
    }),
    date: Joi.string().required()
})

export default kursPayload;