import React from 'react'
import * as d3 from 'd3'

class App extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
        this.dataset = [100, 200, 300, 400, 500]
        this.timestamps = [
                1647610200,
                1647869400,
                1647955800,
                1648042200,
                1648128600,
                1648215000,
                1648474200,
                1648560600,
                1648647000,
                1648733400,
                1648819800,
                1649079000,
                1649165400,
                1649251800,
                1649338200,
                1649424600,
                1649683800,
                1649770200,
                1649856600,
                1649943000,
                1650288600,
                1650375000,
                1650461400,
                1650547800,
                1650634200,
                1650893400,
                1650979800,
                1651066200,
                1651152600,
                1651239000,
                1651498200,
                1651584600,
                1651671000,
                1651757400,
                1651843800,
                1652103000,
                1652189400,
                1652275800,
                1652362200,
                1652448600,
                1652707800,
                1652794200,
                1652880600,
                1652967000,
                1653053400,
                1653312600,
                1653399000,
                1653485400,
                1653571800,
                1653658200,
                1654003800,
                1654090200,
                1654176600,
                1654263000,
                1654522200,
                1654608600,
                1654695000,
                1654781400,
                1654867800,
                1655127000,
                1655213400,
                1655299800,
                1655386200,
                1655472600
              ]
    }

    componentDidMount(){

        var meta = [
            216.8,
            214.71,
            219.46,
            216.8,
            220.67,
            225.5,
            224.04,
            230.89,
            231.15,
            228.49,
            227.28,
            234.35,
            236.86,
            228.99,
            225.52,
            225.13,
            220.61,
            222.03,
            216.61,
            214.99,
            213.38,
            218.43,
            214.16,
            202.97,
            192.72,
            187.18,
            187.19,
            181.21,
            208.53,
            212.48,
            211.88,
            214.9,
            224.3,
            220.17,
            209.38,
            202.57,
            202.96,
            200.67,
            198.05,
            199.89,
            205.37,
            205.46,
            201,
            195.29,
            197.91,
            196.99,
            183.68,
            185.45,
            192.83,
            195.33,
            197.6,
            199.53,
            200.94,
            196.61,
            196.92,
            196.53,
            202.03,
            199.45,
            183.1,
            172.58,
            166.75,
            172.16,
            165.08,
            165.9
          ]
        var googl = [
                            2724.88,
                            2741,
                            2821,
                            2791.77,
                            2832.38,
                            2840.7,
                            2840.05,
                            2875.87,
                            2854.41,
                            2842.16,
                            2809.42,
                            2874.24,
                            2859.81,
                            2787.21,
                            2743.29,
                            2713.4,
                            2641.85,
                            2632,
                            2606.68,
                            2609.59,
                            2564.25,
                            2606.66,
                            2627.98,
                            2601.97,
                            2508.04,
                            2465.55,
                            2450.2,
                            2344.84,
                            2392.99,
                            2358.4,
                            2334.91,
                            2368.84,
                            2457.09,
                            2420.78,
                            2351.43,
                            2301.54,
                            2325,
                            2327.29,
                            2285.9,
                            2357.5,
                            2323.4,
                            2338,
                            2308,
                            2260.2,
                            2243.67,
                            2242.95,
                            2129.17,
                            2130,
                            2172.99,
                            2246.36,
                            2314.7,
                            2342.03,
                            2357.99,
                            2326.43,
                            2386.94,
                            2353.82,
                            2371.41,
                            2365.98,
                            2265.58,
                            2175.83,
                            2158.49,
                            2228.47,
                            2172.97,
                            2173.99
                          ]
        var amzn = [
                            907.85,
                            942.85,
                            997.86,
                            1040.7,
                            1024.49,
                            1021.8,
                            1097.88,
                            1114.77,
                            1113.95,
                            1103.14,
                            1094.75,
                            1149.91,
                            1152.87,
                            1079,
                            1076.59,
                            1048.44,
                            1008.47,
                            1021.19,
                            1026.24,
                            1012.71,
                            1014.92,
                            1034.94,
                            1034,
                            1092.22,
                            1034.85,
                            1008.62,
                            1000,
                            918,
                            900,
                            934.4,
                            906.36,
                            924.08,
                            955.5,
                            945.6,
                            888,
                            845.63,
                            825.36,
                            809.77,
                            759.66,
                            787.35,
                            769.76,
                            764.48,
                            760.5,
                            734,
                            721.58,
                            679.96,
                            653.92,
                            669.32,
                            718.67,
                            759.8,
                            778.8,
                            771.98,
                            792.63,
                            743.39,
                            734.6,
                            719.99,
                            749.89,
                            766.64,
                            718.5,
                            679.9,
                            678.99,
                            706.99,
                            675.5,
                            662.91
                          ]
        var tsla = [
                            161.594,
                            163.084,
                            166.167,
                            166.37,
                            164.1185,
                            165.3685,
                            169.0375,
                            170.8315,
                            168.9505,
                            166.495,
                            165.827,
                            168.3945,
                            168.1105,
                            162.2,
                            160.079,
                            157.3685,
                            154.1365,
                            155.099,
                            156.025,
                            155.897,
                            154.0395,
                            158.649,
                            157.6025,
                            156.738,
                            149.615,
                            146.2215,
                            144.856,
                            141.9485,
                            145.9375,
                            130.761,
                            124.668,
                            126.2205,
                            126,
                            123.499,
                            119.0505,
                            114,
                            112.6425,
                            110.156,
                            110.7805,
                            113.184,
                            113.9925,
                            115.8,
                            112.853,
                            110.034,
                            109.898,
                            108.819,
                            105.4,
                            108.175,
                            112.6655,
                            115.187,
                            121.9945,
                            125.179,
                            125.61,
                            124.4,
                            128.99,
                            124.1,
                            123.75,
                            121.3,
                            114.5,
                            106.54,
                            104.88,
                            109.06,
                            104.58,
                            106.98
                          ]

        var title = "Homework 4: D3 and Data Visualization"

        d3.select(this.myRef.current).append("h3")
            .text(title)
            .attr("id", "header")

        let size = 500;
        let svg = d3.select(this.myRef.current)
                        .append('svg')
                        .attr('width', size + 250)
                        .attr('height', size + 100);

           var maxs = []
           maxs.push(d3.max(meta))
           maxs.push(d3.max(googl))
           maxs.push(d3.max(amzn))
           maxs.push(d3.max(tsla))
   
           var mins = []
           mins.push(d3.min(meta))
           mins.push(d3.min(googl))
           mins.push(d3.min(amzn))
           mins.push(d3.min(tsla))
   
           var maximum = d3.max(maxs)
           var minimum = d3.min(mins)
   
           var xScale = d3.scaleLinear()
               .domain(d3.extent(this.timestamps))
               .range([0, 700])
               .nice()
   
           var yScale = d3.scaleLinear()
               .domain([minimum, maximum])
               .range([500, 0])
               .nice()
   
           var line = d3.line()
               .y(d => yScale(d["y"]))
               .x(d => xScale(d["x"]))

            let metaData = [], googlData = [], amznData = [], tslaData = []

            this.timestamps.forEach(function(d, i) {
                   let obj = {}
                   let obj2 = {}
                   let obj3 = {}
                   let obj4 = {}
                   obj.x = obj2.x = obj3.x = obj4.x = d
                   obj.y = meta[i]
                   metaData.push(obj)
                   obj2.y = googl[i]
                   googlData.push(obj2)
                   obj3.y = amzn[i]
                   amznData.push(obj3)
                   obj4.y = tsla[i]
                   tslaData.push(obj4)
               })

            var xAxis = d3.axisBottom(xScale).tickFormat(function(d, i) {
                let date = new Date(d * 1000)
                let month = date.toLocaleString('en-us', { month: 'short' }); /* Jun */
                return month + " " + date.getDate().toString()
            })

            svg.append("g")
                .attr("transform", "translate(50, 550)")

            svg.append("rect")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("fill", "lightgray")

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(40," + 510 + ")")
                .call(xAxis)
                .selectAll("text")
                    .attr("transform", "translate(-10,30)rotate(-90)")

            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(40, 10)")
                .call(d3.axisLeft(yScale))

            svg.append("path")
                .datum(metaData)
                .attr("fill", "none")
                .attr("stroke", "red")
                .attr("stroke-width", 1.5)
                .attr("d", line)

            svg.append("g")
                .selectAll("circle")
                .data(metaData)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("fill", "red")
                .attr("cx", (d)=>xScale(d['x']))
                .attr("cy", (d)=>yScale(d['y']))

            svg.append("path")
                .datum(googlData)
                .attr("fill", "none")
                .attr("stroke", "blue")
                .attr("stroke-width", 1.5)
                .attr("d", line)

            svg.append("g")
                .selectAll("circle")
                .data(googlData)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("fill", "blue")
                .attr("cx", (d)=>xScale(d['x']))
                .attr("cy", (d)=>yScale(d['y']))

            svg.append("path")
                .datum(amznData)
                .attr("fill", "none")
                .attr("stroke", "green")
                .attr("stroke-width", 1.5)
                .attr("d", line)
    
            svg.append("g")
                .selectAll("circle")
                .data(amznData)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("fill", "green")
                .attr("cx", (d)=>xScale(d['x']))
                .attr("cy", (d)=>yScale(d['y']))
    
            svg.append("path")
                .datum(tslaData)
                .attr("fill", "none")
                .attr("stroke", "yellow")
                .attr("stroke-width", 1.5)
                .attr("d", line)
    
            svg.append("g")
                .selectAll("circle")
                .data(tslaData)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("fill", "yellow")
                .attr("cx", (d)=>xScale(d['x']))
                .attr("cy", (d)=>yScale(d['y']))

            let text = svg.append('text')
                svg.on('mousemove', function(e, d){
                    let [x, y] = d3.pointer(e, this)
                    text.attr("x", x+10)
                        .attr("y", y).text(`${yScale.invert(y).toFixed(2)}`)
                })
        
                // legend
                var legend_keys = ["META", "GOOGL", "AMZN", "TSLA"]
                const colDict = {META: 'red', GOOGL: 'blue', AMZN: 'green', TSLA: 'yellow'}
        
                var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
                    .enter().append("g")
                    .attr("class","lineLegend")
                    .attr("transform", function (d,i) {
                            return "translate(50," + (i*20)+")";
                        });
                
                lineLegend.append("text").text(function (d) {return d;})
                    .attr("x", 400)
                    .attr("y", 200)
                    .attr("fill", d => colDict[d])
      }

      render() {
        return (
            <div ref={this.myRef}></div>
        )
      }
}

export default App

// function DrawChart() {
//     var margin = {
//         top: 50,
//         right: 500,
//         bottom: 300,
//         left: 50
//     },
//         width = window.innerWidth - margin.left - margin.right,
//         height = window.innerHeight - margin.top - margin.bottom
    
//     var title = "Homework 4: D3 and Data Visualization"
    
//     d3.select("#chart")
//         .append("h3")
//         .text(title)
//         .attr("id", "h4")
    
//     // load data and create graph    
//             var timestamps = [
//                 1647610200,
//                 1647869400,
//                 1647955800,
//                 1648042200,
//                 1648128600,
//                 1648215000,
//                 1648474200,
//                 1648560600,
//                 1648647000,
//                 1648733400,
//                 1648819800,
//                 1649079000,
//                 1649165400,
//                 1649251800,
//                 1649338200,
//                 1649424600,
//                 1649683800,
//                 1649770200,
//                 1649856600,
//                 1649943000,
//                 1650288600,
//                 1650375000,
//                 1650461400,
//                 1650547800,
//                 1650634200,
//                 1650893400,
//                 1650979800,
//                 1651066200,
//                 1651152600,
//                 1651239000,
//                 1651498200,
//                 1651584600,
//                 1651671000,
//                 1651757400,
//                 1651843800,
//                 1652103000,
//                 1652189400,
//                 1652275800,
//                 1652362200,
//                 1652448600,
//                 1652707800,
//                 1652794200,
//                 1652880600,
//                 1652967000,
//                 1653053400,
//                 1653312600,
//                 1653399000,
//                 1653485400,
//                 1653571800,
//                 1653658200,
//                 1654003800,
//                 1654090200,
//                 1654176600,
//                 1654263000,
//                 1654522200,
//                 1654608600,
//                 1654695000,
//                 1654781400,
//                 1654867800,
//                 1655127000,
//                 1655213400,
//                 1655299800,
//                 1655386200,
//                 1655472600
//               ]
//             var meta = [
//                 216.8,
//                 214.71,
//                 219.46,
//                 216.8,
//                 220.67,
//                 225.5,
//                 224.04,
//                 230.89,
//                 231.15,
//                 228.49,
//                 227.28,
//                 234.35,
//                 236.86,
//                 228.99,
//                 225.52,
//                 225.13,
//                 220.61,
//                 222.03,
//                 216.61,
//                 214.99,
//                 213.38,
//                 218.43,
//                 214.16,
//                 202.97,
//                 192.72,
//                 187.18,
//                 187.19,
//                 181.21,
//                 208.53,
//                 212.48,
//                 211.88,
//                 214.9,
//                 224.3,
//                 220.17,
//                 209.38,
//                 202.57,
//                 202.96,
//                 200.67,
//                 198.05,
//                 199.89,
//                 205.37,
//                 205.46,
//                 201,
//                 195.29,
//                 197.91,
//                 196.99,
//                 183.68,
//                 185.45,
//                 192.83,
//                 195.33,
//                 197.6,
//                 199.53,
//                 200.94,
//                 196.61,
//                 196.92,
//                 196.53,
//                 202.03,
//                 199.45,
//                 183.1,
//                 172.58,
//                 166.75,
//                 172.16,
//                 165.08,
//                 165.9
//               ]
//             var googl = [
//                 2724.88,
//                 2741,
//                 2821,
//                 2791.77,
//                 2832.38,
//                 2840.7,
//                 2840.05,
//                 2875.87,
//                 2854.41,
//                 2842.16,
//                 2809.42,
//                 2874.24,
//                 2859.81,
//                 2787.21,
//                 2743.29,
//                 2713.4,
//                 2641.85,
//                 2632,
//                 2606.68,
//                 2609.59,
//                 2564.25,
//                 2606.66,
//                 2627.98,
//                 2601.97,
//                 2508.04,
//                 2465.55,
//                 2450.2,
//                 2344.84,
//                 2392.99,
//                 2358.4,
//                 2334.91,
//                 2368.84,
//                 2457.09,
//                 2420.78,
//                 2351.43,
//                 2301.54,
//                 2325,
//                 2327.29,
//                 2285.9,
//                 2357.5,
//                 2323.4,
//                 2338,
//                 2308,
//                 2260.2,
//                 2243.67,
//                 2242.95,
//                 2129.17,
//                 2130,
//                 2172.99,
//                 2246.36,
//                 2314.7,
//                 2342.03,
//                 2357.99,
//                 2326.43,
//                 2386.94,
//                 2353.82,
//                 2371.41,
//                 2365.98,
//                 2265.58,
//                 2175.83,
//                 2158.49,
//                 2228.47,
//                 2172.97,
//                 2173.99
//               ]
//             var amzn = [
//                 907.85,
//                 942.85,
//                 997.86,
//                 1040.7,
//                 1024.49,
//                 1021.8,
//                 1097.88,
//                 1114.77,
//                 1113.95,
//                 1103.14,
//                 1094.75,
//                 1149.91,
//                 1152.87,
//                 1079,
//                 1076.59,
//                 1048.44,
//                 1008.47,
//                 1021.19,
//                 1026.24,
//                 1012.71,
//                 1014.92,
//                 1034.94,
//                 1034,
//                 1092.22,
//                 1034.85,
//                 1008.62,
//                 1000,
//                 918,
//                 900,
//                 934.4,
//                 906.36,
//                 924.08,
//                 955.5,
//                 945.6,
//                 888,
//                 845.63,
//                 825.36,
//                 809.77,
//                 759.66,
//                 787.35,
//                 769.76,
//                 764.48,
//                 760.5,
//                 734,
//                 721.58,
//                 679.96,
//                 653.92,
//                 669.32,
//                 718.67,
//                 759.8,
//                 778.8,
//                 771.98,
//                 792.63,
//                 743.39,
//                 734.6,
//                 719.99,
//                 749.89,
//                 766.64,
//                 718.5,
//                 679.9,
//                 678.99,
//                 706.99,
//                 675.5,
//                 662.91
//               ]
//             var tsla = [
//                 161.594,
//                 163.084,
//                 166.167,
//                 166.37,
//                 164.1185,
//                 165.3685,
//                 169.0375,
//                 170.8315,
//                 168.9505,
//                 166.495,
//                 165.827,
//                 168.3945,
//                 168.1105,
//                 162.2,
//                 160.079,
//                 157.3685,
//                 154.1365,
//                 155.099,
//                 156.025,
//                 155.897,
//                 154.0395,
//                 158.649,
//                 157.6025,
//                 156.738,
//                 149.615,
//                 146.2215,
//                 144.856,
//                 141.9485,
//                 145.9375,
//                 130.761,
//                 124.668,
//                 126.2205,
//                 126,
//                 123.499,
//                 119.0505,
//                 114,
//                 112.6425,
//                 110.156,
//                 110.7805,
//                 113.184,
//                 113.9925,
//                 115.8,
//                 112.853,
//                 110.034,
//                 109.898,
//                 108.819,
//                 105.4,
//                 108.175,
//                 112.6655,
//                 115.187,
//                 121.9945,
//                 125.179,
//                 125.61,
//                 124.4,
//                 128.99,
//                 124.1,
//                 123.75,
//                 121.3,
//                 114.5,
//                 106.54,
//                 104.88,
//                 109.06,
//                 104.58,
//                 106.98
//               ]
    
//             var maxs = []
//             maxs.push(d3.max(meta))
//             maxs.push(d3.max(googl))
//             maxs.push(d3.max(amzn))
//             maxs.push(d3.max(tsla))
    
//             var mins = []
//             mins.push(d3.min(meta))
//             mins.push(d3.min(googl))
//             mins.push(d3.min(amzn))
//             mins.push(d3.min(tsla))
    
//             var maximum = d3.max(maxs)
//             var minimum = d3.min(mins)
    
//             var xScale = d3.scaleLinear()
//                 .domain(d3.extent(timestamps))
//                 .range([0, width])
//                 .nice()
    
//             var yScale = d3.scaleLinear()
//                 .domain([minimum, maximum])
//                 .range([height, 0])
//                 .nice()
    
//             var line = d3.line()
//                 .y(d => yScale(d["y"]))
//                 .x(d => xScale(d["x"]))
    
//             let metaData = [], googlData = [], amznData = [], tslaData = []
    
//             timestamps.forEach(function(d, i) {
//                 let obj = {}
//                 let obj2 = {}
//                 let obj3 = {}
//                 let obj4 = {}
//                 obj.x = obj2.x = obj3.x = obj4.x = d
//                 obj.y = meta[i]
//                 metaData.push(obj)
//                 obj2.y = googl[i]
//                 googlData.push(obj2)
//                 obj3.y = amzn[i]
//                 amznData.push(obj3)
//                 obj4.y = tsla[i]
//                 tslaData.push(obj4)
//             })
    
//             var xAxis = d3.axisBottom(xScale).tickFormat(function(d, i) {
//                 let date = new Date(d * 1000)
//                 let month = date.toLocaleString('en-us', { month: 'short' }); /* Jun */
//                 return month + " " + date.getDate().toString()
//             })
    
//             var svg = d3.select("#chart").append("svg")
//                 .attr("height", window.innerHeight - (margin.bottom / 2))
//                 .attr("width", window.innerWidth - margin.right + margin.left)
//                 .append("g")
//                 .attr("transform", "translate(" + margin.left + "," + (margin.top + 50) + ")")
    
//             svg.append("rect")
//                 .attr("width", "100%")
//                 .attr("height", "80%")
//                 .attr("fill", "lightgray")
    
//             svg.append("g")
//                 .attr("class", "x axis")
//                 .attr("transform", "translate(0," + height + ")")
//                 .call(xAxis)
//                 .selectAll("text")
//                     .attr("transform", "translate(-10,30)rotate(-90)")
    
    
//             svg.append("g")
//                 .attr("class", "y axis")
//                 .call(d3.axisLeft(yScale))
    
    
//             svg.append("path")
//                 .datum(metaData)
//                 .attr("fill", "none")
//                 .attr("stroke", "red")
//                 .attr("stroke-width", 1.5)
//                 .attr("d", line)
    
//             svg.append("g")
//                 .selectAll("circle")
//                 .data(metaData)
//                 .enter()
//                 .append("circle")
//                 .attr("r", 5)
//                 .attr("fill", "red")
//                 .attr("cx", (d)=>xScale(d['x']))
//                 .attr("cy", (d)=>yScale(d['y']))
    
//             svg.append("path")
//                 .datum(googlData)
//                 .attr("fill", "none")
//                 .attr("stroke", "blue")
//                 .attr("stroke-width", 1.5)
//                 .attr("d", line)
    
//             svg.append("g")
//                 .selectAll("circle")
//                 .data(googlData)
//                 .enter()
//                 .append("circle")
//                 .attr("r", 5)
//                 .attr("fill", "blue")
//                 .attr("cx", (d)=>xScale(d['x']))
//                 .attr("cy", (d)=>yScale(d['y']))
    
//             svg.append("path")
//                 .datum(amznData)
//                 .attr("fill", "none")
//                 .attr("stroke", "green")
//                 .attr("stroke-width", 1.5)
//                 .attr("d", line)
    
//             svg.append("g")
//                 .selectAll("circle")
//                 .data(amznData)
//                 .enter()
//                 .append("circle")
//                 .attr("r", 5)
//                 .attr("fill", "green")
//                 .attr("cx", (d)=>xScale(d['x']))
//                 .attr("cy", (d)=>yScale(d['y']))
    
//             svg.append("path")
//                 .datum(tslaData)
//                 .attr("fill", "none")
//                 .attr("stroke", "yellow")
//                 .attr("stroke-width", 1.5)
//                 .attr("d", line)
    
//             svg.append("g")
//                 .selectAll("circle")
//                 .data(tslaData)
//                 .enter()
//                 .append("circle")
//                 .attr("r", 5)
//                 .attr("fill", "yellow")
//                 .attr("cx", (d)=>xScale(d['x']))
//                 .attr("cy", (d)=>yScale(d['y']))
    
//             let text = svg.append('text')
//             svg.on('mousemove', function(e, d){
//                 let [x, y] = d3.pointer(e, this)
//                 text.attr("x", x+10)
//                     .attr("y", y).text(`${yScale.invert(y).toFixed(2)}`)
//             })
    
//             // legend
//             var legend_keys = ["META", "GOOGL", "AMZN", "TSLA"]
//             const colDict = {META: 'red', GOOGL: 'blue', AMZN: 'green', TSLA: 'yellow'}
    
//             var lineLegend = svg.selectAll(".lineLegend").data(legend_keys)
//                 .enter().append("g")
//                 .attr("class","lineLegend")
//                 .attr("transform", function (d,i) {
//                         return "translate(" + (margin.left) + "," + (i*20)+")";
//                     });
            
//             lineLegend.append("text").text(function (d) {return d;})
//                 .attr("x", window.innerHeight - (margin.bottom / 2) + 100)
//                 .attr("y", 50)
//                 .attr("fill", d => colDict[d])
    
//             console.log(+svg.width)
// }

// export default DrawChart