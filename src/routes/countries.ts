import { Router } from 'express';

const countriesRouter = Router();

countriesRouter.route('/').get();
countriesRouter.route('/:name').get().put();

export { countriesRouter };
