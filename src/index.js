// ┌─────────────────────────────────────────────────────────────────────────────┐
// │                                    href                                     │
// ├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
// │ protocol ││   auth    │      host       │           path            │ hash  │
// │          ││           ├──────────┬──────┼──────────┬────────────────┤       │
// │          ││           │ hostname │ port │ pathname │     search     │       │
// │          ││           │          │      │          ├─┬──────────────┤       │
// │          ││           │          │      │          │ │    query     │       │
// "  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          ││           │          │      │          │ │              │       │
// └──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘
// (all spaces in the "" line should be ignored -- they are purely for formatting)
import fetch from 'whatwg-fetch'

import url from 'url'

class SDK {
  constructor(config) {
    this.config = config
    this.baseURl = url.parse(config.url)
  }
  getPlanet (id) {
    const requestURL = url.resolve(this.config.url + '/', `planets/${id}`)
    console.log('resolved uRL', requestURL)
    return window.fetch(requestURL, )
  }
}

new SDK({
  url: 'http://swapi.co/api'
}).getPlanet(1)
  .then(res => res.json())
  .then(json => console.log(json))
