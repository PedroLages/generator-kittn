// More Information https://github.com/lancedikson/bowser
import bowser from './bowser'

const customOutput = false
const docHead = document.querySelector('html')
const version = bowser.version.toLowerCase().replace(' ', '-').split('.', 1)[0]
const name = bowser.name.toLowerCase().replace(' ', '-')

if (customOutput) {
  // Use the switch condition if you want to customize the output
  switch (bowser.name) {
    case 'Microsoft Edge':
      docHead.classList.add('edge' + version)
      break

    case 'Internet Explorer':
      docHead.classList.add('ie' + version)
      break

    case 'Firefox':
      docHead.classList.add('firefox' + version)
      break

    case 'Safari':
      docHead.classList.add('safari' + version)
      break

    case 'Chrome':
      docHead.classList.add('chrome' + version)
      break
  }

  // Generate Class for Browser with the old CSS Grid Spec
  const oldSpecBrowser = [
    'internet-explorer-10',
    'internet-explorer-11',
    'microsoft-edge-12',
    'microsoft-edge-13',
    'microsoft-edge-14',
    'microsoft-edge-15'
  ]

  if (oldSpecBrowser.includes(name + '-' + version)) {
    docHead.classList.add('oldGridSpec')
  }
} else {
  // Generate Classes based on Browser and BrowserVersion
  docHead.classList.add(name)
  docHead.classList.add(name + '-' + version)
}
