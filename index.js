module.exports = {
  getGestationalAge: (crl = null) => {
    const numberedCrl = Number(crl);

    if (numberedCrl > 0) {
      return (Math.round(1000 * (8.052 * Math.pow(numberedCrl, 0.5) + 23.73))) / 1000;
    }

    throw new Error('Invalid crown-rump length.');
  }
};
