import { Router } from 'express';
import {
    getCountries,
    getCountryById,
    updateCountry,
} from '../controllers/countries';
import { validate } from '../middleware/validation';
import {
    validatePopulationAndCapital,
    validateId,
} from '../middleware/validation/countries';

const countriesRouter = Router();

/**
 * @swagger
 * /countries:
 *   get:
 *     summary: returns list of countries.
 *     description: get all countries.
 *     responses:
 *       '200':
 *         description: A successful response
 *       '500':
 *         description: Internal server error
 */
countriesRouter.route('/').get(getCountries);

/**
 * @swagger
 * /countries/{i1}:
 *  get:
 *      summary: return country by id.
 *      description: get country.
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *      responses:
 *          '200':
 *              description: A successful response
 *          '404':
 *              description: not found
 *          '500':
 *              description: Internal server error
 *
 * /countries/{i2}:
 *  put:
 *      summary: update country by id.
 *      description: update country.
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                population:
 *                  type: number
 *                capital:
 *                  type: array
 *                  items:
 *                    type: string
 *      responses:
 *          '200':
 *              description: A successful response
 *          '400':
 *              description: Invalid request
 *          '404':
 *              description: Not found
 *          '500':
 *              description: Internal server error
 */
countriesRouter
    .route('/:id')
    .get(validate({ params: validateId }), getCountryById)
    .put(
        validate({ params: validateId, body: validatePopulationAndCapital }),
        updateCountry,
    );

export { countriesRouter };
