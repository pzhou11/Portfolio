library(shiny)
library(ggplot2)
library(leaflet)

shinyUI(fluidPage(
  
  title = "Algorithmic Bias Explorer",
  fluidRow(
    column(12, h1 ("Predictive Policing - How Algorithms Can Learn Bias?"), align = "center", color = "Cerulean"), style = "background-color:skyblue"
  ),
  fluidRow(
    column(4,
           h3("Pick the Starting Values"),
           selectInput('areaa_actual', label = 'Actual Crime Rate in Area A', 
                       c("Very Low", "Low", "Medium", "High", "Very High"), selected = "Medium"),
           selectInput('areab_actual', label = 'Actual Crime Rate in Area B', 
                       c("Very Low", "Low", "Medium", "High", "Very High"), selected = "Medium"),
           selectInput('areaa_percieved', label = 'Initial PERCIEVED Crime Rate in Area A', 
                       c("Very Low", "Low", "Medium", "High", "Very High"), selected = "Low"),
           selectInput('areab_percieved', label = 'Initial PERCIEVED Crime Rate in Area B', 
                       c("Very Low", "Low", "Medium", "High", "Very High"), selected = "High"),
           sliderInput("num_interations", label = 
                         "How many feedback cycles?",
                       min = 0, max = 20, value = 5, step = 1)
    ),
    column(8, leafletOutput("mymap"),
           p(),
           textOutput("description"),
           p(),
           textOutput("description2")
    )
  ),
  fluidRow(
    column(12, p(), "")
  )
)
)
#
#textOutput("description")