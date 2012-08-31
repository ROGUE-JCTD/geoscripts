var gs = require('../lib/geoscript');
var wkt = require('../lib/geoscript/geom/io/wkt');

//needs the geom and the feature type
exports.validateIntersect = function (params, features) {

    var testGeom = wkt.read(params.geom);
    
    var intersects = false;
    
   // print(features[0].geometry.intersects(features[1].geometry));
    for(var i = 0; i < features.length; i++){
        if(features[i].id != params.fid)
        {
            print(params.fid + ", " + features[i].id);
            if(features[i].geometry.intersects(testGeom) == true)
            {
                intersects = true;
                break;
            }
        }
    }
    
    var jsonObject = {
        intersects: intersects
    };
    
    return jsonObject;
}