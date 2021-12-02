export const listItemAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
export const listAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const titleAnimate = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,

    transition: {
      staggerChildren: 1,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const titleItemAnimate = {
  start: {
    opacity: 0,
    y: -30,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const memberCardAnimate = {
  offView: {
    opacity: 0,
    y: 30,
  },
  onView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
