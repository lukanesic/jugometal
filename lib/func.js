import TractorImg from './../public/images/banners/tr2.jpg'
import RatImg from './../public/images/banners/rat.jpg'
import VocImg from './../public/images/banners/voc.jpg'
import StocImg from './../public/images/banners/stoc2.jpg'
import TransImg from './../public/images/banners/transport.jpg'
import DeloviImg from './../public/images/banners/delovi.jpg'

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
  } else if (path === 'stočarstvo') {
    return StocImg
  } else if (path === 'voćarstvo') {
    return VocImg
  } else if (path === 'transport') {
    return TransImg
  } else if (path === 'ratarstvo') {
    return RatImg
  } else if (path === 'delovi') {
    return DeloviImg
  }
}

export const selectBannerDescription = (path) => {
  if (path === 'traktori') {
    return 'Izaberite traktor iz naše ponude koji odgovara Vašim potrebama'
  } else if (path === 'stočarstvo') {
    return 'Izaberite iz naše ponude mašina namenjene stočarstvu'
  } else if (path === 'voćarstvo') {
    return 'Poljoprivredne mašine koje su namenjene voćarstvu'
  } else if (path === 'transport') {
    return 'Veliki izbor prikolica, cisterna i rasturača stajnjaka'
  } else if (path === 'ratarstvo') {
    return 'Pogledajte našu ponudu ratarskih poljoprivrednih mašina'
  } else if (path === 'delovi') {
    return 'Jugometal isporučuje originalne rezervne delove za servisiranje traktora i mašina u garantnom i postgarantnom periodu.'
  }
}

export const selectSubcategoryDescription = (subcategory) => {
  // traktori
  if (subcategory === 'solis') {
    return 'Solis je respektabilna indijska kompanija za proizvodnju traktora '
  } else if (subcategory === 'yto') {
    return 'YTO je kineski proizvođač poljoprivrednih i gradjevinskih mašina'
  } else if (subcategory === 'zetor') {
    return 'Zetor je češki proizvođač traktora sa sedištem u Brnu, Lišen'
  } else if (subcategory === 'imt') {
    return 'IMT proizvodi i prodaje traktore i poljoprivrednu mehanizaciju.'
  } else if (subcategory === 'carraro') {
    return 'Traktori specijalizovani za vinograde i voćnjake od 55-95 KS'
  } else if (subcategory === 'mahindra') {
    return 'Indijska multinacionalna korporacija sa sedištem u Mumbaju'
  } else if (subcategory === 'belarus') {
    return 'Serija traktora koja se proizvodi od 1950. godine u Minsku'
  } else if (subcategory === 'john-deere') {
    return 'Proizvodi poljoprivrednu mehanizaciju, tešku opremu i ostalo'
  }

  // Ratarstvo
  else if (subcategory === 'freze') {
    return 'FPM Agromehanika'
  } else if (subcategory === 'plugovi') {
    return 'Bell Impex i Agro Lemind Plugovi'
  } else if (subcategory === 'prskalice') {
    return 'Agromehanika Kranj, Gumaplast Rau, Morava Požarevac, Ferocoop'
  } else if (subcategory === 'rasipači') {
    return 'Ormarić, Minos Agri, Ferocoop'
  } else if (subcategory === 'sejalice') {
    return 'Majevica Bačka Topola'
  } else if (subcategory === 'setvospremači') {
    return 'Gorenc, Majevica'
  }

  // Stocarstvo
  else if (subcategory === 'balirke') {
    return 'Ursus'
  } else if (subcategory === 'kosačice') {
    return 'SIP Šempeter, Minos Agri, Agrisprint, Ćelmak'
  } else if (subcategory === 'okretači') {
    return 'SIP Šempeter'
  } else if (subcategory === 'sakupljači') {
    return 'FPM, SIP Šempeter'
  } else if (subcategory === 'utovarivači') {
    return 'Ferocoop'
  }

  // Vocarstvo
  else if (subcategory === 'atomizeri') {
    return 'FPM Agromehanika Kranj, Morava Požarevac'
  } else if (subcategory === 'mulčari') {
    return 'FPM, INO Brežice, ME-GA '
  }

  // Transport
  else if (subcategory === 'prikolice') {
    return 'Čelmak i Majevica'
  } else if (subcategory === 'cisterne') {
    return 'Majevica Cisterne'
  } else if (subcategory === 'rasturači') {
    return 'Majevica i SIP Šempeter'
  }

  // Delovi
  else if (subcategory === 'traktorski-delovi') {
    return 'Jinma, IMT, Massey Ferguson, Landini'
  } else if (subcategory === 'mašine') {
    return ' SIP Šempeter, IMT, Agromehanika Kranj, Bertolini'
  } else if (subcategory === 'ulja') {
    return 'Shell, Texaco'
  } else if (subcategory === 'gume') {
    return 'Spoljne i unutrašnje gume'
  } else if (subcategory === 'filteri') {
    return ''
  } else if (subcategory === 'kardani') {
    return 'Cerjak, Dar'
  } else if (subcategory === 'akumulatori') {
    return 'Extreme'
  } else if (subcategory === 'razno') {
    return ''
  }
}

export const formatNumber = (number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}
