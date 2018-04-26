library(shiny)
library(leaflet)
library(rgdal)
library(tigris)

shinyServer(function(input, output) {
  print("here")
  #create map
  city <- readOGR("shp/cityshape_line.shp", layer = "cityshape_line", GDAL1_integer64_policy = TRUE)
  
  observe({
    if (input$areaa_actual == "Very Low") {
      actual_a <- 1
    } else if (input$areaa_actual == "Low") {
      actual_a <- 2
    } else if (input$areaa_actual == "Medium") {
      actual_a <- 3
    } else if (input$areaa_actual == "High") {
      actual_a <- 4
    } else
      actual_a <- 5
    
    if (input$areab_actual == "Very Low") {
      actual_b <- 1
    } else if (input$areab_actual == "Low") {
      actual_b <- 2
    } else if (input$areab_actual == "Medium") {
      actual_b <- 3
    } else if (input$areab_actual == "High") {
      actual_b <- 4
    } else
      actual_b <- 5
    
    if (input$areaa_percieved == "Very Low") {
      perceived_a <- 1
    } else if (input$areaa_percieved == "Low") {
      perceived_a <- 2
    } else if (input$areaa_percieved == "Medium") {
      perceived_a <- 3
    } else if (input$areaa_percieved == "High") {
      perceived_a <- 4
    } else
      perceived_a <- 5
    
    if (input$areab_percieved == "Very Low") {
      perceived_b <- 1
    } else if (input$areab_percieved == "Low") {
      perceived_b <- 2
    } else if (input$areab_percieved == "Medium") {
      perceived_b <- 3
    } else if (input$areab_percieved == "High") {
      perceived_b <- 4
    } else
      perceived_b <- 5
    
    direct <- "higher than"
    if (actual_a < actual_b ){
      direct <- "less than"
    } else if (actual_a == actual_b){
      direct <- "the same as"
    }
    
    direct_percieved <- "higher than"
    if (perceived_a < perceived_b ){
      direct_percieved <- "less than"
    } else if (perceived_a == perceived_b){
      direct_percieved <- "the same as"
    }
    
    conj <- "But"
    if (direct == direct_percieved){
      conj <- "And"
    } 

  algorithm2 <- function(a, b) {
    a/(a+b)
  }
  
  score = algorithm2(perceived_a, perceived_b)
  a_numpolice = 250* score 
  b_numpolice = 250 - 250*score
  #each policeman finds 1/4 of a percent of the crime
  a_obs_crimerate = perceived_a*20 # to make max 100
  b_obs_crimerate = perceived_b*20
  a_actual_crimerate = actual_a*100
  b_actual_crimerate = actual_b*100
  
  found_a_print = round(score*13)
  found_b_print = 13 - round(score*13)
  
  #found_a = round(score*100)
  #found_b = 100 - round(score*100)
  iterations <- input$num_interations
  
  for (i in 1:iterations){
    a_obs_crimerate = a_numpolice/250*a_actual_crimerate
    b_obs_crimerate = b_numpolice/250*b_actual_crimerate
    score = algorithm2(a_obs_crimerate, b_obs_crimerate)
    if (score < .5) {
      a_numpolice = 250* (score - .1) 
      b_numpolice = 250 - 250*(score + .1)
    } else {
      a_numpolice = 250* (score + .1) 
      b_numpolice = 250 - 250*(score - .1)
    }
    if (a_numpolice < 0) {
      a_numpolice = 0
      b_numpolice = 250
    }else if (b_numpolice <0){
      b_numpolice = 0
      a_numpolice = 250
    }
    print("We have observed crime rates of")
    print(a_obs_crimerate)
    print(b_obs_crimerate)
    print(score)
    print("We have police presence at:")
    print(a_numpolice)
    print(b_numpolice)
  }

  percent_a = 100*score
  percent_b = 100-100*score
  
  # city$ID <- c("A", "B")
  # city_id = c("A", "B")

  # police = c(final_a, final_b)
  # print(final_a)
  # city_df = data.frame(city_id, police)
  # merge <- geo_join(city, city_df, "ID", "city_id") 

  
  #iterations <- input$num_interations
  #run algorithm x number of times (x being the number of feedback cycles)

  
  #list of point to plot
  #points_df <- data.frame('lat'= c(34.10, 34.11), 'lng' = c(-118.10, -118.11))

  
  #color palette
  pal <- colorNumeric(palette = "Blues", domain = c(0, 250))
  
  output$mymap <- renderLeaflet({
    leaflet() %>%
      addLegend(pal = pal,
                values = c(0, 250),
                position = "bottomleft",
                title = "# of Police",
                opacity = 1) %>%
      #addTiles() %>%
      setView(lng=-118.10,lat=34.10, zoom=12)
      #addMarkers(lng=-118.10,lat=34.10, popup= "HelloWorld",label = "police")
  })

  #inputs
    
    #output$description <- renderText({paste("The actual crime rate in Area A starts out at ", actual_a, "and in Area B it is ", input$areab_actual, " a my vars", greater, lesser, direct )})
    output$description <- renderText({paste("The actual crime rate in Area A is ", direct, " the crime rate in Area B." )})
    output$description2 <- renderText({paste(conj, " the police initially assume the crime rate in Area A is ", direct_percieved, 'the crime rate in Area B. So they send', round(perceived_a/(perceived_a*perceived_b) *100), " % of the police to city A." )})
    #output$description2 <- renderText({paste("The score is", score)})
    
    
    points_df2 <- read.csv('points2.csv')
    points_df <- read.csv('points.csv')
    #number of crimes found
    found_a = round(score*13)
    found_b = 13 - round(score*13)
    
    #merge police data with geospatial data
    city$ID <- c("A", "B")
    city_id = c("A", "B")
    
    police = c(a_numpolice, b_numpolice)
    #print(final_a)
    city_df = data.frame(city_id, police)
    merge <- geo_join(city, city_df, "ID", "city_id")

    #set color on dots
    red_list <- c("red")
    green_list <- c("green")
    area_a_list <- c(rep.int(green_list, found_a), rep.int(red_list, 13 - found_a))
    area_b_list <- c(rep.int(green_list, found_b), rep.int(red_list, 13 - found_b))
    points_df$color <- area_b_list
    points_df2$color <- area_a_list
    merge <- geo_join(city, city_df, "ID", "city_id") 
    
    #popup
    popup <- paste0("Area ID: ", merge$ID, "<br>", "Number of Police: ", merge$police)
    

    
    #green_list <- c("yellow")
    #area_a_list <- c(rep.int(green_list, 13))
    #points_df2$color <- area_a_list
    
    leafletProxy("mymap", data = merge) %>%
    addPolygons(color = "#444444", weight = 1, smoothFactor = 0.5,
                opacity = 1.0, fillOpacity = 0.5,
                fillColor = ~pal(police),
                popup = popup,
                highlightOptions = highlightOptions(color = "white", weight = 2, bringToFront = TRUE)) %>%
    addCircles(data=points_df, lat = ~lat,lng = ~lng, color = ~color) %>%
    addCircles(data=points_df2, lat = ~lat,lng = ~lng, color = ~color )

  })
})


