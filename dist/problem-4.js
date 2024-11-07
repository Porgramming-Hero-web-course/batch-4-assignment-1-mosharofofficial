"use strict";
const calculateShapeArea = (shape) => {
    if (Object.keys(shape).includes("radius")) {
        return parseFloat((3.1415 *
            shape["radius"] *
            shape["radius"]).toFixed(2));
    }
    else {
        return shape.width * shape.height;
    }
};
