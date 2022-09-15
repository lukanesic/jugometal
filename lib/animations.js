export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
    },
  },
}

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
}

export const fadeHome = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1.2 },
  },
}

export const fadeTractor = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 2 },
  },
}

export const fadeDesc = {
  // hidden: { opacity: 0 },
  // show: {
  //     opacity: 1,
  //     transition: { ease: 'linear', duration: 2.5 },
  // }
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 1,
    },
  },
}
