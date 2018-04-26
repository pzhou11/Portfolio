
library(rsconnect)

rsconnect::setAccountInfo(name='pzhou11',
                          token='A3C7E0E41BDEB2BE0547236F717279AF',
                          secret='FF11RMtptZC4YfDO6gtjrpNhtlBXFAA6K86pfPXF>')

rsconnect::deployApp('/Users/peter/Desktop/Berkeley/W231 - Behind the Data Humans and Values/Final Project/ethics_shiny_app/')

