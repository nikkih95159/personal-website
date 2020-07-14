// import fontawesome from '@fortawesome/fontawesome';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import fabGithub from '@fortawesome/fontawesome-free-brands/faGithub';
// import fasExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
// impot fabLocation from '@fortawesome/fontawesome-free-brands/'

// fontawesome.library.add(fabGithub);

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(fas, faGithub)
library.add(fas, faMapMarkedAlt)

// Kicks off the process of finding <i> tags and replacing with <svg>
dom.watch()