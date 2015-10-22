
blindApp
    .filter('asciiMath', function() {
        return function(input) {
            input = input || '';
            var asciiMathParser = new AsciiMathParser(document);

            var mathElement = asciiMathParser.parseAsciiMathInput(input);

            var mathmlString = AsciiMathParserBrowserUtilities.serializeXmlNode(mathElement);

            return mathmlString;
        };
    })

blindApp
    .filter('trust', ['$sce',function($sce) {
        return function(value, type) {
            return $sce.trustAs(type || 'html', value);
        }
    }]);

blindApp
    .filter('momentTimeAgo', function($sce) {
        return function(value, type) {
            return moment(value).fromNow();
        }
    });