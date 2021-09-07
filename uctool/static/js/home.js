var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http, $rootScope) {

  $scope.dataSource = true;
  $scope.dataDrop = false;
  $scope.volDrop = false;
  $scope.featDrop = false;
  $scope.rowDrop = false;

  $scope.warehousemenu = false;
  $scope.bdlmenu = false;
  $scope.dataSource = false;
  $scope.volDrop = false;
  $scope.featDrop = false;
  $scope.rowDrop = false;

  $scope.dataType = false;
  $scope.dataDrop = false;
  $scope.dataSource = false;
  $scope.warehousemenu = false;
  $scope.bdlmenu = false;

  $scope.showMenu = function(val) {
    console.log(val);
    if (val == 'Data Sources') {
      // $scope.dataDrop = false;
      // $scope.volDrop = false;
      // $scope.featDrop = false;
      // $scope.rowDrop = false;
      $scope.dataSource = true;
    } else {
      $scope.dataSource = false;
    }
    if (val == 'Type of Data') {
      // $scope.warehousemenu = false;
      // $scope.bdlmenu = false;
      // $scope.dataSource = false;
      // $scope.volDrop = false;
      // $scope.featDrop = false;
      // $scope.rowDrop = false;
      $scope.dataType = true;
    } else {
      $scope.dataType = false;
    }
    if (val == 'Volume of Data') {
      // $scope.dataType = false;
      // $scope.dataDrop = false;
      // $scope.dataSource = false;
      // $scope.warehousemenu = false;
      // $scope.bdlmenu = false;
      $scope.volume = true;
    } else {
      $scope.volume = false;
    }
    if (val == 'Rendition') {
      $scope.rendition = true;
    } else {
      $scope.rendition = false;
    }
    if (val == 'Monitoring') {
      $scope.monitoring = true;
    } else {
      $scope.monitoring = false;
    }
    if (val == 'Deployment') {
      $scope.deploy = true;
    } else {
      $scope.deploy = false;
    }
    if (val == 'Solution') {
      $scope.solution = true;
    } else {
      $scope.solution = false;
    }
    if (val == 'Pre-processing Requests') {
      $scope.processing = true;
    } else {
      $scope.processing = false;
    }
    if (val == 'Algorithm Type') {
      $scope.algorithm = true;
    } else {
      $scope.algorithm = false;
    }

    if (val == 'dataSource') {
      $scope.input = true;
      $scope.warehousemenu = false;
      $scope.bdlmenu = false;
    } else {
      $scope.input = false;
    }

    var x = document.getElementById("input");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }


  }

  $scope.showMenu1 = function(val) {

    console.log(val);

    if (val == 'warehouse') {
      $scope.dataSource = true;
      $scope.input = false;
      $scope.bdlmenu = false;
      $scope.warehousemenu = true;
    } else {
      $scope.warehousemenu = false;
      $scope.dataSource = false;
    }

    var w = document.getElementById("warehouse");
    if (w.style.display === "none") {
      w.style.display = "block";
    } else {
      w.style.display = "none";
    }
  }

  $scope.showMenu2 = function(val) {
    if (val == 'bdl') {
      $scope.dataSource = true;
      $scope.input = false;
      $scope.warehousemenu = false;
      $scope.bdlmenu = true;
    } else {
      $scope.bdlmenu = false;
    }

    var y = document.getElementById("sec");

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

  $scope.showDataMenu = function(val) {
    if (val == 'dataType') {
      $scope.dataType = true;
      $scope.dataDrop = true;
    } else {
      $scope.dataDrop = false;
    }

    var d = document.getElementById("dataDropid");

    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
    }
  }

  // Observations starts

  $scope.showObsMenu = function(val) {
    if (val == 'volume') {
      $scope.dataDrop = false;
      $scope.dataType = false;
      $scope.volDrop = true;
      $scope.featDrop = false;
      $scope.rowDrop = false;
    } else {
      $scope.volDrop = false;
    }

    var v = document.getElementById("volDropid");

    if (v.style.display === "none") {
      v.style.display = "block";
    } else {
      v.style.display = "none";
    }
  }

  // Features starts

  $scope.showFsMenu = function(val) {
    if (val == 'feature') {
      $scope.volume = true;
      $scope.rowDrop = false;
      $scope.volDrop = false;
      $scope.featDrop = true;
    } else {
      $scope.featDrop = false;
    }

    var f = document.getElementById("featDropId");

    if (f.style.display === "none") {
      f.style.display = "block";
    } else {
      f.style.display = "none";
    }
  }

  // Rows starts

  $scope.showRsMenu = function(val) {
    if (val == 'row') {
      $scope.volume = true;
      $scope.volDrop = false;
      $scope.featDrop = false;
      $scope.rowDrop = true;
    } else {
      $scope.rowDrop = false;
    }

    var r = document.getElementById("rowDropId");

    if (r.style.display === "none") {
      r.style.display = "block";
    } else {
      r.style.display = "none";
    }
  }


  $scope.equiv = 1
  $scope.equivTxt = '1'

  $scope.getEquiv = function(val) {
    if (val == '1') {
      $scope.equiv = 1
      $scope.equivTxt = '1'
    }
    if (val == '2 or 3') {
      $scope.equiv = 3
      $scope.equivTxt = '2 or 3'
    }
    if (val == '3 to 5') {
      $scope.equiv = 5
      $scope.equivTxt = '3 to 5'
    }
    if (val == '5+') {
      $scope.equiv = 7
      $scope.equivTxt = '5+'
    }
    $rootScope.etotal = $scope.equiv
    $scope.totalCall()
  }

  $scope.wequiv = 1
  $scope.wequivTxt = 'None'

  $scope.getwEquiv = function(val) {
    if (val == 'None') {
      $scope.wequiv = 1
      $scope.wequivTxt = 'None'
    }
    if (val == 'Single') {
      $scope.wequiv = 3
      $scope.wequivTxt = 'Single'
    }
    if (val == 'Multiple connected') {
      $scope.wequiv = 5
      $scope.wequivTxt = 'Multiple connected'
    }
    if (val == 'Multiple disparate') {
      $scope.wequiv = 7
      $scope.wequivTxt = 'Multiple disparate'
    }
    $rootScope.wtotal = $scope.wequiv
    $scope.totalCall()
  }

  $scope.bequiv = 1
  $scope.bequivTxt = 'None'
  $scope.getbEquiv = function(val) {
    if (val == 'None') {
      $scope.bequiv = 1
      $scope.bequivTxt = 'None'
    }
    if (val == 'Data') {
      $scope.bequiv = 3
      $scope.bequivTxt = 'Data Lake'
    }
    if (val == 'BDL') {
      $scope.bequiv = 5
      $scope.bequivTxt = 'On-Prem BDL + integrated apps'
    }
    if (val == 'Cloud') {
      $scope.bequiv = 7
      $scope.bequivTxt = 'Cloud integration'
    }
    $rootScope.btotal = $scope.bequiv
    $scope.totalCall()
  }

  $scope.dequiv = 1
  $scope.dequivTxt = '1'

  $scope.getdEquiv = function(val) {
    if (val == 'Structured') {
      $scope.dequiv = 1
      $scope.dequivTxt = 'Structured'
    }
    if (val == 'Unstructured') {
      $scope.dequiv = 3
      $scope.dequivTxt = 'Unstructured'
    }
    if (val == 'Combined') {
      $scope.dequiv = 5
      $scope.dequivTxt = 'Combined'
    }
    if (val == 'Combined and integrated') {
      $scope.dequiv = 7
      $scope.dequivTxt = 'Combined and integrated'
    }
    $rootScope.dtotal = $scope.dequiv
    $scope.secondCall()
  }

  // Observations starts
  $scope.vequiv = 1
  $scope.vequivTxt = 'Between 60 and 1000'

  $scope.getvEquiv = function(val) {
    if (val == '60') {
      $scope.vequiv = 1
      $scope.vequivTxt = 'Between 60 and 1000'
    }
    if (val == '1000') {
      $scope.vequiv = 3
      $scope.vequivTxt = 'Between 1000 and 10000'
    }
    if (val == '10000') {
      $scope.vequiv = 5
      $scope.vequivTxt = 'Between 10000 and 100000'
    }
    if (val == 'Big') {
      $scope.vequiv = 7
      $scope.vequivTxt = 'Big Data'
    }
    $rootScope.ototal = $scope.vequiv
    $scope.volCall()
  }

  // Features starts
  $scope.fequiv = 1
  $scope.fequivTxt = 'Between 2 and 10'

  $scope.getfEquiv = function(val) {
    if (val == '2') {
      $scope.fequiv = 1
      $scope.fequivTxt = 'Between 2 and 10'
    }
    if (val == '10') {
      $scope.fequiv = 3
      $scope.fequivTxt = 'Between 10 and 50'
    }
    if (val == '50') {
      $scope.fequiv = 5
      $scope.fequivTxt = 'Between 50 and 1000'
    }
    if (val == 'More') {
      $scope.fequiv = 7
      $scope.fequivTxt = 'More than 2000'
    }
    $rootScope.ftotal = $scope.fequiv
    $scope.volCall()
  }

  // Rows starts
  $scope.requiv = 1
  $scope.requivTxt = 'More than 50:1'

  $scope.getRsEquiv = function(val) {
    if (val == '50') {
      $scope.requiv = 1
      $scope.requivTxt = 'More than 50:1'
    }
    if (val == '20') {
      $scope.requiv = 3
      $scope.requivTxt = 'More than 20:1'
    }
    if (val == 'Less20') {
      $scope.requiv = 5
      $scope.requivTxt = 'Less than 20:1'
    }
    if (val == 'Either') {
      $scope.requiv = 7
      $scope.requivTxt = 'Either'
    }
    $rootScope.rtotal = $scope.requiv
    $scope.volCall()
  }

  $scope.stotal = 7
  $scope.ptotal = 7
  $scope.atotal = 7
  $scope.dtotal = 14
  $scope.mtotal = 14
  $scope.rtotal = 7

  $scope.vtotal = 3
  $scope.totalCall = function() {
    if ($rootScope.etotal && $rootScope.wtotal && $rootScope.btotal) {
      $scope.vtotal = $rootScope.etotal + $rootScope.wtotal + $rootScope.btotal
      $scope.gaugeCalc()
    }
  }

  $scope.datatotal = 1
  $scope.secondCall = function() {
    if ($rootScope.dtotal) {
      $scope.datatotal = $rootScope.dtotal
      $scope.gaugeCalc()
    }
  }


  // for volume of data

  $scope.voltotal = 3
  $scope.volCall = function() {
    if ($rootScope.ototal && $rootScope.ftotal && $rootScope.rtotal) {
      $scope.voltotal = $rootScope.ototal + $rootScope.ftotal + $rootScope.rtotal
      $scope.gaugeCalc()
    }
  }

  // && $rootScope.ototal && $rootScope.ftotal && $rootScope.rtotal
  $scope.gaugeCalc = function() {
    console.log($scope.vtotal, $scope.datatotal);
    if ($scope.vtotal > 3) {
      $rootScope.gauge = 60
      $rootScope.gauge += $scope.vtotal
    }
    if ($scope.datatotal > 1) {
      $rootScope.gauge = 62
      $rootScope.gauge += $scope.datatotal
    }
    if ($scope.voltotal > 3) {
      $rootScope.gauge = 60
      $rootScope.gauge += $scope.voltotal
    }
    if ($scope.datatotal > 1 && $scope.vtotal > 3) {
      $rootScope.gauge = 59
      $rootScope.gauge += $scope.datatotal + $scope.vtotal
    }
    if ($scope.vtotal > 3 && $scope.voltotal > 3) {
      $rootScope.gauge = 54
      $rootScope.gauge += $scope.voltotal + $scope.vtotal
    }
    if ($scope.datatotal > 1 && $scope.voltotal > 3) {
      $rootScope.gauge = 59
      $rootScope.gauge += $scope.datatotal + $scope.voltotal
    }
    if ($scope.datatotal > 1 && $scope.vtotal > 3 && $scope.voltotal > 3) {
      $rootScope.gauge = 56
      $rootScope.gauge += $scope.datatotal + $scope.vtotal + $scope.voltotal
    }
    console.log($rootScope.gauge);
    $scope.getGauge()
  }

  $scope.clearAll = function() {
    $scope.datatotal = 0
    $scope.vtotal = 0
    $scope.voltotal = 0
    $scope.stotal = 0
    $scope.ptotal = 0
    $scope.atotal = 0
    $scope.dtotal = 0
    $scope.mtotal = 0
    $scope.rtotal = 0
    $scope.getGauge('reset')

    $scope.fsa = false;
    $scope.av = false;
    $scope.cp = false;
    $scope.mf = false;
    $scope.al = false;
    $scope.text = '';
    $scope.value = '';
    $scope.score = ''
    // for Stakeholder
    $scope.a = false;
    $scope.b = false;
    $scope.c = false;
    $scope.d = false;
    $scope.e = false;
    $scope.f = false;
    $scope.text = '';
    $scope.value = '';
    $scope.score = ''
    // for complexity Range
    $scope.text = ''
    $scope.value = '';
    $scope.score = ''
    // for Business
    $scope.btext = ''
    $scope.value = '';
    $scope.score = ''
  }

  $scope.cscore = 15.8
  $scope.rank = 1
  $scope.save = function(){
    $scope.cscore = 10.3
    $scope.rank = 2
  }

$scope.showCase1 = true;
$scope.showCase2 = true;
  $scope.viewCase = function(txt){
    if (txt == '1') {
      $scope.showCase11 = true;
      $scope.showCase2 = false;
      $scope.showCase1 = true;
    }
    if (txt == '2') {
      $scope.showCase22 = true;
      $scope.showCase1 = false;
      $scope.showCase2 = true;
    }
    if (txt == 'table') {
      $scope.showCase22 = false;
      $scope.showCase11 = false;
      $scope.showCase1 = true;
      $scope.showCase2 = true;
    }
  }

  $scope.ou = true;
  $scope.bt = true;
  $scope.getForms = function(val) {
    if (val == 'ou') {
      $scope.ou = true;
    } else {
      $scope.ou = false;
    }
    if (val == 'st') {
      $scope.st = true;
    } else {
      $scope.st = false;
    }
    if (val == 'fs') {
      $scope.fs = true;
    } else {
      $scope.fs = false;
    }
    if (val == 'bs') {
      $scope.bs = true;
    } else {
      $scope.bs = false;
    }
    if (val == 'bt') {
      $scope.bt = true;
    } else {
      $scope.bt = false;
    }
    if (val == 'sc') {
      $scope.sc = true;
    } else {
      $scope.sc = false;
    }
  }


  // selection starts
  $scope.fsa = true;
  $scope.bbtext = 'FS';
  $scope.value = 1;
  $scope.score = 0.5
  $scope.getBu = function(inp) {
    if (inp == 'fs') {
      $scope.fsa = true;
      $scope.bbtext = 'FS';
      $scope.value = 1;
      $scope.score = 0.5
    } else {
      $scope.fsa = false;
    }
    if (inp == 'av') {
      $scope.av = true;
      $scope.bbtext = 'AVI';
      $scope.value = 2;
      $scope.score = 1.0
    } else {
      $scope.av = false;
    }
    if (inp == 'cp') {
      $scope.cp = true;
      $scope.bbtext = 'CPR';
      $scope.value = 3;
      $scope.score = 1.5
    } else {
      $scope.cp = false;
    }
    if (inp == 'mf') {
      $scope.mf = true;
      $scope.bbtext = 'MFG';
      $scope.value = 4;
      $scope.score = 2.0
    } else {
      $scope.mf = false;
    }
    if (inp == 'al') {
      $scope.al = true;
      $scope.bbtext = 'ALS';
      $scope.value = 5;
      $scope.score = 2.5
    } else {
      $scope.al = false;
    }
  }


  // for stakeholder starts
  $scope.a = true;
  $scope.htext = 'A';
  $scope.value = 1;
  $scope.score = 0.5
  $scope.getStake = function(inp) {
    if (inp == 'a') {
      $scope.a = true;
      $scope.htext = 'A';
      $scope.value = 1;
      $scope.score = 0.5
    } else {
      $scope.a = false;
    }
    if (inp == 'b') {
      $scope.b = true;
      $scope.htext = 'B';
      $scope.value = 2;
      $scope.score = 1.0
    } else {
      $scope.b = false;
    }
    if (inp == 'c') {
      $scope.c = true;
      $scope.htext = 'C';
      $scope.value = 3;
      $scope.score = 1.5
    } else {
      $scope.c = false;
    }
    if (inp == 'd') {
      $scope.d = true;
      $scope.htext = 'D';
      $scope.value = 4;
      $scope.score = 2.0
    } else {
      $scope.d = false;
    }
    if (inp == 'e') {
      $scope.e = true;
      $scope.htext = 'E';
      $scope.value = 5;
      $scope.score = 2.5
    } else {
      $scope.e = false;
    }
    if (inp == 'f') {
      $scope.f = true;
      $scope.htext = 'F';
      $scope.value = 6;
      $scope.score = 3
    } else {
      $scope.f = false;
    }
  }


  $scope.text = '1'
  $scope.getRange = function(inp) {
    console.log(inp);
    if (inp == 1) {
      $scope.text = 1
      $scope.value = 2;
      $scope.score = 4
    }
    if (inp == 2) {
      $scope.text = 2
      $scope.value = 4;
      $scope.score = 8
    }
    if (inp == 3) {
      $scope.text = 3
      $scope.value = 6;
      $scope.score = 12
    }
    if (inp == 4) {
      $scope.text = 4
      $scope.value = 8;
      $scope.score = 16
    }
    if (inp == 5) {
      $scope.text = 5
      $scope.value = 10;
      $scope.score = 20
    }
    if (inp == 6) {
      $scope.text = 6
      $scope.value = 12;
      $scope.score = 24
    }
    if (inp == 7) {
      $scope.text = 7
      $scope.value = 14;
      $scope.score = 28
    }
    if (inp == 8) {
      $scope.text = 8
      $scope.value = 16;
      $scope.score = 32
    }
    if (inp == 9) {
      $scope.text = 9
      $scope.value = 18;
      $scope.score = 36
    }
    if (inp == 10) {
      $scope.text = 10
      $scope.value = 20;
      $scope.score = 40
    }
  }

  $scope.btext = 'High'
  $scope.getBusiness = function(inp) {
    if (inp == 'h') {
      $scope.btext = 'High'
      $scope.value = 5;
      $scope.score = 10
    }
    if (inp == 'mh') {
      $scope.btext = 'Moderately High'
      $scope.value = 4;
      $scope.score = 8
    }
    if (inp == 'm') {
      $scope.btext = 'Medium'
      $scope.value = 3;
      $scope.score = 6
    }
    if (inp == 'ml') {
      $scope.btext = 'Moderately Low'
      $scope.value = 2;
      $scope.score = 4
    }
    if (inp == 'l') {
      $scope.btext = 'Low'
      $scope.value = 1;
      $scope.score = 2
    }
  }

  $scope.getGauge = function(txt) {
      $scope.bcca = 63

    if ($rootScope.gauge) {
      $scope.bcca = $rootScope.gauge
    }
    if (txt == 'reset'){
      $scope.bcca = 0
    }
    // else {
    //   $scope.bcca = 63
    // }

    var data = [{
      type: "indicator",
      mode: "gauge+number+delta",
      value: $scope.bcca,
      title: {
        text: "Business Case Score",
        font: {
          size: 24
        }
      },
      // delta: { reference: 400, increasing: { color: "RebeccaPurple" } },
      gauge: {
        axis: {
          range: [null, 105],
          tickwidth: 1,
          tickcolor: "black"
        },
        bar: {
          color: "#e3f2fd"
        },
        bgcolor: "white",
        borderwidth: 1,
        bordercolor: "gray",
        steps: [{
            range: [0, 30],
            color: "#237b00"
          },
          {
            range: [31, 62],
            color: "#FAC100"
          },
          {
            range: [62, 95],
            color: "#EC7928"
          },
          {
            range: [95, 105],
            color: "#750000"
          }
        ],
        // threshold: {
        //   line: { color: "red", width: 4 },
        //   thickness: 0.75,
        //   value: 490
        // }
      }
    }];

    var layout = {
      width: 400,
      height: 300,
      margin: {
        t: 25,
        r: 25,
        l: 25,
        b: 25
      },
      paper_bgcolor: "white",
      font: {
        color: "black",
        family: "Arial"
      }
    };

    Plotly.newPlot('myDiv', data, layout);


  }

  $scope.getGauge()

  // bubble chart starts

  window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      zoomEnabled: true,
      theme: "light2",
      title: {
        text: ""
      },
      axisX: {
        title: "Projects",
        suffix: "",
        minimum: 0,
        maximum: 61,
        gridThickness: 1
      },
      axisY: {
        title: "Score",
        suffix: ""
      },
      data: [{
        type: "bubble",
        // toolTipContent: "<b>{name}</b><br/>Employment: {x}% <br/> Agri-Land: {y}mn sq. km<br/> Population: {z}mn",
        toolTipContent: "<b>Project A</b><br/>",
        dataPoints: [{
            x: 39.6,
            y: 5.225,
            z: 1347,
            name: "China"
          },
          {
            x: 3.3,
            y: 4.17,
            z: 21.49,
            name: "Australia"
          },
          {
            x: 1.5,
            y: 4.043,
            z: 304.09,
            name: "US"
          },
          {
            x: 17.4,
            y: 2.647,
            z: 2.64,
            name: "Brazil"
          },
          {
            x: 8.6,
            y: 2.154,
            z: 141.95,
            name: "Russia"
          },
          {
            x: 52.98,
            y: 1.797,
            z: 1190.86,
            name: "India"
          },
          {
            x: 4.3,
            y: 1.735,
            z: 26.16,
            name: "Saudi Arabia"
          },
          {
            x: 1.21,
            y: 1.41,
            z: 39.71,
            name: "Argentina"
          },
          {
            x: 5.7,
            y: .993,
            z: 48.79,
            name: "SA"
          },
          {
            x: 13.1,
            y: 1.02,
            z: 110.42,
            name: "Mexico"
          },
          {
            x: 2.4,
            y: .676,
            z: 33.31,
            name: "Canada"
          },
          {
            x: 2.8,
            y: .293,
            z: 64.37,
            name: "France"
          },
          {
            x: 3.8,
            y: .46,
            z: 127.70,
            name: "Japan"
          },
          {
            x: 40.3,
            y: .52,
            z: 234.95,
            name: "Indonesia"
          },
          {
            x: 42.3,
            y: .197,
            z: 68.26,
            name: "Thailand"
          },
          {
            x: 31.6,
            y: .35,
            z: 78.12,
            name: "Egypt"
          },
          {
            x: 1.1,
            y: .176,
            z: 61.39,
            name: "U.K"
          },
          {
            x: 3.7,
            y: .144,
            z: 59.83,
            name: "Italy"
          },
          {
            x: 1.8,
            y: .169,
            z: 82.11,
            name: "Germany"
          }
        ]
      }]
    });
    chart.render();

  }


  // bubble chart ends
})
