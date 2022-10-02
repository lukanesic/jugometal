import TractorImg from './../public/images/banners/tr2.jpg'
import RatImg from './../public/images/banners/rat.jpg'
import VocImg from './../public/images/banners/voc.jpg'
import StocImg from './../public/images/banners/stoc2.jpg'
import TransImg from './../public/images/banners/transport.jpg'

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const capitalizeAllLetters = (string) => {
  return string.toUpperCase()
}

export const removeDuplicates = (arr) => {
  return [...new Set(arr)]
}

export const selectBanner = (path) => {
  if (path === 'traktori') {
    return TractorImg
  } else if (path === 'stocarstvo') {
    return StocImg
  } else if (path === 'vocarstvo') {
    return VocImg
  } else if (path === 'transport') {
    return TransImg
  } else if (path === 'ratarstvo') {
    return RatImg
  }
}

export const selectBannerDescription = (path) => {
  if (path === 'traktori') {
    return 'Izaberite traktor iz naše ponude koji odgovara Vašim potrebama'
  } else if (path === 'stocarstvo') {
    return 'Izaberite iz naše ponude mašina namenjene stočarstvu'
  } else if (path === 'vocarstvo') {
    return 'Poljoprivredne mašine koje su namenjene voćarstvu'
  } else if (path === 'transport') {
    return 'Veliki izbor prikolica, cisterna, mix-prikolica i rasturača stajnjaka'
  } else if (path === 'ratarstvo') {
    return 'Pogledajte našu ponudu ratarskih poljoprivrednih mašina'
  }
}

export const selectSubcategoryDescription = (subcategory) => {
  if (subcategory === 'solis') {
    return 'Solis je respektabilna indijska kompanija za proizvodnju traktora '
  } else if (subcategory === 'yto') {
    return 'YTO je kineski proizvođač poljoprivrednih i gradjevinskih mašina'
  } else if (subcategory === 'balirke') {
    return 'Priključne mašine koje pakuju sena i slame u bale'
  } else if (subcategory === 'kosacice') {
    return 'Nudimo SIP, WIRAX, MinosAgri, Agrisprint, Ćelmak'
  } else if (subcategory === 'prikolice') {
    return 'Čelmak i Majevica'
  } else if (subcategory === 'zetor') {
    return 'Zetor je češki proizvođač traktora sa sedištem u Brnu, Lišen'
  }
}
