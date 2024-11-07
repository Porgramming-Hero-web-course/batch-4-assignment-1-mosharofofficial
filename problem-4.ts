type Circle = {
  shape: string;
  radius: number;
};
type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

const calculateShapeArea = (shape: Rectangle | Circle): number => {
  if (Object.keys(shape).includes("radius")) {
    return parseFloat(
      (
        3.1415 *
        (shape as Circle)["radius"] *
        (shape as Circle)["radius"]
      ).toFixed(2)
    );
  } else {
    return (shape as Rectangle).width * (shape as Rectangle).height;
  }
};

