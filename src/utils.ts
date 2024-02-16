const IPX_ENDPOINT = 'https://ipx.vandal.services'
const BUCKET_ENDPOINT = 'https://files.vandal.services'
const BUCKET_NAME = 'bellypao.com.br'

export function getImageUrl(imagePath: string, transform = '_') {
  // https://ipx.vandal.services/_/https://files.vandal.services/pedrohenri.design/images/footer.png
  return `${IPX_ENDPOINT}/${transform}/${BUCKET_ENDPOINT}/${BUCKET_NAME}/${imagePath}`
}
