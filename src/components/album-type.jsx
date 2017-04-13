const albumType = () => {
  // const dimensions = {
  //   jewelcase: {
  //     box: [1500, 1175, 600],
  //     front: [1490, 1490],
  //     inlay: [1490, 1490],
  //     back: [1490, 1165],
  //     inside: [1490, 1165],
  //   }
  // };

  const dimensions = {
    jewelcase: {
      box: {
        width: 500,
        height: 500
      },
      front: {
        width: 500,
        height: 500
      },
      inlay: {
        width: 500,
        height: 500
      },
      back: {
        width: 500,
        height: 500,
        spine: 80
      },
      inside: {
        width: 500,
        height: 500
      }
    }
  };

  return dimensions;
};

export default albumType;
