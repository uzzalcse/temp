"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHotel = void 0;
const express_validator_1 = require("express-validator");
exports.validateHotel = [
    (0, express_validator_1.body)('title').notEmpty().trim().isString(),
    (0, express_validator_1.body)('description').notEmpty().trim().isString(),
    (0, express_validator_1.body)('guestCount').isInt({ min: 1 }),
    (0, express_validator_1.body)('bedroomCount').isInt({ min: 1 }),
    (0, express_validator_1.body)('bathroomCount').isInt({ min: 1 }),
    (0, express_validator_1.body)('amenities').isArray(),
    (0, express_validator_1.body)('host.name').notEmpty().trim().isString(),
    (0, express_validator_1.body)('host.email').isEmail(),
    (0, express_validator_1.body)('address').notEmpty().trim().isString(),
    (0, express_validator_1.body)('location.latitude').isFloat(),
    (0, express_validator_1.body)('location.longitude').isFloat(),
    (0, express_validator_1.body)('rooms').isArray(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
