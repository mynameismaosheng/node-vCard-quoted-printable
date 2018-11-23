var util = require('util');
var vCard = require('./vCardPlug');
var card = new vCard();
var quotedPrintable = require('quoted-printable');
var utf8 = require('utf8');
card.readFile("a.vcf", function(err, json) {
  const aName = []
  json.length ? json : json = [json];
  json.forEach(item => {
    var oitem = {}
    try{
      oitem.name = utf8.decode(quotedPrintable.decode(item.FN.value))
    }catch{
      oitem.name = "未知:" + item.FN.value
    }
    oitem.mobile = item.TEL.value
    aName.push(oitem)
  })
  console.log(aName)
});
